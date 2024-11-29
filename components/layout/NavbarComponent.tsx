import {Box, Container, Flex} from "@chakra-ui/react";
import {Button} from "@/components/ui/button";
import Link from "next/link";
import {ColorModeButton} from "@/components/ui/color-mode";

export default function NavbarComponent() {
    return (
        <Box as='nav' background={{ base: "bg-neutral-100", _dark: "bg-neutral-900" }} className={`nav fixed opacity-[0.9] w-full mx-auto px-4 py-4 backdrop-blur-[10px] rounded-lg z-10`}>
            <Container maxW={"xl"}>
                <Flex justifyContent={"space-between"}>
                    <Button className='text-[28px] font-bold' variant='link' asChild>
                        <Link href={"/"}> griffith1deady </Link>
                    </Button>
                    <ColorModeButton/>
                </Flex>
            </Container>
        </Box>
    )
}