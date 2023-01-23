const BankAccount = require('./bank');

describe('BankAccount', () => {
  it('prints a statement after one valid deposit', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('01/01/2023', 100.00);
    
    expect(bankAccount.printStatement())
      .toEqual('date || credit || debit || balance\n01/01/2023 || 100.00 || || 100.00');
  })

  it('prints a statement after a different valid deposit', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('01/01/2023', 200.00);
    
    expect(bankAccount.printStatement())
      .toEqual('date || credit || debit || balance\n01/01/2023 || 200.00 || || 200.00');
  })

  it('prints a statement after another different valid deposit', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('01/01/2023', 250.00);
    
    expect(bankAccount.printStatement())
      .toEqual('date || credit || debit || balance\n01/01/2023 || 250.00 || || 250.00');
  })

  it('prints a statement after two valid deposits', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('01/01/2023', 250.00);
    bankAccount.depositFunds('01/01/2023', 500.00);
    
    expect(bankAccount.printStatement())
      .toEqual('date || credit || debit || balance\n01/01/2023 || 250.00 || || 250.00\n01/01/2023 || 500.00 || || 750.00');
  })

  it('prints a statement after a valid withdrawal not on 01/01/2023', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('02/01/2023', 300.00);

    expect(bankAccount.printStatement())
    .toEqual('date || credit || debit || balance\n02/01/2023 || 300.00 || || 300.00');
  })
})