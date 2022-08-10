<script>
export default {
  name: "resultSearchBar",
  data() {
    return {
      userQuery: "",
    };
  },
  methods: {
    redirectToPage() {
      window.location.assign("/searchresults");
    },
  },
};
</script>

<template>
  <div class="searchBar2">
    <form class="nosubmit">
      <input
        class="nosubmit"
        type="text"
        id="query"
        autofocus
        autocomplete="off"
        v-on:keyup.enter.prevent="redirectToPage()"
      />
    </form>
  </div>
</template>

<style scoped>
.searchBar2 {
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
  padding: 4px 10px 4px 16px;
  border-radius: 49px;
  margin: 0 auto;
  box-sizing: border-box;
  text-indent: 25px;
}

form.nosubmit {
  color: #555;
  display: flex;
  flex-direction: row;
  padding: 0;
  border: none;
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

.nosubmit-i {
  position: absolute;
}
</style>
