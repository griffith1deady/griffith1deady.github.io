import {Language} from "../types";
import languagesData from "../data/languages/languages.json"
import {Box, Center, List} from "@chakra-ui/react";
import {NextSeo} from "next-seo";
import React from "react";
import LanguageItem from "../components/language/LanguageItem";

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
                    <LanguageItem id={"component"} key={language.id} language={language} stackItems={language.stack}/>
                ))}
            </List>

            <Center fontSize={24} py={4}> Speaking </Center>

            <List spacing={2} py={4}>
                {languages.filter(lang => lang.type === 'speaking').map(language => (
                    <LanguageItem id={"component"} key={language.id} language={language}/>
                ))}
            </List>
        </Box>
    </>
}

LanguagesPage.getInitialProps = async () => {
    return {languages: languagesData.data}
}

export default LanguagesPage