import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';
import InfiniteScroller from "./molecules/InfiniteScroller";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Hello compiler='TypeScript' framework='React' />
                <InfiniteScroller texts={[]} />
            </React.Fragment>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)