import * as React from "react";
import * as ReactDOM from 'react-dom';
import InfiniteScrollRoute from "./views/InfiniteScrollRoute";
import * as Router from 'universal-router';
import ProfileImage from "./molecules/ProfileImage";
import User from "./entity/User";

class App extends React.Component {
    public render () {
        const user = new User({ name: 'Taro', thumbnail: null})
        return (
            // <InfiniteScrollRoute />
            <ProfileImage user={user} />
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)