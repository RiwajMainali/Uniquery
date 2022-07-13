<script setup lang="ts">
</script>
<script>
import { RouterLink } from 'vue-router';
export default {
    methods: {
        redirectToPage() {
            this.$router.push('/404')
        }
    }
};
</script>

<template>
    This is the test page's body content.
        <h1>This is the test page's header</h1>

    <button v-on:keyup.enter="redirectToPage()">click this to test</button>
        
    
</template>