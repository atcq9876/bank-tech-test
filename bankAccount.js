class BankAccount { 
  constructor() {
    this.balance = 0;
    this.transactions = '';
    this.previousTransactionDate = 0;
  }
  
  depositFunds(date, amountDeposited) {
    this.#checkDateIsValid(date);
    this.#checkAmountDepositedIsValid(amountDeposited);
    this.balance += amountDeposited;
    this.transactions =
      `\n${date} || ${amountDeposited.toFixed(2)} || || ${this.balance.toFixed(2)}`
      + this.transactions;
    this.previousTransactionDate = date;
  }

  withdrawFunds(date, amountWithdrawn) {
    this.#checkDateIsValid(date);
    this.#checkAmountWithdrawnIsValid(amountWithdrawn);
    this.balance -= amountWithdrawn;  
    this.transactions =
      `\n${date} || || ${amountWithdrawn.toFixed(2)} || ${this.balance.toFixed(2)}`
      + this.transactions;
    this.previousTransactionDate = date;
  }

  printStatement() {
  }

  // private methods
  #checkDateIsValid(date) {
    const dateFormat = /^(0?[1-9]|[1-2][0-9]|3[01])[\/](0?[1-9]|1[0-2])/;
    if (typeof date !== 'string') { 
      throw new Error('Please enter the date as a string, in the format DD/MM/YYYY');
    } else if (!date.match(dateFormat)) {
      throw new Error('Dates must be in the format DD/MM/YYYY')
    } else if (date < this.previousTransactionDate) {
      throw new Error(`You cannot enter a date that is earlier than the previous transaction's`);
    }
  }

  #checkAmountDepositedIsValid(amountDeposited) {
    if (typeof amountDeposited !== 'number') {
      throw new Error('Please enter a number to two decimal places for the amount deposited');
    } else if (amountDeposited <= 0) {
      throw new Error('Only positive amounts can be deposited');
    }
  }

  #checkAmountWithdrawnIsValid(amountWithdrawn) {
    if (typeof amountWithdrawn !== 'number') {
      throw new Error('Please enter a number to two decimal places for the amount withdrawn');
    } else if (amountWithdrawn <= 0) {
      throw new Error('Only positive amounts can be withdrawn');
    } else if (this.balance < amountWithdrawn) {
      throw new Error(`Current balance is ${this.balance.toFixed(2)}, withdrawals must not exceed this amount`);
    }
  }
}

module.exports = BankAccount;
