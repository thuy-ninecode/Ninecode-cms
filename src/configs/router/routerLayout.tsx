import React from "react";
import PrivateRoute from "./privateRoute";
import PublicRoute from "./publicRoute";
interface IRouteLayoutProps {
    component: any;
    layout: any;
    path: string;
    isPrivate: boolean;
    authenticatedRedirect: boolean;
    rest?: any;
}
function RouteLayout(props: IRouteLayoutProps) {
    const {
        component,
        layout,
        path,
        isPrivate,
        authenticatedRedirect,
        ...rest
    } = props;
    return isPrivate ? (
        <PrivateRoute
            component={component}
            path={path}
            layout={layout}
            {...rest}
        />
    ) : (
        <PublicRoute
            component={component}
            path={path}
            layout={layout}
            authenticatedRedirect={authenticatedRedirect}
            {...rest}
        />
    );
}
export default RouteLayout;
