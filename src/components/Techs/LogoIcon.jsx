import { Box, Flex, Text } from "@chakra-ui/react"
import { useState } from "react"

export const Icon = ({Svg, fill, name}) =>{
    const [apperance, setApperance] =useState("none")
    return (
        <Flex
            w="50px"
            onMouseOver={()=>setApperance("block")} 
            onMouseOut={()=>setApperance("none")} 
            flexDirection="column" 
            alignItems="center" as="div"  
            fontSize={["32px", "36px", "40px"]}
            _hover={{
                color: fill, 
                transform: "translateY(-5px)", 
                transition: "0.4s"
            }}>
            <Svg/>
            <Text 
                 color="grey.text" 
                display={apperance} 
                fontSize="12px" 
                transition="0.4s" >{name}</Text>
        </Flex>
    )
}