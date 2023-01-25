const BankStatement = require('./bankStatement');

describe('BankStatement', () => {
  let bankStatement;

  beforeEach(() => {
    bankStatement = new BankStatement();
  })

  it('prints a message saying the balance is 0 if no transactions have taken place', () => {
    expect(bankStatement.printStatement()).toEqual('Current balance is 0, no transactions have taken place');
  })
})