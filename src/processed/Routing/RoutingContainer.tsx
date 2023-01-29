import React from 'react'
import {Route, RouterProvider} from 'atomic-router-react'
import {Delivery, deliveryRoute} from '_pages/Delivery'
import {Home, homeRoute} from '_pages/Home/Home'
import {Price, priceRoute} from "_pages/Price";
import {About, aboutRoute} from "_pages/About";
import {Contacts, contactsRoute} from "_pages/Contacts";
import {router} from '.'

export const RoutingContainer = () => {
    return (
        <RouterProvider router={router}>
            <Route route={homeRoute} view={Home}/>
            <Route route={deliveryRoute} view={Delivery}/>
            <Route route={aboutRoute} view={About}/>
            <Route route={priceRoute} view={Price}/>
            <Route route={contactsRoute} view={Contacts}/>
        </RouterProvider>
    )
}
