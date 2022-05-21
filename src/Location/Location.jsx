import { forwardRef, useImperativeHandle, useState } from "react";
import "./Location.css";
import { CloseCircleTwoTone } from "@ant-design/icons";

const Location = forwardRef(({ valid }, refLoc) => {
  const [selectedLoc, setSelectedLoc] = useState({
    province: "",
    city: "",
    index: 0,
  });
  const location = [
    { province: "", city: [] },
    { province: "تهران", city: ["", "شهر ری", "اسلام شهر"] },
    { province: "خراسان", city: ["", "مشهد", "سبزوار"] },
  ];

  useImperativeHandle(refLoc, () => ({ getLoc: () => selectedLoc }), [
    selectedLoc,
  ]);

  const handleProvince = (e) => {
    setSelectedLoc({
      province: e.target.value,
      city: "",
      index: e.target.selectedIndex,
    });
  };
  const handleCity = (e) => {
    setSelectedLoc((p) => ({ ...p, city: e.target.value }));
  };

  return (
    <div className="location">
      <h4>استان</h4>
      <div className="provinceBox">
        {!valid.province && (
          <CloseCircleTwoTone twoToneColor="#cd0104" style={{ fontSize: 20 }} />
        )}
        <select onInput={handleProvince}>
          {location?.map((item, i) => (
            <option key={i} value={item.province}>
              {item.province}
            </option>
          ))}
        </select>
      </div>
      <h4>شهر</h4>
      <div className="cityBox">
        {!valid.city && (
          <CloseCircleTwoTone twoToneColor="#cd0104" style={{ fontSize: 20 }} />
        )}
        <select onInput={handleCity} disabled={!selectedLoc.province}>
          {location[selectedLoc.index].city.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
});

export default Location;
