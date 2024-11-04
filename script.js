function multiply() {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    
    if (!isNaN(num1) && !isNaN(num2)) {
        const product = num1 * num2;
        document.getElementById('result').textContent = product;
    } else {
        document.getElementById('result').textContent = 0;
    }
}