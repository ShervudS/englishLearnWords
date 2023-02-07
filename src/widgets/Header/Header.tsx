import React from 'react'
import { Link } from 'atomic-router-react'
import { Switcher } from '_entities/Switcher'
import { UserPreview } from '_features/UserPreview'
import { ROUTE_PATH } from '_assets/constants'
import * as Styled from './Header.styles'

export const Header: React.FunctionComponent = () => {

    return (
        <Styled.HeaderWrapper>
            <Styled.HeaderContainer>
                <Styled.NavList>
                    <Link to={ROUTE_PATH.HOME}>Home</Link>
                    <Link to={ROUTE_PATH.DELIVERY}>Delivery</Link>
                    <Link to={ROUTE_PATH.ABOUT}>About</Link>
                    <Link to={ROUTE_PATH.PRICE}>Price</Link>
                    <Link to={ROUTE_PATH.CONTACTS}>Contacts</Link>
                    <Link to={ROUTE_PATH.WORDS}>Words</Link>
                </Styled.NavList>

                <Styled.UserSettings>
                    <Switcher value={false} onAction={() => {
                    }} />
                    <div>
                        <div>Блок авторизации</div>
                        <button>Авторизоваться</button>
                    </div>
                    <UserPreview />
                </Styled.UserSettings>
            </Styled.HeaderContainer>
        </Styled.HeaderWrapper>)
}
