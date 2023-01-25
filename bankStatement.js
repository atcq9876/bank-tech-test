const BankAccount = require('./bankAccount');

class BankStatement {
  constructor(bankAccount) {
    if (!(bankAccount instanceof BankAccount)) throw new Error('Only an instance of BankAccount can be passed to BankStatement')
    this.transactions = bankAccount.transactions;
    this.statement = ''
  }
  
  printStatement() {
    if (this.transactions === '') {
      return 'Current balance is 0, no transactions have taken place';
    } else {
      this.#formatStatement();
      return this.statement;
    }
  }

  #formatStatement() {
    this.statement = 'date || credit || debit || balance' + this.transactions;
  }
}

module.exports = BankStatement;
