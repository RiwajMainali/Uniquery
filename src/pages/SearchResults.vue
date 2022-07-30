<script>
import result from '@/components/result.vue'

export default {
    name: "searchresults",
    components: {
        result,
    },
};

</script>

<template>
    <div class="searchresults">
        <h1>This is the results page teehee :3 </h1>
        results for (enter query here)...

        <result />
    </div>
    
    
    
  <div class="asked">
    <h2>
      You asked the 
      <a target="_blank" href="https://en.wikipedia.org/wiki/Unicorn">unicorns...</a>
      <br />
    </h2>
    

  </div>
</template>

<style>
@media (min-width: 1024px) {
    .searchresults {
        /*min-height: 100vh;*/
        /*display: flex;*/
        align-items: center;
    }
}
</style>