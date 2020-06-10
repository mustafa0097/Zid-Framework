package runner;

import ZidFrameworkTest.Zid.TestBase;
import cucumber.api.CucumberOptions;
// Test runner for valid user register using cucumber 
@CucumberOptions(features = "G:\\testing\\Zid\\src\\test\\java\\features\\validUserRegister.feature" ,glue = "RegisterSteps",
plugin = {"html:target/cucumber-Valid-register-html-report"} )
public class testRunner extends TestBase  {

}
