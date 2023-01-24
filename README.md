# bank-tech-test

## About this project
Add description of the project (e.g., look at instructions on original repo, including example input and output)

Describe how you approached designing your solution to the problem (mention plan.md doc).

Describe how you structured your code. Why did you do it this way?

Mention 100% test coverage

## How to install the code
1. If not already installed: Install Node Version Manager (NVM): ```brew install nvm```
2. If not already installed: Install Node.js (version v19.4.0 at the time of writing): ```nvm install 19```
3. Clone the repository to your device
2. Enter the directory: ```cd bank-tech-test```
3. Activate node: ```nvm use node```
4. Run ```npm install```

## How to run the code
1. Enter the directory: ```cd bank-tech-test```
2. Run ```node```
3. Import the BankAccount class: ```const BankAccount = require('./bankAccount')```
4. Create an instance of the class, e.g.: ```const account = new BankAccount();```
5. Run one of three functions on the class instance: depositFunds, withdrawFunds, printStatement.
- depositFunds(date, amountDeposited), e.g.: ```account.depositFunds('01/01/2023', 100.00);```. Please note that: the date must be a string in the format DD/MM/YYYY; you cannot make the transaction date earlier than the preceding transaction date; and amountDeposited must be a positive number.
- withdrawFunds(date, amountWithdrawn), e.g.: ```account.withdrawFunds('02/01/2023', 50.00);```. Again, please note that: the date must be a string in the format DD/MM/YYYY; you cannot make the transaction date earlier than the preceding transaction date; and amountWithdrawn must be a positive number.
- printStatement(), e.g.: ```account.printStatement();```

## How to run tests on the code
1. Run ```jest```
2. For test coverage (100%), run ```jest --coverage```

# Screenshots

 Include screenshots of your running app.