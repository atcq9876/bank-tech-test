class BankStatement {
  constructor(bankAccount) {
    if ((!bankAccount.transactions && bankAccount.transactions !== '')) {
      throw new Error('Only instances of BankAccount should be passed to BankStatement')
    }
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
