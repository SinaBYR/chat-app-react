import styled from "styled-components"
import { Showcase } from "./components/Showcase/Showcase"
import { ThemeProvider } from "styled-components"
import { theme } from "./theme/theme"

const AppStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.orange};
  background-color: ${(props) => props.theme.colors.black};
`

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppStyled>
        <Showcase />
      </AppStyled>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#0099ff" fill-opacity="1" d="M0,128L48,138.7C96,149,192,171,288,186.7C384,203,480,213,576,213.3C672,213,768,203,864,181.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg> */}
    </ThemeProvider>
  )
}