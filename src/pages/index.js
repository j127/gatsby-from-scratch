import React from "react";

import Layout from "../components/layout";
import * as styles from "./index.module.scss";

const IndexPage = () => {
    return (
        <Layout>
            <h1>Hello World</h1>
            <p className={styles.bluish}>
                Sit ea sit excepturi laudantium iste? Adipisci alias labore
                consequuntur?
            </p>
            <p>
                Sit vero sit recusandae enim ullam. Minima laborum officia
                placeat quis nostrum! Fugiat laboriosam ipsam eum voluptatibus
                aliquid. Vel sequi blanditiis iste optio ut quis Dolore eligendi
                dicta nobis quia.
            </p>
        </Layout>
    );
};

export default IndexPage;
