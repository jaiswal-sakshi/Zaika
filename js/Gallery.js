document.querySelectorAll('.column img').forEach(image =>{
    image.onclick =()=>{
        document.querySelector('.popup-image').style.display='block';  
        document.querySelector('.popup-image img').src =image.getAttribute('src');

    }
});

// for downloading the image

document.querySelectorAll('.NUB button').forEach(btn =>{
    btn.onclick =()=>{
        // document.querySelector('.popup-image').style.display='block';  
        let btnSrc =document.querySelector('.column img').src;
        let downloads=document.getElementById("download")
        downloads.setAttribute("href",btnSrc)
        downloads.setAttribute("download",btnSrc)

    }
});
document.querySelector('.popup-image span').onclick=()=>{
    document.querySelector('.popup-image').style.display='none';   
}

