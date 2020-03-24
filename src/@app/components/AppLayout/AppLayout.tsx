import React, { FunctionComponent } from 'react';
import { withRouter } from 'react-router-dom';
import { AppLayouts } from '@app';
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // backgroundColor: theme.palette.background.default,
      // color: theme.palette.text.primary
    }
  })
);

const AppLayout: FunctionComponent = props => {
  const classes = useStyles(props);
  const Layout = AppLayouts['Layout1'];
  return <Layout classes={{ root: classes.root }} {...props} />;
};

export default withRouter(React.memo(AppLayout));
