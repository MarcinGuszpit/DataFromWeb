import React from "react";

import './error.page.scss';
import {Link, useRouteError} from "react-router-dom";

export const ErrorPage = () => {
    const error = useRouteError();
    return (<React.Fragment>
        <div className={"error-page"}>
            <div className={"icon-wrapper"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"
                     className="bi bi-exclamation-octagon-fill" viewBox="0 0 16 16">
                    <path
                        d="M11.46.146A.5.5 0 0 0 11.107 0H4.893a.5.5 0 0 0-.353.146L.146 4.54A.5.5 0 0 0 0 4.893v6.214a.5.5 0 0 0 .146.353l4.394 4.394a.5.5 0 0 0 .353.146h6.214a.5.5 0 0 0 .353-.146l4.394-4.394a.5.5 0 0 0 .146-.353V4.893a.5.5 0 0 0-.146-.353L11.46.146zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
            </div>
            <div className={"error-content"}>
                <h3 className={"error-title"}>Wystąpił błąd!</h3>
                <p className={"error-description"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Delectus deleniti dignissimos doloremque enim fugit incidunt maiores, modi necessitatibus numquam
                    perspiciatis,
                    quaerat, quam qui quo reiciendis totam veritatis voluptates. Modi, vitae.</p>
                <Link to={"/"} className={'error-link'}>Powrót do strony głównej</Link>
            </div>
        </div>
    </React.Fragment>)
}