"use client";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  Box,
  Text,
  useBreakpointValue,
  VStack,
  Image,
  Flex,
} from "@chakra-ui/react";
import type { ProjectModalProps } from "../Props/Props";
import { X } from "lucide-react";
import TicketyDashboard from "../../assets/ticketydashboard.jpg";
import TicketyData from "../../assets/ticketydata.jpg";
import TicketyDesigner from "../../assets/ticketydesigner.jpg";
import TicketyGrid from "../../assets/ticketygrid.jpg";
import TicketyHomepage from "../../assets/ticketyhomepage.jpg";
import TicketyLogin from "../../assets/ticketylogin.jpg";
import TicketyMarketplace from "../../assets/ticketymarketplace.jpg";
import TicketyPdf from "../../assets/ticketypdf.jpg";
import TicketyPrint from "../../assets/ticketyprint.jpg";
import TicketyTextOptions from "../../assets/ticketytextoptions.jpg";
import TicketyLogo from "../../assets/logo.png";

export default function TicketyModal({
  isOpen,
  onClose,
  project,
  isLight,
}: ProjectModalProps) {
  const cardBgColour = isLight ? "white" : "gray.800";

  // ✅ Responsive sizing
  const dialogWidth = useBreakpointValue({
    base: "100%", // phones
    sm: "95%", // tablets
    md: "1200px", // desktop
  });

  const dialogRadius = useBreakpointValue({
    base: 0,
    md: "2xl",
  });

  if (!project) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Backdrop
        bg={isLight ? "blackAlpha.400" : "blackAlpha.600"}
        backdropFilter="blur(3px)"
      />
      <Dialog.Positioner>
        <Dialog.Content
          bg={cardBgColour}
          w={dialogWidth}
          maxW="90vw"
          mx="auto"
          my={{ base: 0, md: 8 }}
          borderRadius={dialogRadius}
          borderWidth="1px"
          borderColor={isLight ? "teal.100" : "cyan.700"}
          shadow="2xl"
          overflow="hidden"
          position="relative"
          p={{ base: 4, md: 6 }}
          transition="all 0.3s ease"
        >
          {/* Close button */}
          <Dialog.CloseTrigger asChild>
            <Box
              as="button"
              aria-label="Close"
              position="absolute"
              top={3}
              right={3}
              display="flex"
              alignItems="center"
              justifyContent="center"
              w="36px"
              h="36px"
              rounded="full"
              bg={isLight ? "gray.200" : "gray.700"}
              _hover={{
                bg: isLight ? "gray.300" : "gray.600",
                transform: "scale(1.1)",
              }}
              transition="all 0.2s ease"
              onClick={onClose}
            >
              <X size={22} color={isLight ? "#1A202C" : "#EDF2F7"} />
            </Box>
          </Dialog.CloseTrigger>

          {/* Header */}
          <DialogHeader
            fontSize={{ base: "xl", md: "2xl" }}
            fontWeight="bold"
            mb={3}
            color={isLight ? "blue.900" : "cyan.100"}
            p={0}
          >
            <Flex justify="center" w="100%">
              <Image
                src={TicketyLogo}
                alt="Tickety Logo"
                maxW="200px"
                mx="auto"
              />
            </Flex>
          </DialogHeader>

          {/* Body */}
          <DialogBody>
            <VStack gap={5} align="stretch">
              {/* Video */}
              {project.videoUrl && (
                <Box mb={2} position="relative" w="100%" pt="56.25%">
                  <iframe
                    src={project.videoUrl}
                    title={`${project.name} demo`}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      border: "0",
                      borderRadius: "12px",
                    }}
                    allowFullScreen
                  />
                </Box>
              )}

              {/* Overview */}
              <Text
                fontWeight="semibold"
                mb={2}
                color={isLight ? "blue.800" : "cyan.100"}
                fontSize={30}
              >
                What is Tickety?
              </Text>
              <DialogBody>
                <Text fontSize="lg" color={isLight ? "gray.700" : "gray.200"}>
                  Tickety is a SaaS platform built for commercial retailers such
                  as butchers, bakeries, and fishmongers. It enables users to
                  design price tickets once and apply those designs across
                  multiple products, saving time and effort when managing large
                  product lists or data sets.
                </Text>
              </DialogBody>

              <Text
                fontWeight="semibold"
                mb={2}
                color={isLight ? "blue.800" : "cyan.100"}
                fontSize={30}
              >
                Key Features
              </Text>
              <DialogBody>
                <Text fontSize="lg" color={isLight ? "gray.700" : "gray.200"}>
                  Tickety is a SaaS platform built for commercial retailers such
                  as butchers, bakeries, and fishmongers. It enables users to
                  design price tickets once and apply those designs across
                  multiple products, saving time and effort when managing large
                  product lists or data sets.
                </Text>
              </DialogBody>

              <Text
                fontWeight="semibold"
                mb={2}
                color={isLight ? "blue.800" : "cyan.100"}
                fontSize={30}
              >
                Tech Stack
              </Text>
              <DialogBody>
                <Text fontSize="lg" color={isLight ? "gray.700" : "gray.200"}>
                  Tickety is a SaaS platform built for commercial retailers such
                  as butchers, bakeries, and fishmongers. It enables users to
                  design price tickets once and apply those designs across
                  multiple products, saving time and effort when managing large
                  product lists or data sets.
                </Text>
              </DialogBody>

              <Text
                fontWeight="semibold"
                mb={2}
                color={isLight ? "blue.800" : "cyan.100"}
                fontSize={30}
              >
                Design Process
              </Text>
              <DialogBody>
                <Text fontSize="lg" color={isLight ? "gray.700" : "gray.200"}>
                  My first job involved creating tickets for customers for their
                  product displays, the tool i used was good but i noticed lots
                  of pitfalls and would like to haves. A core focus being on
                  customer to print time, this slowed down the process immensely
                  as it required ticket proofs to be printed and sent to
                  customer for review, it also didnt allow for collaboration or
                  saving designs/data to be viewable from anywhere. The goal i
                  set out to achieve understanding the frustrations of retailers
                  and my own annoyances at the limited software experience i had
                  inspired me to create a fast, accessible tool that simplifies
                  that process while giving full creative contol to the customer
                  and even have it outsourced if nescessary via remote login.
                  Inegration with stripe for customer payments is essential step
                  also.
                </Text>
              </DialogBody>

              <Text
                fontWeight="semibold"
                mb={2}
                color={isLight ? "blue.800" : "cyan.100"}
                fontSize={30}
              >
                Future Plans
              </Text>
              <DialogBody>
                <Text fontSize="lg" color={isLight ? "gray.700" : "gray.200"}>
                  Tickety is currently in active development with plans for
                  shared user accounts, shared templates, and print integrations
                  with more than your regular printer for example magicard
                  printers. My long-term goal is to scale it into a subscription
                  service for small retailers. Having a marketplace for seasonal
                  images that are ready to use and maybe purchasable designs to
                  save even more time.
                </Text>
              </DialogBody>

              {/* Tech Stack */}
              <Box>
                {/* <Wrap mb={4} justify="center">
                  {project.techStack.map((tech: string) => (
                    <Tag
                      key={tech}
                      size="md"
                      borderRadius="full"
                      borderWidth="1px"
                      borderColor={isLight ? "teal.200" : "cyan.500"}
                      bg="transparent"
                      color={isLight ? "blue.900" : "cyan.100"}
                      fontWeight="medium"
                    >
                      {tech}
                    </Tag>
                  ))}
                </Wrap> */}
              </Box>

              {/* Gallery Section (you can add your screenshots here) */}
              <Text
                fontWeight="semibold"
                mb={2}
                color={isLight ? "blue.800" : "cyan.100"}
                fontSize={30}
              >
                Gallery
              </Text>
              <Box>
                <VStack gap={3}>
                  <Image
                    src={TicketyDashboard}
                    alt="Tickety Dashboard"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyDesigner}
                    alt="Tickety Designer Page"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyTextOptions}
                    alt="Tickety Text Options"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyGrid}
                    alt="Tickety Grid Designer Toggle"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyData}
                    alt="Tickety Data Page"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyPrint}
                    alt="Tickety Print Preview Page"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyPdf}
                    alt="Tickety PDF Example Print"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyLogin}
                    alt="Tickety Login Page"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyHomepage}
                    alt="Tickety Homepage"
                    borderRadius="lg"
                    shadow="md"
                  />
                  <Image
                    src={TicketyMarketplace}
                    alt="Tickety  Marketplace"
                    borderRadius="lg"
                    shadow="md"
                  />
                </VStack>
              </Box>
            </VStack>
          </DialogBody>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
