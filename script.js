




// const video = document.getElementById('video');
//       const canvas = document.getElementById('canvas');
//       const snap = document.getElementById('snap');
//       const constraints = {
//         video: {
//           facingMode: 'environment'
//         }
//       };

//       async function init() {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia(constraints);
//           video.srcObject = stream;
//         } catch (err) {
//           console.error(err);
//         }
//       }

//       function takeSnapshot() {
//         const context = canvas.getContext('2d');
//         context.drawImage(video, 0, 0, canvas.width, canvas.height);
//       }

//       init();

//       snap.addEventListener('click', () => {
//         takeSnapshot();
//       });

















const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const snap = document.getElementById('snap');
const constraints = {
  video: {
    facingMode: 'environment'
  }
};

async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = stream;
  } catch (err) {
    console.error(err);
  }
}

function takeSnapshot() {
  const context = canvas.getContext('2d');
  
  // Set canvas dimensions based on video properties
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  
  // Draw the image on the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);
}

init();

snap.addEventListener('click', () => {
  takeSnapshot();
});
