//formulario
const botonEnviar = document.querySelector(".botonForm");
const formulario = document.querySelector(".form");

formulario.addEventListener('submit', handleSubmit)
async function handleSubmit(e){
        e.preventDefault()
        const form = new FormData(this)
        const response= await fetch(this.action, {
                method: this.method,
                body: form,
                headers: {
                        'Accept': 'application/json'
                }
        })
        .catch(error => console.log(error))
        if(response.ok){
                this.reset()
        }
        
}


