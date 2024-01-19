import Appbar from "./components/Appbar/Appbar";
import React from "react";

function App() {

    return (
        <React.Fragment>
            <header>
                <Appbar />
            </header>
            <main className='container-fluid'>
                Content will be here !
            </main>

        </React.Fragment>
    )
}

export default App
