const api = {
    async buscarContatos(){
        try {
            const response = await fetch("http://localhost:3000/contacts")
            return await response.json()
        } catch (error) {
            alert("erro ao buscar os contatos")
            throw(error)
        }
    }
}