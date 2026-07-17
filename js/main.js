async function init(){
    const contatos = await api.buscarContatos();
    ui.renderizarcontatos(contatos)
}

init();