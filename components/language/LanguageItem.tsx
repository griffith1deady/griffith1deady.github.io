import {Language, StackItem} from "../../types";
import {Box, Center, ChakraProps, Divider, List, ListIcon, ListItem, Progress, SimpleGrid} from "@chakra-ui/react";
import {FaCodepen, FaJava, FaRust} from "react-icons/fa";
import {FiHexagon} from "react-icons/fi";
import {HTMLAttributes} from "react";
import {DiDart} from "react-icons/di";
import {TbBrandCpp, TbBrandGolang, TbBrandKotlin, TbBrandTypescript} from "react-icons/tb";
import AppBlock from "../AppBlock";

type LanguageItemProps = {
    language: Language
    stackItems?: StackItem[]
} & ChakraProps & HTMLAttributes<any>
const LanguageItem = ({language, stackItems, ...props}: LanguageItemProps) => {
    const languageIcon = getIconForLanguage(language.name)
    return (<>
        <ListItem key={language.name} w={"100%"} padding={"2px 10px"} {...props} fontSize={24}>
            <ListIcon as={languageIcon} boxSize={"2rem"}/>
            {language.name}
            <Center fontSize={20}> {language.description} </Center>
            <Box py={2}>
                <Progress rounded={16} value={language.level} colorScheme={"pink"} size='xs'/>
            </Box>
            {stackItems ? <List fontSize={20} py={2}>
                <SimpleGrid gap={4} columns={[1, null, 3]}>
                    {stackItems.map((stack, index) => (
                        <AppBlock key={index} delay={index / 5}>
                            <ListItem padding={2} {...props}>
                                <ListIcon as={FaCodepen} mb={"0.15rem"}/>
                                {stack.name}

                                {stack.additional ? <Divider my={2}/> : null}

                                {stack.additional ? stack.additional.map((stack, index) => (
                                    <Box px={4} key={index} maxW={"max-content"}>
                                        <ListIcon as={FiHexagon} mb={"0.15rem"}/>
                                        {stack.name}
                                    </Box>
                                )) : null}
                            </ListItem>
                        </AppBlock>
                    ))}
                </SimpleGrid>
            </List> : null}
        </ListItem>
    </>)
}

function getIconForLanguage(language: string) {
    if (language == 'Java') {
        return FaJava
    } else if (language == 'Kotlin') {
        return TbBrandKotlin
    } else if (language == 'TypeScript') {
        return TbBrandTypescript
    } else if (language == 'Go') {
        return TbBrandGolang
    } else if (language == 'C++') {
        return TbBrandCpp
    } else if (language == 'Rust') {
        return FaRust
    } else if (language == 'Dart') {
        return DiDart
    } else {
        return FiHexagon
    }
}

export default LanguageItem