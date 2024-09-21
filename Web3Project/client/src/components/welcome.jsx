import {AiFillPlayCircle} from 'react-icons/ai';
import {SiEthereum} from 'react-icons/si';
import {BsInfoCircle} from 'react-icons/bs';
import{Loader} from './';
import './welcome.css';

const Input = ({ placeholder, name, type, value, handleChange }) => {
    return (
      <input
        placeholder={placeholder}
        type={type}
        step="0.0001"
        value={value}
        onChange={(event) => handleChange(event, name)}
        className="form-control" // Apply form-control class here
      />
    );
  };

  const handleSubmmit = () => {
    // Define what should happen when the button is clicked
    console.log("Submit button clicked");
    // Add your logic here
};
const Welcome=()=>{
    return(
        <div className='welcome '>
            <div className='quate'>
                    Send Crypto <br/>
                    across the <br/> world
                    <div className='subhead'> Explore the crypto world.Buy and Sell Cryptocurrencies easily on Krypto</div>
                    <button type="button" class="btn btn-outline-secondary connect-btn ">Connect Wallet</button>
                    <div class="grid-container">
                    <div class="grid-item c1">Realiability</div>
                    <div class="grid-item">Security</div>
                    <div class="grid-item c2">Ethereum</div>
                    <div class="grid-item c3">Web 3.0</div>
                    <div class="grid-item">Low Fee</div>
                    <div class="grid-item c4">Blockchain</div>
                    </div>
            </div>
            <div className='right-half'>
                <div className='card'>
                    <div className='card-body'>
                        <SiEthereum className='eth-icon'></SiEthereum>
                        <BsInfoCircle className='info-icon'></BsInfoCircle>
                         <div className='card-title'>Ethereum</div>
                        <div className='card-add'>Address..............</div>
                    </div>
                </div>
                <div className='form'>
                    <div className='form-group'>
                        <Input placeholder="Address To" name="addressTo" type="text" handleChange={()=>{}}/>
                        <Input placeholder="Amount (Eth)" name="amt" type="text" handleChange={()=>{}}/>
                        <Input placeholder="Keyword (gif)" name="keyword" type="text" handleChange={()=>{}}/>
                        <Input placeholder="Enter Message" name="msg" type="text" handleChange={()=>{}}/>
                    </div>
                    <div className='line'>
                        <hr/>
                    </div>
                    {false ? (
                        <Loader></Loader>
                    ):(
                        <button className="form-btn" type="submit" onClick={handleSubmmit}> Send Now</button>
                    )}
                </div>
            </div>
        </div>
    )
}
export default Welcome;

