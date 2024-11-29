import {Box, Center, Container, SimpleGrid, VStack} from "@chakra-ui/react";
import Image from "next/image";
import myGirlfriend from "@/app/beatifulGirl.jpg";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import myGirlfriendOne from "@/app/beatifulGirl1.jpg";
import myGirlfriendTwo from "@/app/beatifulGirl2.jpg";
import myGirlfriendThree from "@/app/beatifulGirl3.jpg";
import myGirlfriendFour from "@/app/beatifulGirl4.jpg";
import myGirlfriendFive from "@/app/beatifulGirl5.jpg";
import myGirlfriendSix from "@/app/beatifulGirl6.jpg";
import {Card, CardContent} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {CheckIcon} from "lucide-react";

const characteristics = [
  { value: "The best girl!" },
  { value: "My darling!" },
  { value: "The most beautiful girl!" },
  { value: "Adequate" },
  { value: "Adaptive" },
  { value: "Accurate" },
  { value: "Active" },
  { value: "Ambitious" },
  { value: "Vigilant" },
  { value: "Perfect" },
  { value: "Unselfish" },
  { value: "Noble" },
  { value: "Prudent" },
  { value: "Brilliant" },
  { value: "Polite" },
  { value: "Cheerful" },
  { value: "Mutually Understanding" },
  { value: "Thoughtful" },
  { value: "Generous" },
  { value: "Attentive" },
  { value: "Genial" },
  { value: "Harmonious" },
  { value: "Flexible" },
  { value: "Kind" },
  { value: "Intelligent" },
  { value: "Soulful" },
  { value: "Friendly" },
  { value: "Worthy" },
  { value: "Fascinating" },
  { value: "Wonderful" },
  { value: "Caring" },
  { value: "Golden" },
  { value: "Ideological" },
  { value: "Sincere" },
  { value: "Marvelous" },
  { value: "Intriguing" },
  { value: "Beautiful" },
  { value: "Radiant" },
  { value: "Best" }
];

export default function BeautifulComponent() {
  return (
    <Container id='my-best-girlfriend'>
      <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
        Beautiful girl!
      </h2>
      <VStack>
        <Image src={myGirlfriend} alt='my-girlfriend' className='rounded-[16px] max-w-[300px] max-h-[300px]'/>
        <Box padding={4} className='text-center'>
          <h2 className='font-bold text-[2.25rem] text-foreground'>
            shin-a
          </h2>
          <p className='font-sans text-[18px] opacity-[0.7]'>
            17 y/o female, just a perfect girl, my little mouse :)
          </p>
        </Box>
      </VStack>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)]">
        <blockquote className="pl-4 text-xl my-4 text-left">
          The most perfect girl I&#39;ve ever met in my entire life. Even though things don&#39;t always go as smoothly as we would like, or as many people imagine the ideal relationship to be, but it&#39;s a great relationship, and the most beautiful girl, and most importantly, mine. :) I have so many words and ideas for variations on how to write about how beautiful she is - but the only thing that comes to mind is that I constantly want to see her beautiful sweet smile, for which I am willing to do anything. I may be silly, I would even say foolish, but I love her. She is my beautiful ray of sunshine :) She&#39;s my beautiful little kitten, very, very fluffy, who I just want to cuddle and cuddle, you have no idea how much :)
        </blockquote>
        <figcaption className="text-center">
          <span className="font-bold">
            @me, sayed that year ago :)
          </span>
        </figcaption>
      </figure>
      <Center pt={10}>
        <Carousel className="w-full max-w-xs">
          <CarouselContent>
            {Array.from([myGirlfriendOne, myGirlfriendTwo, myGirlfriendThree, myGirlfriendFour, myGirlfriendFive, myGirlfriendSix]).map((image, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image src={image} alt='my-girlfriend' className='rounded-[16px] max-w-[300px] max-h-[300px]'/>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Center>
      <SimpleGrid columns={[1, null, 4]} gap={4}>
        {
          characteristics.map((characteristic, index) => (
            <Button className='font-bold text-[14px] text-foreground text-center' key={index} variant='outline' asChild>
              <h2> <CheckIcon/> {characteristic.value} </h2>
            </Button>
          ))
        }
      </SimpleGrid>
    </Container>
  );
}