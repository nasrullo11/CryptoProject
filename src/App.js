import Bloc10 from "./components/Bloc10";
import Bloc11 from "./components/Bloc11";
import { BrowserRouter as Router, Route, Routes, useNavigate}
 from "react-router-dom";
import Bloc1 from "./components/Bloc1";
import Bloc9 from "./components/Bloc9";
import CryptoDetail from "./pages/CryptoDetail";

function App() {
  return (
    <div>
      <Router>
        <Bloc1 />
        <Routes>
          <Route exact path="/" element={<Bloc11 />}/>
          <Route exact path="/bloc" element={<Bloc10 />}/>
          <Route path="/coin/:id" element={<CryptoDetail />} />
        </Routes>
        <Bloc9 />
      </Router>
    </div>
  );
}

export default App;
