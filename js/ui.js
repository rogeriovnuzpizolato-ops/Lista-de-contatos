const ui = {
    renderizarcontatos(contatos){
        //limpar a lista de contatos
        const contactList = document.getElementById("contacts-list");
        contactList.innerHTML = ""
        // percorrer o array e clonar o template para cada contato 
        contatos.forEach(contato => {
            const cardTemplate = document.getElementById("contact-card-template");
            const cloneTemplate = cardTemplate.content.cloneNode(true)
            const li = cloneTemplate.querySelector(".contact-card")
            
            li.dataset.id = contato.id;

            const name = li.querySelector(".contact-name")
            const phone = li.querySelector(".contact-phone")
            const email = li.querySelector(".contact-email")

            name.textContent = contato.name;
            phone.textContent = contato.phone;
            email.textContent = contato.email;

            contactList.appendChild(li);
        })
    }
}
