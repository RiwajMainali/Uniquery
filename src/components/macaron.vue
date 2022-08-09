<script>
import naviBar from '@/components/NavigationBar.vue'

export default {
    name: 'macaron',
    components: {
        naviBar
    },
}
</script>

<template>
<div class="macaron">
    <input id="menu" type="image" alt="menu" src="/macaron-burger.svg" width="24" height="24" >
</div>
</template>

<style scoped>
macaron {
    background: transparent;
    border: none;
    background-image: black url(@/assets/images/macaron-burger.svg) no-repeat;
}

img:hover {
    background-color: black;
}

input[type=image] {
    opacity: 0.5;
}

input[type=image]:hover {
    transition: 0.4s;
    opacity: 1;
}

input[type=image]:active {
    transform: translateY(2px);
}


</style>