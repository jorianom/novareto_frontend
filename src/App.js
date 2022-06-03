import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PostMailbox from "./components/Mailbox/PostMailbox";
import ViewMailbox from "./components/Mailbox/ViewMailbox";

function App() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PostMailbox />} />
          <Route path="/view" element={<ViewMailbox />} />
        </Routes>
      </BrowserRouter>
    );
}

export default App;
