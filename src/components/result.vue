<script>
//todo: create props and other stuff
export default {
  name: "result",

  data() {
    return {
      queryResult: {
        qURL: "",
        qFavicon: "",
        qTitle: "",
        qExcerpt: "",
      },
    };
  },
  methods: {
    redirectToURL() {
      this.$router.push("/404");
    },
  },
};
</script>

<template>
  <div class="result">
    <a href="redirectToURL()" target="_blank">url</a>
    <div class="scrapedSnip">brief excerpt here</div>
  </div>
</template>

<style scoped>
/*@media (min-width: 1024px) {*/
.result {
  min-height: 100vh;
  /*display: flex;*/
  justify-content: center;
  align-items: center;
  display: flex;
}
.result a:link {
  color: blue;
  font-size: 36px;
  font-family: ibm plex mono;
}
.result a:hover {
  color: blue;
  text-decoration: underline;
}

/*  scrapedSnip {
    }
}*/
</style>
