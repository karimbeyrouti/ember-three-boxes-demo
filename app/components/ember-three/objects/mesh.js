import THREE from 'three';
import ObjectProxy from '../utils/object-proxy';

export default class SceneMeshComponent extends ObjectProxy {
  constructor(owner, args) {
    super(owner, args);
    let { geometry, material } = this.args;
    this.object3D = new THREE.Mesh(geometry, material);
    this.init();
  }

  didReceiveArgs() {
    super.didReceiveArgs();
    let { receiveShadow, castShadow } = this.args;

    if (this.object3D && receiveShadow) {
      this.object3D.receiveShadow = receiveShadow;
    }

    if (this.object3D && castShadow) {
      this.object3D.castShadow = castShadow;
    }
  }
}
