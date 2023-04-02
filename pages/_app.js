import {Fragment} from "react";

import '../style/Global.css';

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;