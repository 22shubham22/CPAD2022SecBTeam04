const fs = require('fs');

async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "./crossplatform-369812-6c68c2c44e0c.json"
  });

  // Performs label detection on the image file
const [result] = await client.textDetection('./uploadedImages/complex.jpeg');
const detections = result.textAnnotations;
// console.log('Text:');
// detections.forEach(text => console.log(text));
try {
  fs.writeFileSync('C:/Users/hp/OneDrive/Documents/GitHub/CPAD2022SecBTeam04/data.txt', JSON.stringify(detections));
  // file written successfully
} catch (err) {
  console.error(err);
}
}
quickstart()