import {Card, CardGrid, Group} from "@vkontakte/vkui";
import {Center, Heading, Image, useMediaQuery, Text, SimpleGrid} from "@chakra-ui/react";
import {AboutCategory, AboutProperty} from "../types";
import categoryInfo from "../data/about/categories.json"
import propertyInfo from "../data/about/properties.json"
import {calculateEars} from "../components/util/DateUtil";
import {NextSeo} from "next-seo";

type AboutPageProps = {
    categories: AboutCategory[]
    properties: AboutProperty[]
}
const AboutPage = ({ categories, properties }: AboutPageProps) => {
    const [isDesktop] = useMediaQuery('(min-width: 800px)')
    const earsNow = calculateEars(new Date("2006/01/10"))
    return <>
        <NextSeo
            title={"s5a4ed1sa7 | About"}
            description={"All the information about me that you might need."}
        />
        <Group mode={"card"} header={<Center fontSize={24}> About me </Center>}>
            <Center py={4}>
                <Image alt={""} src={"avatar.jpg"} rounded={360} w={isDesktop ? "500" : "250"} h={ isDesktop ? "500" : "250"}/>
            </Center>
            <Heading py={4} textAlign={"center"} opacity={0.7}>
                {earsNow} y.o male, FullStack developer
            </Heading>

            <SimpleGrid columns={[1, null, 2]} gap={4}>
                {categories.map(category => (
                    <Group mode={"card"} key={category.name} header={<Center fontSize={24}> {category.name} </Center>}>
                        {properties.filter(property => property.category == category.id).map(property => (
                            <Center padding={2} fontSize={20} key={property.id}> {property.value} </Center>
                        ))}
                    </Group>
                ))}
            </SimpleGrid>
        </Group>
    </>
}

AboutPage.getInitialProps = async () => {
    return { categories: categoryInfo.data, properties: propertyInfo.data }
}

export default AboutPage