

let imgbox= document.getElementById("imgbox");

let input= document.getElementById("input");


function generateQR(){

    if(input.value.length > 0){
        imgbox.innerHTML = "";  // delete old qr code
        new QRCode(imgbox,{
            text :input.value,
             width:150,
             height:150
            });
            imgbox.classList.add("show-img");
    
}else{
    input.classList.add('blank');
    setTimeout(()=>{
         input.classList.remove('blank');   
    },1000);
}
}