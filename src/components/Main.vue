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
            <li><a class="modal-trigger" href="#modal1">Login</a></li>
            <li><router-link to="/register">Register</router-link></li>
            <li><router-link to="/profile">Profile</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  
  <section class="slider">
    <ul class="slides">
      <li>
        <img src="/Users/brianb/Desktop/book_app/book_app/src/assets/books3.jpg">
        <div class="caption center-align">
          <h2>Exchange Old Books</h2>
          <h5 class="light grey-text text-lighten-3 hide-on-small-only">When you finish reading a book, don't just leave it on the shelf. Swap it for another.</h5>
        </div>
      </li>
      <li>
        <img src="/Users/brianb/Desktop/book_app/book_app/src/assets/books3.jpg">
        <div class="caption left-align">
          <h2>The More The Merrier</h2>
          <h5 class="light grey-text text-lighten-3 hide-on-small-only">The more people there are in the book exchange, the better. Invite your friends to join.</h5>
        </div>
      </li>
      <li>
        <img src="/Users/brianb/Desktop/book_app/book_app/src/assets/books3.jpg">
        <div class="caption right-align">
          <h2>Find Like Minded People</h2>
          <h5 class="light grey-text text-lighten-3">Leave comments and ratings about your books. Start a discussion.</h5>
        </div>
      </li>
    </ul>
  </section>
  <section class="section section-icons grey lighten-4 center">
    <div class="container">
      <div class="row">
        <div class="col s12 m4">
          <div class="card-panel">
            <i class="material-icons large brown-text">
              import_contacts
            </i>
            <h4>How it works</h4>
            <p>Register to start trading your books with other users in your area.</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel">
            <i class="material-icons large brown-text">
              swap_calls
            </i>
            <h4>Get involved</h4>
            <p>Be part of a growing community of avid readers. Start connecting.</p>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card-panel">
            <i class="material-icons large brown-text">
              library_books
            </i>
            <h4>Get reading</h4>
            <p>Improve your knowledge. Reduce stress. Stimulate your brain.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="popular" class="section section-popular scrollspy">
    <div class="container">
      <div class="row">
        <h4 class="center"><span class="brown-text">Newest</span> additions</h4>
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="img/resort1.jpg" alt="">
              <span class="card-title white-text">Jamaica</span>
            </div>
            <div class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, molestiae.
            </div>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="img/resort2.jpg" alt="">
              <span class="card-title white-text">Cancun, Mexico</span>
            </div>
            <div class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, molestiae.
            </div>
          </div>
        </div>
        <div class="col s12 m4">
          <div class="card">
            <div class="card-image">
              <img src="img/resort3.jpg" alt="">
              <span class="card-title white-text">Florida</span>
            </div>
            <div class="card-content">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, molestiae.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>



  <section id="gallery" class="section section-gallery scrollspy">
    <div class="container">
      <h4 class="center">
        <span class="teal-text">Book </span> Gallery
      </h4>
      <div class="row">
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books, travel" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books, travel" alt="">
        </div>
      </div>

      <div class="row">
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
        <div class="col s12 m3">
          <img class="materialboxed responsive-img" src="https://source.unsplash.com/1600x900/?books" alt="">
        </div>
      </div>
    </div>
  </section>

  <section class="section section-search brown lighten-3 white-text center scrollspy" id="search">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h3>Search (with autocomplete) Books</h3>
          <div class="input-field">
            <input type="text" class="white blue-grey-text autocomplete" id="autocomplete-input" placeholder="Aruba, Cancun, etc..">
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="about" class="section section-contact scrollspy">
    <div class="container">
      <div class="row">
        <div class="col s12 m6">
          <div class="card-panel teal lighten-3 white-text text-darken-3 center">
            <h5>About Us</h5>
            <hr>
            <p>We are a small team of developers learning the newest technologies through FCC(Free Code Camp). This project
              was build with VueJS on the front end and NodeJS on the backend.</p>
            <p>Our passion for technology and reading inspired us to create this project. If you have any questions about building
              apps for your business, please don't hesitate to get in touch.</p>
            <p>Fill out our form. We want to hear from you!</p>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="card-panel grey lighten-3">
            <h5>Please fill out this form</h5>
            <div class="input-field">
              <input type="text" placeholder="Name">
            </div>
            <div class="input-field">
              <input type="text" placeholder="Email">
            </div>
            <div class="input-field">
              <textarea id="textarea1" class="materialize-textarea"></textarea>
              <label for="textarea1">Message</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="section section-follow brown lighten-3 white-text center">
    <div class="container">
      <div class="row">
        <div class="col s12">
          <h4 class="white-text text-lighten-3">Follow Us</h4>
          <p>Follow us on social media for special offers</p>
          <a href="#" class="white-text text-darken-1"><i class="fab fa-facebook fa-3x"></i></a>
          <a href="#" class="white-text text-darken-1"><i class="fab fa-twitter fa-3x"></i></a>
          <a href="#" class="white-text text-darken-1"><i class="fab fa-instagram fa-3x"></i></a>
          <a href="#" class="white-text text-darken-1"><i class="fab fa-linkedin fa-3x"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!--modal test-->
  <a class="modal-trigger" href="#modal1">Modal</a>

  <!-- Modal Structure -->
  <div id="modal1" class="modal">
    <div class="row">
      <div class="col s12">
        <div class="row">
          <div class="input-field col s12">
            
            <label for="username">Username</label>
            <input type="text" id="autocomplete-input" class="autocomplete">
          </div>
          <div class="input-field col s12">
            
            <label for="username">Password</label>
            <input type="Password" id="autocomplete-input" class="autocomplete">
          </div>
        </div>
        <a class="waves-effect waves-light btn">Login</a>
      </div>
    </div>

  </div>

</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .section-search input {
  padding: 5px !important;
  font-size: 18px !important;
  width: 90% !important;
  border: #f4f4f4 3px solid !important;
}

.fa-twitter, .fa-instagram, .fa-linkedin {
  margin-left: 1em !important;
}

hr {
    height: 8px;
    background-image: linear-gradient(90deg, black, transparent);
    border: 0;
    height: 3px;
}

section {
  padding: 30px 0;
}

.description {
  text-indent: 1em;
  text-align: justify;
  line-height: 1.5em;
}

.description::first-letter {
  font-size: 3.3em;
}

.book-detail, .left {
  padding: 30px;
  font-size: 0.8em;
}
</style>
