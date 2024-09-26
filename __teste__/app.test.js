/**
 * @jest-environment jsdom
 */

const {
    generatePassword,
    calculateSum,
    addNote,
    removePassword,
    removeCalculation
} = require('../public/app.js');

describe('Testes de funcionalidades', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <button id="generate-password-btn">Gerar Senha</button>
            <button id="remove-password-btn">Remover Senha</button>
            <p>Senha: <span id="generated-password"></span></p>
            <input id="num1" placeholder="Número 1" type="number">
            <input id="num2" placeholder="Número 2" type="number">
            <button id="calculate-btn">Calcular Soma</button>
            <button id="remove-calculation-btn">Remover Resultado</button>
            <p>Resultado: <span id="calculation-result"></span></p>
            <input id="note-input" placeholder="Digite uma anotação">
            <button id="add-note-btn">Adicionar Anotação</button>
            <ul id="notes-list"></ul>
        `;
    });

    test('Deve gerar uma senha', () => {
        generatePassword();
        const generatedPassword = document.getElementById('generated-password').textContent;
        expect(generatedPassword).toHaveLength(12);
    });

    test('Deve remover a senha', () => {
        generatePassword();
        removePassword();
        expect(document.getElementById('generated-password').textContent).toBe('');
    });

    test('Deve calcular a soma de dois números', () => {
        document.getElementById('num1').value = '5';
        document.getElementById('num2').value = '10';
        calculateSum();
        expect(document.getElementById('calculation-result').textContent).toBe('15');
    });

    test('Deve remover o resultado da calculadora', () => {
        document.getElementById('num1').value = '5';
        document.getElementById('num2').value = '10';
        calculateSum();
        removeCalculation();
        expect(document.getElementById('calculation-result').textContent).toBe('');
    });

    test('Deve adicionar e remover uma anotação', () => {
        const noteInput = document.getElementById('note-input');

        noteInput.value = 'Anotação para remover';
        addNote();
        expect(document.getElementById('notes-list').children.length).toBe(1);

        const removeBtn = document.getElementById('notes-list').children[0].querySelector('button');
        removeBtn.click();

        expect(document.getElementById('notes-list').children.length).toBe(0);
    });

    test('Deve adicionar múltiplas anotações e removê-las', () => {
        const noteInput = document.getElementById('note-input');

        noteInput.value = 'Primeira anotação';
        addNote();
        noteInput.value = 'Segunda anotação';
        addNote();
        expect(document.getElementById('notes-list').children.length).toBe(2);

        const removeBtns = document.querySelectorAll('#notes-list button');
        removeBtns[0].click(); // Remove a primeira anotação

        expect(document.getElementById('notes-list').children.length).toBe(1);
        expect(document.getElementById('notes-list').children[0].textContent).toContain('Segunda anotação');
    });
});