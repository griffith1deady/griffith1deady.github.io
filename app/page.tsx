import {StackSeparator, VStack} from "@chakra-ui/react";

import NavigationComponent from "@/components/main/NavigationComponent";
import SkillComponent from "@/components/main/SkillComponent";
import BeautifulComponent from "@/components/main/BeautifulComponent";
import DonationComponent from "@/components/main/DonationComponent";
import ProjectComponent from "@/components/main/ProjectComponent";
import ContactComponent from "@/components/main/ContactComponent";
import JokeComponent from "@/components/main/JokeComponent";
import AboutComponent from "@/components/main/AboutComponent";
import IntroductionComponent from "@/components/main/IntroductionComponent";

export default function Home() {
  return (
      <VStack
        background={ "bg-neutral-800" }
        className='gap-[12px]'
        separator={
          <StackSeparator borderColor={ "bg-neutral-800" } />
        }
      >
        <IntroductionComponent/>
        <JokeComponent/>
        <NavigationComponent/>
        <SkillComponent/>
        <ProjectComponent/>
        <ContactComponent/>
        <DonationComponent/>
        <AboutComponent/>
        <BeautifulComponent/>
      </VStack>
  );
}
