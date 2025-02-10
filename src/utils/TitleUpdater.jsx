import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {routes} from "../config";

function TitleUpdater() {
    const location = useLocation();

    useEffect(() => {
        const route = routes.find(r => r.path === location.pathname);
        document.title = route ? route.title : "Позитивус";
    }, [location]);

    return null;
}

export default TitleUpdater;