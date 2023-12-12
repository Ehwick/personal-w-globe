import * as THREE from 'three';


const scene = new THREE.Scene();
scene.background = new THREE.Color( 0xffffff );
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.setZ(4);
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#globe'),
});
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize((0.4 * window.innerWidth), (0.4 * window.innerHeight));
// renderer.setClearColorHex( 0xffffff, 1 );

renderer.render(scene, camera);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize((0.4 * window.innerWidth), (0.4 * window.innerHeight));
}
window.addEventListener('resize', onWindowResize);

// ----------------------------------------------

const geometry = new THREE.SphereGeometry( 1.3, 32, 32 ); 
const material = new THREE.MeshBasicMaterial({ 
  map: new THREE.TextureLoader().load('texture/earthmap.jpeg'),
  bumpmap: new THREE.TextureLoader().load('texture/bumpmap.jpeg'),
  // bumpScale: 0.5,
}); 
const sphere = new THREE.Mesh( geometry, material ); 
scene.add( sphere );

const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
scene.add(ambientLight);
const pointerLight = new THREE.PointLight(0xffffff, 0.9);
pointerLight.position.set(5,3,5);
scene.add(pointerLight);

function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;

  renderer.render(scene, camera);
}

animate();