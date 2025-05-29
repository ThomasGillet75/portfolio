import * as THREE from 'three';
import {useEffect, useRef} from "react";

function BackgroundShaderTest(){

    const mountRef = useRef<HTMLDivElement>(null); // Spécifier le type de l'élément de référence
    useEffect(() => {
        if (!mountRef.current) {
            return;
        }

        const currentMount = mountRef.current;
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        currentMount.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );
        camera.position.z= 5;


        const animate =()=> {
            renderer.render( scene, camera );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
        animate();
        renderer.setAnimationLoop( animate );
    },[])



    return (
        <>
            <div ref={mountRef} style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
            }}/>
        </>
    )
}

export default BackgroundShaderTest;