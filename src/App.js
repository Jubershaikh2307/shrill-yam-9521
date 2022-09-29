import "./App.css";
import Socialbar from "./Component/SocialBar";
import { Image } from "@chakra-ui/react";
import NavBar from "./Component/NavBar";
import SubNavbar from "./Component/SubNavBar"

function App() {
  return (
    <div className="App">
      <Socialbar />
      <Image
        m="auto"
        p="20px"
        src="https://www.thehindu.com/theme/images/th-online/logo.png"
        placeholder="The hindu"
      />
      <NavBar/>
      <SubNavbar/>
    </div>
  );
}

export default App;
