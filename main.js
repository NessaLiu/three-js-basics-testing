// import { OrbitControls } from '@/node_modules/three/examples/js/controls/OrbitControls

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// create lights

const pointLight = new THREE.PointLight(0xFFFFFF, 1, 500);
pointLight.position.set(0, 10, 25);
scene.add(pointLight);

const pointLight2 = new THREE.PointLight(0xFFFFFF, 1, 20);
pointLight2.position.set(-20, -50, 10);
//scene.add(pointLight2);

const ambLight = new THREE.AmbientLight(0x404040 , 1, 10);
ambLight.position.set(0, 10, 25);
scene.add(ambLight);


// renderer
const renderer = new THREE.WebGLRenderer({antialias: true});
// renderer.setClearColor("#ECF7B9");
renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix;
})

// create spheres
const geometry = new THREE.SphereGeometry(10, 10, 10);
// const material = new THREE.MeshLambertMaterial( { color: 0x9AC791 } );
const material = new THREE.MeshNormalMaterial( { wireframe: true } );
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

const geometry2 = new THREE.SphereGeometry(10, 10, 10);
// const material2 = new THREE.MeshLambertMaterial( { color: 0xf1e8ca } );
const material2 = new THREE.MeshNormalMaterial( { wireframe: true } );
const sphere2 = new THREE.Mesh( geometry2, material2 );
sphere2.position.x = 40;
scene.add( sphere2 );

const geometry3 = new THREE.SphereGeometry(10, 10, 10);
// const material3 = new THREE.MeshLambertMaterial( { color: 0x91AC9A } );
const material3 = new THREE.MeshNormalMaterial( { wireframe: true } );
const sphere3 = new THREE.Mesh( geometry3, material3 );
sphere3.position.x = -40;
scene.add( sphere3 );

// orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
// controls.minDistance = 1;
// controls.maxDistance = 1000;
camera.position.set(0, 20, 100);
controls.update();

function animate() {
    requestAnimationFrame(animate);

    sphere.rotation.x += 0.02;
    sphere.rotation.y += 0.02;

    sphere2.rotation.x += 0.02;
    sphere2.rotation.y += 0.02;

    sphere3.rotation.x += 0.02;
    sphere3.rotation.y += 0.02;

    controls.update();
    renderer.render(scene, camera);
}

animate();