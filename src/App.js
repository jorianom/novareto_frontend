import React from "react";
import PostMailbox from "./components/Mailbox/PostMailbox";
import ViewMailbox from "./components/Mailbox/ViewMailbox";
import ModalMailbox from "./components/Mailbox/ModalMailbox";
function App() {
    return (
        <div className="App">
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">
                        Buzón de quejas y sugerencias
                    </span>
                </div>
            </nav>
            <ViewMailbox />
        </div>
    );
}

export default App;
