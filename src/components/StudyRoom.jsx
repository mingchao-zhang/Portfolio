/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.15 public/models/studyRoom.gltf 
*/

import React from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

export function StudyRoom(props) {
  const { nodes, materials } = useGLTF("models/studyRoom.gltf");
  // load the baked texture
  const texture = useTexture("textures/BakedStudyRoom.jpg");
  // blender and three.js have opposite y directions
  texture.flipY = false;
  // indicate the color encoding method
  texture.colorSpace = THREE.SRGBColorSpace;
  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  });
  return (
    <group {...props} dispose={null}>
      <group position={[-3.53, 0, -0.856]}>
        <mesh
          geometry={nodes["DogBed_Cube001-Mesh"].geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes["DogBed_Cube001-Mesh_1"].geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-3.672, 0, -4.229]}>
        <mesh
          geometry={nodes.lampSquareFloor_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.lampSquareFloor_2_1.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        geometry={nodes.CoffeTable.geometry}
        material={textureMaterial}
        position={[0.196, 0, 0.353]}
      />
      <mesh
        geometry={nodes.Sofa.geometry}
        material={textureMaterial}
        position={[0.771, 0, 3.106]}
        rotation={[-Math.PI / 2, 0, 3.124]}
      />
      <group position={[-3.432, 0.925, -0.868]} rotation={[0, 1.427, 0]}>
        <mesh
          geometry={nodes.mesh441939820.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh441939820_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh441939820_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh441939820_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[-0.09, 2.047, -4.342]} rotation={[3.101, 0.14, 3.079]}>
        <mesh
          geometry={nodes.mesh1180939846.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh1180939846_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh1180939846_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh1180939846_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[1.218, 1.829, -4.053]} rotation={[0, -0.304, 0]}>
        <mesh
          geometry={nodes.mesh256948792.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh256948792_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh256948792_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh256948792_3.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.mesh256948792_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[0.523, 0, -2.176]} rotation={[-Math.PI / 2, 0, 2.754]}>
        <mesh
          geometry={nodes.OfficeChair_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.OfficeChair_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.OfficeChair_3.geometry}
          material={textureMaterial}
        />
      </group>
      <group position={[0.941, 0, -3.96]} rotation={[Math.PI, -1.543, Math.PI]}>
        <mesh
          geometry={nodes.Cube004_Cube005_BlackCoatSteel.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Cube004_Cube005_BlackCoatSteel_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Cube004_Cube005_BlackCoatSteel_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Cube004_Cube005_BlackCoatSteel_3.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Cube004_Cube005_BlackCoatSteel_4.geometry}
          material={textureMaterial}
        />
      </group>
      <group
        position={[-8.083, 2.516, -2.584]}
        rotation={[-Math.PI / 2, 0, -2.2]}
      >
        <mesh
          geometry={nodes.Icosphere002.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Icosphere002_1.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh
        geometry={nodes.Walldrawing.geometry}
        material={textureMaterial}
        position={[-0.02, 4.348, -4.978]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <group position={[0, 0.891, 0.467]} rotation={[Math.PI / 2, 0, 2.302]}>
        <mesh geometry={nodes.Sphere_1.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Sphere_2.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Sphere_3.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Sphere_4.geometry} material={textureMaterial} />
        <mesh geometry={nodes.Sphere_5.geometry} material={textureMaterial} />
      </group>
      <group
        position={[0.247, 0.875, 1.172]}
        rotation={[1.645, -0.093, -1.889]}
      >
        <mesh
          geometry={nodes.Sphere001_1.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Sphere001_2.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Sphere001_3.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Sphere001_4.geometry}
          material={textureMaterial}
        />
        <mesh
          geometry={nodes.Sphere001_5.geometry}
          material={textureMaterial}
        />
      </group>
      <mesh geometry={nodes.Plane003.geometry} material={textureMaterial} />
      <mesh geometry={nodes.Plane003_1.geometry} material={textureMaterial} />
    </group>
  );
}

useGLTF.preload("models/studyRoom.gltf");
