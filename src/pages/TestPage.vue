<script setup lang="js">
</script>
<script>

import { onKeyDown } from '@vueuse/core';
import { RouterLink } from 'vue-router';
import macaron from '@/components/macaron.vue'
import cookie from '@/components/cookie.vue'
import { applyActivation } from '@tensorflow/tfjs-core/dist/ops/fused_util';
import queryInput from '@/components/queryInput.vue'
import { useCookies } from 'vue3-cookies';

/// LOOK AT ME KAIA ///
import { functions } from '../router/index.js'
import { httpsCallable } from 'firebase/functions';
/// LOOK AT ME KAIA ///

export default {
    data() {
        return {
            result: '',
        }
    },
    methods: {
        redirectToPage() {
            this.$router.push('/404')
        },
        seeResults() {
            this.$router.push('/searchresults' + '/' + window.sessionStorage.getElementById('query'))
        },
        testFunction() {
            window.location.assign('https://project-61dcd.web.app/searchresults')
        },
        getInput() {
            var userQuery = document.getElementById("query");
            return userQuery;
        },
        checkCookie: function () {
            if (cookie !== null) {
                this.result = "cookie is enabled";
                console.log(this.result);
            }
            else {
                this.result = "cookie is disabled";
                console.log(this.result);
            }
        },
        /// LOOK AT ME KAIA ///
        callFunction: async function () {
            const firebase_function = httpsCallable(functions, 'webcrawl');
            const result = await firebase_function({data: 'Pizza'});
            const data = result.data;
            
            // You can use this for testing, otherwise, comment out on release. //
			console.log(data);
        }
        /// LOOK AT ME KAIA ///
    },
    components: {
        macaron,
    }
};
</script>

<template>
    <macaron />
    <div class="testpage">
        <h1>This is the test page's header</h1>

    
        This is the test page's body content.
        <br/><br/><br/>
        
        <button class="button" v-on:click="callFunction()">click this to test</button>
        <br/><br/><br/>
        
        <button class="button" v-on:click="seeResults()">click to see results</button>
        <br/><br/><br/>
        
        <div id="test1">
            <form>
                <input type="text" id="query" autofocus v-on:keyup.enter.prevent="redirectToPage()">
            </form>
        </div>

        <p id="result"> {{ getInput() }}</p>
        <br/><br/><br/>

        
        <button class="button" @click="checkCookie()">check cookies</button>
        <p>result: {{result}}</p>

        <img src="@/assets/images/searchbar-asset.png">

    </div>

</template>

<style>
@media (min-width: 1024px) {
  .testpage {
    min-height: 100vh;
    /*display: flex;*/
    align-items: center;
  }

  .button {
    display: inline-block;
    padding: 15px 25px;
    font-size: 24px;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    outline: none;
    color: #fff;
    background-color: #ebe3f5;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9x #999;
  }

  .button:hover {background-color: #e8bddb}

  .button:active {
    background-color: #e8bddb;
    box-shadow: 0 5px #444;
    transform: translateY(4px);
  }

  .test1 {
    background: url('@/assets/images/searchbar-asset.png');
    width:fit-content;
    height: fit-content;
  }

  input[type=text] {
    width: 100%;
    padding: 5px 5px 5px 25px;
    border-radius: 25px;
    margin: 10px 5;
    box-sizing: border-box;
  }
}
</style>