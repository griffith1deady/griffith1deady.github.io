import {Box, Heading, Image, SimpleGrid, StackDivider, Text, useMediaQuery, VStack} from "@chakra-ui/react";
import type {NextPage} from "next";
import {NextSeo} from "next-seo";
import {Button, Card, CardGrid, Group} from "@vkontakte/vkui";
import AppBlock from "../components/AppBlock";
import {
    Icon20BookSpreadOutline,
    Icon20LayoutLeftColumnOutline,
    Icon20MessagesOutline,
    Icon20PinSlashOutline, Icon20TextOutline,
    Icon20TextRightOutline
} from "@vkontakte/icons";
import {useRouter} from "next/router";

const Home: NextPage = () => {
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    const myEars = new Date().getFullYear() - 2006
    const router = useRouter()
    return (
        <>
            <NextSeo
                title="s5a4ed1sa7 | Main"
                description="Я gbms. Люблю решать проблемы кодом и автоматизировать рутинные задачи. Список моих проектов и целей."
            />

            <VStack spacing={12} divider={<StackDivider/>} width="100%">
                <AppBlock delay={0.2}>
                    <Group mode="plain">
                        <CardGrid size="l">
                            <Card mode={"outline"}>
                                <Box>
                                    <Image
                                        width={"100%"}
                                        height={isDesktop ? 300 : 150}
                                        src={"/spare.png"}
                                        alt={"bg"}
                                        style={{borderRadius: 16}}
                                    />
                                </Box>
                            </Card>
                        </CardGrid>
                    </Group>
                    <Box>
                        <Heading as="h2" textAlign="center" mb={[4, 0]}>
                            s5a4ed1sa7 aka sadness1rip
                        </Heading>
                        <Text align="center" opacity={0.7}>
                            {myEars} y.o male, FullStack developer
                        </Text>
                    </Box>
                </AppBlock>

                <AppBlock delay={0.3}>
                    <SimpleGrid columns={[1, null, 2]}>
                        <Button
                            size="l"
                            appearance="accent"
                            mode="tertiary"
                            before={<Icon20TextOutline/>}
                            onClick={() => router.push('languages')}
                        > Languages </Button>
                        <Button
                            size="l"
                            appearance="accent"
                            mode="tertiary"
                            before={<Icon20PinSlashOutline/>}
                            onClick={() => router.push('projects')}
                        > Project's </Button>
                        <Button
                            size="l"
                            appearance="accent"
                            mode="tertiary"
                            before={<Icon20MessagesOutline/>}
                            onClick={() => router.push('contact')}
                        > Contact me </Button>
                        <Button
                            size="l"
                            appearance="accent"
                            mode="tertiary"
                            before={<Icon20LayoutLeftColumnOutline/>}
                            onClick={() => router.push('characteristic')}
                        > Characteristic </Button>
                        <Button
                            size="l"
                            appearance="accent"
                            mode="tertiary"
                            before={<Icon20BookSpreadOutline/>}
                            onClick={() => router.push('biography')}
                        > Bio </Button>
                        <Button
                            size="l"
                            appearance="accent"
                            mode="tertiary"
                            before={<Icon20TextRightOutline/>}
                            onClick={() => router.push('about')}
                        > About me </Button>
                    </SimpleGrid>
                </AppBlock>
            </VStack>
        </>
    );
}

export default Home;
