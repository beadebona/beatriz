import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import { Section } from '../../components/Section'

export const AboutMe = () =>{
    return (
        <Section id="about" title="ABOUT ME" >
            <Flex justifyContent='flex-end' m="0 32px" >
                <Text textAlign="right" fontFamily="PT Sans" > As you already know, I'm Beatriz, a front-end developer, <br/>
                    I'm 23 years old and now I'm based in Rio de Janeiro, Brazil. <br/>
                    I started my studies in tech recently at Kenzie Academy Brasil and It has been life changing. <br/>
                    I discovered coding as a passion, solving problems were always my thing since I was a kid, 
                    so  It became quite easy for me.<br/>
                    I m not a very creative person but I'm perfeccionist, 
                    so one of my favorite things is thinking about how I can improve something. <br/>
                    I might not invent much but I m always ready to make it better.
                </Text>
            </Flex>
        </Section>
    )
}