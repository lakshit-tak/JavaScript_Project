const expenseName = document.getElementById("expenseName");

const expenseAmount = document.getElementById("expenseAmount");

const addBtn = document.getElementById("addBtn");

const expenseList = document.getElementById("expenseList");

const total = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

const addExpense = () => {

    const name = expenseName.value.trim();

    const amount = parseFloat(expenseAmount.value);

    if (name === "" || isNaN(amount)) {

        alert("Please enter expense and amount");

        return;
    }


    const expense = {

        name: name,

        amount: amount

    };


    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    showExpenses();

    calculateTotal();

    expenseName.value = "";

    expenseAmount.value = "";

};


const showExpenses = () => {

    expenseList.innerHTML = "";


    expenses.forEach((expense, index) => {

        const li = document.createElement("li");

        li.innerHTML = `
            <span>
                ${expense.name} - ₹${expense.amount}
            </span>

            <button class="delete">
                Delete
            </button>
        `;


        const deleteBtn = li.querySelector(".delete");

        deleteBtn.addEventListener("click", () => {

            expenses.splice(index, 1);

            localStorage.setItem("expenses", JSON.stringify(expenses));

            showExpenses();

            calculateTotal();

        });


        expenseList.appendChild(li);

    });

};

const calculateTotal = () => {

    const totalAmount = expenses.reduce((sum, expense) => {

            return sum + expense.amount;

        }, 0);


    total.textContent = totalAmount;

};


addBtn.addEventListener(
    "click",
    addExpense
);


expenseAmount.addEventListener(
    "keydown",
    (e) => {

        if (e.key === "Enter") {

            addExpense();

        }

    }
);

showExpenses();
calculateTotal();