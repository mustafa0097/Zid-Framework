package ZidFrameworkTest.Zid;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeSuite;


import cucumber.api.testng.AbstractTestNGCucumberTests;

public class TestBase extends AbstractTestNGCucumberTests
{
	// Parent class for Test running 
	public static WebDriver driver;



	@BeforeSuite
	public void StartDriver() {
		String ChromePath = System.getProperty("user.dir")+"\\drivers\\chromedriver.exe";
		System.setProperty("webdriver.chrome.driver", ChromePath);
		driver = new ChromeDriver() ;
		driver.navigate().to("https://zid.sa/");
	

	}

	@AfterSuite
	public void driverstop()  {

		//driver.quit();
	}
}
