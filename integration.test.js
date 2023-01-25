const BankAccount = require('./bankAccount');

describe('integration', () => {
  it('meets the acceptance criteria: processing deposits, withdrawals and printing a statement', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('10/01/2023', 1000.00);
    bankAccount.depositFunds('13/01/2023', 2000.00);
    bankAccount.withdrawFunds('14/01/2023', 500.00);

    expect(bankAccount.getStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
  })
})