<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>//import * as three from 'three' //正确
//import three from 'three' //错误
var THREE = require('three') //正确
// console.log(three)

var camera, scene, renderer;
var geometry, materail, mesh;


// 初始化渲染场景
function initRenderer() {

	renderer = new THREE.WebGLRenderer({
		antialias: true
	})

	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)

}

// 初始化相机	
function initCamera() {
	//透视投影相机
	// fov 可视角度
	// aspect 为width/height ,通常设置为canvas元素的宽高比
	// near 近端距离 
	// far 远端距离

	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 100)
	camera.position.z = 1

}


// 初始化场景
function initScene() {
	scene = new THREE.Scene()

	var spotLight = new THREE.SpotLight('#ffffff')
}

//初始化物体
function initObj() {
	// 盒子
	geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2)
	// 材质
	materail = new THREE.MeshNormalMaterial()
	// 
	mesh = new THREE.Mesh(geometry, materail)
	scene.add(mesh)
}


// 渲染
function render() {
	animate()
}

// 动画
function animate() {
	requestAnimationFrame(animate);
	mesh.rotation.x += 0.01
	mesh.rotation.y += 0.02
	renderer.render(scene, camera)
}



function init() {
	initRenderer()
	initCamera()
	initScene()
	initObj()
	render()
}

init()













//安装轨道控制插件:npm install three-orbit-controls
//插件引入之前必须确认three.js库已经引入
//OrbitControls = require('three-orbit-controls')(THREE)
//使用：controls = new OrbitControls(camera);

//安装加载.obj和.mtl文件的插件 npm i --save three-obj-mtl-loader 
//插件引入之前必须确认three.js库已经引入
//该插件包括加载.obj和.mtl 文件的加载器
//import {MTLLoader,OBJLoader} from 'three-obj-mtl-loader';
//使用： mtlLoader = new MTLLoader(); objLoader = new OBJLoader();

//安装 three-css2drender 插件， npm i --save three-css2drender
//插件引入之前必须确认three.js库已经引入
//import {CSS2DRenderer,CSS2DObject} from 'three-css2drenderer';
//使用：labelRenderer = new CSS2DRenderer(); label = new CSS2DObject( text );

