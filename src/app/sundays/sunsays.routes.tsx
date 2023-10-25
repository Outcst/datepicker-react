import React, { FC, PropsWithChildren, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const Suspended: FC<PropsWithChildren & { element: any }> = ({ element: Element }) => {
    return (
        <Suspense fallback={<div />}>
            <Element />
        </Suspense>
    );
};

const SundaysPage = React.lazy(() => import("app/sundays/sundays.page"));
const UpdatedSundaysPage = React.lazy(() => import("app/sundays/update-sundays.page"));

const SundaysRoutes: FC = () => {
    return (
        <Routes>
            <Route path={"/"} element={<Suspended element={SundaysPage} />} />
            <Route path={"/updated"} element={<Suspended element={UpdatedSundaysPage} />} />

            {/* DEFAULT */}
            <Route path='*' element={<Navigate to="/sundays" />} />
        </Routes>
    );
};

export default SundaysRoutes;
