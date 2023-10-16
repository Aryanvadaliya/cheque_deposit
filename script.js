// function previewFile()
// {
//     console.log("hello")
//     var preview = document.querySelector('cheque-image');
//     var file    = document.getElementById('cheque-file').files[0];
//     var reader  = new FileReader();
  
//     reader.onloadend = function ()
//     {
//       preview.src = reader.result;
//     }
  
//     if (file) 
//     {
//       reader.readAsDataURL(file);
//     } else 
//     {
//       preview.src = "";
//     }
// }




// const inputImg = document.getElementById('imgInput')
// const img = document.getElementById('img')

// function getImg(event){

//      const file = event.target.files[0]; // 0 = get the first file

//      // console.log(file);

//      let url = window.URL.createObjectURL(file);

//      // console.log(url)

//      img.src = url
// }

// inputImg?.addEventListener('change', getImg)




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
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
      }

      init();

      snap.addEventListener('click', () => {
        takeSnapshot();
      });