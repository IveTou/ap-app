import { withStyles } from '@material-ui/core/';

const calendarBorder = '2px solid rgba(255, 255, 255,.26)';

export const withIndexStyle = withStyles(theme => ({
  wrapper: {
    backgroundColor: theme.palette.primary.light,
    width: '100%',
    height: theme.spacing.unit * 30,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    whiteSpace: 'nowrap',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
      height: theme.spacing.unit * 20,
    },
  },
  overlay: {
    height: '100%',
    width: theme.spacing.unit * 34,
    backgroundColor: theme.palette.action.disabled,
    color: theme.palette.grey[50],
    padding: theme.spacing.unit * 2,
    display: 'inline-block',
    float: 'right',
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
  description: {
    overflow: 'hidden',
    whiteSpace: 'normal',
    maxHeight: '50%',
    padding: theme.spacing.unit,
    fontSize: theme.typography.title.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subheading.fontSize,
    },
  },
  calendar: {
    float: 'left',
    marginRight: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    borderRight: calendarBorder,
  },
  timePlace: {
    paddingTop: theme.spacing.unit,
  },
  icon: {
    float: 'left',
    marginRight: theme.spacing.unit / 2,
  },
}));
