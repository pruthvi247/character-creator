import styled from "styled-components";

export default function App() {
  return <PrimaryButton>Button</PrimaryButton>;
}

const Base = styled.button`
  font-size: 21px;
`;

const PrimaryButton = styled(Base)`
  background: blue;
  color: white;
`;
