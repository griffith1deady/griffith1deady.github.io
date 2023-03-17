import {Group} from "@vkontakte/vkui";
import {Center, Image, useMediaQuery} from "@chakra-ui/react";

const AboutPage = () => {
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    return <Group mode={"card"} header={<Center fontSize={24}> About me </Center>}>
        <Center py={4}>
            <Image alt={""} src={"/avatar.jpg"} rounded={360} w={isDesktop ? "500" : "250"} h={ isDesktop ? "500" : "250"}/>
        </Center>
    </Group>
}

export default AboutPage