var button = document.querySelector(".btn-primary")

button.addEventListener("click", function (e) {


    var h1 = document.querySelector(".h1")
    h1.innerHTML = "";
    var imageBox = document.querySelector(".image-box");
    var image = document.createElement("img")
    image.style.margin = "10px"
    image.style.boxShadow = "10px 10px 5px 4px rgb(107, 119, 129)"
    image.style.width = "400px"
    image.src = "http://thecatapi.com/api/images/get?format=src&type=gif"
    imageBox.appendChild(image);
    console.log(typeof image)
    image.addEventListener("click", function () {
        imageBox.removeChild(image);

    })



})