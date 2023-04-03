import {Box, Container, Flex, Heading,} from "@chakra-ui/react";
import {useRouter} from "next/router";
import AppNavBarLink from "./AppNavBarLink";

const AppNavBar = () => {
    const router = useRouter()
    return (
        <Box
            as="nav"
            position="fixed"
            w="100%"
            px={3}
            py={5}
            bg={"#20202080"}
            css={{backdropFilter: "blur(8px)"}}
            zIndex={10}
        >
            <Container maxW="container.lg">
                <Flex justify="space-between">
                    <AppNavBarLink href={"/"}>
                        <Heading fontSize={28} onClick={() => router.push('/')}>
                            griffith1deady
                        </Heading>
                    </AppNavBarLink>
                </Flex>
            </Container>
        </Box>
    );
};

export default AppNavBar;
