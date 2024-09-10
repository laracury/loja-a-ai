// Função para verificar se os campos estão preenchidos
function validateForm() {
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;

    if (nome === "") {
        alert("O campo Nome está vazio!");
    
        return false; // Para a execução se o campo estiver vazio
    }

    if (email === "") {
        alert("O campo Email está vazio!");
        event.preventDefault();
        return false;
    }

    // Se ambos os campos estiverem preenchidos
    alert("Formulário enviado com sucesso!");
    return true;
}

// Adiciona o evento de clique ao botão
document.getElementById('btnConfirm').addEventListener('click', validateForm);