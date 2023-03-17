import {Gallery, Group} from "@vkontakte/vkui";
import {Box, Center, Image, Text, useMediaQuery} from "@chakra-ui/react"
const BeautifulPage = () => {
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    return <Group mode={"card"} header={<Center fontSize={24}> Beautiful girl! </Center>}>
        <Center py={4}>
            <Image src={"/beatifulGirl.jpg"} rounded={360} w={isDesktop ? "500" : "250"} h={ isDesktop ? "500" : "250"}/>
        </Center>

        <Text padding={4} fontSize={20}>
            The most perfect girl I've ever met in my entire life. Even though things don't always go as smoothly as we would like, or as many people imagine the ideal relationship to be, but it's a great relationship, and the most beautiful girl, and most importantly, mine. :)
            I have so many words and ideas for variations on how to write about how beautiful she is - but the only thing that comes to mind is that I constantly want to see her beautiful sweet smile, for which I am willing to do anything. I may be silly, I would even say foolish, but I love her. She is my beautiful ray of sunshine :)
            She's my beautiful little kitten, very, very fluffy, who I just want to cuddle and cuddle, you have no idea how much :)
        </Text>

        <Box padding={4}>
            <Gallery bullets="dark" showArrows>
                <Image src={"/beatifulGirl1.jpg"}/>
                <Image src={"/beatifulGirl2.jpg"}/>
                <Image src={"/beatifulGirl3.jpg"}/>
                <Image src={"/beatifulGirl4.jpg"}/>
                <Image src={"/beatifulGirl5.jpg"}/>
                <Image src={"/beatifulGirl6.jpg"}/>
            </Gallery>
        </Box>
    </Group>
}

export default BeautifulPage