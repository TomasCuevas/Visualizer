import { Routes, Route } from "react-router-dom";

//* pages *//
import { HomePage, SelectPhotoPage } from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<SelectPhotoPage />} />
      </Routes>
    </>
  );
};
