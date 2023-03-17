import {Group} from "@vkontakte/vkui";
import {NextSeo} from "next-seo";
import {Center, Divider, Flex, Image, LinkOverlay, SimpleGrid, Spacer, Text} from "@chakra-ui/react";
import {Project} from "../types";
import projectData from "../data/projects/projects.json"
import AppBlock from "../components/AppBlock";

type ProjectsPageProps = {
    projects: Project[]
}

const ProjectsPage = ({projects}: ProjectsPageProps) => {
    return <>
        <NextSeo
            title="s5a4ed1sa7 | Project&apos;s"
            description="All my project&apos;s. All my work."
        />

        <Group mode={"card"} header={<Center fontSize={24}> My project&apos;s </Center>}>
            <SimpleGrid columns={[1, null, 2]} gap={4}>
                {projects.map(project => (
                    <AppBlock key={project.id} delay={project.id / 10}>
                        <Group mode={"card"}>
                            <LinkOverlay href={project.href}>
                                <Flex fontSize={20} padding={2}>
                                    <Text> {project.title} </Text>
                                    <Spacer/>
                                    <Text
                                        textColor={project.ready ? "green" : "gold"}
                                        opacity={0.7}
                                    > {project.ready ? "Finished" : "In development"} </Text>
                                </Flex>
                                <Image alt={""} rounded={16} src={project.image}/>
                                <Center py={2}> Description </Center>
                                <Divider/>
                                <Text padding={2}> {project.description} </Text>
                            </LinkOverlay>
                        </Group>
                    </AppBlock>
                ))}
            </SimpleGrid>
        </Group>
    </>
}

export async function getServerSideProps() {
    return {
        props: {
            projects: projectData.data
        }
    }
}

export default ProjectsPage