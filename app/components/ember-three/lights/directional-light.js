import ObjectProxy from '../utils/object-proxy';
import THREE from 'three';

export default class SceneDirectionalLightComponent extends ObjectProxy {
  constructor(owner, args) {
    super(owner, args);
    let { color, intensity } = args;
    this.object3D = new THREE.DirectionalLight(color || 0xffffff, intensity || 0.75);
    this.init();
  }

  didReceiveArgs() {
    let { position, parent, color, intensity } = this.args;
    if (this._object3D && position) {
      this._object3D.position.set(position.x, position.y, position.z).normalize();
    }

    if (this._object3D && color) {
      this._object3D.color.setHex(color);
    }

    if (this._object3D && intensity) {
      this._object3D.intensity = intensity;
    }


    if (parent !== this._parent) {
      this.remove(this._parent, this._object3D);
      this.add(parent, this._object3D);
      this._parent = parent;
    }
  }
}
