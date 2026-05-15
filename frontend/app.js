const API_URL = 'YOUR_API_GATEWAY_URL';
const TOKEN = localStorage.getItem('token');

const expenseForm = document.getElementById('expense-form');
const expenseList = document.getElementById('expense-list');

async function loadExpenses() {
    const response = await fetch(API_URL + '/expenses', {
        headers: {
            Authorization: TOKEN
        }
    });

    const expenses = await response.json();

    expenseList.innerHTML = '';

    expenses.forEach(expense => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span>
                ${expense.date} - $${expense.amount} - ${expense.category}
            </span>
            <button onclick="deleteExpense('${expense.expenseId}')">
                Delete
            </button>
        `;

        expenseList.appendChild(li);
    });
}

expenseForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const expense = {
        date: document.getElementById('date').value,
        amount: Number(document.getElementById('amount').value),
        category: document.getElementById('category').value,
        description: document.getElementById('description').value
    };

    await fetch(API_URL + '/expenses', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: TOKEN
        },
        body: JSON.stringify(expense)
    });

    expenseForm.reset();
    loadExpenses();
});

async function deleteExpense(id) {
    await fetch(API_URL + '/expenses/' + id, {
        method: 'DELETE',
        headers: {
            Authorization: TOKEN
        }
    });

    loadExpenses();
}

loadExpenses();
