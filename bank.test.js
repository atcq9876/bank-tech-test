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

  it('prints a statement after a valid deposit not on 01/01/2023', () => {
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

  test('throws an error when date is earlier than previous transaction', () => {
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

  it('prints a statement after a different valid withdrawal', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('03/01/2023', 200.00);
    bankAccount.withdrawFunds('04/01/2023', 150.00);

    expect(bankAccount.printStatement()).toEqual('date || credit || debit || balance\n03/01/2023 || 200.00 || || 200.00\n04/01/2023 || || 150.00 || 50.00');
  })

  it('prints a statement after a different deposit and different withdrawal', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('04/01/2023', 250.00);
    bankAccount.withdrawFunds('05/01/2023', 200.00);

    expect(bankAccount.printStatement()).toEqual('date || credit || debit || balance\n04/01/2023 || 250.00 || || 250.00\n05/01/2023 || || 200.00 || 50.00');
  })

  it('prints a statement after a two valid withdrawals', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('03/01/2023', 200.00);
    bankAccount.withdrawFunds('04/01/2023', 50.00);
    bankAccount.withdrawFunds('05/01/2023', 100.00);

    expect(bankAccount.printStatement()).toEqual('date || credit || debit || balance\n03/01/2023 || 200.00 || || 200.00\n04/01/2023 || || 50.00 || 150.00\n05/01/2023 || || 100.00 || 50.00');
  })

  test('throws error when account balance is 0', () => {
    const bankAccount = new BankAccount();

    expect(() => {
      bankAccount.withdrawFunds('04/01/2023', 50.00);
    }).toThrow('Current balance is 0.00, withdrawals must not exceed the balance');
  })

  test('throws error when account balance is less than withdrawal amount (but not 0)', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/2023', 100.00);
    }).toThrow('Current balance is 50.00, withdrawals must not exceed the balance');
  })

  test('throws error if withdrawing an amount that is negative', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/23', -10.00);
    }).toThrow('Only positive amounts to 2 decimal places can be withdrawn')
  })

  test('throws error if withdrawing 0', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/23', 0.00);
    }).toThrow('Only positive amounts to 2 decimal places can be withdrawn')
  })

  test('throws error if withdawal amount is not a number', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/23', '10.00');
    }).toThrow('Please enter a number to two decimal places for the amount withdrawn');
  })

  test('throws an error when date is not a string', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('04/01/23', 200.00);

    expect(() => {
      bankAccount.withdrawFunds(10012023, 100.00);
    }).toThrow('Please enter the date as a string, in the format DD/MM/YYYY');
  });

  test('throws an error when date is earlier than previous deposit', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('05/01/2023', 200.00);
    
    expect(() => {
      bankAccount.withdrawFunds('03/01/2023', 150.00);
    }).toThrow(`You cannot enter a date that is earlier than the previous transaction's`);
  });
})