let contatos;
const form = document.getElementById("contact-form");
const contactList = document.getElementById("contacts-list");

async function init(){
    contatos = await api.buscarContatos();
    ui.renderizarcontatos(contatos)
}

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
});

contactList.addEventListener("click", async (event)=>{
    const button = event.target.closest("[data-action]");
    if(button === null){
        return;
    }

    const card = button.closest("[data-id]");
    const id = card.dataset.id;

    switch(button.dataset.action){
        case "favorite":
            const contatoAtual = contatos.find(contato => contato.id.toString() === card.dataset.id.toString());
            contatoAtual.favorite = !contatoAtual.favorite;
            await api.editarContato(contatoAtual);
            init()
            break;
        case "edit":
            break;
        case "delete":
            break;        
    }
})

init();