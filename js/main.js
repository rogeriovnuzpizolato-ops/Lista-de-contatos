let contatos;
let contatoEditadoId = null ;
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

    if(contatoEditadoId === null){
        await api.salvarContato(novoContato);
    }else{
        novoContato.id = contatoEditadoId ;
        await api.editarContato(novoContato);
        contatoEditadoId = null ;
    }

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
        case "favorite":{
            const contatoAtual = contatos.find(contato => contato.id.toString() === card.dataset.id.toString());
            contatoAtual.favorite = !contatoAtual.favorite;
            await api.editarContato(contatoAtual);
            init()
            break;
        }  
        case "edit":{
            const contatoAtual = contatos.find(contato => contato.id.toString() === card.dataset.id.toString());
            form.name.value = contatoAtual.name;
            form.phone.value = contatoAtual.phone;
            form.email.value = contatoAtual.email;

            contatoEditadoId = contatoAtual.id;
            break;
        }
        case "delete":
            break;        
    }
})

init();