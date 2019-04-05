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
        {
            description: 'salary',
            amount: 2000,
            time: displayDateTime()
        }, {
            description: 'Bonus',
            amount: 500,
            time: displayDateTime()
        }
    ],
    expenses: [
        {
            description: 'rent',
            amount: 7000,
            time: displayDateTime()
        }, 
        {
            description: 'food',
            amount: 500,
            time: displayDateTime()
        }
], 
    addIncome: function (description, amount) {
        //load local storage
        let time = displayDateTime();
       
        this.incomes.push({description, amount, time});
        
        
        let json = localStorage.getItem('incomes')
        const retreivedFromLocal = JSON.parse(json);
        retreivedFromLocal.push({description, amount, time});
        localStorage.setItem('incomes', JSON.stringify(retreivedFromLocal, undefined, 4));
        
        console.log(retreivedFromLocal);
        
    },
    addExpense: function (description, amount) {
        let time = displayDateTime();
        this.expenses.push({description, amount, time});
        
        
        let json = localStorage.getItem('expenses')
        const retreivedFromLocal = JSON.parse(json);
        retreivedFromLocal.push({description, amount, time});
        localStorage.setItem('expenses', JSON.stringify(retreivedFromLocal, undefined, 4));
        
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
    
}



localStorage.setItem('incomes', JSON.stringify(accountBalance.incomes, undefined, 2));
localStorage.setItem('expenses', JSON.stringify(accountBalance.expenses, undefined, 2));


console.log(accountBalance.totalIncome());
console.log(accountBalance.totalExpense());

addButton.addEventListener('click', function () {
    let selectedValue = select.options[select.selectedIndex].value;
    console.log(selectedValue)
    
    // accountBalance.showContent()
    
    if (selectedValue === 'income') {
        accountBalance.addIncome(itemDescription.value,parseInt(itemCost.value) )
        
        
        
    } else if (selectedValue === 'expense') {
        accountBalance.addExpense(itemDescription.value,parseInt(itemCost.value))
        expenseData.innerHTML += `<div><span>${localStorage.getItem('expenses')}</span></div>`;
    } else {
        console.log('Please select an option');
    }
    
})


function  showContent () {
    
    let output =  JSON.parse(localStorage.getItem('incomes')).forEach(element =>{
        
        incomeData.innerHTML += `<div><span>${element.amount}</span></div>`;
    })
    console.log(output);
    return output;
}
showContent();


// function setToLocal(){
//     let stringifiedAccount = JSON.stringify(accountBalance, undefined, 2);
//     localStorage.setItem('accountBalance', stringifiedAccount);
// }
// setToLocal();

// function getFromLocal(){
//     let unStringifiedAccount = JSON.parse(localStorage.getItem('accountBalance'));
//     // let {a,b} = unStringifiedAccount.expense;
//     let {description, amount} = unStringifiedAccount.income;

//     console.log(unStringifiedAccount.expense);
//     description.forEach(description =>{
//         incomeData.innerHTML += `<div><span>${description}</span></div>`;
//     })

//     amount.forEach(element =>{
//         incomeData.innerHTML += `<div><span>${element}</span></div>`;
//     })

//     // a.forEach(element =>{
//     //     expenseData.innerHTML += `<div><span>${element}</span></div>`;
//     // })
//     // b.forEach(element =>{
//     //     expenseData.innerHTML += `<div><span>${element}</span></div>`;
//     // })


    
// }



// function pushToObject() {
    
//     let selectedValue = select.options[select.selectedIndex].value;
//     // console.log(selectedValue)
//     if (selectedValue === 'income') {
//         accountBalance.income.description.push(itemDescription.value);
//         accountBalance.income.amount.push(parseInt(itemAmount.value));

//     } else if (selectedValue === 'expense') {
//         accountBalance.expense.description.push(itemDescription.value);
//         accountBalance.expense.amount.push(parseInt(itemAmount.value));
//     } else {
//         console.log('Please select an option');
//     }
    
// }

// function checkBalance() {

//     let sumIncome = 0;
//     let sumExpense = 0;

//     accountBalance.income.amount.forEach(element => {
//         sumIncome += element;
//     });

//     accountBalance.expense.amount.forEach(element => {
//         sumExpense += element;
//     });

//     let balance = sumIncome - sumExpense
//     console.log(balance);
//     sectionBalance.innerHTML = `<span>Your current balance is: ${balance}€</span>`;
//     return balance;
// }

// addButton.addEventListener('click', function () {
//     pushToObject();
//     checkBalance();       
// })

// getFromLocal();

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

