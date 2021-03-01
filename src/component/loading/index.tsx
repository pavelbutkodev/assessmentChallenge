import React, { FC } from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: '100%',
      alignItems: 'center',
      '& > * + *': {
        marginLeft: theme.spacing(2),
      },
    },
  }),
);

const CircularIndeterminate: FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CircularProgress/>
    </div>
  );
}

export default CircularIndeterminate;
