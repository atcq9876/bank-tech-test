const BankStatement = require('./bankStatement');

class BankAccount {
  constructor() {
    this.transactions = '';
  }
}

describe('BankStatement', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
  })

  it('prints a message saying the balance is 0 if no transactions have taken place', () => {
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('Current balance is 0, no transactions have taken place');
  })

  it('prints a statment for one deposit', () => {
    bankAccount.transactions = '\n01/01/2023 || 100.00 || || 100.00';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 100.00 || || 100.00');
  })

  it('prints a statment for a different deposit', () => {
    bankAccount.transactions = '\n01/01/2023 || 200.00 || || 200.00';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 200.00 || || 200.00');
  })

  it('prints a statment for two deposits', () => {
    bankAccount.transactions = '\n01/01/2023 || 500.00 || || 750.00\n01/01/2023 || 250.00 || || 250.00';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 500.00 || || 750.00\n01/01/2023 || 250.00 || || 250.00');
  })
})
