import { useEffect, useRef } from "react";
import { Group, Object3DEventMap, Vector3 } from "three";
import { FlyControls, useGLTF } from "@react-three/drei";
import { FlyControls as ThreeFlyControls } from "three/examples/jsm/Addons.js";

export default function Ship() {
  const { nodes, materials } = useGLTF("/better-noAni-posi-draco.glb");
  const shipRef = useRef<Group<Object3DEventMap>>(null);
  const controlRef = useRef<ThreeFlyControls>(undefined);

  return (
    <>
      <FlyControls
        ref={controlRef}
        makeDefault
        movementSpeed={10}
        rollSpeed={Math.PI / 6}
        onChange={(e) => {
          const target = e?.target as ThreeFlyControls;
          if (!shipRef.current || !controlRef.current || !target) return;
          const controls = controlRef.current;
          const ship = shipRef.current;

          const worldDirection = new Vector3();
          controls.object.getWorldDirection(worldDirection);

          const distance = 10; // how far in front of camera
          const followSpeed = 0.01;

          // Compute target position
          const targetPos = controls.object.position
            .clone()
            .add(worldDirection.multiplyScalar(distance));
          ship.position.lerp(targetPos, followSpeed);
          ship.rotation.copy(controls.object.rotation);
        }}
      />

      <group ref={shipRef} dispose={null} scale={1}>
        <mesh
          geometry={nodes.StarSparrow_Wing002.geometry}
          material={materials.StarSparrow_Material}
          rotation={[0, Math.PI, 1.336]}
          position={[2.5, -3, -8]}
        />
      </group>
    </>
  );
}

useGLTF.preload("/better-noAni-posi-draco.glb");
