import React from 'react'
import * as Styled from './LetterCard.styles'

interface ILetterCard {}

export const LetterCard: React.FunctionComponent<ILetterCard> = () => {
    return (
        <Styled.LetterCardWrapper>
            Карточка с изучемой буквой при изучении алфавита
        </Styled.LetterCardWrapper>
    )
}
