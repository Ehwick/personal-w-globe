import * as THREE from 'three';

// globe scene, camera, and renderer
const globescene = new THREE.Scene();
globescene.background = new THREE.Color( 0x000000 );
const globecamera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
globecamera.position.set(0, 0, 6);
const globerenderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#globe'),
});
globerenderer.setClearColor(0x000000); 
globerenderer.setPixelRatio( window.devicePixelRatio );
globerenderer.setSize((window.innerWidth), (window.innerHeight * 0.7));
globecamera.aspect = window.innerWidth / (window.innerHeight * 0.7);
globecamera.updateProjectionMatrix();
globerenderer.render(globescene, globecamera);

// creating globe
const geometry = new THREE.SphereGeometry( 1.8, 64, 64 ); 
const material = new THREE.MeshPhongMaterial({ 
  map: new THREE.TextureLoader().load('./static/images/earthmap.jpeg'),
  bumpmap: new THREE.TextureLoader().load('.static/images/betterbumpmap.jpeg'),
  bumpScale: 1,
}); 
const sphere = new THREE.Mesh( geometry, material ); 
sphere.position.set(1.75,-1,0);

// Add globe to scene
globescene.add(sphere) ;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
globescene.add(ambientLight);
const pointerLight = new THREE.PointLight(0xffffff, 20);
pointerLight.position.set(0.5,-0.5,3.2);
globescene.add(pointerLight);

// -------------------------------------------------------------------

const starsGeometry = new THREE.SphereGeometry(8, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('./static/images/stars.jpeg'),
    side: THREE.BackSide
});
const starMesh = new THREE.Mesh(starsGeometry, starMaterial);
globescene.add(starMesh);

// ---------------------------------------------- ---------------------
// window resize and system animation 

window.addEventListener('resize', function () {
  const newWidth = window.innerWidth;
  const newHeight = window.innerHeight * 0.7;

  globecamera.aspect = newWidth / newHeight;
  globecamera.updateProjectionMatrix();
  globerenderer.setSize(newWidth, newHeight);
});



function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.003;
  sphere.rotation.y += 0.003;
  sphere.rotation.z += 0.003;
  starMesh.rotation.y -= 0.0005;
  starMesh.rotation.x += 0.0005;
  globerenderer.render(globescene, globecamera);
}

animate();
