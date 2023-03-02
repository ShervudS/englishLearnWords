import React from 'react'
import { createRoute } from 'atomic-router'
import { useEvent } from 'effector-react/effector-react.umd'
import { onOpenModalEvent } from '_widgets/ModalTemplate/models'
import { FormTemplate } from '_entities/FormTemplate'
import { PageContainer } from '_shared/PageContainer'

export const homeRoute = createRoute()

export const Home: React.FunctionComponent = () => {
    const onClickUserButton = useEvent(onOpenModalEvent)

    const onOpenDrawer = () => {
        console.log('sdfdsg')
        onClickUserButton({ isOpen: true })
    }

    return (
        <div>
            <PageContainer>
                Home
                {/* <FormTemplate /> */}
                <button onClick={onOpenDrawer}>открыть Дравер</button>
            </PageContainer>
        </div>
    )
}
