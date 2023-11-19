import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";
import { ScrollControls, Scroll } from "@react-three/drei";
import { Interface } from "./components/Interface";

function App() {
  return (
    <>
      <Canvas shadows camera={{ position: [3, 3, 3], fov: 30 }}>
        <color attach="background" args={["#ececec"]} />
        {/* Control scrolling between the 4 different pages */}
        <ScrollControls pages={4} damping={0.1}>
          <Experience />
          <Scroll html>
            {/* <h2 className="text-3xl underline font-bold">Hello world!</h2> */}
            <Interface />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </>
  );
}

export default App;
