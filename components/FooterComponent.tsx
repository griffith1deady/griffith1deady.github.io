import {Box, Container, Text} from "@chakra-ui/react";

const FooterComponent = () => {
    return <Box as={"footer"}
                w={"100%"}
                px={3}
                py={5}
                bg={"#20202080"}
                css={{backdropFilter: "blur(8px)"}}
                zIndex={10}
                bottom={0}
                position="absolute">
        <Container maxW={"100%"}>
            <Text align={"center"}>
                🛠 Builded by <strong> s5a4ed1sa7 </strong> with <strong> Next </strong> / <strong> ChakraUI </strong> & <strong> VKUI </strong>
            </Text>
        </Container>
    </Box>
}

export default FooterComponent