import Header from "@components/layoutCommonts/Header/Header";
import React from "react";

function AppLayout({ children }: any) {
    return (
        <div>
            <Header />
            {children}
        </div>
    );
}

export default AppLayout;
