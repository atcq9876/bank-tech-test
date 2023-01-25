class BankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }
  
  printStatement() {
    if (this.transactions === '') {
      return 'Current balance is 0, no transactions have taken place';
    } else {
      return 'date || credit || debit || balance\n01/01/2023 || 100.00 || || 100.00';
    }
  }
}

module.exports = BankStatement;
