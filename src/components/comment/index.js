import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/pt-br';
import { Link } from 'react-router-dom';
import { Avatar, ListItem, ListItemText, Typography } from '@material-ui/core/';

import { withIndexStyle } from './styles';

moment.locale('pt-br');

const Comment = ({ owner, comment, time, classes }) => {
  const { name, avatar, profileLink } = owner;

  return (
    <ListItem className={classes.root}>
      <Link to={profileLink} className={classes.avatar}><Avatar alt={name} src={avatar} /></Link>
      <ListItemText
        primary={
          <Link to={profileLink} className={classes.name}>
            <Typography variant="body2">{name}</Typography>
          </Link>
        }
        secondary={comment}
      />
      <Typography variant="caption">{moment(time).format('LT')}</Typography>
    </ListItem>
  );
};

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  owner: PropTypes.object,
};

export default withIndexStyle(Comment);
