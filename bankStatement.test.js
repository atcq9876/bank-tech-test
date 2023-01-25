const BankStatement = require('./bankStatement');

describe('BankStatement', () => {
  
  it('prints a message saying the balance is 0 if no transactions have taken place', () => {
    const bankStatement = new BankStatement('')
    
    expect(bankStatement.printStatement()).toEqual('Current balance is 0, no transactions have taken place');
  })

  it('prints a statment for one withdrawal', () => {
    const transactions = '\n01/01/2023 || 100.00 || || 100.00';
    const bankStatement = new BankStatement(transactions);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 100.00 || || 100.00');
  })
})