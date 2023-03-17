import { extendTheme } from "@chakra-ui/react";
import fonts from "./fonts";
import styles from "./styles";
import "@vkontakte/vkui/dist/vkui.css"

const theme = extendTheme({
  fonts,
  styles,
});

export default theme;
