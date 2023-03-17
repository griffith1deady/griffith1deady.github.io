import {Card, Group} from "@vkontakte/vkui";
import {Center, Divider, Flex, IconButton, SimpleGrid, Text, useMediaQuery} from "@chakra-ui/react"
import {FaDiscord, FaGithub, FaSteam, FaTelegram, FaVk, FaYoutube} from "react-icons/fa";
import React from "react";
import {useRouter} from "next/router";
import {SocialLink} from "../types";

const socialContacts: SocialLink[] = [
    {
        name: "Discord",
        url: "https://discordapp.com/users/620135501201932300",
        icon: <FaDiscord/>,
        color: "rgb(0, 136, 204)"
    },
    {
        name: "VK",
        url: "https://vk.com/guts16",
        icon: <FaVk/>,
        color: "rgb(0, 136, 204)"
    },
    {
        name: "Telegram",
        url: "https://t.me/ssqupe",
        icon: <FaTelegram/>,
        color: "rgb(0, 136, 204)"
    },
    {
        name: "Github",
        url: "https://github.com/sadness1rip",
        icon: <FaGithub/>,
        color: "rgb(51, 51, 51)"
    },
    {
        name: "YouTube",
        url: "https://www.youtube.com/channel/UCAaiK-L0mqpTKqPEX8OBR3w",
        icon: <FaYoutube/>,
        color: "rgb(0, 136, 204)"
    },
    {
        name: "Steam",
        url: "https://steamcommunity.com/id/s5a4ed1sa7/",
        icon: <FaSteam/>,
        color: "rgb(27, 40, 56)"
    }
]

const ContactPage = () => {
    const router = useRouter()
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    return <Group mode={"card"} padding={"s"} header={<Center fontSize={24}> All my social links :) </Center>}>
        <Divider/>
        <SimpleGrid py={4} columns={3} gap={2}>
            {socialContacts.map(social => (
                <Card key={social.name}>
                    {isDesktop ? (
                        <Flex w={"100%"} key={social.name}>
                            <IconButton
                                rounded={4}
                                aria-label={social.name}
                                icon={social.icon}
                                w={"4rem"}
                                h={"4rem"}
                                fontSize={"2rem"}
                                onClick={() => router.push(social.url)}
                            />
                            <Center padding={4} fontSize={20}>{social.name}</Center>
                        </Flex>
                    ) : (<IconButton
                        key={social.name}
                        rounded={4}
                        aria-label={social.name}
                        icon={social.icon}
                        w={"4rem"}
                        h={"4rem"}
                        fontSize={"2rem"}
                        onClick={() => router.push(social.url)}
                    />)}
                </Card>
            ))}
        </SimpleGrid>

        <Center fontSize={24} py={4}> WARNING! </Center>
        <Divider/>
        <Text padding={4}>
            Please have a conscience and patience, and do not write to me just like that.
            without greetings and other things - immediately go into ignoring, good luck :)
        </Text>
    </Group>
}

export default ContactPage