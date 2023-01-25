class BankStatement {
  constructor(transactions) {
    this.transactions = transactions;
  }
  
  printStatement() {
    if (this.transactions === '') {
      return 'Current balance is 0, no transactions have taken place';
    } else {
      return 'date || credit || debit || balance' + this.transactions;
    }
  }
}

module.exports = BankStatement;
