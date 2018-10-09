<template>

<div>
    <Nav />
    Profile
    <button @click="logout">Logout</button>
</div>
</template>

<script>
  import Nav from './Nav.vue';
  import firebase from 'firebase';
  
  export default {
    name: 'nav-view',
    components: {
      Nav
    },
    methods: {
      logout() {
        firebase.auth().signOut()
        .then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>

<style scoped>
</style>