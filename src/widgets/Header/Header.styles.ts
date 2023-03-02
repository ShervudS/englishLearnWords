import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    padding: 2rem 0;
    box-shadow: rgba(0, 0, 0, 0.1) 0 1rem 1.5rem -0.3rem,
        rgba(0, 0, 0, 0.05) 0 0.4rem 0.6rem -0.2rem;
    background-color: var(--dark-color);
`

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 192rem;
    margin: 0 auto;
    padding: 0 2rem;
`

export const NavList = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: var(--white-color);
`

export const LoginButton = styled.button`
    padding: .5rem 1.5rem;
    border: 1px solid var(--brand-color);
    border-radius: 1rem;
    background-color: var(--brand-color);
    transition: background-color 0.2s ease-in;

    &:hover {
        background-color: var(--white-color);
    }
`

export const UserSettings = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: var(--white-color);
`
