import React from 'react';
import { Redirect } from 'react-router-dom';
import { AppUtils } from '@app';
import { DashBoardConfig } from 'app/main/dashboard/DashBoardConfig';
import { Viewer3dConfig } from 'app/main/3dViewer/Viewer3dConfig';
const routeConfigs = [DashBoardConfig, Viewer3dConfig];

const routes = [
  ...AppUtils.generateRoutesFromConfigs(routeConfigs),
  {
    path: '/',
    component: () => <Redirect to="/dashboard" />
  }
];

export default routes;
