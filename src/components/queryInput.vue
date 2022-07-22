<script>
export default {
    name: "queryInput",
};
</script>

<template>
    <div class="queryInput">

        <form>
            <input type="text" id="query" autofocus v-on:keyup.enter.prevent="redirectToPage()">
        </form>


        <p id="result"> {{ getInput() }}</p>
        <br/><br/><br/>
    
    </div>

</template>