<template>
  <div>
    <div class="navbar-fixed">
      <nav class="brown lighten-3">
        <div class="container">
          <div class="nav-wrapper">
            <a href="#" class="brand-logo">Book Trader</a>
            <a href="#" data-target="mobile-nav" class="sidenav-trigger">
              <i class="material-icons">menu</i>
            </a>
            <ul class="right hide-on-med-and-down">
              <li>
                <a href="/#" id="">Home</a>
              </li>
              <li>
                <a href="#popular" id="">Popular</a>
              </li>
              <li>
                <a href="#login" id="">Login</a>
              </li>
              <li>
                <a href="#register" id="">Register</a>
              </li>
              <li>
                <a href="#about" id="">About</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

    <div class="container">
      <div class="row">
        <form novalidate="true">
          <p v-if="errors.length">
            <b>Please correct the following error(s):</b>
            <ul>
              <li v-for="error in errors">{{ error }}</li>
            </ul>
          </p>

          <div class="col s8 offset-s2">
            <h3 class="text-center">Register</h3>
            <p>* Please fill all required fields</p>
          </div>
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">email</i>
            <input v-model="credentials.email" type="text" class="autocomplete" placeholder="Email">
          </div>
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">account_circle</i>
            <input v-model="credentials.username" type="text" class="autocomplete" placeholder="Username">
          </div>
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">vpn_key</i>
            <input v-model="credentials.password" type="password" class="autocomplete" placeholder="Password">
          </div>
          <div class="input-field col s8 offset-s2">
            <i class="material-icons prefix">location_city</i>
            <input v-model="credentials.city" type="text" class="autocomplete" placeholder="Location">
          </div>
          <div class="input-field col s8 offset-s2">
            <label>
              <input type="checkbox" />
              <span>Willing to Trade Face to Face?</span>
            </label>
          </div>
          <br>
          <div class="input-field col s8 offset-s2">
            <label>
              <input type="checkbox" />
              <span>Willing to Trade Using Post?</span>
            </label>
          </div>
          <div class="row"></div>
          <br>
          <div class="input-field col s8 offset-s2">
            <input @click="submit" type="submit" value="Submit" class="waves-effect waves-light btn">  
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
  export default {
    data() {
      return {
        errors: [],
        credentials: {
          email: null,
          username: null,
          password: null,
          city: ''
        }
      }
    },
    methods: {
      submit(e) {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(this.credentials.email, this.credentials.username)
        .then((user) => {
          console.log(user)
          alert('account created')
        }, (err) => {
          console.log(err)
        })
        let credentials = {
          email: this.credentials.email,
          password: this.credentials.password,
          username: this.credentials.username,
          city: this.credentials.city
        }
        console.log(credentials)
      },
      checkForm: function (e) {
        console.log('checking form');
        if(this.credentials.email && this.credentials.password && this.credentials.username) return true;
        if (!this.credentials.email) this.errors.push("Email required.");
        if (!this.credentials.username) this.errors.push("User name required.");
        if (!this.credentials.password) {
          this.errors.push("Password required.");
        } else if (this.password.length < 6) {
          this.errors.push('Passwort mussen bin 6+ chars')
        }
        console.log(this.errors);
        e.preventDefault();
      }
    }
  }

</script>

<style scoped>


</style>
