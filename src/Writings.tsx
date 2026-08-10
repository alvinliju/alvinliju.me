const linkClass =
  "text-[#0645ad] underline decoration-1 underline-offset-2 hover:text-[#c00000]";

const writings: Array<{ title: string; href: string }> = [];

function Writings() {
  return (
    <div className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-[15px] leading-[1.45] text-[#222]">
      <aside className="px-5 pt-7 md:fixed md:right-7 md:top-6 md:w-36 md:p-0 md:text-right">
        <p className="font-semibold">alvin liju</p>
        <nav className="mt-1 flex flex-wrap gap-x-3 md:block" aria-label="site navigation">
          <a className={linkClass} href="/">about</a>
          <br className="hidden md:block" />
          <a className={linkClass} href="/writings/">writings</a>
        </nav>
      </aside>

      <main className="ml-5 w-[calc(100%-40px)] max-w-[560px] pb-24 pt-12 sm:ml-[6.5vw] md:pt-14">
        <header>
          <h1 className="font-semibold">writings</h1>
          <p className="mt-1 text-[13px] text-[#888]">notes, stories, and whatever survives the draft folder.</p>
        </header>

        <section className="mt-10" aria-label="writing index">
          <ul className="space-y-2">
            {writings.map((writing) => (
              <li key={writing.href}>
                <a className={linkClass} href={writing.href}>
                  {writing.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default Writings;
