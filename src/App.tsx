import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/homepage";
import Moon from "./pages/moon";
import Mars from "./pages/mars";
import Europa from "./pages/europa";
import Titan from "./pages/titan";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import type { JSX } from "react";

function App(): JSX.Element {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Homepage />} />

        <Route
          path="/destination"
          element={<Navigate to="/destination/moon" replace />}
        />

        <Route path="/destination/moon" element={<Moon />} />
        <Route path="/destination/mars" element={<Mars />} />
        <Route path="/destination/europa" element={<Europa />} />
        <Route path="/destination/titan" element={<Titan />} />

        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Route>
    </Routes>
  );
}

export default App;
