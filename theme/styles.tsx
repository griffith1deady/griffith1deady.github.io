const styles = {
    global: (props: any) => ({
        body: {
            bg: props.colorMode = "#202020",
        },
        '::-webkit-scrollbar': {
            width: "5px",
            background: "transparent",
        },
        '::-webkit-scrollbar-thumb': {
            background: "#717171",
            borderRadius: "5px",
        },
        '#component': {
            backgroundColor: "#292929",
            borderRadius: "2px",
            border: "1px solid rgb(255 255 255 / 12%)",
            rounded: 16
        }
    }),
};

export default styles;
