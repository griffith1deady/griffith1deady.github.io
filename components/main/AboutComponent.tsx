import {Container} from "@chakra-ui/react";

export default function AboutComponent() {
  return (
    <Container id='about-me'>
      <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
        About me
      </h2>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)] mt-4">
        <blockquote className="pl-4 text-xl my-4 text-left">
          I&#39;m a Software Developer, Web Developer, Gamer, Linux Enthusiast, and a little bit of everything.
          <br/>
          Just chill guy that don&#39;t need to be cool.
          <br/>
          Born in Ukraine, and currently living in Ukraine also.
          <br/>
          Has borned in 2006 year, 10 january.
          <br/>
          Started to be programmer at 2020 year as Minecraft modding and coding.
          <br/>
          If i was be normal guy, i never would be programmer, but i&#39;m just a mental illness guy, and i&#39;m really interested in programming, i&#39;m a big fan of Java, Kotlin, C, C++, Rust, Python, TypeScript, JavaScript, Nim, Zig, and i&#39;m also interested in other languages, like Go, Swift, and Dart.
        </blockquote>
        <figcaption className="text-center">
          <span className="font-bold">
            :)
          </span>
        </figcaption>
      </figure>
    </Container>
  );
}