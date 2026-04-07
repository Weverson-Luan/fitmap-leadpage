/**
 * IMPORTS
 */
import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// components
import { Toaster } from "./components/ui/sonner";
import { PrivacyPolicy } from "./screens/privacy";
import { TermsOfUse } from "./screens/terms";
import { Home } from "./screens/home";

function App() {
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </BrowserRouter>

  );
}

/**
 * EXPORTS
 */
export default App;
