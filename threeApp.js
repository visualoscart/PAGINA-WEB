import * as THREE from 'three';
import { MTLLoader } from 'three/addons/loaders/MTLLoader.js';
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

let scene, camera, renderer, headModel;
let baseScale = 1;

function init() {
    const canvas = document.getElementById('webgl-canvas');
    if (!canvas) return;

    // Configuración de la escena
    scene = new THREE.Scene();
    
    // Configuración de la cámara
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 15;

    // Configuración del renderizador
    renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    // renderer.setClearColor(0x000000, 0); // Fondo transparente // Ya cubierto con alpha:true

    // Luces Inmersivas (Naranja y Morado)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2); // Luz base super tenue
    scene.add(ambientLight);

    const purpleLight = new THREE.DirectionalLight(0x6100F9, 3);
    purpleLight.position.set(-5, 5, 5);
    scene.add(purpleLight);

    const orangeLight = new THREE.DirectionalLight(0xF76319, 3);
    orangeLight.position.set(5, -5, 5);
    scene.add(orangeLight);
    
    const purpleCore = new THREE.PointLight(0x6100F9, 5, 20);
    purpleCore.position.set(0, 5, -5);
    scene.add(purpleCore);

    const mtlLoader = new MTLLoader();
    mtlLoader.load('SOLO CABEZA.mtl', (materials) => {
        materials.preload();
        const objLoader = new OBJLoader();
        objLoader.setMaterials(materials);
        objLoader.load('SOLO CABEZA.obj', (object) => {
            headModel = object;
            
            // Auto-Centro y Auto-Escalado (Para proteger contra exportaciones muy grandes o muy pequeñas)
            const box = new THREE.Box3().setFromObject(headModel);
            const size = box.getSize(new THREE.Vector3());
            const center = box.getCenter(new THREE.Vector3());

            // Centrar el eje en cero
            headModel.position.x += (headModel.position.x - center.x);
            headModel.position.y += (headModel.position.y - center.y);
            headModel.position.z += (headModel.position.z - center.z);
            
            // Asegurarnos de que el máximo eje ocupe un espacio visual ideal (aprox 12 unidades)
            const maxDim = Math.max(size.x, size.y, size.z);
            baseScale = 15 / maxDim; // Hacerlo más grande y majestuoso
            headModel.scale.set(baseScale, baseScale, baseScale);

            // Asegurar que las caras interiores o normales invertidas se rendericen 
            headModel.traverse((child) => {
                if (child.isMesh) {
                    // Forzar textura a dos lados por si hay huecos en la malla exportada
                    child.material.side = THREE.DoubleSide;
                }
            });
            
            scene.add(headModel);
            onScrollAction(); // Fuerza la coreografía inmediata para la posición superior
        });
    }, undefined, (error) => {
        console.error('Error cargando el MTL:', error);
    });

    // Event Listeners
    window.addEventListener('resize', onWindowResize);
    window.addEventListener('scroll', onScrollAction);

    // Bucle de renderizado central
    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Parámetros de la coreografía inmersiva
let targetRotationY = 0;
let targetRotationZ = 0;
let targetPositionX = 0;
let targetPositionY = 0;
let targetScale = 1;

function onScrollAction() {
    // Calculamos el porcentaje de la página que el usuario ha scrolleado (0 a 1)
    const scrollY = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(Math.max(scrollY / (maxScroll || 1), 0), 1);
    
    // Rotaciones dramáticas globales
    targetRotationY = progress * Math.PI * 2.5; // dará algo más de 1 vuelta completa
    targetRotationZ = Math.sin(progress * Math.PI * 2) * 0.15; // Inclinaciones

    // Coreografía por secciones (0.0 -> Inicio, 1.0 -> Final)
    if (progress < 0.2) {
        // En Hero: en el centro, cerca
        targetPositionX = 0;
        targetPositionY = 0;
        targetScale = 1.0;
    } else if (progress < 0.5) {
        // En Servicios: a la izquierda, asomándose para apoyar el texto
        targetPositionX = -5;
        targetPositionY = -2;
        targetScale = 0.8;
    } else if (progress < 0.8) {
        // En Conócenos: pasa a la Izquierda en pequeño, dejando el logo protagonizar las órbitas derecha
        targetPositionX = -3.5;
        targetPositionY = -1;
        targetScale = 0.8;
    } else {
        // En Portafolio/Contacto: regresa al centro majestuoso
        targetPositionX = 0;
        targetPositionY = -3;
        targetScale = 1.0;
    }
}

function animate() {
    requestAnimationFrame(animate);

    if (headModel) {
        // Movimiento Súper Suave y Orgánico usando 'Lerp'
        headModel.rotation.y += (targetRotationY - headModel.rotation.y) * 0.05;
        headModel.rotation.z += (targetRotationZ - headModel.rotation.z) * 0.05;
        headModel.position.x += (targetPositionX - headModel.position.x) * 0.05;
        headModel.position.y += (targetPositionY - headModel.position.y) * 0.05;
        
        // Suavizado del escalado 3D
        const currentScale = headModel.scale.x; 
        const desiredScale = baseScale * targetScale;
        const newScale = currentScale + (desiredScale - currentScale) * 0.05;
        headModel.scale.set(newScale, newScale, newScale);
    }

    renderer.render(scene, camera);
}

// Iniciar aplicación 3D
window.addEventListener('DOMContentLoaded', init);
