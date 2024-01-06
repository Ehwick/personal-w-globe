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
globerenderer.setSize((window.innerWidth), (window.innerHeight));
globerenderer.render(globescene, globecamera);

// creating globe
const geometry = new THREE.SphereGeometry( 0.85, 64, 64 ); 
const material = new THREE.MeshPhongMaterial({ 
  map: new THREE.TextureLoader().load('./static/images/blackmap.jpeg'),
  bumpmap: new THREE.TextureLoader().load('.static/images/betterbumpmap.jpeg'),
  bumpScale: 1,
}); 
const sphere = new THREE.Mesh( geometry, material ); 
if (window.innerWidth < 910) {
    sphere.position.x = (-1.3 - (window.innerWidth / 1000)) + 0.45;
  } 
  else {
    sphere.position.x = -1.3- (window.innerWidth / 1000);
  }

// Add globe to scene
globescene.add(sphere) ;

const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
globescene.add(ambientLight);
const pointerLight = new THREE.PointLight(0xffffff, 15);
pointerLight.position.set(0,1.5,0);
globescene.add(pointerLight);

// -------------------------------------------------------------------

const starsGeometry = new THREE.SphereGeometry(5, 64, 64);
const starMaterial = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load('./static/images/stars.jpeg'),
    side: THREE.BackSide
});
const starMesh = new THREE.Mesh(starsGeometry, starMaterial);
globescene.add(starMesh);

// ---------------------------------------------- ---------------------
// window resize and system animation 

function onWindowResize() {
  globecamera.aspect = window.innerWidth / window.innerHeight;
  if (window.innerWidth < 910) {
    sphere.position.x = (-1.3 - (window.innerWidth / 1000)) + 0.45;
  } 
  else {
    sphere.position.x = -1.3 - (window.innerWidth / 1000);
  }
  if (window.innerHeight < 500) {
    sphere.position.y = (0 + (window.innerHeight / 1000)) - 1.45;
    sphere.position.x = -1.3;
  } 
  else {
    sphere.position.y = 0 - (window.innerHeight / 1000);
  }
  globecamera.updateProjectionMatrix();
  globerenderer.setSize((window.innerWidth), (window.innerHeight));
}
window.addEventListener('resize', onWindowResize);


function animate() {
  requestAnimationFrame(animate);

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.01;
  sphere.rotation.z += 0.01;
  starMesh.rotation.y -= 0.002;
  starMesh.rotation.x += 0.002;
  globerenderer.render(globescene, globecamera);
}

animate();
