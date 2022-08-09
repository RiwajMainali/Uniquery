<script setup>
import { RouterView } from 'vue-router'
import UniquerySubtext from '@/components/UniquerySubtext.vue'
</script>

<script type="text/javascript">
import naviBar from '@/components/NavigationBar.vue'
import Uniquery from '@/components/Uniquery.vue'
import cookie from '@/components/cookie.vue'

export default {
    components: {
        Uniquery,
        naviBar,
    },
}
</script>


<template>
    
    <RouterView />
    
</template>

<style scoped>
@import '@/assets/base.css';
@import url("https://fonts.googleapis.com/css2?family=Montserrat&display=swap");
@import '@/index.css';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: bookish;
}

#app {
    /*max-width: 1280px;*/
    min-height: 100vh;
    
    position: relative;
    /*margin: 0 auto;*/
    padding: 2rem;

    font-weight: normal;
    background-color: #f9f7df;
    background-image: linear-gradient(#ebe3f5, #f6f3e4, #f9f7df);
}


a,
.green {
  text-decoration: none;
  color: rgb(219, 199, 237);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(263, 71%, 66%, 0.583);
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
/*
/*@media (min-width: 1024px) {*/
/*  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.3fr;
    grid-template-rows: 0.3fr 1.1fr 0.7fr 0.7fr 2.2fr;
    gap: 10px 5px;
    grid-auto-flow: column;
    grid-template-areas: 
        "toggle header hamburger"
        ". logo ."
        ". search ."
        ". searchButton ."
        ". footer .";
    padding: 0 2rem;
  }

/*  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}*/
</style>
