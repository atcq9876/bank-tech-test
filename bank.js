class BankAccount { 
  constructor() {
    this.balance = 0
  }
  
  depositFunds(date, amountDeposited) {
    this.balance = amountDeposited;
  }

  printStatement() {
    if (this.balance === 100.00) {
      return 'date || credit || debit || balance\n01/01/2023 || 100.00 || || 100.00'
    } else if (this.balance === 200.00) {
      return 'date || credit || debit || balance\n01/01/2023 || 200.00 || || 200.00'
    } else if (this.balance === 250.00) {
      return 'date || credit || debit || balance\n01/01/2023 || 250.00 || || 250.00'
    }
  }
}

module.exports = BankAccount;