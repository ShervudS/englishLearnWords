import {createHistoryRouter} from 'atomic-router'
import {createBrowserHistory} from 'history'

import {homeRoute} from '_pages/Home/Home'
import {deliveryRoute} from '_pages/Delivery'
import {notFoundRoute} from "_pages/NotFound";
import {contactsRoute} from "_pages/Contacts";
import {aboutRoute} from "_pages/About";
import {priceRoute} from "_pages/Price";
import { wordsRoute } from '_pages/Words/Words'
import {ROUTE_PATH} from "_assets/constants";

const routes = [
    {path: ROUTE_PATH.HOME, route: homeRoute},
    {path: ROUTE_PATH.CONTACTS, route: contactsRoute},
    {path: ROUTE_PATH.ABOUT, route: aboutRoute},
    {path: ROUTE_PATH.PRICE, route: priceRoute},
    {path: ROUTE_PATH.DELIVERY, route: deliveryRoute},
    {path: ROUTE_PATH.WORDS, route: wordsRoute},
]

// 2. Create router
export const router = createHistoryRouter({
    routes,
    notFoundRoute
})

// 3. Create history
const history = createBrowserHistory()

// 4. Attach it to router
router.setHistory(history)
