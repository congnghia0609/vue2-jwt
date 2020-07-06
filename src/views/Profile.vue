
<template>
  <div class="container">
    <header class="jumbotron">
      <h3>
        <strong>{{currentUser.name}}</strong> Profile
      </h3>
    </header>
    <p>
      <strong>Id:</strong>
      {{currentUser.id}}
    </p>
    <p>
      <strong>Email:</strong>
      {{currentUser.email}}
    </p>
    <p>
      <strong>Role:</strong>
      {{currentUser.role}}
    </p>
    <p>
      <strong>Bio:</strong>
      {{currentUser.bio}}
    </p>
    <p>
      <strong>Avatar:</strong>
      {{currentUser.avt}}
    </p>
    <p>
      <strong>Token:</strong>
      {{currentUser.token.substring(0, 20)}} ... {{currentUser.token.substr(currentUser.token.length - 20)}}
    </p>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    }
  },
  mounted() {
    if(!this.currentUser) {
      this.$router.push('/login');
    }
  }
}
</script>

