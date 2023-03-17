import {Gallery, Group} from "@vkontakte/vkui";
import {Box, Center, Image, Text, useMediaQuery} from "@chakra-ui/react"
import {NextSeo} from "next-seo";
const BeautifulPage = () => {
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    return <>
        <NextSeo
            title={"s5a4ed1sa7 | Beatiful girl!"}
            description={"My favorite beautiful girl :)"}
        />
        <Group mode={"card"} header={<Center fontSize={24}> Beautiful girl! </Center>}>
            <Center py={4}>
                <Image alt={""} src={"beatifulGirl.jpg"} rounded={360} w={isDesktop ? "500" : "250"} h={ isDesktop ? "500" : "250"}/>
            </Center>

            <Text padding={4} fontSize={20}>
                The most perfect girl I&apos;ve ever met in my entire life. Even though things don&apos;t always go as smoothly as we would like, or as many people imagine the ideal relationship to be, but it&apos;s a great relationship, and the most beautiful girl, and most importantly, mine. :)
                I have so many words and ideas for variations on how to write about how beautiful she is - but the only thing that comes to mind is that I constantly want to see her beautiful sweet smile, for which I am willing to do anything. I may be silly, I would even say foolish, but I love her. She is my beautiful ray of sunshine :)
                She&apos;s my beautiful little kitten, very, very fluffy, who I just want to cuddle and cuddle, you have no idea how much :)
            </Text>

            <Box padding={4}>
                <Gallery bullets="dark" showArrows>
                    <Image alt={""} src={"beatifulGirl1.jpg"}/>
                    <Image alt={""} src={"beatifulGirl2.jpg"}/>
                    <Image alt={""} src={"beatifulGirl3.jpg"}/>
                    <Image alt={""} src={"beatifulGirl4.jpg"}/>
                    <Image alt={""} src={"beatifulGirl5.jpg"}/>
                    <Image alt={""} src={"beatifulGirl6.jpg"}/>
                </Gallery>
            </Box>
        </Group>
    </>
}

export default BeautifulPage