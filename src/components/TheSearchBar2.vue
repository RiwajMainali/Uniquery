<script setup>
import { ref, onMounted } from 'vue'
import SearchInput from 'vue-search-input'
//Optionally import default styling
import 'vue-search-input/dist/styles.css'
import { v4 as uuidv4 } from 'uuid' //generate random ID
//import { collection, getDocs } from 'firebase/firestore'
//import { db } from '@/firebase'

const search = ref([])
const unicorns = ref([])
/*
//get unicorns, asyncronous due to await
onMounted(async () => {
	const querySnapshot = await getDocs(collection(db, "unicorns"))
	//local array to store unicorn objects
	let holder = []
	querySnapshot.forEach((doc) => {
  		// doc.data() is never undefined for query doc snapshots
  		console.log(doc.id, " => ", doc.data())
		const unicorn = {
			id: doc.data().id,
			URL: doc.data().URL,
			culture: doc.data().culture,
			done: doc.data().done,
			title: doc.data().title
		}
		holder.push(unicorn) //holder array populated by unicorns
	})
	unicorns.value = holder
})
*/

const addNew = ref('')
const addUnicorn = () => {
	const newUnicorn = {
		id: uuidv4(),
		URL: 'checheche',
		culture: 'tetetete',
		done: false,
		title: addNew.value
	}
	unicorns.value.unshift(newUnicorn)
	addNew.value = ''
}
const deleteUnicorn = id => {
	//.filter() to loop through unicorn array
	//grab all unicorns that don't have the id
	unicorns.value = unicorns.value.filter(searching => searching.id !== id)
}
const toggleDone = id => {
	//find the position of unicorn in array with id
	//use position/index to update the correct unicorn
	const index = unicorns.value.findIndex(searching => searching.id == id)
	unicorns.value[index].done = !unicorns.value[index].done
}
</script>

<template>
<SearchInput v-model="search" placeholder="Search unicorns..." />
<br />
<br />
<input class="input is-medium" type="text" placeholder="Medium input">
<br />
<br />
<br />
<br />
<div class="tutorial">
	<!--bulma title -->
	<div class="title has-class-center">
	Unicorn Tutorial
	</div>

	<!-- submit handler & .prevent to prevent the page 
	to be reloaded and added method addUnicorn-->
	<form @submit.prevent="addUnicorn"> 
		<!-- bulma form->general->is-expanded -->
		<!-- mb-5 adds 5 to bottom margin -->
		<div class="field is-grouped mb-5">
			<p class="control is-expanded">
				<input 
				v-model="addNew" 
				class="input" type="text" 
				placeholder="Add a unicorn">
			</p>
			<p class="control">
			<!-- :disable attribute for button when ref is empty -->
				<button 
				:disabled="!addNew"
				class="button is-info">
				Add
				</button>
			</p>
		</div>
	</form>

	<!-- bulma component->card->card-content
	:class bind to add a class to change card color only
	if done property of unicorn searching object is true-->
	<div 
	v-for="searching in unicorns" 
	class="card mb-5"
	:class="{ 'has-background-success-light' : searching.done }">
		<div class="card-content">
			<div class="content">

				<!-- split content and buttons with columns
				is-mobile split on mobile too 
				is-vcentered centered vertically -->
				<div class="columns is-mobile is-vcentered">
					<!-- :class="{ '' :  }" adds class for green text
					but only when done is true
					line-through class added with css in styles-->
					<div
					class="column"
					:class="{ 'has-text-success line-through' : searching.done }">
					{{ searching.title }} </div>
					<!-- is-5 lessens column width 
					has-text-right aligns to right -->
					<div class="column is-5 has-text-right">
						<!-- CHECK is-light adds grey color -->
						<button
						@click="toggleDone(searching.id)"
						class="button"
						:class="searching.done ? 'is-success' : 'is-light'">
						&check;</button>
						<!-- DELETE is-danger adds red color 
						ml-2 adds more to left margin -->
						<button 
						@click="deleteUnicorn(searching.id)"
						class="button is-danger ml-2">&cross;</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

</template>

<style>
@import 'bulma/css/bulma.css';

.tutorial{
	max-width: 400px;
	padding: 20px;
	margin: 0 auto;
}

.line-through{
	text-decoration: line-through;
}
</style>