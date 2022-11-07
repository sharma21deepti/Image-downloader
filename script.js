const image = document.getElementById("image");
const find = document.getElementById("find");
const box= document.getElementById("box");
var url = "";
let save=document.getElementById("save");
function getrandom() {
  var text = document.getElementById("name").value;
  var height = document.getElementById("height").value;
  var width = document.getElementById("width").value;

  var api = `https://source.unsplash.com/${width}x${height}/?${text}`

  fetch(api)
    .then((res) => res.url)
    .then((data) => {
      console.log(data);
      box.src=data;
      url = data;
  
    });
}

function saverandom(){
    fetch(url)
    .then(res=>res.blob())
    .then(blobobject =>{
        const blob =window.URL.createObjectURL(blobobject);
        const anchor=document.createElement('a');
        anchor.style.display='none';
        anchor.href=blob;
        anchor.download=document.getElementById("name").value;
        document.body.appendChild(anchor);
        anchor.click();
        window.URL.revokeObjectURL(blob);
    })
    .catch(() => console.log('error in downloading file'));
}
// save.addEventListener('click',() =>{
//   let imgPath=img.getAttribute('src');
//   let fileName=getfileName(imgPath);
//   saveAs(imgPath, fileName);

// });
// function saverandom(str){
//   return str.substring(str.lastIndexOf('/')+1);
// }
