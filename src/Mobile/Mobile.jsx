import { forwardRef } from "react";
import "./Mobile.css";
import { CloseCircleTwoTone } from "@ant-design/icons";

const Mobile = forwardRef(({ valid }, mobile) => {
  return (
    <div className="mobile">
      <h4>موبایل</h4>
      <div className="mobileBox">
        {!valid.mobile && (
          <CloseCircleTwoTone twoToneColor="#cd0104" style={{ fontSize: 25 }} />
        )}
        <input type="number" id="mob" ref={mobile} />
      </div>
    </div>
  );
});
export default Mobile;
