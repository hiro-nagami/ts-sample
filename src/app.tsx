import * as React from "react";
import * as ReactDOM from 'react-dom';
import BasePage from './views/BasePage';

interface AppProps {
}

type AppState = {
    markdown: string,
}

class App extends React.Component<AppProps, AppState> {

    constructor(props: AppProps) {
        super(props)
        this.state = { markdown: "" }
    }

    render() {
        return (
            <BasePage />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)