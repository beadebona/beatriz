import { Box, Heading } from "@chakra-ui/react"

export const Section = ({children, title, id}) =>{
    return(
    <Box m="auto" paddingTop="60px" as="section" minH="100vh" bg="beige.50" id={id} >
        <Box maxW="1400px" m="auto"
        >
            <Heading as="h1" m="16px 32px" textAlign="right"
            
            onClick={()=>console.log(window.pageYOffset)} >{title}</Heading>
            {children}            
        </Box>

    </Box>
    )
}