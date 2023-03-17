import {Group} from "@vkontakte/vkui";
import {Center, Text} from "@chakra-ui/react"
const BiographyPage = () => {
    return <Group mode={"card"} header={<Center fontSize={24}> My biography </Center>}>
        <Text padding={4} fontSize={20}>
            The easiest guy, who was born on January 10, 2006.
            At the age of 4.5 he went to preparatory class in a Ukrainian school,
            at the age of 14 he graduated,
            after which he immediately went to college in the city of Zaporozhye, Aviation.
            Since the first year I was interested in programming and got involved in it,
            learning more and more languages, trying to understand what I want from life, what to do and what to be.
            I started my way with Java, or to be more precise,
            by writing modifications for the game Minecraft.
            I liked it, after that I already pumped my skills, knowledge of the language,
            syntax and oop, and went into something deeper, and gained knowledge of many things.
            Class transformation, reflection, and all that stuff.
            I realized one thing from life: I only want to do something global,
            which will prove to me that I&apos;m worth something :)
        </Text>
    </Group>
}

export default BiographyPage