import { Flex } from "@chakra-ui/react"
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiPostgresql, SiTypescript } from "react-icons/si"
import { Icon } from './LogoIcon'

export const Techs = () => {
    return (
        <Flex h="60px" fontSize="36px" w={[ "80%", "70%","50%","40%"]} justifyContent="space-between" margin="auto">
            <Icon Svg={SiHtml5} fill="#E44D26;" name="HTML" />
            <Icon Svg={SiCss3} fill="#1572B6;" name="CSS" />
            <Icon Svg={SiJavascript} fill="#F0DB4F;" name="JavaScript" />
            <Icon Svg={SiTypescript} fill="#007acc;" name="TypeScript" />
            <Icon Svg={SiReact} fill="#61DAFB;" name="React" />
            <Icon Svg={SiPostgresql} fill="#336791;" name="PostgreSQL"/>
        </Flex>
    )
}