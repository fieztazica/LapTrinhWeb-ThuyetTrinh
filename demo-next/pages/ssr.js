import Head from 'next/head';
import NextLink from 'next/link';

export default function Ssr({ data }) {

    return (
        <>
            <Head>
                <title>Server-side rendering</title>
            </Head>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100dvh',
            }}>
                <div>
                    <h1>
                        SSR Data fetched: {!data ? "Loading..." : `${data["$values"].length} books`}
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
                    <NextLink href="/csr">
                        <h2>Click to CSR</h2>
                    </NextLink>
                    <NextLink href="/">
                        <h2>Home</h2>
                    </NextLink>
                </div>

            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const data = await fetch(`http://localhost:64027/api/book`).then(res => res.json());

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    await sleep(3000);

    return {
        props: {
            data
        }, // will be passed to the page component as props
    }
}