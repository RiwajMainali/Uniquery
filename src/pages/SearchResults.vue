<script>
import searchBar from "@/components/searchBar.vue";
import resultSearchBar from "@/components/resultSearchBar.vue";
import result from "@/components/result.vue";

export default {
  name: "searchresults",
  components: {
    searchBar,
    resultSearchBar,
    result,
  },
};
</script>

<script setup>
var userQuery = window.sessionStorage.getItem("userInput");
</script>

<template>
  <!--    <div class="asked">
        <h2>
            You asked the 
            <a target="_blank" href="https://en.wikipedia.org/wiki/Unicorn">unicorns...</a>
            <br />
        </h2>
  </div>
-->

  <div id="searchresult">
    <div class="container">
      <div class="results-header">
        <div class="results-logo">
          <span>
            <a href="/">
              <img src="@/assets/images/uniquery-logo-dark.png" alt="home" />
            </a>
          </span>
        </div>
        <div class="results-search-bar">
          <!--<resultSearchBar />-->
          <searchBar />
        </div>
      </div>

      <div class="results-content">
        <result />
      </div>
      <div class="results-data">
        <result />
      </div>
      <div class="results-footer">
        <div class="results-pagination">pagination</div>
      </div>
    </div>
  </div>
  <!--<div class="container">
    <div class="results-margin"></div>

    <div class="results-header">
        <a href="/">
        <img src="@/assets/images/uniquery-logo-dark.png" alt="home">
        </a>

        <searchBar />
    </div>

    <div class="results-content">
        <result />
    </div>

    <div class="results-footer">
        <div class="results-pagination"></div>
    </div>

</div>-->
</template>

<style scoped>
* {
  padding: 0;
  margin: 0 10px;
}

#searchresult {
  min-height: 100vh;
  max-width: 100vw;
  border: none;
  width: 100%;
  width: 100%;
  max-width: 1200px;
  height: 100px;
  margin: 0 auto;
}

.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.3fr 2.2fr 0.5fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  position: relative;
  padding: 0 2rem;
  overflow: scroll;
  grid-template-areas:
    "results-header results-header results-header"
    "results-content results-content results-content"
    "results-footer results-footer results-footer";
  min-width: 800px;
  max-width: 800px;
}

.results-header {
  display: grid;
  grid-template-columns: 0.7fr 0.7fr 1.8fr 0.5fr;
  grid-template-rows: 1fr 1.2fr 0.8fr;
  gap: 10px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . . ."
    "results-logo . results-search-bar results-search-bar"
    "results-logo . results-search-bar results-search-bar";
  grid-area: 1 / 1 / 2 / 4;
}

.results-logo {
  grid-area: results-logo;
  min-width: 180px;
  max-width: 180px;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  position: absolute;
  top: 20px;
  align-items: center;
}

.results-search-bar {
  grid-area: results-search-bar;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  min-width: 800px;
  max-width: 800px;
  position: absolute;
  top: 40px;
  align-items: center;
}

.menu {
  grid-area: menu;
}

.results-content {
  grid-area: 2 / 1 / 3 / 4;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  grid-template-areas: "";
}

.results-data {
  grid-area: 2 / 2 / 3 / 4;
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  position: relative;
  max-width: 600px;
}

.results-footer {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "results-pagination results-pagination results-pagination"
    "results-pagination results-pagination results-pagination"
    ". . .";
  grid-area: 3 / 1 / 4 / 4;
}

.results-pagination {
  grid-area: results-pagination;
}

/*.container {  
    display: grid;
    grid-template-columns: 0.7fr 1.3fr 1fr;
    grid-template-rows: 0.1fr 0.4fr 2.7fr 0.8fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "results-margin results-margin results-margin"
        "results-header results-header results-header"
        "results-content results-content results-content"
        "results-footer results-footer results-footer";
}

.results-margin { grid-area: results-margin; }

a {
    width: 180px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    position: absolute;
    top: 20px;
    background-size: contain;
    flex-direction: column;
}

.results-header { 
    grid-area: results-header;
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
}

.results-content { grid-area: results-content; }

.results-footer {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        "results-pagination results-pagination results-pagination"
        "results-pagination results-pagination results-pagination"
        ". . .";
    grid-area: results-footer;
}

.results-pagination { grid-area: results-pagination; }*/
</style>
