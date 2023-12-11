import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/Interface";
import { useState, useEffect } from "react";
import { ScrollManager } from "./components/ScrollManager";
import { Menu } from "./components/Menu";
import { MotionConfig } from "framer-motion";
import { framerMotionConfig } from "./config";

function App() {
  // which section/page are we currently at
  const [section, setSection] = useState(0);
  const [menuOpened, setMenuOpened] = useState(false);

  // if the section changed, set the menu open to false to close the menu
  useEffect(() => {
    setMenuOpened(false);
  }, [section]);
  return (
    <>
      {/* add the spring animation to all objects on the canvas */}
      <MotionConfig transition={{ ...framerMotionConfig }}>
        <Canvas shadows camera={{ position: [0, 7, 13], fov: 60 }}>
          <color attach="background" args={["#e1e2fa"]} />
          {/* Control scrolling between the 4 different pages */}
          <ScrollControls pages={4} damping={0.1}>
            <ScrollManager section={section} onSectionChange={setSection} />
            {/* make the room move when we scroll */}
            <Scroll>
              <Experience section={section} menuOpened={menuOpened} />
            </Scroll>
            <Scroll html>
              <Interface />
            </Scroll>
          </ScrollControls>
        </Canvas>
        <Menu
          onSectionChange={setSection}
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
        />
      </MotionConfig>
    </>
  );
}

export default App;
