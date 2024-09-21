import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar,Welcome,Footer,Services,Transaction } from "./components";
function App() {
  return (
    <>
    <Navbar />
    <Welcome />
    <Footer/> 
    <Services/>
    <Transaction/>   
    </>
    //  1) npm install -i --save-dev @nomicfoundation/hardhat-toolbox --force
    //  or -  npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle chai @nomiclabs/hardhat-ethers ethers --legacy-peer-deps 
    // 2) npx hardhat
    // 3) npx hardhat test
    )
}

export default App
