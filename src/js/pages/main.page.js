import React, {useRef} from "react";
import {MenuBarComponent} from "../components/MenuBar/MenuBar.component";
import {PageHeaderComponent} from "../components/PageHeader/PageHeader.component";
import {Outlet} from "react-router-dom";
import {ErrorMessageComponent} from "../components/ErrorMessage/ErrorMessage.component";

export const MainPage = () => {
    return <React.Fragment>
        <PageHeaderComponent/>
        <MenuBarComponent />
        <ErrorMessageComponent></ErrorMessageComponent>
        <Outlet/>
    </React.Fragment>
}