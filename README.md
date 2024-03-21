# Wizart Vision SDK for JavaScript

*Vision API's client SDK for Node.js*

The Wizart Vision SDK is a set of software development tools and libraries provided by Wizart.ai that enables developers to integrate the Wizart Vision API's capabilities into their applications more easily. The SDK acts as a bridge between the Vision API and the developer's application by providing a standardized set of functions and interfaces that the developer can use to access the API's functionality.

Looking for more documentation?

* [Wizart Vision API Review](https://wizart.ai/vision-api)
* [Wizart Vision SDK for Python](https://github.com/wizart-tech/wizart-sdk-for-python)

⭐️ Start using Wizart Vision API with the [RapirAPI platform](https://rapidapi.com/wizart-ai-wizart-ai-default/api/vision-api).

## Features

Wizart Vision technology base consists of several core components that power our computer vision solutions. These include segmentation, detection, reconstruction, and analysis, each of which plays a critical role in enabling advanced visual capabilities. Below are links to learn more about each component and how they contribute to our powerful Vision API.

- [Technologies for Home Interior](https://wizart.ai/technologies)
- [Indoor Semantic Segmentation](https://wizart.ai/segmentation)
- [Indoor Object Detection](https://wizart.ai/detection)
- [3D Interior Layout Reconstruction](https://wizart.ai/reconstruction)
- [Indoor Scene Analysis & Classification](https://wizart.ai/analysis)

https://user-images.githubusercontent.com/408283/221159389-16f146f9-fda7-4dfb-84e4-16d2d1500e59.mp4

## Installation
```shell
npm install wizart-vision
```
## Authentication
Once you received X-RapidAPI-Key, you need initialize vision client
```js
const wv = require('./dist/main.bundle.js')

const client = new wv.WizartVision("your X-RapidAPI-Key")
```
## Usage
The client allows you to perform requests similar to those described in the documentation.
* [segmentation](https://vision-api.wizart.ai/#815786b5-c8a5-42fa-94d5-f7a546e7804b)
* [detection](https://vision-api.wizart.ai/#c07fcc19-4b45-4803-b9cf-e1ab85100ed6)
* [reconstruction](https://vision-api.wizart.ai/#7d66e46a-e70f-4806-9a4d-a63659bf4ad3)
* [analysis](https://vision-api.wizart.ai/#29213748-6fe3-4086-ac90-ae8fe8b1bb7f)
* [interior](https://vision-api.wizart.ai/#c2d17dae-e9cc-4c3f-8097-5201524e015a)

You will operate just with few parameters.

- resource - file system path or http link to the image
- feature - some entity available in Wizart Vision SDK

```js
const wv = require('./dist/main.min.js')

// use this FeatureTypes object for segmentation, detection, reconstruction and interior calls
wv.FeatureTypes

// currently supported feature types
wv.FeatureTypes.WALL
wv.FeatureTypes.CEILING
wv.FeatureTypes.FLOOR
wv.FeatureTypes.WINDOW

// use this object for different analysis calls
wv.AnalysisTypes

// currently supported analysis types
wv.AnalysisTypes.CAMERA
wv.AnalysisTypes.IMAGE_INFO
wv.AnalysisTypes.INTERIOR_TYPE
```

### Segmentation
Indoor scene semantic decomposition process.

Obtaining indoor segmentation mask
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.segmentation(data).then(response => {})
```
Segmentation by feature (i.e. by feature/surface object)
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.segmentation(data, wv.FeatureTypes.WALL).then(response => {})
```
To obtain only the mask contours, add `vectorized` param by setting it to `true`.
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);
data.append('vectorized', true)

client.segmentation(data, wv.FeatureTypes.WALL).then(response => {})
```

### Detection
Localize objects coordinates in the photo.

Detect all supported entities
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.detection(data).then(response => {})
```
Single entity detection, e.g. detect only the ceiling
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.detection(data, wv.FeatureTypes.CEILING).then(response => {})
```
### Reconstruction
Obtain information about the 3D dimensions (real sizes) and positions of scene objects in the photo.

Reconstruct all supported entities and scene params
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.reconstruction(data).then(response => {})
```
Reconstruct a specific entity and scene params 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.reconstruction(data, wv.FeatureTypes.FLOOR).then(response => {})
```
### Analyze
The Analysis API includes a set of different computer vision solutions based on neural networks.

Analyse image, interior and camera
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.analysis(data).then(response => {})
```
Perform a specific type of analysis 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.analysis(data, wv.AnalysisTypes.CAMERA).then(response => {})
```
### Interior
Provides the ability to get all the data on the requested feature that we were able to extract from the uploaded interior photo.

Describe all entities
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.interior(data).then(response => {})
```

Get data for a specific entity
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.interior(data, wv.FeatureTypes.WALL).then(response => {})
```
