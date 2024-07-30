import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Moon(props) {
  const { nodes, materials } = useGLTF('/moon.glb')

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials.zula}
        rotation={[-Math.PI / 2, 0, 12]}
        scale={2} // ปรับขนาดของโมเดลให้ใหญ่เต็มกรอบ
      />
    </group>
  )
}

useGLTF.preload('/moon.glb')
