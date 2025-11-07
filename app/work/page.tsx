import Link from "next/link";

export default function Work() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 underline mb-4 inline-block">← back</Link>
          <h1 className="text-gray-900 text-2xl md:text-3xl mt-4">work</h1>
        </div>

        <div className="space-y-8 text-gray-700">
          <section>
            <div className="mb-1 text-lg">Software Developer</div>
            <div className="text-xs md:text-sm text-gray-500 mb-2">
              <a href="https://lascade.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline">Lascade</a> | 2 months
            </div>
            <ul className="list-none space-y-1 text-xs md:text-sm text-gray-600 ml-4">
              <li>• Developing shared libraries using Kotlin Multiplatform</li>
              <li>• Working on cross-platform code solutions and library architecture</li>
            </ul>
          </section>

          <section>
            <h2 className="text-gray-900 mb-3">education</h2>
            <div className="text-gray-700">
              <div>Bachelor of Technology in Computer Science Engineering</div>
              <div className="text-xs md:text-sm text-gray-500">First Year, First Semester | Current</div>
            </div>
          </section>

          <section>
            <h2 className="text-gray-900 mb-3">skills</h2>
            <div className="text-gray-700 space-y-1">
              <div>languages: Go, Kotlin, JavaScript, Solidity</div>
              <div>frameworks: Kotlin Multiplatform, React, Next.js, Web3</div>
              <div>specializations: Backend development, full-stack web development, distributed systems, blockchain applications</div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
