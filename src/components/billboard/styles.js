import { withStyles } from '@material-ui/core/';
import { deepOrange } from '@material-ui/core/colors';

const calendarBorder = '2px solid rgba(255, 255, 255,.26)';

export const withIndexStyle = withStyles(theme => ({
  root: {
    height: theme.spacing.unit * 40,
    background: theme.palette.grey[200],
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing.unit * 36,
    },
  },
  flyer: {
    height: '100%',
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    whiteSpace: 'nowrap',
  },
  content: {
    padding: theme.spacing.unit * 2,
  },
  timePlace: {
    height: '100%',
    display: 'inline-flex',
    paddingTop: theme.spacing.unit * 2,
  },
  listItemText: {
    fontSize: theme.typography.subheading.fontSize,
  },
  calendar: {
    borderRight: `2px solid ${theme.palette.grey[500]}`,
    paddingRight: theme.spacing.unit,
  },
  actions: {
    background: deepOrange[100],
    height: theme.spacing.unit * 4,
  },
}));
