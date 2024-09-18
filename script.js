function showManagement() {
    document.getElementById('card-page').style.display = 'none';
    document.getElementById('management-page').style.display = 'block';
}
function showCard() {
    document.getElementById('card-page').style.display = 'block';
    document.getElementById('management-page').style.display = 'none';
}
function updateBalance(operation) {
    let currentBalance = parseFloat(localStorage.getItem('cardBalance') || '0');
    const amount = operation === 'add' 
        ? parseFloat(document.getElementById('add-amount').value || '0')
        : parseFloat(document.getElementById('subtract-amount').value || '0');
    if (operation === 'add') {
        currentBalance += amount;
    } else {
        currentBalance = Math.max(0, currentBalance - amount);
    }
    localStorage.setItem('cardBalance', currentBalance.toFixed(2));
    document.getElementById('balance').textContent = currentBalance.toFixed(2);
    document.getElementById('add-amount').value = '';
    document.getElementById('subtract-amount').value = '';
    alert(`Solde mis à jour : ${currentBalance.toFixed(2)} EUR`);
}
function initializeBalance() {
    const balance = localStorage.getItem('cardBalance') || '0,00';
    document.getElementById('balance').textContent = balance;
}
initializeBalance();

function updateBalance(operation) {
    let currentBalance = parseFloat(localStorage.getItem('cardBalance') || '0');
    const amount = operation === 'add' 
        ? parseFloat(document.getElementById('add-amount').value || '0')
        : parseFloat(document.getElementById('subtract-amount').value || '0');
    if (operation === 'add') {
        currentBalance += amount;
    } else {
        currentBalance = Math.max(0, currentBalance - amount); // Prevent negative balance
    }
    localStorage.setItem('cardBalance', currentBalance.toFixed(2));
    // Reset input fields
    document.getElementById('add-amount').value = '';
    document.getElementById('subtract-amount').value = '';
    alert(`Solde mis à jour : ${currentBalance.toFixed(2)} EUR`);
}