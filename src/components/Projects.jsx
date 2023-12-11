import { Image, Text } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { animate, useMotionValue } from "framer-motion";

import { motion } from "framer-motion-3d";
import { atom, useAtom } from "jotai";
import { useEffect, useRef } from "react";

export const projects = [
  {
    title: "Personal Website",
    url: "https://mingchao-zhang.github.io/",
    image: "projects/personal_website.jpg",
    description: "A portfolio without using external frontend libraries",
  },
  {
    title: "Hourglass",
    url: "https://github.com/mingchao-zhang/Hourglass",
    image: "projects/hourglass.jpg",
    description:
      "A chrome extension that keeps track of users' browsing behaviors",
  },
  {
    title: "TCP & IP Protocols",
    url: "https://github.com/mingchao-zhang/ip-tcp-tonkatsu-enchiladas",
    image: "projects/network.jpg",
    description: "RFC Compliant implementation of TCP & IP Protocols",
  },
  {
    title: "Best Movie",
    url: "https://mingchao-zhang.gitlab.io/best_movie/",
    image: "projects/movie.jpg",
    description: "A movie recommendation website built on top of IMDb APIs",
  },
  {
    title: "K9db Visualizer",
    url: "https://mingchao-zhang.github.io/K9db-Visualizer/",
    image: "projects/k9db_visualizer.jpg",
    description:
      "A visualizer aimed to help users easily create tables with GDPR annotations in K9db",
  },
];

const Project = (props) => {
  const { project, highlighted } = props;

  const background = useRef();
  const bgOpacity = useMotionValue(0.4);

  useEffect(() => {
    animate(bgOpacity, highlighted ? 0.7 : 0.4);
  }, [highlighted]);

  useFrame(() => {
    background.current.material.opacity = bgOpacity.get();
  });

  return (
    <group {...props}>
      <mesh
        position-z={-0.001}
        onClick={() => window.open(project.url, "_blank")}
        onPointerOver={() => {
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          document.body.style.cursor = "auto";
        }}
        ref={background}
      >
        <planeGeometry args={[4.4, 4]} />
        <meshBasicMaterial color="black" transparent opacity={0.4} />
      </mesh>
      <Image
        scale={[4, 2.4, 2]}
        url={project.image}
        toneMapped={false}
        position-y={0.6}
      />
      <Text
        maxWidth={3}
        anchorX={"left"}
        anchorY={"top"}
        fontSize={0.25}
        position={[-2, -0.9, 0]}
      >
        {project.title.toUpperCase()}
      </Text>
      <Text
        maxWidth={4}
        anchorX="left"
        anchorY="top"
        fontSize={0.2}
        position={[-2, -1.3, 0]}
      >
        {project.description}
      </Text>
    </group>
  );
};

export const currentProjectAtom = atom(Math.floor(projects.length / 2));

export const Projects = () => {
  const { viewport } = useThree();
  const [currentProject] = useAtom(currentProjectAtom);

  return (
    <group position-y={-viewport.height * 2 - 1.5}>
      {projects.map((project, index) => (
        <motion.group
          key={"project_" + index}
          position={[index * 2.5, -10, -1]}
          animate={{
            x: (index - currentProject) * 6,
            y: ((index % 2) - currentProject) * -1 - 1,
            z: 0,
            rotateX: currentProject === index ? -0.5 : -0.5,
            rotateY: currentProject === index ? 0 : 0,
            rotateZ: currentProject === index ? 0 : 0,
          }}
        >
          <Project project={project} highlighted={index === currentProject} />
        </motion.group>
      ))}
    </group>
  );
};
