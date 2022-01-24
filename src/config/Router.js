import { BrowserRouter, Route, Routes } from "react-router-dom";

import Cat from "../pages/Cat";
import Cats from "../pages/Cats";
import NotFound from "../pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* Home */}
      <Route exact path="/" element={<Cats />} />

      {/* Cats */}
      <Route exact path="cats" element={<Cats />} />
      <Route path="cats">
        <Route path=":catId" element={<Cat />} />
      </Route>

      {/* Not found */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
