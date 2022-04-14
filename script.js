const Modal = {
    toggle() {
        document.querySelector(".modal-overlay").classList.toggle('active');
    }
    // open() {
    //     document.querySelector(".modal-overlay").classList.add('active');
    // },
    // close() {
    //     document.querySelector('.modal-overlay').classList.remove('active')
    // },
};
const transactions = [{
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2022'
    },
    {
        id: 2,
        description: 'Luz1',
        amount: 500000,
        date: '23/01/2022'
    },
    {
        id: 3,
        description: 'Luz2',
        amount: -20000,
        date: '23/01/2022'
    },

];



// const alf = "ABCDE";
// let resultado = alf.split("");

// resultado.map((r) =>{
//     console.log(r); 
// })
///////////////////////////////////////////////////////////
// transactions.map((valor,indice,transactions) =>{
//     console.log(valor.date);
// });
///////////////////////////////////////////////////////////
//array de numero 10 elemento

// /* ********************************************* */
 let array = [];
 for (let i = 0; i < 10; i++) {
     array.push(Math.round(Math.random() * 10))
     console.log(array[i]);
 }



// array.map((valor, indice, array) => {
//     // console.log(valor,'x',indice,'=',valor*indice);
//     for (i in array) {
//         console.log(indice, "x", parseInt(i), '=', indice * i);
//     }
//     console.log('\n');
// })
// /************************************************ */

// // array.map((valor, indice) => {
// //     array.map((valor2, indice2) => {
// //         console.log(indice, '*', indice2, '=', indice * indice2);
// //     })
// //     console.log('\n');
// // })

array2 = array.filter((item)=> {return item%2==0})

console.log(array2);

const Transactions = {
    all: transactions,
    incomes() {
        let income = 0;
        Transactions.all.forEach((transactions) => {
            if (transactions.amount > 0) {
                income = income + transactions.amount
            }
        });
        return income;
    },
    expanses(){
        let expense = 0;
        Transactions.all.forEach((transactions) => {
            if(transactions.amount<0){
                expense+=transactions.amount;
            }
        });
        return expense;
    },
    total(){
            return Transactions.incomes()+Transactions.expanses();
    }
}

console.log("Entrada =>",Transactions.incomes());
console.log("Saida =>",Transactions.expanses());
console.log("Total =>",Transactions.expanses()+Transactions.incomes());
