import { Box, Heading } from "@chakra-ui/react"

export const Card = ({project}) =>{
    return(
        <Box>
            <Heading>{project.name}</Heading>
        </Box>
    )
}