import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';
import InfiniteScroller from "./molecules/InfiniteScroller";
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