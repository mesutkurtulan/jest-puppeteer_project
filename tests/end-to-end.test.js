import HomePage from '../pages/HomePage'
import TopBar from '../pages/components/TopBar'
import FeedbackPage from '../pages/FeedbackPage'
import LoginPage from '../pages/LoginPage'

import { username, password, timeout } from '../config'

describe('End-to-end Test', () => {
	let homePage
	let topBar
	let feedbackPage
	let loginPage

	beforeAll(async () => {
		jest.setTimeout(timeout)
		homePage = new HomePage()
		topBar = new TopBar()
		feedbackPage = new FeedbackPage()
		loginPage = new LoginPage()
	})

	it('should load homepage', async () => {
		await homePage.visit();
		await homePage.isNavBarDisplayed();
	})

	it('should submit feedback', async () => {
		await feedbackPage.visit();
		await feedbackPage.isFeedbackFormdisplayed();
		await feedbackPage.submitFeedback(
			'Johny',
			'johnyTheSales@email.com',
			'subject',
			'here comes your super long comment message'
		);
	})

	it('should login to application', async () => {
		await homePage.visit();
		await topBar.isTopBarDisplayed();
		await topBar.clickSignInButton();
		await loginPage.isLoginFormDisplayed();
		await loginPage.login(username, password);
	})
})
