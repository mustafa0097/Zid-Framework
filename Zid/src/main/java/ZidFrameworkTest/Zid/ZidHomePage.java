package ZidFrameworkTest.Zid;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class ZidHomePage extends PageBase {
	
	public ZidHomePage(WebDriver driver) {
		super(driver);
	}

	@FindBy(xpath  = "/html/body/main/header/div/nav[2]/ul/li[3]/a")
	WebElement Eng ;
	
	@FindBy(xpath = "/html/body/main/header/div/nav[2]/ul/li[1]/a")
	WebElement register ;
	
	@FindBy(xpath = "//*[@id=\"page-wrapper\"]/div[1]/nav/ul/li/a")
	WebElement logout ;
	
	public void ChangeLanguageAndRegisterClick() {
		BtnClick(register);
	}
	
	public void signOut() {
		BtnClick(logout);
		
	}

}
