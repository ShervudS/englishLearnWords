import React from "react";
import {createRoute} from "atomic-router";

export const notFoundRoute = createRoute();

export const NotFound: React.FunctionComponent = () => {
    return (
        <div>Ошибка. Страница не найдена</div>
    )
}
