import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="mb-12">
          <h1 className="text-gray-900 text-2xl md:text-3xl mb-2">alvin</h1>
          <p className="text-gray-600">nobody knows me</p>
        </div>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            the system is broken. we build anyway.
          </p>
          <p>
            code is the only truth that matters. everything else is noise.
          </p>
          <p>
            i build tools because existing ones don't cut it. i learn because curiosity kills the cat but what doesnt kill it makes it stronger.
          </p>
          <p>
            i am not a pro but i kinda know what go, kotlin, javascript, solidity are. backend, full-stack, distributed systems, blockchain. 
            doesn't matter what stack. what matters is solving the problem.
          </p>
          <p className="text-gray-500 text-sm">
            self driven. generally curious. adapt or die.
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
