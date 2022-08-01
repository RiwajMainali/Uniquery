<script setup lang="ts">
import TheSearchBar from '@/components/TheSearchBar.vue'
import Tensorflow from '@/components/Tensorflow.vue'
import { Accessibility } from '/Users/oriana/Uniquery/node_modules/accessibility/src/main'
//import * as Accessibility from 'accessibility/src/main'

window.addEventListener('load', function() {
    new Accessibility();
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
