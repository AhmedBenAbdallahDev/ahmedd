import { SpecialText } from "@/components/ui/special-text";

export default function Home() {
  return (
    <main className="grid min-h-[100dvh] place-items-center overflow-hidden bg-black px-6 text-center text-neutral-100">
      <div className="flex w-full items-center justify-center">
        <SpecialText speed={18} delay={0} once>
          work in progress portfolio for ahmed*
        </SpecialText>
      </div>
    </main>
  );
}
