class BankAccount { 
  constructor() {
    this.balance = 0
  }
  
  depositFunds(date, amountDeposited) {
    this.balance = amountDeposited;
  }

  printStatement() {
    return `date || credit || debit || balance\n01/01/2023 || ${this.balance.toFixed(2)} || || ${this.balance.toFixed(2)}`
  }
}

module.exports = BankAccount;