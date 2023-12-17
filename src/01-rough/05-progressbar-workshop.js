import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { COLORS } from "./progressbar-constants";

const ProgressBar = ({ value, size }) => {
  return (
    <div
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      progressbar
      <Bar />
    </div>
  );
};
const Bar = styled.div`
  background: ${COLORS.black};
  border-radius: 4px;
  height: 8px;
`;
export default ProgressBar;
