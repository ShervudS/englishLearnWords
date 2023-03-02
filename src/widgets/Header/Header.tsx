import React, { useState } from 'react'
import { Link } from 'atomic-router-react'
import { useEvent } from 'effector-react'
import { Switcher } from '_shared//Switcher'
import { UserPreview } from '_features/UserPreview'
import { ROUTE_PATH } from '_assets/constants'
import { onOpenModalEvent } from '_widgets/ModalTemplate/models'
import * as Styled from './Header.styles'

export const Header: React.FunctionComponent = () => {
    const [loginned, setLoginned] = useState(true)
    const onOpenModalAuth = useEvent(onOpenModalEvent)

    const onAuth = () => {
        onOpenModalAuth({
            isOpen: true,
            modalConfig: { modalBodyComponentsName: 'auth' },
        })
    }

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
                    <Switcher value={false} onAction={() => {}} />

                    {!loginned ? (
                        <Styled.LoginButton onClick={onAuth}>
                            Авторизоваться
                        </Styled.LoginButton>
                    ) : (
                        <UserPreview />
                    )}
                </Styled.UserSettings>
            </Styled.HeaderContainer>
        </Styled.HeaderWrapper>
    )
}
