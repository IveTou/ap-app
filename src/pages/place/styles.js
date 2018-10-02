  import { withStyles } from '@material-ui/core/styles';
  import { deepOrange } from '@material-ui/core/colors';

  export const withIndexStyle = withStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: theme.spacing.unit * 137,
      padding: `0 ${theme.spacing.unit * 3}px`,
      margin: '0 auto',
      display: 'grid',
      alignItems: 'center',
      marginBottom: theme.spacing.unit * 8,
    },
    header: {
      display: 'inline-flex',
      alignItems: 'center',
      flexGrow: 1,
      paddingTop: theme.spacing.unit * 5,
      paddingBottom: theme.spacing.unit * 2,
      [theme.breakpoints.down('xs')]: {
        paddingTop: theme.spacing.unit * 2,
        paddingBottom: theme.spacing.unit,
        flexDirection: 'row-reverse',
      }
    },
    headerInfo: {
      flexGrow: 1,
    },
    avatar: {
      margin: theme.spacing.unit,
      marginTop: theme.spacing.unit * -7,
      width: theme.spacing.unit * 15,
      height: theme.spacing.unit * 15,
      [theme.breakpoints.down('xs')]: {
        marginTop: theme.spacing.unit * -12,
        width: theme.spacing.unit * 9,
        height: theme.spacing.unit * 9,
      },
    },
    stats: {
      display: 'flex',
      alignItems: 'center',
    },
    followers: {
      marginLeft: theme.spacing.unit * 2,
    },
    action: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: theme.spacing.unit,
      [theme.breakpoints.down('sm')]: {
        justifyContent: 'start',
      },
    },
    title: {
      fontSize: theme.typography.display2.fontSize,
      [theme.breakpoints.down('sm')]: {
        fontSize: theme.typography.display1.fontSize,
      }
    },
    button: {
      margin: theme.spacing.unit,
      marginLeft: theme.spacing.unit * 2,
    },
    tabBar: {
      backgroundColor: 'transparent',
      boxShadow: theme.shadows[0],
    },
  }));

  export const withMainStyle = withStyles(theme => ({
    root: {
      overflow: 'hidden',
      paddingTop: theme.spacing.unit * 2,
    },
    title: {
      padding: `0 ${theme.spacing.unit}px`,
    },
    listItem: {
      padding: 0,
      paddingBottom: theme.spacing.unit,
    },
    listItemText: {
      paddingLeft: theme.spacing.unit,
    },
    avatar: {
      height: theme.spacing.unit * 4,
      width: theme.spacing.unit * 4,
    },
    map: {
      padding: theme.spacing.unit,
      paddingRight: 0,
    },
    comments: {
      marginTop: theme.spacing.unit * 5,
    },
    tagCloud: {
      paddingTop: theme.spacing.unit * 2,
      textAlign: 'center',
      fontFamily: 'sans-serif',
    },
}));

export const withGalleryStyle = withStyles(theme => ({
  root: {
    overflow: 'hidden',
    paddingTop: theme.spacing.unit * 2,
  },
  grid: {
    width: '100%',
    height: theme.spacing.unit * 50,
    justifyContent: 'center',
    '&::-webkit-scrollbar': {
      width: theme.spacing.unit,
    },
    '&::-webkit-scrollbar-thumb': {
      background: deepOrange[500],
    },
  },
  tile: {
    marginBottom: theme.spacing.unit * 2,
  },
}));

export const withEventsStyle = withStyles(theme => ({
  root: {
    width: '100%',
    position: 'absolute',
    overflow: 'hidden',
    paddingTop: theme.spacing.unit * 2,
    display: 'inline-flex',
  },
  title: {
    width: '100%',
    display: 'inline-flex',
    alignItems: 'center',
  },
  button: {
    margin: `0 ${theme.spacing.unit *2}px`,
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    }
  },
  cardsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    justifyContent: 'center',
    paddingTop: theme.spacing.unit * 4,
  },
  tile: {
    marginBottom: theme.spacing.unit * 2,
  },
  calendar: {
    margin: `${theme.spacing.unit * 5}px auto`,
    width: 'unset',
    maxWidth: theme.spacing.unit * 38,
    maxHeight: theme.spacing.unit * 38,
    padding: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    }
  },
  calendarPop: {
    display: 'block',
    margin: 0,
  },
}));
