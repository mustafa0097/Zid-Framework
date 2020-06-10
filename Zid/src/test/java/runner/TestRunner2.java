package runner;

import ZidFrameworkTest.Zid.TestBase;
import cucumber.api.CucumberOptions;
//Test runner for INvalid user register using cucumber 
@CucumberOptions(features = "G:\\testing\\Zid\\src\\test\\java\\features\\InvalidUserRegister.feature" ,glue = "invalidRegisterSteps",
plugin = {"html:target/cucumber-html-Invalid-register-report"} )
public class TestRunner2 extends TestBase  {

}
