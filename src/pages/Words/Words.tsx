import React from 'react'
import * as Styled from './Words.styles'
import { createRoute } from 'atomic-router'
import { PageContainer } from '_entities/PageContainer'

interface IWords {}

export const wordsRoute = createRoute()

export const Words: React.FunctionComponent<IWords> = () => {
    return (
        <Styled.WordsWrapper>
            <PageContainer>страница с изучением слов</PageContainer>
        </Styled.WordsWrapper>
    )
}
