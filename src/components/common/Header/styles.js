export const headerStyles = {
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'trafficblue.main',
        padding: '15px',
    },
    topRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'end',
        alignItems: 'center',
        marginBottom: '20px',
        '*': {
            // marginRight: '5px',
        },
    },
    middleRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: '20px',
        marginLeft: '320px',
    },
    link: {
        fontWeight: 500,
        color: '#FFFFFFB2',
        marginLeft: "5px",
        marginRight: "5px",
        "&:hover": {
            color: '#FFFFFF',
            cursor: 'pointer',
        },
    },
    webButton: {
        marginRight: '10px',
        height: '30px',
        backgroundColor: 'lightblue.main',
        "&.text": {
            color: 'lightblue.main'
        }
    },
}