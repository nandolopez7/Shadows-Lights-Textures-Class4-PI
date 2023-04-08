import { useTexture } from "@react-three/drei";
import { DoubleSide } from "three";

export default function Door() {
    const PATH = "/static/textures/door/"
    
    const props = useTexture({
        map: PATH + "Lava_006_basecolor.jpg",
        displacementMap: PATH + 'Lava_006_height.png',
        normalMap: PATH + 'Lava_006_normal.jpg',
        roughnessMap: PATH + 'Lava_006_roughness.jpg',
        aoMap: PATH + 'Lava_006_ambientOcclusion.jpg',
        metalnessMap: PATH + 'Lava_006_emissive.jpg',

    })

    return (
        <mesh castShadow={true} rotation-y={Math.PI / 12}>
            <sphereBufferGeometry />
            <meshStandardMaterial {...props} side={DoubleSide} />
        </mesh>
    )
}