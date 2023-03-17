import {Language} from "../types";
import languagesData from "../data/languages/languages.json"
import {Box, Center, List} from "@chakra-ui/react";
import {NextSeo} from "next-seo";
import React from "react";
import LanguageItem from "../components/language/LanguageItem";
import AppBlock from "../components/AppBlock";

type LanguagePageProps = {
    languages: Language[]
}

const LanguagesPage = ({languages}: LanguagePageProps) => {
    return <>
        <NextSeo
            title={"s5a4ed1sa7 | My languages"}
            description={"All languages i know)"}
        />
        <Box>
            <Center fontSize={24}>
                All my languages.
            </Center>

            <Center py={4} fontSize={24}> Programming </Center>

            <List spacing={2}>
                {languages.filter(lang => lang.type === 'programming').map(language => (
                    <AppBlock delay={language.id / 5} key={language.id}>
                        <LanguageItem id={"component"} language={language} stackItems={language.stack}/>
                    </AppBlock>
                ))}
            </List>

            <Center fontSize={24} py={4}> Speaking </Center>

            <List spacing={2} py={4}>
                {languages.filter(lang => lang.type === 'speaking').map(language => (
                    <AppBlock delay={language.id / 5} key={language.id}>
                        <LanguageItem id={"component"} language={language}/>
                    </AppBlock>
                ))}
            </List>
        </Box>
    </>
}

LanguagesPage.getInitialProps = async () => {
    return {languages: languagesData.data}
}

export default LanguagesPage