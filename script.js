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
    income: {
        description:[],
        amount:[]
    },
    expense:{
        description:[],
        amount:[]
    },
    balance: 0
}





//EVENT LISTENER
addButton.addEventListener('click', createContent)
addButton.addEventListener('click', checkBalance)
//EVENT LISTENER






function createContent() {
    let selectedValue = select.options[select.selectedIndex].value
    // console.log(selectedValue)

   
    
    
    if (selectedValue === 'income'){
        accountBalance.income.description.push(itemDescription.value)
        accountBalance.income.amount.push(parseInt(itemCost.value))
        
        const accountBalanceParse = JSON.parse(localStorage.getItem('accountBalance'))
        accountBalanceParse.income.amount.forEach(element => {
            
            incomeData.innerHTML += `<p>${element}</p>`
             
        } )

    
    console.log(accountBalance.income)

        
    } else if (selectedValue === 'expense'){
        accountBalance.expense.description.push(itemDescription.value)
        accountBalance.expense.amount.push(parseInt(itemCost.value))

        const accountBalanceParse = JSON.parse(localStorage.getItem('accountBalance'))
        accountBalanceParse.expense.amount.forEach(element => {

            expenseData.innerHTML += `<p>${element}</p>`
        })
   

    
    console.log(accountBalance.expense)
        
    

    } else {
        console.log('Please select an option')

    }

    const accountBalanceStringify = JSON.stringify(accountBalance, undefined, 2)
    console.log(accountBalanceStringify)
    localStorage.setItem('accountBalance', accountBalanceStringify)
    console.log(localStorage.getItem('accountBalance'))
    
}


function checkBalance () {
    let sumIncome = 0;
    let sumExpense = 0;
    
    
    accountBalance.income.amount.forEach(element => {
        sumIncome = sumIncome + element           
        // console.log(sumIncome)
    })
    
    accountBalance.expense.amount.forEach(element => {
        sumExpense = sumExpense + element
        // console.log(sumExpense)
    })


    let balance = sumIncome - sumExpense;
    
    document.querySelector('.balance-result').textContent=balance
    console.log(balance);
    
    return balance
}


    // const accountBalanceParse = JSON.parse(localStorage.getItem('accountBalance'))
    // for(let i=0; i <accountBalanceParse.income.amount.length; i++){
        
    //     incomeData.innerHTML += `<p>${accountBalanceParse.income.amount[i]}</p>`
    // }

