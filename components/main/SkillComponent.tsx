"use client";

import { Container } from "@chakra-ui/react";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from "@/components/ui/chart";
import { Accordion, AccordionItem, AccordionContent, AccordionTrigger } from "@/components/ui/accordion";
import { Bar, BarChart, CartesianGrid, XAxis, ResponsiveContainer } from "recharts";

const chartData = [
  { language: "Java", level: 90, fill: "#007396" },
  { language: "Kotlin", level: 60, fill: "#7F52FF" },
  { language: "Nim", level: 50, fill: "#4E9F3D" },
  { language: "C", level: 40, fill: "#009688" },
  { language: "C++", level: 20, fill: "#0044CC" },
  { language: "TypeScript", level: 90, fill: "#007ACC" },
  { language: "JavaScript", level: 70, fill: "#F7DF1E" },
  { language: "Rust", level: 15, fill: "#F85B47" },
  { language: "Zig", level: 10, fill: "#2F3A53" },
  { language: "Python", level: 50, fill: "#306998" }
];

const chartConfig = {} satisfies ChartConfig;

const frameworkData = [
  { framework: "React", information: "I'm used this in any my personal project and i'm happy with it :)" },
  { framework: "Vue", information: "I'm used this at Electron app development for my work, but in general i don't like it :)" },
  { framework: "Spring", information: "Only personal basis usage, not commercial and i don't like it :(" },
  { framework: "Ktor", information: "I really love this framework and how it is designed, have built some personal projects with it and i'm happy with it :)" },
  { framework: "Mummy", information: "I. really. love. this. framework. and. how it is work's, i even make my diploma project with it :)" },
  { framework: "ASM", information: "Very interesting framework for code modification and generation, i used that at Minecraft modding and in code generation for speed critical application project's :)" },
  { framework: "LWJGL", information: "Used this framework for my personal project, but i don't like how is low level it :(" },
  { framework: "Raylib", information: "I very like this framework, i used it for my personal project's, overlay & cheat development, game creation and i'm happy with it :)" },
]

export default function SkillComponent() {
  return (
    <Container id={`skills-i'm-good-at`}>
      <h2 className='font-bold text-[2.25rem] text-foreground text-center'>
        Skills I&#39;m good at
      </h2>
      <h2 className='font-bold text-[20px] text-foreground text-left'>
        Language knowledge
      </h2>
      <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
        <BarChart data={chartData}>
          <CartesianGrid vertical={false}/>
          <XAxis
            dataKey="language" // отображаем название языка на оси X
            tickLine={false}
            tickMargin={10}
            axisLine={false}
          />

          <ChartTooltip content={<ChartTooltipContent/>}/>

          <Bar dataKey="level" fill="#2563eb" radius={4} barSize={20}/>
        </BarChart>
      </ChartContainer>
      <h2 className='font-bold text-[20px] text-foreground text-left pt-4'>
        Framework knowledge
      </h2>
      <Accordion type="single" collapsible className="w-full">
        {
          frameworkData.map((framework, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className='font-bold text-[16px] text-foreground'>
                {framework.framework}
              </AccordionTrigger>
              <AccordionContent className='pl-4 text-xl my-4 text-left'>
                {framework.information}
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
      <figure className="text-center border-l-4 border-[var(--chakra-colors-gray-muted)] mt-4">
        <blockquote className="pl-4 text-xl my-4 text-left">
          I&#39;m just a guy, but i&#39;m really interested in programming, i&#39;m a big fan of Java, Kotlin, C, C++,
          Rust, Python, TypeScript, JavaScript, Nim, Zig, and i&#39;m also interested in other languages, like Go,
          Swift, and Dart.
          <br className='pt-4'/>
          Software development is my passion, and i&#39;m always looking for new challenges and opportunities to grow as
          a developer.
          <br/>
          As a software engineer, i&#39;m constantly learning and improving my skills, and i&#39;m always looking for
          ways to expand my knowledge and expertise.
          <br/>
          I&#39;m also a big fan of open-source projects and contributing to them, as it allows me to collaborate with
          other developers, gain experience, and make a positive impact on the community.
          <br/>
          Overall, I&#39;m a curious and driven individual who is always eager to learn new things and explore new
          opportunities, and I&#39;m excited to see where my passion for programming takes me next.
          <br/>
          Reverse engineering is my most loved hobby, because i just love to understand how things work, and i&#39;m
          always looking for new ways to learn and explore.
        </blockquote>
        <figcaption className="text-center">
          <span className="font-bold">
            i just wanna be happy after all :)
          </span>
        </figcaption>
      </figure>
    </Container>
  );
}
