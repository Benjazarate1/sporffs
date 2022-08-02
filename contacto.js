//formulario
let nombreForm = document.getElementById("nombre").value;
let apellidoForm = document.getElementById("apellido").value;
let emailForm = document.getElementById("email").value;
let consultaForm = document.getElementById("disabledSelect").value;
let otraConsultaForm = document.getElementById("floatingTextarea").value;


const formulario = document.querySelector("form");
formulario.addEventListener("submit", (e)=> {
        e.preventDefault();
        console.log("Fomulario Enviado")
});

const text = document.querySelector("textarea");

text.addEventListener("change", ()=>{
        console.log(`La consulta fue: ${text.value}`);
})