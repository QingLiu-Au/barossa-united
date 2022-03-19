<template>
  <div class="row h-100" style="width: 65vw">
    <div class="col-sm-12 my-auto">
      <div class="card card-block w-25 text-center">
        <button class="btn btn-success" @click="login">Login</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  async created() {
    //await this.login();
  },
  methods: {
    async login() {
      let user = {
        isLogin: true,
        email: "user@example.com",
        password: "password",
      };
      const result = await axios.post("/manageAdminLogin.php", user);

      if (result.data == 1) {
        window.sessionStorage.setItem("borassa-user", JSON.stringify(user));
        this.$store.commit("setUserGroup", "admin");
        this.$router.push("/admin-page");
      } else {
        this.$router.push("/");
      }
    },
  },
};
</script>
