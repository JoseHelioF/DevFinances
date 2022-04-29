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
    //  console.log(array[i]);
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

array2 = array.filter((item) => {
    return item % 2 == 0
})

// console.log(array2);

const Transactions = {
    all: transactions,

    add(novo) {
        Transactions.all.push(novo)
    },
    remove(indice) {
        console.log("Remove", "ID", indice);
        for (i in Transactions.all) {
            console.log("s", Transactions.all[i].id, indice, Transactions.all[i]);
            if (Transactions.all[i].id == indice) {
                Transactions.all.splice(i, 1);
            }
        }
    },

    incomes() {
        let income = 0;
        Transactions.all.forEach((transactions) => {
            if (transactions.amount > 0) {
                income = income + transactions.amount
            }
        });
        return income;
    },
    expanses() {
        let expense = 0;
        Transactions.all.forEach((transactions) => {
            if (transactions.amount < 0) {
                expense += transactions.amount;
            }
        });
        return expense;
    },
    total() {
        return Transactions.incomes() + Transactions.expanses();
    }
}

const DOM = {

    transactionsContainer: document.querySelector('#data-table tbody'),

    addTransaction(transaction, index) {
        const tr = document.createElement("tr");
        tr.innerHTML = DOM.innerHTMLTransaction(transaction, index);
        tr.dataset.index = index;
        DOM.transactionsContainer.appendChild(tr)
    },
    innerHTMLTransaction(transaction , index) {
        const CSSclass = Transactions.amount > 0 ? "income" : "expanse";
        const amount = UTIL.formatCurrency(Transactions.amount);
        const html = `
     <td class="description">${transactions.description}</td>
     <td class="${CSSclass}">${amount}</td>
     <td class="date">${transactions.date}</td>
     <td >
     <img src="./assets/minus.svg" alt="Remover transação">
     </td>
     `

     return html
    },
    updateBalance() {
        document.getElementById("incomeDisplay").innerHTML = UTIL.formatCurrency(Transactions.incomes());
        document.getElementById("expanseDisplay").innerHTML = UTIL.formatCurrency(Transactions.expanses());
        document.getElementById("totalDisplay").innerHTML = UTIL.formatCurrency(Transactions.total());
    }
};

const UTIL = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : "";
        value = String(value).replace(/\D/g, "");
        value = Number(value) / 100;
        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
        });

        return signal + value;
    },
};
const APP = {
    init() {
        DOM.updateBalance();
    }
};

APP.init();

let novatransacao = {
    id: 4,
    description: 'Gas',
    amount: 10000,
    date: '23/04/2022'
}

DOM.addTransaction(novatransacao,5)


/************************************************* 
console.log(Transactions.all);
let novatransacao = {
    id: 4,
    description: 'Gas',
    amount: 10000,
    date: '23/04/2022'
}
Transactions.add(novatransacao);
let id = 3;
console.log(id);
Transactions.remove(id);
console.log(Transactions.all);

*/