import { Background } from "@/components/background";
import { Newsletter } from "@/components/newsletter";

export default function Home() {
  return (
    <main className="h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <Background src="/6333333-hd_1920_1080_24fps.mp4" />
        <Newsletter />
      </div>
    </main>
  );
}
