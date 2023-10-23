import React, { useState } from "react";
import "./App.css";
import IntroPopup from "./components/IntroPopup";

function App(): JSX.Element {
    const [showIntro, setShowIntro] = useState<boolean>(true);
    const handleClose = () => setShowIntro(false);

    return (
        <div className="App">
            <IntroPopup show={showIntro} handleClose={handleClose} />

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
        </div>
    );
}

export default App;
