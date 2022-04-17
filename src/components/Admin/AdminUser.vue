<template>
  <div class="container px-5">
    <div class="text-center">
      <h3>Admin User Management</h3>
    </div>
    <div class="row">
      <div class="col-md-12 text-right">
        <button class="btn btn-primary mx-2" v-on:click="addNewUserClick">
          Add New User
        </button>
        <button class="btn btn-warning mx-2" v-on:click="saveBtnClick">
          Save
        </button>
      </div>
    </div>
    <div v-if="addNewUser" class="mt-3 row col-md-12">
      <div class="col-md-5 pt-2">
        <input
          type="text"
          class="w-100"
          v-model="newUser.FirstName"
          placeholder="First Name..."
        />
      </div>
      <div class="col-md-5 pt-2">
        <input
          type="text"
          class="w-100"
          v-model="newUser.LastName"
          placeholder="Last Name..."
        />
      </div>
      <div class="col-md-5 pt-2">
        <input
          type="text"
          class="w-100"
          v-model="newUser.Email"
          placeholder="User Email..."
        />
      </div>
      <div class="col-md-5 pt-2">
        <input
          type="text"
          class="w-100"
          v-model="newUser.Password"
          placeholder="User password..."
        />
      </div>
      <!-- <button type="button" class="col-md-2 btn btn-primary">Save</button> -->

      <hr class="my-3" />
    </div>
    <div v-if="!addNewUser">
      <div class="row col-12" v-for="(user, index) in users" :key="index">
        <div class="col-md-5 pt-2">
          <input
            type="text"
            class="w-100"
            :id="getId('fn', index)"
            v-model="user.FirstName"
            disabled
          />
        </div>
        <div class="col-md-5 pt-2">
          <input
            type="text"
            class="w-100"
            :id="getId('ln', index)"
            v-model="user.LastName"
            disabled
          />
        </div>
        <div class="col-md-5 pt-2">
          <input
            type="text"
            class="w-100"
            :id="getId('em', index)"
            v-model="user.Email"
            disabled
          />
        </div>
        <div class="col-md-5 pt-2">
          <input
            type="text"
            class="w-100"
            :id="getId('pw', index)"
            v-model="user.Password"
            placeholder="User Password..."
            disabled
          />
        </div>
        <button type="button" class="col-md-2 btn btn-primary">Edit</button>
        <hr class="my-1" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AdminUser",
  data() {
    return {
      users: [],
      newUser: {
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
      },
      addNewUser: false,
    };
  },
  async created() {
    await this.getAdminUsers();
  },
  methods: {
    async getAdminUsers() {
      try {
        const res = await axios.get("/GetAdminUser.php");
        this.users = res.data;
      } catch (error) {
        alert(error.message);
      }
    },
    getId(name, index) {
      return name + "-" + index;
    },
    addNewUserClick() {
      this.addNewUser = !this.addNewUser;
    },
    saveBtnClick() {
      if (this.users) this.saveNewUser();
      else this.updateUsers();
    },
    saveNewUser() {},
    updateUsers() {},
  },
};
</script>
