# Wizart Computer Vision SDK for JavaScript

Wizart Computer Vision API client for Node.js

The Computer Vision service provides developers with access to advanced algorithms for processing images and returning information. Computer Vision algorithms analyze the content of an image in different ways, depending on the visual features you're interested in.

You can use Computer Vision in your application to:
- Indoor semantic segmentation.
- Interior 3d reconstruction.
- Indoor layout and object detection.
- Analytics data such as image quality, interior type, camera parameters.

Looking for more documentation?

* [SDK reference documentation](https://vision-api.wizart.ai/)
* [Wizart Vision review](https://wizart.ai/vision-api)

If you need access to Wizart Vision API, you can get [API token](https://wizart.ai/trial?source=vision_api) by sending a request

## Installation
```shell
npm install wizart-vision
```
## Authentication
Once you received Vision API token, you need initialize vision client
```js
const wv = require('./dist/main.bundle.js')

const client = new wv.WizartVision("your token")
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
const wv = require('./dist/main.bundle.js')

// use it for segmentation, detection, reconstruction and interior calls
wv.FeatureTypes

// contains next entities
wv.FeatureTypes.WALL
wv.FeatureTypes.CEILING
wv.FeatureTypes.FLOOR
wv.FeatureTypes.WINDOW

// use it for analysis call
wv.AnalysisTypes

// contains next entities
wv.AnalysisTypes.CAMERA
wv.AnalysisTypes.IMAGE_INFO
wv.AnalysisTypes.INTERIOR_TYPE
```

### Segmentation
Semantic segmentation
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.segmentation(data).then(response => {})
```
Segmentation by feature
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.segmentation(data, wv.FeatureTypes.WALL).then(response => {})
```
To get mask contours
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);
data.append('vectorized', true)

client.segmentation(data, wv.FeatureTypes.WALL).then(response => {})
```

### Detection
All entities detection
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.detection(data).then(response => {})
```
Single entity detection
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.detection(data, wv.FeatureTypes.CEILING).then(response => {})
```
### Reconstruction
Multiple 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.reconstruction(data).then(response => {})
```
Single 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.reconstruction(data, wv.FeatureTypes.FLOOR).then(response => {})
```
### Analyze
Multiple 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.analysis(data).then(response => {})
```
Single 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.analysis(data, wv.AnalysisTypes.CAMERA).then(response => {})
```
### Interior
All
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.interior(data).then(response => {})
```
Single 
```js
const data = new FormData();
data.append("room_image", inputFile.files[0]);

client.interior(data, wv.FeatureTypes.WALL).then(response => {})
```