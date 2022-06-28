import {extendTheme} from '@chakra-ui/react'

export const theme = extendTheme({
    colors:{
        beige:{
            50:"#dad3c8",
        },
        green:{
            50: "#b7b7a4",
            100: "#a5a58d",
            200:"#6b705c",
        },
        brown:{
            300:"#7f7a72",
            400:"#4f4546"
        },
        grey:{
            text: "#1A202C",
            hover:"#3C4A66"
        }
    },
    fonts: {
        heading: "'Poiret One', cursive;",
        body: "Inter",
    },
    styles: {
        global: {
            bg: "#dad3c8",
            color: "#1B1514",
        }
    },
})