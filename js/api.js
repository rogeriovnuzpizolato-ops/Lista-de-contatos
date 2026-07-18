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
    }
}