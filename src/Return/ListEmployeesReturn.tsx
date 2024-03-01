import React, { useEffect, useState } from "react";
import { AllEmployees } from "../assets/StylesPages/Home";
import { Props } from "../Interface/Props";
import HeaderEmployeesReturn from "./HeaderEmployeesReturn";
import AssociateReturn from "./AssociateReturn";
import HeaderEmployeeReturnSmallerScreen from "./HeaderEmployeeReturnSmallerScreen";
import AssociateReturnSmallerScreen from "./AssociateReturnSmallerScreen";

const ListEmployeesReturn: React.FC<Props> = ({ list }) => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [show, setShow] = useState();

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 870);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <AllEmployees>
      <div style={{ flex: "1" }}>
        {!isMobileView && <HeaderEmployeesReturn />}
        {!isMobileView && <AssociateReturn list={list} />}
        {isMobileView && <HeaderEmployeeReturnSmallerScreen />}
        {isMobileView && <AssociateReturnSmallerScreen list={list} />}
      </div>
    </AllEmployees>
  );
};

export default ListEmployeesReturn;
