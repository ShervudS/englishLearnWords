import React from 'react'
import { ThemeProvider } from 'styled-components'
import { themeConfig } from '_processed/Themes/config'

interface IThemeContainer {
    children: React.ReactNode
}

export const ThemeContainer: React.FunctionComponent<IThemeContainer> = ({
    children,
}) => {
    return <ThemeProvider theme={themeConfig}>{children}</ThemeProvider>
}
