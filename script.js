const itemDescription = document.querySelector('#item-description')
const itemCost = document.querySelector('#item-cost')
const addButton = document.querySelector('.add')
const select = document.querySelector('#selection')
const option = document.querySelectorAll('option')

// console.log(option[0])
// console.log(option[1])
// console.log(option[2])

addButton.addEventListener('click', function (){


        let selectedValue = select.options[select.selectedIndex].value
        console.log(selectedValue)

        if (selectedValue === 'income'){
            console.log('Income is added')

        } else if (selectedValue === 'expense'){
            console.log('Expense is added')

        } else {
            console.log('Please select an option')

        }
        
})



// console.log(select.value)

// function add() {
//     //Get the value from the first input box (Description etc 'Milk')

// }

function checkBalance () {
    
}