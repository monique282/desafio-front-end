import { Props } from "../Interface/Props";
import React, { useState } from "react";
import formatPhoneNumber from "../Utils/FormatPhoneNumber";
import {
  AssociatedSmallScreen,
  ResponseSmallScreen,
  TableDataSmallScreen,
  TitleSmallScreen,
} from "../assets/Styles/Home";
import DownAndUpArrow from "./DownAndUpArrow";

const EmployeeInformationPhotoNameAndArrow: React.FC<Props> = ({ list }) => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const toggleItem = (id: string) => {
    if (openItems.includes(id)) {
      setOpenItems(openItems.filter((item) => item !== id));
    } else {
      setOpenItems([...openItems, id]);
    }
  };

  return (
    <>
      {list.map((main) => (
        <>
          <DownAndUpArrow
            key={main.id}
            main={main}
            openItems={openItems}
            toggleItem={toggleItem}
          />
          {openItems.includes(main.id) ? (
            <AssociatedSmallScreen>
              <TableDataSmallScreen>
                <TitleSmallScreen>Cargo</TitleSmallScreen>
                <ResponseSmallScreen>{main.job}</ResponseSmallScreen>
              </TableDataSmallScreen>{" "}
              <TableDataSmallScreen>
                {" "}
                <TitleSmallScreen>Data de admissão</TitleSmallScreen>
                <ResponseSmallScreen>
                  {" "}
                  {new Date(main.admission_date).toLocaleDateString()}
                </ResponseSmallScreen>
              </TableDataSmallScreen>{" "}
              <TableDataSmallScreen>
                {" "}
                <TitleSmallScreen>Telefone</TitleSmallScreen>
                <ResponseSmallScreen>
                  {" "}
                  {formatPhoneNumber(main.phone)}
                </ResponseSmallScreen>
              </TableDataSmallScreen>{" "}
            </AssociatedSmallScreen>
          ) : (
            <></>
          )}
        </>
      ))}
    </>
  );
};

export default EmployeeInformationPhotoNameAndArrow ;
