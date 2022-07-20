<script>
import { ref } from 'vue'
import '@tensorflow/tfjs-backend-cpu'
import '@tensorflow/tfjs-backend-webgl'
//import {default as coco} from  '/node_modules/tensorflow-models/coco-ssd/dist/coco-ssd.js'
//import '@tensorflow-models/coco-ssd'
//const cocoSsd = require('@tensorflow-models/coco-ssd')
//import { cocoSssd } from '@tensorflow-models/coco-ssd'
import * as cocoSsd from "@tensorflow-models/coco-ssd"

export default {
	setup(){
		const imgRef = ref('')
		const videoRef = ref('')
		const isLoading = ref(false)
		const isStreaming = ref(false)
		const result = ref([])
		async function detect(){
			const img = imgRef.value

			isLoading.value = true

			// Load the model.
  			const model = await cocoSsd.load()

  			// Classify the image.
  			const predictions = await model.detect(img)

			result.value = predictions
			isLoading.value = false
		}
		async function openCamera(){
			if(navigator.mediaDevices.getUserMedia){
				const devices = await navigator.mediaDevices.enumerateDevices()
				const cams = devices.filter((device) => device.kind == "videoinput")
				camId = cams[0].deviceId
				navigator.mediaDevices.getUserMedia({video:{deviceId: {exact:camId}}}).then(stream => {
					isStreaming.value = true
					videoRef.value.srcObject = stream
				})
			}
		}
		function stopStreaming(){
			const stream = videoRef.value.srcObject
			const tracks = stream.getTracks()
			tracks.map((track) => track.stop())
		}
		return { imgRef, result, detect, isLoading, openCamera, videoRef, isStreaming, stopStreaming }
	}
}
</script>

<template>
<div>
	<h class="text-2xl my-4">Tensorflow Object Detection Tutorial</h>
	<div class="flex flex-wrap justify-center my-2">
		<div class="w-full flex justify-center">
			<button
			v-if="!isStreaming"
			@click="openCamera"
			class="w-32 rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1">
			Open Camera
			</button>
			<button
			v-else
			@click="stopStreaming"
			class="w-32 rounded shadow-md bg-gradient-to-r from-blue-800 to-indigo-800 text-white px-2 py-1">
			Stop Streaming
			</button>
		</div>
		<video ref="videoRef" autoplay="true" width="100" />
	</div>
	<div class="flex flex-wrap justify-center">
		<img ref="imgRef" 
		src="https://images.unsplash.com/photo-1567581935884-3349723552ca" 
		width="200"
		crossorigin="anonymous" />
	</div>
	<div class="w-full text-center my-4">
		<button @click="detect" 
		class="w-32 rounded shadow-md bg-gradient-to-r from-red-800 to-pink-800 text-white p-2">
		<span v-if="isLoading">Loading...</span>
		<span v-else>Detect object</span>
		</button>
		<div v-if="result.length > 0"> <p>{{ result[0].class }}</p> </div>
	</div>
</div>
</template>

<style>
</style>