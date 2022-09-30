const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const colorValue= document.getElementById("hex-value");

btn.addEventListener("click",function(){
    const randomColors= getRandomColor()
    document.body.style.backgroundColor = colors[randomColors]
    colorValue.innerText = colors[randomColors]
})
function getRandomColor(){
    return Math.floor(Math.random() * colors.length)
}
