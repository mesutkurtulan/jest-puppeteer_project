import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import LoginPage from '../pages/LoginPage'
import FeedbackPage from '../pages/FeedbackPage'

describe.skip('Example Test', ()=>{ 

    let homepage;
    let topbar;
    let loginpage;
    let feedbackpage

    beforeAll(async()=>{
        jest.setTimeout(30000);
        homepage = new HomePage();
        topbar = new TopBar();
        loginpage = new LoginPage();
        feedbackpage = new FeedbackPage();
    });

    it('HomePage should work', async ()=>{
        await homepage.visit();
    });

    it('Navbar should be displayed', async ()=>{
        await homepage.isNavBarDisplayed();
        await topbar.isTopBarDisplayed();
    });

    it('Try to Login', async ()=>{
        await loginpage.visit();
        await loginpage.isLoginFormDisplayed();
        await loginpage.login('username', 'password');
    })

    it('Submit Feedback Form', async ()=>{
        await feedbackpage.visit();
        await feedbackpage.isFeedbackFormdisplayed();
        await feedbackpage.submitFeedback('wendi geraldyn', 'wendi.geraldyn@aceadd.com', 'subject', 'comment');
    })
});