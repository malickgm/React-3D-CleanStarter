import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'


const Experience = () => {
  return (
    <>
    <Canvas>
        <mesh>
            <boxGeometry/>
            <meshNormalMaterial/>
        <OrbitControls/>

        </mesh>
    </Canvas>
    </>
  )
}

export default Experience