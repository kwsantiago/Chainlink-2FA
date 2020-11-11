import React from "react";
import useWeb3 from "./assets/shared/hooks/useWeb3";
import TokenGenerator from "./assets/utils/frontend.js";
import Card from "./assets/shared/UI/Card";

const App = (props) => {
  const { account, web3 } = useWeb3();
  return (
      <Card>
          <TokenGenerator />
      </Card>
  );
};

export default App;
