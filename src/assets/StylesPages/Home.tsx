import styled from "styled-components";

export const All = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f0f0f0;
  position: fixed;
  top: 60px;
  left: 0;
  z-index: 100;
  overflow-y: auto;
  max-height: 600px;
`;
export const SearchContainer = styled.div`
  position: relative;
`;
export const SearchInput = styled.input`
  width: 287px;
  height: 38px;
  padding: 12px 40px 12px 16px;
  border-radius: 8px;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
  letter-spacing: 0em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(158, 158, 158, 1);
  border: 1px solid rgba(223, 223, 223, 1);
  text-align: left;
  &:focus {
    border: 1px solid rgba(223, 223, 223, 1);
    outline: none;
  }
  @media (max-width: 370px) {
    width: 100%;
    margin-left: -29px;
  }
`;
export const SearchIcon = styled.div`
  position: absolute;
  top: 60%;
  right: 12px;
  transform: translateY(-50%);
  color: rgba(158, 158, 158, 1);
`;
export const Title = styled.div`
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 500;
  line-height: 28px;
  text-align: left;
  color: rgba(28, 28, 28, 1);
  @media (max-width: 870px) {
    margin-bottom: 25px;
  }
`;
export const Employees = styled.div`
  font-family: "Varela Round";
  font-size: 30px;
  color: black;
  margin-left: 32px;
  margin-right: 32px;
  font-weight: bold;
  margin-top: 51px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 870px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const AllEmployees = styled.div`
  display: flex;
  height: 100%;
  margin-left: 32px;
  margin-right: 32px;
`;
export const HeaderEmployees = styled.div`
  height: 47px;
  background: linear-gradient(180deg, #5a84c0 0%, #594ed2 100%);
  border-radius: 5px 5px 0px 0px;
  font-weight: bold;
  margin-top: 51px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow-y: auto;
  max-height: "400px";
  border: none;
  p {
    font-family: "Roboto";
    font-size: 16px;
    font-weight: 500;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
    color: rgba(255, 255, 255, 1);
  }
`;
export const TableNames = styled.div`
  width: 180px;
`;

export const Associate = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #ffffff;
  box-shadow: 0px 1px 2px 0px #ffffff;
  border-right-color: #ffffff;
  img {
    width: 34px;
    height: 34px;
    border-radius: 50%;
    margin-left: 12%;
  }
`;
export const TableData = styled.div`
  width: 180px;
  display: flex;
  align-items: center;
`;
