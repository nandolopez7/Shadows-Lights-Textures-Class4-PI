import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
    const PATH = "/static/textures/floor/"
    
    const props = useTexture({
        map: PATH + "Ground_Dirt_009_BaseColor.jpg",
        displacementMap: PATH + 'Ground_Dirt_009_Height.png',
        normalMap: PATH + 'Ground_Dirt_009_Normal.jpg',
        roughnessMap: PATH + 'Ground_Dirt_009_Roughness.jpg',
        aoMap: PATH + 'Ground_Dirt_009_AmbientOcclusion.jpg'
    })

    return (
        <mesh receiveShadow={true} position-y={ - 1.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[8, 8]} />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}
