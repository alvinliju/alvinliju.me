const linkClass =
  "text-[#0645ad] underline decoration-1 underline-offset-2 hover:text-[#c00000]";

const interests = [
  {
    name: "music.",
    text: "mostly finding genres i have never heard before and following whatever sounds strange enough to keep me listening. i do not have a system. one song just leads to another place.",
  },
  {
    name: "useful software.",
    text: "i am less interested in software as a technical achievement and more interested in whether it is actually useful to someone. the best tools quietly earn a place in your life.",
  },
  {
    name: "building products.",
    text: "not just writing the code—the whole thing. deciding what should exist, removing what should not, making it understandable, and eventually putting it in front of real people.",
  },
  {
    name: "internet rabbit holes.",
    text: "random essays, forgotten websites, obscure arguments, old forum posts, and the kind of useless knowledge that becomes useful several years later for no obvious reason.",
  },
  {
    name: "poems, old stories, and classic literature.",
    text: "a recent development. do not ask me for a favourite book. i do not care about keeping a canon or making a reading personality; i read whatever resonates with me at that particular time.",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-[15px] leading-[1.45] text-[#222]">
      <aside className="px-5 pt-7 md:fixed md:right-7 md:top-6 md:w-36 md:p-0 md:text-right">
        <p className="font-semibold">alvin liju</p>
        <nav className="mt-1 flex flex-wrap gap-x-3 md:block" aria-label="page index">
          <a className={linkClass} href="#about">about</a>
          <br className="hidden md:block" />
          <a className={linkClass} href="#work">work</a>
          <br className="hidden md:block" />
          <a className={linkClass} href="#interests">interests</a>
          <br className="hidden md:block" />
          <a className={linkClass} href="/writings/">writings</a>
          <br className="hidden md:block" />
          <a className={linkClass} href="#elsewhere">elsewhere</a>
        </nav>
      </aside>

      <main className="ml-5 w-[calc(100%-40px)] max-w-[560px] pb-24 pt-12 sm:ml-[6.5vw] md:pt-14">
        <section id="about" className="scroll-mt-8">
          <img
            src="/blackhole.png"
            alt="a black hole"
            className="mb-5 h-[150px] w-[150px] border border-black/10 object-cover grayscale"
          />

          <p>
            hi. i&apos;m alvin. i live in kerala, india, and spend most of my time
            messing with computers. i also read a lot—not being performative at all,
            trust me. i will go insane if i stop consuming useless knowledge.
          </p>

          <p className="mt-4">
            don&apos;t consider this a portfolio thingy because, again, i apparently
            don&apos;t care about surviving (i do have a job, though). the whole purpose
            of this website is to inspire you and help me build my own personality. i
            was born on this earth 20 years ago, and there is not much i can do other
            than gain knowledge, talk to people, and help a few along the way. on that
            long (maybe) journey, i am building a character. it feels like a director
            developing a character for a story, except i can only do it using my
            previous experiences and a small iteration loop that keeps making me
            sweeter, better, and more tolerable.
          </p>

          <p className="mt-4">
            story time: how i fell in love with computers? all i remember about my sweet (sarcasm) childhood is computers and being
            called a nerd. i spent countless hours taking them apart because it was fun
            and fascinating at the same time. as a kid i could not fathom how a small
            aluminium chip (it is silicon, but i was stupid) could run games and put
            things on a screen. man, i was pumped.
          </p>

          <p className="mt-4">
            i still write code, read source, break things, fix them, and repeat. but i
            am just as likely to be looking for a new genre of music, trying to make a
            product more useful, or reading some old story i found three links too deep
            into the internet.
          </p>

          <p className="mt-4">
            email: {" "}
            <a className={linkClass} href="mailto:alvinliju44@gmail.com">
              alvinliju44@gmail.com
            </a>
            .
          </p>
        </section>

        <section id="work" className="mt-8 scroll-mt-8">
          <p className="mb-4">work:</p>

          <p>
            i currently work as a software engineer at {" "}
            <a className={linkClass} href="https://mixrank.com" target="_blank" rel="noreferrer">
              mixrank
            </a>
            , where i build scrapers and internal tools.
          </p>

          <p className="mt-4">
            i was studying engineering but decided to take a gap in my first semester
            because of health issues.
          </p>
        </section>

        <section id="interests" className="mt-8 scroll-mt-8">
          <p>things i&apos;m interested in:</p>

          <ul className="mt-4 list-disc space-y-3 pl-8">
            {interests.map((interest) => (
              <li key={interest.name}>
                <strong>{interest.name}</strong> {interest.text}
              </li>
            ))}
          </ul>
        </section>

        <section id="elsewhere" className="mt-8 scroll-mt-8">
          <p>
            you can find me on {" "}
            <a className={linkClass} href="https://github.com/alvinliju" target="_blank" rel="noreferrer">
              github
            </a>
            , on {" "}
            <a className={linkClass} href="https://x.com/e3he0" target="_blank" rel="noreferrer">
              x
            </a>
            , or reach me by {" "}
            <a className={linkClass} href="mailto:alvinliju44@gmail.com">
              email
            </a>
            .
          </p>

          <p className="mt-8 text-[13px] text-[#888]">updated 11 august 2026</p>
        </section>
      </main>
    </div>
  );
}

export default App;
