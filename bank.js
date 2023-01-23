class BankAccount { 
  constructor() {
    this.balance = 0;
    this.statement = 'date || credit || debit || balance';
  }
  
  depositFunds(date, amountDeposited) {
    if (typeof amountDeposited !== 'number') throw new Error('Please enter a number to two decimal places for the amount deposited');
    if (amountDeposited <= 0) throw new Error('Only positive amounts to 2 decimal places can be deposited');
    this.balance += amountDeposited;
    this.statement += `\n${date} || ${amountDeposited.toFixed(2)} || || ${this.balance.toFixed(2)}`;
  }

  printStatement() {
    return this.statement;
  }
}

module.exports = BankAccount;