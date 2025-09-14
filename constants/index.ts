import { HomeIcon, Info, TableOfContents, VideoIcon } from "lucide-react";

export const navigation_link = [
  { route: "/", label: "Home", icon: HomeIcon },
  { route: "/lives", label: "Lives", icon: VideoIcon },
  { route: "/content", label: "Content", icon: TableOfContents },
  { route: "/about", label: "About", icon: Info },
];

export const top_Followers = [
  { name: "GalaxyCat", avatar: "/assets/cat.jpg", followers: 5100 },
  { name: "MrTom", avatar: "/assets/dr.jpg", followers: 4165 },
  { name: "Steve", avatar: "/assets/man.jpg", followers: 2072 },
  { name: "SomeOne", avatar: "/assets/mr.jpg", followers: 1580 },
];

export const top_Teachers = [
  { name: "Steve", avatar: "/assets/man.jpg", status: "Fullstack" },
  { name: "MrTom", avatar: "/assets/dr.jpg", status: "Backend" },
  { name: "GalaxyCat", avatar: "/assets/cat.jpg", status: "Frontend" },
  { name: "SomeOne", avatar: "/assets/mr.jpg", status: "UI/Design" },
];
