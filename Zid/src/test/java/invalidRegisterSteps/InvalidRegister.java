package invalidRegisterSteps;

import org.openqa.selenium.By;

import ZidFrameworkTest.Zid.RegisterPage;
import ZidFrameworkTest.Zid.TestBase;
import ZidFrameworkTest.Zid.ZidHomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidRegister extends TestBase {
	//Invalid Register Using cucumber , page object and data driven 
	RegisterPage reg;
	ZidHomePage obj ;

	@Given("^the user in home page$")
	public void the_user_in_home_page() {

	}

	@When("^The User click on register button$")
	public void i_click_on_register_button() throws InterruptedException  {
		obj = new ZidHomePage(driver);
		driver.findElement(By.xpath("/html/body/main/header/div/nav[2]/ul/li[1]/a")).click();
		Thread.sleep(2000);
	}
	@When("^He entered invalid data \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_entered(String fullName, String mobileNumber, String email, String password, String storename, String storename2) throws InterruptedException  {
		obj = new ZidHomePage(driver);
		reg = new RegisterPage(driver);
		Thread.sleep(2000);
		reg.UserRegister(fullName, mobileNumber, email, password, storename, storename2);
		Thread.sleep(5000);
		driver.navigate().to("https://zid.sa/");
	

	}

	

	@Then("^the registration is failed$")
	public void the_registration_is_completed()  {

	}
}
