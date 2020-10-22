import React from "react";
import useWeb3 from "./assets/shared/hooks/useWeb3";
import TokenGenerator from "./assets/utils/tokenGenerator.js";

const App = (props) => {
  const { account, web3 } = useWeb3();
  return (
      <TokenGenerator />
  );
};

export default App;
