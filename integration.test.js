const BankAccount = require('./bankAccount');

describe('integration', () => {
  it('meets the acceptance criteria: processing deposits, withdrawals and printing a statement', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('10/01/2023', 1000.00);
    bankAccount.depositFunds('13/01/2023', 2000.00);
    bankAccount.withdrawFunds('14/01/2023', 500.00);

    expect(bankAccount.getStatement()).toEqual('date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00')
  })

  it('processes multiple deposits, withdrawals and prints multiple statements', () => {
    const bankAccount = new BankAccount();
    bankAccount.depositFunds('20/01/2023', 800.00);
    bankAccount.withdrawFunds('21/01/2023', 400.00);
    bankAccount.depositFunds('21/01/2023', 1000.00);
    bankAccount.withdrawFunds('22/01/2023', 300.00);

    expect(bankAccount.getStatement()).toEqual('date || credit || debit || balance\n22/01/2023 || || 300.00 || 1100.00\n21/01/2023 || 1000.00 || || 1400.00\n21/01/2023 || || 400.00 || 400.00\n20/01/2023 || 800.00 || || 800.00')

    bankAccount.withdrawFunds('24/01/2023', 100.00);
    bankAccount.depositFunds('25/01/2023', 200.00);

    expect(bankAccount.getStatement()).toEqual('date || credit || debit || balance\n25/01/2023 || 200.00 || || 1200.00\n24/01/2023 || || 100.00 || 1000.00\n22/01/2023 || || 300.00 || 1100.00\n21/01/2023 || 1000.00 || || 1400.00\n21/01/2023 || || 400.00 || 400.00\n20/01/2023 || 800.00 || || 800.00')
  })
})