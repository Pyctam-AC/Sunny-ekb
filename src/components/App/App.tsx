import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogServices from "../../pages/CatalogServices/CatalogServices";
import NotFound from "../../pages/NotFound/NotFound";

import StubPage from "../../pages/StubPage/StabPage";

const App: FC = () => {
  return (
    <Routes>
      <Route path="/sunny-ekb/" element={<HomePage />} />
      <Route path="/sunny-ekb/catalogservices" element={<CatalogServices />} />
      <Route path="/sunny-ekb/about" element={<StubPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
