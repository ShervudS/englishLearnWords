import styled from 'styled-components'

export const UserPreviewWrapper = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1rem;
`

export const UserPhoto = styled.div`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    overflow: hidden;

    & > img {
        object-fit: cover;
    }
`

export const UserIconButton = styled.button`
    width: 3rem;
`
