import React, {useState} from 'react';
import {createRoute} from "atomic-router";

export const contactsRoute = createRoute()

interface IContacts {

};

export const Contacts: React.FunctionComponent<IContacts> = () => {

    const [test, setTest] = useState<string>("");
    return (
        <div>
            Contacts page
        </div>
    );
};
