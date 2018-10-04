import { withStyles } from '@material-ui/core/';

const calendarBorder = '2px solid rgba(255, 255, 255,.26)';

export const withIndexStyle = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.spacing.unit / 2,
    width: '100%',
    height: theme.spacing.unit * 40,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    whiteSpace: 'nowrap',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
    },
  },
  miniRoot: {
    height: theme.spacing.unit * 30,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing.unit * 20,
    },
  },
  overlay: {
    height: '100%',
    minWidth: '60%',
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.action.active,
    color: theme.palette.grey[50],
    padding: theme.spacing.unit * 2,
    display: 'inline-block',
    float: 'right',
  },
  miniOverlay : {
    width: '60%',
    padding: theme.spacing.unit,
  },
  title: {
    overflow: 'hidden',
    whiteSpace: 'normal',
    maxHeight: '50%',
    fontSize: theme.typography.display1.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.headline.fontSize,
    },
  },
  subtitle: {
    overflow: 'hidden',
    whiteSpace: 'normal',
    maxHeight: '100%',
    padding: theme.spacing.unit,
    fontSize: theme.typography.title.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subheading.fontSize,
    },
  },
  miniSubtitle :{
    fontWeight: theme.typography.fontWeightRegular,
  },
  placeTime: {
    display: 'inline-flex',
  },
  calendar: {
    float: 'left',
    marginRight: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingTop: theme.spacing.unit,
    borderRight: calendarBorder,
  },
  timePlace: {
    paddingTop: theme.spacing.unit,
  },
  avatar: {
    marginRight: theme.spacing.unit,
  },
  list: {
    display: 'flow-root',
    paddingTop: 0,
  },
  listItem: {
    padding: theme.spacing.unit,
    paddingTop: 0,
  },
  link: {
    textDecorationLine: 'inherit',
    color: theme.palette.common.white,
  },
  action: {
    paddingTop: theme.spacing.unit * 2,
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'space-between',
    },
  },
  button: {
    border: `1px solid ${theme.palette.common.white}`,
  },
}));
