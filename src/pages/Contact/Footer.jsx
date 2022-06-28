import { Flex, Heading, Text } from "@chakra-ui/react"

export const Footer = () =>{
    return (
        <Flex flexDirection="column" alignItems="center" as="footer" w="100%" bg="grey.text" color="beige.50" position="absolute" bottom="0" padding="8px 32px">
                <Heading>BEATRIZ</Heading>
                <Text fontFamily="PT sans" textAlign="center">
                Made by Beatriz Debona 2022 <br/>
                All rights reserved
                </Text>
                
        </Flex>
    )
}