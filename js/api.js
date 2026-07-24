const api = {
    async buscarContatos(){
        try {
            const response = await fetch("http://localhost:3000/contacts")
            return await response.json()
        } catch (error) {
            alert("erro ao buscar os contatos")
            throw(error)
        }
    },

    async salvarContato(contato){
       try {
        const response = await fetch("http://localhost:3000/contacts",{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(contato)
        })
        return await response.json()
       } catch (error) {
        alert("Erro ao salvar contato")
        throw error
       }
    },

    async editarContato(contato){
       try {
        const response = await fetch(`http://localhost:3000/contacts/${contato.id}`,{
            method: "PUT",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(contato)
        })
        return await response.json()
       } catch (error) {
        alert("Erro ao editar contato")
        throw error
       }
    },

    async deletarContato(id){
        try {
            const response = await fetch(`http://localhost:3000/contacts/${id}`,{
                method: "DELETE"
            });
            return await response.json();
        } catch (error) {
            alert("Erro ao deletar o contato");
            throw error;
        }
    }
}