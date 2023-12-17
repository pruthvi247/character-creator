import styled from "styled-components";
function Button({ href, children }) {
  return (
    <Wrapper href={href} as={href ? "a" : "button"}>
      {children}
    </Wrapper>
  );
}
const Wrapper = styled.button`
  background: blue;
  color: white;
  border: none;
  padding: 16px 24px;
  border-radius: 4px;
  &:hover {
    background: #0069d9;
  }
`;
const App = () => <Button href="/">Hello</Button>;
export default App;
