import Form from "@/components/organism/Form";
import Videos from "@/components/organism/Videos";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 md:p-24">

      <Videos/>
      <Form/>
    </main>
  );
}
