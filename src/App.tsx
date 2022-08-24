import { Routes, Route } from "react-router-dom";

//* pages *//
import { HomePage } from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
};
