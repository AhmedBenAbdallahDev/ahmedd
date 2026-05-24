import { SpecialText } from "@/components/ui/special-text";

export default function Home() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-black p-4">
      <div className="w-full max-w-4xl flex justify-center">
        <SpecialText speed={18} delay={0} once className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center text-white">
          work in progress portfolio for ahmed*
        </SpecialText>
      </div>
    </main>
  );
}
