import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import { avg, newRotations } from 'ember-three-boxes-demo/utils/utils';


export default class DemoComponent extends Component {
  frames = Array(60).fill(0); // for smoothing out FPS counter
  frame = undefined; // for tracking the current frame

  @tracked count;

  @tracked rotations = newRotations();
  @tracked fps = 0;

  get aspectRatio() {
    return window.innerWidth / window.innerHeight;
  }

  @action
  updateCount(newCount) {
    this.count = newCount;
    this.rotations = newRotations(this.count);
  }

  animate() {
    let last = Date.now();
    let boundCallback;

    function loop() {
      this.frame = requestAnimationFrame(boundCallback);

      for (let i = 0; i < this.rotations.length; i++) {
        let box = this.rotations[i];
        box[0] += 0.01;
        box[1] += 0.01;
        box[2] += 0.01;
      }

      // eslint-disable-next-line
      this.rotations = this.rotations; // notify of content change

      // this.renderer.render(this.scene, this.camera);

      const now = Date.now();
      const elapsed = now - last;

      this.frames.shift();
      this.frames[frames.length] = 1000 / elapsed;
      this.fps = Math.round(avg(this.frames));
      last = now;
    }

    boundCallback = loop.bind(this);
    this.frame = requestAnimationFrame(boundCallback);
  }

  willDestroy() {
    cancelAnimationFrame(this.frame);
  }
}
