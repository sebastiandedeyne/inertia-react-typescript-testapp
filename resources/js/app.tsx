import * as React from "react";
import Inertia from "inertia-react";
import { render } from "react-dom";

const app = document.getElementById("app");

if (app) {
    render(
        <Inertia
            initialPage={JSON.parse(app.dataset.page as string)}
            resolveComponent={async component => {
                return (await import(`./pages/${component}`)).default;
            }}
        />,
        app
    );
}
