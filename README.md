### [Makers Academy](http://www.makersacademy.com) - Week 10 tech test

# Bank tech test 🏦

#### Technologies: Javascript, Jasmine

[Task](#Task) | [Specification](#Specification) | [Testing](#Testing) | [User Stories](#User_Stories) | [Self-assessment](#Self-assessment)

![screenshot](screenshot.png)

## <a name="Task">The Task</a>

Today, you'll practice doing a tech test.

For most tech tests, you'll essentially have unlimited time.  This practice session is about producing the best code you can when there is a minimal time pressure.

You'll get to practice your OO design and TDD skills.

You'll work alone, and you'll also review your own code so you can practice reflecting on and improving your own work.

## <a name="Specification">Specification</a>

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

### Inputs / Outputs

| Input                           | Output                                                         | 
| ------------------------------- | ------------------------------------------------------------   | 
| New Account object              | print_statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance" |
| ------------------------------- | ------------------------------------------------------------  | 
| Account.desposit(1)             | print_statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance  |
|                                 | /n 23/03/2020 &#124;&#124; 1.00 &#124;&#124; &#124;&#124; 1.00"                                |
| ------------------------------- | ------------------------------------------------------------   | 
| Account.desposit(1)             | print_statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance  |
|                                 |                              /n 23/03/2020 &#124;&#124; 1.00 &#124;&#124; &#124;&#124; 2.00    |
|                                 |                              /n 23/03/2020 &#124;&#124; 1.00 &#124;&#124; &#124;&#124; 1.00"   |
| ------------------------------- | ------------------------------------------------------------   | 
| Account.withdraw(1)             | print_statement should print "date &#124;&#124; credit &#124;&#124; debit &#124;&#124; balance  |
|                                 |                              /n 23/03/2020 &#124;&#124; &#124;&#124; 1.00 &#124;&#124; 1.00    | 
|                                 |                              /n 23/03/2020 &#124;&#124; 1.00 &#124;&#124; &#124;&#124; 2.00    |
|                                 |                              /n 23/03/2020 &#124;&#124; 1.00 &#124;&#124; &#124;&#124; 1.00"   |

## <a name="Testing">Testing</a>

Tests were written with [Jasmine (3.5.0)](https://github.com/jasmine/jasmine/releases).

To run the tests, clone the repo locally and run:

```bash
$> cd bank-tech-test-js
$> open ./SpecRunner.html
```
![jasmine](jasmine.png)

## <a name="User_Stories">User Stories</a>

```
As a user,
So I can add to my account,
I would like to be able to make a deposit
```
```
As a user,
So I can get money from my account,
I would like to able to make a withdrawal
```
```
As a user,
To get details about my account,
I would like to print an account statement containing transaction dates, amounts, and balances
```

### Objects & Functions

| Object:          | Account                                            | 
| ---------------- | -------------------------------------------------- | 
| **Properties:**  | statement, balance                                 |
| **Function:**    | Print_Statement                                    |
| **Function:**    | Deposit                                            |  
| **Function:**    | Withdraw                                           | 

&nbsp;

| Object:          | Statement                                          | 
| ---------------- | -------------------------------------------------- | 
| **Properties:**  | summary                                            |
| **Function:**    | addTransaction                                     |
| **Function:**    | display                                            | 

&nbsp;

| Object:          | TransactionSummary                                 | 
| ---------------- | -------------------------------------------------- | 
| **Properties:**  | transactions                                       |
| **Function:**    | pushTransaction                                    |

&nbsp;

| Object:          | Transaction                                        | 
| ---------------- | -------------------------------------------------- | 
| **Properties:**  | amount, balance, date                              |

&nbsp;

## <a name="Self-assessment">Self-assessment</a>

Once you have completed the challenge and feel happy with your solution, here's a form to help you reflect on the quality of your code: https://docs.google.com/forms/d/1Q-NnqVObbGLDHxlvbUfeAC7yBCf3eCjTmz6GOqC9Aeo/edit

![Tracking pixel](https://githubanalytics.herokuapp.com/course/individual_challenges/bank_tech_test.md)
