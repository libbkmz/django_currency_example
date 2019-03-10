import React from 'react';
import NavBar from './NavBar';
import { Provider } from "react-redux";
import { store } from '../store';
import { SignUpModal } from "./SignUpModal";

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <Provider store={store}>
                    <NavBar />
                    <SignUpModal />
                    <p>Main App</p>
                </Provider>
            </div>
        );
    }
}

export default App;