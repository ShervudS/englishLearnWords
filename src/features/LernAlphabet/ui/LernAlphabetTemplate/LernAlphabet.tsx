import React from 'react'
import { useStore } from 'effector-react'
import { $lernAplhaberStore } from '../../models'
import { StartLernAlphabet } from '../../features'
import { FormOfStady } from '../../features/FormOfStady/FormOfStady'
import { Summary } from '../../features/Summary/Summary'
import { TConfigLernAlphabetStep } from '../../types'
import * as Styled from './LernAlphabet.styles'

interface ILernAlphabet {}

export const LernAlphabet: React.FunctionComponent<ILernAlphabet> = () => {
    const { step } = useStore($lernAplhaberStore)

    const configLernAlphabetStep: TConfigLernAlphabetStep = {
        setting: <StartLernAlphabet />,
        lern: <FormOfStady />,
        end: <Summary />,
    }
    return (
        <Styled.LernAlphaberWrapper>
            <div>{step}</div>

            <div>{configLernAlphabetStep[step]}</div>
        </Styled.LernAlphaberWrapper>
    )
}
