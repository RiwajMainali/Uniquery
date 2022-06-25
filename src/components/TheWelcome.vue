<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import { ref } from "vue";
let input = ref("");
const fruits = ["rainbow", "sparkle", "ember"];
function filteredList() {
  return fruits.filter((fruit) =>
    fruit.toLowerCase().includes(input.value.toLowerCase())
  );
}
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    </template>
    <template #heading>Documentation</template>

    Vue’s
    <a target="_blank" href="https://vuejs.org/">official documentation</a>
    provides you with all information you need to get started.

    <br />
    <br />
    
    <input type="text" v-model="input" placeholder="Search unicorns..." />
      <div class="item fruit" v-for="fruit in filteredList()" :key="fruit">
        <p>{{ fruit }}</p>
      </div>

      <div class="item error" v-if="input&&!filteredList().length">
        <p>No results found!</p>
      </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="50" height="50" />
    </template>
    <template #heading>Tooling</template>

    This project is served and bundled with
    <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite</a>. The recommended IDE
    setup is <a href="https://code.visualstudio.com/" target="_blank">VSCode</a> +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>. If you need to test
    your components and web pages, check out
    <a href="https://www.cypress.io/" target="_blank">Cypress</a> and
    <a href="https://on.cypress.io/component" target="_blank"
      >Cypress Component Testing</a
    >.

    <br />

    More instructions are available in <code>README.md</code>.
  </WelcomeItem>
</template>
