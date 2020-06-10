package RegisterSteps;

import org.openqa.selenium.By;

import ZidFrameworkTest.Zid.RegisterPage;
import ZidFrameworkTest.Zid.TestBase;
import ZidFrameworkTest.Zid.ZidHomePage;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class register extends TestBase {
	// valid register using cucumber , page objects and data driven 
	RegisterPage reg;
	ZidHomePage obj ;
	
	@Given("^the user in home page$")
	public void the_user_in_home_page() {
	   
	}

	@When("^he click on register button$")
	public void i_click_on_register_button() throws InterruptedException  {
	obj = new ZidHomePage(driver);
	driver.findElement(By.xpath("/html/body/main/header/div/nav[2]/ul/li[1]/a")).click();
	Thread.sleep(2000);
	}
	@When("^he entered valid data \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
	public void i_entered(String fullName, String mobileNumber, String email, String password, String storename, String storename2) throws InterruptedException  {
		obj = new ZidHomePage(driver);
		reg = new RegisterPage(driver);
		Thread.sleep(2000);
		reg.UserRegister(fullName, mobileNumber, email, password, storename, storename2);
		Thread.sleep(6000);
		driver.findElement(By.xpath("//*[@id=\"page-wrapper\"]/div[1]/nav/ul/li/a")).click();
		Thread.sleep(5000);
		driver.navigate().to("https://zid.sa/");
		Thread.sleep(2000);
	
	}
	   
	

	@Then("^the registration is completed$")
	public void the_registration_is_completed()  {

	}
}
