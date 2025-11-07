import Link from "next/link";

export default function Contact() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-mono p-8">
      <div className="max-w-3xl mx-auto space-y-6">
        <div className="mb-8">
          <Link href="/" className="text-gray-600 hover:text-gray-900 underline mb-4 inline-block">← back</Link>
          <h1 className="text-gray-900 text-2xl md:text-3xl mt-4">contact</h1>
        </div>

        <div className="space-y-4 text-gray-700">
          <div>email: <a href="mailto:alvinliju44@gmail.com" className="hover:text-gray-900 underline">alvinliju44@gmail.com</a></div>
          <div>github: <a href="https://github.com/alvinliju" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline">github.com/alvinliju</a></div>
          <div>x: <a href="https://x.com/e3he0" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 underline">@e3he0</a></div>
          <div>location: Somewhere in Kerala, India</div>
        </div>
      </div>
    </div>
  );
}
