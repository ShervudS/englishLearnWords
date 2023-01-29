import {GlobalStyles} from '_styles/globalStyles'
import {RoutingContainer} from '_processed/Routing/RoutingContainer'
import {ThemeContainer} from "_processed/Themes/features/ThemeContainer";
import {Header} from "_widgets/Header";

export const App = () => (
    <>
        <GlobalStyles/>
        <Header/>
        <ThemeContainer>
            <RoutingContainer/>
        </ThemeContainer>
    </>
)

