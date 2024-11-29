"use client";

import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { toast } from "sonner"

import background from "@/app/spare.png";
import myGirlfriend from "@/app/beatifulGirl.jpg";
import myGirlfriendOne from "@/app/beatifulGirl1.jpg";
import myGirlfriendTwo from "@/app/beatifulGirl2.jpg";
import myGirlfriendThree from "@/app/beatifulGirl3.jpg";
import myGirlfriendFour from "@/app/beatifulGirl4.jpg";
import myGirlfriendFive from "@/app/beatifulGirl5.jpg";
import myGirlfriendSix from "@/app/beatifulGirl6.jpg";

import {Box, Center, Container, SimpleGrid, StackSeparator, VStack} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
import Link from "next/link";

import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
      <VStack
          background={ "bg-neutral-800" }
          className='gap-[12px]'
          separator={
              <StackSeparator borderColor={ "bg-neutral-800" } />
          }
      >
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
                      18 y/o, Software Developer, Web Developer, Gamer, Linux
                      Enthusiast, and a little bit of everything.
                  </p>
              </Box>
          </Container>
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
          <Container>
              <SimpleGrid columns={[1, null, 2]} gap={4}>
                    <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <span className="text-xl font-bold">
                            Skills I&#39;m good at
                        </span>
                    </Button>
                    <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <span className="text-xl font-bold">
                            Personal project&#39;s
                        </span>
                    </Button>
                    <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <span className="text-xl font-bold">
                            Contact me
                        </span>
                    </Button>
                    <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <a className="text-xl font-bold" href={'#buy-me-a-beer'}>
                            Buy me a beer
                        </a>
                    </Button>
                    <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <a className="text-xl font-bold">
                            About me
                        </a>
                    </Button>
                    <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <a className="text-xl font-bold" href={'#my-best-girlfriend'}>
                            My best girlfriend
                        </a>
                    </Button>
              </SimpleGrid>
          </Container>
          <Container id='buy-me-a-beer'>
              <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
                  Buy me a beer!
              </h2>
              <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)]">
                  <blockquote className="pl-4 text-xl my-4 text-left">
                      I don&#39;t like beer, but I wouldn&#39;t mind if you donate to me for beer. After all, I need something to survive on, as developing cheats for games and my own business cards doesn&#39;t give me the money I would like :)
                  </blockquote>
                  <figcaption className="text-center">
                      <span className="font-bold">
                          @me, give me a beer!
                      </span>
                  </figcaption>
              </figure>
              <SimpleGrid columns={[1, null, 2]} gap={4} padding={4}>
                  <Button className='rounded-tl rounded-br' variant={'outline'}>
                        <Link className="text-xl font-bold" href={'https://send.monobank.ua/jar/8q7jfngYt1'}>
                            &#34;A jar in Monobank&#34;
                        </Link>
                  </Button>
                  <Button
                      className='rounded-tl rounded-br text-xl font-bold'
                      variant={'outline'}
                      onClick={() => {
                          toast.success("sadness1rip@gmail.com is my email for receiving beer :)")
                      }}
                  >
                      &#34;Paypal&#34;
                  </Button>
                  <Button
                      className='rounded-tl rounded-br text-xl font-bold'
                      variant={'outline'}
                      onClick={() => {
                          toast.success("`TReZG6poXtSFQ1wZdMpRL2BzKpALBdGXzT` is my address for receiving beer :)")
                      }}
                  >
                      &#34;TRC20&#34;
                  </Button>
              </SimpleGrid>
          </Container>
          <Container id='my-best-girlfriend'>
              <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
                  Beautiful girl!
              </h2>
              <Center>
                  <Image src={myGirlfriend} alt='my-girlfriend' className='rounded-[16px] max-w-[300px] max-h-[300px]'/>
              </Center>
              <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)]">
                  <blockquote className="pl-4 text-xl my-4 text-left">
                      The most perfect girl I&#39;ve ever met in my entire life. Even though things don&#39;t always go as smoothly as we would like, or as many people imagine the ideal relationship to be, but it&#39;s a great relationship, and the most beautiful girl, and most importantly, mine. :) I have so many words and ideas for variations on how to write about how beautiful she is - but the only thing that comes to mind is that I constantly want to see her beautiful sweet smile, for which I am willing to do anything. I may be silly, I would even say foolish, but I love her. She is my beautiful ray of sunshine :) She&#39;s my beautiful little kitten, very, very fluffy, who I just want to cuddle and cuddle, you have no idea how much :)
                  </blockquote>
                  <figcaption className="text-center">
                      <span className="font-bold">
                          @me, sayed that some one year ago :)
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
          </Container>
      </VStack>
  );
}
