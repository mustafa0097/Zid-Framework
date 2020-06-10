Feature: User Register
  I want to do an invalid Registeration flow
Scenario Outline: Invalid registration flow
Given the user in home page 
When The User click on register button 
And He entered invalid data "<fullName>","<mobileNumber>","<email>","<password>","<storename>","<storename2>"
Then the registration is failed
Examples:
|fullName|mobileNumber|email|password|storename|storename2|
|Mustafa|123456789|degmail.com|123456789|fizz|lo|
|disha|595|desha2@gmail.com|123456789|fizz|ol|
|tarek|5865|xman@gmail.com|123456789|fizz|lol|
|darshsas|595558656|xman2@gmail.com|123456789|fizz|lol|