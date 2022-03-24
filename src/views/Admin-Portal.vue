<template>
  <!-- <div class="row h-100" style="width: 65vw">
    <div class="col-sm-12 my-auto">
      <div class="card card-block w-25 text-center">
        
      </div>
    </div>
</div> -->
  <div class="container mt-5 pt-5">
    <div class="row">
      <div class="col-sm-12 col-md-6" style="width: 60vw">
        <p class="text-capitalize text-center fs-3">
          welcome to the admin page, please login.
        </p>
        <form>
          <div class="mb-3">
            <label for="Email1" class="form-label">Email address</label>
            <input
              type="email"
              class="form-control"
              id="Email1"
              aria-describedby="emailHelp"
            />
          </div>
          <div class="mb-3">
            <label for="Password" class="form-label">Password</label>
            <input type="password" class="form-control" id="Password" />
          </div>
          <button type="button" class="btn btn-success" v-on:click="login">
            Login
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  created() {
    let user = window.sessionStorage.getItem("borassa-user");
    if (user) {
      this.$router.push("/admin-page");
    }
  },
  methods: {
    async login() {
      let user = {
        isLogin: true,
        email: "user@example.com",
        password: "password",
      };
      try {
        const result = await axios.post("/manageAdminLogin.php", user);
        if (result.data == 1) {
          window.sessionStorage.setItem("borassa-user", JSON.stringify(user));
          this.$store.commit("setUserGroup", "admin");
          this.$router.push("/admin-page");
        } else {
          this.$router.push("/");
        }
      } catch (_) {}
    },
  },
};
</script>
