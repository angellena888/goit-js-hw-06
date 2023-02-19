const input = document.getElementById('name-input');
const output = document.getElementById('name-output');

input.addEventListener("input", (event) => {
    const inputText = event.currentTarget.value;
    output.textContent = inputText ? inputText : 'Anonymous';
});
