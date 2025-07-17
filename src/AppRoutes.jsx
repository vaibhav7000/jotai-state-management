import { Routes, Route } from "react-router";
import Home from "./Home";
import Dashboard from "./Dashboard";
import UserInfo from "./UserInfo";
import { Suspense } from "react";

export default function AppRoutes() {

    return (
        <Routes>
            <Route path="" element={<Home/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/userinfo" element={<Suspense fallback={<div>Loading</div>}><UserInfo/></Suspense>} />
        </Routes>
    )
}