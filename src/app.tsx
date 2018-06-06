import * as React from "react";
import * as ReactDOM from 'react-dom';
import Hello from './molecules/Hello';

class App extends React.Component {
    render() {
        return (
            <div>
                <Hello compiler='TypeScript' framework='React' />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)