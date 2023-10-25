import React, { FC, Suspense } from "react";
import { Navigate, Routes, Route } from "react-router-dom";

const PrivateRoute: FC<{ element: any }> = ({ element: Element }) => {
  return true ? (
    <Suspense fallback={<div />}>
      <div><Element /></div>
    </Suspense>
  ) : (
    <Navigate to={""} />
  );
};

const SundaysPage = React.lazy(() => import("app/sundays"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={"/sundays/*"} element={<PrivateRoute element={SundaysPage} />} />

      <Route path='*' element={<Navigate to="/sundays" />} />
    </Routes>
  );
};

export default AppRoutes;
