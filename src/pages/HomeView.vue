<script type="text/javascript">
import TheSearchBar from "@/components/TheSearchBar.vue";
import Tensorflow from "@/components/Tensorflow.vue";
import naviBar from "@/components/NavigationBar.vue";
import Uniquery from "@/components/Uniquery.vue";
import UniquerySubtext from "@/components/UniquerySubtext.vue";
import searchBar from "@/components/searchBar.vue";

import * as access from "accessibility/dist/accessibility";

window.addEventListener(
  "load",
  function () {
    new access.Accessibility();
  },
  false
);

export default {
  components: {
    Uniquery,
    naviBar,
    TheSearchBar,
    UniquerySubtext,
    searchBar,
    Tensorflow,
  },
};
</script>

<template>
  <div class="container">
    <div class="header">
      <naviBar />
    </div>

    <div class="content">
      <div class="logo">
        <Uniquery />
      </div>
      <br /><br /><br />

      <div class="searchbar">
        <searchBar />
      </div>

      <div class="searchbutton"></div>
    </div>
    <br /><br /><br />

    <div class="footer">a magic search engine.</div>
  </div>

  <RouterView />
</template>

<style>
body {
  background-image: linear-gradient(#ebe3f5, #f6f3e4, #f9f7df);
  min-height: 100vh;
  font-family: "bookish";
}
.container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.3fr 2.1fr 0.3fr;
  gap: 10px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    "header"
    "content"
    "footer";
}
.header {
  grid-area: header;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.content {
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  gap: 10px 0px;
  grid-template-areas:
    "logo logo logo"
    "logo logo logo"
    "searchbar searchbar searchbar"
    "searchbutton searchbutton searchbutton";
  grid-area: content;
}
.logo {
  grid-area: logo;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.searchbar {
  grid-area: searchbar;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.searchbutton {
  grid-area: searchbutton;
}
.footer {
  grid-area: footer;
  display: flex;
  flex-direction: column;
  background: transparent;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 24px;
  left: 0;
  bottom: 0;
}
/*@media (min-width: 1024px) {*/
/*body {
        display: grid;
        place-items: center;
        background-color: #f9f7df;
        background-image: linear-gradient(#ebe3f5, #f6f3e4, #f9f7df);
    }
    #homeview {
        display: grid;
        grid-template-columns: 0.3fr 1fr 0.3fr;
        grid-template-rows: 0.3fr 1.1fr 0.7fr 0.7fr 2.2fr;
        gap: 10px 5px;
        grid-auto-flow: row;
        grid-template-areas:
            "toggle header hamburger"
            ". logo ."
            ". search ."
            ". searchButton ."
            ". footer .";
        padding: 0 2rem;
    }
    
    .logo {  
        display: grid;
        /*grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            ". . ."
            ". . ."
            ". . .";
        grid-area: logo;
        column-span: all;
    }*/
/*
    .searchBar {  
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-area: search;
    }
}*/
/*.container {  
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.3fr;
    grid-template-rows: 0.3fr 1.1fr 0.7fr 0.7fr 2.2fr;
    gap: 10px 5px;
    grid-auto-flow: row;
    grid-template-areas:
        "toggle header hamburger"
        ". logo ."
        ". search ."
        ". searchButton ."
        ". footer .";
}
.toggle {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        "switch switch icon"
        "switch switch icon";
    grid-area: toggle;
}
.switch { grid-area: switch; }
.icon { grid-area: icon; }
.hamburger {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        "menu menu ."
        "menu menu .";
    grid-area: hamburger;
}
.menu { grid-area: menu; }
.logo {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . .";
    grid-area: logo;
    background-image: transparent url('@/components/Uniquery.vue') no-repeat;
    background-size: contain;
}
*/
.search {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-area: search;
}
.searchBar {
  grid-area: 2 / 1 / 3 / 9;
}
.searchIcon {
  grid-area: 2 / 1 / 3 / 2;
}
.searchInput {
  grid-area: 2 / 2 / 3 / 9;
}
.searchButton {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". button ."
    ". . ."
    ". . .";
  grid-area: searchButton;
}
/*.button { grid-area: button; }
.header {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        "navigationBar navigationBar navigationBar"
        ". . .";
    grid-area: header;
}
.navigationBar { grid-area: navigationBar; }
.footer {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . ."
        "subtext subtext subtext"
        ". . .";
    grid-area: footer;
}
.subtext { grid-area: subtext; }
*/
</style>
