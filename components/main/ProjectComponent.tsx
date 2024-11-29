import {Container} from "@chakra-ui/react";

export default function ProjectComponent() {
  return (
    <Container id='personal-projects'>
      <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
        Personal project&#39;s
      </h2>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)] mt-4">
        <blockquote className="pl-4 text-xl my-4 text-left">
          Even if i has a something to show, i&#39;m not gonna show it here, because most of my project&#39;s is just <strong> Cheat </strong> development and <strong> Commercial </strong> things and i have declared <strong> NDA </strong> document, i just wanna be happy :)
          <br/>
          I don&#39;t wanna show my code, i just wanna show my idea, and i&#39;m not gonna show my project&#39;s.
          <br/>
          If you want to see my project&#39;s, you can check my <strong> <a href='https://github.com/griffith1deady' target='_blank' rel='noreferrer'> Github </a> </strong> account.
          <br/>
          If you still wanna see something better, you can just see my website <strong> <a href='https://griffith1deady.github.io/' target='_blank' rel='noreferrer'> griffith1deady.github.io </a> </strong> :)
          <br/>
          I never will share my personal cheat development project&#39;s, because of some <strong> retards </strong> that will resell my work.
          <br/>
          <strong> Never. Ask. Never. Share. Never. Give. Never. Show. Never. Give. Never. Share. Never. Ask. </strong>
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