import React from 'react';
import {createRoute} from "atomic-router";

export const priceRoute = createRoute()

interface IPrice {

};

export const Price: React.FunctionComponent<IPrice> = () => {
    return (
        <div>
            Price
        </div>
    );
};
