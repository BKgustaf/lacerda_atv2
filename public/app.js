// Função para gerar uma senha aleatória
function generatePassword() {
    const length = 12;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('generated-password').textContent = password;
}

// Função para calcular a soma de dois números
function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('calculation-result').textContent = result;
}

// Função para remover a senha gerada
function removePassword() {
    document.getElementById('generated-password').textContent = '';
}

// Função para remover o resultado da calculadora
function removeCalculation() {
    document.getElementById('calculation-result').textContent = '';
}

// Função para adicionar uma anotação
function addNote() {
    const noteInput = document.getElementById('note-input');
    const note = noteInput.value.trim();
    if (note) {
        const li = document.createElement('li');
        li.textContent = note;

        // Criar o botão de remover
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remover';
        removeBtn.onclick = () => {
            li.remove(); // Remove a anotação
        };

        li.appendChild(removeBtn); // Adiciona o botão de remover à lista
        document.getElementById('notes-list').appendChild(li);
        noteInput.value = ''; // Limpar o input
    }
}

// Inicializa os event listeners
function init() {
    document.getElementById('generate-password-btn').onclick = generatePassword;
    document.getElementById('remove-password-btn').onclick = removePassword;
    document.getElementById('calculate-btn').onclick = calculateSum;
    document.getElementById('remove-calculation-btn').onclick = removeCalculation;
    document.getElementById('add-note-btn').onclick = addNote;
}

// Chama init quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', init);

// Exportando as funções para testes
module.exports = {
    generatePassword,
    calculateSum,
    addNote,
    removePassword,
    removeCalculation
};