import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>

    <div className="bg-stone-700 py-7 flex flex-col gap-y-5 items-center justify-center">

      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-500">

        Melden Sie sich bitte an.

      </h1>

      <p className="text-sm text-center text-slate-200">Dieser Inhalt ist nur nach Anmeldung bzw. Registrierung zugänglich!</p>

      <SignIn />

    </div>

  </>
  );
}
