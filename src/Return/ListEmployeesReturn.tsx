import React, { useEffect, useState } from "react";
import { AllEmployees } from "../assets/Styles/Home";
import { Props } from "../Interface/Props";
import HeaderEmployeesReturn from "./HeaderEmployeesReturn";
import EmployeeInformationWebMode from "../Component/EmployeeInformationWebMode";
import EmployeeInformationAfterClickingDesktopVersionArrow from "../Component/EmployeeInformationAfterClickingDesktopVersionArrow";
import TableHeaderInDesktopMode from "../Component/TableHeaderInDesktopMode";

const ListEmployeesReturn: React.FC<Props> = ({ list }) => {
  const [isMobileView, setIsMobileView] = useState(false);
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
        {!isMobileView && <EmployeeInformationWebMode list={list} />}
        {isMobileView && <TableHeaderInDesktopMode />}
        {isMobileView && (
          <EmployeeInformationAfterClickingDesktopVersionArrow list={list} />
        )}
      </div>
    </AllEmployees>
  );
};

export default ListEmployeesReturn;
