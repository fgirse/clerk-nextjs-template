import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <>

    <div className="flex flex-col gap-y-12 items-center justify-center">

      <h1 className="text-2xl md:text-3xl lg:text-5xl text-center text-slate-100">

       Hier erfolgt Ihte Anmeldung...


      </h1>

      <SignUp />

    </div>

  </>
  );
}
