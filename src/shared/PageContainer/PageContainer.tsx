import React from 'react'
import { IPageContainer } from './PageContainer.types'
import * as Styled from './PageContainer.styles'

export const PageContainer: React.FunctionComponent<IPageContainer> = ({
    children,
}) => (
    <Styled.PageContainerWrapper>
        <Styled.PageContainerInner>{children}</Styled.PageContainerInner>
    </Styled.PageContainerWrapper>
)