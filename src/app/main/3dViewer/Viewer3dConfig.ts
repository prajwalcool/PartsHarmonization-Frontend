import Viewer3d from './Viewer3d';
// import { authRoles } from "app/auth";

export const Viewer3dConfig = {
  settings: {
    layout: {
      config: {}
    }
  },
  // auth: authRoles.user,
  routes: [
    {
      path: '/viewer3d',
      component: Viewer3d
    }
  ]
};

/**
 * Lazy load Example
 */
/*
import React from 'react';

export const ExampleConfig = {
    settings: {
        layout: {
            config: {}
        }
    },
    routes  : [
        {
            path     : '/example',
            component: React.lazy(() => import('./Example'))
        }
    ]
};
*/
