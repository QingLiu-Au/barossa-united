<template></template>

<script>
import axios from "axios";
export default {
  async created() {
    await this.login();
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
