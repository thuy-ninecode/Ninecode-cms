import React from "react";
import { Route, Routes } from "react-router";
import routes from "./const";
import RouteLayout from "./routerLayout";
const AppRouter = () => {
    return (
        <Routes>
            {routes.map(
                ({ component, layout, path, isPrivate, ...rest }, index) => {
                    return (
                        <Route
                            key={index}
                            path={path}
                            element={
                                <RouteLayout
                                    component={component}
                                    layout={layout}
                                    path={path}
                                    isPrivate={isPrivate}
                                    {...rest}
                                />
                            }
                        />
                    );
                },
            )}
        </Routes>
    );
};
export default AppRouter;
