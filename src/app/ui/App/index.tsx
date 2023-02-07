import { lazy } from 'react'
import { GlobalStyles } from '_styles/globalStyles'
import { RoutingContainer } from '_processed/Routing/RoutingContainer'
import { ThemeContainer } from '_processed/Themes/features/ThemeContainer'
import { Header } from '_widgets/Header'

const LazyDrawerTemplate = lazy(
    async () => await import('_widgets/DrawerTemplate/DrawerTemplate')
)

const LazyModalTemplate = lazy(
    async () => await import('_widgets/ModalTemplate/ModalTemplate')
)

export const App = () => (
    <>
        <GlobalStyles />
        <ThemeContainer>
            <Header />
            <RoutingContainer />
            <LazyDrawerTemplate />
            <LazyModalTemplate />
        </ThemeContainer>
    </>
)
