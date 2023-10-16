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




const inputImg = document.getElementById('imgInput')
const img = document.getElementById('img')

function getImg(event){

     const file = event.target.files[0]; // 0 = get the first file

     // console.log(file);

     let url = window.URL.createObjectURL(file);

     // console.log(url)

     img.src = url
}

inputImg?.addEventListener('change', getImg)