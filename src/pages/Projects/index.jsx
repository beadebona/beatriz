import { Box, Heading, Text, Flex, Grid, Link } from '@chakra-ui/react'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { projectList } from '../../services/ProectList'
import { Techs } from '../../components/Techs'

export const Projects = ({movimentCapture}) =>{
    return (
        <Section id="projects" title="MY PROJECTS" movimentCapture={movimentCapture}>
            <Box>
                <Text fontFamily="PT Sans" mr="32px"textAlign="right" mb="16px">
                    Here we have some of the projects <br/>
                    I' ve worked on! You can check others on my 
                    <Link fontWeight="bold" href="https://github.com/beadebona"> GitHub</Link>!
                 </Text>
                <Flex
                gap={6}
                m="auto"
                w={["90%","90%","90%","100%"]}
                justifyContent="space-between"
                flexWrap="nowrap" overflowX="auto" scrollSnapType="x mandatory"
                >
                    {projectList.map(project=><Card key={project.name} project={project}/>)}
                </Flex>
                <Heading as="h1" m="16px 32px" textAlign="center">TECHS</Heading>
                <Techs/>
            </Box>

        </Section>
    )
}