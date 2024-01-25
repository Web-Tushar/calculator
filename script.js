let display = document.querySelector(".display_input")
let btndelete = document.querySelector("#btndelete")
let btnDivision = document.querySelector("#btnDivision")
let btnplusminus = document.querySelector(".btn_plus_minus")
let btn_7 = document.querySelector("#btn_7")
let btn_8 = document.querySelector("#btn_8")
let btn_9 = document.querySelector("#btn_9")
let btn_multiplie = document.querySelector("#btn_multiplie")
let btn_4 = document.querySelector("#btn_4")
let btn_5 = document.querySelector("#btn_5")
let btn_6 = document.querySelector("#btn_6")
let btn_minus = document.querySelector("#btn_minus")
let btn_1 = document.querySelector("#btn_1")
let btn_2 = document.querySelector("#btn_2")
let btn_3 = document.querySelector("#btn_3")
let btn_plus = document.querySelector("#btn_plus")
let btn_modulus = document.querySelector("#btn_modulus")
let btn_zero = document.querySelector("#btn_zero")
let btn_equal = document.querySelector("#btn_equal")
let btndot = document.querySelector("#btndot")


btn_9.addEventListener("click", function () {
     display.innerHTML += 9
 })
 btn_8.addEventListener("click", function () {
     display.innerHTML += `8`
 })
 btn_7.addEventListener("click", function () {
     display.innerHTML += `7`
 })
 btn_6.addEventListener("click", function () {
     display.innerHTML += `6`
 })
 btn_5.addEventListener("click", function () {
     display.innerHTML += `5`
 })
 btn_4.addEventListener("click", function () {
     display.innerHTML += `4`
 })
 btn_3.addEventListener("click", function () {
     display.innerHTML += `3`
 })
 btn_2.addEventListener("click", function () {
     display.innerHTML += `2`
 })
 btn_1.addEventListener("click", function () {
     display.innerHTML += `1`
 })
 btn_zero.addEventListener("click", function () {
     display.innerHTML += `0`
 })
 
 btndot.addEventListener("click", function () {
     display.innerHTML += `.`
 })
 btnDivision.addEventListener("click", function () {
     display.innerHTML += `/`
 })
 btn_multiplie.addEventListener("click", function () {
     display.innerHTML += `*`
 })
 btn_minus.addEventListener("click", function () {
     display.innerHTML += `-`
 })
 btn_plus.addEventListener("click", function () {
     display.innerHTML += `+`
     
 })
 
 btn_equal.addEventListener("click", function () {
     let getResult = display.innerHTML;
     let getOutput = eval(getResult)
     display.innerHTML = getOutput
 })
 
 btndelete.addEventListener("click", function () {
     display.innerHTML = "";
 })
