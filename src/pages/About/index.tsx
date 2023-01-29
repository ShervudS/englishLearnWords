import React from 'react';
import {createRoute} from "atomic-router";

export const aboutRoute = createRoute()

interface IAbout {

};

export const About: React.FunctionComponent<IAbout> = () => {
    return (
        <div>
            About
        </div>
    );
};
