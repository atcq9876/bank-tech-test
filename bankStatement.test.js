const BankStatement = require('./bankStatement');
const BankAccount = require('./bankAccount');
jest.mock('./bankAccount');

describe('BankStatement', () => {
  let bankAccount;
  
  beforeEach(() => {
    BankAccount.mockClear();
    bankAccount = new BankAccount();
  })
  
  test('throws error if argument passed to BankStatement is not a class instance with a transactions instance variable', () => {
    bankAccount.transactions = '\n01/01/2023 || 100.00 || || 100.00'

    expect(() => {
      new BankStatement(bankAccount);
    }).not.toThrow();
    expect(() => {
      new BankStatement('string');
    }).toThrow('Only instances of BankAccount should be passed to BankStatement');
  })
  
  it('prints a message saying the balance is 0 if no transactions have taken place', () => {
    bankAccount.transactions = '';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('Current balance is 0, no transactions have taken place');
  })

  it('prints a statement for one deposit', () => {
    bankAccount.transactions = '\n01/01/2023 || 100.00 || || 100.00';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 100.00 || || 100.00');
  })

  it('prints a statement for a different deposit', () => {
    bankAccount.transactions = '\n01/01/2023 || 200.00 || || 200.00';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 200.00 || || 200.00');
  })

  it('prints a statement for two deposits', () => {
    bankAccount.transactions = '\n01/01/2023 || 500.00 || || 750.00\n01/01/2023 || 250.00 || || 250.00';
    const bankStatement = new BankStatement(bankAccount);
    
    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n01/01/2023 || 500.00 || || 750.00\n01/01/2023 || 250.00 || || 250.00');
  })

  it('prints a statement after a deposit then withdrawal', () => {
    bankAccount.transactions = '\n04/01/2023 || || 100.00 || 100.00\n03/01/2023 || 200.00 || || 200.00';
    const bankStatement = new BankStatement(bankAccount);

    expect(bankStatement.printStatement()).toEqual('date || credit || debit || balance\n04/01/2023 || || 100.00 || 100.00\n03/01/2023 || 200.00 || || 200.00');
  })
})
