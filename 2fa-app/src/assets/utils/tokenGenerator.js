import React, { useState } from "react";
import { genToken } from "./2fa.js";

const Result = ({ token }) => (
    <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
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
    <div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
        <button
            width={[1, "auto", "auto"]}
            mt={2}
            mb={2}
            onClick={generateTokens}
        >
        Generate Token
      </button>
      </div>
      <Result token={result}/>
    </div>
    );
};


export default TokenGenerator;
