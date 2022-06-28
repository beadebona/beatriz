import { Box, Heading, Image, Flex, Text } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs"

export const Card = ({project}) =>{
    return(
        <Flex minW="280px" w="280px" h="350px" 
        //  borderRadius="150px 150px 0 0" 
        border="solid 1px #8A8987"  
        // bg="#"
        justifyContent={"space-between"} 
        flexDirection="column"
        >
            <Heading fontFamily="Bebas Neue" textAlign="center" padding="0.5rem 1rem">{project.name.toUpperCase()}</Heading>
                <Image padding="0 1rem" src={project.img} />
                <Text fontFamily="bebas neue" textAlign="center">{project.description.toUpperCase()}</Text>
  
            <Flex mt="10px" 
            borderTop="1px solid #8A8987" 
            w="100%" h="80px">
                <Box 
                    as="a" 
                    href={project.website} 
                    target="_blank" 
                    padding="0.5rem" 
                    fontSize="24px" 
                    fontFamily="Bebas Neue" 
                    w="50%" h="100%" 
                    borderRight="1px solid #8A8987" > 
                        VIEW<br/>
                        PROJECT
                </Box>
                <Box 
                    as="a" 
                    href={project.repository} 
                    target="_blank" 
                    padding="0.5rem" 
                    fontSize="24px" 
                    fontFamily="Bebas Neue">
                        GET THE<br/>CODE
                </Box>
            </Flex>
        </Flex>
    )
}