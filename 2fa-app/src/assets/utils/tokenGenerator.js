import React, { useState } from "react";
import { genToken } from "./2fa.js";

const Result = ({ token }) => (
    <div>
        { token }
    </div>
);

const TokenGenerator = () => {
    const [result, setResult] = useState([]);

    const generateTokens = async function genTokens() {
        const result = await genToken();
        setResult(result);
    };

    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}><button
        width={[1, "auto", "auto"]}
        mt={2}
        mb={2}
        onClick={generateTokens}
      >
        Generate Token
      </button>
      <Result token={result}/>
      </div>
    );
};


export default TokenGenerator;
