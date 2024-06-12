import { FramerProvider } from "@/providers/framer-provider";
import { JotaiProvider } from "@/providers/jotai-provider";
import { LenisProvider } from "@/providers/lenis-provider";

export const AppProviders = (props: { children: React.ReactNode }) => {
  return (
    <>
      <JotaiProvider>
        <FramerProvider>
          <LenisProvider>{props.children}</LenisProvider>
        </FramerProvider>
      </JotaiProvider>
    </>
  );
};
