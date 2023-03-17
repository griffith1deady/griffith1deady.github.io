import {Box, Grid, GridItem, Heading, List, ListItem, StackDivider, VStack, Text} from "@chakra-ui/react";
import characteristicData from "../data/bio/characteristics.json"
import PageHeader from "../components/PageHeader";
import AppBlock from "../components/AppBlock";
import {NextSeo} from "next-seo";
import {NextPage} from "next";

type CharacteristicPageProps = {
    characteristics: { [index: string]: Array<string> };
}

const CharacteristicPage = ({characteristics}: CharacteristicPageProps) => {
    return (
        <>
            <NextSeo
                title="s5a4ed1sa7 | Characteristic"
                description="My biography. My qualities."
            />

            <VStack spacing={12} divider={<StackDivider />}>
                <PageHeader duration={0.6}>
                    <Heading textAlign="center" as="h2" mb={[0, 2]}>
                        Biography
                    </Heading>
                    <Text align="center">
                        A complete list of my characteristics
                    </Text>
                </PageHeader>

                <AppBlock delay={0.05}>
                    <Box>
                        <Heading as="h3" mb={[10, 14]}>
                            About myself
                        </Heading>
                    </Box>
                    <Grid
                        templateColumns={["100%", "auto auto"]}
                        justifyContent="space-between"
                        rowGap={10}
                    >
                        {Object.keys(characteristics).map((h, index) => (
                            <GridItem key={h}>
                                <AppBlock delay={index}>
                                    <Heading as="h4" mb={4}>
                                        {h.toUpperCase()}
                                    </Heading>
                                    <List>
                                        {characteristics[h].map((c) => (
                                            <ListItem key={c}>
                                                <Text fontSize="xl">
                                                    {c[0].toUpperCase() + c.substring(1)}
                                                </Text>
                                            </ListItem>
                                        ))}
                                    </List>
                                </AppBlock>
                            </GridItem>
                        ))}
                    </Grid>
                </AppBlock>
            </VStack>
        </>
    );
}

CharacteristicPage.getInitialProps = async () => {
    const characteristics = characteristicData.data
        .map((x) => x.toLowerCase())
        .sort();
    const result: { [index: string]: Array<string> } = {};

    characteristics.forEach((c) => {
        if (!(c[0] in result)) result[c[0]] = [];
        result[c[0]].push(c);
    });

    return {
        characteristics: result
    }
}

export default CharacteristicPage