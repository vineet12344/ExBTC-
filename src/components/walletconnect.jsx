import { ethers } from "ethers";
// import { useNavigate } from "react-router-dom";

const walletconnect = async () => {
//   const navigate = useNavigate();
  let signer = null;
  let provider;

//   const redirectPage = () => {
//     navigate("/transactionPage");
//   };

  if (window.ethereum == null) {
    console.log("Metamask not installed!");
    provider = ethers.getDefaultProvider();
  } else {
    provider = new ethers.BrowserProvider(window.ethereum);
    signer = await provider.getSigner();
    
  }

//   redirectPage();
};

export default walletconnect;
