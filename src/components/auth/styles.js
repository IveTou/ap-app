import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    margin: '0 auto',
    padding: theme.spacing.unit * 2,
  },
  header: {
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  rootForm: {
    display: 'inline-grid',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: theme.spacing.unit * 33,
  },
  footer: {
    marginTop: theme.spacing.unit * 3,
    textAlign: 'center',
  },
  footerButtons: {
    justifyContent: 'space-between',
    display: 'flex',
    flexDirection: 'row-reverse',
  },
  button: {
    margin: theme.spacing.unit,
  },
}));
