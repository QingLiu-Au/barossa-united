<template>
  <div class="container px-5 mx-5">
    <div class="text-center">
      <h3>Admin User Management</h3>
    </div>
    <div>
      {{ users }}
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
  },
};
</script>
