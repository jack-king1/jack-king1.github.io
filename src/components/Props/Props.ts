export interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
  isLight: boolean;
}

interface Project {
  name: string;
  overview: string;
  techStack: string[];
  videoUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}
