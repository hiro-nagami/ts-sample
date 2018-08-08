import * as React from "react";
import * as ReactDOM from 'react-dom';
import InfiniteScrollRoute from "./views/InfiniteScrollRoute";

class App extends React.Component {
    public render () {
        return (
            <InfiniteScrollRoute />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)