"use client";

import {Container, SimpleGrid} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {toast} from "sonner";

export default function DonationComponent() {
  return (
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
  );
}