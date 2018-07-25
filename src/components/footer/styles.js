import { withStyles } from '@material-ui/core/styles';
import { deepOrange, orange } from '@material-ui/core/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    color: theme.palette.grey[600],
    backgroundColor: theme.palette.grey[100],
    padding: theme.spacing.unit * 7,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing.unit * 10,
    },
    paddingTop: theme.spacing.unit * 7,
    paddingBottom: theme.spacing.unit * 3,
  },
  container: {
    margin: '0 auto',
    maxWidth: theme.spacing.unit * 130,
    justifyContent: 'center',
  },
  column: {
    minWidth: 'max-content',
  },
  title: {
    marginBottom: theme.spacing.unit * 2,
  },
  listItem: {
    justifyContent: 'center',
    cursor: 'pointer',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
}));
