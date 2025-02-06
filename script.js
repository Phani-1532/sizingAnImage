document.addEventListener("DOMContentLoaded", () => {
    let image = document.getElementById("image");
    let plusBtn = document.getElementById("plus-btn");
    let minusBtn = document.getElementById("minus-btn");
    let resetBtn = document.getElementById("reset-btn");
    let tooBig = document.getElementById("too-big");
    let display = document.getElementById('image-width')
    let imageWidth = 200;

    plusBtn.addEventListener('click', () => {
        imageWidth += 5;
        if(imageWidth > 250) {
            tooBig.textContent = "Image is too big";
            tooBig.style.display = "block";
        }
        else{
            display.textContent = ` ${imageWidth}px `;
            image.style.width = `${imageWidth}px`;
            tooBig.style.display = "none";
            tooBig.textContent = "";
        }
    })

    minusBtn.addEventListener('click', () => {
        imageWidth -= 5;
        if(imageWidth < 150) {
            tooBig.textContent = "Image is too small";
            tooBig.style.display = "block";
        }else{
            display.textContent = ` ${imageWidth}px `;
            image.style.width = `${imageWidth}px`;
            tooBig.style.display = "none";
            tooBig.textContent = "";
        }
    })

    resetBtn.addEventListener('click', () => {
        imageWidth = 200;
        image.style.width = `${imageWidth}px`;
        display.textContent = ` ${imageWidth}px `;
        tooBig.style.display = "none";
        tooBig.textContent = "";
    })
    
    
})



