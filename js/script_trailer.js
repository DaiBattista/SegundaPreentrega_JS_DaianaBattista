/*Trailers*/
let oficial_btn = document.getElementById("oficial_btn");
let teaser_btn = document.getElementById("teaser_btn");
let final_btn = document.getElementById("final_btn");
let oficial = document.getElementById("oficial");
let teaser = document.getElementById("teaser");
let final = document.getElementById("final");
oficial_btn.addEventListener('click', () => {
    oficial.style.display = 'block';
    teaser.style.display = 'none';
    final.style.display = 'none';
})
teaser_btn.addEventListener('click', () => {
    oficial.style.display = 'none';
    teaser.style.display = 'block';
    final.style.display = 'none';
})
final_btn.addEventListener('click', () => {
    oficial.style.display = 'none';
    teaser.style.display = 'none';
    final.style.display = 'block';
})