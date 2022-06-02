import React from "react";
import PostMailbox from "./components/Mailbox/PostMailbox";
import ViewMailbox from "./components/Mailbox/ViewMailbox";
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
            <PostMailbox />
        </div>
    );
}

export default App;
