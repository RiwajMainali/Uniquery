<script type="text/javascript">
import TheSearchBar from '@/components/TheSearchBar.vue'
import naviBar from '@/components/NavigationBar.vue'
import Uniquery from '@/components/Uniquery.vue'
import DarkMode from '@/components/DarkMode.vue'
import UniquerySubtext from '@/components/UniquerySubtext.vue'
import searchBar from '@/components/searchBar.vue'

export default {
    components: {
        Uniquery,
        naviBar,
        DarkMode,
        TheSearchBar,
        UniquerySubtext,
        searchBar
    },
}
</script>

<template>

    <header>
        <naviBar />
        
        <Uniquery />
        <DarkMode />
        
        <br /><br />
        
        <!--<div class="wrapper">

            
    
        </div>-->
        
    </header>
    <RouterView />
    <main>
        <searchBar />
        <!--<br /><br />
        <TheSearchBar />
        <br /><br />

        <div class="container">
            <div class="toggle">
                <div class="switch"></div>
                <div class="icon"></div>
            </div>

            <div class="hamburger">
                <div class="menu"></div>
            </div>

            <div class="logo">
                <Uniquery />
            </div>

            <div class="search">
                <div class="searchBar"></div>
                <div class="searchIcon"></div>
                <div class="searchInput"></div>
            </div>

            <div class="searchButton">
                <div class="button"></div>
            </div>

            <div class="header">
                <div class="navigationBar"></div>
            </div>

            <div class="footer">
                <div class="subtext"></div>
            </div>
        </div>-->
        
    </main>
    <UniquerySubtext />
</template>

<style>
/*@media (min-width: 1024px) {
    body {
        display: grid;
        place-items: center;
        background-color: #f9f7df;
        background-image: linear-gradient(#ebe3f5, #f6f3e4, #f9f7df);
    }

    #homeview {
        display: grid;
        grid-template-columns: 0.3fr 1fr 0.3fr;
        grid-template-rows: 0.3fr 1.1fr 0.7fr 0.7fr 2.2fr;
        gap: 10px 5px;
        grid-auto-flow: row;
        grid-template-areas:
            "toggle header hamburger"
            ". logo ."
            ". search ."
            ". searchButton ."
            ". footer .";
        padding: 0 2rem;
    }
    
    .logo {  
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-template-areas:
            ". . ."
            ". . ."
            ". . .";
        grid-area: logo;
        background-image: transparent url('@/components/Uniquery.vue') no-repeat;
        background-size: contain;
    }

    .searchBar {  
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
        gap: 0px 0px;
        grid-auto-flow: row;
        grid-area: search;
    }
}*/
/*.container {  
    display: grid;
    grid-template-columns: 0.3fr 1fr 0.3fr;
    grid-template-rows: 0.3fr 1.1fr 0.7fr 0.7fr 2.2fr;
    gap: 10px 5px;
    grid-auto-flow: row;
    grid-template-areas:
        "toggle header hamburger"
        ". logo ."
        ". search ."
        ". searchButton ."
        ". footer .";
}

.toggle {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        "switch switch icon"
        "switch switch icon";
    grid-area: toggle;
}

.switch { grid-area: switch; }

.icon { grid-area: icon; }

.hamburger {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        "menu menu ."
        "menu menu .";
    grid-area: hamburger;
}

.menu { grid-area: menu; }

.logo {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . .";
    grid-area: logo;
    background-image: transparent url('@/components/Uniquery.vue') no-repeat;
    background-size: contain;
}

.search {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-area: search;
}

.searchBar { grid-area: 2 / 1 / 3 / 9; }

.searchIcon { grid-area: 2 / 1 / 3 / 2; }

.searchInput { grid-area: 2 / 2 / 3 / 9; }

.searchButton {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". button ."
        ". . ."
        ". . .";
    grid-area: searchButton;
}

.button { grid-area: button; }

.header {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        "navigationBar navigationBar navigationBar"
        ". . .";
    grid-area: header;
}

.navigationBar { grid-area: navigationBar; }

.footer {  
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
        ". . ."
        ". . ."
        ". . ."
        "subtext subtext subtext"
        ". . .";
    grid-area: footer;
}

.subtext { grid-area: subtext; }
*/
</style>