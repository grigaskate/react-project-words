import { createContext, useState, useEffect } from "react";
import GET from "../services/GET";

export const MyContext=createContext();

export function MyContextComponent({children}){
    const [context, setContext] = useState(false);
    const value={context, setContext};

    useEffect(() => {
        getWordServer();
    },[]);

    async function getWordServer(){
        const wordServer = await GET.getWord();
        setContext(wordServer);
        console.log(wordServer)
    }

    if (!context) return <h1>Loading....</h1>;

return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}