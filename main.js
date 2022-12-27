let input1 = document.querySelector(".firstInput")
let input2 = document.querySelector(".secondInput")
let input3 = document.querySelector(".thirdInput")
let input4 = document.querySelector(".fourInput")
let input5 = document.querySelector(".fiveInput")

const inputs = document.querySelector("input") //RECORDAR QUE DEBO DE ELIMINAR EL MARGIN TOP DE LOS INPUTS
//AL HACER APARECER LOS MENSAJES DE ERROR Y TAMBIEN EL MARGIN TOP DEL BOTON

//    background-image: url("./images/icon-error.svg");
//    background-repeat: no-repeat;
//    background-position: 95% center;
//    background-size: auto;
let estado1 = ""
let estado2 = ""
let estado3 = ""
let estado4 = ""
const p1 = document.querySelector(".error1")
const p2 = document.querySelector(".error2")
const p3 = document.querySelector(".error3")
const p4 = document.querySelector(".error4")

const boton = document.querySelector(".boton")




const validar1 = () => {
    if(input1.value == ""){
        console.log("funcionando")
        input1.style.backgroundImage = "url(./images/icon-error.svg)"
        p1.style.display = "block"
        input2.style.marginTop = "0px"
        estado1 = "on"
    }
}


const validar2 = () => {
    if(input2.value == ""){
        input2.style.backgroundImage = "url(./images/icon-error.svg)"
        p2.style.display = "block"
        input3.style.marginTop = "0px"
        estado2 = "on"
    }
}

const validar3 = () =>{
    if(input3.value == ""){
        input3.style.backgroundImage = "url(./images/icon-error.svg)"
        p3.style.display = "block"
        input4.style.marginTop = "0px"
        estado3 = "on"
    }
}

const validar4 = () => {
    if(input4.value == ""){
        input4.style.backgroundImage = "url(./images/icon-error.svg)"
        p4.style.display = "block"
        boton.style.marginTop = "0px"
        estado4 = "on"
    }
}

const apagar1 = () => {
    if(estado1 == "on" && input1.value.length >= 1){
        input1.style.backgroundImage = ""
        p1.style.display = "none"
        boton.style.marginTop = "2em"
        input2.style.marginTop = "2em"
    }
}
const apagar2 = () => {
    if(estado2 == "on" && input2.value.length >= 1){
        input2.style.backgroundImage = ""
        p2.style.display = "none"
        boton.style.marginTop = "2em"
        input3.style.marginTop = "2em"
    }
}
const apagar3 = () => {
    if(estado3 == "on" && input3.value.length >= 1){
        input3.style.backgroundImage = ""
        p3.style.display = "none"
        boton.style.marginTop = "2em"
        input4.style.marginTop = "2em"
    }
}
const apagar4 = () => {
    if(estado4 == "on" && input4.value.length >= 1){
        input4.style.backgroundImage = ""
        p4.style.display = "none"
        boton.style.marginTop = "2em"
    }
}
boton.addEventListener("click", validar1)
boton.addEventListener("click", validar2)
boton.addEventListener("click", validar3)
boton.addEventListener("click", validar4)
boton.addEventListener("click", apagar1)
boton.addEventListener("click", apagar2)
boton.addEventListener("click", apagar3)
boton.addEventListener("click", apagar4)