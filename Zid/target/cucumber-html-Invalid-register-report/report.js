$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/testing/Zid/src/test/java/features/InvalidUserRegister.feature");
formatter.feature({
  "line": 1,
  "name": "User Register",
  "description": "I want to do an invalid Registeration flow",
  "id": "user-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Invalid registration flow",
  "description": "",
  "id": "user-register;invalid-registration-flow",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The User click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "He entered invalid data \"\u003cfullName\u003e\",\"\u003cmobileNumber\u003e\",\"\u003cemail\u003e\",\"\u003cpassword\u003e\",\"\u003cstorename\u003e\",\"\u003cstorename2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the registration is failed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "user-register;invalid-registration-flow;",
  "rows": [
    {
      "cells": [
        "fullName",
        "mobileNumber",
        "email",
        "password",
        "storename",
        "storename2"
      ],
      "line": 9,
      "id": "user-register;invalid-registration-flow;;1"
    },
    {
      "cells": [
        "Mustafa",
        "123456789",
        "desha@gmail.com",
        "123456789",
        "fizz",
        "lol"
      ],
      "line": 10,
      "id": "user-register;invalid-registration-flow;;2"
    },
    {
      "cells": [
        "disha",
        "595558656",
        "desha2@gmail.com",
        "123456789",
        "mizzz",
        "lol"
      ],
      "line": 11,
      "id": "user-register;invalid-registration-flow;;3"
    },
    {
      "cells": [
        "tarek",
        "595558656",
        "xman@gmail.com",
        "123456789",
        "wizzz",
        "lol"
      ],
      "line": 12,
      "id": "user-register;invalid-registration-flow;;4"
    },
    {
      "cells": [
        "darshsas",
        "595558656",
        "xman2@gmail.com",
        "123456789",
        "zigzz",
        "lol"
      ],
      "line": 13,
      "id": "user-register;invalid-registration-flow;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "Invalid registration flow",
  "description": "",
  "id": "user-register;invalid-registration-flow;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The User click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "He entered invalid data \"Mustafa\",\"123456789\",\"desha@gmail.com\",\"123456789\",\"fizz\",\"lol\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the registration is failed",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidRegister.the_user_in_home_page()"
});
formatter.result({
  "duration": 154089300,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.i_click_on_register_button()"
});
formatter.result({
  "duration": 4234585000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mustafa",
      "offset": 25
    },
    {
      "val": "123456789",
      "offset": 35
    },
    {
      "val": "desha@gmail.com",
      "offset": 47
    },
    {
      "val": "123456789",
      "offset": 65
    },
    {
      "val": "fizz",
      "offset": 77
    },
    {
      "val": "lol",
      "offset": 84
    }
  ],
  "location": "InvalidRegister.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 12032529600,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.the_registration_is_completed()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Invalid registration flow",
  "description": "",
  "id": "user-register;invalid-registration-flow;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The User click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "He entered invalid data \"disha\",\"595558656\",\"desha2@gmail.com\",\"123456789\",\"mizzz\",\"lol\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the registration is failed",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidRegister.the_user_in_home_page()"
});
formatter.result({
  "duration": 91400,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.i_click_on_register_button()"
});
formatter.result({
  "duration": 2436268900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "disha",
      "offset": 25
    },
    {
      "val": "595558656",
      "offset": 33
    },
    {
      "val": "desha2@gmail.com",
      "offset": 45
    },
    {
      "val": "123456789",
      "offset": 64
    },
    {
      "val": "mizzz",
      "offset": 76
    },
    {
      "val": "lol",
      "offset": 84
    }
  ],
  "location": "InvalidRegister.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 11885405200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.the_registration_is_completed()"
});
formatter.result({
  "duration": 18300,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Invalid registration flow",
  "description": "",
  "id": "user-register;invalid-registration-flow;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The User click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "He entered invalid data \"tarek\",\"595558656\",\"xman@gmail.com\",\"123456789\",\"wizzz\",\"lol\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the registration is failed",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidRegister.the_user_in_home_page()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.i_click_on_register_button()"
});
formatter.result({
  "duration": 2368978600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tarek",
      "offset": 25
    },
    {
      "val": "595558656",
      "offset": 33
    },
    {
      "val": "xman@gmail.com",
      "offset": 45
    },
    {
      "val": "123456789",
      "offset": 62
    },
    {
      "val": "wizzz",
      "offset": 74
    },
    {
      "val": "lol",
      "offset": 82
    }
  ],
  "location": "InvalidRegister.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 11986344100,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.the_registration_is_completed()"
});
formatter.result({
  "duration": 16800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Invalid registration flow",
  "description": "",
  "id": "user-register;invalid-registration-flow;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "the user in home page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "The User click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "He entered invalid data \"darshsas\",\"595558656\",\"xman2@gmail.com\",\"123456789\",\"zigzz\",\"lol\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the registration is failed",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidRegister.the_user_in_home_page()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.i_click_on_register_button()"
});
formatter.result({
  "duration": 2380631800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "darshsas",
      "offset": 25
    },
    {
      "val": "595558656",
      "offset": 36
    },
    {
      "val": "xman2@gmail.com",
      "offset": 48
    },
    {
      "val": "123456789",
      "offset": 66
    },
    {
      "val": "zigzz",
      "offset": 78
    },
    {
      "val": "lol",
      "offset": 86
    }
  ],
  "location": "InvalidRegister.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 11888876400,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegister.the_registration_is_completed()"
});
formatter.result({
  "duration": 23000,
  "status": "passed"
});
});