import Navbar from "./components/Navbar";
import Calculator from "./components/Calculator";
import Data from "./components/Data";
import Lunch from "./components/Lunch";


import { Routes, Route} from "react-router-dom";
import PrintThisComponent from "./components/print";
function App() {
  return (
    <div className="App">







<Navbar />
<div className="d-flex justify-content-end ">

</div>
<Routes>

<Route path="/" element={<Calculator />} />

<Route path="/Data" element={<Data />} />

<Route path="/Lunch" element={<Lunch />} />


</Routes>



</div>
  );
}

export default App;
