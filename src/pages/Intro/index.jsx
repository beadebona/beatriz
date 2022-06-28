import { Box, Heading, Text, Flex, Image, Button } from '@chakra-ui/react'
export const Intro = () =>{
    return (
        <Flex id="home" 
        maxW="1400px"
        m="auto"
        flexDirection={["column-reverse", "column-reverse", "row", "row"]} 
        paddingTop="90px" as="section" minH="100vh" bg="beige.50" 
        justifyContent="space-evenly" 
        alignItems={["center", "center", "normal", "normal"]}
        >
            <Flex flexDirection="column" h="inherit" justifyContent="center">
                <Text  m={["40px 0;", "30px 0;", "80px 0;", "80px 0;"]} as="h1" fontSize={["24px", "24px", "32px", "48px"]} fontFamily="heading">
                    HELLO! I'M BEA,<br/> 
                    A <b>FRONT-END DEVELOPER</b>!<br/>
                    WELCOME TO MY PORTFOLIO
                </Text>
                {/* <Button
                 display={["none", "none", "block", "block"]} 
                 h="50px" 
                 w="150px" 
                 borderRadius="1px" 
                 bg="grey.text" 
                 _hover={{
                    bg:"grey.hover"
                 }}
                 color="white">DOWNLOAD CV</Button> */}
            </Flex>


            <Image 
                borderRadius="150px 150px 0 0" 
                w="300px" h="400px" mt={["20px", "20px", "30px", "30px"]}  
                src={require('../../assets/beaPic.jpg')} 
                alt="Bea's Selfie"/>

        </Flex>
    )
}