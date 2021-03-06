var config = {
    lang: 'de',
    time: {
        timeFormat: 24
    },
    weather: {
        //change weather params here:
        //units: metric or imperial
        params: {
            q: 'Graz,Austria',
            units: 'metric',
            // if you want a different lang for the weather that what is set above, change it here
            lang: 'de',
            APPID: '30028cfcd1e5d49586d206f7bd9a6148'
        }
    },
    compliments: {
        interval: 30000,
        fadeInterval: 4000,
        morning: [
            'Good morning, handsome!',
            'Enjoy your day!',
            'How was your sleep?'
        ],
        afternoon: [
            'Hello, beauty!',
            'You look !',
            'Looking good today!'
        ],
        evening: [
            'Wow, you look hot!',
            'You look nice!',
            'Hi, sexy!'           
        ]
    },
    calendar: {
        maximumEntries: 5,
        //url: "https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M"
        url: "https://calendar.google.com/calendar/ical/see9sp25p7dvha8ibp6pokkrr8%40group.calendar.google.com/private-446cc4275ef59ef5c238abdd80f535a0/basic.ics"
    },
    news: {
        //feed: 'http://www.kleinezeitung.at/rss/nachrichten_stmk'
        feed: 'http://www.kleinezeitung.at/rss/rss_graz'
    }
}
