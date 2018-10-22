import { withStyles } from '@material-ui/core/';
import { deepOrange } from '@material-ui/core/colors';

const calendarBorder = '2px solid rgba(255, 255, 255,.26)';

export const withIndexStyle = withStyles(theme => ({
  root: {
    background: theme.palette.grey[200],
  },
  flyer: {
    minHeight: theme.spacing.unit * 34,
    width: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    textAlign: 'center',
    padding: theme.spacing.unit * 8,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing.unit * 24,
    }
  },
  contentWrap: {
    width: '100%',
  },
  content: {
    padding: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit,
  },
  title: {
    fontSize: theme.typography.display1.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.headline.fontSize,
    },
  },
  timePlace: {
    height: '100%',
    display: 'inline-flex',
  },
  listItemText: {
    fontSize: theme.typography.subheading.fontSize,
  },
  inlineListItemText: {
    fontSize: theme.typography.subheading.fontSize,
    display: 'inherit',
    justifyContent: 'space-between',
  },
  calendar: {
    borderRight: `2px solid ${theme.palette.grey[500]}`,
    paddingRight: theme.spacing.unit,
    marginTop: theme.spacing.unit * 2,
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: theme.spacing.unit * 2,
    paddingTop: theme.spacing.unit,
  },
  people: {
    paddingTop: theme.spacing.unit,
    fontSize: theme.typography.title.fontSize,
    textShadow: `1px 1px 1px ${theme.palette.grey[300]}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subheading.fontSize,
    },
  },
  progress: {
    margin: theme.spacing.unit * 2,
  }
}));
