import {Container, SimpleGrid} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";

const navigationPoints = [
  {
    name: "Skills I'm good at",
    href: "#skills-i'm-good-at",
  },
  {
    name: "Personal project's",
    href: "#personal-projects",
  },
  {
    name: "Contact me",
    href: "#contact-me",
  },
  {
    name: "Buy me a beer",
    href: "#buy-me-a-beer",
  },
  {
    name: "About me",
    href: "#about-me",
  },
  {
    name: "My best girlfriend",
    href: "#my-best-girlfriend",
  },
];

export default function NavigationComponent() {
    return (
      <Container>
        <SimpleGrid columns={[1, null, 2]} gap={4}>
          {navigationPoints.map((point, index) => (
            <Button
              key={index}
              className='rounded-tl rounded-br text-xl font-bold'
              variant={'outline'}
              asChild
            >
              <a href={point.href}>
                {point.name}
              </a>
            </Button>
          ))}
        </SimpleGrid>
      </Container>
    )
}