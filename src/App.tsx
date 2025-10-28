"use client";

import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  IconButton,
  VStack,
  HStack,
  Wrap,
  TagLabel,
  Tag,
  useToken,
  Image,
} from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState } from "react";
import { projects } from "./data/MyProjects";
import ProjectModal from "./components/sections/ProjectModal";
import Me from "./assets/me.jpg";

export default function App() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const bg = isLight ? "gray.50" : "gray.900";
  const textColor = isLight ? "gray.700" : "gray.200";
  const cardBg = isLight ? "white" : "gray.800";
  const sectionBg = isLight ? "gray.100" : "gray.800";

  const [teal50, teal100, teal400, cyan200, gray800, gray900, white] = useToken(
    "colors",
    [
      "teal.50",
      "teal.100",
      "teal.400",
      "cyan.200",
      "gray.800",
      "gray.900",
      "white",
    ]
  );

  const ticketyGradient = isLight
    ? `linear(to-r, ${white}, ${teal50}, ${cyan200})`
    : `linear(to-r, ${gray800}, ${teal400}, ${gray900})`;

  // ✅ Make it reactive
  const [currentProject, setCurrentProject] = useState<any>(null);

  // ✅ Function to open modal with correct project
  function handleProjectSelect(projectName: string) {
    const found = projects.find((p) => p.name === projectName);
    setCurrentProject(found || null);
  }

  // ✅ Function to close modal
  function handleCloseModal() {
    setCurrentProject(null);
  }

  return (
    <Box bg={bg} minH="100vh" transition="background 0.3s ease">
      {/* Navbar */}
      <Flex
        as="nav"
        px={6}
        py={4}
        align="center"
        justify="space-between"
        borderBottom="1px"
        borderColor={isLight ? "gray.200" : "gray.700"}
      >
        <Heading size="md">Jack King</Heading>
        <HStack gap={4}>
          <Button variant="ghost">About</Button>
          <Button variant="ghost">Projects</Button>
          <Button variant="ghost">Contact</Button>
          <IconButton
            aria-label="Toggle theme"
            onClick={() => setTheme(isLight ? "dark" : "light")}
          >
            {isLight ? <FaMoon /> : <FaSun />}
          </IconButton>
        </HStack>
      </Flex>

      {/* Hero */}
      <Container maxW="container.lg" py={8} textAlign="center">
        <VStack gap={6}>
          <Image
            src={Me}
            boxSize="150px"
            borderRadius="full"
            fit="cover"
            alt="Jack King"
            transition="transform 0.3s ease" // smooth animation
            _hover={{
              transform: "scale(1.3)", // slightly larger (10%)
            }}
          />

          <Heading>Hey, I'm Jack 👋</Heading>
          <Text fontSize="lg" color={textColor}>
            A developer passionate about building clean, functional, and
            creative web experiences.
          </Text>
          <HStack gap={4}>
            <IconButton
              as="a"
              target="_blank"
              href="https://github.com/jack-king1"
              aria-label="Github"
            >
              <FaGithub />
            </IconButton>
            <IconButton
              as="a"
              target="_blank"
              href="https://www.linkedin.com/in/jackking1/"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </IconButton>
          </HStack>
        </VStack>
      </Container>

      {/* Projects */}
      <Box
        id="projects"
        py={20}
        bg={sectionBg}
        transition="background 0.3s ease"
      >
        <Container>
          <Heading mb={10} textAlign="center">
            Projects
          </Heading>
          <SimpleGrid
            columns={{ base: 1, md: 1 }}
            gap={4}
            maxW="container.xl"
            mx="auto"
          >
            {projects.map((project, i) => (
              <Box
                key={i}
                bgGradient="to-r"
                gradientFrom={isLight ? "blue.100" : "cyan.700"}
                gradientVia={isLight ? "blue.200" : "cyan.600"}
                gradientTo={isLight ? "cyan.300" : "cyan.500"}
                borderWidth="6px"
                borderColor={isLight ? "teal.100" : "gray.600"}
                borderRadius="2xl"
                shadow="md"
                px={{ base: 4, md: 8 }}
                py={{ base: 6, md: 8 }}
                transition="all 0.35s ease"
                _hover={{
                  transform: "translateY(-4px)",
                  shadow: "xl",
                  borderColor: "gray.400",
                }}
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                minH={{ base: "420px", md: "400px" }} // 👈 consistent height
                maxH={{ base: "420px", md: "400px" }}
              >
                <Flex
                  direction={{ base: "column", md: "column" }}
                  align="flex-start"
                  flex="1"
                  mb={4}
                >
                  {/* Project Info */}
                  <Heading size="lg" mb={2}>
                    {project.name}
                  </Heading>
                  <Text
                    mb={4}
                    color={textColor}
                    fontSize={{ base: "md", md: "lg" }}
                    noOfLines={3} // 👈 ensures consistent text height
                  >
                    {project.overview}
                  </Text>
                </Flex>

                {/* Thumbnail + Button container */}
                <Box mt="auto" w="100%">
                  <Box
                    w="100%"
                    h={{ base: "180px", md: "180px" }}
                    borderRadius="lg"
                    overflow="hidden"
                    shadow="md"
                    bg={isLight ? "gray.100" : "gray.600"}
                    backgroundImage={`url(${
                      project.thumbnail ?? "https://via.placeholder.com/400"
                    })`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    mb={4}
                  />

                  <Button
                    colorScheme="teal"
                    size="md"
                    w="full"
                    onClick={() => handleProjectSelect(project.name)}
                  >
                    View Project
                  </Button>
                </Box>
              </Box>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact */}
      <Container id="contact" maxW="container.md" py={20} textAlign="center">
        <Heading mb={6}>Get in Touch</Heading>
        <Text mb={8} color={textColor}>
          Have a question, collaboration idea, or just want to say hi?
        </Text>
        <Button colorScheme="teal" size="lg">
          Email Me
        </Button>
      </Container>

      {/* Footer */}
      <Box
        textAlign="center"
        py={6}
        borderTop="1px"
        borderColor={isLight ? "gray.200" : "gray.700"}
      >
        <Text fontSize="sm" color={textColor}>
          © {new Date().getFullYear()} Jack King. All rights reserved.
        </Text>
      </Box>

      {/* ✅ Render modal if a project is selected */}
      {currentProject && (
        <ProjectModal
          isOpen={!!currentProject}
          onClose={handleCloseModal}
          project={currentProject}
          cardBg={cardBg}
        />
      )}
    </Box>
  );
}
