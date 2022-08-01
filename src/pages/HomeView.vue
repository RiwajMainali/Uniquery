<script setup lang="ts">
import TheSearchBar from '@/components/TheSearchBar.vue'
import Tensorflow from '@/components/Tensorflow.vue'
import * as access from 'accessibility/dist/accessibility'
window.addEventListener('load', function() {
    new access.Accessibility();
}, false)
</script>

<template>
    <main>
        <br /><br />
        <TheSearchBar />
        <br /><br />
        <Tensorflow />
        <br /><br />
        
    </main>
</template>
