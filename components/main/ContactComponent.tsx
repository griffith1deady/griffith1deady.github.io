import {Container, SimpleGrid} from "@chakra-ui/react";
import {FaDiscord, FaTelegram} from "react-icons/fa6";
import {Button} from "@/components/ui/button";

const communicationPoints = [
  {
    name: "Telegram",
    href: "https://t.me/griffith1deady",
    icon: <FaTelegram/>
  },
  {
    name: "Discord",
    href: "https://discord.com/users/griffith1deady",
    icon: <FaDiscord/>
  }
];

export default function ContactComponent() {
  return (
    <Container id='contact-me'>
      <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
        Contact me
      </h2>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)] mt-4">
        <blockquote className="pl-4 text-xl my-4 text-left">
          If you want to contact me, remember the simple rules: only the “nohello” principle.
          <br/>
          I have no interest in communicating with any of you, and I don&#39;t care what you want. 
          <br/>
          Really interested in contacting me?
          <br/>
          Then write only on business, without unnecessary water, without a reason to make further communication.
          <br/>
          <strong> No. Hello. No. Hello. No. Hello. </strong>
          <br/>
          <strong> Never. Be. Interested. Never. Be. Interested. Never. Be. Interested. Never. Be. Interested. </strong>
        </blockquote>
        <figcaption className="text-center">
          <span className="font-bold">
            :)
          </span>
        </figcaption>
      </figure>
      <SimpleGrid columns={[1, null, 2]} gap={4} padding={4}>
        {
          communicationPoints.map((point, index) => (
            <Button
              key={index}
              className='rounded-tl rounded-br text-xl font-bold'
              variant={'outline'}
              asChild
            >
              <a href={point.href} target='_blank' rel='noreferrer'>
                {point.icon} {point.name}
              </a>
            </Button>
          ))
        }
      </SimpleGrid>
    </Container>
  );
}