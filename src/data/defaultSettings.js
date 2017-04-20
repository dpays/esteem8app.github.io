var defaultSettings = {

    appVersion: '0.0.8.4',

    user: {
        name: '',
        password: '',
        account: {
            profileImage: '',
            coverImage: '',
            followers: [],
            following: []
        }
    },

    theme: {
        primaryColor: "#673AB7",
        secondaryColor: "#FF5722",
        darkPrimaryColor: "#522e92",
        lightPrimaryColor: "#7c46dc",
        ultraDarkPrimaryColor: "#341d5c",
        primaryTextColor: "#eeeeee",
        secondaryTextColor: "#eeeeee",
        dividerColor: "#BDBDBD",
        primaryBackgroundColor: "#eeeeee",
        secondaryBackgroundColor: "#ffffff",
        backgroundPrimaryTextColor: "#282828",
        backgroundSecondaryTextColor: "#666666"
    },

    display: {
        showCardContent: true,
        showCardTags: true,
        showCardImage: true,
        imageResolution: 'medium'
    },

    content: {
        emojiSheet: 'emojione',

        imageProxyUrl: 'https://steemitimages.com/',
        customImageProxyUrls: [],
        defaultImageProxyUrls: [
            'https://steemitimages.com/'
        ],

        textAlign: 'left'
    },

    support: {
        enableSupportApplication: false,
        enableSupportUpdates: false
    },

    network: {
        websocketUrl: 'wss://steemd.steemit.com',
        chainName: 'steem'
    },

    steem: {
        customWebsocketUrls: [],
        defaultWebsocketUrls: [
            'wss://steemd.steemit.com',
            'wss://steemd.steemitdev.com',
            'wss://node.steem.ws ',
            'wss://this.piston.rocks',
            'wss://seed.bitcoiner.me'
        ]

    },

    golos: {
        customWebsocketUrls: [],
        defaultWebsocketUrls: [
            'wss://ws.golos.io'
        ]
    }
};