<script setup>
import { ref, onMounted } from 'vue'
import SearchInput from 'vue-search-input'
//Optionally import default styling
import 'vue-search-input/dist/styles.css'
//import { v4 as uuidv4 } from 'uuid' //generate random ID
import { collection, onSnapshot, doc, addDoc, deleteDoc, updateDoc } from 'firebase/firestore'
import { db } from '@/firebase'
import { useRouter } from 'vue-router'

const router = useRouter();

const search = ref([])
const unicorns = ref([])
const unicorn_collection_reference = collection(db, 'unicorns')

onMounted(() => {
	//access documents in real time, keeps on listening 
	onSnapshot(unicorn_collection_reference, (querySnapshot) => {
		const holder = []
		querySnapshot.forEach((doc) => {
			const unicorn = {
	 		id: doc.id,
	 		URL: doc.data().URL,
	 		culture: doc.data().culture,
	 		done: doc.data().done,
	 		title: doc.data().title
	 		}
	 		holder.push(unicorn) //holder array populated by unicorns
		})
		unicorns.value = holder
	})
})

const addNew = ref('')
const addUnicorn = () => {
	// const newUnicorn = {
	// 	id: uuidv4(),
	// 	URL: 'none',
	// 	culture: 'none',
	// 	done: false,
	// 	title: addNew.value
	// }
	// unicorns.value.unshift(newUnicorn)
	
	addDoc(unicorn_collection_reference, {
		URL: 'none',
	 	culture: 'none',
	 	done: false,
	 	title: addNew.value
	});
	addNew.value = ''
}
const deleteUnicorn = id => {
	//.filter() to loop through unicorn array
	//grab all unicorns that don't have the id
	//unicorns.value = unicorns.value.filter(searching => searching.id !== id)

	deleteDoc(doc(unicorn_collection_reference, id))
}
const toggleDone = id => {
	//find the position of unicorn in array with id
	//use position/index to update the correct unicorn
	const index = unicorns.value.findIndex(searching => searching.id == id)
	// Set the "capital" field of the city 'DC'
	updateDoc(doc(unicorn_collection_reference, id), {
		done: !unicorns.value[index].done
	})
}
</script>


<template>
<SearchInput v-model="searchVal" placeholder="Search unicorns..." v-on:keyup.enter="window.location.assign('https://project-61dcd.web.app/404')" />
<br /><br />
<!-- commenting out second sample search bar
<br /><br />
<input class="input is-medium" type="text" placeholder="Medium input" v-on:keydown.enter="this.$router.push({ name: '404' })">
<br /><br /><br /><br />
--->
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