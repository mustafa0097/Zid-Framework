
package ZidFrameworkTest.Zid;

import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class InvalidRegisterTest extends TestBase {
	// invalid register Test using data driven and page object 
	
	ZidHomePage obj ;
	RegisterPage reg ; 
	@DataProvider(name = "testData")
	public static Object[][] userData(){
		return new Object[][] {
			{"disha", "5333", "desha@gmail.com", "0000", "fizz", "rioto"}
			,{"disha", "0123467974", "fake@tmail.ws", "0123456789", "wegz", "rioto"}
			
		};
	}
	@Test(dataProvider = "testData")
	public void Register(String username , String Num , String email , String password ,String storename,String storename2 ) throws InterruptedException {
		obj = new ZidHomePage(driver);
		obj.ChangeLanguageAndRegisterClick();
		reg = new RegisterPage(driver);
		Thread.sleep(2000);
		reg.UserRegister(username, Num, email, password, storename, storename2);
		Thread.sleep(5000);
		driver.navigate().to("https://zid.sa/");
		Thread.sleep(2000);
	
	}

}