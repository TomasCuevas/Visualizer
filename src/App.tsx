import { Routes, Route } from "react-router-dom";

//* pages *//
import { HomePage, SearchPhotosPage, SelectPhotoPage } from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/photo/:id" element={<SelectPhotoPage />} />
        <Route path="/search/:search" element={<SearchPhotosPage />} />
      </Routes>
    </>
  );
};
