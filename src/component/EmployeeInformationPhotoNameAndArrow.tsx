import { Props } from "../Interface/Props";
import React, { useState } from "react";
import DownAndUpArrow from "./DownAndUpArrow";
import EmployeeInformationPositionHireDateAndTelephoneNumber from "./EmployeeInformationPositionHireDateAndTelephoneNumber";

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
        <div key={main.id}>
          <DownAndUpArrow
            main={main}
            openItems={openItems}
            toggleItem={toggleItem}
          />
          {openItems.includes(main.id) ? (
            <EmployeeInformationPositionHireDateAndTelephoneNumber
              main={main}
            />
          ) : null}
        </div>
      ))}
    </>
  );
};

export default EmployeeInformationPhotoNameAndArrow;
