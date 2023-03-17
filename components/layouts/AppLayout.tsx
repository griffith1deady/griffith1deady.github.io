import {Box, Container} from "@chakra-ui/react";
import {ReactElement} from "react";
import AppNavBar from "../AppNavBar";
import FooterComponent from "../FooterComponent";

const AppLayout = ({children}: { children: ReactElement }) => {
    return (
        <Box as="main" minH="100vh" position="relative" bg={"blackAlpha.500"}>
            <AppNavBar/>
            <Container maxW="container.lg" pt={28} px={6} pb={36}>
                {children}
            </Container>
            <FooterComponent/>
        </Box>
    );
};

export default AppLayout;
