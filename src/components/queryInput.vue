<script>
export default {
    name: "queryInput",
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
        value: {
            get() {
                return this.modelValue
            },
            set(value) {
                this.$emit('update:modelValue', value)
            }
        }
    }
}
</script>

<template>
    <div class="queryInput">

        <form>
            <!--<input type="text" id="query" autofocus v-on:keyup.enter.prevent="redirectToPage()">-->
            <input v-model="value" />
        </form>


        <p id="result"> {{ getInput() }}</p>
        <br/><br/><br/>
    
    </div>

</template>