import React from "react";
import "./App.css";
import { ListDegreePlans } from "./components/ListDegreePlans";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CIS Scheduler - F23 CISC 275
            </header>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
            <p>Simon Brugel was here</p>
            <p>Cameron Wine was here</p>
            <p>Conor Jurewicz was here</p>
            <p>Leo Chen was here</p>
            <ListDegreePlans></ListDegreePlans>
        </div>
    );
}

export default App;
