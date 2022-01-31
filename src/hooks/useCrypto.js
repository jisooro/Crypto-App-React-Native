import React, { useEffect, useState } from 'react';
import { crypyoDB } from '../api/cryptoDB';

export const useCrypto = () => {

    const [crypto, setCrypto] = useState();
    const [loading, setLoading] = useState(true);

    const getCrypto = async () => {

        const cryptoRes = crypyoDB.get('/cryptocurrency/listings/latest');

        const resps = await Promise.all([
            cryptoRes,
        ])
        
        setCrypto(resps[0].data.data);
        setLoading(false);

    }

    useEffect(() => {
        getCrypto();
    }, []);

    return {
        crypto,
        loading
    }


}