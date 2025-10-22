import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  SimpleGrid,
  IconButton,
  Link,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
import {
  FaGithub,
  FaLinkedin,
  FaSun,
  FaMoon,
  FaEnvelope,
} from "react-icons/fa";
import { useTheme } from "next-themes";

export default function App() {
  const { theme, setTheme } = useTheme();
  const isLight = theme === "light";

  const bg = isLight ? "gray.50" : "gray.900";
  const textColor = isLight ? "gray.700" : "gray.200";
  const cardBg = isLight ? "white" : "gray.800";
  const sectionBg = isLight ? "gray.100" : "gray.800";

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
        <HStack spacing={4}>
          <Button variant="ghost" as={Link} href="#about">
            About
          </Button>
          <Button variant="ghost" as={Link} href="#projects">
            Projects
          </Button>
          <Button variant="ghost" as={Link} href="#contact">
            Contact
          </Button>
          <IconButton
            aria-label="Toggle theme"
            icon={isLight ? <FaMoon /> : <FaSun />}
            onClick={() => setTheme(isLight ? "dark" : "light")}
          />
        </HStack>
      </Flex>

      {/* Hero */}
      <Container maxW="container.lg" py={24} textAlign="center">
        <VStack spacing={6}>
          <AvatarGroup>
            <Avatar.Root>
              <Avatar.Fallback name="Segun Adebayo" />
              <Avatar.Image src="https://i.pravatar.cc/200" />
            </Avatar.Root>
          </AvatarGroup>

          <Heading>Hey, I'm Jack 👋</Heading>
          <Text fontSize="lg" color={textColor}>
            A developer passionate about building clean, functional, and
            creative web experiences.
          </Text>
          <HStack spacing={4}>
            <IconButton
              as={Link}
              href="https://github.com/yourusername"
              aria-label="GitHub"
              icon={<FaGithub />}
              size="lg"
              isRound
            />
            <IconButton
              as={Link}
              href="https://linkedin.com/in/yourusername"
              aria-label="LinkedIn"
              icon={<FaLinkedin />}
              size="lg"
              isRound
            />
            <IconButton
              as={Link}
              href="mailto:your@email.com"
              aria-label="Email"
              icon={<FaEnvelope />}
              size="lg"
              isRound
            />
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
        <Container maxW="container.lg">
          <Heading mb={10} textAlign="center">
            Projects
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={10}>
            {["Tickety", "Portfolio", "Design Tool"].map((name, i) => (
              <Box
                key={i}
                bg={cardBg}
                p={6}
                rounded="lg"
                shadow="md"
                transition="all 0.3s"
                _hover={{ transform: "translateY(-5px)", shadow: "xl" }}
              >
                <Heading size="md" mb={2}>
                  {name}
                </Heading>
                <Text mb={4} color={textColor}>
                  A short description of what this project does and what makes
                  it cool.
                </Text>
                <Button
                  as={Link}
                  href="#"
                  colorScheme="teal"
                  size="sm"
                  variant="solid"
                >
                  View Project
                </Button>
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
        <Button
          as={Link}
          href="mailto:your@email.com"
          colorScheme="teal"
          size="lg"
        >
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
    </Box>
  );
}
