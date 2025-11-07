import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="mb-12">
          <h1 className="text-gray-900 text-2xl md:text-3xl mb-2">alvin</h1>
          <p className="text-gray-600">this is my not so cool website</p>
        </div>

        <div className="w-full h-38 aspect-video relative mb-8 overflow-hidden rounded-lg">
          <Image
            src="/blackhole.png"
            alt="blackhole"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
            priority
          />
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            started with taking things apart. then modding games. then realizing i could build anything.
          </p>
          <p>
            now i write code. go, kotlin, javascript, solidity. backend, distributed systems, blockchain.
            whatever solves the problem, at this point if i am intruged enough i will do anything.
          </p>
          <p>
            i just mess with my computer all day, i build things, i learn things, i break things, i fix things.
          </p>
          <p>
            i think as a society we are doomed and ai is gonna take over the world sooner or later but i'll still do what i do because its funhh, and if they ever take over i am with themm....
          </p>
          <p className="text-gray-500 text-sm">
            curiosity doesn't kill the cat but it sure as hell makes it stronger.
          </p>
        </div>

        <nav className="pt-8 space-y-2 text-gray-700">
          <div><Link href="/blog" className="hover:text-gray-900 underline">blog</Link></div>
          <div><Link href="/work" className="hover:text-gray-900 underline">work</Link></div>
          <div><Link href="/contact" className="hover:text-gray-900 underline">contact</Link></div>
        </nav>
      </div>
    </div>
  );
}