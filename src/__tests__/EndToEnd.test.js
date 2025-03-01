/**
 * @jest-environment node
 */
import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {
    test('An event element is collapsed by default', async () => {
        jest.setTimeout(30000); // Increase timeout to 30 seconds

        const browser = await puppeteer.launch({
            headless: false, // Change to true if you don’t need to see the browser
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();
        await page.goto('http://localhost:5173/', { waitUntil: 'networkidle2' }); // Wait for page to fully load

        await page.waitForSelector('.event'); // Ensure element exists before selecting
        const eventDetails = await page.$('.event .details');

        expect(eventDetails).toBeNull(); // Ensure details are hidden by default

        await browser.close();
    }, 30000); // Another way to increase timeout for just this test
});
