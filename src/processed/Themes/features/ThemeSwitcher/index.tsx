import React from 'react'
import { useStore } from 'effector-react'
import { Switcher } from '_entities/Switcher'
import { $themeStore } from '_processed/Themes/store'

interface IThemeSwitcher {

}


export const ThemeSwitcher: React.FunctionComponent<IThemeSwitcher> = () => {
    const themeStore = useStore($themeStore)



    return (
        <div>
            <Switcher value={!!themeStore} onAction={} />
        </div>
    )
}
