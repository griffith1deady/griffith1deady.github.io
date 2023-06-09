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
import {calculateEars} from "../components/util/DateUtil";

const Home: NextPage = () => {
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    const myEars = calculateEars(new Date("2006/01/10"))
    const router = useRouter()
    return (
        <>
            <NextSeo
                title="s5a4ed1sa7 | Main"
                description="I&apos;m s5a4ed1sa7, a simple guy who loves his job and is always trying new things."
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
                                        src={"https://griffith1deady.github.io/spare.png"}
                                        alt={"bg"}
                                        style={{borderRadius: 16}}
                                    />
                                </Box>
                            </Card>
                        </CardGrid>
                    </Group>
                    <Box>
                        <Heading as="h2" textAlign="center" mb={[4, 0]}>
                            griffith1deady
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
                        > Project&apos;s </Button>
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
