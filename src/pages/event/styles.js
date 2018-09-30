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
}));
