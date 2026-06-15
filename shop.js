function openProduct(title,image,price,description){

    document.getElementById("modal").style.display="block";

    document.getElementById("modalTitle").textContent=title;

    document.getElementById("modalImg").src=image;

    document.getElementById("modalPrice").textContent=price;

    document.getElementById("modalDesc").textContent=description;
}

function closeProduct(){

    document.getElementById("modal").style.display="none";
}

window.onclick = function(event){

    let modal = document.getElementById("modal");

    if(event.target === modal){

        modal.style.display = "none";
    }
}
