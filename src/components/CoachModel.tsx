import React from 'react';
import { useGLTF } from '@react-three/drei';

const CoachModel: React.FC = () => {
  try {
    const { scene } = useGLTF('/coach.glb');

    if (!scene) {
      console.warn('GLB loaded but no scene found.');
      return (
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="red" />
        </mesh>
      );
    }

    return <primitive object={scene} scale={2.5} />;
  } catch (err) {
    console.error('Model failed to load:', err);
    return (
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    );
  }
};

useGLTF.preload('/coach.glb');
export default CoachModel;
