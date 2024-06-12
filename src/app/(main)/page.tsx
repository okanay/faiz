import Form from "@/components/form";
import Result from "@/components/result";

export default function Home() {
  return (
    <main className="flex h-fit min-h-svh w-full flex-col justify-center">
      <section className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-8 md:flex-row md:items-start md:justify-center">
        <Form />
        <Result />
      </section>
    </main>
  );
}
