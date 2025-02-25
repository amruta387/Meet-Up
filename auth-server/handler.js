'use strict';

const { google } = require("googleapis");
const calendar = google.calendar("v3");
const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];
const { CLIENT_SECRET, CLIENT_ID, CALENDAR_ID } = process.env;
const redirect_uris = [
    "https://meet-up-eight-eta.vercel.app/"
];

const oAuth2Client = new google.auth.OAuth2(
    CLIENT_ID,
    CLIENT_SECRET,
    redirect_uris[0]
);

// Step 1: Get OAuth URL for authorization
module.exports.getAuthURL = async () => {
    try {
        const authUrl = oAuth2Client.generateAuthUrl({
            access_type: "offline",
            scope: SCOPES,
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({
                authUrl,
            }),
        };
    } catch (error) {
        console.error('getAuthURL Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ error: 'Error generating auth URL' }),
        };
    }
};

// Step 2: Exchange the code for an access token
module.exports.getAccessToken = async (event) => {
    try {
        const code = decodeURIComponent(`${event.pathParameters.code}`);

        const results = await new Promise((resolve, reject) => {
            oAuth2Client.getToken(code, (error, response) => {
                if (error) {
                    return reject(error);
                }
                return resolve(response);
            });
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(results),
        };
    } catch (error) {
        console.error('getAccessToken Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ error: 'Error exchanging code for token' }),
        };
    }
};

// Step 3: Get Calendar Events using access token
module.exports.getCalendarEvents = async (event) => {
    try {
        const access_token = decodeURIComponent(
            `${event.pathParameters.access_token}`
        );
        oAuth2Client.setCredentials({ access_token });

        // Fetch calendar events
        const events = await new Promise((resolve, reject) => {
            calendar.events.list(
                {
                    calendarId: CALENDAR_ID,
                    auth: oAuth2Client,
                    timeMin: new Date().toISOString(),
                    singleEvents: true,
                    orderBy: 'startTime',
                },
                (error, response) => {
                    if (error) {
                        return reject(error);
                    }
                    return resolve(response);
                }
            );
        });

        return {
            statusCode: 200,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ events: events.data.items }),
        };
    } catch (error) {
        console.error('getCalendarEvents Error:', error);
        return {
            statusCode: 500,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify(error),
        };
    }
};