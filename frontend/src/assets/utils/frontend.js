import React, { useState } from "react";
import { genToken } from "./formatToken.js";
import { Button, Text } from "rimble-ui";

const Result = ({ newToken }) => (
    <Text style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 40
        }}>
    { newToken }
    </Text>
);

const TokenGenerator = () => {
    const [token, setToken] = useState([]);

    const genNewToken = async () => {
        const result = await genToken();
        setToken(result);
    };

    return (
    <div>
        <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            }}>
        <Button
            width={[1, "auto", "auto"]}
            mt={2}
            mb={2}
            onClick={genNewToken}
        >
        Generate Random 2FA Token
      </Button>
      </div>
      <Result newToken={token}/>
    </div>
    );
};


export default TokenGenerator;
