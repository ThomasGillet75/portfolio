import * as THREE from 'three';
import {useRef, useEffect} from 'react';

const BackgroundShader = () => {
    const mountRef = useRef<HTMLDivElement>(null); // Spécifier le type de l'élément de référence

    useEffect(() => {
        if (!mountRef.current) { // Vérifier si mountRef.current existe
            return;
        }

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 1;

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        mountRef.current.appendChild(renderer.domElement);

        const geometry = new THREE.PlaneGeometry(2, 2);
        const material = new THREE.ShaderMaterial({
            uniforms: {
                u_time: {value: 0.0},
                u_resolution: {value: new THREE.Vector2(window.innerWidth, window.innerHeight)},
            },
            fragmentShader: `
            uniform float u_time;
            uniform vec2 u_resolution;
    
            void main() {
              vec2 uv = gl_FragCoord.xy / u_resolution.xy;
              float color = 0.0;
              color += sin(uv.x * 10.0 + u_time) * 0.5 + 0.5;
              color *= sin(uv.y * 10.0 + u_time) * 0.5 + 0.5;
              gl_FragColor = vec4(vec3(color * 0.8, 0.3, 0.9), 1.0);
            }
          `,
        });

        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);

        let animationFrameId: number; // Pour stocker l'ID de l'animation frame

        const animate = (time: number) => { // Spécifier le type de 'time'
            material.uniforms.u_time.value = time * 0.001;
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };

        animate(0); // Commencer l'animation avec une valeur initiale

        // Sauvegarder la référence actuelle pour la fonction de nettoyage
        const currentMountRef = mountRef.current;

        return () => {
            cancelAnimationFrame(animationFrameId); // Annuler l'animation frame
            if (currentMountRef) { // Vérifier si la référence sauvegardée existe
                currentMountRef.removeChild(renderer.domElement);
            }
            renderer.dispose(); // Libérer les ressources du renderer
            geometry.dispose(); // Libérer les ressources de la géométrie
            material.dispose(); // Libérer les ressources du matériau
        };
    }, []);

    return <div ref={mountRef} style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }}/>;
};

export default BackgroundShader;