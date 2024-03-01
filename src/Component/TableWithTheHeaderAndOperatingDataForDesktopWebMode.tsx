import React, { useEffect, useState } from "react";
import { AllEmployees } from "../assets/Styles/Home";
import { Props } from "../Interface/Props";
import EmployeeInformationWebMode from "./EmployeeInformationWebMode";
import TableHeaderInDesktopMode from "./TableHeaderInDesktopMode";
import TableHeaderInWebMode from "./TableHeaderInWebMode";
import EmployeeInformationPhotoNameAndArrow from "./EmployeeInformationPhotoNameAndArrow";

const TableWithTheHeaderAndOperatingDataForDesktopWebMode: React.FC<Props> = ({
  list,
}) => {
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
        {!isMobileView && <TableHeaderInWebMode />}
        {!isMobileView && <EmployeeInformationWebMode list={list} />}
        {isMobileView && <TableHeaderInDesktopMode />}
        {isMobileView && (
          <EmployeeInformationPhotoNameAndArrow list={list} />
        )}
      </div>
    </AllEmployees>
  );
};

export default TableWithTheHeaderAndOperatingDataForDesktopWebMode;
