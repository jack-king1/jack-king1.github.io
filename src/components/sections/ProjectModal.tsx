"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogContent,
  DialogHeader,
  DialogBody,
  DialogCloseTrigger,
  Box,
  Text,
  Wrap,
  Tag,
  TagLabel,
  useBreakpointValue,
} from "@chakra-ui/react";
import type { ProjectModalProps } from "../Props/Props";
import { IconButton } from "@chakra-ui/react";
import { X } from "lucide-react"; // or use any icon library

export default function ProjectModal({
  isOpen,
  onClose,
  project,
  isLight,
}: ProjectModalProps) {
  const cardBgColour = isLight ? "white" : "gray.800";

  // ✅ Choose sizing based on screen width
  const dialogWidth = useBreakpointValue({
    base: "100%", // phones
    sm: "95%", // small tablets
    md: "1200px", // desktops and up
  });

  const dialogRadius = useBreakpointValue({
    base: 0,
    md: "lg",
  });

  if (!project) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Backdrop />
      <Dialog.Positioner>
        <Dialog.Content
          bg={cardBgColour}
          w={dialogWidth}
          maxW="90vw"
          mx="auto"
          my={{ base: 0, md: 6 }}
          borderRadius={dialogRadius}
          p={{ base: 4, md: 6 }}
        >
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
              }}
              onClick={onClose}
            >
              <X size={22} color={isLight ? "#1A202C" : "#EDF2F7"} />
            </Box>
          </Dialog.CloseTrigger>
          <DialogHeader fontSize={{ base: "xl", md: "2xl" }}>
            {project.name}
          </DialogHeader>

          <DialogBody>
            {/* Video */}
            <Box mb={4} position="relative" w="100%" pt="56.25%">
              <Box
                as="iframe"
                src={project.videoUrl}
                title={`${project.name} demo`}
                position="absolute"
                top="0"
                left="0"
                w="100%"
                h="100%"
                borderRadius="md"
                border="0"
                allowFullScreen
              />
            </Box>

            {/* Overview */}
            <Text mb={4}>{project.overview}</Text>

            {/* Tech Stack */}
            <Text fontWeight="bold" mb={2}>
              Tech Stack
            </Text>
            {/* <Wrap mb={4}>
              {project.techStack.map((tech: string) => (
                <Tag key={tech} colorScheme="teal">
                  <TagLabel>{tech}</TagLabel>
                </Tag>
              ))}
            </Wrap> */}
          </DialogBody>
        </Dialog.Content>
      </Dialog.Positioner>
    </Dialog.Root>
  );
}
