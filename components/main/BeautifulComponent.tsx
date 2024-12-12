"use client";

import {Box, Center, Container, SimpleGrid, VStack} from "@chakra-ui/react";
import Image, {StaticImageData} from "next/image";
import catGif from "@/app/cat.gif";
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
import React, {useState} from "react";

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

type Gif = {
  id: number;
  url: string | StaticImageData;
  style: React.CSSProperties;
  createdAt: number;
};

export default function BeautifulComponent() {
  const [gifs, setGifs] = useState<Gif[]>([]);

  const spawnGif = () => {
    let attempts = 0;
    let newGif: Gif | null = null;

    while (attempts < 20) {
      const randomTop = Math.random() * (window.innerHeight - 150);
      const randomLeft = Math.random() * (window.innerWidth - 150);

      if (!gifs.some(gif => isOverlap(gif.style, randomTop, randomLeft))) {
        newGif = {
          id: Date.now(),
          url: catGif,
          createdAt: Date.now(),
          style: {
            top: `${randomTop}px`,
            left: `${randomLeft}px`,
            position: 'fixed',
            zIndex: 100,
            width: '150px',
            height: '150px',
          },
        };
        break;
      }

      attempts++;
    }

    if (newGif) {
      setGifs(prevGifs => [...prevGifs, newGif]);

      setTimeout(() => {
        setGifs(prevGifs => prevGifs.filter(gif => gif.id !== newGif!.id));
      }, 5000);
    }
  };

  const isOverlap = (existingStyle: React.CSSProperties, top: number, left: number) => {
    const existingTop = parseInt(existingStyle.top as string, 10);
    const existingLeft = parseInt(existingStyle.left as string, 10);
    const existingWidth = 150;
    const existingHeight = 150;

    return (
      top < existingTop + existingHeight &&
      top + 150 > existingTop &&
      left < existingLeft + existingWidth &&
      left + 150 > existingLeft
    );
  };

  return (
    <Container id='my-best-girlfriend'>
      <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
        Beautiful girl!
      </h2>
      <VStack>
        <video src='/beautiful.mp4' autoPlay loop muted className='rounded-[16px] max-w-[300px] max-h-[300px]'/>
        <Box padding={4} className='text-center'>
          <h2 className='font-bold text-[2.25rem] text-foreground'>
            d-i, aka shin-a aka @garaset
          </h2>
          <p className='font-sans text-[18px] opacity-[0.7]'>
            17 y/o female, just a perfect girl, my little mouse :)
          </p>
          <Button onClick={spawnGif} className='font-bold text-[16px] mt-4 text-foreground text-center' variant='outline'>
            please click me :3
          </Button>
          {
            gifs.map((gif, index) => (
              <div key={index} style={gif.style}>
                <Image src={gif.url} alt='my-girlfriend' className='rounded-[16px] max-w-[300px] max-h-[300px]'/>
              </div>
            ))
          }
        </Box>
      </VStack>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)]">
        <blockquote className="pl-4 text-xl my-4 text-left">
          The most perfect girl I&#39;ve ever met in my entire life. Even though things don&#39;t always go as smoothly
          as we would like, or as many people imagine the ideal relationship to be, but it&#39;s a great relationship,
          and the most beautiful girl, and most importantly, mine. :) I have so many words and ideas for variations on
          how to write about how beautiful she is - but the only thing that comes to mind is that I constantly want to
          see her beautiful sweet smile, for which I am willing to do anything. I may be silly, I would even say
          foolish, but I love her. She is my beautiful ray of sunshine :) She&#39;s my beautiful little kitten, very,
          very fluffy, who I just want to cuddle and cuddle, you have no idea how much :)
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
          <CarouselPrevious/>
          <CarouselNext/>
        </Carousel>
      </Center>
      <VStack>
        <figure className="text-center border-l-4 p-4 border-[var(--chakra-colors-gray-muted)]">
          <blockquote className="pl-4 text-xl my-4 text-left">
            You the my fucking best girlfriend ever, you are the best girlfriend ever, you are the best girlfriend
            ever, you are the best girlfriend ever, you are the best girlfriend ever, you are the best girlfriend
            ever, you are the best girlfriend ever, you are the best girlfriend ever, you are the best girlfriend
            ever.
            <br/>

            You&#39;ll my entire world, you&#39;ll my entire world, you&#39;ll my entire world, you&#39;ll my entire world.
            <br/>

            <strong> And i will always choose you, and i will always choose you, and i will always choose you. </strong>
          </blockquote>
          <figcaption className="text-center">
          <span className="font-bold">
            { `<3` }
          </span>
          </figcaption>
        </figure>
        <SimpleGrid className='pt-4' columns={[1, null, 4]} gap={4}>
          {
            characteristics.map((characteristic, index) => (
              <Button className='font-bold text-[14px] text-foreground text-center' key={index} variant='outline' asChild>
                <h2><CheckIcon/> {characteristic.value} </h2>
              </Button>
            ))
          }
        </SimpleGrid>
      </VStack>
    </Container>
  );
}