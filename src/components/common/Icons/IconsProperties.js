export const LinksProperties = {
    Github: {
        id: 'Github',
        src: 'https://i.ibb.co/JrL4WkM/github-mark-white.png',
        handleClick:() => {
            window.location.assign('https://github.com/milkyicedtea');
        },
    },
    Youtube: {
        id: 'Youtube',
        src: 'https://i.ibb.co/HVB4s69/youtube-social-icon-red.png',
        handleClick:() => {
            window.location.assign('https://youtube.com/c/@Ignorance');
        },
        handleError:() => {
            this.src='./img/youtube-social-icon-red.png'
        },
    },
    Osu: {
        id: 'Osu',
        src: 'https://i.ibb.co/dppVC00/full-color-osu-logo.png',
        handleClick:() => {
            window.location.assign('https://osu.ppy.sh/users/20178628')
        },
        handleError:() => {
            this.src='./img/full-color-osu-logo.png'
        },
    },
    Twitter: {
        id: 'Twitter',
        src: 'https://i.ibb.co/DW5yWqs/twitter-logo-white.png',
        handleClick:() => {
            window.location.assign('https://twitter.com/ignorancespam');
        },
        handleError:() => {
            this.src='./img/twitter-logo-white.png'
        },
    },
    Twitch: {
        id: 'Twitch',
        src: 'https://i.ibb.co/KjcZxXC/Twitch-Glitch-Purple.png',
        handleClick:() => {
            window.location.assign('https://twitch.tv/strxwberryice')
        },
        handleError:() => {
            this.src='./img/Twitch-Glitch-Purple.png'
        },
    },
}