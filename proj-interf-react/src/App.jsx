import {Header} from "./Components/Header.jsx";
import {Content} from "./Components/Content.jsx";
import {Footer} from "./Components/Footer.jsx";

const App = () => {
  return (
    <>
        <div className="header debug">
            <Header/>
        </div>
        <Content/>
        <Footer/>
    </>
  )
}

export default App;
