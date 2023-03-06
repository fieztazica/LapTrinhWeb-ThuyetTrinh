import { useEffect, useState } from 'react'

async function getQuote() {
    const data = await fetch(`http://localhost:3000/api/values/5`).then(res => res.json());
    //console.log(data)
    return data;
}

export default function Test(props) {

    const [quote, setQuote] = useState(null);
    //const [bool, setBool] = useState(false);
    const { data } = props;

    /**
     * 
     * setTimeout(() => {
        getQuote().then((q) => setQuote(q))
    }, 5000)
     */

    useEffect(() => {
        //console.log("first");

        setTimeout(() => {
            getQuote().then((q) => setQuote(q))
        }, 5000)

        //setInterval(() => {
        //    console.log("10s")
        //    setBool(b => !b);
        //}, 10000)
    }, []);

    //console.log(data)
    return <div>
        <h1>
            SSR: {data}
        </h1>
        <h1>
            CSR: {quote ? quote : "Loading..."}
        </h1>
    </div>;
}

export async function getServerSideProps(context) {
    const data = await getQuote();
    //const data = "abc"

    //console.log(context);

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}