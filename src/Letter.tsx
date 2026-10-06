const audioUrl =
  "https://framerusercontent.com/assets/s6Kcvm0lGpVdIimLMjrCJjPgd28.mp3";

function Letter() {
  return (
    <main className="min-h-screen bg-white font-[Arial,Helvetica,sans-serif] text-[15px] leading-[1.45] text-[#222]">
      <article className="ml-5 w-[calc(100%-40px)] max-w-[560px] pb-24 pt-12 sm:ml-[6.5vw] md:pt-14">
        <p className="font-semibold">for you.</p>
        <p className="mt-1 text-[13px] text-[#888]">
          play this before you continue.
        </p>

        <audio
          className="mt-4 h-10 w-full max-w-[420px]"
          controls
          controlsList="nodownload"
          loop
          preload="metadata"
          src={audioUrl}
        >
          your browser cannot play this audio.
        </audio>

        <img
          className="mt-8 h-auto w-full"
          src="/a7f3c9/IMG_0376.jpg"
          alt="us"
        />

        <div className="mt-10">
          <p>i don&apos;t know how to write a love letter.</p>

          <p className="mt-4">i have never written one before.</p>

          <p className="mt-4">
            this might be the worst love letter you have ever got. i genuinely have no
            idea what i am doing. but it is mine and it is yours so please deal with
            it.
          </p>

          <p className="mt-4">
            i think i have wanted to write one my whole life. i just never met someone
            who made me want to stop hiding behind stupid jokes long enough to actually
            try.
          </p>

          <p className="mt-4">and then there was you.</p>

          <p className="mt-4">
            you already know i am a very unhinged weird random guy who would rather
            make a stupid joke than look someone in the eyes and say “i love you.” but
            then you smile at me and i forget whatever funny thing i was about to say.
          </p>

          <p className="mt-4">
            fuckkk. your smile. and those tiny little “hmmm”s you make. i genuinely do
            not understand how something that small can burn straight through my heart
            but it does. every single time.
          </p>

          <p className="mt-4">
            when your eyes get watery my heart actually aches. i can feel it hurting
            just because you are about to cry. and that day at lulu, when i left you
            alone and then saw your face, something in me broke. that was when i knew
            how fucking precious you are to me.
          </p>

          <p className="mt-4">
            i do not only want you when you are smiling and everything feels easy. i
            want to take care of you when you are hurting too. i want to cook for you,
            carry your bags, bring you water, sit beside you when words only make it
            worse, and do all those stupidly romantic little things. i want loving you
            to be something i do, not only something i say.
          </p>

          <p className="mt-4">
            i knew i was stuck with you for the rest of your life. yes, your life.
            unfortunate for you dumdum.
          </p>

          <p className="mt-4">
            fine. i accept it. i am obsessed with you. from the moment i saw you, you
            fucking owned my mind. the tiny alvin inside me was jumping around screaming
            <strong> YAYYYYYY!!!!!</strong> yes with all the caps tho.
          </p>

          <p className="mt-4">
            i love your cute as fuck nose. ahhh i just want to bite it off at this
            point. i love your glasses, your hair, and even you hitting me. somehow it
            is all fucking healing me.
          </p>

          <p className="mt-4">
            the last time we slept together i held you close and felt your warm body
            against mine while you were sleeping. i gave you a thousand kisses. 489 to
            be exact. yes i counted. i am a fucking creep but you already knew that.
          </p>

          <p className="mt-4">
            apparently it took god 347 words to create this whole planet. i think it
            will take me a lot more than that to explain my whole world. which is you,
            dumdum. not competing with god. i love that guy. but still.
          </p>

          <p className="mt-4">
            i know your little heart has been torn apart before. i am so sorry the
            world ever taught it to be afraid. sometimes i wish you could open my chest
            and hold my heart between your teeth. not to destroy it. just bite down
            softly enough to taste the truth: every warm aching part of it has been
            craving you.
          </p>

          <p className="mt-4">
            i know people are not forever. but i wish you could be my forever. i would
            leave behind everything i have made and everything i could become just to
            hold your hand and walk beside you.
          </p>

          <p className="mt-4">
            and if i die first, please hold my cold needy love-deprived hands until they
            lower my casket. when i leave this sweet planet, i want you to be the last
            person who holds them. one last time.
          </p>

          <p className="mt-4">
            so let me keep that little bhadra&apos;s heart safe. just let me. because my
            heart fucking craves for you and the thought of a world where you are absent
            is something i cannot even hold inside my head.
          </p>

          <p className="mt-4 font-semibold">i love you sho sho sho much.</p>

          <p className="mt-4">you make the little alvin feel like he finally came home.</p>
        </div>
      </article>
    </main>
  );
}

export default Letter;
