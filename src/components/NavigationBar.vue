<script>
//navigation bar component
import { RouterView } from 'vue-router';
export default{
    name: "naviBar",
};

</script>

<template>

        <div>
            <nav>
                
                <router-link to="/">home</router-link>
                <router-link to="about">about</router-link>
                <router-link to="test">test</router-link>
                
            </nav>
        </div>

        
</template>