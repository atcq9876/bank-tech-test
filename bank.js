class BankAccount { 
  constructor() {
    this.balance = 0;
    this.statement = 'date || credit || debit || balance';
    this.previousTransactionDate = 0;
  }
  
  depositFunds(date, amountDeposited) {
    if (typeof date !== 'string') throw new Error('Please enter the date as a string, in the format DD/MM/YYYY');
    if (date < this.previousTransactionDate) throw new Error(`You cannot enter a date that is earlier than the previous transaction's`);
    if (typeof amountDeposited !== 'number') throw new Error('Please enter a number to two decimal places for the amount deposited');
    if (amountDeposited <= 0) throw new Error('Only positive amounts to 2 decimal places can be deposited');
    this.balance += amountDeposited;
    this.statement += `\n${date} || ${amountDeposited.toFixed(2)} || || ${this.balance.toFixed(2)}`;
    this.previousTransactionDate = date;
  }

  printStatement() {
    return this.statement;
  }
}

module.exports = BankAccount;