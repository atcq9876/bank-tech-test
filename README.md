# bank-tech-test

## About this project
This is a tech-test assignment taken from week 10 of the Makers bootcamp. The program allows a user to add deposit and withdrawal transactions to a bank account, and print a statement of all transactions from this account. The full specification of this project is outlined below:

### Specification

#### Requirements

- You should be able to interact with your code via a REPL like Node.  (You don't need to implement a command line interface that takes input from STDIN.)
- Deposits, withdrawal.
- Account statement (date, amount, balance) printing.
- Data can be kept in memory (it doesn't need to be stored to a database or anything).

#### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2023  
**And** a deposit of 2000 on 13-01-2023  
**And** a withdrawal of 500 on 14-01-2023  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00
```

## Approach taken to solve the problem

Describe how you approached designing your solution to the problem (mention plan.md doc).
I began by drafting a BankAccount class and breaking it down into three main functions - depositFunds, withdrawFunds and printStatement - given that these encapsulate the main functionality outlined in the  specification. I then brainstormed how these functions could interact with each other and the constructor function of the class. I incrementally built up a draft of each of these functions in the plan.md document of this repo. Once I had completed a reasonably detailed draft, I moved onto writing a list of things that I would need to check for when test-driving the class and its functions, including edge cases. Once I was satisfied with this list, I began TDDing the program. During the process of writing the program, I identified several areas which could be refactored into smaller private functions, for example, for ensuring that the argument 'amountDeposited' in the function 'depositFunds' is valid.

## How to install the code
1. If not already installed: Install Node Version Manager (NVM): ```brew install nvm```
2. If not already installed: Install Node.js (version v19.4.0 at the time of writing): ```nvm install 19```
3. Clone the repository to your device
2. Enter the directory: ```cd bank-tech-test```
3. Activate node: ```nvm use node```
4. Run ```npm install```

## How to run the code
1. Enter the directory: ```cd bank-tech-test```.
2. Run ```node```.
3. Import the BankAccount class: ```const BankAccount = require('./bankAccount')```.
4. Create an instance of the class, e.g.: ```const account = new BankAccount();```.
5. Run one of three functions on the class instance: depositFunds, withdrawFunds, printStatement.
- depositFunds(date, amountDeposited), e.g.: ```account.depositFunds('01/01/2023', 100.00);```. Please note that: the date must be a string in the format DD/MM/YYYY; you cannot make the transaction date earlier than the preceding transaction date; and amountDeposited must be a positive number.
- withdrawFunds(date, amountWithdrawn), e.g.: ```account.withdrawFunds('02/01/2023', 50.00);```. Again, please note that: the date must be a string in the format DD/MM/YYYY; you cannot make the transaction date earlier than the preceding transaction date; and amountWithdrawn must be a positive number.
- printStatement(), e.g.: ```account.printStatement();```

## How to run tests on the code
1. Run ```npx jest```.
2. For test coverage, run ```npx jest --coverage```.
Test coverage for the project is 100%.

# Screenshots
