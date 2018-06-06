import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';

class App extends React.Component {
    render() {
        return (
            <Hello compiler='TypeScript' framework='React' />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)