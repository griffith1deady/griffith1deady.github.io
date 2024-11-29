import {Container} from "@chakra-ui/react";

export default function JokeComponent() {
  return (
    <Container>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)]">
        <blockquote className="pl-4 text-xl my-4">
          &#34;Fork in the eye or in the ass, which one?&#34;
        </blockquote>
        <figcaption className="text-center">
          <span className="font-bold">
            @someone
          </span>
        </figcaption>
        <blockquote className="pl-4 text-xl my-4">
          &#34;I don&#39;t see that you have one eye.&#34;
        </blockquote>
        <figcaption className="text-center">
          <span className="font-bold">
            @me
          </span>
        </figcaption>
      </figure>
    </Container>
  );
}