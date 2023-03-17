import {Language} from "../types";
import languagesData from "../data/languages/languages.json"
import {Box, Center, Divider, Flex, Icon, Spacer, Text, VStack} from "@chakra-ui/react";
import AppBlock from "../components/AppBlock";
import {Group} from "@vkontakte/vkui";

type LanguagePageProps = {
    languages: Language[]
}

const LanguagesPage = ({languages}: LanguagePageProps) => {
    return <Box>
        <Center fontSize={24}>
            All my languages.
        </Center>

        <Center py={4} fontSize={24}> Programming </Center>

        <VStack>
            {languages.filter(lang => lang.type === 'programming').map(language => (
                <AppBlock delay={language.id / 10} key={language.id}>
                    <Group mode={"card"}>
                        <Box w={"100%"}
                        >
                            <Flex>
                                <Text fontSize={20}> {language.name} {language.loving ? " 💞 " : " 💔 "} </Text>
                                <Spacer/>
                                <Text
                                    fontSize={20}
                                    opacity={0.7}
                                    textColor={language.level == 'Advanced' ? "red" : language.level.includes('Basic') ? "gold" : "green"}
                                > {language.level} </Text>
                            </Flex>
                            <Center fontSize={16}> Description </Center>
                            <Divider/>
                            <Text fontSize={16}> {language.description} </Text>
                        </Box>
                    </Group>
                </AppBlock>
            ))}
        </VStack>

        <Center fontSize={24}> Speaking </Center>
        <VStack py={2}>
            {languages.filter(lang => lang.type == 'speaking').map(language => (
                <AppBlock delay={language.id / 10} key={language.id}>
                    <Group mode={"card"}>
                        <Flex width={"100%"}>
                            <Text> {language.name} {language.loving ? " 💞 " : " 💔 "} </Text>
                            <Spacer/>
                            <Text opacity={0.7}
                                  textColor={language.level == 'Advanced' ? "red" : "green"}> {language.level} </Text>
                        </Flex>
                        <Center> Description </Center>
                        <Text> {language.description} </Text>
                    </Group>
                </AppBlock>
            ))}
        </VStack>
    </Box>
}

LanguagesPage.getInitialProps = async () => {
    return { languages: languagesData.data }
}

export default LanguagesPage