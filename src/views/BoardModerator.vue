
<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{content}}</h3>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";

export default {
  name: 'Moderator',
  data() {
    return {
      content: ''
    };
  },
  mounted() {
    UserService.getModeratorBoard().then(res => {
      this.content = res.data;
    }, error => {
      this.content = (error.res && error.res.data) ||
          error.message ||
          error.toString();
    });
  }
}
</script>
