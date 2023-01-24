class BankAccount { 
  constructor() {
    this.balance = 0;
    this.transactions = '';
    this.previousTransactionDate = 0;
    this.statement = '';
  }
  
  depositFunds(date, amountDeposited) {
    this.#checkDate(date);
    this.#checkAmountDeposited(amountDeposited);
    this.balance += amountDeposited;
    this.transactions = `\n${date} || ${amountDeposited.toFixed(2)} || || ${this.balance.toFixed(2)}` + this.transactions;
    this.previousTransactionDate = date;
  }

  withdrawFunds(date, amountWithdrawn) {
    this.#checkDate(date);
    this.#checkAmountWithdrawn(amountWithdrawn);
    this.balance -= amountWithdrawn;  
    this.transactions = `\n${date} || || ${amountWithdrawn.toFixed(2)} || ${this.balance.toFixed(2)}` + this.transactions;
    this.previousTransactionDate = date;
  }

  printStatement() {
    if (this.previousTransactionDate === 0) return 'Current balance is 0, no transactions have taken place';
    this.#formatStatement();
    return this.statement;
  }

  // private methods
  #checkDate(date) {
    if (typeof date !== 'string') throw new Error('Please enter the date as a string, in the format DD/MM/YYYY');
    const dateFormat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
    if (!date.match(dateFormat)) throw new Error('Dates must be in the format DD/MM/YYYY')
    if (date < this.previousTransactionDate) throw new Error(`You cannot enter a date that is earlier than the previous transaction's`);
  }

  #checkAmountDeposited(amountDeposited) {
    if (typeof amountDeposited !== 'number') throw new Error('Please enter a number to two decimal places for the amount deposited');
    if (amountDeposited <= 0) throw new Error('Only positive amounts can be deposited');
  }

  #checkAmountWithdrawn(amountWithdrawn) {
    if (typeof amountWithdrawn !== 'number') throw new Error('Please enter a number to two decimal places for the amount withdrawn');
    if (amountWithdrawn <= 0) throw new Error('Only positive amounts can be withdrawn');
    if (this.balance < amountWithdrawn) throw new Error(`Current balance is ${this.balance.toFixed(2)}, withdrawals must not exceed this amount`);
  }

  #formatStatement() {
    this.statement = 'date || credit || debit || balance' + this.transactions;
  }
}

module.exports = BankAccount;
