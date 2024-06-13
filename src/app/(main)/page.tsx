import Form from "@/components/form";
import { Result } from "@/components/result";

export default function Home() {
  return (
    <main className="flex h-fit min-h-svh w-full flex-col justify-center">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
        <Form />
        <Result />
      </section>
    </main>
  );
}
