$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("G:/testing/Zid/src/test/java/features/validUserRegister.feature");
formatter.feature({
  "line": 1,
  "name": "User Register",
  "description": "I want to check that the user can register in Zid web site",
  "id": "user-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User Register",
  "description": "",
  "id": "user-register;user-register",
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
  "name": "he click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he entered valid data \"\u003cfullName\u003e\",\"\u003cmobileNumber\u003e\",\"\u003cemail\u003e\",\"\u003cpassword\u003e\",\"\u003cstorename\u003e\",\"\u003cstorename2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "the registration is completed",
  "keyword": "Then "
});
formatter.examples({
  "line": 8,
  "name": "",
  "description": "",
  "id": "user-register;user-register;",
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
      "id": "user-register;user-register;;1"
    },
    {
      "cells": [
        "Mustafa",
        "595558656",
        "9ebf78kye@tmpmail.org",
        "123456789",
        "taken187",
        "lll"
      ],
      "line": 10,
      "id": "user-register;user-register;;2"
    },
    {
      "cells": [
        "disha",
        "595558656",
        "tb6zxdkkn@disbox.org",
        "123456789",
        "taken1000",
        "ooo"
      ],
      "line": 11,
      "id": "user-register;user-register;;3"
    },
    {
      "cells": [
        "darshsas",
        "595558656",
        "4csvlkny3@tmails.net",
        "123456789",
        "taken99",
        "zaa"
      ],
      "line": 12,
      "id": "user-register;user-register;;4"
    },
    {
      "cells": [
        "abdo",
        "595558656",
        "bdwmvcwhi@disbox.net",
        "123456789",
        "taken88",
        "zww"
      ],
      "line": 13,
      "id": "user-register;user-register;;5"
    },
    {
      "cells": [
        "abdooo",
        "595558656",
        "jldf4eb3q@moakt.cc",
        "123456789",
        "taken77",
        "zzz"
      ],
      "line": 14,
      "id": "user-register;user-register;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 10,
  "name": "User Register",
  "description": "",
  "id": "user-register;user-register;;2",
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
  "name": "he click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he entered valid data \"Mustafa\",\"595558656\",\"9ebf78kye@tmpmail.org\",\"123456789\",\"taken187\",\"lll\"",
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
  "name": "the registration is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "register.the_user_in_home_page()"
});
formatter.result({
  "duration": 165268000,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_register_button()"
});
formatter.result({
  "duration": 4812897900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mustafa",
      "offset": 23
    },
    {
      "val": "595558656",
      "offset": 33
    },
    {
      "val": "9ebf78kye@tmpmail.org",
      "offset": 45
    },
    {
      "val": "123456789",
      "offset": 69
    },
    {
      "val": "taken187",
      "offset": 81
    },
    {
      "val": "lll",
      "offset": 92
    }
  ],
  "location": "register.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 22126755900,
  "status": "passed"
});
formatter.match({
  "location": "register.the_registration_is_completed()"
});
formatter.result({
  "duration": 38700,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "User Register",
  "description": "",
  "id": "user-register;user-register;;3",
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
  "name": "he click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he entered valid data \"disha\",\"595558656\",\"tb6zxdkkn@disbox.org\",\"123456789\",\"taken1000\",\"ooo\"",
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
  "name": "the registration is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "register.the_user_in_home_page()"
});
formatter.result({
  "duration": 55900,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_register_button()"
});
formatter.result({
  "duration": 3073945200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "disha",
      "offset": 23
    },
    {
      "val": "595558656",
      "offset": 31
    },
    {
      "val": "tb6zxdkkn@disbox.org",
      "offset": 43
    },
    {
      "val": "123456789",
      "offset": 66
    },
    {
      "val": "taken1000",
      "offset": 78
    },
    {
      "val": "ooo",
      "offset": 90
    }
  ],
  "location": "register.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 21302196600,
  "status": "passed"
});
formatter.match({
  "location": "register.the_registration_is_completed()"
});
formatter.result({
  "duration": 26900,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "User Register",
  "description": "",
  "id": "user-register;user-register;;4",
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
  "name": "he click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he entered valid data \"darshsas\",\"595558656\",\"4csvlkny3@tmails.net\",\"123456789\",\"taken99\",\"zaa\"",
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
  "name": "the registration is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "register.the_user_in_home_page()"
});
formatter.result({
  "duration": 39600,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_register_button()"
});
formatter.result({
  "duration": 3016091800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "darshsas",
      "offset": 23
    },
    {
      "val": "595558656",
      "offset": 34
    },
    {
      "val": "4csvlkny3@tmails.net",
      "offset": 46
    },
    {
      "val": "123456789",
      "offset": 69
    },
    {
      "val": "taken99",
      "offset": 81
    },
    {
      "val": "zaa",
      "offset": 91
    }
  ],
  "location": "register.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 21218669700,
  "status": "passed"
});
formatter.match({
  "location": "register.the_registration_is_completed()"
});
formatter.result({
  "duration": 29000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "User Register",
  "description": "",
  "id": "user-register;user-register;;5",
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
  "name": "he click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he entered valid data \"abdo\",\"595558656\",\"bdwmvcwhi@disbox.net\",\"123456789\",\"taken88\",\"zww\"",
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
  "name": "the registration is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "register.the_user_in_home_page()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_register_button()"
});
formatter.result({
  "duration": 3082139700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abdo",
      "offset": 23
    },
    {
      "val": "595558656",
      "offset": 30
    },
    {
      "val": "bdwmvcwhi@disbox.net",
      "offset": 42
    },
    {
      "val": "123456789",
      "offset": 65
    },
    {
      "val": "taken88",
      "offset": 77
    },
    {
      "val": "zww",
      "offset": 87
    }
  ],
  "location": "register.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 20568990800,
  "status": "passed"
});
formatter.match({
  "location": "register.the_registration_is_completed()"
});
formatter.result({
  "duration": 19800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "User Register",
  "description": "",
  "id": "user-register;user-register;;6",
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
  "name": "he click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "he entered valid data \"abdooo\",\"595558656\",\"jldf4eb3q@moakt.cc\",\"123456789\",\"taken77\",\"zzz\"",
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
  "name": "the registration is completed",
  "keyword": "Then "
});
formatter.match({
  "location": "register.the_user_in_home_page()"
});
formatter.result({
  "duration": 27300,
  "status": "passed"
});
formatter.match({
  "location": "register.i_click_on_register_button()"
});
formatter.result({
  "duration": 2993088900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abdooo",
      "offset": 23
    },
    {
      "val": "595558656",
      "offset": 32
    },
    {
      "val": "jldf4eb3q@moakt.cc",
      "offset": 44
    },
    {
      "val": "123456789",
      "offset": 65
    },
    {
      "val": "taken77",
      "offset": 77
    },
    {
      "val": "zzz",
      "offset": 87
    }
  ],
  "location": "register.i_entered(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 21112818100,
  "status": "passed"
});
formatter.match({
  "location": "register.the_registration_is_completed()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
});