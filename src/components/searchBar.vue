<script>
export default {
    name: "searchBar",
    data() {
        return {
            userQuery: '',
        }
    },
    methods: {
        redirectToPage() {
            window.location.assign('/searchresults')
        },
    }
}
</script>

<template>
<div id="searchBar">
            <form class="nosubmit">
                <input class="nosubmit" type="text" id="query" autofocus v-on:keyup.enter.prevent="redirectToPage()">
            </form>
        </div>
</template>

<style>
.searchBar {
    background: url('@/assets/images/searchbar-asset.png');
    width:fit-content;
    height: fit-content;
}

input[type=text] {
    font-size: 24px;
    width: 50%;
    padding: 7px 7px 7px 49px;
    border-radius: 49px;
    margin: 12px 5;
    box-sizing: border-box;
}

form.nosubmit {
    color: #555;
    display: flex;
    padding: 0;
    border: none;
    border-radius: 5px;
    opacity: 100%;
}
input.nosubmit {
    
    border: 1px solid #555;
    
    display: block;
    padding: 9px 4px 9px 40px;
    background: white url('@/assets/images/magnifying-glass.png') no-repeat scroll 16px 16px;
    background-size: 25px;
}

.nosubmit-i {
    position: absolute;
}
</style>