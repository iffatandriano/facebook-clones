import Head from "next/head";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { getSession, useSession } from "next-auth/react";
import Login from "../components/Login";
import Feed from "../components/Feed";
import RightSidebar from "../components/RightSidebar";

export default function Home({ session }) {
  if (!session) return <Login />;
  return (
    <div>
      <Head>
        <title>Facebook Clones</title>
      </Head>
      <Header />
      <main className="flex bg-gray-100">
        <Sidebar />
        <Feed />
        <RightSidebar />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: { session },
  };
}
