import { Routes, Route } from "react-router-dom";

//* pages *//
import { HomePage, PhotoPage } from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<PhotoPage />} />
      </Routes>
    </>
  );
};
