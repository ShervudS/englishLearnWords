import React from 'react'
import { Link } from 'atomic-router-react'
import { ROUTE_PATH } from '_assets/constants'
import { HeaderContainer, HeaderWrapper, NavList } from '_widgets/Header/Header.styles'
import { Switcher } from '_entities/Switcher'

export const Header: React.FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <NavList>
                    <Link to={ROUTE_PATH.HOME}>Home</Link>
                    <Link to={ROUTE_PATH.DELIVERY}>Delivery</Link>
                    <Link to={ROUTE_PATH.ABOUT}>About</Link>
                    <Link to={ROUTE_PATH.PRICE}>Price</Link>
                    <Link to={ROUTE_PATH.CONTACTS}>Contacts</Link>
                </NavList>

                <Switcher value={false} onAction={() => {
                }} startLabel='start' endLabel='end' />
            </HeaderContainer>
        </HeaderWrapper>)
}
