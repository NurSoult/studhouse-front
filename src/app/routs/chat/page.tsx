import ChatPage from "@/pages/Chat/ui/Chat";
import ChatIdPage from "@/pages/ChatID/ui/page";
import Layout from "@/widgets/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <ChatIdPage />
      </main>
    </Layout>
  );
}
