async function init(){
    const contatos = await api.buscarContatos();
    ui.renderizarcontatos(contatos)
}

const form = document.getElementById("contact-form");

form.addEventListener("submit", async(event)=>{
    event.preventDefault();
    const novoContato = {
        name: event.target.name.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        favorite: false
    };

    await api.salvarContato(novoContato);
    init()
})

init();