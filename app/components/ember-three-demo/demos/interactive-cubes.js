import THREE from 'three';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import Stats from 'stats.js';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DemoComponent extends Component {
  @service('ember-three/scene-manager') sceneManager;

  counter = 0;
  @tracked cameraPosition = new THREE.Vector3(0, 0, 6.2);
  @tracked cameraTarget = new THREE.Vector3(0, 0, 0);
  emberScene = undefined;
  lightPosition = new THREE.Vector3(1, 1, 1);
  geometry = new THREE.BoxBufferGeometry(20, 20, 20);
  radius = 50;
  rendererParams = {
    clearColor: 0xffffff,
  };
  sceneId = 'ember-threejs-interactive-cubes-demo';
  theta = 0;

  constructor() {
    super(...arguments);

    this.stats = new Stats();
    document.body.appendChild(this.stats.dom);

    this.emberScene = this.sceneManager.get(this.sceneId);
    this.emberScene.addRafCallback(this.render, this);
    this.emberScene.setStats(this.stats);
  }

  get cubes() {
    let cubeProperties = [];

    for (var i = 0; i < 2000; i++) {
      let material = new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff });

      let position = new THREE.Vector3();
      position.x = Math.random() * 800 - 400;
      position.y = Math.random() * 800 - 400;
      position.z = Math.random() * 800 - 400;

      let rotation = new THREE.Vector3();
      rotation.x = Math.random() * 2 * Math.PI;
      rotation.y = Math.random() * 2 * Math.PI;
      rotation.z = Math.random() * 2 * Math.PI;

      let scale = new THREE.Vector3();
      scale.x = Math.random() + 0.5;
      scale.y = Math.random() + 0.5;
      scale.z = Math.random() + 0.5;

      cubeProperties.push({
        material,
        position,
        scale,
        rotation,
      });
    }

    return cubeProperties;
  }
  render() {
    // let { camera, scene } = this.emberScene;
    this.theta += 0.1;
    //
    this.cameraPosition.x = this.radius * Math.sin(THREE.Math.degToRad(this.theta));
    this.cameraPosition.y = this.radius * Math.sin(THREE.Math.degToRad(this.theta));
    this.cameraPosition.z = this.radius * Math.cos(THREE.Math.degToRad(this.theta));
    this.cameraPosition = this.cameraPosition;
    this.cameraTarget = this.cameraTarget;
    // camera.updateMatrixWorld();
    // find intersections
    // raycaster.setFromCamera( mouse, camera );
    //
    // var intersects = raycaster.intersectObjects( scene.children );
    //
    // if ( intersects.length > 0 ) {
    //
    //   if ( INTERSECTED != intersects[ 0 ].object ) {
    //
    //     if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    //
    //     INTERSECTED = intersects[ 0 ].object;
    //     INTERSECTED.currentHex = INTERSECTED.material.emissive.getHex();
    //     INTERSECTED.material.emissive.setHex( 0xff0000 );
    //
    //   }
    //
    // } else {
    //
    //   if ( INTERSECTED ) INTERSECTED.material.emissive.setHex( INTERSECTED.currentHex );
    //
    //   INTERSECTED = null;
    //
    // }
    // renderer.render( scene, camera );
  }

  @action
  destroyElement() {
    document.body.removeChild(this.stats.dom);
  }
}
