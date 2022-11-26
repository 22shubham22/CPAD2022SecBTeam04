async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();

  // Performs label detection on the image file
const [result] = await client.textDetection('./uploadedImages/Image1836841280.png');
const detections = result.textAnnotations;
console.log('Text:');
detections.forEach(text => console.log(text));
}
quickstart()