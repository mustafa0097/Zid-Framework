Feature: User Register
  I want to check that the user can register in Zid web site 
Scenario Outline: User Register
Given the user in home page 
When he click on register button 
And he entered valid data "<fullName>","<mobileNumber>","<email>","<password>","<storename>","<storename2>"
Then the registration is completed
Examples:
|fullName|mobileNumber|email|password|storename|storename2|
|Mustafa|595558656|man@gmail.com|123456789|fake001|lll|
|disha|595558656|sad@gmail.com|123456789|fake01|ooo|
|darshsas|595558656|fakeee@gmail.com|123456789|fake002|zaa|
|abdo|595558656|fake22@gmail.com|123456789|fake003|zww|
|abdooo|595558656|fake331@gmail.com|123456789|fake004|zzz|