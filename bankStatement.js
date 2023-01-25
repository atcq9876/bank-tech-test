class BankStatement {
  constructor(bankAccount) {
    this.transactions = bankAccount.transactions;
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
