import { NextSeo } from "next-seo";
import { Card, CardGrid, Gallery, Group } from "@vkontakte/vkui";
import { Box, Center, Heading, Image, Spacer, Text, useMediaQuery } from "@chakra-ui/react";
import { calculateEars } from "../components/util/DateUtil";
import AppBlock from "../components/AppBlock";

const MommyPage = ({}) => {
  const [isDesktop] = useMediaQuery('(min-width: 800px)')
  const mommyEars = calculateEars(new Date("2004/06/08"))
  return <>
    <NextSeo
      title="Найпрекраснiша матуська!!!"
      description="Сторiночка про мою найпрекраснiшу матуську!"
    />

    <AppBlock delay={0.2}>
      <Group mode="card">
        <Center>
          <Text fontSize={24}>
            Моя матуся
          </Text>
        </Center>

        <Group mode="plain">
          <CardGrid size="l">
            <Card mode={"outline"}>
              <Box>
                <Image
                  width={"100%"}
                  height={isDesktop ? 300 : 150}
                  src={"mommy.png"}
                  alt={"bg"}
                  style={{borderRadius: 16}}
                />
              </Box>
            </Card>
          </CardGrid>
        </Group>
      </Group>
      <Box>
        <Heading as="h2" textAlign="center" mb={[4, 0]}>
          Dekinai aka увушка aka матуська
        </Heading>
        <Text align="center" opacity={0.7}>
          {mommyEars} y.o female, best mommy
        </Text>
      </Box>
    </AppBlock>

    <AppBlock delay={0.4} py={6}>
      <Group mode="card">
        <Box textAlign={"center"}>
          <Text fontSize={20}> Дорогенька моя матусенька, з днем народження тебе!!! </Text>
          <Text fontSize={20}> Хочу привiтати тебе з твоїм днем. Хочу, щоб ти була такою ж классною, милою, </Text>
          <Text fontSize={20}> комфортною, таким ж котиком, якою ти є завжди! С тiєю ж чарівною зовнiшнiстю, </Text>
          <Text fontSize={20}> прекрасним голосочком, який хочеться слухати завжди!!! </Text>
          <Text fontSize={20}> Ти просто найпрекраснiша, найяскравiша, та сама кохана(як матуська) людина в моєму життi. </Text>
          <Text fontSize={20}> Була, є, й залишишся назавжди. </Text>
          <Text fontSize={20}> А ще, хочу побажати бачити тебе з собою, бо нiчого мене не робить таким счастливим, як ти. </Text>
          <Text fontSize={20}> Ти й є щастя, ти найпрекраснiша матуська ❤️ </Text>
          <Text fontSize={20}> Cподiваюсь, що ти прекрасно проведеш цей день, матусенька, та бути веселою сьогоднi, </Text>
          <Text fontSize={20}> бо ти справдi цього заслуговуєш!! </Text>
          <Text fontSize={20}> Й саме головне, не сумуй!!! </Text>
        </Box>
      </Group>
    </AppBlock>

    <AppBlock delay={0.6} py={4}>
      <Group mode="card" header={<Text textAlign={"center"} fontSize={20}> Мої малюночки для тебе, матусь!!! </Text>}>
        <Box padding={4}>
          <Gallery bullets="dark" showArrows>
            <Image alt={""} src={"cat.png"}/>
            <Image alt={""} src={"heh.png"}/>
          </Gallery>
        </Box>
      </Group>
    </AppBlock>
  </>
}

export default MommyPage