package ZidFrameworkTest.Zid;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;

public class RegisterPage extends PageBase {

	public RegisterPage(WebDriver driver) {
		super(driver);
	}
	
	@FindBy(id = "name")
	WebElement name ;
	
	@FindBy(id = "mobile")
	WebElement Phonenum;
	
	@FindBy(id = "registration_email")
	WebElement mail ;
	
	@FindBy(id = "registration_password")
	WebElement pass ; 
	
	@FindBy(xpath = "//*[@id=\"form-register\"]/div/div/div/div[1]/div/div/div[5]/button")
	WebElement next ; 
	
	@FindBy(id = "store_username")
	WebElement storeName;
	
	@FindBy(id = "store_name")
	WebElement storeName2;
	
	@FindBy(id = "store_category_id")
	WebElement WhatUsell ;
	
	@FindBy(id = "started_business_before_registration_yes")
	WebElement yes ; 
	
	@FindBy(xpath = "//*[@id=\"form-register\"]/div/div/div/div[2]/div/div/div[7]/div/button")
	WebElement finish ;
	
	public void UserRegister(String username , String Num , String email , String password ,String storename,String storename2 ) throws InterruptedException {
		SendK(name, username);
		SendK(Phonenum, Num);
		SendK(mail, email);
		SendK(pass, password);
		Thread.sleep(2000);
		BtnClick(next);
		Thread.sleep(1000);
		SendK(storeName, storename);
		SendK(storeName2, storename2);
		Select selc = new Select(WhatUsell);
		selc.selectByValue("1");
		BtnClick(yes);
		BtnClick(finish);
	}
}
