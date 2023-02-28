import { useEffect, useState } from 'react'

async function getQuote() {
    const data = await fetch(`https://api.quotable.io/random`).then(res => res.json());
    return data.content;
}

export default function Abc({ data }) {

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

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}