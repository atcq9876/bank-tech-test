const BankAccount = require('./bankAccount');

class BankStatement {
  constructor(bankAccount) {
    if (!(bankAccount instanceof BankAccount)) throw new Error('Only an instance of BankAccount can be passed to BankStatement')
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
