import { Box, Text } from "@chakra-ui/react"

export const NavButton = ({href, name, font, onClose}) =>{
    return(
        <Box minW="136px">
            <Text 
            textAlign="center"
            href={`#${href}`}
            fontFamily={font} 
            _hover={{
                fontFamily:"PT Sans"
            }}
            as="a" 
            position='initial' 
        >
                {name.toUpperCase()}
            </Text>            
        </Box>

    )
}