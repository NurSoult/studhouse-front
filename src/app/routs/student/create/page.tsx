import StudentCreate from "@/pages/StudentCreate/ui/StudentCreate";
import Layout from "@/widgets/Layout/Layout";

export default function Home() {
  return (
    <Layout>
      <main className="container">
        <StudentCreate />
      </main>
    </Layout>
  );
}
