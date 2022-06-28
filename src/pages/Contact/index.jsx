import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import {  SiWhatsapp, SiGmail, SiLinkedin, SiGithub } from "react-icons/si"
import { Footer } from './Footer'
import { Form } from '../../components/Form'
import { InfoIcon } from './InfoIcon'


export const Contact = () =>{
    return (
        <Box m="auto" paddingTop="60px" as="section" minH="98vh" bg="beige.50" id="contact" 
        
        >
        <Box maxW="1400px" m="auto">
            <Heading as="h1" m="16px 32px" textAlign="right" >CONTACT ME</Heading>
            <Flex flexDirection={["column", "column", "row", "row"]} justifyContent="space-between" alignItems={"center"}>
                <Box m="16px 32px">
                    <InfoIcon text="+55 21 96570-4144 " icon={SiWhatsapp} link="https://contate.me/beadebona"/>
                    <InfoIcon text="beatrizdebona.bd@gmail.com" icon={SiGmail} />
                    <InfoIcon text="/in/beatriz-debona-86b229231/" icon={SiLinkedin} link="https://www.linkedin.com/in/beatriz-debona-86b229231/"/>
                    <InfoIcon text="/beadebona" icon={SiGithub} link="https://github.com/beadebona"/>            
                </Box>
                <Form/>                  
            </Flex>
        
        </Box>
        <Footer/> 
    </Box>

            
    )
}