import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <>
    <section className="flex-1 py-3 lg:min-w-full lg:mx-auto">
        <div className="w-full bg-[url('/images/Grid.svg')]  bg-repeat">
          <div className=" lg:w-full" >
            <div className=" bg-gradient-to-b from-sky-950 via-neutral-800">
{/*====================================================grid start ===============*/}
          
<div className="py-2 2px-3 rounded-xl border-zinc-800 grid grid-cols-12 grid-rows-12 gap-3">
    <div className="col-span-8 row-span-3">1
    <h1 className="text-5xl font-black  md:text-6xl  bg-gradient-to-b from-zinc-500 to-zinc-200 bg-clip-text text-transparent">
            Timeless
          </h1>
          <h1 className="text-6xl font-black md:text-6xl bg-gradient-to-b from-amber-600 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent">
            Design
          </h1>
    </div>
    <div className="rounded-2xl bg-white/10 col-span-4 row-span-4 col-start-9">2
    
    <p className="mt-2 text-zinc-200 bold text-right text-xs px-3">
          &laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;
          </p>
    </div>
    <div className="col-span-2 row-span-2 col-start-11 row-start-5">3
    <div className="relative right-5 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs lg:text-xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 lg:w-20 lg:h-20 lg:left-56">
                      <p className="text-sm lg:text-xl font-black lg:leading-3">Carl</p>
                      <p className="text-sm lg:text-xl font-black">Sagan</p>
                  </div>
    </div>
    <div className=" rounded-xl col-span-6 row-span-4 col-start-3 row-start-7">4
    <div className=" flex flex-col items-center jusify-center">
    <Image className="rounded-xl" src="/images/LogoEZ.png" width="350" height="350" alt="Logo: 8zense.com"/>
    
    </div>
    </div>
    <div className="col-span-2 row-span-3 col-start-9 row-start-5">5</div>
    <div className="col-span-3 row-span-3 col-start-1 row-start-4">7</div>
    <div className="bg-white/20 rounded-xl col-span-4 row-span-4 col-start-9 row-start-8">8</div>
    <div className="bg-white/30 rounded-xl col-span-2 row-span-4 col-start-1 row-start-7">9</div>
    <div className="bg-yellow-500/20 rounded-xl col-span-5 row-span-3 col-start-4 row-start-4">10
    <Image
                  src="/images/sideboardobg.png"
                  className="mx-auto"
                  width="600"
                  height="420"
                  alt="banner image"
                  priority
                />
    </div>
    <div className="bg-white/30 rounded-xl col-span-6 row-span-2 col-start-3 row-start-11">11
    
    </div>
    <div className="col-span-2 col-start-11 row-start-7">12</div>
    <div className="col-span-2 row-span-2 col-start-1 row-start-11">13</div>
    <div className="bg-white/50 rounded-2xl col-span-4 col-start-9 row-start-12">14</div>
</div>
    
</div>
</div>
</div>
      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          
          <div className="flex gap-2 mt-8">
            <Link
              href="/dashboard"
              className="flex content-center gap-2 px-4 py-2 font-semibold text-white transition-colors duration-200 rounded-lg bg-primary-600 hover:bg-primary-700"
            >
              View Demo
              <div className="m-auto">
                <RightArrow />
              </div>
            </Link>
            <a
              className="flex gap-2 px-4 py-2 font-semibold text-gray-600 transition duration-100 rounded-lg hover:text-gray-800"
              href="#features"
            >
              Learn more
              <div className="m-auto">
                <DownArrow />
              </div>
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <Image src={componentsImg} alt="Clerk embeddable components" />
        </div>
      </article>
      <article
        className="px-8 py-12 bg-black bg-opacity-5 md:px-20 md:py-24"
        id="features"
      >
        <h2 className="text-3xl font-semibold">What's under the hood?</h2>
        <p className="mt-2">
          This template repo uses some of the following features provided by
          Clerk. To learn more, read the{" "}
          <a
            href="https://clerk.com/docs?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
            className="font-medium text-primary-600 hover:underline"
          >
            Clerk Docs
          </a>
          .
        </p>
        <div className="grid gap-8 mt-8 lg:grid-cols-3">
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Customizable Components</h3>
            <p className="text-gray-700">
              Prebuilt components to handle essential functionality like user
              sign-in, sign-up, and account management.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/component-reference/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Components <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">React Hooks</h3>
            <p className="text-gray-700">
              Build custom functionality by accessing auth state, user and
              session data, and more with Clerk's React Hooks.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/reference/clerk-react/useuser?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              React Hooks <span className="arrow">-&gt;</span>
            </a>
          </div>
          <div className="flex flex-col h-56 gap-1 p-8 bg-white shadow-lg rounded-2xl">
            <h3 className="text-lg font-medium">Multitenancy</h3>
            <p className="text-gray-700">
              Seamlessly create and switch between organizations, invite and
              manage members, and assign custom roles.
            </p>
            <div className="grow"></div>
            <a
              href="https://clerk.com/docs/organizations/overview?utm_source=vercel-template&utm_medium=template_repos&utm_campaign=nextjs_template"
              className="text-primary-600 cta hover:underline"
              target="_blank"
            >
              Organizations <span className="arrow">-&gt;</span>
            </a>
          </div>
        </div>
      </article>
    </section>
    </>
  );
}
