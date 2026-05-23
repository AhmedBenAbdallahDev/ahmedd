import { SpecialText } from "@/components/ui/special-text";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-center bg-black text-neutral-100 overflow-hidden m-0 p-0 absolute inset-0">
      <div className="w-full flex justify-center">
        <SpecialText speed={18} delay={0} once className="text-xl md:text-3xl">
          work in progress portfolio for ahmed*
        </SpecialText>
      </div>
    </main>
  );
}
