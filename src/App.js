import { useRef, useState } from "react";
import "./App.css";
import Location from "./Location/Location";
import Mobile from "./Mobile/Mobile";

function App() {
  const loc = useRef();
  const mob = useRef();

  const [valid, setValid] = useState({
    province: true,
    city: true,
    mobile: true,
  });

  const handlesubmit = () => {
    const location = loc.current.getLoc();
    const mobile = mob.current.value;
    let isProvinceValid = true;
    let isCityValid = true;
    let isMobileValid = true;
    if (!location.province) {
      isProvinceValid = false;
    }
    if (!location.city) {
      isCityValid = false;
    }
    if (mobile.length !== 11 || !mobile.startsWith("09")) {
      isMobileValid = false;
    }
    setValid({
      province: isProvinceValid,
      city: isCityValid,
      mobile: isMobileValid,
    });
  };

  return (
    <div className="App">
      <div className="container">
        <Location ref={loc} valid={valid} />
        <Mobile ref={mob} valid={valid} />
        <button onClick={handlesubmit}>submit</button>
      </div>
    </div>
  );
}

export default App;
