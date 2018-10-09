<template>
<div>
    <div class="container">
      <div class="row">
        <form novalidate="true">
          <div class="col s8 offset-s2">
            <h3 class="text-center">Login</h3>
            <p>* Please fill all required fields</p>
          </div>
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">email</i>
            <input v-model="email" type="text" class="autocomplete" placeholder="Email">
          </div>
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">vpn_key</i>
            <input v-model="password" type="password" class="autocomplete" placeholder="Password">
          </div>
          <div class="row"></div>
          <br>
          <div class="input-field col s8 offset-s2">
            <input @click="signIn" type="submit" value="Login" class="waves-effect waves-light btn">  
          </div>
        </form>
      </div>
    </div>
  </div>
  </template>

  <script>
    import firebase from 'firebase'
    export default {
      name: 'login',
      data() {
        return {
          email: '',
          password: ''
        }
      },
      methods: {
        signIn() {
          firebase.auth().signInWithEmailAndPassword(this.email, this.password)
          .then(user => {
            console.log(user)
            this.$router.replace('/profile')
          })
          .catch(err => console.log(err)) 
        }
      } 
    }
  </script>