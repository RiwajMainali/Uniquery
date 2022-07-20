<script setup>
import * as vueuse from '@vueuse/core'

const isDark = vueuse.useDark()
const toggleDark = vueuse.useToggle(isDark)
</script>

<template>
<p>isDark: {{ isDark }} </p>
<button
@click="toggleDark()"
class="px-4 py-2 text-white bg-green-500 rounded ">
Dark Mode </button>
</template>