<script setup lang="ts">
</script>
<script>
import { onKeyDown } from '@vueuse/core';
import { RouterLink } from 'vue-router';
export default {
    methods: {
        redirectToPage() {
            this.$router.push('/404')
        },
        seeResults() {
            this.$router.push('/results')
        },
        testFunction() {
            window.location.assign('https://project-61dcd.web.app/searchresults')
        },
        getInput() {
            var userQuery = document.getElementById("query");
            return userQuery;
        },
    }
};
</script>

<template>
    <div class="testpage">
        <h1>This is the test page's header</h1>
    

    
        This is the test page's body content.
        <br/><br/><br/>
        
        <button v-on:click="redirectToPage()">click this to test</button>
        <br/><br/><br/>
        
        <button v-on:click="seeResults()">click to see results</button>
        <br/><br/><br/>
        
        <input type="text" id="query" autofocus v-on:keyup.enter="getInput()">
        <p id="userQuery"></p>
    </div>

</template>

<style>
@media (min-width: 1024px) {
  .testpage {
    min-height: 100vh;
    /*display: flex;*/
    align-items: center;
  }
}
</style>