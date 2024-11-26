import TextCycle from "./components/text-cycle";

export default function Home() {
  return (
    <div className="mx-auto relative min-h-screen flex flex-col sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col lg:flex-row items-center w-full">
        <TextCycle />
      </main>
    </div>
  );
}
