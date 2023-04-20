import React from "react";
import {ComboBoxComponent} from "../components/ComboBox/ComboBox.component";

export const VATVIESPage = () => {
    return (
        <React.Fragment>
            <div className={"vat-vies-page-wrapper"}>
                <h2 className={"subpage-title"}>Sprawdzanie aktualnych danych vat-vies</h2>
                <ComboBoxComponent/>

            </div>
        </React.Fragment>)
}