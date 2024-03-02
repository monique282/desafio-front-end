import React from "react";
import {
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";
import formatPhoneNumber from "../utils/FormatPhoneNumber";

const EmployeePhoneDetails: React.FC<{
  phone: string;
}> = ({ phone }) => {
  return (
    <>
      <TableDataSmallScreen>
        {" "}
        <TitleSmallScreen>Telefone</TitleSmallScreen>
        <ResponseSmallScreen> {formatPhoneNumber(phone)}</ResponseSmallScreen>
      </TableDataSmallScreen>{" "}
    </>
  );
};

export default EmployeePhoneDetails;
