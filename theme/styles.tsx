const styles = {
    global: (props: any) => ({
        body: {
            bg: props.colorMode = "#202020",
        },
        '::-webkit-scrollbar': {
            width: "5px",
            background: "transparent",
        },
        '::-webkit-scrollbar-thumb' : {
            background: "#717171",
            borderRadius: "5px",
        },
    }),
};

export default styles;
