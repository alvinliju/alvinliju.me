import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-2xl mx-auto space-y-8">
        <div className="mb-12">
          <h1 className="text-gray-900 text-2xl md:text-3xl mb-2">alvin</h1>
          <p className="text-gray-600">nobody knows me</p>
        </div>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            Self driven, generally curious and i think i can adapt really quick, comfortable in building tools from scratch when existing solutions don't meet the requirements. Quick learner with curiosity driven approach to learn tech.
          </p>
          <p>
            Building with Go, Kotlin, JavaScript, Solidity. Working on backend, full-stack, distributed systems, and blockchain applications.
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
