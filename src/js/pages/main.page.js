import React from "react";
import {MenuBarComponent} from "../components/MenuBar/MenuBar.component";
import {PageHeaderComponent} from "../components/PageHeader/PageHeader.component";
import {Outlet} from "react-router-dom";

export const MainPage = () => {
    return <React.Fragment>
        <PageHeaderComponent/>
        <MenuBarComponent />
        <Outlet/>
    </React.Fragment>
}