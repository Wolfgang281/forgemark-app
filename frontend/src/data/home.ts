import {
  BookOpen,
  Code2,
  GraduationCap,
  LayoutTemplate,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";

export interface Category {
  title: string;
  icon: LucideIcon;
}

export interface Step {
  number: number;
  title: string;
  desc: string;
}

export const categories: Category[] = [
  { title: "Courses", icon: GraduationCap },
  { title: "Source Code", icon: Code2 },
  { title: "Templates", icon: LayoutTemplate },
  { title: "Ebooks", icon: BookOpen },
  { title: "AI Prompts", icon: MessageSquare },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Explore Products",
    desc: "Browse digital assets across categories like courses, templates and source code.",
  },
  {
    number: 2,
    title: "Purchase Instantly",
    desc: "Secure checkout and immediate access to your downloaded files or links.",
  },
  {
    number: 3,
    title: "Sell & Earn",
    desc: "Join as a creator, upload your work, and start generating passive income.",
  },
];
