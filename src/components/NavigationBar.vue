<script>
//navigation bar component
export default{
    name: "naviBar",
};

</script>

<template>
    <header>
        <div>
            <nav>
                
                <router-link to="/">home</router-link>
                <router-link to="about">about</router-link>
                
            </nav>
        </div>
    </header>
</template>