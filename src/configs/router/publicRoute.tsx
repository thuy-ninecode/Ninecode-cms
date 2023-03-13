import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

// import { getAuth } from '@/selectors'

interface PublicRouteProps {
    component: any;
    path: string;
    layout: any;
    authenticatedRedirect: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
    component,
    path,
    layout,
    authenticatedRedirect,
    ...rest
}) => {
    const { loginReducer } = useSelector((state: any) => ({
        loginReducer: state.loginReducer,
    }));
    const isAuthenticated = loginReducer
        ?.get("payload")
        ?.get("result")
        ?.get("token");
    return !(isAuthenticated && authenticatedRedirect) ? (
        React.createElement(layout, {}, React.createElement(component, {}))
    ) : (
        <Navigate to="/" />
    );
};

export default PublicRoute;
