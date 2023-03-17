import type {AppProps} from "next/app";
import {ChakraProvider, useColorMode} from "@chakra-ui/react";
import AppLayout from "../components/layouts/AppLayout";
import Fonts from "../components/Fonts";
import theme from "../theme";
import AnimationLayout from "../components/layouts/AnimationLayout";
import {AdaptivityProvider, AppRoot, ConfigProvider} from "@vkontakte/vkui";
import {useEffect} from "react";

function MyApp({Component, pageProps, router}: AppProps) {
    const {colorMode, toggleColorMode} = useColorMode()
    useEffect(() => {
        if (colorMode == 'light') {
            toggleColorMode()
        }
    }, [colorMode, toggleColorMode])
    return (
        <ConfigProvider appearance={"dark"} platform={"ios"}>
            <AdaptivityProvider>
                <AppRoot mode={"full"}>
                    <ChakraProvider theme={theme}>
                        <Fonts/>
                        <AppLayout>
                            <AnimationLayout route={router.route}>
                                <Component {...pageProps} />
                            </AnimationLayout>
                        </AppLayout>
                    </ChakraProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default MyApp;
