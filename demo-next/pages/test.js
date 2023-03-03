import { useEffect, useState } from 'react'

async function getQuote() {
    const data = await fetch(`/api/values/5`).then(res => res.json());
    console.log(data)
    return data;
}

export default function Test({ data }) {

    const [quote, setQuote] = useState(null);

    useEffect(() => {
        getQuote().then((q) => setQuote(q))
    }, []);

    console.log(data)
    return <div>
        <p>
            {data}
        </p>
        <p>
            {
                quote ? quote : "Loading..."
            }
        </p>
    </div>;
}

export async function getServerSideProps(context) {
    const data = await getQuote()
    //const data = "abc"

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}