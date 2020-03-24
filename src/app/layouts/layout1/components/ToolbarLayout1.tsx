import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import UserMenu from 'app/layouts/sharedComponents/UserMenu';
import { CssBaseline } from '@material-ui/core';
import { HideOnScroll } from '@app';

const ToolbarLayout1: FunctionComponent = props => {
  console.log(props);

  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        {/* <CollapseOnScroll component={AppBar} threshold={400}> */}
        <AppBar>
          <Toolbar>
            <div className="flex-auto flex flex-start ">
              <h1 className=" text-center font-pecita">PH</h1>
              <div className=" flex   ">
                <button className="hover:bg-white hover:text-pink-600 my-5 mx-3 px-4  rounded border ">
                  Home
                </button>
                <button className="hover:bg-white hover:text-pink-600 my-5 mx-3  px-4 rounded border ">
                  Home
                </button>
                <button className="hover:bg-white hover:text-pink-600 my-5 mx-3  px-4 rounded border ">
                  Home
                </button>
                <button className="hover:bg-white hover:text-pink-600 my-5 mx-3  px-4 rounded border ">
                  Home
                </button>
              </div>
            </div>

            <div className="align-self-end">
              <UserMenu />
            </div>
          </Toolbar>
        </AppBar>
        {/* </CollapseOnScroll> */}
      </HideOnScroll>
    </>
  );
};

export default ToolbarLayout1;
