<template>
  <div>
    <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving">
      <h1>Upload images</h1>
      <div class="dropbox">
        <input
          type="file"
          multiple
          :name="uploadFieldName"
          id="file"
          ref="file"
          :disabled="isSaving"
          @change="
            filesChange($event.target.name, $event.target.files);
            fileCount = $event.target.files.length;
          "
          accept="image/*"
          class="input-file"
        />
        <p v-if="isInitial">
          Drag your file(s) here to begin<br />
          or click to browse
        </p>
        <p v-if="isSaving">Uploading {{ fileCount }} files...</p>
      </div>
    </form>
    <!--SUCCESS-->
    <div v-if="isSuccess">
      <h2>Uploaded {{ uploadedFiles.length }} file(s) successfully.</h2>
      <p>
        <a href="javascript:void(0)" @click="reset()">Upload again</a>
      </p>
      <ul class="list-unstyled">
        <li v-for="(item, i) in uploadedFiles" :key="i">
          <img
            :src="item.url"
            class="img-responsive img-thumbnail"
            :alt="item.originalName"
          />
        </li>
      </ul>
    </div>
    <!--FAILED-->
    <div v-if="isFailed">
      <h2>Uploaded failed.</h2>
      <p>
        <a href="javascript:void(0)" @click="reset()">Try again</a>
      </p>
    </div>

    <!-- iterate media files -->
    <table v-if="mediaFiles.length > 0" class="container my-5">
      <tr>
        <td></td>
        <td>Page</td>
        <td>Identifier</td>
        <td></td>
      </tr>
      <tr v-for="(f, index) in mediaFiles" :key="index">
        <td>
          <img
            class="img-fluid"
            :src="getImageUrl(f.FilePath)"
            style="height: 100px !important"
          />
        </td>
        <td>
          <!-- <input placeholder="Page.." type="text" /> -->
          <v-select
            :options="pages"
            v-model="mediaFiles[index].PageName"
            style="width: 30vw"
          ></v-select>
          <!-- @input="selectedPage(index)" -->
          <!-- v-model="selectedRoute" -->
        </td>
        <td>
          <v-select
            :options="identifier"
            v-model="mediaFiles[index].Identifier"
            style="width: 10vw"
          ></v-select>
          <!-- @input="selectedIdentifier(index)" -->
        </td>
        <td>
          <button type="button" @click="remove(index)" class="btn btn-danger">
            Remove
          </button>
        </td>
      </tr>
    </table>
    <div class="text-center">
      <button type="button" @click="submit" class="btn btn-success">
        SAVE
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
const STATUS_INITIAL = 0,
  STATUS_SAVING = 1,
  STATUS_SUCCESS = 2,
  STATUS_FAILED = 3;

export default {
  name: "UploadFile",
  data() {
    return {
      uploadedFiles: [],
      uploadError: null,
      currentStatus: null,
      uploadFieldName: "photos",
      file: "",
      mediaFiles: [],
      pages: ["Main"],
      identifier: [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
    };
  },
  mounted() {
    this.reset();
  },
  async created() {
    await this.getAllMediaFiles();
    const routeName = this.$store.state.routes
      .filter((_) => _.Public === "1")
      .map((_) => _.RouteName);
    this.pages = this.pages.concat(routeName);
  },
  computed: {
    isInitial() {
      return this.currentStatus === STATUS_INITIAL;
    },
    isSaving() {
      return this.currentStatus === STATUS_SAVING;
    },
    isSuccess() {
      return this.currentStatus === STATUS_SUCCESS;
    },
    isFailed() {
      return this.currentStatus === STATUS_FAILED;
    },
  },
  methods: {
    async getAllMediaFiles() {
      try {
        const res = await axios.get("/getMediaFiles.php?PathName=allpages");
        if (res && res.data) {
          this.mediaFiles = res.data;
        }
      } catch (_) {}
    },
    getImageUrl(path) {
      return axios.defaults.baseURL + "/" + path;
    },
    reset() {
      // reset form to initial state
      this.currentStatus = STATUS_INITIAL;
      this.uploadedFiles = [];
      this.uploadError = null;
    },
    save(formData) {
      // upload data to the server
      this.currentStatus = STATUS_SAVING;
      axios
        .post("/ManageMediaFiles.php", formData)
        .then((x) => {
          this.uploadedFiles = [].concat(x.data);
          this.mediaFiles.push({
            Deleted: 0,
            FileID: "10",
            FileName: "tem.jpg",
            FilePath: x.data,
            Identifier: "",
            PageName: "",
          });
          this.currentStatus = STATUS_SUCCESS;
        })
        .catch((err) => {
          this.uploadError = err.response;
          this.currentStatus = STATUS_FAILED;
        });
    },
    filesChange(fieldName, fileList) {
      // handle file changes
      const formData = new FormData();
      if (!fileList.length) return;
      // append the files to FormData
      Array.from(Array(fileList.length).keys()).map((x) => {
        formData.append(fieldName, fileList[x], fileList[x].name);
      });
      // save it
      this.save(formData);
    },
    async submit() {
      try {
        const res = await axios.post(
          "/ManagePageMediaFiles.php",
          this.mediaFiles
        );
      } catch (_) {}
    },
    remove(index) {
      this.mediaFiles.splice(index, 1);
      this.mediaFiles[index].Deleted = true;
    },
  },
};
</script>

<style>
.dropbox {
  outline: 2px dashed grey; /* the dash box */
  outline-offset: -10px;
  background: lightcyan;
  color: dimgray;
  padding: 10px 10px;
  min-height: 200px; /* minimum height */
  position: relative;
  cursor: pointer;
}

.input-file {
  opacity: 0; /* invisible but it's there! */
  width: 100%;
  height: 200px;
  position: absolute;
  cursor: pointer;
}

.dropbox:hover {
  background: lightblue; /* when mouse over to the drop zone, change color */
}

.dropbox p {
  font-size: 1.2em;
  text-align: center;
  padding: 50px 0;
}
</style>
