import React from 'react'
import { createRoute } from 'atomic-router'
import { PageContainer } from '_shared//PageContainer'
import { LernAlphabet } from '_features/LernAlphabet/ui/LernAlphabetTemplate/LernAlphabet'
import * as Styled from './Words.styles'

interface IWords {
}

export const wordsRoute = createRoute()

export const Words: React.FunctionComponent<IWords> = () => {
    return (
        <Styled.WordsWrapper>
            <PageContainer>
                <Styled.PageTitle>Страница с изучением слов</Styled.PageTitle>
                <LernAlphabet />
            </PageContainer>
        </Styled.WordsWrapper>
    )
}
