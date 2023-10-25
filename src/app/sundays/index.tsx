import React, { FC } from "react";

import SundaysRoutes from "./sunsays.routes";
import PageHeaderComp from "components/header.comp";

const SundaysPage: FC = () => {
    return (
        <>
            <PageHeaderComp />
            <SundaysRoutes />
        </>
    );
};

export default SundaysPage;