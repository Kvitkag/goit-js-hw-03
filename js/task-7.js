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
      id: this.transactions.length + 1,
    };
    // this.transactions.push(transaction);

    return transaction;
  },

  deposit(amount) {
    const depositTransaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.transactions.push(depositTransaction);
    this.balance += amount;
  },

  withdraw(amount) {
    if (this.balance < amount) {
      const message = 'Снятие такой суммы не возможно, недостаточно средств.';
    
      return message;
    }
    const withdrawTransaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.transactions.push(withdrawTransaction);
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

    const message = 'Ошибка: идентификатор не найден.';
    
    return message;
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

console.log(account.deposit(100));
console.log(account.withdraw(50));
console.log(account.deposit(200));
console.log(account.withdraw(10));
console.table(account.transactions);
console.log(account.balance);
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(5));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getTransactionTotal('withdraw'));