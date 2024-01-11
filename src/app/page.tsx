import Image from "next/image";
import Link from "next/link";
import componentsImg from "./assets/components.svg";
import { DownArrow, RightArrow } from "./icons";
import "./home.css";

export default function Home() {
  return (
    <>
    <main className="container bg">

          
<div className="bg-gray-200 border-zinc-800 grid grid-cols-12 grid-rows-12 gap-8">
    <div className="col-span-8 row-span-3">1
    <h1 className="text-5xl font-semibold text-transparent md:text-6xl gradient">
            Timeless Design
          </h1>
    </div>
    <div className="col-span-4 row-span-4 col-start-9">2</div>
    <div className="col-span-2 row-span-2 col-start-11 row-start-5">3</div>
    <div className="col-span-4 row-span-4 col-start-5 row-start-7">4</div>
    <div className="col-span-2 row-span-3 col-start-9 row-start-5">5</div>
    <div className="col-span-3 row-span-3 col-start-1 row-start-4">7</div>
    <div className="col-span-4 row-span-4 col-start-9 row-start-8">8</div>
    <div className="col-span-4 row-span-4 col-start-1 row-start-7">9</div>
    <div className="col-span-5 row-span-3 col-start-4 row-start-4">10</div>
    <div className="col-span-6 row-span-2 col-start-3 row-start-11">11</div>
    <div className="col-span-2 col-start-11 row-start-7">12</div>
    <div className="col-span-2 row-span-2 col-start-1 row-start-11">13</div>
    <div className="col-span-4 col-start-9 row-start-12">14</div>
</div>
    

      <article className="grid lg:grid-cols-2">
        <div className="px-8 py-20 md:px-20 lg:py-48">
          
          <p className="mt-2 text-lg">
          &laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;
          </p>
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
    </main>
    </>
  );
}
