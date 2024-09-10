//mensagem de alerta
function bemVindo(){
    window.alert('Seja bem vindo!');
}



// Função para gerar cores aleatórias no formato hexadecimal
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


// Função que altera as cores dos elementos ao clicar no botão
function changeColors() {
    const header = document.getElementById('header');
    const footer = document.getElementById('footer');
    const btn = document.getElementById('btn');
    const button = document.getElementById('colorButton');

    // Gerar uma única cor aleatória
    const randomColor = getRandomColor();

    // Aplicando cores aleatórias
    header.style.backgroundColor = randomColor;
    footer.style.backgroundColor = randomColor;
    button.style.backgroundColor = randomColor;
    btn.style.backgroundColor = randomColor; 
}

// Adiciona o evento de clique ao botão
document.getElementById('colorButton').addEventListener('click', changeColors);
