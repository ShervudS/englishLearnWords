import React from 'react'
import { useEvent } from 'effector-react/effector-react.umd'
import { changeCurrentStep } from '../../models'
import * as Styled from './StartLernAlphabet.styles'
import { FormTemplate } from '_entities/FormTemplate'
import { configSettingsLernAlphabet } from '../../config'

interface IStartLernAlphabet {}

export const StartLernAlphabet: React.FunctionComponent<
    IStartLernAlphabet
> = () => {
    const onChangeStep = useEvent(changeCurrentStep)

    const onStartLern = () => {
        onChangeStep({ step: 'lern' })
    }

    return (
        <Styled.startLernAlphabetWrapper>
            Компонент выбора изучения алфавита
            <div>Нативный алфавит</div>
            <div>Алфавит для изучения</div>
            <div>
                <p>Настройки</p>

                <p>Перевод с нативного</p>
                <p>Перевод на нативный</p>
            </div>
            <FormTemplate formConfig={configSettingsLernAlphabet} />
            <button onClick={onStartLern}>Начать </button>
        </Styled.startLernAlphabetWrapper>
    )
}
