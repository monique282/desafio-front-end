import { Props } from "../Interface/Props";
import { Associate, TableData } from "../assets/StylesPages/Home";
import React, { useState } from "react";
import { SlArrowDown } from "react-icons/sl";
import { SlArrowUp } from "react-icons/sl";

const AssociateReturnSmallerScreen: React.FC<Props> = ({ list }) => {
  const [close, setClose] = useState(false);
  return (
    <>
      {list.map((main) => (<>
        <Associate key={main.id}>
          <TableData style={{ width: "80px" }}>
            <img src={main.image} alt="" />
          </TableData>
          <TableData>{main.name}</TableData>
          {close ? (
            <>
              <TableData style={{ width: "80px" }}>
                {" "}
                <SlArrowUp
                  style={{ color: "#594ed2", marginTop: "10px" }}
                  onClick={() => {
                    setClose(false);
                  }}
                />
              </TableData>
            </>
          ) : (
            <TableData style={{ width: "80px" }}>
              <SlArrowDown
                style={{ color: "#594ed2", marginTop: "10px" }}
                onClick={() => {
                  setClose(true);
                }}
              />
            </TableData>
          )}
        </Associate>
        <Associate>
           <TableData>Associate</TableData> 
        </Associate>
        </>
      ))}
    </>
  );
};

export default AssociateReturnSmallerScreen;
