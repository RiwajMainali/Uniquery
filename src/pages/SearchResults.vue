<script>
import Results from '@/components/Results.vue'
export default {
    name: "searchresults",
    components: {
        Results,
    },
};
</script>

<template>
  <div class="searchresults">
    <h1>This is the results page teehee :3 </h1>
  </div>
  
  <div class="asked">
    <h2>
      You asked the 
      <a target="_blank" href="https://en.wikipedia.org/wiki/Unicorn">unicorns...</a>
      <br />
    </h2>
    results for (enter query here)...


  </div>

</template>

<style>
@media (min-width: 1024px) {
    .searchresults {
        min-height: 100vh;
        /*display: flex;*/
        align-items: center;
    }
}
</style>

