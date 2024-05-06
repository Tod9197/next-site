import Head from "next/head";
import Link from "next/link";
import Header from "./components/header";
import Content from "./components/contents";
import useSWR from "swr";

export default function App() {
  let title = "ドラゴンクエスト";
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR("./api/message", fetcher);
  if (error) return <div>failed to lead</div>;
  if (!data) return <div>loading...</div>;

  return (
    <Content>
      <Head>
        <title>{title}</title>
      </Head>
      <Header title="ドラクエ" />
      <p>{data.message}</p>
      <Link href="/about">About</Link>
    </Content>
  );
}
