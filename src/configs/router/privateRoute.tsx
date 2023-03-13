import React from "react";
// import { useSelector } from 'react-redux'
import { Navigate } from "react-router-dom";

// import { getAuth } from '@/selectors'

interface PrivateRouteProps {
    component: any;
    path: string;
    layout: any;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
    component,
    path,
    layout,
    ...rest
}) => {
    // const { isAuthenticated } = useSelector(getAuth)
    // const { loginReducer } = useSelector((state: any) => ({
    //   loginReducer: state.loginReducer,
    // }));
    const isAuthenticated = false;
    //   loginReducer?.get("payload")?.get("tokens") || getSession('sid');

    return isAuthenticated ? (
        React.createElement(
            layout,
            {},
            React.createElement(component, { ...rest }),
        )
    ) : (
        <Navigate to="/login" />
    );
};

export default PrivateRoute;
