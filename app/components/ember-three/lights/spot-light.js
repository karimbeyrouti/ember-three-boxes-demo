import ObjectProxy from '../utils/object-proxy';
import THREE from 'three';

export default class SpotLightComponent extends ObjectProxy {
  constructor(owner, args) {
    super(owner, args);
    let { color, intensity } = args;
    this.object3D = new THREE.SpotLight(color || 0xffffff, intensity || 1);
    this.init();
  }

  didReceiveArgs() {
    let {
      position,
      parent,
      color,
      intensity,
      castShadow,
      shadow,
      target,
      distance,
      angle,
      penumbra,
    } = this.args;
    if (this._object3D && position) {
      this._object3D.position.set(position.x, position.y, position.z);
    }

    if (this._object3D && color) {
      this._object3D.color.setHex(color);
    }

    if (this._object3D && angle) {
      this._object3D.angle = angle;
    }

    if (this._object3D && penumbra) {
      this._object3D.penumbra = penumbra;
    }

    if (this._object3D && distance) {
      this._object3D.distance = distance;
    }

    if (this._object3D && intensity) {
      this._object3D.intensity = intensity;
    }

    if (this._object3D && castShadow) {
      this._object3D.castShadow = castShadow;
    }

    if (this._object3D && target) {
      this._object3D.target = target;
    }

    if (this._object3D && shadow) {
      if (shadow.camera) {
        this.applySettingsToObject(this._object3D.shadow.camera, shadow.camera);
      }

      if (shadow.mapSize) {
        this.applySettingsToObject(this._object3D.shadow.mapSize, shadow.mapSize);
      }

      if (shadow.radius) {
        this.applySettingsToObject(this._object3D.shadow, shadow);
      }
    }

    if (parent !== this._parent) {
      this.remove(this._parent, this._object3D);
      this.add(parent, this._object3D);
      this._parent = parent;
    }
  }
}
