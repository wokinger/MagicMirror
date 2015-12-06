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
        maximumEntries: 10
    },
    news: {
        //feed: 'http://www.kleinezeitung.at/rss/nachrichten_stmk'
        feed: 'http://www.kleinezeitung.at/rss/rss_graz'
    }
}
