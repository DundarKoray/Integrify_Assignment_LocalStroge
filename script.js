const itemDescription = document.querySelector('#item-description')
const itemCost = document.querySelector('#item-cost')
const addButton = document.querySelector('.add-button')
const select = document.querySelector('#selection')
const option = document.querySelectorAll('option')
const incomeData = document.querySelector('.income-data')
const expenseData = document.querySelector('.expense-data')


const accountBalance = {
    name: 'Koray',
    lastName: 'Dündar',
    incomes: [
        // {
        //     description: 'salary',
        //     amount: 2000,
        //     time: displayDateTime()
        // }, {
        //     description: 'Bonus',
        //     amount: 500,
        //     time: displayDateTime()
        // }
    ],
    expenses: [
        // {
        //     description: 'rent',
        //     amount: 7000,
        //     time: displayDateTime()
        // }, 
        // {
        //     description: 'food',
        //     amount: 500,
        //     time: displayDateTime()
        // }
], 
    addIncome: function (description, amount) {
        //load local storage
        let time = displayDateTime();
       
        this.incomes.push({description, amount, time});
        
        
        let json = localStorage.getItem('incomes')
        const retreivedFromLocal = JSON.parse(json);
        retreivedFromLocal.push({description, amount, time});
        localStorage.setItem('incomes', JSON.stringify(retreivedFromLocal), undefined, 4);
        
        console.log(retreivedFromLocal);
        
    },
    addExpense: function (description, amount) {
        let time = displayDateTime();
        this.expenses.push({description, amount, time});
        
        
        let json = localStorage.getItem('expenses')
        const retreivedFromLocal = JSON.parse(json);
        retreivedFromLocal.push({description, amount, time});
        localStorage.setItem('expenses', JSON.stringify(retreivedFromLocal), undefined, 4);
        
        console.log(retreivedFromLocal);
        
    },
    totalIncome: function () {
        let sum = 0;
        this.incomes.forEach(element => {
            sum = sum + element.amount;
            
        });
        return sum;
    },
    totalExpense: function () {
        let sum = 0;
        this.expenses.forEach(element => {
            sum = sum + element.amount; 
            
        });
        return sum;
    },
    calculateBalance: function () {
        let balance = this.totalIncome() - this.totalExpense();
        return balance;
    },
    getIncomeData: function () {
        let dataIncome = JSON.parse(localStorage.getItem('incomes'));
        incomeData.innerHTML = ''
        let result = dataIncome.forEach(data=> {
            incomeData.innerHTML += `<div class="incomes"><p>${data.description}</p><br>
            <p>${data.amount}</p><br><p>${data.time}</p><br></div>`;
        })
        return result;
    },
    getExpenseData: function () {
        let dataExpense = JSON.parse(localStorage.getItem('expenses'));
        expenseData.innerHTML = ''
        let result = dataExpense.forEach(data => {
            expenseData.innerHTML += `<div class="incomes"><p>${data.description}</p><br>
            <p>${data.amount}</p><br><p>${data.time}</p><br></div>`;
        })
       
        return result;
    }

}



// localStorage.setItem('incomes', JSON.stringify(accountBalance.incomes, undefined, 2));
// localStorage.setItem('expenses', JSON.stringify(accountBalance.expenses, undefined, 2));


// console.log(accountBalance.totalIncome());
// console.log(accountBalance.totalExpense());


//EVENT LISTENER
addButton.addEventListener('click', function () {
    let selectedValue = select.options[select.selectedIndex].value;
    // console.log(selectedValue)
    
    // accountBalance.showContent()
    
    if (selectedValue === 'income') {
        accountBalance.addIncome(itemDescription.value,parseInt(itemCost.value) )
        
        
        
    } else if (selectedValue === 'expense') {
        accountBalance.addExpense(itemDescription.value,parseInt(itemCost.value))
        
    } else {
        console.log('Please select an option');
    }

    accountBalance.calculateBalance();
    accountBalance.getIncomeData();
    accountBalance.getExpenseData();
    clearFields()
    
})

function displayDateTime(){
    var myDate = new Date();

    var dd = myDate.getDate();
    var mm = myDate.getMonth() + 1;
    var yyyy = myDate.getFullYear();
    var myTime = myDate.getTime();
    var hrs = myDate.getHours();
    var min = myDate.getMinutes();

    if (dd<10){
        dd = "0" + dd;
    }

    if (mm <10){
        mm = "0" + mm;
    }

    var setDate = `The date is ${dd}/${mm}/${yyyy} ${hrs}:${min} `;
    
    return setDate;
}

if(localStorage.length === 0 || localStorage.length == null ) {
    localStorage.setItem('incomes', JSON.stringify(accountBalance.incomes, undefined, 2));
    localStorage.setItem('expenses', JSON.stringify(accountBalance.expenses, undefined, 2));
    
} else {
    accountBalance.getIncomeData()
    accountBalance.getExpenseData()
}

function clearFields () {
    itemDescription.value= '';
    itemAmount.value= '';
    select.value= '';
}


// localStorage.clear()

















































































// localStorage.clear()

// const accountBalance = {
//     name: 'Koray',
//     lastName: 'Dündar',
//     income: {
//         description:[],
//         amount:[]
//     },
//     expense:{
//         description:[],
//         amount:[]
//     },
//     balance: 0
// }





// //EVENT LISTENER
// addButton.addEventListener('click', createContent)
// addButton.addEventListener('click', checkBalance)
// //EVENT LISTENER






// function saveLocal () {
// const accountBalanceStringify = JSON.stringify(accountBalance, undefined, 2)
// localStorage.setItem('accountBalance', accountBalanceStringify)
// }

// function loadLocal () {
//     accountBalanceStringify= 
//     JSON.parse(localStorage.getItem('accountBalance'))
// }



// function createContent() {
//     let selectedValue = select.options[select.selectedIndex].value
//     // console.log(selectedValue)

   
    
    
//     if (selectedValue === 'income'){
//         accountBalance.income.description.push(itemDescription.value)
//         accountBalance.income.amount.push(parseInt(itemCost.value))
        
//         incomeData.innerHTML += `<p>
//         <span>${itemDescription.value}</span>
//         <span>${itemCost.value}</p>`
        
//     console.log(accountBalance.income)

        
//     } else if (selectedValue === 'expense'){
//         accountBalance.expense.description.push(itemDescription.value)
//         accountBalance.expense.amount.push(parseInt(itemCost.value))

//         expenseData.innerHTML += `<p>
//         <span>${itemDescription.value}</span>
//         <span>${itemCost.value}</p>`
    
//     console.log(accountBalance.expense)
        
    
//     } else {
//         console.log('Please select an option')

//     }

   
    
// }


// function checkBalance () {
//     let sumIncome = 0;
//     let sumExpense = 0;
    
    
//     accountBalance.income.amount.forEach(element => {
//         sumIncome = sumIncome + element           
//         // console.log(sumIncome)
//     })
    
//     accountBalance.expense.amount.forEach(element => {
//         sumExpense = sumExpense + element
//         // console.log(sumExpense)
//     })


//     let balance = sumIncome - sumExpense;
    
//     document.querySelector('.balance-result').textContent=balance
//     console.log(balance);
    
//     return balance
// }

