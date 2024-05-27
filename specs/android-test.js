

describe("RBI APK", () => {
  it("staging", async () => {
    var staging = await $('//android.view.ViewGroup[@content-desc="staging"]/android.view.ViewGroup');
    await staging.waitForDisplayed({ timeout: 30000 });
    await staging.click();
    await staging.click();
  });

  it("Continue", async () => {
    var Continue = await $('//android.view.ViewGroup[@content-desc="Continue"]/android.widget.TextView');
    await Continue.waitForDisplayed({ timeout: 30000 });
    await Continue.click();
    await Continue.click();
  });

  it("staging1", async () => {
    var staging1 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[2]');
    await staging1.waitForDisplayed({ timeout: 30000 });
    await staging1.click();
    await staging1.click();
  });

  it("staging2", async () => {
    var staging2 = await $('//*[@text="\uE5D2"]');
    await staging2.waitForDisplayed({ timeout: 30000 });
    await staging2.click();
    await staging2.click();
  });

  it("staging3", async () => {
    var staging3 = await $('//*[@text="Sign In"]');
    await staging3.waitForDisplayed({ timeout: 30000 });
    await staging3.click();
    await staging3.click();
  });

  it("staging4", async () => {
    var staging4 = await $('//android.widget.EditText[@content-desc="Email Address"]');
    await staging4.waitForDisplayed({ timeout: 30000 });
    await staging4.setValue('bk_rbi_automation_android_01@maildrop.cc');
   // await staging4.click();
  });

  it("staging5", async () => {
    var staging5 = await $('//android.widget.Button[@content-desc="Sign Up / Sign In"]/android.widget.TextView');
    await staging5.waitForDisplayed({ timeout: 30000 });
    await staging5.click();
  });

  it("staging6", async () => {
    var staging6 = await $('//*[@resource-id="OTP-code-input"]');
    await staging6.waitForDisplayed({ timeout: 100000 });
    await staging6.setValue('123456');
    await staging6.click();
    await timeout(40000);
  });

  

  it("staging7", async () => {
    var staging7 = await $('//android.view.View[@content-desc="Menu"]/android.widget.TextView');
    await staging7.waitForDisplayed({ timeout: 30000 });
    await staging7.click();
  });

  it("staging8", async () => {
    var staging8 = await $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout[3]/android.widget.Button[1]');
    await staging8.waitForDisplayed({ timeout: 30000 });
    await staging8.click();
    await timeout(40000);
  });

  it("staging9", async () => {
    var staging9 = await $('//*[@resource-id="service-mode-DELIVERY"]');
    await staging9.waitForDisplayed({ timeout: 30000 });
    await staging9.click();
  });

  it("staging10", async () => {
    var staging10 = await $('//*[@resource-id="delivery-address-input"]');
    await staging10.waitForDisplayed({ timeout: 30000 });
    await staging10.setValue('19432 Presidential Way');
  });

  it("staging11", async () => {
    var staging11 = await $('//*[@resource-id="delivery-address-input"]');
    await staging11.waitForDisplayed({ timeout: 30000 });
    await staging11.click();
  });

  it("staging12", async () => {
    var staging12 = await $('//*[@content-desc="19432 Presidential Way Miami, FL, USA"]');
    await staging12.waitForDisplayed({ timeout: 30000 });
    await staging12.click();
    await timeout(40000);
  });

  it("staging13", async () => {
    var staging13 = await $('//*[@content-desc="19432 Presidential Way Miami, FL, USA"]');
    await staging13.waitForDisplayed({ timeout: 30000 });
    await staging13.click();
    await timeout(40000);
  });


     });
