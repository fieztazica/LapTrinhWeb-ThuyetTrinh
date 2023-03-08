import Head from 'next/head';
import NextLink from 'next/link';
import { useEffect, useState } from 'react';

export default function Test() {

    const [data, setData] = useState(null);


    useEffect(() => {

        setTimeout(() => {

            fetch(`/api/book`).then(res => res.json()).then(data => setData(data));

        }, 3000)


    }, []);

    return (
        <>
            <Head>
                <title>Client-side rendering</title>
            </Head>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100dvh',
            }}>
                <div>
                    <h1>
                        CSR Data fetched: {!data ? "Loading..." : `${data["$values"].length} books`}
                    </h1>
                    {
                        data && (
                            <ul>
                                {data["$values"].map((b) => (
                                    <li key={b.masach}>
                                        {`${b.masach}`} - {`${b.tensach}`} ({`${b.TheLoai.tenloai}`})
                                    </li>
                                ))}
                            </ul>
                        )
                    }
                    <NextLink href="/ssr">
                        <h2>Click to SSR</h2>
                    </NextLink>
                    <NextLink href="/">
                        <h2>Home</h2>
                    </NextLink>
                </div>

            </div>
        </>

    );
}