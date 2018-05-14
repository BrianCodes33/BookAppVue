<template>
  <div class="navbar-fixed">
    <nav class="brown lighten-3">
      <div class="container">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Book Trader</a>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger">
            <i class="material-icons">menu</i>
          </a>
          <ul class="right hide-on-med-and-down">
            <li><a class="modal-trigger" href="#modal1">Login</a></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
export default {
    name: "navigation-view",    
    data () {
      return {
        title: "",
        items: {},
        statusMessage: ""
      }
    }
}
</script>