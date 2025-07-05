import React from 'react';
import { useGLTF } from '@react-three/drei';

const CoachModel: React.FC = () => {
  const gltf = useGLTF('/coach.glb');

  if (!gltf || !gltf.scene) {
    console.warn('⚠️ Model not loaded or missing scene.');
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }

  return <primitive object={gltf.scene} scale={[2.5, 2.5, 2.5]} />;
};

useGLTF.preload('/coach.glb');
export default CoachModel;
