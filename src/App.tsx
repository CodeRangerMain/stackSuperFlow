import { Header } from "./widgets/Header";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { Questions } from "./widgets/Questions";
import { Contexts } from "contexts";
import { Wrapper } from "App.styled";

function App() {
  return (
    <Contexts>
      <Wrapper className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/*" element={<Questions />} />
          </Routes>
        </BrowserRouter>
      </Wrapper>
    </Contexts>
  );
}

export default App;
