const fs = require('fs');

async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: "./crossplatform-369812-6c68c2c44e0c.json"
  });

  // Performs label detection on the image file
const [result] = await client.textDetection('./uploadedImages/Image3999045923.png');
const detections = result.textAnnotations;
const regEx = /^([0-2][0-9]|(3)[0-1])(\/|.)(((0)[0-9])|((1)[0-2]))(\/|.)\d{4}$/;

// console.log('Text:');
// detections.forEach(text => console.log(text));
try {
  fs.writeFileSync('C:/Users/hp/OneDrive/Documents/GitHub/CPAD2022SecBTeam04/data.json', JSON.stringify(detections));
  // file written successfully
} catch (err) {
  console.error(err);
}
}
quickstart()