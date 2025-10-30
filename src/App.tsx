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
  Tag,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useState } from "react";
import { projects } from "./data/MyProjects";
import ProjectModal from "./components/sections/ProjectModal";
import Me from "./assets/me.jpg";

import logoblack from "./assets/portfoliologoblack.png";
import logowhite from "./assets/portfoliologo.png";
import TicketyModal from "./components/sections/TicketyModal";

export default function App() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const bg = isLight ? "gray.50" : "gray.900";
  const textColor = isLight ? "gray.700" : "gray.200";
  const sectionBg = isLight ? "gray.100" : "gray.800";

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
        <Stack
          direction={{ base: "column", md: "row" }} // column on mobile, row on desktop
          justify="space-between"
          align="center"
          w="100%"
        >
          <Image
            src={isLight ? logoblack : logowhite}
            alt="Jack King"
            transition="transform 0.3s ease"
            width={150}
          />

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
        </Stack>
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
            A developer passionate about designing and engineering web
            experiences that feel as good as they look.
          </Text>
          <HStack gap={4}>
            <a
              target="_blank"
              href="https://github.com/jack-king1"
              aria-label="Github"
              style={{ transition: "transform 0.2s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaGithub size={60} />
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jackking1/"
              aria-label="LinkedIn"
              style={{ transition: "transform 0.2s ease" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <FaLinkedin size={60} />
            </a>
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
                bgGradient="to-br"
                gradientFrom={isLight ? "blue.50" : "cyan.900"}
                gradientVia={isLight ? "blue.100" : "cyan.800"}
                gradientTo={isLight ? "cyan.200" : "cyan.700"}
                borderRadius="2xl"
                borderWidth="1px"
                borderColor={isLight ? "blue.100" : "cyan.600"}
                shadow="lg"
                overflow="hidden"
                transition="all 0.4s ease"
                _hover={{
                  transform: "translateY(-6px)",
                  shadow: "2xl",
                  borderColor: isLight ? "teal.300" : "cyan.400",
                }}
              >
                <Flex
                  direction={{ base: "column", md: "row" }}
                  align="stretch"
                  w="100%"
                  h="100%"
                >
                  {/* Left: Thumbnail (40%) */}
                  <Box
                    flex={{ base: "none", md: "0 0 40%" }}
                    h={{ base: "220px", md: "100%" }}
                    backgroundImage={`url(${
                      project.thumbnail ?? "https://via.placeholder.com/800x600"
                    })`}
                    backgroundSize="cover"
                    backgroundPosition="center"
                    transition="transform 0.4s ease"
                  />

                  {/* Right: Content (60%) */}
                  <Box
                    flex={{ base: "1", md: "0 0 60%" }}
                    p={{ base: 6, md: 8 }}
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    textAlign={{ base: "center", md: "left" }}
                  >
                    {/* Title */}
                    <Heading
                      size="lg"
                      mb={3}
                      color={isLight ? "blue.900" : "cyan.100"}
                      letterSpacing="wide"
                    >
                      {project.name}
                    </Heading>

                    {/* Tech Stack Tags */}
                    <Wrap justify={{ base: "center", md: "flex-start" }} mb={4}>
                      {project.techStack.map((tech: string) => (
                        <Tag.Root
                          key={tech}
                          size="md"
                          borderRadius="full"
                          borderWidth="1px"
                          borderColor={isLight ? "teal.200" : "cyan.500"}
                          bg="transparent"
                          color={isLight ? "blue.900" : "cyan.100"}
                          fontWeight="medium"
                          px={3}
                          py={1}
                          transition="all 0.25s ease"
                          _hover={{
                            borderColor: isLight ? "teal.400" : "cyan.400",
                            transform: "translateY(-1px)",
                          }}
                        >
                          <Tag.Label>{tech}</Tag.Label>
                        </Tag.Root>
                      ))}
                    </Wrap>

                    {/* Description */}
                    <Text
                      mb={6}
                      color={isLight ? "blue.800" : "cyan.100"}
                      fontSize={{ base: "md", md: "lg" }}
                    >
                      {project.overview}
                    </Text>

                    {/* Button */}
                    <Flex
                      gap={3}
                      direction={{ base: "row", md: "row" }}
                      wrap="wrap"
                      align={{ base: "center", md: "flex-start" }}
                      justify={{ base: "center", md: "flex-start" }}
                      textAlign={{ base: "center", md: "left" }}
                    >
                      <Button
                        size="md"
                        fontWeight="medium"
                        borderRadius="lg"
                        color={isLight ? "blue.900" : "cyan.100"}
                        borderWidth="1px"
                        borderColor={isLight ? "teal.200" : "cyan.500"}
                        bg={isLight ? "whiteAlpha.700" : "whiteAlpha.200"}
                        backdropFilter="blur(8px)"
                        transition="all 0.3s ease"
                        _hover={{
                          transform: "translateY(-2px)",
                          bg: isLight ? "whiteAlpha.900" : "whiteAlpha.300",
                          borderColor: isLight ? "teal.400" : "cyan.400",
                          shadow: "md",
                        }}
                        onClick={() => handleProjectSelect(project.name)}
                      >
                        View Project
                      </Button>

                      <Link
                        href="https://github.com/jack-king1"
                        target="_blank"
                      >
                        <Button
                          size="md"
                          fontWeight="medium"
                          borderRadius="lg"
                          borderWidth="1px"
                          borderColor={isLight ? "black" : "cyan.500"}
                          color={isLight ? "white" : "cyan.100"}
                          bg={isLight ? "black" : "whiteAlpha.200"}
                          backdropFilter="blur(8px)"
                          transition="all 0.3s ease"
                          _hover={{
                            transform: "translateY(-2px)",
                            bg: isLight ? "gray.800" : "whiteAlpha.300",
                            borderColor: isLight ? "gray.900" : "cyan.400",
                            shadow: "md",
                          }}
                        >
                          <FaGithub />
                        </Button>
                      </Link>
                    </Flex>
                  </Box>
                </Flex>
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
        <>
          {currentProject.name === "Tickety" ? (
            <TicketyModal
              isOpen={!!currentProject}
              onClose={handleCloseModal}
              project={currentProject}
              isLight={isLight}
            />
          ) : (
            <ProjectModal
              isOpen={!!currentProject}
              onClose={handleCloseModal}
              project={currentProject}
              isLight={isLight}
            />
          )}
        </>
      )}
    </Box>
  );
}
