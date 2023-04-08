import { OrbitControls } from '@react-three/drei'
import { useHelper } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useRef } from 'react'
import { DirectionalLightHelper, HemisphereLight, PointLight, RectAreaLight, SpotLight } from 'three'

export default function Experience() {
    const directionalLightRef = useRef()

    /*
    const hemisphereLightRef = useRef()
    const pointLightRef = useRef()
    const rectAreaLightRef = useRef()
    const spotLightRef = useRef()
    */

    useHelper(directionalLightRef, DirectionalLightHelper, 1)

    /*
    useHelper(hemisphereLightRef, HemisphereLight, 1)
    useHelper(pointLightRef, PointLight, 1)
    useHelper(rectAreaLightRef, RectAreaLight, 1)
    useHelper(spotLightRef, SpotLight, 1)
    */


    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />

        <directionalLight  ref={directionalLightRef} castShadow position={[0, 10, -10]} intensity={2.5} />
        
        {/*
        <hemisphereLight  ref={hemisphereLightRef} castShadow position={[0, 10, -10]} intensity={2.5} />
        <pointLight  ref={pointLightRef} castShadow position={[0, 10, -10]} intensity={2.5} />
        <rectAreaLight  ref={rectAreaLightRef} castShadow position={[0, 10, -10]} intensity={2.5} />
        <spotLight  ref={spotLightRef} castShadow position={[0, 10, -10]} intensity={2.5} />
        */}
        
        <ambientLight intensity={0.5} />
        <Door/>
        <Floor/>
    </>
}