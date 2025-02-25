// src/mock-data.js

/* const mockData = [
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-19T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-19T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-05-19T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-20T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-20T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-05-20T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200521T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-21T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-21T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-05-21T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200522T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-22T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-22T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-05-22T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200523T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-23T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-23T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-05-23T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200525T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-25T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-25T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-05-25T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200526T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-26T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-26T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-05-26T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200527T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-27T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-27T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-05-27T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200528T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MjhUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-28T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-28T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-05-28T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200529T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-29T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-29T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-05-29T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200530T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MzBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-05-30T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-05-30T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-05-30T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200601T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDFUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-01T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-01T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-01T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200602T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDJUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-02T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-02T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-02T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200603T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDNUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-03T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-03T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-03T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200604T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDRUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-04T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-04T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-04T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200605T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-05T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-05T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-05T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200606T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-06T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-06T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-06T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200608T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MDhUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-08T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-08T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-08T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200609T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MDlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-09T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-09T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-09T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200610T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-10T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-10T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-10T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200611T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTFUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-11T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-11T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-11T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200612T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-12T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-12T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-12T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200613T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-13T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-13T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-13T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200615T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTVUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-15T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-15T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-15T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200616T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MTZUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-16T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-16T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-16T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200617T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTdUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-17T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-17T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-17T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200618T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MThUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-18T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-18T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-18T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200619T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MTlUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-19T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-19T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-19T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200620T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjBUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-20T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-20T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-20T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-22T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-22T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-22T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-23T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-23T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-23T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200624T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjRUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-24T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-24T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-24T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200625T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjVUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-25T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-25T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-25T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181159875584000\"",
        "id": "3qtd6uscq4tsi6gc7nmmtpqlct_20200626T120000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjZUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:14:30.000Z",
        "updated": "2020-05-27T11:45:37.792Z",
        "summary": "React is Fun",
        "description": "Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",
        "location": "Berlin, Germany",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-26T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-26T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "3qtd6uscq4tsi6gc7nmmtpqlct",
        "originalStartTime": {
            "dateTime": "2020-06-26T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "3qtd6uscq4tsi6gc7nmmtpqlct@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3181161784712000\"",
        "id": "4eahs9ghkhrvkld72hogu9ph3e_20200627T140000Z",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjdUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",
        "created": "2020-05-19T19:17:46.000Z",
        "updated": "2020-05-27T12:01:32.356Z",
        "summary": "Learn JavaScript",
        "description": "Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",
        "location": "London, UK",
        "creator": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "organizer": {
            "email": "fullstackwebdev@careerfoundry.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-06-27T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-06-27T17:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "recurringEventId": "4eahs9ghkhrvkld72hogu9ph3e",
        "originalStartTime": {
            "dateTime": "2020-06-27T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "4eahs9ghkhrvkld72hogu9ph3e@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    }
];

export default mockData; */


// src/mock-data.js


const mockData = [
    {
        "kind": "calendar#event",
        "etag": "\"3335892843694000\"",
        "id": "73pshbe7hfvk7k9lkio6mv72no",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NzNwc2hiZTdoZnZrN2s5bGtpbzZtdjcybm8gYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2013-08-06T13:20:51.000Z",
        "updated": "2022-11-08T22:27:01.847Z",
        "summary": "Good Day To You,",
        "description": "Good Day To You,\n\nMy Name is EL_HADJ DRISSA OUALI ; I am a banker by profession. I am from Ouagadougou, Burkina Faso, West Africa. My reason for contacting you is to transfer an abandoned fund (USD$17,000.000.00) SEVENTEEN MILLION UNITED STATES DOLLARS to your account if you agree with me.\n\nThe owner of this fund died since 2004 with his Next Of Kin. I want to present you to the bank as the Next of Kin/beneficiary of this fund.\n\nFurther details of the transaction shall be forward to you as soon as I receive your response indicating your interest in handling this transaction.\n\nHave a great day,\n\nEL_HADJ DRISSA OUALI,",
        "creator": {
            "email": "elhadjdrissaouali@gmail.com",
            "displayName": "EL_HADJ DRISSA OUALI"
        },
        "organizer": {
            "email": "elhadjdrissaouali@gmail.com",
            "displayName": "EL_HADJ DRISSA OUALI"
        },
        "start": {
            "dateTime": "2013-08-06T15:30:00+02:00"
        },
        "end": {
            "dateTime": "2013-08-06T16:30:00+02:00"
        },
        "iCalUID": "73pshbe7hfvk7k9lkio6mv72no@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "needsAction"
            }
        ],
        "guestsCanInviteOthers": false,
        "guestsCanSeeOtherGuests": false,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3335892839086000\"",
        "id": "3u1emn22ho7a6jkf5g8oudg8j4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=M3UxZW1uMjJobzdhNmprZjVnOG91ZGc4ajQgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2013-11-26T19:29:11.000Z",
        "updated": "2022-11-08T22:26:59.543Z",
        "summary": "Mahesh & Sucheta Wedding",
        "description": "\"With new dreams,new hope,new aspiration and a desire to achieve new horizons,\n\nwe are stepping into a new beginning of wedded life\"\n\n \n\nOn Sunday, the 8th of December 2013\n\n \n\nThe honor of your presence is requested at the wedding of\n\n \nMahesh son of Mrs.Pushpa and Mr. Krishna Burte\n&\nSucheta daughter of Mrs.Savita and Mr. Suresh Khambe\n\n \n\nPlease Join us on this memorable occasion to shower your blessing!\nBalkrishna Hall, Near Dange Chowk.\n8th Dec 09:00 am to 07:00 pm ",
        "location": "Balkrishna Hall, Dange chowk, Chinchwad",
        "creator": {
            "email": "maheshburate@gmail.com",
            "displayName": "महेश बुरटे"
        },
        "organizer": {
            "email": "maheshburate@gmail.com",
            "displayName": "महेश बुरटे"
        },
        "start": {
            "dateTime": "2013-12-08T07:30:00+01:00"
        },
        "end": {
            "dateTime": "2013-12-08T10:00:00+01:00"
        },
        "transparency": "transparent",
        "iCalUID": "3u1emn22ho7a6jkf5g8oudg8j4@google.com",
        "sequence": 1,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "needsAction"
            }
        ],
        "guestsCanInviteOthers": false,
        "guestsCanSeeOtherGuests": false,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3452291675858000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehnmet1o61mjipph71n6oq1o75nmcpbg64om6s1h6himocrlcdk36s3k68p3epre75pmcppkcsq3grrh69gme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVobm1ldDFvNjFtamlwcGg3MW42b3Exbzc1bm1jcGJnNjRvbTZzMWg2aGltb2NybGNkazM2czNrNjhwM2VwcmU3NXBtY3Bwa2NzcTNncnJoNjlnbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2015-03-05T13:37:39.000Z",
        "updated": "2024-09-12T12:57:17.929Z",
        "summary": "My Meru Cab Booking",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DP9D_vVs1zCUh4jCZtk6E_xw9auql2ESao\n",
        "location": "Erandwane,Film institude Of India, Film institude Of India, Pune, Maharashtra, India, 400099",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2015-03-05T14:41:00+01:00"
        },
        "end": {
            "dateTime": "2015-03-05T15:41:00+01:00"
        },
        "endTimeUnspecified": true,
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9togt80m9g18nlh89ofep11cp14el3uch3pt227gn9sfg4g48oq2ag",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "displayName": "Amruta Patil",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DP9D_vVs1zCUh4jCZtk6E_xw9auql2ESao",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpegrmisj4cdh6oqbbdhlj4eb1ckrmepb3d8s72d9pcpgm8sbd6pr66tbj69m62dbbcdhm4qj569hjgcphe9mme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVncm1pc2o0Y2RoNm9xYmJkaGxqNGViMWNrcm1lcGIzZDhzNzJkOXBjcGdtOHNiZDZwcjY2dGJqNjltNjJkYmJjZGhtNHFqNTY5aGpnY3BoZTltbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2017-07-15T19:24:10.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Stay at Lovely Apartment Brajkovic with Great Sea View",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNUFo_WQxg58erjbOEiI3_Vf216EJk04Sc\n",
        "location": "Ulica od Gaja 66, Dubrovnik, Dubrovačko-neretvanska županija 20000, Croatia",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2017-08-18"
        },
        "end": {
            "date": "2017-08-21"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9t7irdcbliklk29ae7gecj8q59fadqm6vcus2la5kccbje2c831rmg",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": false
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNUFo_WQxg58erjbOEiI3_Vf216EJk04Sc",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3006728669582000\"",
        "id": "cco3acpjc8s6cbb56opmcb9kcgo6ab9ocoo68bb164ojap9o65hjccr470",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2NvM2FjcGpjOHM2Y2JiNTZvcG1jYjlrY2dvNmFiOW9jb282OGJiMTY0b2phcDlvNjVoamNjcjQ3MCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2017-08-22T01:12:14.000Z",
        "updated": "2017-08-22T01:12:14.791Z",
        "summary": "A2 prüfung",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2017-08-23T17:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2017-08-25T18:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "cco3acpjc8s6cbb56opmcb9kcgo6ab9ocoo68bb164ojap9o65hjccr470@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpegom2qb7e1gj8tbfd8snaqpjctpmgt9l6th78sbgd1qj2c1kdpn68pj76hommsj26dkjis346tq6os9j71n6e",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVnb20ycWI3ZTFnajh0YmZkOHNuYXFwamN0cG1ndDlsNnRoNzhzYmdkMXFqMmMxa2RwbjY4cGo3NmhvbW1zajI2ZGtqaXMzNDZ0cTZvczlqNzFuNmUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2018-07-08T14:27:21.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Infoabend für Locals in Köln am 18.07. um 19 Uhr",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DP5YZV01byhMD_ekMYTM4C_MF-mcMLW12U\n",
        "location": "Café Duddel, Zülpicher Wall 850674 Köln, Köln, NRW, DE, 50674",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-07-18T19:00:00+02:00"
        },
        "end": {
            "dateTime": "2018-07-18T21:00:00+02:00"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9t1aigpa4uoj9uk3gshu57btqphu104nndfg4qkrb3i9pd7tlq38ng",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "displayName": "Amruta Patil",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DP5YZV01byhMD_ekMYTM4C_MF-mcMLW12U",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3068901812652000\"",
        "id": "cosjce9pccpmcb9n6ssjab9k74ojeb9o64q3cb9h6di6ad9nc9im8pj1co",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y29zamNlOXBjY3BtY2I5bjZzc2phYjlrNzRvamViOW82NHEzY2I5aDZkaTZhZDluYzlpbThwajFjbyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2018-08-16T20:21:46.000Z",
        "updated": "2018-08-16T20:21:46.326Z",
        "summary": "Arbeits agentur termin",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-08-28T07:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2018-08-28T08:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "cosjce9pccpmcb9n6ssjab9k74ojeb9o64q3cb9h6di6ad9nc9im8pj1co@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3068901814434000\"",
        "id": "6gpj4ohm6ks62bb5c8rjib9kcph62bb2c8o64bb2c5i68e1p6hgmaopj64",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmdwajRvaG02a3M2MmJiNWM4cmppYjlrY3BoNjJiYjJjOG82NGJiMmM1aTY4ZTFwNmhnbWFvcGo2NCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2018-08-16T20:21:47.000Z",
        "updated": "2018-08-16T20:21:47.217Z",
        "summary": "B2 prüfung ",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-09-01T07:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2018-09-01T08:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "6gpj4ohm6ks62bb5c8rjib9kcph62bb2c8o64bb2c5i68e1p6hgmaopj64@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3078488976722000\"",
        "id": "cpgjccr46oo3gb9o6gpjeb9kcgrjeb9o6cr3ab9j6hh64cpjckrjee9nc4",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y3BnamNjcjQ2b28zZ2I5bzZncGplYjlrY2dyamViOW82Y3IzYWI5ajZoaDY0Y3BqY2tyamVlOW5jNCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2018-10-11T07:54:48.000Z",
        "updated": "2018-10-11T07:54:48.361Z",
        "summary": "Arbeitsamt appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-10-10T21:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2018-10-10T22:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "cpgjccr46oo3gb9o6gpjeb9kcgrjeb9o6cr3ab9j6hh64cpjckrjee9nc4@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3083892086626000\"",
        "id": "c8sm2cb3ckoj0b9g6pijeb9k6hh62bb16kpj8bb674s3aor375h3gpb574",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=YzhzbTJjYjNja29qMGI5ZzZwaWplYjlrNmhoNjJiYjE2a3BqOGJiNjc0czNhb3IzNzVoM2dwYjU3NCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2018-11-11T14:20:43.000Z",
        "updated": "2018-11-11T14:20:43.313Z",
        "summary": "Training last session",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-11-12T00:00:00+01:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2018-11-12T01:00:00+01:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "c8sm2cb3ckoj0b9g6pijeb9k6hh62bb16kpj8bb674s3aor375h3gpb574@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3088002919772000\"",
        "id": "6som6eb36ssm4b9p6hh3cb9k69ij0b9o6th3eb9l6ph32dr56di3epb4cc",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NnNvbTZlYjM2c3NtNGI5cDZoaDNjYjlrNjlpajBiOW82dGgzZWI5bDZwaDMyZHI1NmRpM2VwYjRjYyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2018-12-05T09:17:39.000Z",
        "updated": "2018-12-05T09:17:39.886Z",
        "summary": "Gynac appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-12-07T07:00:00+01:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2018-12-07T09:00:00+01:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "6som6eb36ssm4b9p6hh3cb9k69ij0b9o6th3eb9l6ph32dr56di3epb4cc@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3088346830212000\"",
        "id": "6gqj2pj4cpi3ab9gcop38b9k70pm6bb261j3ib9i6grm8e9l6sq62cpn6g",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmdxajJwajRjcGkzYWI5Z2NvcDM4YjlrNzBwbTZiYjI2MWozaWI5aTZncm04ZTlsNnNxNjJjcG42ZyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2018-12-07T09:03:35.000Z",
        "updated": "2018-12-07T09:03:35.106Z",
        "summary": "Next appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "displayName": "Amruta Patil",
            "self": true
        },
        "start": {
            "dateTime": "2018-12-12T08:00:00+01:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2018-12-12T09:00:00+01:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "6gqj2pj4cpi3ab9gcop38b9k70pm6bb261j3ib9i6grm8e9l6sq62cpn6g@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3145379829344000\"",
        "id": "6ks62phhc4o3cb9h71hjcb9k68o32b9p6cpj4bb2clhj4ohh6sp68db370",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmtzNjJwaGhjNG8zY2I5aDcxaGpjYjlrNjhvMzJiOXA2Y3BqNGJiMmNsaGo0b2hoNnNwNjhkYjM3MCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2019-11-02T10:18:34.000Z",
        "updated": "2019-11-02T10:18:34.672Z",
        "summary": "Inspection ",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2019-11-04T07:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2019-11-04T08:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "6ks62phhc4o3cb9h71hjcb9k68o32b9p6cpj4bb2clhj4ohh6sp68db370@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3191728433484000\"",
        "id": "74oj0e9p6co3ib9lclhjib9k6gs62bb1c5ijib9h6ssjee1kcdgj4cb36s",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NzRvajBlOXA2Y28zaWI5bGNsaGppYjlrNmdzNjJiYjFjNWlqaWI5aDZzc2plZTFrY2RnajRjYjM2cyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2020-07-27T15:36:56.000Z",
        "updated": "2020-07-27T15:36:56.742Z",
        "summary": "Visa office appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-07-22T20:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2020-07-22T21:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "74oj0e9p6co3ib9lclhjib9k6gs62bb1c5ijib9h6ssjee1kcdgj4cb36s@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3195513792978000\"",
        "id": "61hjad9p70p3gb9l6dhjeb9k71gj8bb168oj8bb560p3gp9n6hh38pb1ck",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjFoamFkOXA3MHAzZ2I5bDZkaGplYjlrNzFnajhiYjE2OG9qOGJiNTYwcDNncDluNmhoMzhwYjFjayBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2020-08-18T13:21:36.000Z",
        "updated": "2020-08-18T13:21:36.489Z",
        "summary": "Corona test Aai",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-08-09T13:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2020-08-09T14:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "61hjad9p70p3gb9l6dhjeb9k71gj8bb168oj8bb560p3gp9n6hh38pb1ck@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3199521890620000\"",
        "id": "64r32p1j70r38bb468p30b9k64sj8b9pccr34bb575h64d1m6sp62db5c8",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjRyMzJwMWo3MHIzOGJiNDY4cDMwYjlrNjRzajhiOXBjY3IzNGJiNTc1aDY0ZDFtNnNwNjJkYjVjOCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2020-09-10T18:02:25.000Z",
        "updated": "2020-09-10T18:02:25.310Z",
        "summary": "Clean down there",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-09-14T08:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2020-09-14T09:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "64r32p1j70r38bb468p30b9k64sj8b9pccr34bb575h64d1m6sp62db5c8@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3199521893322000\"",
        "id": "61gjgp1ic8oj4b9g60r66b9k6hh68b9ocgsmcb9n6kpm2cj5cco64cb66s",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjFnamdwMWljOG9qNGI5ZzYwcjY2YjlrNmhoNjhiOW9jZ3NtY2I5bjZrcG0yY2o1Y2NvNjRjYjY2cyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2020-09-10T18:02:26.000Z",
        "updated": "2020-09-10T18:02:26.661Z",
        "summary": "Doc appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-09-15T08:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "end": {
            "dateTime": "2020-09-15T09:00:00+02:00",
            "timeZone": "Europe/Amsterdam"
        },
        "iCalUID": "61gjgp1ic8oj4b9g60r66b9k6hh68b9ocgsmcb9n6kpm2cj5cco64cb66s@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehgm6c1kcdkm6srhdlnmsspk6tojitj1copmmrbd6op66s3gd1i72e3kdtqj6r1ldpm62q9odop3erj8edlme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVoZ202YzFrY2RrbTZzcmhkbG5tc3NwazZ0b2ppdGoxY29wbW1yYmQ2b3A2NnMzZ2QxaTcyZTNrZHRxajZyMWxkcG02MnE5b2RvcDNlcmo4ZWRsbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2020-11-14T13:38:45.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Flight to Amsterdam (KL 1852)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M\n",
        "location": "Düsseldorf DUS",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-12-12T06:35:00+01:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2020-12-12T07:30:00+01:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9tac04cicsqmons47q9vaf3kmm62cpphdq8tou3l5nlai8n27nhskg",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947582228000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehimupjfctnncdpl6dijiopmc5jj0c3md8rjgopkedknadhictq6aob3d5k62t9ichr6irjac5nj2ob3cpome",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVoaW11cGpmY3RubmNkcGw2ZGlqaW9wbWM1amowYzNtZDhyamdvcGtlZGtuYWRoaWN0cTZhb2IzZDVrNjJ0OWljaHI2aXJqYWM1bmoyb2IzY3BvbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2020-11-14T13:38:44.000Z",
        "updated": "2024-10-09T11:36:31.114Z",
        "summary": "Flight to Amsterdam (KL 1852)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M\n",
        "location": "Düsseldorf DUS",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-12-12T06:35:00+01:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2020-12-12T07:30:00+01:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9teofogov753e9c6ag00vj78c4siu62gteacihau2dvinjao1acfqg",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpegojgpj56dn6mdhp71h78qbl69o62cj868pjgdhg75l70oj46hi38qb3elpm8cb66dq6ct3369pj0rbg61kme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVnb2pncGo1NmRuNm1kaHA3MWg3OHFibDY5bzYyY2o4NjhwamdkaGc3NWw3MG9qNDZoaTM4cWIzZWxwbThjYjY2ZHE2Y3QzMzY5cGowcmJnNjFrbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2020-11-14T13:38:44.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Flight to Mumbai (KL 877)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M\n",
        "location": "Amsterdam AMS",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-12-12T11:55:00+01:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2020-12-12T20:10:00+01:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9t18fe3nk698btiu2pa2h238609jpbd4d4icusd1f3tftc2s0mp0ig",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehgn6qr1egs72r9m74r6ss3c69jmgq3k6pnn0q3h61mn0rrfd9gn8cb2ckr6qdj1cpgmosjicoo7ccbhelpme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVoZ242cXIxZWdzNzJyOW03NHI2c3MzYzY5am1ncTNrNnBubjBxM2g2MW1uMHJyZmQ5Z244Y2IyY2tyNnFkajFjcGdtb3NqaWNvbzdjY2JoZWxwbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2020-11-14T13:38:45.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Flight to Mumbai (KL 877)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M\n",
        "location": "Amsterdam AMS",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2020-12-12T11:55:00+01:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2020-12-12T20:10:00+01:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9taskat8qm696npl2ghht6ophq0mpoojat1be6m6afalrrf0v1qusg",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DN1Kpcx1s0oKz7dKxHJ2tVG-a6Fm2EiS6M",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3219680942822000\"",
        "id": "6gsm4c9pcph30bb3cdgjgb9k6pijebb16spm8b9l6hi3id1ncgq3edph6o",
        "status": "tentative",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmdzbTRjOXBjcGgzMGJiM2NkZ2pnYjlrNnBpamViYjE2c3BtOGI5bDZoaTNpZDFuY2dxM2VkcGg2byBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2021-01-05T09:54:31.000Z",
        "updated": "2021-01-05T09:54:31.411Z",
        "summary": "Passport certi ",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2021-01-04T00:30:00+01:00",
            "timeZone": "Asia/Kolkata"
        },
        "end": {
            "dateTime": "2021-01-04T01:00:00+01:00",
            "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "6gsm4c9pcph30bb3cdgjgb9k6pijebb16spm8b9l6hi3id1ncgq3edph6o@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3244404804006000\"",
        "id": "c4r68d9n64r6abb271gj2b9k68p62b9o75j36bb16ti3id1ic9gj8c1o6k",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=YzRyNjhkOW42NHI2YWJiMjcxZ2oyYjlrNjhwNjJiOW83NWozNmJiMTZ0aTNpZDFpYzlnajhjMW82ayBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2021-05-28T11:46:41.000Z",
        "updated": "2021-05-28T11:46:42.003Z",
        "summary": "Viraj passport",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2021-06-02T05:30:00+02:00",
            "timeZone": "Asia/Kolkata"
        },
        "end": {
            "dateTime": "2021-06-02T06:30:00+02:00",
            "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "c4r68d9n64r6abb271gj2b9k68p62b9o75j36bb16ti3id1ic9gj8c1o6k@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947582228000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehm6eq34e9h7cd34dpm68r9j74smgtjg6pl3ccr9e5gnctjhe9j6ko9ndosmisrk69pj0srmd4ojgrpg64s6e",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVobTZlcTM0ZTloN2NkMzRkcG02OHI5ajc0c21ndGpnNnBsM2NjcjllNWduY3RqaGU5ajZrbzluZG9zbWlzcms2OXBqMHNybWQ0b2pncnBnNjRzNmUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2021-08-09T18:47:29.000Z",
        "updated": "2024-10-09T11:36:31.114Z",
        "summary": "Flight to Mumbai (LH 756)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DO0eUCBOcMtcbNiCo9myfY5CExSrHjI-BM\n",
        "location": "Frankfurt FRA",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2021-09-08T13:10:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2021-09-08T21:30:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9tlghdrbv4dnldm399hvp6j63iqavvqrfja7n9ist2s0svi18o018g",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DO0eUCBOcMtcbNiCo9myfY5CExSrHjI-BM",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehhnasjb6hl38r9nckr62qb6chojacb2ehr6et3ge1gj4qj9cpo32e1i6gpn0sj46pjmsp326gq6utjgc9i6e",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVoaG5hc2piNmhsMzhyOW5ja3I2MnFiNmNob2phY2IyZWhyNmV0M2dlMWdqNHFqOWNwbzMyZTFpNmdwbjBzajQ2cGptc3AzMjZncTZ1dGpnYzlpNmUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2021-10-06T12:15:21.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Appointment at Visa Application Centre",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNGUBtTFr4ueenc6vHWJCaXtiXdA8OX_q0\n",
        "location": "Mumbai, Maharashtra, India, 400013",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2021-10-22T06:30:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2021-10-22T07:30:00+02:00",
            "timeZone": "UTC"
        },
        "endTimeUnspecified": true,
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9tcurk4j4m7e6aifdq51btvgtppa2jifp18243prd6gndb44ovpbdg",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNGUBtTFr4ueenc6vHWJCaXtiXdA8OX_q0",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpegpmir3l61h6cobiepm70qrid8q32drm6kp30djfe1jm8phid5jmerrgelh66ebkdpgj8c37ddjmstb4dtpj0",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVncG1pcjNsNjFoNmNvYmllcG03MHFyaWQ4cTMyZHJtNmtwMzBkamZlMWptOHBoaWQ1am1lcnJnZWxoNjZlYmtkcGdqOGMzN2Rkam1zdGI0ZHRwajAgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2021-11-10T03:21:54.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Appointment at Visa Application Centre",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNcpXccxmxwXcW5UKCzg_kqpKLCvPtZ5X4\n",
        "location": "Mumbai, Maharashtra, India, 400021",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2021-11-16T05:00:00+01:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2021-11-16T06:00:00+01:00",
            "timeZone": "UTC"
        },
        "endTimeUnspecified": true,
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9t3ilu0bfarvlpkrj417v5206opgdf2iggopubc9tna40gkgnudos0",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNcpXccxmxwXcW5UKCzg_kqpKLCvPtZ5X4",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947582228000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehpj8tb8ccsm8r1jc9hn8q3ddph6spb7eph30dr175om6r9n6sqmas1h6hpmop3hcko7ar3dc9jjgr1p69mme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVocGo4dGI4Y2NzbThyMWpjOWhuOHEzZGRwaDZzcGI3ZXBoMzBkcjE3NW9tNnI5bjZzcW1hczFoNmhwbW9wM2hja283YXIzZGM5ampncjFwNjltbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-04-08T17:39:21.000Z",
        "updated": "2024-10-09T11:36:31.114Z",
        "summary": "Flight to Dubai (EK 501)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DMA0Fep1gpgwAxr16gU9VVPR0zRXf_pGxc\n",
        "location": "Mumbai BOM",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-04-18T01:00:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2022-04-18T04:00:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9ts4uhc9dl3bcthmnbnegvb07a9qcm775ep14sldqe0ulmbg8l92mg",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DMA0Fep1gpgwAxr16gU9VVPR0zRXf_pGxc",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpegpmccb6clgm2sbgdcqn2dj7d9o3ed1n75om4rrgelr76djhd9h66chk6dqmctj1e9hm2pr5ctk7aohn61qme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVncG1jY2I2Y2xnbTJzYmdkY3FuMmRqN2Q5bzNlZDFuNzVvbTRycmdlbHI3NmRqaGQ5aDY2Y2hrNmRxbWN0ajFlOWhtMnByNWN0azdhb2huNjFxbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-04-08T17:39:21.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Flight to Düsseldorf (EK 55)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DMA0Fep1gpgwAxr16gU9VVPR0zRXf_pGxc\n",
        "location": "Dubai DXB",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-04-18T06:30:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2022-04-18T13:25:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9t3f1feaaqpk5q6gjp7479qbopuvs6qjbc243ufvarcageghub70ug",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DMA0Fep1gpgwAxr16gU9VVPR0zRXf_pGxc",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3309546815794000\"",
        "id": "60qj4d9g6pj3gb9jcoqm6b9k68sj8b9p65j38b9l6gsj4db66gs6ae32c4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjBxajRkOWc2cGozZ2I5amNvcW02YjlrNjhzajhiOXA2NWozOGI5bDZnc2o0ZGI2NmdzNmFlMzJjNCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2022-06-09T11:16:26.000Z",
        "updated": "2022-06-09T11:16:47.897Z",
        "summary": "Viraj doctor vaccination",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-07-07T11:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-07-07T12:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "60qj4d9g6pj3gb9jcoqm6b9k68sj8b9p65j38b9l6gsj4db66gs6ae32c4@google.com",
        "sequence": 1,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3315566658404000\"",
        "id": "68q38ohk64s66b9j6op38b9k6phm6b9p6ooj4b9i61hj8e9m64o38oj66c",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjhxMzhvaGs2NHM2NmI5ajZvcDM4YjlrNnBobTZiOXA2b29qNGI5aTYxaGo4ZTltNjRvMzhvajY2YyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2022-07-14T07:22:09.000Z",
        "updated": "2022-07-14T07:22:09.202Z",
        "summary": "Viraj doc appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-08-12T09:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-08-12T10:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "68q38ohk64s66b9j6op38b9k6phm6b9p6ooj4b9i61hj8e9m64o38oj66c@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3322853591644000\"",
        "id": "jdbhujrhlohon3bsekeli734e0",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=amRiaHVqcmhsb2hvbjNic2VrZWxpNzM0ZTAgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-08-22T07:33:57.000Z",
        "updated": "2022-08-25T11:26:35.822Z",
        "summary": "Canceled: Amruta Patil and Ekaterina Anderson",
        "description": "Event Name: Let's Chat - StartSteps\n\n15 minute conversation with a member from the StartSteps Team💜\n\nWhat is the best number to call you on?: +49 1521 0157022\n\nCancellation Reason: Rescheduled\n",
        "creator": {
            "email": "ekaterina@startsteps.org"
        },
        "organizer": {
            "email": "ekaterina@startsteps.org"
        },
        "start": {
            "dateTime": "2022-08-25T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-08-25T15:15:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "transparency": "transparent",
        "iCalUID": "jdbhujrhlohon3bsekeli734e0@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "ekaterina@startsteps.org",
                "organizer": true,
                "responseStatus": "declined"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "declined"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3322853594032000\"",
        "id": "gnqeakf228hrc47fi0g1h0do8g",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Z25xZWFrZjIyOGhyYzQ3ZmkwZzFoMGRvOGcgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-08-25T11:26:35.000Z",
        "updated": "2022-08-25T11:26:37.016Z",
        "summary": "Amruta Patil and Steffen Runge",
        "description": "Event Name: Let's Chat - StartSteps\n\n15 minute conversation with a member from the StartSteps Team💜\n\nWhat is the best number to call you on?: +49 1521 0157022\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/a5025a01-5c32-4fea-8e33-837352d8f921\nReschedule: https://calendly.com/reschedulings/a5025a01-5c32-4fea-8e33-837352d8f921\n",
        "creator": {
            "email": "steffen@startsteps.org"
        },
        "organizer": {
            "email": "steffen@startsteps.org"
        },
        "start": {
            "dateTime": "2022-08-26T17:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-08-26T17:45:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "gnqeakf228hrc47fi0g1h0do8g@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "steffen@startsteps.org",
                "organizer": true,
                "responseStatus": "accepted"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3324237996806000\"",
        "id": "8msjb76ubpghcqhb6u6vm81elk",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=OG1zamI3NnVicGdoY3FoYjZ1NnZtODFlbGsgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-09-02T11:43:16.000Z",
        "updated": "2022-09-02T11:43:18.403Z",
        "summary": "Your DCI Online Consultation with Abhiruchi Sharma",
        "description": "\u003cp\u003eDear Amruta , \u003cbr\u003e\u003cbr\u003eThis is an invitation to your personal consultation. During the consultation, we will look closely at your personal situation and together we will find out how we can help you with our courses to find a secure and permanent job. \u003cbr\u003e\u003cstrong\u003eThe consultation will ideally take place via Google Meet/ Hangouts. Click on the link above to join the video conference\u003c/strong\u003e. If you need help with this, here is a short video tutorial for you \"How to join a Google Meet\": \u003ca href=\"https://www.youtube.com/watch?v=X4jAvaX73-U\" rel=\"nofollow\"\u003e\u003cu\u003ehttps://www.youtube.com/watch?v=X4jAvaX73-U\u003c/u\u003e\u003cbr\u003e\u003cbr\u003e\u003c/a\u003eIf you need personal help from me or have further questions, feel free to contact me directly. \u003cbr\u003e\u003cbr\u003eTelefon: 021141872571\u003c/p\u003e\u003cp\u003eWhatsApp: \u003ca href=\"https://wa.me/491579-%202520350\" rel=\"nofollow\"\u003e01579- 2520350\u003c/a\u003e\u003cbr\u003eE-Mail: abhiruchi.sharma@digitalcareerinstitute.org\u003cstrong\u003e\u003cbr\u003e\u003cbr\u003e\u003c/strong\u003eI look forward to our conversation. \u003cbr\u003e\u003cbr\u003eKind regards\u003c/p\u003e\u003cp\u003eAbhiruchi\u003c/p\u003e",
        "location": "Online",
        "creator": {
            "email": "abhiruchi.sharma@digitalcareerinstitute.org"
        },
        "organizer": {
            "email": "abhiruchi.sharma@digitalcareerinstitute.org"
        },
        "start": {
            "dateTime": "2022-09-06T11:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-09-06T11:20:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "8msjb76ubpghcqhb6u6vm81elk@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "abhiruchi.sharma@digitalcareerinstitute.org",
                "organizer": true,
                "responseStatus": "accepted"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "hangoutLink": "https://meet.google.com/wkh-bvwp-iqi",
        "conferenceData": {
            "createRequest": {
                "requestId": "f1b18af1-d835-4326-a887-053c12d333e5",
                "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                },
                "status": {
                    "statusCode": "success"
                }
            },
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/wkh-bvwp-iqi",
                    "label": "meet.google.com/wkh-bvwp-iqi"
                },
                {
                    "entryPointType": "more",
                    "uri": "https://tel.meet/wkh-bvwp-iqi?pin=9797464073094",
                    "pin": "9797464073094"
                },
                {
                    "regionCode": "DE",
                    "entryPointType": "phone",
                    "uri": "tel:+49-40-8081616973",
                    "label": "+49 40 8081616973",
                    "pin": "640645430"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "wkh-bvwp-iqi"
        },
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3324779865342000\"",
        "id": "lbtssn1g5h3mr7cr93rgfs2nho",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=bGJ0c3NuMWc1aDNtcjdjcjkzcmdmczJuaG8gYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-08-24T11:12:22.000Z",
        "updated": "2022-09-05T14:58:52.671Z",
        "summary": "Abgebrochen: Beratungsgespräch Tech in the City Amruta Patil",
        "description": "\u003cp\u003eDu weißt noch nicht genau, wohin es gehen soll und möchtest dir erstmal einen Überblick über die IT-Branche verschaffen? Dann komm’ zunächst zu unserem kostenlosen Info-Event donnerstags von 17:00-18:00:  \u003ca href=\"https://techinthecity.de/info-event/\" rel=\"nofollow\"\u003ehttps://techinthecity.de/info-event/\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003eIn unserem Guidebook findest du außerdem viele Infos zu gefragten Jobprofilen:\u003ca href=\"https://techinthecity.de/wp-content/uploads/2020/10/Guidebook-Deutsch-NEW.pdf\" rel=\"nofollow\"\u003e \u003c/a\u003e\u003ca href=\"https://techinthecity.de/wp-content/uploads/2020/10/Guidebook-Deutsch-NEW.pdf\" rel=\"nofollow\"\u003ehttps://techinthecity.de/wp-content/uploads/2020/10/Guidebook-Deutsch-NEW.pdf\u003c/a\u003e\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003eDie Beratung kann per GoogleMeet oder als Telefonat stattfinden. Wenn du ausgewählt hast, dass das Beratungsgespräch per Telefon stattfindet, kannst du den Link zu GoogleMeet ignorieren, dieser wird automatisch erstellt.\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003eWenn du schon ungefähr weißt, in welche Richtung es für dich gehen soll, buche dir gerne ein Beratungsgespräch.\u003c/p\u003e\u003cp\u003eIch freue mich drauf!\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\nJoin link for Google Meet : https://meet.google.com/kua-vqxc-msm\u003cbr\u003e\u003cb\u003eNeed to make changes?\u003c/b\u003e\u003cbr\u003e\u003cul\u003e\u003cli\u003eReschedule: https://app-eu1.hubspot.com/meetings/fabienne-milke?rescheduleId=361ec0409371e6a960cae9c9c4827c3a&ms=1\u003c/li\u003e\u003cli\u003eCancel: https://app-eu1.hubspot.com/meetings/fabienne-milke?cancelId=361ec0409371e6a960cae9c9c4827c3a&ms=1\u003c/li\u003e\u003c/ul\u003e\n\nCity: Köln\nWie soll unser Gespräch stattfinden?: als Telefonat\nPhone number: 015210157022\nBitte erzähl mir, warum Du einen Beratungstermin suchst. Gibt es weitere Dinge, die ich wissen sollte um dich bestmöglich beraten zu können?: Looking for perfect reentry in the It sector in Cologne. \nWie hast du von uns erfahren?: Tech in the City e.V. direkt",
        "location": "https://meet.google.com/kua-vqxc-msm",
        "creator": {
            "email": "fabienne.milke@techinthecity.de"
        },
        "organizer": {
            "email": "fabienne.milke@techinthecity.de"
        },
        "start": {
            "dateTime": "2022-09-06T13:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-09-06T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "transparency": "transparent",
        "iCalUID": "lbtssn1g5h3mr7cr93rgfs2nho@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "fabienne.milke@techinthecity.de",
                "organizer": true,
                "responseStatus": "declined"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "declined"
            },
            {
                "email": "tanja.drozdzynski@techinthecity.de",
                "responseStatus": "declined"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947582228000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehp3icbf6goj6t1jddn72d3j71m76c1lc4rj2srb6opn8q3ccgsmsc1nddgmeshlekqjecpj6gr6oc9pedqme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVocDNpY2JmNmdvajZ0MWpkZG43MmQzajcxbTc2YzFsYzRyajJzcmI2b3BuOHEzY2Nnc21zYzFuZGRnbWVzaGxla3FqZWNwajZncjZvYzlwZWRxbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-08-02T21:30:34.000Z",
        "updated": "2024-10-09T11:36:31.114Z",
        "summary": "Integrate SAP and ServiceNow to enhance SAP support and cut related costs",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar",
        "location": "https://www.linkedin.com/events/integratesapandservicenowtoenha6945717638132088832",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-09-13T10:00:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2022-09-13T11:00:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9tr91o413t3knq4s8ls05a71sk63thld9n07kagr5u573346l19sug",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3325456799668000\"",
        "id": "1c1r9if1evg5js61cuhv3m1fkc",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MWMxcjlpZjFldmc1anM2MWN1aHYzbTFma2MgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-09-09T11:34:11.000Z",
        "updated": "2022-09-09T12:59:59.834Z",
        "summary": "Interview for Integrify Full Stack Program - FS6 of Amruta Patil with Ha Nguyen",
        "description": "Dear Amruta Patil,\n\n\nThank you for booking this interview for our Full Stack Program.\n\n\nYour Interview for Integrify Full Stack Program - FS6 has been scheduled with me (Ha Nguyen). The interview will take place via Google Meet, and you can find the meeting link in the event recap below.\n\n\nIf you cannot join the interview at the agreed upon time, please reschedule or cancel the meeting before our scheduled meeting time through the links at the end of this invitation.\n\n\nEvent recap:\n\nLocation: This is a Google Meet web conference.\nYou can join this meeting from your computer, tablet, or smartphone.\nhttps://calendly.com/events/bc06e7df-e1b6-49f8-a399-30ea86a92d8e/google_meet\n\n\n-------------\n\nInterview guidelines:\n\n* Check that your computer browser is up-to-date to use Google Meet. Check your device for a good internet connection, battery, working microphone and camera before joining.\n* Be nice to our interviewers. I don’t tolerate inappropriate behavior such as offensive language, discrimination or harassment. In such cases, the interviewer has the right to end the session.\n* If you have any questions that you cannot share during the interview, please reach out to me afterwards.\n* You will receive your interview result via email; please be patient. I will get back to you within five working days, seven at the latest.\n\n\nRegardless of the result, we are rooting for you and your success. You got this!\n\n\nI look forward to speaking with you!\n\n\nBest,\n\nHa Nguyen\n\nTalent Recruiter at Integrify Academy\n\nCancellation Policy: If you’d like to cancel our meeting, please cancel no later than 8 hours before the interview. Thank you very much!\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/1ee8b8db-fb38-4352-b4b8-0736216ceceb\nReschedule: https://calendly.com/reschedulings/1ee8b8db-fb38-4352-b4b8-0736216ceceb\n\nPowered by Calendly.com\n",
        "location": "Google Meet (instructions in description)",
        "creator": {
            "email": "ha.nguyen@integrify.io"
        },
        "organizer": {
            "email": "ha.nguyen@integrify.io"
        },
        "start": {
            "dateTime": "2022-09-16T09:30:00+02:00",
            "timeZone": "Europe/Helsinki"
        },
        "end": {
            "dateTime": "2022-09-16T10:00:00+02:00",
            "timeZone": "Europe/Helsinki"
        },
        "iCalUID": "1c1r9if1evg5js61cuhv3m1fkc@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "ha.nguyen@integrify.io",
                "organizer": true,
                "responseStatus": "accepted"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "c_u4175tum6l2pg0sgao0mabi3a4@group.calendar.google.com",
                "displayName": "Framery #4",
                "responseStatus": "accepted"
            }
        ],
        "hangoutLink": "https://meet.google.com/byv-wpnv-qza",
        "conferenceData": {
            "createRequest": {
                "requestId": "51f800ca-379f-436d-90d1-8a21d89983aa",
                "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                },
                "status": {
                    "statusCode": "success"
                }
            },
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/byv-wpnv-qza",
                    "label": "meet.google.com/byv-wpnv-qza"
                },
                {
                    "entryPointType": "more",
                    "uri": "https://tel.meet/byv-wpnv-qza?pin=8301524378267",
                    "pin": "8301524378267"
                },
                {
                    "regionCode": "FI",
                    "entryPointType": "phone",
                    "uri": "tel:+358-9-85691487",
                    "label": "+358 9 85691487",
                    "pin": "990653288"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "byv-wpnv-qza"
        },
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3327181482816000\"",
        "id": "cgo62o9m6grj2b9g6oo36b9k6ph32bb1cko36b9p6cp30chkccpm4opkc4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2dvNjJvOW02Z3JqMmI5ZzZvbzM2YjlrNnBoMzJiYjFja28zNmI5cDZjcDMwY2hrY2NwbTRvcGtjNCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2022-09-19T12:32:21.000Z",
        "updated": "2022-09-19T12:32:21.408Z",
        "summary": "Finding A Job In Germany: The Ultimate Guide for Foreigners - 21.09.2022",
        "description": "For details, go here:\nhttps://www.eventbrite.de/e/finding-a-job-in-germany-the-ultimate-guide-for-foreigners-21092022-tickets-415247816397\n\nTo access the online event page, go here:\nhttps://www.eventbrite.de/x/finding-a-job-in-germany-the-ultimate-guide-for-foreigners-21092022-tickets-415247816397",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-09-21T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-09-21T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "cgo62o9m6grj2b9g6oo36b9k6ph32bb1cko36b9p6cp30chkccpm4opkc4@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3328207975718000\"",
        "id": "5sjcsasougk7de093so3omqep0",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NXNqY3Nhc291Z2s3ZGUwOTNzbzNvbXFlcDAgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2022-09-24T19:35:31.000Z",
        "updated": "2022-09-25T11:06:27.859Z",
        "summary": "Amruta Patil and LYLA",
        "description": "Event Name: LYLA Design\n\nWe are looking forward to meeting you!\n\nLocation: This is a Google Meet web conference.\nYou can join this meeting from your computer, tablet, or smartphone.\nhttps://calendly.com/events/15351edd-bafd-44ec-9324-056366a9a8b5/google_meet\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/20c353bc-fdb8-4bbd-9fb5-e9153a5d0d02\nReschedule: https://calendly.com/reschedulings/20c353bc-fdb8-4bbd-9fb5-e9153a5d0d02\n\nPowered by Calendly.com\n",
        "location": "Google Meet (instructions in description)",
        "creator": {
            "email": "hi@lamplab.art"
        },
        "organizer": {
            "email": "hi@lamplab.art"
        },
        "start": {
            "dateTime": "2022-09-25T13:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-09-25T13:20:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "5sjcsasougk7de093so3omqep0@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "hi@lamplab.art",
                "organizer": true,
                "responseStatus": "accepted"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "hangoutLink": "https://meet.google.com/jbf-imah-kwa",
        "conferenceData": {
            "createRequest": {
                "requestId": "35ec55e2-77c6-4bdf-96c6-81963736310e",
                "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                },
                "status": {
                    "statusCode": "success"
                }
            },
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/jbf-imah-kwa",
                    "label": "meet.google.com/jbf-imah-kwa"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "jbf-imah-kwa"
        },
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3333709640560000\"",
        "id": "6pgm2ob6coq38bb464p6cb9k70oj6bb26gsjeb9lckr3edj1cgrjce9nc4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NnBnbTJvYjZjb3EzOGJiNDY0cDZjYjlrNzBvajZiYjI2Z3NqZWI5bGNrcjNlZGoxY2dyamNlOW5jNCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2022-10-27T07:13:40.000Z",
        "updated": "2022-10-27T07:13:40.280Z",
        "summary": "Viraj doc appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2022-11-03T08:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2022-11-03T09:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "6pgm2ob6coq38bb464p6cb9k70oj6bb26gsjeb9lckr3edj1cgrjce9nc4@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3345456053990000\"",
        "id": "_60q30c1g60o30e1i60o4ac1g60rj8gpl88rj2c1h84s34h9g60s30c1g60o30c1g8p0k8c2474pkccq565348e9g64o30c1g60o30c1g60o30c1g60o32c1g60o30c1g60sk8c1k7524cd1n6p230cpk64sjici370o36c9o88q30hi66t20",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzYwcTMwYzFnNjBvMzBlMWk2MG80YWMxZzYwcmo4Z3BsODhyajJjMWg4NHMzNGg5ZzYwczMwYzFnNjBvMzBjMWc4cDBrOGMyNDc0cGtjY3E1NjUzNDhlOWc2NG8zMGMxZzYwbzMwYzFnNjBvMzBjMWc2MG8zMmMxZzYwbzMwYzFnNjBzazhjMWs3NTI0Y2QxbjZwMjMwY3BrNjRzamljaTM3MG8zNmM5bzg4cTMwaGk2NnQyMCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-01-03T06:40:20.000Z",
        "updated": "2023-01-03T06:40:26.995Z",
        "summary": "Amruta",
        "description": "\n\n\n________________________________________________________________________________\nMicrosoft Teams meeting\nJoin on your computer, mobile app or room device\nClick here to join the meeting\u003chttps://teams.microsoft.com/l/meetup-join/19%3ameeting_OGU5MDgxYjYtOGYwNy00YTQ0LWFjODAtNGZlYWMyYWU5Mjg4%40thread.v2/0?context=%7b%22Tid%22%3a%2204c72f56-1848-46a2-8167-8e5d36510cbc%22%2c%22Oid%22%3a%223fd2108a-000f-4ffe-95ab-545842b4f4c7%22%7d\u003e\nMeeting ID: 478 501 587 849\nPasscode: VVYcGY\nDownload Teams\u003chttps://www.microsoft.com/en-us/microsoft-teams/download-app\u003e | Join on the web\u003chttps://www.microsoft.com/microsoft-teams/join-a-meeting\u003e\nJoin with a video conferencing device\nadanigroup@m.webex.com\nVideo Conference ID: 138 832 198 8\nAlternate VTC instructions\u003chttps://www.webex.com/msteams?confid=1388321988&tenantkey=adanigroup&domain=m.webex.com\u003e\nLearn More\u003chttps://aka.ms/JoinTeamsMeeting\u003e | Meeting options\u003chttps://teams.microsoft.com/meetingOptions/?organizerId=3fd2108a-000f-4ffe-95ab-545842b4f4c7&tenantId=04c72f56-1848-46a2-8167-8e5d36510cbc&threadId=19_meeting_OGU5MDgxYjYtOGYwNy00YTQ0LWFjODAtNGZlYWMyYWU5Mjg4@thread.v2&messageId=0&language=en-US\u003e\n________________________________________________________________________________\n\nDISCLAIMER: The information contained in this electronic message and any other attachment to this message are intended solely for the addressee and may contain information that is confidential, privileged and exempt from disclosure under applicable law. If you are not the intended recipient, you are hereby formally notified that any use, copying or distribution of this e-mail, in whole or in part, is strictly prohibited. Please immediately notify the sender by return e-mail and delete all copies of this e-mail and any attachments from your system. Any views or opinions presented in this email are solely those of the author and do not necessarily represent those of the company.\n\nWARNING: Computer viruses can be transmitted via email. The recipient should check this email and any attachments for the presence of viruses. Adani Group accepts no liability for any damage caused by any virus transmitted by this email.\n",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amit.patil@adani.com",
            "displayName": "Amit Patil"
        },
        "start": {
            "dateTime": "2023-01-03T07:30:00+01:00",
            "timeZone": "Asia/Colombo"
        },
        "end": {
            "dateTime": "2023-01-03T08:00:00+01:00",
            "timeZone": "Asia/Colombo"
        },
        "iCalUID": "040000008200E00074C5B7101A82E00800000000FAD0D93F3E1FD90100000000000000001000000009D049DF476D0341992C80318B40FF7D",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "needsAction"
            }
        ],
        "guestsCanInviteOthers": false,
        "privateCopy": true,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3349585496384000\"",
        "id": "61gjgp3568q6ab9o6gr3ab9k65im2b9o69gjeb9i6sp64p1h74s3eopo6s",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjFnamdwMzU2OHE2YWI5bzZncjNhYjlrNjVpbTJiOW82OWdqZWI5aTZzcDY0cDFoNzRzM2VvcG82cyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-01-27T04:12:28.000Z",
        "updated": "2023-01-27T04:12:28.192Z",
        "summary": "Agentur appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-02-06T09:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-02-06T14:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "61gjgp3568q6ab9o6gr3ab9k65im2b9o69gjeb9i6sp64p1h74s3eopo6s@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3357640699520000\"",
        "id": "ccojcphj6kpm8bb16tgm4b9k69h64bb1c8s3gbb5cdgm6o9jcksj6or4cc",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2NvamNwaGo2a3BtOGJiMTZ0Z200YjlrNjloNjRiYjFjOHMzZ2JiNWNkZ202bzlqY2tzajZvcjRjYyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-03-14T18:59:09.000Z",
        "updated": "2023-03-14T18:59:09.760Z",
        "summary": "Doc appointment for viraj",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-04-18T09:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-04-18T10:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "ccojcphj6kpm8bb16tgm4b9k69h64bb1c8s3gbb5cdgm6o9jcksj6or4cc@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3365955280804000\"",
        "id": "ccqm8cr5c5hjeb9j68rm2b9k6kp3ibb16oojcbb4coo36c9pc4o30pj570",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2NxbThjcjVjNWhqZWI5ajY4cm0yYjlrNmtwM2liYjE2b29qY2JiNGNvbzM2YzlwYzRvMzBwajU3MCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-05-01T21:47:20.000Z",
        "updated": "2023-05-01T21:47:20.402Z",
        "summary": "Doc appointment for viraj",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-05-02T08:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-05-02T09:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "ccqm8cr5c5hjeb9j68rm2b9k6kp3ibb16oojcbb4coo36c9pc4o30pj570@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3372168869006000\"",
        "id": "ckp6apb56osjab9ncgo3eb9k6ph34bb26ko64b9n6or3ae1gcphj8d1o6g",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2twNmFwYjU2b3NqYWI5bmNnbzNlYjlrNnBoMzRiYjI2a282NGI5bjZvcjNhZTFnY3BoajhkMW82ZyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-06-06T20:47:14.000Z",
        "updated": "2023-06-06T20:47:14.503Z",
        "summary": "Strawberry picking",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-06-10T08:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-06-10T09:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "ckp6apb56osjab9ncgo3eb9k6ph34bb26ko64b9n6or3ae1gcphj8d1o6g@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3372930437390000\"",
        "id": "64p30d9icpgjibb164r6ab9k6cpj0b9pcgo3eb9pc5im4c1j6dim2d33co",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjRwMzBkOWljcGdqaWJiMTY0cjZhYjlrNmNwajBiOXBjZ28zZWI5cGM1aW00YzFqNmRpbTJkMzNjbyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-06-11T06:33:38.000Z",
        "updated": "2023-06-11T06:33:38.695Z",
        "summary": "Meldebesceinigung receive urgent",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-06-12T07:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-06-12T08:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "64p30d9icpgjibb164r6ab9k6cpj0b9pcgo3eb9pc5im4c1j6dim2d33co@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3373460775476000\"",
        "id": "6kpjgpj1c8om6b9l6so64b9kcdi6cbb16gr30bb46tj34or660ojadj4co",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmtwamdwajFjOG9tNmI5bDZzbzY0YjlrY2RpNmNiYjE2Z3IzMGJiNDZ0ajM0b3I2NjBvamFkajRjbyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-06-14T08:13:07.000Z",
        "updated": "2023-06-14T08:13:07.738Z",
        "summary": "heise Jobs – IT Tag in Köln",
        "location": "KOMED im MediaPark | Im MediaPark 6, 50670 Köln",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-06-21T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-06-21T19:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "6kpjgpj1c8om6b9l6so64b9kcdi6cbb16gr30bb46tj34or660ojadj4co@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3375098712236000\"",
        "id": "c5hm8dpnc8qm2b9pcphjab9k6orj2bb16so38b9n64rjcpb3cdj68opo60",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=YzVobThkcG5jOHFtMmI5cGNwaGphYjlrNm9yajJiYjE2c28zOGI5bjY0cmpjcGIzY2RqNjhvcG82MCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-06-23T19:42:36.000Z",
        "updated": "2023-06-23T19:42:36.118Z",
        "summary": "Viraj day care visit",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-06-28T11:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-06-28T12:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "c5hm8dpnc8qm2b9pcphjab9k6orj2bb16so38b9n64rjcpb3cdj68opo60@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3375937332318000\"",
        "id": "c8qmcp1l6kr30bb664q36b9k60q3ebb2coq38b9o6dhj4pb3cph3cp9kco",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=YzhxbWNwMWw2a3IzMGJiNjY0cTM2YjlrNjBxM2ViYjJjb3EzOGI5bzZkaGo0cGIzY3BoM2NwOWtjbyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2023-06-28T16:11:05.000Z",
        "updated": "2023-06-28T16:11:06.159Z",
        "summary": "Vertrags termin viraj school",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2023-07-03T10:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2023-07-03T11:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "c8qmcp1l6kr30bb664q36b9k60q3ebb2coq38b9o6dhj4pb3cph3cp9kco@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947581656000\"",
        "id": "_6tlnaqrle5p6cpb4dhmj4phpehim2tbf6ssnae32c8s6irridlimiq1jd1jjcsbl6sq68tbd6dgjap3ec5pj4r3edcs64thhcdi6qcrkepgme",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=XzZ0bG5hcXJsZTVwNmNwYjRkaG1qNHBocGVoaW0ydGJmNnNzbmFlMzJjOHM2aXJyaWRsaW1pcTFqZDFqamNzYmw2c3E2OHRiZDZkZ2phcDNlYzVwajRyM2VkY3M2NHRoaGNkaTZxY3JrZXBnbWUgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2023-12-13T17:17:34.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Stay at Fairways Club",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNPjhBoMfMtLpkkSlgBusM7IxxdPQ3FCKQ\n",
        "location": "Avenida Maria de Los Angeles, San Miguel de Abona, 38639, Spanien",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2023-12-15"
        },
        "end": {
            "date": "2023-12-19"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "7kukuqrfedlm2f9teauo79u8bb8iormeih3hg6qu74dum3a5dnas2lnk8bv1cdm3tvag",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": false
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNPjhBoMfMtLpkkSlgBusM7IxxdPQ3FCKQ",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3409582191690000\"",
        "id": "6vlnko3s3kjal3b15fhe0090vc",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NnZsbmtvM3Mza2phbDNiMTVmaGUwMDkwdmMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-01-05T14:24:22.000Z",
        "updated": "2024-01-09T09:04:55.845Z",
        "summary": "Canceled: Amruta Patil and Sümeyra Akbas",
        "description": "Event Name: Salesforce\n\nHello,\n\nEmbark on a new journey to Learn for a new life 💙\n\nYour interest in our Salesforce course (https://digitalcareerinstitute.org/courses/salesforce-consultant/) has brought you an exclusive invitation.\n\nBefore our meeting, we kindly ask you to take this Pre-Assessment: https://dci.testportal.net/test.html?t=63dkJCETUnBZ\n\n\n💻 Join us using a computer \n\n📍 Where: Online on Google Meet\n\n⏰ Duration: 30 minutes approx.\n\n\nTo ensure a smooth process, follow these steps:\n\n* 1. Check your email for the Google Meet invitation.\n* 2. Click “Join with Google Meet.”\n* 3. Sign in if necessary.\n* 4. Adjust camera and mic settings.\n* 5. Click “Request to join” or “Ask to join” if prompted.\n* 6. Wait for host approval.\n* 7. Once approved, click “Join now.”\n\nExcited to see you excel on this journey! Take care and see you soon!\n\n\n\nLocation: This is a Google Meet web conference.\nYou can join this meeting from your computer, tablet, or smartphone.\nhttps://calendly.com/events/9212ff92-32a5-44cc-a8f7-91b7a88063c8/google_meet\n\nCancellation Reason: \n\nPowered by Calendly.com\n",
        "location": "Google Meet (instructions in description)",
        "creator": {
            "email": "suemeyra.akbas@digitalcareerinstitute.org"
        },
        "organizer": {
            "email": "suemeyra.akbas@digitalcareerinstitute.org"
        },
        "start": {
            "dateTime": "2024-01-09T12:45:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-01-09T13:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "transparency": "transparent",
        "iCalUID": "6vlnko3s3kjal3b15fhe0090vc@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "declined"
            },
            {
                "email": "abhiruchi.sharma@digitalcareerinstitute.org",
                "responseStatus": "declined"
            },
            {
                "email": "suemeyra.akbas@digitalcareerinstitute.org",
                "organizer": true,
                "responseStatus": "declined"
            }
        ],
        "hangoutLink": "https://meet.google.com/obp-wqiw-jyq",
        "conferenceData": {
            "createRequest": {
                "requestId": "afebaa63-5947-4c77-9167-3da240a8ce83",
                "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                },
                "status": {
                    "statusCode": "success"
                }
            },
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/obp-wqiw-jyq",
                    "label": "meet.google.com/obp-wqiw-jyq"
                },
                {
                    "entryPointType": "more",
                    "uri": "https://tel.meet/obp-wqiw-jyq?pin=8092794187306",
                    "pin": "8092794187306"
                },
                {
                    "regionCode": "DE",
                    "entryPointType": "phone",
                    "uri": "tel:+49-40-8081619906",
                    "label": "+49 40 8081619906",
                    "pin": "937788822"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "obp-wqiw-jyq"
        },
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3411359862026000\"",
        "id": "15qv8nsuggelhubbe6pm0v3o2f",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MTVxdjhuc3VnZ2VsaHViYmU2cG0wdjNvMmYgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-01-12T15:02:35.000Z",
        "updated": "2024-01-19T15:58:51.013Z",
        "summary": "Amruta Patil follow up/Google Meet prüfen ",
        "creator": {
            "email": "maria.wahlers@neuefische.de"
        },
        "organizer": {
            "email": "maria.wahlers@neuefische.de"
        },
        "start": {
            "dateTime": "2024-01-15T11:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-01-15T11:45:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "15qv8nsuggelhubbe6pm0v3o2f@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "maria.wahlers@neuefische.de",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "hangoutLink": "https://meet.google.com/iyw-xivh-gzv",
        "conferenceData": {
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/iyw-xivh-gzv",
                    "label": "meet.google.com/iyw-xivh-gzv"
                },
                {
                    "entryPointType": "more",
                    "uri": "https://tel.meet/iyw-xivh-gzv?pin=5511741448027",
                    "pin": "5511741448027"
                },
                {
                    "regionCode": "DE",
                    "entryPointType": "phone",
                    "uri": "tel:+49-40-8081615664",
                    "label": "+49 40 8081615664",
                    "pin": "541175560"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "iyw-xivh-gzv"
        },
        "guestsCanModify": true,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20240303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAyNDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2024-03-03"
        },
        "end": {
            "date": "2024-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2024-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3423056960744000\"",
        "id": "ccoj6e9m68q32b9m68p62b9kchgm6b9p69gj6b9p70q3aoj375gj2pj364",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2NvajZlOW02OHEzMmI5bTY4cDYyYjlrY2hnbTZiOXA2OWdqNmI5cDcwcTNhb2ozNzVnajJwajM2NCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-03-27T08:34:40.000Z",
        "updated": "2024-03-27T08:34:40.372Z",
        "summary": "Apartment viewing",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-04-06T09:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-04-06T10:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "ccoj6e9m68q32b9m68p62b9kchgm6b9p69gj6b9p70q3aoj375gj2pj364@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3427745028110000\"",
        "id": "q4mrngj1md7thb9p9b0s5mbnv8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=cTRtcm5najFtZDd0aGI5cDliMHM1bWJudjggYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-04-11T14:31:25.000Z",
        "updated": "2024-04-23T11:41:54.055Z",
        "summary": "1:1 Course Counselling / Amruta - Sümeyye",
        "description": "\u003cp\u003eDear Amruta,\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003eThanks for booking a session with me! In this meeting, I would like to walk you through the process of applying for a Bildungsgutschein, show you how we support you at Match Talent, and I would like to get to know you further.\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003eLooking forward to meeting you!\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\u003cp\u003eBest,\u003c/p\u003e\u003cp\u003eSümeyye\u003c/p\u003e\u003cp\u003e\u003c/p\u003e\nSümeyye Oktay is inviting you to a scheduled Zoom meeting.\n\nTopic: 1:1 Course Counselling / Amruta - Sümeyye\nTime: Apr 19, 2024 12:30 PM Amsterdam, Berlin, Rome, Stockholm, Vienna\n\nJoin Zoom Meeting\nhttps://lingoda.zoom.us/j/94401345978\n\nMeeting ID: 944 0134 5978\n\n---\n\nOne tap mobile\n+13462487799,,94401345978# US (Houston)\n+13602095623,,94401345978# US\n\n---\n\nDial by your location\n• +1 346 248 7799 US (Houston)\n• +1 360 209 5623 US\n• +1 386 347 5053 US\n• +1 507 473 4847 US\n• +1 564 217 2000 US\n• +1 646 931 3860 US\n• +1 669 444 9171 US\n• +1 669 900 6833 US (San Jose)\n• +1 689 278 1000 US\n• +1 719 359 4580 US\n• +1 929 436 2866 US (New York)\n• +1 253 205 0468 US\n• +1 253 215 8782 US (Tacoma)\n• +1 301 715 8592 US (Washington DC)\n• +1 305 224 1968 US\n• +1 309 205 3325 US\n• +1 312 626 6799 US (Chicago)\n• +49 69 3807 9883 Germany\n• +49 69 3807 9884 Germany\n• +49 69 5050 0951 Germany\n• +49 69 5050 0952 Germany\n• +49 695 050 2596 Germany\n• +49 69 7104 9922 Germany\n\nMeeting ID: 944 0134 5978\n\nFind your local number: https://lingoda.zoom.us/u/asEjBw8LN\n\n\u003cbr\u003e\u003cb\u003eNeed to make changes?\u003c/b\u003e\u003cbr\u003e\u003cul\u003e\u003cli\u003eReschedule:&nbsp;\u003ca href=\"https://app-eu1.hubspot.com/meetings/suemeyye/meeting-with-sumeyye?rescheduleId=b21f565501794b906a547d2ce415b025&ms=1\"\u003ehttps://app-eu1.hubspot.com/meetings/suemeyye/meeting-with-sumeyye?rescheduleId=b21f565501794b906a547d2ce415b025&ms=1\u003c/a\u003e\u003c/li\u003e\u003cli\u003eCancel:&nbsp;\u003ca href=\"https://app-eu1.hubspot.com/meetings/suemeyye/meeting-with-sumeyye?cancelId=b21f565501794b906a547d2ce415b025&ms=1\"\u003ehttps://app-eu1.hubspot.com/meetings/suemeyye/meeting-with-sumeyye?cancelId=b21f565501794b906a547d2ce415b025&ms=1\u003c/a\u003e\u003c/li\u003e\u003c/ul\u003e",
        "location": "https://lingoda.zoom.us/j/94401345978",
        "creator": {
            "email": "suemeyye.oktay@lingoda.com"
        },
        "organizer": {
            "email": "suemeyye.oktay@lingoda.com"
        },
        "start": {
            "dateTime": "2024-04-23T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-04-23T14:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "q4mrngj1md7thb9p9b0s5mbnv8@google.com",
        "sequence": 2,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "suemeyye.oktay@lingoda.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3427586624918000\"",
        "id": "65i6adhncgsjebb370q6ab9k6csjab9pckomcb9g69ij4d1p6tj30c1g6s",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjVpNmFkaG5jZ3NqZWJiMzcwcTZhYjlrNmNzamFiOXBja29tY2I5ZzY5aWo0ZDFwNnRqMzBjMWc2cyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-04-22T13:41:52.000Z",
        "updated": "2024-04-22T13:41:52.459Z",
        "summary": "Viraj foc appointment",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-04-26T09:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-04-26T10:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "65i6adhncgsjebb370q6ab9k6csjab9pckomcb9g69ij4d1p6tj30c1g6s@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3428668206558000\"",
        "id": "s0prhiju7ahfrp572m797ajvi4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=czBwcmhpanU3YWhmcnA1NzJtNzk3YWp2aTQgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-04-25T09:08:42.000Z",
        "updated": "2024-04-28T19:55:03.279Z",
        "summary": "Confirmed! Our call has been added to your calendar",
        "description": "Hi Amruta,\n\n\nYour meeting has been scheduled! The meeting will be conducted via phone. Here are all the details of the call:\n\n\nPlease select the program that you’re interested in: : Full-Stack Web Development Program\n\nPhone number (select your country flag): +49 1521 2382636\n\nOur call might be recorded for quality assurance and training purposes. Are you OK with that?: Yes\n\nHow did you hear about CareerFoundry?: Match talent\n\nDo we have your consent to communicate with you via text message (SMS)? You can opt-out at any time by replying with the word \"STOP\": Yes\n\n\nYou will receive more information about our meeting and what we'll discuss shortly.\n\n\nTalk to you soon, \n\nCarrie at CareerFoundry \n\n\nPS. If this email has not already added an event to your primary calendar then please take note of the meeting time.\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/567bf92e-7bd7-4e1b-91eb-c824b4d527a0\nReschedule: https://calendly.com/reschedulings/567bf92e-7bd7-4e1b-91eb-c824b4d527a0\n",
        "location": "We will call you on the number provided",
        "creator": {
            "email": "carrie@careerfoundry.com"
        },
        "organizer": {
            "email": "carrie@careerfoundry.com"
        },
        "start": {
            "dateTime": "2024-04-29T13:30:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "end": {
            "dateTime": "2024-04-29T13:55:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "iCalUID": "s0prhiju7ahfrp572m797ajvi4@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "carrie@careerfoundry.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3428095738498000\"",
        "id": "u00gkvlthoa66gsrqv9mostc3g",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=dTAwZ2t2bHRob2E2NmdzcnF2OW1vc3RjM2cgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-04-25T09:38:32.000Z",
        "updated": "2024-04-25T12:24:29.249Z",
        "summary": "Canceled: Amruta Patil and Iman Tamer",
        "description": "Event Name: Your consultation call with neue fische\n\nIn this 30 minute call we would like to talk with you about the following topics: \n\n\n✅ your general motivation for your application\n\n\n✅ your motivation for your preferred bootcamp(s)\n\n\n✅ your ability to work in a team & your language skills\n\n\nWe are looking forward to get to know you!\n\nLocation: This is a Google Meet web conference.\nYou can join this meeting from your computer, tablet, or smartphone.\nhttps://calendly.com/events/47a4f148-ddcf-415a-ac39-6fe756d5214b/google_meet\n\nPlease tell us your phone number in advance. : +49 1521 2382636\n\nWhat is your current situation?: I'm registered with the Agentur für Arbeit/Jobcenter\n\nCancellation Reason: Hey Amruta!\n\nAs discussed on the phone, my colleague Carolin will call you this afternoon to discuss how to proceed in the application process.\n\nBest,\nLena\n\nPowered by Calendly.com\n",
        "location": "Google Meet (instructions in description)",
        "creator": {
            "email": "iman.tamer@neuefische.de"
        },
        "organizer": {
            "email": "iman.tamer@neuefische.de"
        },
        "start": {
            "dateTime": "2024-04-30T14:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-04-30T14:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "transparency": "transparent",
        "iCalUID": "u00gkvlthoa66gsrqv9mostc3g@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "declined"
            },
            {
                "email": "iman.tamer@neuefische.de",
                "organizer": true,
                "responseStatus": "declined"
            }
        ],
        "hangoutLink": "https://meet.google.com/xhh-sizc-pmp",
        "conferenceData": {
            "createRequest": {
                "requestId": "5f22aa56-655c-4f8b-ae98-8ae5db7b9b6e",
                "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                },
                "status": {
                    "statusCode": "success"
                }
            },
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/xhh-sizc-pmp",
                    "label": "meet.google.com/xhh-sizc-pmp"
                },
                {
                    "entryPointType": "more",
                    "uri": "https://tel.meet/xhh-sizc-pmp?pin=6037426070825",
                    "pin": "6037426070825"
                },
                {
                    "regionCode": "DE",
                    "entryPointType": "phone",
                    "uri": "tel:+49-40-8081616972",
                    "label": "+49 40 8081616972",
                    "pin": "287529565"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "xhh-sizc-pmp"
        },
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3430012782832000\"",
        "id": "_a96kknpoah6l0eah90qkec0",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=X2E5NmtrbnBvYWg2bDBlYWg5MHFrZWMwIGFtcnV0YS5wYXRpbDM4N0Bt",
        "created": "2024-05-07T09:30:00.000Z",
        "updated": "2024-05-06T14:39:51.416Z",
        "summary": "Walk-in | Walk- IN Drive for Image editor @ Firstcry",
        "location": "Firstcry.com",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "noreply@naukri.com",
            "displayName": "BRAINBEES SOLUTIONS LIMITED "
        },
        "start": {
            "dateTime": "2024-05-07T06:00:00+02:00",
            "timeZone": "Asia/Kolkata"
        },
        "end": {
            "dateTime": "2024-05-07T12:30:00+02:00",
            "timeZone": "Asia/Kolkata"
        },
        "iCalUID": "RMJ_8TMP9QH5G0",
        "sequence": 1,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "declined"
            }
        ],
        "guestsCanInviteOthers": false,
        "privateCopy": true,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3431539981610000\"",
        "id": "h8sf7jehckcdptvq0oos2cggms",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=aDhzZjdqZWhja2NkcHR2cTBvb3MyY2dnbXMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-05-12T09:47:05.000Z",
        "updated": "2024-05-15T10:46:30.805Z",
        "summary": "meetings available time (Amruta Patil)",
        "description": "\u003cb\u003eBooked by\u003c/b\u003e\nAmruta Patil\namruta.patil387@gmail.com\n015212382636\n\u003cbr\u003e\u003cp\u003eThank you for booking your Career Consultation with Nadav about joining Masterschool with Bildungsgutschein!\u003c/p\u003e\u003cp\u003eI am looking forward to meeting you and discussing your options at Masterschool and the Bildungsgutschein process.\u003c/p\u003e\u003cp\u003ePlease choose a convenient time for our 1:1 meeting. The meeting will be held over the phone. Ahead of the meeting, make sure to\u003cstrong\u003e\u003cb\u003e select the correct timezone\u003c/b\u003e\u003c/strong\u003e from the dropdown menu.\u003c/p\u003e\u003cp\u003e\u003cbr\u003e\u003c/p\u003e\u003cp\u003eI look forward to speaking with you soon!\u003c/p\u003e",
        "creator": {
            "email": "nadav@admissions.masterschool.com"
        },
        "organizer": {
            "email": "nadav@admissions.masterschool.com"
        },
        "start": {
            "dateTime": "2024-05-16T11:20:00+02:00",
            "timeZone": "Asia/Jerusalem"
        },
        "end": {
            "dateTime": "2024-05-16T11:35:00+02:00",
            "timeZone": "Asia/Jerusalem"
        },
        "iCalUID": "h8sf7jehckcdptvq0oos2cggms@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "declined"
            },
            {
                "email": "nadav@admissions.masterschool.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "extendedProperties": {
            "shared": {
                "goo.createdByAvailId": "10idom0t8cj6mbu3og4ioaeebf",
                "goo.createdBySet": "default_cita"
            }
        },
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479214091824000\"",
        "id": "_ahbkcc2p69k4gord74om6h3gf17lgjjq9pmlac33dlrj6ji48pm62cqidh76sljmc4pkcsapb1njqg33c5p6apbidhqmsor85phmur8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=X2FoYmtjYzJwNjlrNGdvcmQ3NG9tNmgzZ2YxN2xnampxOXBtbGFjMzNkbHJqNmppNDhwbTYyY3FpZGg3NnNsam1jNHBrY3NhcGIxbmpxZzMzYzVwNmFwYmlkaHFtc29yODVwaG11cjggYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-02-15T08:10:45.000Z",
        "updated": "2025-02-15T08:10:45.912Z",
        "summary": "CareerLunch with HUGO BOSS",
        "description": "Your CareerLunch at HUGO BOSS is confirmed. \nDate and time: Fr 31.05.24 at 13:00 - 13:30 \nLocation: Your virtual CareerLunch will take place in Microsoft Teams \nMore details about all participants will be sent to you via email 1 day before the lunch. \n \nWould you like to make changes to your application? Click the link below \nhttps://www.careerlunch.com/applications/QXBwbGljYXRpb246ZXlkN2RiOGhsdHJtZjh0b3dzNmtsbThk",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "support@careerlunch.com"
        },
        "start": {
            "dateTime": "2024-05-31T13:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-05-31T13:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "TWF0Y2hHcm91cDpxOXNzNmU0cmw3NDFla3RlNnVva3FqYXo=@careerlunch.com",
        "sequence": 1,
        "attendees": [
            {
                "email": "support@careerlunch.com",
                "organizer": true,
                "responseStatus": "tentative"
            },
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "privateCopy": true,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3441387943948000\"",
        "id": "_ahbkcc2p69k4gord74om6h3ge5gkek9hc5mmgtaqb1570opj8oqkshroepgj6l9hc8p6gcqe6d2jqg33c5p6apbidhqmsor85phmur8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=X2FoYmtjYzJwNjlrNGdvcmQ3NG9tNmgzZ2U1Z2tlazloYzVtbWd0YXFiMTU3MG9wajhvcWtzaHJvZXBnajZsOWhjOHA2Z2NxZTZkMmpxZzMzYzVwNmFwYmlkaHFtc29yODVwaG11cjggYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-06-10T09:00:06.000Z",
        "updated": "2024-07-11T10:32:51.974Z",
        "summary": "CareerLunch with DEKRA",
        "description": "Here are the details for your upcoming CareerLunch Need to make changes?Reschedule:  Click here Cancel:  Click here In case of any urgent matters ahead of your CareerLunch, please inform the other participants directly and keep support@careerlunch.com in cc. Date and time: Tue 11.06.24 at 11:00 – 11:30 (Europe/Berlin) Location:  Der virtuelle CareerLunch wird via Microsoft Teams stattfinden. Sie brauchen dafür keinen eigenen Zugang, sondern erhalten einfach einen Link von uns.  https://teams.microsoft.com/l/meetup-join/19%3ameeting_NmE5NGRkNDYtYzQ1Zi00ODkyLThkY2UtY2M2ZTM4M2JhZTUy%40thread.v2/0?context=%7b%22Tid%22%3a%22110506d5-5ec4-4429-b399-be9b0a081c6d%22%2c%22Oid%22%3a%2261d9ef94-4888-432a-9229-90dd7051068b%22%7d Lunch buddy from DEKRA Julian Sauer: julian.sauer@dekra.com, https://www.linkedin.com/in/juliansauer Participating talent: Amruta Patil: amruta.patil387@gmail.com, https://www.linkedin.com/in/amruta-patil-823b4220 ",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "support@careerlunch.com"
        },
        "start": {
            "dateTime": "2024-06-11T11:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-06-11T11:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "TWF0Y2hHcm91cDpqaGQ1amhuZXJpc3F5NGxva3U1b2h3N3E=@careerlunch.com",
        "sequence": 1,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "support@careerlunch.com",
                "organizer": true,
                "responseStatus": "tentative"
            },
            {
                "email": "julian.sauer@dekra.com",
                "displayName": "Julian Sauer",
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "privateCopy": true,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456947582228000\"",
        "id": "evo4gpaatpbqh71soae566ss08",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZXZvNGdwYWF0cGJxaDcxc29hZTU2NnNzMDggYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-05-31T16:51:43.000Z",
        "updated": "2024-10-09T11:36:31.114Z",
        "summary": "Großer Pflanzenverkauf - Köln",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DPCQkVLVfg9ra6MvWOF4GbG_tcfml8zi8s\n",
        "location": "Pattenhalle, Christianstraße 8250825Köln, Köln, SN, 50825, DE",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-06-13T10:00:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2024-06-15T18:00:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "evo4gpaatpbqh71soae566ss08@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": true
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DPCQkVLVfg9ra6MvWOF4GbG_tcfml8zi8s",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3444953841818000\"",
        "id": "mc128sasr02ooka2kt7ufeo920",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=bWMxMjhzYXNyMDJvb2thMmt0N3VmZW85MjAgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-05-23T16:00:50.000Z",
        "updated": "2024-10-09T11:36:31.114Z",
        "summary": "Flight to Mumbai (UK 28)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DPhsGfviKyxdFRXsUyJgqE5u1I0fjuNzFg\n",
        "location": "Frankfurt FRA",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-06-13T20:20:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2024-06-14T04:25:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "mc128sasr02ooka2kt7ufeo920@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": false
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DPhsGfviKyxdFRXsUyJgqE5u1I0fjuNzFg",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3439125255780000\"",
        "id": "_ahbkcc2p69k4gord74om6h3gf9d4gj9jcgpmgcj3d90ngmje8or5iuii65d5gppjcha5iub5dpjjqg33c5p6apbidhqmsor85phmur8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=X2FoYmtjYzJwNjlrNGdvcmQ3NG9tNmgzZ2Y5ZDRnajlqY2dwbWdjajNkOTBuZ21qZThvcjVpdWlpNjVkNWdwcGpjaGE1aXViNWRwampxZzMzYzVwNmFwYmlkaHFtc29yODVwaG11cjggYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-05-28T11:45:07.000Z",
        "updated": "2024-06-28T08:17:07.890Z",
        "summary": "CareerLunch with HUGO BOSS",
        "description": "Your CareerLunch at HUGO BOSS is confirmed. \nDate and time: Tue 18.06.24 at 14:30 – 15:00 \nLocation: Your virtual CareerLunch will take place in Microsoft Teams \nMore details about all participants will be sent to you via email 1 day before the lunch. \n \nWould you like to make changes to your application? Click the link below \nhttps://www.careerlunch.com/applications/QXBwbGljYXRpb246ZXlkN2RiOGhsdHJtZjh0b3dzNmtsbThk",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "support@careerlunch.com"
        },
        "start": {
            "dateTime": "2024-06-18T14:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-06-18T15:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "TWF0Y2hHcm91cDpzZHM3d3h2cjAxZnF6YzR1ZXg3dTYyeng=@careerlunch.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "support@careerlunch.com",
                "organizer": true,
                "responseStatus": "tentative"
            }
        ],
        "guestsCanInviteOthers": false,
        "privateCopy": true,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3435013558022000\"",
        "id": "61hm6chpcdhmcb9h69h34b9k60rj4b9p74p32bb56co3eopn69i38p9nc8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjFobTZjaHBjZGhtY2I5aDY5aDM0YjlrNjByajRiOXA3NHAzMmJiNTZjbzNlb3BuNjlpMzhwOW5jOCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-06-04T13:12:59.000Z",
        "updated": "2024-06-04T13:12:59.011Z",
        "summary": "Summer day in kita",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-06-22T07:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-06-22T08:30:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "61hm6chpcdhmcb9h69h34b9k60rj4b9p74p32bb56co3eopn69i38p9nc8@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3446401460891000\"",
        "id": "35aksh6etaneunnu1luoqjf4v8",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MzVha3NoNmV0YW5ldW5udTFsdW9xamY0djggYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-06-09T10:07:50.000Z",
        "updated": "2024-10-09T11:36:30.828Z",
        "summary": "Flight to Frankfurt (UK 27)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNHaDcVb_XkUXS4IMk46n-fjcAJ-3abx4s\n",
        "location": "Mumbai BOM",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-07-13T08:30:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2024-07-13T17:30:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "35aksh6etaneunnu1luoqjf4v8@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": false
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNHaDcVb_XkUXS4IMk46n-fjcAJ-3abx4s",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3428929235476000\"",
        "id": "75j68p1g71j6ab9mc8p66b9kcpgj2b9pcks6cb9o6osm6dhh68q38p9nc4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NzVqNjhwMWc3MWo2YWI5bWM4cDY2YjlrY3BnajJiOXBja3M2Y2I5bzZvc202ZGhoNjhxMzhwOW5jNCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-04-30T08:10:17.000Z",
        "updated": "2024-04-30T08:10:17.738Z",
        "summary": "Start of class",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-07-22T08:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-07-22T09:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "75j68p1g71j6ab9mc8p66b9kcpgj2b9pcks6cb9o6osm6dhh68q38p9nc4@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3448438317034000\"",
        "id": "s1dott54du58sbm1ttj3smbkdg",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=czFkb3R0NTRkdTU4c2JtMXR0ajNzbWJrZGcgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-08-21T05:45:57.000Z",
        "updated": "2024-08-21T05:45:58.517Z",
        "summary": "Confirmed: Admissions follow up meeting with Carrie at CareerFoundry",
        "description": "Hi Amruta,\n\n\nYour meeting has been scheduled! Below are all the details of the call\n\n\nPlease select the course that you’re interested in:: Full-Stack Web Development Program\n\nPhone number (select your country flag): +49 1521 2382636\n\nDo we have your consent to communicate with you via text message (SMS)?: Yes\n\n\nYou will receive more information about our meeting and what we'll discuss shortly. \n\n\nTalk to you soon, \n\n\nCarrie at CareerFoundry  \n\n\nPS. If this email has not already added an event to your primary calendar then please take note of the meeting time.\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/63b1c803-53d6-41f3-a618-62a084082de5\nReschedule: https://calendly.com/reschedulings/63b1c803-53d6-41f3-a618-62a084082de5\n\nPowered by Calendly.com\n",
        "creator": {
            "email": "carrie@careerfoundry.com"
        },
        "organizer": {
            "email": "carrie@careerfoundry.com"
        },
        "start": {
            "dateTime": "2024-08-26T15:00:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "end": {
            "dateTime": "2024-08-26T15:10:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "iCalUID": "s1dott54du58sbm1ttj3smbkdg@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "needsAction"
            },
            {
                "email": "carrie@careerfoundry.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3450886909220000\"",
        "id": "cr2t7ialkr20vp7a2uhato1oec",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y3IydDdpYWxrcjIwdnA3YTJ1aGF0bzFvZWMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-08-30T12:27:25.000Z",
        "updated": "2024-09-04T09:50:54.610Z",
        "summary": "Amruta Patil: Interview for WBS CODING SCHOOL",
        "description": "\u003cp\u003eThank you for booking your interview.\u003c/p\u003e\u003cp\u003eAt the scheduled time, please click the link in this mail to open Google Meet. For an optimal experience during the interview, \u003cstrong\u003eplease join from a computer or laptop\u003c/strong\u003e in a quiet environment.\u003c/p\u003e\n\u003cbr\u003e\u003cb\u003eNeed to make changes?\u003c/b\u003e\u003cbr\u003e\u003cul\u003e\u003cli\u003eReschedule:&nbsp;\u003ca href=\"https://app.hubspot.com/meetings/wbscs/interview-en?rescheduleId=998e617ab436426322585b10dd98e3e5&ms=1\"\u003ehttps://app.hubspot.com/meetings/wbscs/interview-en?rescheduleId=998e617ab436426322585b10dd98e3e5&ms=1\u003c/a\u003e\u003c/li\u003e\u003cli\u003eCancel:&nbsp;\u003ca href=\"https://app.hubspot.com/meetings/wbscs/interview-en?cancelId=998e617ab436426322585b10dd98e3e5&ms=1\"\u003ehttps://app.hubspot.com/meetings/wbscs/interview-en?cancelId=998e617ab436426322585b10dd98e3e5&ms=1\u003c/a\u003e\u003c/li\u003e\u003c/ul\u003e",
        "creator": {
            "email": "emily.myers@wbscodingschool.com"
        },
        "organizer": {
            "email": "emily.myers@wbscodingschool.com"
        },
        "start": {
            "dateTime": "2024-09-04T12:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-09-04T12:40:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "cr2t7ialkr20vp7a2uhato1oec@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "emily.myers@wbscodingschool.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "hangoutLink": "https://meet.google.com/sin-brte-hii",
        "conferenceData": {
            "createRequest": {
                "requestId": "352fa32e-452c-46f8-a2d7-96f4ec1d7c87",
                "conferenceSolutionKey": {
                    "type": "hangoutsMeet"
                },
                "status": {
                    "statusCode": "success"
                }
            },
            "entryPoints": [
                {
                    "entryPointType": "video",
                    "uri": "https://meet.google.com/sin-brte-hii",
                    "label": "meet.google.com/sin-brte-hii"
                },
                {
                    "entryPointType": "more",
                    "uri": "https://tel.meet/sin-brte-hii?pin=5129300816093",
                    "pin": "5129300816093"
                },
                {
                    "regionCode": "DE",
                    "entryPointType": "phone",
                    "uri": "tel:+49-40-8081619533",
                    "label": "+49 40 8081619533",
                    "pin": "533579755"
                }
            ],
            "conferenceSolution": {
                "key": {
                    "type": "hangoutsMeet"
                },
                "name": "Google Meet",
                "iconUri": "https://fonts.gstatic.com/s/i/productlogos/meet_2020q4/v6/web-512dp/logo_meet_2020q4_color_2x_web_512dp.png"
            },
            "conferenceId": "sin-brte-hii"
        },
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3451920927700000\"",
        "id": "6dhj0c9ocli32b9lcoo62b9k6gomcb9oc5i34bb4cos3cp3264rmaeb1co",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NmRoajBjOW9jbGkzMmI5bGNvbzYyYjlrNmdvbWNiOW9jNWkzNGJiNGNvczNjcDMyNjRybWFlYjFjbyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-09-10T09:27:43.000Z",
        "updated": "2024-09-10T09:27:43.850Z",
        "summary": "ITCS Köln",
        "location": "XPOST, Gladbacher Wall 5, 50670 Köln",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-09-13T10:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2024-09-13T16:00:00+02:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "6dhj0c9ocli32b9lcoo62b9k6gomcb9oc5i34bb4cos3cp3264rmaeb1co@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3452458512716000\"",
        "id": "30dbla58rvkd1ebot1ng4u7cl4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MzBkYmxhNThydmtkMWVib3Qxbmc0dTdjbDQgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-09-13T12:07:35.000Z",
        "updated": "2024-09-13T12:07:36.358Z",
        "summary": "Confirmed: Admissions follow up meeting with Carrie at CareerFoundry",
        "description": "Hi Amruta,\n\n\nYour meeting has been scheduled! Below are all the details of the call\n\n\nPlease select the course that you’re interested in:: Full-Stack Web Development Program\n\nPhone number (select your country flag): +49 1521 2382636\n\nDo we have your consent to communicate with you via text message (SMS)?: No\n\n\nYou will receive more information about our meeting and what we'll discuss shortly. \n\n\nTalk to you soon, \n\n\nCarrie at CareerFoundry  \n\n\nPS. If this email has not already added an event to your primary calendar then please take note of the meeting time.\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/8309660c-329d-4083-ab41-df1c7615f169\nReschedule: https://calendly.com/reschedulings/8309660c-329d-4083-ab41-df1c7615f169\n\nPowered by Calendly.com\n",
        "creator": {
            "email": "carrie@careerfoundry.com"
        },
        "organizer": {
            "email": "carrie@careerfoundry.com"
        },
        "start": {
            "dateTime": "2024-09-16T19:30:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "end": {
            "dateTime": "2024-09-16T19:40:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "iCalUID": "30dbla58rvkd1ebot1ng4u7cl4@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "needsAction"
            },
            {
                "email": "carrie@careerfoundry.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3441934683784000\"",
        "id": "ssg1hu7ihspn0us02m5kmug51s",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=c3NnMWh1N2loc3BuMHVzMDJtNWttdWc1MXMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-06-09T10:07:50.000Z",
        "updated": "2024-08-18T18:50:13.721Z",
        "summary": "Flight to Mumbai (UK 28)",
        "description": "To see detailed information for automatically created events like this one, use the official Google Calendar app. https://g.co/calendar\n\nThis event was created from an email you received in Gmail. https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNHaDcVb_XkUXS4IMk46n-fjcAJ-3abx4s\n",
        "location": "Frankfurt FRA",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-09-29T20:20:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2024-09-30T04:25:00+02:00",
            "timeZone": "UTC"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ssg1hu7ihspn0us02m5kmug51s@google.com",
        "sequence": 1,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "organizer": true,
                "self": true,
                "responseStatus": "accepted"
            }
        ],
        "guestsCanInviteOthers": false,
        "reminders": {
            "useDefault": false
        },
        "source": {
            "url": "https://mail.google.com/mail?extsrc=cal&plid=ACUX6DNHaDcVb_XkUXS4IMk46n-fjcAJ-3abx4s",
            "title": ""
        },
        "eventType": "fromGmail"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3456598025508000\"",
        "id": "n45h4c4aq0ju4kph6m22k6fbbg",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=bjQ1aDRjNGFxMGp1NGtwaDZtMjJrNmZiYmcgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-10-03T05:48:48.000Z",
        "updated": "2024-10-07T11:03:32.754Z",
        "summary": "Confirmed: ---- Tutor understanding fu call-----CareerFoundry: Program Advisor Call with Carrie with Carrie at CareerFoundry",
        "description": "Hi Amruta,\n\n\nYour meeting has been scheduled! Below are all the details of the call\n\n\nPlease select the course that you’re interested in:: Full-Stack Web Development Program\n\nPhone number (select your country flag): +49 1521 2382636\n\nOur call might be recorded for quality assurance and training purposes. Are you OK with that?: No\n\nHow did you hear about CareerFoundry?: Social media\n\nDo we have your consent to communicate with you via text message (SMS)?: Yes\n\n\nYou will receive more information about our meeting and what we'll discuss shortly. \n\n\nTalk to you soon,\n\nCarrie at CareerFoundry  \n\n\nPS. If this email has not already added an event to your primary calendar then please take a note of the meeting time.\n\nNeed to make changes to this event?\nCancel: https://calendly.com/cancellations/8adae81f-dfe4-4822-96c1-fcbe98828925\nReschedule: https://calendly.com/reschedulings/8adae81f-dfe4-4822-96c1-fcbe98828925\n\nPowered by Calendly.com\n",
        "creator": {
            "email": "carrie@careerfoundry.com"
        },
        "organizer": {
            "email": "carrie@careerfoundry.com"
        },
        "start": {
            "dateTime": "2024-10-07T13:30:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "end": {
            "dateTime": "2024-10-07T13:55:00+02:00",
            "timeZone": "America/Indiana/Indianapolis"
        },
        "iCalUID": "n45h4c4aq0ju4kph6m22k6fbbg@google.com",
        "sequence": 0,
        "attendees": [
            {
                "email": "amruta.patil387@gmail.com",
                "self": true,
                "responseStatus": "accepted"
            },
            {
                "email": "carrie@careerfoundry.com",
                "organizer": true,
                "responseStatus": "accepted"
            }
        ],
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3459228436336000\"",
        "id": "cli3idj26hi3ib9pcorm8b9k6thj2bb268rm2b9jccqj0d366hj6acppcc",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2xpM2lkajI2aGkzaWI5cGNvcm04YjlrNnRoajJiYjI2OHJtMmI5amNjcWowZDM2NmhqNmFjcHBjYyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-10-22T16:23:38.000Z",
        "updated": "2024-10-22T16:23:38.168Z",
        "summary": "Diaper loaded in Kita",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2024-10-22"
        },
        "end": {
            "date": "2024-10-23"
        },
        "transparency": "transparent",
        "iCalUID": "cli3idj26hi3ib9pcorm8b9k6thj2bb268rm2b9jccqj0d366hj6acppcc@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3455390697808000\"",
        "id": "2a1skf1g3q57b80b9m5dj9nk7b",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=MmExc2tmMWczcTU3YjgwYjltNWRqOW5rN2IgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2024-09-30T11:22:28.000Z",
        "updated": "2024-09-30T11:22:28.904Z",
        "summary": "Welcome to CareerFoundry: Student Onboarding",
        "description": "☐ Calling all New CareerFoundry Students! ☐\n\nGet Ready to Embark on an Exciting Journey! \n\nAre you ready to kickstart an amazing adventure towards your dream career? We know that starting something new can be exhilarating and a bit nerve-wracking. But fear not, because we've got something special lined up just for YOU!\n\nBe sure to reserve your spot to our Onboarding Webinar for New CareerFoundry Students! \n\nOur goal is to make sure you have the smoothest and most thrilling start on your educational journey. That's why we're bringing in two of CareerFoundry's superstar experts to guide you through everything you need to know.\n\nHere's a sneak peek of what awaits you:\n\n☐ Your Personal Guides: Meet your dedicated mentor and tutor, the dynamic duo who'll be by your side every step of the way. Learn how to connect with them and make the most of their guidance.\n\n☐ Stay Inspired: Discover powerful techniques to keep your motivation soaring high throughout your learning journey, ensuring you achieve your goals with gusto.\n\n☐️ Tools of the Trade: Explore the arsenal of tools and resources at your disposal, plus some incredible discounts to enhance your learning experience.\n\n☐ Team Up: Find out how you can team up with fellow students, forming study buddies that turn learning into an exciting collaboration.\n\n☐ Beyond the Books: Dive into the details of the Job Prep Course and our job guarantee, because your success is our ultimate mission.\n\nAnd that's just the beginning! This is your chance to ask all your burning questions, connect with your future peers, and set yourself up for an ex\n\nTo attend: https://www.bigmarker.com/careerfoundry/Welcome-to-CareerFoundry-752a2d95445db8963a91b769?bmid=c2edd7323305",
        "location": "https://www.bigmarker.com/careerfoundry/Welcome-to-CareerFoundry-752a2d95445db8963a91b769?bmid=c2edd7323305",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2024-10-24T18:00:00+02:00",
            "timeZone": "UTC"
        },
        "end": {
            "dateTime": "2024-10-24T19:30:00+02:00",
            "timeZone": "UTC"
        },
        "iCalUID": "2a1skf1g3q57b80b9m5dj9nk7b@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3459228567944000\"",
        "id": "61hmacj469i3ebb1ckpjcb9k75gm6bb2coojebb6c5hm2cb561h3cphocg",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NjFobWFjajQ2OWkzZWJiMWNrcGpjYjlrNzVnbTZiYjJjb29qZWJiNmM1aG0yY2I1NjFoM2NwaG9jZyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-10-22T16:24:23.000Z",
        "updated": "2024-10-22T16:24:43.972Z",
        "summary": "Set alarm for diaper reload",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2024-11-26"
        },
        "end": {
            "date": "2024-11-27"
        },
        "transparency": "transparent",
        "iCalUID": "61hmacj469i3ebb1ckpjcb9k75gm6bb2coojebb6c5hm2cb561h3cphocg@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3467215910356000\"",
        "id": "6so32c9m6ks3cbb26gq32b9k68qm4bb1c9gjabb46crjeopnc4pjecb26s",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NnNvMzJjOW02a3MzY2JiMjZncTMyYjlrNjhxbTRiYjFjOWdqYWJiNDZjcmplb3BuYzRwamVjYjI2cyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-12-07T21:45:55.000Z",
        "updated": "2024-12-07T21:45:55.178Z",
        "summary": "Cake pick up at 5-6 pm",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2024-12-09"
        },
        "end": {
            "date": "2024-12-10"
        },
        "transparency": "transparent",
        "iCalUID": "6so32c9m6ks3cbb26gq32b9k68qm4bb1c9gjabb46crjeopnc4pjecb26s@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3467215953398000\"",
        "id": "chgj4dhg61gm8bb6c4sm4b9kckp6cbb175i64bb2ccsj2dpnc8oj6p1j6s",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y2hnajRkaGc2MWdtOGJiNmM0c200YjlrY2twNmNiYjE3NWk2NGJiMmNjc2oyZHBuYzhvajZwMWo2cyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2024-12-07T21:46:16.000Z",
        "updated": "2024-12-07T21:46:16.699Z",
        "summary": "Cake pick up at decided time",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2024-12-19"
        },
        "end": {
            "date": "2024-12-20"
        },
        "transparency": "transparent",
        "iCalUID": "chgj4dhg61gm8bb6c4sm4b9kckp6cbb175i64bb2ccsj2dpnc8oj6p1j6s@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3475063225004000\"",
        "id": "coom4pj16spj2bb570rjib9k69hm6b9o70ojib9h70o3ior26hhmcp9hcg",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y29vbTRwajE2c3BqMmJiNTcwcmppYjlrNjlobTZiOW83MG9qaWI5aDcwbzNpb3IyNmhobWNwOWhjZyBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2025-01-22T07:40:12.000Z",
        "updated": "2025-01-22T07:40:12.502Z",
        "summary": "CareerFoundry: Amruta Patil - Richard Behringer",
        "description": "CareerFoundry mentor meeting with Amruta Patil and Richard Behringer",
        "location": "CareerFoundry",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2025-01-27T12:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2025-01-27T13:30:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "coom4pj16spj2bb570rjib9k69hm6b9o70ojib9h70o3ior26hhmcp9hcg@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false,
            "overrides": [
                {
                    "method": "popup",
                    "minutes": 15
                }
            ]
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3472351674804000\"",
        "id": "c4ojcdj26tgj8b9pcdj3ib9kcooj6b9pcks66b9jcks6cc9l61j66ohpc4",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=YzRvamNkajI2dGdqOGI5cGNkajNpYjlrY29vajZiOXBja3M2NmI5amNrczZjYzlsNjFqNjZvaHBjNCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2025-01-06T15:03:57.000Z",
        "updated": "2025-01-06T15:03:57.402Z",
        "summary": "Kita food fees pay",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2025-01-31T08:00:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2025-01-31T09:00:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "c4ojcdj26tgj8b9pcdj3ib9kcooj6b9pcks66b9jcks6cc9l61j66ohpc4@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false,
            "overrides": [
                {
                    "method": "popup",
                    "minutes": 10
                }
            ]
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3480153296040000\"",
        "id": "49s0kefiabutmh2dc5oiokqho3",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=NDlzMGtlZmlhYnV0bWgyZGM1b2lva3FobzMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-02-20T18:37:28.000Z",
        "updated": "2025-02-20T18:37:28.020Z",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2025-02-20T19:00:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2025-02-20T20:00:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "49s0kefiabutmh2dc5oiokqho3@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": true
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20250303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAyNTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2025-03-03"
        },
        "end": {
            "date": "2025-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2025-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479831178172000\"",
        "id": "copmaphj71gm4b9mcksj4b9k74o3abb2cgsm4bb26hhm4e9ocpim6phg64",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=Y29wbWFwaGo3MWdtNGI5bWNrc2o0YjlrNzRvM2FiYjJjZ3NtNGJiMjZoaG00ZTlvY3BpbTZwaGc2NCBhbXJ1dGEucGF0aWwzODdAbQ",
        "created": "2025-02-18T21:53:09.000Z",
        "updated": "2025-02-18T21:53:09.086Z",
        "summary": "Try to finish everything career foundry ends soon",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "dateTime": "2025-03-17T08:00:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "end": {
            "dateTime": "2025-03-17T09:00:00+01:00",
            "timeZone": "Europe/Berlin"
        },
        "iCalUID": "copmaphj71gm4b9mcksj4b9k74o3abb2cgsm4bb26hhm4e9ocpim6phg64@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false,
            "overrides": [
                {
                    "method": "popup",
                    "minutes": 10
                }
            ]
        },
        "eventType": "default"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20260303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAyNjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2026-03-03"
        },
        "end": {
            "date": "2026-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2026-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20270303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAyNzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2027-03-03"
        },
        "end": {
            "date": "2027-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2027-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20280303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAyODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2028-03-03"
        },
        "end": {
            "date": "2028-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2028-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20290303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAyOTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2029-03-03"
        },
        "end": {
            "date": "2029-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2029-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20300303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzMDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2030-03-03"
        },
        "end": {
            "date": "2030-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2030-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20310303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzMTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2031-03-03"
        },
        "end": {
            "date": "2031-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2031-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20320303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzMjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2032-03-03"
        },
        "end": {
            "date": "2032-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2032-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20330303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzMzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2033-03-03"
        },
        "end": {
            "date": "2033-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2033-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20340303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzNDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2034-03-03"
        },
        "end": {
            "date": "2034-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2034-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20350303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzNTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2035-03-03"
        },
        "end": {
            "date": "2035-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2035-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20360303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzNjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2036-03-03"
        },
        "end": {
            "date": "2036-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2036-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20370303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzNzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2037-03-03"
        },
        "end": {
            "date": "2037-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2037-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20380303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2038-03-03"
        },
        "end": {
            "date": "2038-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2038-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20390303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjAzOTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2039-03-03"
        },
        "end": {
            "date": "2039-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2039-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20400303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0MDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2040-03-03"
        },
        "end": {
            "date": "2040-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2040-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20410303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0MTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2041-03-03"
        },
        "end": {
            "date": "2041-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2041-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20420303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0MjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2042-03-03"
        },
        "end": {
            "date": "2042-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2042-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20430303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0MzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2043-03-03"
        },
        "end": {
            "date": "2043-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2043-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20440303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0NDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2044-03-03"
        },
        "end": {
            "date": "2044-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2044-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20450303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0NTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2045-03-03"
        },
        "end": {
            "date": "2045-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2045-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20460303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0NjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2046-03-03"
        },
        "end": {
            "date": "2046-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2046-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20470303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0NzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2047-03-03"
        },
        "end": {
            "date": "2047-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2047-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20480303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0ODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2048-03-03"
        },
        "end": {
            "date": "2048-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2048-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20490303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA0OTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2049-03-03"
        },
        "end": {
            "date": "2049-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2049-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20500303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1MDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2050-03-03"
        },
        "end": {
            "date": "2050-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2050-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20510303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1MTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2051-03-03"
        },
        "end": {
            "date": "2051-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2051-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20520303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1MjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2052-03-03"
        },
        "end": {
            "date": "2052-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2052-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20530303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1MzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2053-03-03"
        },
        "end": {
            "date": "2053-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2053-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20540303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1NDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2054-03-03"
        },
        "end": {
            "date": "2054-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2054-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20550303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1NTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2055-03-03"
        },
        "end": {
            "date": "2055-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2055-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20560303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1NjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2056-03-03"
        },
        "end": {
            "date": "2056-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2056-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20570303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1NzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2057-03-03"
        },
        "end": {
            "date": "2057-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2057-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20580303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1ODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2058-03-03"
        },
        "end": {
            "date": "2058-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2058-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20590303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA1OTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2059-03-03"
        },
        "end": {
            "date": "2059-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2059-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20600303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2MDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2060-03-03"
        },
        "end": {
            "date": "2060-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2060-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20610303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2MTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2061-03-03"
        },
        "end": {
            "date": "2061-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2061-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20620303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2MjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2062-03-03"
        },
        "end": {
            "date": "2062-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2062-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20630303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2MzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2063-03-03"
        },
        "end": {
            "date": "2063-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2063-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20640303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2NDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2064-03-03"
        },
        "end": {
            "date": "2064-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2064-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20650303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2NTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2065-03-03"
        },
        "end": {
            "date": "2065-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2065-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20660303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2NjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2066-03-03"
        },
        "end": {
            "date": "2066-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2066-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20670303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2NzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2067-03-03"
        },
        "end": {
            "date": "2067-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2067-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20680303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2ODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2068-03-03"
        },
        "end": {
            "date": "2068-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2068-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20690303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA2OTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2069-03-03"
        },
        "end": {
            "date": "2069-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2069-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20700303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3MDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2070-03-03"
        },
        "end": {
            "date": "2070-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2070-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20710303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3MTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2071-03-03"
        },
        "end": {
            "date": "2071-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2071-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20720303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3MjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2072-03-03"
        },
        "end": {
            "date": "2072-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2072-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20730303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3MzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2073-03-03"
        },
        "end": {
            "date": "2073-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2073-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20740303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3NDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2074-03-03"
        },
        "end": {
            "date": "2074-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2074-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20750303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3NTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2075-03-03"
        },
        "end": {
            "date": "2075-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2075-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20760303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3NjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2076-03-03"
        },
        "end": {
            "date": "2076-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2076-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20770303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3NzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2077-03-03"
        },
        "end": {
            "date": "2077-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2077-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20780303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3ODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2078-03-03"
        },
        "end": {
            "date": "2078-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2078-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20790303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA3OTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2079-03-03"
        },
        "end": {
            "date": "2079-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2079-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20800303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4MDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2080-03-03"
        },
        "end": {
            "date": "2080-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2080-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20810303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4MTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2081-03-03"
        },
        "end": {
            "date": "2081-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2081-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20820303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4MjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2082-03-03"
        },
        "end": {
            "date": "2082-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2082-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20830303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4MzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2083-03-03"
        },
        "end": {
            "date": "2083-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2083-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20840303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4NDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2084-03-03"
        },
        "end": {
            "date": "2084-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2084-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20850303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4NTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2085-03-03"
        },
        "end": {
            "date": "2085-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2085-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20860303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4NjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2086-03-03"
        },
        "end": {
            "date": "2086-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2086-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20870303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4NzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2087-03-03"
        },
        "end": {
            "date": "2087-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2087-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20880303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4ODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2088-03-03"
        },
        "end": {
            "date": "2088-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2088-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20890303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA4OTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2089-03-03"
        },
        "end": {
            "date": "2089-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2089-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20900303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5MDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2090-03-03"
        },
        "end": {
            "date": "2090-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2090-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20910303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5MTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2091-03-03"
        },
        "end": {
            "date": "2091-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2091-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20920303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5MjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2092-03-03"
        },
        "end": {
            "date": "2092-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2092-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20930303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5MzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2093-03-03"
        },
        "end": {
            "date": "2093-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2093-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20940303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5NDAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2094-03-03"
        },
        "end": {
            "date": "2094-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2094-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20950303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5NTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2095-03-03"
        },
        "end": {
            "date": "2095-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2095-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20960303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5NjAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2096-03-03"
        },
        "end": {
            "date": "2096-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2096-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20970303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5NzAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2097-03-03"
        },
        "end": {
            "date": "2097-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2097-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20980303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5ODAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2098-03-03"
        },
        "end": {
            "date": "2098-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2098-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    },
    {
        "kind": "calendar#event",
        "etag": "\"3479108715278000\"",
        "id": "ejvmdmdg79tno5cekdffi6o8sk_20990303",
        "status": "confirmed",
        "htmlLink": "https://www.google.com/calendar/event?eid=ZWp2bWRtZGc3OXRubzVjZWtkZmZpNm84c2tfMjA5OTAzMDMgYW1ydXRhLnBhdGlsMzg3QG0",
        "created": "2025-01-13T23:02:53.000Z",
        "updated": "2025-02-14T17:32:37.639Z",
        "summary": "Happy birthday!",
        "creator": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "organizer": {
            "email": "amruta.patil387@gmail.com",
            "self": true
        },
        "start": {
            "date": "2099-03-03"
        },
        "end": {
            "date": "2099-03-04"
        },
        "recurringEventId": "ejvmdmdg79tno5cekdffi6o8sk",
        "originalStartTime": {
            "date": "2099-03-03"
        },
        "transparency": "transparent",
        "visibility": "private",
        "iCalUID": "ejvmdmdg79tno5cekdffi6o8sk@google.com",
        "sequence": 0,
        "reminders": {
            "useDefault": false
        },
        "birthdayProperties": {
            "type": "self"
        },
        "eventType": "birthday"
    }
];


export default mockData;