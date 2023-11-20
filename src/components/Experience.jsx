import { animate, useMotionValue } from "framer-motion";
import { StudyRoom } from "./StudyRoom";
import { motion } from "framer-motion-3d";
import { useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { framerMotionConfig } from "../config";
import { Avatar } from "./Avatar";

export const Experience = (props) => {
  const { section, menuOpened } = props;

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
    </>
  );
};
