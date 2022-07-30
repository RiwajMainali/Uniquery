<script>
import { ref, computed } from 'vue'
//todo: create props and other stuff
export default {
    name: "result",
    props: {
        userQuery: string
    },
    data() {
        return {
            queryResult: {
                qURL: '',
                qFavicon: '',
                qTitle: '',
                qExcerpt: '',
            }
        }
    },
    emits: {
        submit: ({ userQuery }) => {
            if (userQuery) {
                return true
            } else {
                console.warn('invalid submit event payload')
                return false
            }
        }
    },
    methods: {
        redirectToURL() {
            this.$router.push('/404')
        },

        /*userQuery() 
            computed<userQuery>(
            options: {
                get: () => userQuery,
                set: (value: userQuery) => void,
            },

        ): Ref<userQuery>*/
    }, 

}
</script>

<template>

    <div class="result">
        <a href="/404" target="_self">website url</a>
        <div class="scrapedSnip">
            brief excerpt here
        </div>
    </div>
</template>

<style>
@media (min-width: 1024px) {
    .result {
        /*min-height: 100vh;*/
        /*display: flex;*/
        align-items: center;
    }
    .result a:link {
        color: blue;
        font-size: 40px;
        font-family: ibm plex mono;
    }
    .result a:visited {
        color: indigo;
    }
    .result a:hover {
        text-decoration: underline;
    }
/*  scrapedSnip {
    }*/
}
</style>