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

  test('throws an error when amountDeposited is < 0', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds('03/01/2023', -10.00);
    }).toThrow('Only positive amounts to 2 decimal places can be deposited');
  });

  test('throws an error when amountDeposited is 0', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds('03/01/2023', 0);
    }).toThrow('Only positive amounts to 2 decimal places can be deposited');
  });

  test('throws an error when amountDeposited is not given as argument', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds('03/01/2023');
    }).toThrow('Please enter a number to two decimal places for the amount deposited');
  });

  test('throws an error when amountDeposited is not given as argument', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds('03/01/2023', null);
    }).toThrow('Please enter a number to two decimal places for the amount deposited');
  });

  test('throws an error when amountDeposited is not given as argument', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds('03/01/2023', '100.00');
    }).toThrow('Please enter a number to two decimal places for the amount deposited');
  });

  test('throws an error when date is not a string', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds(13012023, 100.00);
    }).toThrow('Please enter the date as a string, in the format DD/MM/YYYY');
  });

  test('throws an error when date is not a string', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('02/01/2023', 100.00);
    
    expect(() => {
      bankAccount.depositFunds('01/01/2023', 150.00);
    }).toThrow(`You cannot enter a date that is earlier than the previous transaction's`);
  });

  test('throws an error when date is not the correct format (DD/MM/YYYY)', () => {
    const bankAccount = new BankAccount();
    
    expect(() => {
      bankAccount.depositFunds('01-01-2023', 150.00);
    }).toThrow('Dates must be in the format DD/MM/YYYY');
  });

  it('prints a statement after one valid withdrawal', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('03/01/2023', 200.00);
    bankAccount.withdrawFunds('04/01/2023', 100.00);

    expect(bankAccount.printStatement()).toEqual('date || credit || debit || balance\n03/01/2023 || 200.00 || || 200.00\n04/01/2023 || || 100.00 || 100.00');
  })
})