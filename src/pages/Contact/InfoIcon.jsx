import { Flex, Link } from "@chakra-ui/react"

export const InfoIcon = ({text, link, icon:Icon})=>{
    return (
        <Flex alignItems="center" gap={2} m="auto">
            <Icon/>
            <Link href={link} target="_blank">{text}</Link>
        </Flex>
    )
}