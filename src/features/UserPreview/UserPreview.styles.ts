import styled from 'styled-components'

export const UserPreviewWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    color: var(--white-color);
`

export const UserPhoto = styled.div`
    overflow: hidden;
    width: 3rem;
    height: 3rem;
    border: 1px solid var(--brand-color);
    border-radius: 50%;

    & > img {
        object-fit: cover;
    }
`

export const UserIconButton = styled.button`
    width: 3rem;
    color: var(--brand-color);
`
