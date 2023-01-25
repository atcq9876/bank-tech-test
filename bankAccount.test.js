const BankAccount = require('./bankAccount');
const BankStatement = require('./bankStatement');
jest.mock('./bankStatement');

describe('BankAccount', () => {
  let bankAccount;

  beforeEach(() => {
    bankAccount = new BankAccount();
    BankStatement.mockClear();
  })
  
  it('prints a statement after one valid deposit', () => {
    bankAccount.depositFunds('01/01/2023', 100.00);
    
    expect(bankAccount.transactions)
      .toEqual('\n01/01/2023 || 100.00 || || 100.00');
  })

  it('prints a statement after a different valid deposit', () => {
    bankAccount.depositFunds('01/01/2023', 200.00);
    
    expect(bankAccount.transactions)
      .toEqual('\n01/01/2023 || 200.00 || || 200.00');
  })

  it('prints a statement after another different valid deposit', () => {
    bankAccount.depositFunds('01/01/2023', 250.00);
    
    expect(bankAccount.transactions)
      .toEqual('\n01/01/2023 || 250.00 || || 250.00');
  })

  it('prints a statement after two valid deposits', () => {
    bankAccount.depositFunds('01/01/2023', 250.00);
    bankAccount.depositFunds('01/01/2023', 500.00);
    
    expect(bankAccount.transactions)
      .toEqual('\n01/01/2023 || 500.00 || || 750.00\n01/01/2023 || 250.00 || || 250.00');
  })

  it('prints a statement after a valid deposit not on 01/01/2023', () => {
    bankAccount.depositFunds('02/01/2023', 300.00);

    expect(bankAccount.transactions)
    .toEqual('\n02/01/2023 || 300.00 || || 300.00');
  })

  test('throws an error when amountDeposited is < 0', () => {
    expect(() => {
      bankAccount.depositFunds('03/01/2023', -10.00);
    }).toThrow('Only positive amounts can be deposited');
  });

  test('throws an error when amountDeposited is 0', () => {
    expect(() => {
      bankAccount.depositFunds('03/01/2023', 0);
    }).toThrow('Only positive amounts can be deposited');
  });

  test('throws an error when amountDeposited is not given as argument', () => {
    expect(() => {
      bankAccount.depositFunds('03/01/2023');
    }).toThrow('Please enter a number to two decimal places for the amount deposited');
  });

  test('throws an error when amountDeposited is not given as argument', () => {
    expect(() => {
      bankAccount.depositFunds('03/01/2023', null);
    }).toThrow('Please enter a number to two decimal places for the amount deposited');
  });

  test('throws an error when amountDeposited is not given as argument', () => {
    expect(() => {
      bankAccount.depositFunds('03/01/2023', '100.00');
    }).toThrow('Please enter a number to two decimal places for the amount deposited');
  });

  test('throws an error when date is not a string', () => {
    expect(() => {
      bankAccount.depositFunds(13012023, 100.00);
    }).toThrow('Please enter the date as a string, in the format DD/MM/YYYY');
  });

  test('throws an error when date is earlier than previous transaction', () => {
    bankAccount.depositFunds('02/01/2023', 100.00);
    
    expect(() => {
      bankAccount.depositFunds('01/01/2023', 150.00);
    }).toThrow(`You cannot enter a date that is earlier than the previous transaction's`);
  });

  test('throws an error when date is not the correct format (DD/MM/YYYY)', () => {
    expect(() => {
      bankAccount.depositFunds('01-01-2023', 150.00);
    }).toThrow('Dates must be in the format DD/MM/YYYY');
  });

  it('prints a statement after one valid withdrawal', () => {
    bankAccount.depositFunds('03/01/2023', 200.00);
    bankAccount.withdrawFunds('04/01/2023', 100.00);

    expect(bankAccount.transactions).toEqual('\n04/01/2023 || || 100.00 || 100.00\n03/01/2023 || 200.00 || || 200.00');
  })

  it('prints a statement after a different valid withdrawal', () => {
    bankAccount.depositFunds('03/01/2023', 200.00);
    bankAccount.withdrawFunds('04/01/2023', 150.00);

    expect(bankAccount.transactions).toEqual('\n04/01/2023 || || 150.00 || 50.00\n03/01/2023 || 200.00 || || 200.00');
  })

  it('prints a statement after a different deposit and different withdrawal', () => {
    bankAccount.depositFunds('04/01/2023', 250.00);
    bankAccount.withdrawFunds('05/01/2023', 200.00);

    expect(bankAccount.transactions).toEqual('\n05/01/2023 || || 200.00 || 50.00\n04/01/2023 || 250.00 || || 250.00');
  })

  it('prints a statement after a two valid withdrawals', () => {
    bankAccount.depositFunds('03/01/2023', 200.00);
    bankAccount.withdrawFunds('04/01/2023', 50.00);
    bankAccount.withdrawFunds('05/01/2023', 100.00);

    expect(bankAccount.transactions).toEqual('\n05/01/2023 || || 100.00 || 50.00\n04/01/2023 || || 50.00 || 150.00\n03/01/2023 || 200.00 || || 200.00');
  })

  test('throws error when account balance is 0', () => {
    expect(() => {
      bankAccount.withdrawFunds('04/01/2023', 50.00);
    }).toThrow('Current balance is 0.00, withdrawals must not exceed this amount');
  })

  test('throws error when account balance is less than withdrawal amount (but not 0)', () => {
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/2023', 100.00);
    }).toThrow('Current balance is 50.00, withdrawals must not exceed this amount');
  })

  test('throws error if withdrawing an amount that is negative', () => {
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/23', -10.00);
    }).toThrow('Only positive amounts can be withdrawn')
  })

  test('throws error if withdrawing 0', () => {
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/23', 0.00);
    }).toThrow('Only positive amounts can be withdrawn')
  })

  test('throws error if withdawal amount is not a number', () => {
    bankAccount.depositFunds('04/01/23', 50.00);

    expect(() => {
      bankAccount.withdrawFunds('05/01/23', '10.00');
    }).toThrow('Please enter a number to two decimal places for the amount withdrawn');
  })

  test('throws an error when date is not a string', () => {
    bankAccount.depositFunds('04/01/23', 200.00);

    expect(() => {
      bankAccount.withdrawFunds(10012023, 100.00);
    }).toThrow('Please enter the date as a string, in the format DD/MM/YYYY');
  });

  test('throws an error when date is earlier than previous deposit', () => {
    bankAccount.depositFunds('05/01/2023', 200.00);
    
    expect(() => {
      bankAccount.withdrawFunds('03/01/2023', 150.00);
    }).toThrow(`You cannot enter a date that is earlier than the previous transaction's`);
  });

  test('throws an error when date is earlier than previous withdrawal', () => {
    bankAccount.depositFunds('05/01/2023', 200.00);
    bankAccount.withdrawFunds('07/01/2023', 100.00);

    expect(() => {
      bankAccount.withdrawFunds('06/01/2023', 50.00);
    }).toThrow(`You cannot enter a date that is earlier than the previous transaction's`);
  });

  test('throws an error when date is not the correct format (DD/MM/YYYY)', () => {
    bankAccount.depositFunds('05/01/2023', 200.00);

    expect(() => {
      bankAccount.withdrawFunds('07.01.2023', 150.00);
    }).toThrow('Dates must be in the format DD/MM/YYYY');
  });

  it('correctly handles multiple deposits, withdrawals, and printStatements', () => {
    bankAccount.depositFunds('01/01/2023', 500.00);
    bankAccount.withdrawFunds('02/01/2023', 100.00);
    bankAccount.withdrawFunds('02/01/2023', 50.00)

    expect(bankAccount.transactions).toEqual('\n02/01/2023 || || 50.00 || 350.00\n02/01/2023 || || 100.00 || 400.00\n01/01/2023 || 500.00 || || 500.00');

    bankAccount.depositFunds('02/01/2023', 100.00);
    bankAccount.depositFunds('03/01/2023', 75.50);
    bankAccount.withdrawFunds('05/01/2023', 200.00);
    
    expect(bankAccount.transactions).toEqual('\n05/01/2023 || || 200.00 || 325.50\n03/01/2023 || 75.50 || || 525.50\n02/01/2023 || 100.00 || || 450.00\n02/01/2023 || || 50.00 || 350.00\n02/01/2023 || || 100.00 || 400.00\n01/01/2023 || 500.00 || || 500.00');
  })

  it('when getStatement() is called, it creates an instance of BankStatement which calles printStatement() on itself', () => {
    bankAccount.getStatement();

    expect(BankStatement).toHaveBeenCalledTimes(1);  
    expect(BankStatement.mock.instances[0].printStatement).toHaveBeenCalled();
  })
})
