package ZidFrameworkTest.Zid;

import org.openqa.selenium.By;
import org.testng.annotations.DataProvider;
import org.testng.annotations.Test;

public class UserRegisterTest extends TestBase {
		// valid register Test using data driven and page object 
	ZidHomePage obj ;
	RegisterPage reg ; 
	@DataProvider(name = "testData")
	public static Object[][] userData(){
		return new Object[][] {
			{"disha", "595558656", "fake33@gmail.com", "0123456789", "fake666", "rioto"}
			,{"disha", "595558656", "fake44@gmail.com", "0123456789", "fake6666", "rioto"}
			,{"disha", "595558656", "fake555@gmail.com", "0123456789", "fake4448", "rioto"}
			,{"disha", "595558656", "fake195@gmail.com", "0123456789", "fake6655", "rioto"}
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
		driver.findElement(By.xpath("//*[@id=\"page-wrapper\"]/div[1]/nav/ul/li/a")).click();
		Thread.sleep(5000);
		driver.navigate().to("https://zid.sa/");
		Thread.sleep(2000);
	
	}

}
