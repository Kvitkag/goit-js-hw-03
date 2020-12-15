const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    const transaction = {
      amountOfTransaction: amount,
      typeOfTransaction: type,
      id: Math.trunc(Math.random() * Math.pow(10, 10)),
    };
    this.transactions.push(transaction);

    return transaction;
  },

  deposit(amount) {
    this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
  },

  withdraw(amount) {

    if (this.balance < amount) {
      const message = 'Снятие такой суммы не возможно, недостаточно средств.';
    
      return message;
    }
    this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {

    for (const transaction of this.transactions) {

      if (id === transaction.id) {
        return transaction;
      }
    }
    
    return 'Ошибка: идентификатор не найден.';
  },

  getTransactionTotal(type) {
    let transactionTotal = 0;
    
    for (const transaction of this.transactions) {

      if (transaction.typeOfTransaction === type) {
        
        transactionTotal += transaction.amountOfTransaction;
      }
    }

    return transactionTotal;
  },
};

const depositInputRef = document.querySelector('input[name="deposit"]');
const depositBtnRef = document.querySelector('button[name="depositBtn"]');
depositBtnRef.addEventListener('click', () => account.deposit(Number(depositInputRef.value)));

const withdrawInputRef = document.querySelector('input[name="withdraw"]');
const withdrawBtnRef = document.querySelector('button[name="withdrawBtn"]');
withdrawBtnRef.addEventListener('click', () => account.withdraw(Number(withdrawInputRef.value)));

const balanceBtnRef = document.querySelector('button[name="balanceBtn"]');
balanceBtnRef.addEventListener('click', () => console.log(account.getBalance()));

const historyBtnRef = document.querySelector('button[name="historyBtn"]');
historyBtnRef.addEventListener('click', () => console.table(account.transactions));

const idInputRef = document.querySelector('input[name="id"]');
const idBtnRef = document.querySelector('button[name="idBtn"]');
idBtnRef.addEventListener('click', () => console.log(account.getTransactionDetails(Number(idInputRef.value))));

const depositTotalBtnRef = document.querySelector('button[name="depositTotalBtn"]');
depositTotalBtnRef.addEventListener('click', () => console.log(account.getTransactionTotal(Transaction.DEPOSIT)));

const withdrawTotalBtnRef = document.querySelector('button[name="withdrawTotalBtn"]');
withdrawTotalBtnRef.addEventListener('click', () => console.log(account.getTransactionTotal(Transaction.WITHDRAW)));