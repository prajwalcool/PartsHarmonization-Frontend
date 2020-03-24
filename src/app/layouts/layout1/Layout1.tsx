import React, { useContext, FunctionComponent } from 'react';
import { renderRoutes, RouteConfig } from 'react-router-config';
import AppContext from 'app/AppContext';
// import ToolbarLayout1 from './components/ToolbarLayout1';
// import 'simplebar/dist/simplebar.min.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import {
  Box,
  // useTheme,
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // position: 'relative',
      // display: 'flex',
      // flexDirection: 'column',
      // width: '100%',
      // height: '100%'
    },
    content: {
      // display: 'flex',
      // overflow: 'auto',
      // flex: '1 1 auto',
      // flexDirection: 'column',
      // width: '100%',
      // '-webkit-overflow-scrolling': 'touch',
      // zIndex: 4
    }
  })
);

type Layout1Props = {
  classes: {};
};

const Layout1: FunctionComponent<Layout1Props> = props => {
  const appContext = useContext(AppContext);
  // const theme = useTheme();
  const classes = useStyles(props);

  const { routes }: RouteConfig = appContext;
  return (
    <div className={clsx('flex-1 flex', classes.root)}>
      {/* <ToolbarLayout1 /> */}
      <div className="flex-auto">
        {renderRoutes(routes)}
        {props.children}
      </div>
    </div>
  );
};

export default Layout1;
