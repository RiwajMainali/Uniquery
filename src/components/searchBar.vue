<script>
import { ref } from "vue";
import { functions } from "../router/index.js";
import { httpsCallable } from "firebase/functions";

const userQuery = ref([]);

export default {
  name: "searchBar",
  data() {
    return {
      userQuery: {},
    };
  },
  methods: {
    redirectToPage() {
      window.location.assign("/searchresults");
    },
    testFunction() {
      this.userQuery = returnText();
    },
  },
};
</script>

<script setup>
//a test function to check input
function returnText() {
  let input = document.getElementById("userQuery").value;
  //alert(input)
  return input;
}

//redirects
async function redirect() {
  let newPath = document.getElementById("userQuery").value;
  window.location.assign("/searchresults/" + newPath);
  window.sessionStorage.setItem("userInput");

  // This is how you access the results, if you want to change it to a scoped variable, feel free. //
  let results = await callCrawler(
    document.getElementById("userQuery").value,
    1
  );

  // You can use this for testing, otherwise, comment out on release. You have to disable the redirects for this to appear in console. //
  console.log(results);
}

async function callCrawler(input, page_number) {
  const firebase_function = httpsCallable(functions, "webcrawl");
  const result = await firebase_function(input, page_number);
  const data = result.data;

  return data;
}
</script>

<template>
  <div class="searchBar">
    <br />
    <form class="nosubmit" method="get" @submit.prevent="redirect()">
      <input
        class="nosubmit"
        type="text"
        id="userQuery"
        autofocus
        autocomplete="off"
        v-model="userQuery"
      />
    </form>
  </div>
</template>

<style scoped>
.searchBar {
  width: calc(632px + 6px);
  width: 100%;
  max-width: 584px;
  height: 44px;
  justify-content: center;
  align-items: center;
}

input[type="text"] {
  font-size: 24px;
  font-family: ibm plex mono;
  width: 100%;
  padding: 7px 10px 7px 49px;
  border-radius: 49px;
  margin: 0 auto;
  box-sizing: border-box;
  text-indent: 25px;
}

form.nosubmit {
  color: #555;
  display: flex;
  flex-direction: column;
  padding: 0;
  border: none;
  border-radius: 24px;
}
input.nosubmit {
  border: 1px solid #f9f7df;
  display: flex;
  padding: 9px 4px 9px 40px;
  background: white url("@/assets/images/magnifying-glass.png") no-repeat 14px
    10px;
  background-size: 28px;
  border-width: thin;
  align-items: center;
  justify-content: center;
}

.button {
  top: 20px;
}

.nosubmit-i {
  position: absolute;
}
</style>
