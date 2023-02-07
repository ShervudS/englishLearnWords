import React from 'react'
import { createRoute } from 'atomic-router'
import { useEvent } from 'effector-react/effector-react.umd'
import { toggleModalVisible } from '_widgets/ModalTemplate/store'

export const homeRoute = createRoute()

export const Home: React.FunctionComponent = () => {
    const onClickUserButton = useEvent(toggleModalVisible)

    const onOpenDrawer = () => {
        console.log('sdfdsg')
        onClickUserButton()
    }

    return (
        <div>
            Home
            <button onClick={onOpenDrawer}>открыть Дравер</button>
        </div>
    )
}
