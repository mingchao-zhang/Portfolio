import { animate, useMotionValue } from "framer-motion";
import { StudyRoom } from "./StudyRoom";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";
import { useGLTF, Float } from "@react-three/drei";

export const Experience = (props) => {
  const { section, menuOpened } = props;
  const { viewport } = useThree();

  // Adjust the camera position when the menu is open
  const cameraPositionX = useMotionValue(0);
  const cameraLookAtX = useMotionValue(0);

  useEffect(() => {
    animate(cameraPositionX, menuOpened ? -10 : 0, {
      ...framerMotionConfig,
    });
    animate(cameraLookAtX, menuOpened ? 0 : 0, {
      ...framerMotionConfig,
    });
  }, [menuOpened]);

  useFrame((state) => {
    state.camera.position.x = cameraPositionX.get();
    state.camera.lookAt(cameraLookAtX.get(), 0, 0);
  });

  const resume = useGLTF("public/models/resume.glb");
  const handleResumeClick = () => {
    // Redirect to the local PDF file
    window.open("/Portfolio/public/files/Mingchao_Zhang_Resume.pdf", "_blank");
  };
  return (
    <>
      <ambientLight intensity={1.1} />
      {/* adjust the scene position */}
      <motion.group
        position={[4, 0, 2.5]}
        scale={[0.8, 0.8, 0.8]}
        rotation-y={-Math.PI / 4}
        animate={{
          y: section === 0 ? 0 : -1,
        }}
      >
        <StudyRoom position={[0, 0.5, 0]} />
        <Avatar scale={[2.2, 2.2, 2.2]} position={[-7.6, 0, -2.7]} />
      </motion.group>

      {/* resume section */}
      <motion.group
        position={[10, 0, 0]}
        rotation={[0, 0, 0]}
        animate={"" + section}
        transition={{
          duration: 0.6,
        }}
        variants={{
          0: {
            scaleX: 0.05,
            scaleY: 0.05,
            scaleZ: 0.05,
          },
          1: {
            y: -viewport.height + 0.5,
            x: 0,
            z: 7,
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          },
        }}
      >
        <Float
          rotationIntensity={1}
          onClick={handleResumeClick}
          onPointerOver={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerOut={() => {
            document.body.style.cursor = "auto";
          }}
        >
          <primitive
            scale={[6, 6, 6]}
            position={[-3, -5, -15]}
            rotation={[0.45, 1.6, 0.6]}
            object={resume.scene}
          />
        </Float>
      </motion.group>
    </>
  );
};
