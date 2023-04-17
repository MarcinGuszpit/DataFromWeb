import React from "react";
import './PageHeader.component.scss';
export const PageHeaderComponent = () => {
    return <React.Fragment>
        <div className={"page-header"}>
            <div className={"icon-wrapper"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16">
                    <path
                        d="M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z"/>
                    <path
                        d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
            </div>
            <div className={"page-description"}>
                <h1 className={"page-title"}>Dane z sieci</h1>
                <p className={"page-description"}>Rożne informacje przydatne dla firmy</p>
            </div>

        </div>
    </React.Fragment>
}