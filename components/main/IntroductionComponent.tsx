import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import background from "@/app/spare.png";
import {Box, Container} from "@chakra-ui/react";

export default function IntroductionComponent() {
  return (
    <Container>
      <AspectRatio ratio={12 / 4} className='bg-muted max-h-[300px]'>
        <Image
          src={background}
          alt='griffith1deady'
          fill
          className="h-full w-full object-cover rounded-[16px]"
        />
      </AspectRatio>
      <Box padding={4} className='text-center'>
        <h2 className='font-bold text-[2.25rem] text-foreground'>
          griffith1deady
        </h2>
        <p className='font-sans text-[18px] opacity-[0.7]'>
          18 y/o, Software Developer, Web Developer, Gamer, Linux Enthusiast, and a little bit of everything.
        </p>
      </Box>
    </Container>
  );
}