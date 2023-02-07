import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'effector-react/scope'
import { fork } from 'effector'
import { App } from '_app/ui/App'

const scope = fork()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <Provider value={scope}>
            <App />
        </Provider>
    </React.StrictMode>
)
