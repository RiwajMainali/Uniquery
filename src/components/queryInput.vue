<script>
//parent to Results.vue
import Results from '@/components/Results.vue'
export default {
    name: "QueryInput",
    components: {Results}
};
</script>

<template>
<!-- 
    <MyComponent kebab-case="hello" /> 
    PascalCase for component tags
-->
<Results result-test="Hello from Parent :D"/>

<div class="queryInput">

    <form>
       <input type="text" id="query" autofocus v-on:keyup.enter.prevent="redirectToPage()">
    </form>


    <p id="result"> {{ getInput() }}</p>
    <br/><br/><br/>
    
</div>
</template>