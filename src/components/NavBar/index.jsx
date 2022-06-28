import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { PopUp } from "../Modal"
import { NavButton } from "./NavButton"

//href="#custom-id" in SkipNavLink and id="custom-id" in SkipNavContent
export const NavBar = ({fontAbout, fontProjects, fontContact }) =>{
    return(
        <Box zIndex="20" bg="beige.50" as="nav" h='90px' w='100%' padding="4" position="fixed">

        <Flex borderTop="2px" borderColor="grey.text" m="4" justifyContent="space-between" alignItems="center">
            
            <Heading color="grey.text" as="a" href="#home" padding="2" fontFamily="'Poiret One', cursive;" fontWeight="900">BEATRIZ</Heading>
            <Flex display={["none", "none", "flex", "flex"]}>
                <NavButton href="about" name="about me" font={fontAbout}/>
                <NavButton href="projects" name="my projects" font={fontProjects}/>
                <NavButton href="contact" name="Contact me" font={fontContact}/>
            </Flex>
            <Box as="button" display={["block", "block", "none", "none"]} fontSize="24px">
                <PopUp/>
            </Box>
        </Flex>
        </Box>
    )
}