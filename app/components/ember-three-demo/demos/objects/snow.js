import THREE from 'three';
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class DemoComponent extends Component {
  @service('ember-three/scene-manager') sceneManager;
  emberScene = undefined;
  @tracked rotations = [];
  constructor() {
    super(...arguments);

    this.emberScene = this.sceneManager.get(this.args.sceneId);
    this.emberScene.addRafCallback(this.render, this);

    this.vertices = [];
    this.materials = [];
    this.textureLoader = new THREE.TextureLoader();
    this.sprite1 = this.textureLoader.load('images/sprites/snowflake1.png');
    this.sprite2 = this.textureLoader.load('images/sprites/snowflake2.png');
    this.sprite3 = this.textureLoader.load('images/sprites/snowflake3.png');
    this.sprite4 = this.textureLoader.load('images/sprites/snowflake4.png');
    this.sprite5 = this.textureLoader.load('images/sprites/snowflake5.png');
    this.geometry = new THREE.BufferGeometry();

    for (let i = 0; i < 12000; i++) {
      let max = 60;
      let min = 30;
      let x = Math.random() * max - min;
      let y = Math.random() * max - min;
      let z = Math.random() * max - min;
      this.vertices.push(x, y, z);
    }

    this.geometry.setAttribute('position', new THREE.Float32BufferAttribute(this.vertices, 3));
  }

  get particles() {
    let particlesData = [];
    let sizeScalar = 100;
    let parameters = [
      [[0.2, 0.2, 0.5], this.sprite2, 20 / sizeScalar],
      [[0.3, 0.1, 0.5], this.sprite3, 15 / sizeScalar],
      [[0.1, 0.05, 0.5], this.sprite1, 10 / sizeScalar],
      [[0.2, 0, 0.5], this.sprite5, 8 / sizeScalar],
      [[0.28, 0, 0.5], this.sprite4, 5 / sizeScalar],
    ];

    for (let i = 0; i < parameters.length; i++) {
      let color = parameters[i][0];
      let sprite = parameters[i][1];
      let size = parameters[i][2];

      this.materials[i] = new THREE.PointsMaterial({
        size: size,
        map: sprite,
        blending: THREE.AdditiveBlending,
        depthTest: true,
        transparent: true,
      });
      this.materials[i].color.setHSL(color[0], color[1], color[2]);

      this.rotations[i] = new THREE.Vector3(
        Math.random() * 6,
        Math.random() * 6,
        Math.random() * 6
      );
      particlesData.push({
        geometry: this.geometry,
        material: this.materials[i],
        rotation: this.rotations[i],
        scale: new THREE.Vector3(1, 1, 1),
      });
    }

    return particlesData;
  }

  render() {}
}
