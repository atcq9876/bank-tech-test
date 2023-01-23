class BankAccount { 
  constructor() {
    this.balance = 0;
    this.statement = 'date || credit || debit || balance';
  }
  
  depositFunds(date, amountDeposited) {
    this.balance += amountDeposited;
    this.statement += `\n${date} || ${amountDeposited.toFixed(2)} || || ${this.balance.toFixed(2)}`;
  }

  printStatement() {
    return this.statement;
  }
}

module.exports = BankAccount;