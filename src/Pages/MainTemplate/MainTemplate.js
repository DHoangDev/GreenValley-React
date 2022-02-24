import React from 'react';
import { Route } from "react-router-dom";

export default function MainTemplate(props) {
    return (
        <Route exact path={props.path} render={(propsRoute) => {
            return (
                <div style={{ backgroundColor: "#1B2631" }}>
                    <Header {...propsRoute} />
                    <props.component {...propsRoute} />
                    <Footer />
                </div>
            )
        }} />
    )
}
