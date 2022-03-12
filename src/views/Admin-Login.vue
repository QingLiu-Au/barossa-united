<template></template>

<script>
export default {
  created() {
    this.$store.commit("setUserGroup", "admin");
    this.$router.push("/admin-page");
  },
};
</script>
