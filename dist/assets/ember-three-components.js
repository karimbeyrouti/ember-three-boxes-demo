'use strict';



;define("ember-three-components/app", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-three-components/resolver", "ember-load-initializers", "ember-three-components/config/environment"], function (_exports, _defineProperty2, _resolver, _emberLoadInitializers, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class App extends Ember.Application {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "modulePrefix", _environment.default.modulePrefix);
      (0, _defineProperty2.default)(this, "podModulePrefix", _environment.default.podModulePrefix);
      (0, _defineProperty2.default)(this, "Resolver", _resolver.default);
    }

  }

  _exports.default = App;
  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);
});
;define("ember-three-components/component-managers/control-flow", ["exports", "ember-components-extra/-private/control-flow-manager"], function (_exports, _controlFlowManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _controlFlowManager.default;
    }
  });
});
;define("ember-three-components/component-managers/glimmer", ["exports", "@glimmer/component/-private/ember-component-manager"], function (_exports, _emberComponentManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _emberComponentManager.default;
    }
  });
});
;define("ember-three-components/component-managers/renderless", ["exports", "ember-components-extra/-private/renderless-manager"], function (_exports, _renderlessManager) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _renderlessManager.default;
    }
  });
});
;define("ember-three-components/components/ember-three-demo/demos/controls/cube", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class='controls'>
    <label>
      Amount
      {{#let (array 100 250 500 1000 2000 10000) as |counts|}}
        <select {{on 'change' this.updateCount}}>
          {{#each counts as |count|}}
            <option
              selected={{eq this.cubesAppState.count count}}
              value={{count}}
            >
              {{count}}
            </option>
          {{/each}}
        </select>
      {{/let}}
    </label>
  </div>
  
  */
  {
    id: "8EDwCMLa",
    block: "{\"symbols\":[\"counts\",\"count\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"controls\"],[8],[0,\"\\n  \"],[7,\"label\",true],[8],[0,\"\\n    Amount\\n\"],[4,\"let\",[[28,\"array\",[100,250,500,1000,2000,10000],null]],null,{\"statements\":[[0,\"      \"],[7,\"select\",false],[3,\"on\",[\"change\",[23,0,[\"updateCount\"]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,1,[]]],null,{\"statements\":[[0,\"          \"],[7,\"option\",true],[11,\"selected\",[28,\"eq\",[[23,0,[\"cubesAppState\",\"count\"]],[23,2,[]]],null]],[11,\"value\",[23,2,[]]],[8],[0,\"\\n            \"],[1,[23,2,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"      \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/controls/cube.hbs"
    }
  });

  let Controls = (_class = (_temp = class Controls extends _component.default {
    constructor(...args) {
      super(...args);
      (0, _initializerDefineProperty2.default)(this, "cubesAppState", _descriptor, this);
    }

    updateCount(changeEvent) {
      let value = changeEvent.target.value;
      let newCount = parseInt(value);
      this.cubesAppState.updateCount(newCount);

      if (this.args.onUpdate) {
        this.args.onUpdate(newCount);
      }
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cubesAppState", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "updateCount", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "updateCount"), _class.prototype)), _class);
  _exports.default = Controls;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Controls);
});
;define("ember-three-components/components/ember-three-demo/demos/controls/demo-switcher", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component", "ember-three-components/components/ember-three-demo/index"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component, _index) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class='demo-selector-controls'>
    <label>
      Demo selector
        <select {{on 'change' @onSelectDemo}}>
          {{#each this.demoList as |demoListItem|}}
            <option
              selected={{eq this.selectedDemo demoListItem}}
              value={{demoListItem}}
            >
              {{demoListItem}}
            </option>
          {{/each}}
        </select>
    </label>
  </div>
  
  */
  {
    id: "XNnXqZ/4",
    block: "{\"symbols\":[\"demoListItem\",\"@onSelectDemo\"],\"statements\":[[7,\"div\",true],[10,\"class\",\"demo-selector-controls\"],[8],[0,\"\\n  \"],[7,\"label\",true],[8],[0,\"\\n    Demo selector\\n      \"],[7,\"select\",false],[3,\"on\",[\"change\",[23,2,[]]]],[8],[0,\"\\n\"],[4,\"each\",[[23,0,[\"demoList\"]]],null,{\"statements\":[[0,\"          \"],[7,\"option\",true],[11,\"selected\",[28,\"eq\",[[23,0,[\"selectedDemo\"]],[23,1,[]]],null]],[11,\"value\",[23,1,[]]],[8],[0,\"\\n            \"],[1,[23,1,[]],false],[0,\"\\n          \"],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[0,\"      \"],[9],[0,\"\\n  \"],[9],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/controls/demo-switcher.hbs"
    }
  });

  let Controls = (_class = (_temp = class Controls extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "demoList", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "selectedDemoListItem", _descriptor2, this);
      let {
        demoId
      } = this.args;

      if (Ember.isPresent(demoId)) {
        this.selectedDemoListItem = demoId;
      }
    }

    get selectedDemo() {
      let {
        demoId
      } = this.args;
      return Ember.isPresent(demoId) ? demoId : this.selectedDemoListItem;
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "demoList", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return ['cubes', 'lines', 'interactive-cubes', 'shadow-cubes', 'sprites'];
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "selectedDemoListItem", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return _index.DEFAULT_DEMO;
    }
  })), _class);
  _exports.default = Controls;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, Controls);
});
;define("ember-three-components/components/ember-three-demo/demos/cubes", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main {{will-destroy this.destroyElement}}>
    <EmberThree
      @id={{this.sceneId}}
      @rendererParams={{this.rendererParams}}
      as |s|
    >
      <EmberThree::Lights::DirectionalLight
        @parent={{s.scene}}
        @position={{this.lightPosition}}
      />
      <EmberThree::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
      />
      <EmberThree::Core::Object3d
        @parent={{s.scene}}
        @rotation={{this.containerRotation}}
        as |meshContainer|
      >
        {{#each this.cubesAppState.objectProperties as |properties|}}
          <EmberThree::Objects::Mesh
            @rotation={{properties.r}}
            @position={{properties.p}}
            @scale={{properties.s}}
            @parent={{meshContainer}}
            @material={{this.material}}
            @geometry={{this.geometry}}
          />
        {{/each}}
      </EmberThree::Core::Object3d>
    </EmberThree>
  </main>
  
  <EmberThreeDemo::Demos::Controls::Cube @onUpdate={{this.onCountUpdate}}/>
  
  */
  {
    id: "F6NruX40",
    block: "{\"symbols\":[\"s\",\"meshContainer\",\"properties\"],\"statements\":[[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"ember-three\",[],[[\"@id\",\"@rendererParams\"],[[23,0,[\"sceneId\"]],[23,0,[\"rendererParams\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"ember-three/lights/directional-light\",[],[[\"@parent\",\"@position\"],[[23,1,[\"scene\"]],[23,0,[\"lightPosition\"]]]]],[0,\"\\n    \"],[5,\"ember-three/cameras/perspective-camera\",[],[[\"@position\"],[[23,0,[\"cameraPosition\"]]]]],[0,\"\\n    \"],[5,\"ember-three/core/object3d\",[],[[\"@parent\",\"@rotation\"],[[23,1,[\"scene\"]],[23,0,[\"containerRotation\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"cubesAppState\",\"objectProperties\"]]],null,{\"statements\":[[0,\"        \"],[5,\"ember-three/objects/mesh\",[],[[\"@rotation\",\"@position\",\"@scale\",\"@parent\",\"@material\",\"@geometry\"],[[23,3,[\"r\"]],[23,3,[\"p\"]],[23,3,[\"s\"]],[23,2,[]],[23,0,[\"material\"]],[23,0,[\"geometry\"]]]]],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"]],\"parameters\":[2]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[5,\"ember-three-demo/demos/controls/cube\",[],[[\"@onUpdate\"],[[23,0,[\"onCountUpdate\"]]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/cubes.hbs"
    }
  });

  let DemoComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "cubesAppState", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "containerRotation", _descriptor3, this);
      (0, _defineProperty2.default)(this, "counter", 0);
      (0, _defineProperty2.default)(this, "cameraPosition", new _three.default.Vector3(0, 0, 18));
      (0, _defineProperty2.default)(this, "lightPosition", new _three.default.Vector3(-5, 0, 10));
      (0, _defineProperty2.default)(this, "geometry", new _three.default.BoxGeometry(2, 2, 2));
      (0, _defineProperty2.default)(this, "material", new _three.default.MeshNormalMaterial());
      (0, _defineProperty2.default)(this, "rendererParams", {
        clearColor: 0xffffff
      });
      (0, _defineProperty2.default)(this, "sceneId", 'ember-threejs-cubes-demo');
      (0, _defineProperty2.default)(this, "state", undefined);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom);
      let scene = this.sceneManager.get(this.sceneId);
      scene.addRafCallback(this.render, this);
      scene.setStats(this.stats);
    }

    render() {
      let {
        objectProperties
      } = this.cubesAppState;
      this.containerRotation.y += 0.045;
      this.containerRotation = this.containerRotation;
      let radius = 0.085;

      for (let i = 0; i < objectProperties.length; i++) {
        let property = objectProperties[i];
        property.r.x = property.r.x + 0.01;
        property.r.y = property.r.y + 0.01;
        property.r.z = property.r.z + 0.01;
        property.p.x = property.p.x + Math.sin(this.counter + property.r.x) * radius;
        property.p.y = property.p.y + Math.cos(this.counter + property.r.y) * radius;
        property.p.z = property.p.z + Math.sin(this.counter + property.r.z) * radius;
        let scalar = Math.cos(this.counter * 2);
        property.s.x = property.s.y = property.s.z = scalar; // let glimmer know a tracked object has changed (to avoid creating new objects):

        property.s = property.s;
        property.p = property.p;
        property.r = property.r;
      }

      this.counter += 0.01;
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cubesAppState", [Ember.inject.service], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "containerRotation", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Euler();
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype)), _class));
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-components/components/ember-three-demo/demos/interactive-cubes", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <main {{will-destroy this.destroyElement}}>
    <EmberThree
      @id={{this.sceneId}}
      @rendererParams={{this.rendererParams}}
      as |emberThree|
    >
      <EmberThree::Lights::DirectionalLight
        @parent={{emberThree.scene}}
        @position={{this.lightPosition}}
      />
      <EmberThree::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
        @target={{this.cameraTarget}}
      />
  
      <EmberThree::Core::Raycaster
        @parent={{emberThree.scene}}
        @onRaycast={{this.onRaycast}}
        @isRecursive={{true}}
      />
  
      <EmberThree::Core::Object3d
        @parent={{emberThree.scene}}
        @rotation={{this.containerRotation}}
        as |meshContainer|
      >
        {{#each this.cubes as |cubeProperties|}}
          <EmberThree::Objects::Mesh
            @rotation={{cubeProperties.rotation}}
            @position={{cubeProperties.position}}
            @scale={{cubeProperties.scale}}
            @parent={{meshContainer}}
            @material={{cubeProperties.material}}
            @geometry={{this.geometry}}
          />
        {{/each}}
      </EmberThree::Core::Object3d>
    </EmberThree>
  </main>
  
  
  */
  {
    id: "hcP/mkLt",
    block: "{\"symbols\":[\"emberThree\",\"meshContainer\",\"cubeProperties\"],\"statements\":[[0,\"\\n\"],[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"ember-three\",[],[[\"@id\",\"@rendererParams\"],[[23,0,[\"sceneId\"]],[23,0,[\"rendererParams\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"ember-three/lights/directional-light\",[],[[\"@parent\",\"@position\"],[[23,1,[\"scene\"]],[23,0,[\"lightPosition\"]]]]],[0,\"\\n    \"],[5,\"ember-three/cameras/perspective-camera\",[],[[\"@position\",\"@target\"],[[23,0,[\"cameraPosition\"]],[23,0,[\"cameraTarget\"]]]]],[0,\"\\n\\n    \"],[5,\"ember-three/core/raycaster\",[],[[\"@parent\",\"@onRaycast\",\"@isRecursive\"],[[23,1,[\"scene\"]],[23,0,[\"onRaycast\"]],true]]],[0,\"\\n\\n    \"],[5,\"ember-three/core/object3d\",[],[[\"@parent\",\"@rotation\"],[[23,1,[\"scene\"]],[23,0,[\"containerRotation\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"cubes\"]]],null,{\"statements\":[[0,\"        \"],[5,\"ember-three/objects/mesh\",[],[[\"@rotation\",\"@position\",\"@scale\",\"@parent\",\"@material\",\"@geometry\"],[[23,3,[\"rotation\"]],[23,3,[\"position\"]],[23,3,[\"scale\"]],[23,2,[]],[23,3,[\"material\"]],[23,0,[\"geometry\"]]]]],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"]],\"parameters\":[2]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/interactive-cubes.hbs"
    }
  });

  let InteractiveCubeDemoComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class InteractiveCubeDemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "cameraPosition", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "cameraTarget", _descriptor3, this);
      (0, _defineProperty2.default)(this, "emberScene", undefined);
      (0, _defineProperty2.default)(this, "geometry", new _three.default.BoxBufferGeometry(20, 20, 20));
      (0, _defineProperty2.default)(this, "intersected", undefined);
      (0, _defineProperty2.default)(this, "intersects", []);
      (0, _defineProperty2.default)(this, "lightPosition", new _three.default.Vector3(1, 1, 1));
      (0, _defineProperty2.default)(this, "radius", 50);
      (0, _defineProperty2.default)(this, "rendererParams", {
        clearColor: 0x222222
      });
      (0, _defineProperty2.default)(this, "sceneId", 'ember-threejs-interactive-cubes-demo');
      (0, _defineProperty2.default)(this, "theta", 0);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom);
      this.emberScene = this.sceneManager.get(this.sceneId);
      this.emberScene.addRafCallback(this.render, this);
      this.emberScene.setStats(this.stats);
    }

    get cubes() {
      let cubeProperties = [];

      for (let i = 0; i < 2000; i++) {
        let material = new _three.default.MeshLambertMaterial({
          color: Math.random() * 0xffffff
        });
        let position = new _three.default.Vector3();
        position.x = Math.random() * 800 - 400;
        position.y = Math.random() * 800 - 400;
        position.z = Math.random() * 800 - 400;
        let rotation = new _three.default.Vector3();
        rotation.x = Math.random() * 2 * Math.PI;
        rotation.y = Math.random() * 2 * Math.PI;
        rotation.z = Math.random() * 2 * Math.PI;
        let scale = new _three.default.Vector3();
        scale.x = Math.random() + 0.5;
        scale.y = Math.random() + 0.5;
        scale.z = Math.random() + 0.5;
        cubeProperties.push({
          material,
          position,
          scale,
          rotation
        });
      }

      return cubeProperties;
    }

    render() {
      this.theta += 0.05;
      this.cameraPosition.x = this.radius * Math.sin(_three.default.Math.degToRad(this.theta));
      this.cameraPosition.y = this.radius * Math.sin(_three.default.Math.degToRad(this.theta));
      this.cameraPosition.z = this.radius * Math.cos(_three.default.Math.degToRad(this.theta));
      this.cameraPosition = this.cameraPosition; // flag as dirty so glimmer can update args

      let {
        intersected,
        intersects
      } = this;

      if (intersects.length > 0) {
        if (intersected !== intersects[0].object) {
          if (intersected) {
            intersected.material.emissive.setHex(intersected.currentHex);
          }

          this.intersected = intersects[0].object;
          this.intersected.currentHex = this.intersected.material.emissive.getHex();
          this.intersected.material.emissive.setHex(0xff0000);
        }
      } else {
        if (this.intersected) {
          this.intersected.material.emissive.setHex(0x000000);
        }

        this.intersected = undefined;
      }
    }

    onRaycast(intersects) {
      this.intersects = intersects;
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cameraPosition", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3(0, 0, 6.2);
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cameraTarget", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3(0, 0, 0);
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onRaycast", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onRaycast"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype)), _class));
  _exports.default = InteractiveCubeDemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, InteractiveCubeDemoComponent);
});
;define("ember-three-components/components/ember-three-demo/demos/lines", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <main {{will-destroy this.destroyElement}}>
    <EmberThree
      @id={{this.sceneId}}
      @rendererParams={{this.rendererParams}}
      as |s|
    >
      <EmberThree::Lights::DirectionalLight
        @parent={{s.scene}}
        @position={{this.lightPosition}}
      />
      <EmberThree::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
      />
      <EmberThree::Core::Object3d
        @parent={{s.scene}}
        @rotation={{this.containerRotation}}
        as |lineContainer|
      >
        {{#each this.lineSegmentsData as |segmentData|}}
          <EmberThree::Objects::LineSegments
            @parent={{lineContainer}}
            @geometry={{segmentData.geometry}}
            @scale={{segmentData.scale}}
            @material={{this.lineMaterial}}
          />
        {{/each}}
      </EmberThree::Core::Object3d>
    </EmberThree>
  </main>
  
  */
  {
    id: "44UGPU39",
    block: "{\"symbols\":[\"s\",\"lineContainer\",\"segmentData\"],\"statements\":[[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"ember-three\",[],[[\"@id\",\"@rendererParams\"],[[23,0,[\"sceneId\"]],[23,0,[\"rendererParams\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"ember-three/lights/directional-light\",[],[[\"@parent\",\"@position\"],[[23,1,[\"scene\"]],[23,0,[\"lightPosition\"]]]]],[0,\"\\n    \"],[5,\"ember-three/cameras/perspective-camera\",[],[[\"@position\"],[[23,0,[\"cameraPosition\"]]]]],[0,\"\\n    \"],[5,\"ember-three/core/object3d\",[],[[\"@parent\",\"@rotation\"],[[23,1,[\"scene\"]],[23,0,[\"containerRotation\"]]]],{\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"lineSegmentsData\"]]],null,{\"statements\":[[0,\"        \"],[5,\"ember-three/objects/line-segments\",[],[[\"@parent\",\"@geometry\",\"@scale\",\"@material\"],[[23,2,[]],[23,3,[\"geometry\"]],[23,3,[\"scale\"]],[23,0,[\"lineMaterial\"]]]]],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"    \"]],\"parameters\":[2]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/lines.hbs"
    }
  });

  let DemoComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "containerRotation", _descriptor2, this);
      (0, _defineProperty2.default)(this, "counter", 0);
      (0, _defineProperty2.default)(this, "cameraPosition", new _three.default.Vector3(0, 0, 14.2));
      (0, _defineProperty2.default)(this, "lightPosition", new _three.default.Vector3(-5, 0, 10));
      (0, _defineProperty2.default)(this, "lineMaterial", new _three.default.LineBasicMaterial({
        color: 0xffffff
      }));
      (0, _defineProperty2.default)(this, "sceneId", 'ember-threejs-lines-demo');
      (0, _defineProperty2.default)(this, "state", undefined);
      (0, _defineProperty2.default)(this, "rendererParams", {
        clearColor: 0x000000
      });
      (0, _initializerDefineProperty2.default)(this, "_lineGeometries", _descriptor3, this);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom);
      let scene = this.sceneManager.get(this.sceneId);
      scene.addRafCallback(this.render, this);
      scene.setStats(this.stats);
      this._lineGeometries = [this.createGeometry(), this.createGeometry(), this.createGeometry(), this.createGeometry(), this.createGeometry(), this.createGeometry()];
    }

    createGeometry() {
      let geometry = new _three.default.BufferGeometry();
      let vertices = [];
      let vertex = new _three.default.Vector3();

      for (let i = 0; i < 1500; i++) {
        vertex.x = Math.random() * 2 - 1;
        vertex.y = Math.random() * 2 - 1;
        vertex.z = Math.random() * 2 - 1;
        vertex.normalize();
        vertex.multiplyScalar(10);
        vertices.push(vertex.x, vertex.y, vertex.z);
        vertex.multiplyScalar(Math.random() * 0.09 + 1);
        vertices.push(vertex.x, vertex.y, vertex.z);
      }

      geometry.setAttribute('position', new _three.default.Float32BufferAttribute(vertices, 3));
      return geometry;
    }

    render() {
      this.containerRotation.y += 0.02;
      this.containerRotation = this.containerRotation;
      this.counter += 0.05;
    }

    get lineSegmentsData() {
      let scale = 0;
      return this._lineGeometries.map(geometry => {
        scale += 0.2;
        return {
          geometry,
          scale: new _three.default.Vector3(scale, scale, scale)
        };
      });
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "containerRotation", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Euler();
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "_lineGeometries", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class));
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-components/components/ember-three-demo/demos/objects/snow", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  {{#each this.particles as |particlesData|}}
    <EmberThree::Objects::Points
      @scale={{particlesData.scale}}
      @rotation={{particlesData.rotation}}
      @parent={{@parent}}
      @material={{particlesData.material}}
      @geometry={{particlesData.geometry}}
    />
  {{/each}}
  
  */
  {
    id: "ew2Munxo",
    block: "{\"symbols\":[\"particlesData\",\"@parent\"],\"statements\":[[0,\"\\n\"],[4,\"each\",[[23,0,[\"particles\"]]],null,{\"statements\":[[0,\"  \"],[5,\"ember-three/objects/points\",[],[[\"@scale\",\"@rotation\",\"@parent\",\"@material\",\"@geometry\"],[[23,1,[\"scale\"]],[23,1,[\"rotation\"]],[23,2,[]],[23,1,[\"material\"]],[23,1,[\"geometry\"]]]]],[0,\"\\n\"]],\"parameters\":[1]},null]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/objects/snow.hbs"
    }
  });

  let DemoComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      (0, _defineProperty2.default)(this, "emberScene", undefined);
      (0, _initializerDefineProperty2.default)(this, "rotations", _descriptor2, this);
      this.emberScene = this.sceneManager.get(this.args.sceneId);
      this.emberScene.addRafCallback(this.render, this);
      this.vertices = [];
      this.materials = [];
      this.textureLoader = new _three.default.TextureLoader();
      this.sprite1 = this.textureLoader.load('images/sprites/snowflake1.png');
      this.sprite2 = this.textureLoader.load('images/sprites/snowflake2.png');
      this.sprite3 = this.textureLoader.load('images/sprites/snowflake3.png');
      this.sprite4 = this.textureLoader.load('images/sprites/snowflake4.png');
      this.sprite5 = this.textureLoader.load('images/sprites/snowflake5.png');
      this.geometry = new _three.default.BufferGeometry();

      for (let i = 0; i < 12000; i++) {
        let max = 60;
        let min = 30;
        let x = Math.random() * max - min;
        let y = Math.random() * max - min;
        let z = Math.random() * max - min;
        this.vertices.push(x, y, z);
      }

      this.geometry.setAttribute('position', new _three.default.Float32BufferAttribute(this.vertices, 3));
    }

    get particles() {
      let particlesData = [];
      let sizeScalar = 100;
      let parameters = [[[0.2, 0.2, 0.5], this.sprite2, 20 / sizeScalar], [[0.3, 0.1, 0.5], this.sprite3, 15 / sizeScalar], [[0.1, 0.05, 0.5], this.sprite1, 10 / sizeScalar], [[0.2, 0, 0.5], this.sprite5, 8 / sizeScalar], [[0.28, 0, 0.5], this.sprite4, 5 / sizeScalar]];

      for (let i = 0; i < parameters.length; i++) {
        let color = parameters[i][0];
        let sprite = parameters[i][1];
        let size = parameters[i][2];
        this.materials[i] = new _three.default.PointsMaterial({
          size: size,
          map: sprite,
          blending: _three.default.AdditiveBlending,
          depthTest: true,
          transparent: true
        });
        this.materials[i].color.setHSL(color[0], color[1], color[2]);
        this.rotations[i] = new _three.default.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6);
        particlesData.push({
          geometry: this.geometry,
          material: this.materials[i],
          rotation: this.rotations[i],
          scale: new _three.default.Vector3(1, 1, 1)
        });
      }

      return particlesData;
    }

    render() {}

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "rotations", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class));
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-components/components/ember-three-demo/demos/shadow-cubes", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <main {{will-destroy this.destroyElement}}>
    <EmberThree
      @id={{this.sceneId}}
      @rendererParams={{this.rendererParams}}
      as |emberThree|
    >
      <EmberThree::Lights::SpotLight
        @shadow={{spotLightShadow}}
        @parent={{emberThree.scene}}
        @position={{this.spotLightPosition}}
        @target={{this.spotLightTarget}}
        @distance={{this.spotLightDistance}}
        @intensity={{1.25}}
        @angle={{0.7853}}
        @penumbra={{0.4}}
        @castShadow={{true}}
        as |spotLight|
      >
        {{!--
        <EmberThree::Helpers::SpotLightHelper
          @parent={{emberThree.scene}}
          @light={{spotLight}}
        />
        --}}
      </EmberThree::Lights::SpotLight>
  
      <EmberThree::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
        @target={{this.cameraTarget}}
      />
  
      <EmberThree::Core::Object3d
        @parent={{emberThree.scene}}
        @rotation={{this.containerRotation}}
        as |meshContainer|
      >
  
        <EmberThreeDemo::Demos::Objects::Snow
          @parent={{meshContainer}}
          @sceneId={{this.sceneId}}
        />
  
        {{#each this.cubes as |cubeProperties|}}
          <EmberThree::Objects::Mesh
            @rotation={{cubeProperties.rotation}}
            @position={{cubeProperties.position}}
            @scale={{cubeProperties.scale}}
            @parent={{meshContainer}}
            @material={{cubeProperties.material}}
            @geometry={{this.boxBufferGeometry}}
            @castShadow={{true}}
            @receiveShadow={{true}}
          />
        {{/each}}
  
        <EmberThree::Objects::Mesh
          @parent={{meshContainer}}
          @material={{this.planeMaterial}}
          @geometry={{this.planeGeometry}}
          @rotation={{this.planeRotation}}
          @receiveShadow={{true}}
        />
      </EmberThree::Core::Object3d>
    </EmberThree>
  </main>
  
  
  */
  {
    id: "nfybdJly",
    block: "{\"symbols\":[\"emberThree\",\"meshContainer\",\"cubeProperties\",\"spotLight\"],\"statements\":[[0,\"\\n\"],[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"ember-three\",[],[[\"@id\",\"@rendererParams\"],[[23,0,[\"sceneId\"]],[23,0,[\"rendererParams\"]]]],{\"statements\":[[0,\"\\n    \"],[5,\"ember-three/lights/spot-light\",[],[[\"@shadow\",\"@parent\",\"@position\",\"@target\",\"@distance\",\"@intensity\",\"@angle\",\"@penumbra\",\"@castShadow\"],[[22,\"spotLightShadow\"],[23,1,[\"scene\"]],[23,0,[\"spotLightPosition\"]],[23,0,[\"spotLightTarget\"]],[23,0,[\"spotLightDistance\"]],1.25,0.7853,0.4,true]],{\"statements\":[[0,\"\\n\"],[0,\"    \"]],\"parameters\":[4]}],[0,\"\\n\\n    \"],[5,\"ember-three/cameras/perspective-camera\",[],[[\"@position\",\"@target\"],[[23,0,[\"cameraPosition\"]],[23,0,[\"cameraTarget\"]]]]],[0,\"\\n\\n    \"],[5,\"ember-three/core/object3d\",[],[[\"@parent\",\"@rotation\"],[[23,1,[\"scene\"]],[23,0,[\"containerRotation\"]]]],{\"statements\":[[0,\"\\n\\n      \"],[5,\"ember-three-demo/demos/objects/snow\",[],[[\"@parent\",\"@sceneId\"],[[23,2,[]],[23,0,[\"sceneId\"]]]]],[0,\"\\n\\n\"],[4,\"each\",[[23,0,[\"cubes\"]]],null,{\"statements\":[[0,\"        \"],[5,\"ember-three/objects/mesh\",[],[[\"@rotation\",\"@position\",\"@scale\",\"@parent\",\"@material\",\"@geometry\",\"@castShadow\",\"@receiveShadow\"],[[23,3,[\"rotation\"]],[23,3,[\"position\"]],[23,3,[\"scale\"]],[23,2,[]],[23,3,[\"material\"]],[23,0,[\"boxBufferGeometry\"]],true,true]]],[0,\"\\n\"]],\"parameters\":[3]},null],[0,\"\\n      \"],[5,\"ember-three/objects/mesh\",[],[[\"@parent\",\"@material\",\"@geometry\",\"@rotation\",\"@receiveShadow\"],[[23,2,[]],[23,0,[\"planeMaterial\"]],[23,0,[\"planeGeometry\"]],[23,0,[\"planeRotation\"]],true]]],[0,\"\\n    \"]],\"parameters\":[2]}],[0,\"\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/shadow-cubes.hbs"
    }
  });

  let InteractiveCubeDemoComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class InteractiveCubeDemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "cameraPosition", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "cameraTarget", _descriptor3, this);
      (0, _defineProperty2.default)(this, "emberScene", undefined);
      (0, _defineProperty2.default)(this, "boxBufferGeometry", new _three.default.BoxBufferGeometry(1, 1, 1));
      (0, _defineProperty2.default)(this, "spotLightPosition", new _three.default.Vector3(getRandomInt(20, 40), getRandomInt(10, 30), getRandomInt(10, 30)));
      (0, _defineProperty2.default)(this, "spotLightTarget", new _three.default.Object3D(0, 0, 0));
      (0, _defineProperty2.default)(this, "spotLightDistance", 100);
      (0, _defineProperty2.default)(this, "spotLightAngle", 0.7853);
      (0, _defineProperty2.default)(this, "spotLightShadow", {
        mapSize: {
          width: 1024,
          height: 1024
        },
        camera: {
          near: 10,
          far: 600
        }
      });
      (0, _defineProperty2.default)(this, "planeGeometry", new _three.default.PlaneBufferGeometry(1000, 1000, 40, 40));
      (0, _defineProperty2.default)(this, "planeMaterial", new _three.default.MeshPhongMaterial({
        color: 0x808080,
        dithering: true
      }));
      (0, _defineProperty2.default)(this, "planeRotation", new _three.default.Vector3(-Math.PI / 2, 0, 0));
      (0, _defineProperty2.default)(this, "radius", 50);
      (0, _defineProperty2.default)(this, "rendererParams", {
        clearColor: 0x000000,
        shadowMapType: _three.default.PCFSoftShadowMap,
        shadowMapEnabled: true
      });
      (0, _defineProperty2.default)(this, "sceneId", 'ember-threejs-shadow-cubes-demo');
      (0, _defineProperty2.default)(this, "theta", 0);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom);
      this.emberScene = this.sceneManager.get(this.sceneId);
      this.emberScene.addRafCallback(this.render, this);
      this.emberScene.setStats(this.stats);
    }

    get cubes() {
      let cubeProperties = [];
      let material = new _three.default.MeshPhongMaterial({
        color: 0x808080,
        dithering: true
      });

      for (let i = 0; i < 200; i++) {
        let rotation = new _three.default.Vector3();
        rotation.y = Math.random() * 2 * Math.PI;
        rotation.x = rotation.y = 0;
        let scale = new _three.default.Vector3();
        scale.x = getRandomInt(2, 5);
        scale.y = getRandomInt(2, 15);
        scale.z = getRandomInt(2, 5);
        let position = new _three.default.Vector3();
        position.x = Math.random() * 200 - 100;
        position.y = scale.y / 2;
        position.z = Math.random() * 200 - 100;
        cubeProperties.push({
          material,
          position,
          scale,
          rotation
        });
      }

      return cubeProperties;
    }

    render() {
      this.theta += 0.05;
      this.cameraPosition.x = this.radius * Math.sin(_three.default.Math.degToRad(this.theta));
      this.cameraPosition.y = 30;
      this.cameraPosition.z = this.radius * Math.cos(_three.default.Math.degToRad(this.theta));
      this.cameraPosition = this.cameraPosition; // flag as dirty so glimmer can update args
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cameraPosition", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3(0, 0, 6.2);
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cameraTarget", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3(0, 0, 0);
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype)), _class));
  _exports.default = InteractiveCubeDemoComponent;

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, InteractiveCubeDemoComponent);
});
;define("ember-three-components/components/ember-three-demo/demos/sprites", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "@glimmer/component", "stats.js"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _component, _stats) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  <main {{will-destroy this.destroyElement}}>
    <EmberThree
      @id={{this.sceneId}}
      @rendererParams={{this.rendererParams}}
      as |emberThree|
    >
  
      <EmberThree::Cameras::PerspectiveCamera
        @position={{this.cameraPosition}}
        @target={{this.cameraTarget}}
      />
  
      {{#each this.particles as |particlesData|}}
        <EmberThree::Objects::Points
          @rotation={{particlesData.rotation}}
          @parent={{emberThree.scene}}
          @material={{particlesData.material}}
          @geometry={{particlesData.geometry}}
        />
      {{/each}}
  
  
    </EmberThree>
  </main>
  
  
  */
  {
    id: "GJwQEZdV",
    block: "{\"symbols\":[\"emberThree\",\"particlesData\"],\"statements\":[[0,\"\\n\"],[7,\"main\",false],[3,\"will-destroy\",[[23,0,[\"destroyElement\"]]]],[8],[0,\"\\n  \"],[5,\"ember-three\",[],[[\"@id\",\"@rendererParams\"],[[23,0,[\"sceneId\"]],[23,0,[\"rendererParams\"]]]],{\"statements\":[[0,\"\\n\\n    \"],[5,\"ember-three/cameras/perspective-camera\",[],[[\"@position\",\"@target\"],[[23,0,[\"cameraPosition\"]],[23,0,[\"cameraTarget\"]]]]],[0,\"\\n\\n\"],[4,\"each\",[[23,0,[\"particles\"]]],null,{\"statements\":[[0,\"      \"],[5,\"ember-three/objects/points\",[],[[\"@rotation\",\"@parent\",\"@material\",\"@geometry\"],[[23,2,[\"rotation\"]],[23,1,[\"scene\"]],[23,2,[\"material\"]],[23,2,[\"geometry\"]]]]],[0,\"\\n\"]],\"parameters\":[2]},null],[0,\"\\n\\n  \"]],\"parameters\":[1]}],[0,\"\\n\"],[9],[0,\"\\n\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/demos/sprites.hbs"
    }
  });

  let InteractiveCubeDemoComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class InteractiveCubeDemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      (0, _defineProperty2.default)(this, "rendererParams", {
        clearColor: 0x000000,
        shadowMapType: _three.default.PCFSoftShadowMap,
        shadowMapEnabled: true
      });
      (0, _initializerDefineProperty2.default)(this, "cameraPosition", _descriptor2, this);
      (0, _defineProperty2.default)(this, "emberScene", undefined);
      (0, _initializerDefineProperty2.default)(this, "textureLoader", _descriptor3, this);
      (0, _initializerDefineProperty2.default)(this, "sprite1", _descriptor4, this);
      (0, _initializerDefineProperty2.default)(this, "sprite2", _descriptor5, this);
      (0, _initializerDefineProperty2.default)(this, "sprite3", _descriptor6, this);
      (0, _initializerDefineProperty2.default)(this, "sprite4", _descriptor7, this);
      (0, _initializerDefineProperty2.default)(this, "sprite5", _descriptor8, this);
      (0, _initializerDefineProperty2.default)(this, "vertices", _descriptor9, this);
      (0, _defineProperty2.default)(this, "materials", []);
      this.stats = new _stats.default();
      document.body.appendChild(this.stats.dom);
      this.emberScene = this.sceneManager.get(this.sceneId);
      this.emberScene.addRafCallback(this.render, this);
      this.emberScene.setStats(this.stats);
      this.emberScene.scene.fog = new _three.default.FogExp2(0x000000, 0.0008);
      this.textureLoader = new _three.default.TextureLoader();
      this.sprite1 = this.textureLoader.load('images/sprites/snowflake1.png');
      this.sprite2 = this.textureLoader.load('images/sprites/snowflake2.png');
      this.sprite3 = this.textureLoader.load('images/sprites/snowflake3.png');
      this.sprite4 = this.textureLoader.load('images/sprites/snowflake4.png');
      this.sprite5 = this.textureLoader.load('images/sprites/snowflake5.png');
      this.geometry = new _three.default.BufferGeometry();

      for (let i = 0; i < 10000; i++) {
        let x = Math.random() * 2000 - 1000;
        let y = Math.random() * 2000 - 1000;
        let z = Math.random() * 2000 - 1000;
        this.vertices.push(x, y, z);
      }

      this.geometry.setAttribute('position', new _three.default.Float32BufferAttribute(this.vertices, 3));
    }

    get particles() {
      let particlesData = [];
      let parameters = [[[1.0, 0.2, 0.5], this.sprite2, 20], [[0.95, 0.1, 0.5], this.sprite3, 15], [[0.9, 0.05, 0.5], this.sprite1, 10], [[0.85, 0, 0.5], this.sprite5, 8], [[0.8, 0, 0.5], this.sprite4, 5]];

      for (let i = 0; i < parameters.length; i++) {
        let color = parameters[i][0];
        let sprite = parameters[i][1];
        let size = parameters[i][2];
        this.materials[i] = new _three.default.PointsMaterial({
          size: size,
          map: sprite,
          blending: _three.default.AdditiveBlending,
          depthTest: false,
          transparent: true
        });
        this.materials[i].color.setHSL(color[0], color[1], color[2]);
        particlesData.push({
          geometry: this.geometry,
          material: this.materials[i],
          rotation: new _three.default.Vector3(Math.random() * 6, Math.random() * 6, Math.random() * 6)
        });
      }

      return particlesData;
    }

    render() {
      let time = Date.now() * 0.00005;
      let {
        scene
      } = this.emberScene;

      for (let i = 0; i < scene.children.length; i++) {
        let object = scene.children[i];

        if (object instanceof _three.default.Points) {
          object.rotation.y = time * (i < 4 ? i + 1 : -(i + 1));
        }
      }
    }

    destroyElement() {
      document.body.removeChild(this.stats.dom);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "cameraPosition", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3(0, 0, 1000);
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "textureLoader", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor4 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sprite1", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor5 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sprite2", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor6 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sprite3", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor7 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sprite4", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor8 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sprite5", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), _descriptor9 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "vertices", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "destroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "destroyElement"), _class.prototype)), _class));
  _exports.default = InteractiveCubeDemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, InteractiveCubeDemoComponent);
});
;define("ember-three-components/components/ember-three-demo/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "@glimmer/component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _component) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = _exports.DEFAULT_DEMO = void 0;

  var _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    
  {{component (concat 'ember-three-demo/demos/' this.selectedDemo)}}
  <EmberThreeDemo::Demos::Controls::DemoSwitcher @demoId={{@demoId}} @onSelectDemo={{this.onSelectDemo}} />
  
  */
  {
    id: "a4aUFvfz",
    block: "{\"symbols\":[\"@demoId\"],\"statements\":[[0,\"\\n\"],[1,[28,\"component\",[[28,\"concat\",[\"ember-three-demo/demos/\",[23,0,[\"selectedDemo\"]]],null]],null],false],[0,\"\\n\"],[5,\"ember-three-demo/demos/controls/demo-switcher\",[],[[\"@demoId\",\"@onSelectDemo\"],[[23,1,[]],[23,0,[\"onSelectDemo\"]]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three-demo/index.hbs"
    }
  });

  const DEFAULT_DEMO = 'shadow-cubes';
  _exports.DEFAULT_DEMO = DEFAULT_DEMO;
  let DemoComponent = (_class = (_temp = class DemoComponent extends _component.default {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "selectedDemo", _descriptor, this);
      let {
        demoId
      } = this.args;

      if (Ember.isPresent(demoId)) {
        this.selectedDemo = demoId;
      }
    }

    onSelectDemo(event) {
      let {
        value
      } = event.target;
      this.selectedDemo = value;
      this.args.onSelectDemo(value);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "selectedDemo", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return DEFAULT_DEMO;
    }
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onSelectDemo", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onSelectDemo"), _class.prototype)), _class);
  _exports.default = DemoComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, DemoComponent);
});
;define("ember-three-components/components/ember-three/cameras/perspective-camera", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three", "ember-three-components/components/ember-three/utils/object-proxy"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield this.object3D}}
  
  */
  {
    id: "4V/oZ+p4",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[23,0,[\"object3D\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three/cameras/perspective-camera.hbs"
    }
  });

  const defaults = {
    fov: 75,
    near: 0.1,
    far: 1000
  };
  let ScenePerspectiveCameraComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class ScenePerspectiveCameraComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      let options = { ...defaults,
        ...args
      };
      let {
        fov,
        aspectRatio,
        near,
        far
      } = options;
      let scene = this.sceneManager.getDefaultScene();
      this.object3D = new _three.default.PerspectiveCamera(fov, aspectRatio, near, far);
      scene.setCamera(this.object3D);
      this.init();
    }

    didReceiveArgs() {
      super.didReceiveArgs();
      let {
        target
      } = this.args;

      if (this._object3D && target) {
        this._object3D.lookAt(target);
      }
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = ScenePerspectiveCameraComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, ScenePerspectiveCameraComponent);
});
;define("ember-three-components/components/ember-three/core/object3d", ["exports", "three", "ember-three-components/components/ember-three/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield this.object3D}}
  
  */
  {
    id: "SNHacx/z",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[23,0,[\"object3D\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three/core/object3d.hbs"
    }
  });

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      this.object3D = new _three.default.Object3D();
      this.init();
    }

  }

  _exports.default = SceneMeshComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneMeshComponent);
});
;define("ember-three-components/components/ember-three/core/raycaster", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-lifecycle-component", "three"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _emberLifecycleComponent, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield this.raycaster}}
  
  */
  {
    id: "9YFd4Yau",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[23,0,[\"raycaster\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three/core/raycaster.hbs"
    }
  });

  let RaycasterComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class RaycasterComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      (0, _defineProperty2.default)(this, "camera", undefined);
      (0, _defineProperty2.default)(this, "scene", undefined);
      (0, _defineProperty2.default)(this, "onRaycast", undefined);
      (0, _defineProperty2.default)(this, "isRecursive", false);
      this.raycaster = new _three.default.Raycaster();
      this.scene = this.sceneManager.getDefaultScene();
      this.scene.addRafCallback(this.render, this);
      this.camera = this.scene.camera;
      this.didReceiveArgs();
    }

    didReceiveArgs() {
      let {
        camera,
        parent,
        onRaycast,
        isRecursive
      } = this.args;

      if (camera) {
        this.camera = camera;
      } else {
        this.camera = this.scene.camera;
      }

      if (parent) {
        this.parent = parent;
      }

      if (onRaycast) {
        this.onRaycast = onRaycast;
      }

      if (Ember.isPresent(isRecursive)) {
        this.isRecursive = isRecursive;
      }
    }

    render() {
      if (this.camera && this.parent && this.onRaycast) {
        this.camera.updateMatrixWorld();
        this.raycaster.setFromCamera(this.scene.mouse, this.camera);
        let intersects = this.raycaster.intersectObjects(this.parent.children, this.isRecursive);
        this.onRaycast(intersects);
      }
    }

    willDestroy() {
      this.camera = undefined;
      this.scene = undefined;
      this.onRaycast = undefined;
      this.isRecursive = undefined;
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  })), _class));
  _exports.default = RaycasterComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, RaycasterComponent);
});
;define("ember-three-components/components/ember-three/helpers/spot-light-helper", ["exports", "ember-three-components/components/ember-three/utils/object-proxy", "three"], function (_exports, _objectProxy, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SpotLightComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        light
      } = this.args;
      console.log('c - light', light);

      if (light) {
        this.object3D = new _three.default.SpotLightHelper(light);
      }

      this.init();
    }

    didReceiveArgs() {
      let {
        light,
        parent
      } = this.args;

      if (light && !this.object3D) {
        this.object3D = new _three.default.SpotLightHelper(light);
      }

      if (this._object3D && light) {
        this._object3D.light = light;
      }

      if (parent !== this._parent) {
        this.remove(this._parent, this._object3D);
        this.add(parent, this._object3D);
        this._parent = parent;
      }
    }

  }

  _exports.default = SpotLightComponent;
});
;define("ember-three-components/components/ember-three/index", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "ember-lifecycle-component"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _emberLifecycleComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _dec, _class, _descriptor, _temp;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    <div class="ember-three-container"
    {{did-insert this.onInsertElement}}
    {{will-destroy this.onDestroyElement}}
  >
  </div>
  
  {{yield this.eThreeJsScene}}
  
  */
  {
    id: "1XK7/SQG",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[7,\"div\",false],[12,\"class\",\"ember-three-container\"],[3,\"did-insert\",[[23,0,[\"onInsertElement\"]]]],[3,\"will-destroy\",[[23,0,[\"onDestroyElement\"]]]],[8],[0,\"\\n\"],[9],[0,\"\\n\\n\"],[14,1,[[23,0,[\"eThreeJsScene\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three/index.hbs"
    }
  });

  let SceneComponent = (_dec = Ember.inject.service('ember-three/scene-manager'), (_class = (_temp = class SceneComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      (0, _defineProperty2.default)(this, "element", undefined);
      (0, _defineProperty2.default)(this, "eThreeJsScene", undefined);
      (0, _initializerDefineProperty2.default)(this, "sceneManager", _descriptor, this);
      let {
        id,
        rendererParams
      } = this.args;
      this.eThreeJsScene = this.sceneManager.get(id, {
        rendererParams
      });
    }

    onInsertElement(element) {
      this.element = element;
      this.eThreeJsScene.onInsertElement(this.element);
      this.eThreeJsScene.start();
    }

    onDestroyElement() {
      this.sceneManager.dispose(this.args.id);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "sceneManager", [_dec], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: null
  }), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onInsertElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onInsertElement"), _class.prototype), (0, _applyDecoratedDescriptor2.default)(_class.prototype, "onDestroyElement", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onDestroyElement"), _class.prototype)), _class));
  _exports.default = SceneComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SceneComponent);
});
;define("ember-three-components/components/ember-three/lights/directional-light", ["exports", "ember-three-components/components/ember-three/utils/object-proxy", "three"], function (_exports, _objectProxy, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneDirectionalLightComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        color,
        intensity
      } = args;
      this.object3D = new _three.default.DirectionalLight(color || 0xffffff, intensity || 0.75);
      this.init();
    }

    didReceiveArgs() {
      let {
        position,
        parent,
        color,
        intensity
      } = this.args;

      if (!this._object3D) {
        return;
      }

      if (position) {
        this._object3D.position.set(position.x, position.y, position.z).normalize();
      }

      if (Ember.isPresent(color)) {
        this._object3D.color.setHex(color);
      }

      if (intensity) {
        this._object3D.intensity = intensity;
      }

      if (parent !== this._parent) {
        this.remove(this._parent, this._object3D);
        this.add(parent, this._object3D);
        this._parent = parent;
      }
    }

  }

  _exports.default = SceneDirectionalLightComponent;
});
;define("ember-three-components/components/ember-three/lights/spot-light", ["exports", "ember-three-components/components/ember-three/utils/object-proxy", "three"], function (_exports, _objectProxy, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  const __COLOCATED_TEMPLATE__ = Ember.HTMLBars.template(
  /*
    {{yield this.object3D}}
  
  */
  {
    id: "MnMVYl7J",
    block: "{\"symbols\":[\"&default\"],\"statements\":[[14,1,[[23,0,[\"object3D\"]]]],[0,\"\\n\"]],\"hasEval\":false}",
    meta: {
      moduleName: "ember-three-components/components/ember-three/lights/spot-light.hbs"
    }
  });

  class SpotLightComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        color,
        intensity
      } = args;
      this.object3D = new _three.default.SpotLight(color || 0xffffff, intensity || 1);
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
        penumbra
      } = this.args;

      if (!this.object3D) {
        return;
      }

      if (position) {
        this._object3D.position.set(position.x, position.y, position.z);
      }

      if (Ember.isPresent(color)) {
        this._object3D.color.setHex(color);
      }

      if (Ember.isPresent(angle)) {
        this._object3D.angle = angle;
      }

      if (Ember.isPresent(penumbra)) {
        this._object3D.penumbra = penumbra;
      }

      if (Ember.isPresent(distance)) {
        this._object3D.distance = distance;
      }

      if (Ember.isPresent(intensity)) {
        this._object3D.intensity = intensity;
      }

      if (Ember.isPresent(castShadow)) {
        this._object3D.castShadow = castShadow;
      }

      if (target) {
        this._object3D.target = target;
      }

      if (shadow) {
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

  _exports.default = SpotLightComponent;

  Ember._setComponentTemplate(__COLOCATED_TEMPLATE__, SpotLightComponent);
});
;define("ember-three-components/components/ember-three/objects/line-segments", ["exports", "three", "ember-three-components/components/ember-three/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        geometry,
        material
      } = this.args;
      this.object3D = new _three.default.LineSegments(geometry, material);
      this.init();
    }

  }

  _exports.default = SceneMeshComponent;
});
;define("ember-three-components/components/ember-three/objects/mesh", ["exports", "three", "ember-three-components/components/ember-three/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        geometry,
        material
      } = this.args;
      this.object3D = new _three.default.Mesh(geometry, material);
      this.init();
    }

    didReceiveArgs() {
      super.didReceiveArgs();

      if (!this.object3D) {
        return;
      }

      let {
        receiveShadow,
        castShadow
      } = this.args;

      if (receiveShadow) {
        this.object3D.receiveShadow = receiveShadow;
      }

      if (castShadow) {
        this.object3D.castShadow = castShadow;
      }
    }

  }

  _exports.default = SceneMeshComponent;
});
;define("ember-three-components/components/ember-three/objects/points", ["exports", "three", "ember-three-components/components/ember-three/utils/object-proxy"], function (_exports, _three, _objectProxy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class SceneMeshComponent extends _objectProxy.default {
    constructor(owner, args) {
      super(owner, args);
      let {
        geometry,
        material
      } = this.args;
      this.object3D = new _three.default.Points(geometry, material);
      this.init();
    } //
    // didReceiveArgs() {
    //   super.didReceiveArgs();
    //   if (!this.object3D) {
    //     return;
    //   }
    //
    //   let { receiveShadow, castShadow } = this.args;
    //
    //   if (receiveShadow) {
    //     this.object3D.receiveShadow = receiveShadow;
    //   }
    //
    //   if (castShadow) {
    //     this.object3D.castShadow = castShadow;
    //   }
    // }


  }

  _exports.default = SceneMeshComponent;
});
;define("ember-three-components/components/ember-three/utils/object-proxy", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-lifecycle-component"], function (_exports, _defineProperty2, _emberLifecycleComponent) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EmberObject3DComponent extends _emberLifecycleComponent.LifeCycleComponent {
    constructor(owner, args) {
      super(owner, args);
      (0, _defineProperty2.default)(this, "_parent", undefined);
      (0, _defineProperty2.default)(this, "_object3D", undefined);
    }

    init() {
      this.didReceiveArgs();
    }

    didReceiveArgs() {
      let {
        rotation,
        position,
        parent,
        scale
      } = this.args;

      if (!this._object3D) {
        return;
      }

      if (rotation) {
        this._object3D.rotation.set(rotation.x, rotation.y, rotation.z);
      }

      if (position) {
        this._object3D.position.set(position.x, position.y, position.z);
      }

      if (scale) {
        this._object3D.scale.set(scale.x, scale.y, scale.z);
      }

      if (parent !== this._parent) {
        this.remove(this._parent, this._object3D);
        this.add(parent, this._object3D);
        this._parent = parent;
      }
    }

    add(parent, object3D) {
      if (parent && object3D) {
        parent.add(object3D);
      }
    }

    remove(parent, object3D) {
      if (parent && object3D) {
        parent.remove(object3D);
      }
    }

    get object3D() {
      return this._object3D;
    }

    set object3D(object3D) {
      this._object3D = object3D;
    }

    willDestroy() {
      if (this._parent) {
        this.remove(this._parent, this.object3D);
      }
    }

    applySettingsToObject(object, settings) {
      if (!settings) {
        return;
      }

      let keys = Object.keys(settings);
      let {
        length
      } = keys;

      for (let c = 0; c < length; c++) {
        let key = keys[c];
        let value = settings[key];
        let type = typeof value;

        if (type !== 'object') {
          object[key] = value;
        }
      }
    }

  }

  _exports.default = EmberObject3DComponent;
});
;define("ember-three-components/helpers/app-version", ["exports", "ember-three-components/config/environment", "ember-cli-app-version/utils/regexp"], function (_exports, _environment, _regexp) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.appVersion = appVersion;
  _exports.default = void 0;

  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version; // e.g. 1.0.0-alpha.1+4jds75hf
    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility

    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;
    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      } // Fallback to just version


      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  var _default = Ember.Helper.helper(appVersion);

  _exports.default = _default;
});
;define("ember-three-components/helpers/did-insert", ["exports", "ember-render-helpers/helpers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("ember-three-components/helpers/did-update", ["exports", "ember-render-helpers/helpers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("ember-three-components/helpers/eq", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.Helper.helper(function eq([a, b]
  /*, hash*/
  ) {
    return a === b;
  });

  _exports.default = _default;
});
;define("ember-three-components/helpers/will-destroy", ["exports", "ember-render-helpers/helpers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("ember-three-components/initializers/app-version", ["exports", "ember-cli-app-version/initializer-factory", "ember-three-components/config/environment"], function (_exports, _initializerFactory, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  let name, version;

  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  var _default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
  _exports.default = _default;
});
;define("ember-three-components/initializers/container-debug-adapter", ["exports", "ember-resolver/resolvers/classic/container-debug-adapter"], function (_exports, _containerDebugAdapter) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];
      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }

  };
  _exports.default = _default;
});
;define("ember-three-components/initializers/export-application-global", ["exports", "ember-three-components/config/environment"], function (_exports, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.initialize = initialize;
  _exports.default = void 0;

  function initialize() {
    var application = arguments[1] || arguments[0];

    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;

      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;
        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);

            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  var _default = {
    name: 'export-application-global',
    initialize: initialize
  };
  _exports.default = _default;
});
;define("ember-three-components/initializers/tracked-built-ins-config", ["exports", "tracked-built-ins", "ember-three-components/config/environment"], function (_exports, _trackedBuiltIns, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  (0, _trackedBuiltIns.setTrackedBuiltInsConfig)(_environment.default.trackedBuiltIns);
  var _default = {
    // Do nothing
    initialize() {}

  };
  _exports.default = _default;
});
;define("ember-three-components/modifiers/did-insert", ["exports", "@ember/render-modifiers/modifiers/did-insert"], function (_exports, _didInsert) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didInsert.default;
    }
  });
});
;define("ember-three-components/modifiers/did-update", ["exports", "@ember/render-modifiers/modifiers/did-update"], function (_exports, _didUpdate) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _didUpdate.default;
    }
  });
});
;define("ember-three-components/modifiers/will-destroy", ["exports", "@ember/render-modifiers/modifiers/will-destroy"], function (_exports, _willDestroy) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "default", {
    enumerable: true,
    get: function () {
      return _willDestroy.default;
    }
  });
});
;define("ember-three-components/resolver", ["exports", "ember-resolver"], function (_exports, _emberResolver) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  var _default = _emberResolver.default;
  _exports.default = _default;
});
;define("ember-three-components/router", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-three-components/config/environment"], function (_exports, _defineProperty2, _environment) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class Router extends Ember.Router {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "location", _environment.default.locationType);
      (0, _defineProperty2.default)(this, "rootURL", _environment.default.rootURL);
    }

  }

  _exports.default = Router;
  Router.map(function () {});
});
;define("ember-three-components/routes/index", ["exports", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor"], function (_exports, _defineProperty2, _applyDecoratedDescriptor2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _temp;

  let IndexRoute = (_class = (_temp = class IndexRoute extends Ember.Route {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "queryParams", {
        id: {
          refreshModel: true
        }
      });
    }

    model({
      id
    }) {
      return {
        id,
        onSelectDemo: this.onSelectDemo
      };
    }

    onSelectDemo(id) {
      this.transitionTo({
        queryParams: {
          id
        }
      });
    }

  }, _temp), ((0, _applyDecoratedDescriptor2.default)(_class.prototype, "onSelectDemo", [Ember._action], Object.getOwnPropertyDescriptor(_class.prototype, "onSelectDemo"), _class.prototype)), _class);
  _exports.default = IndexRoute;
});
;define("ember-three-components/services/cubes-app-state", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "qs", "ember-three-components/utils/utils"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _qs, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _class, _descriptor, _descriptor2, _temp;

  let AppStateService = (_class = (_temp = class AppStateService extends Ember.Service {
    constructor() {
      super(...arguments);
      (0, _initializerDefineProperty2.default)(this, "count", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "objectProperties", _descriptor2, this);
      let query = window.location.href.split('?')[1];

      let parsed = _qs.default.parse(query);

      if (parsed.amount) {
        let parsedInt = parseInt(parsed.amount, 10);

        if (parsedInt) {
          this.count = parsedInt;
        }
      }

      this.updateProperties();
    }

    updateCount(newCount) {
      this.count = newCount;
      this.updateProperties();
    }

    updateProperties() {
      this.objectProperties = (0, _utils.newProperties)(this.count);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "count", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return 100;
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "objectProperties", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return [];
    }
  })), _class);
  _exports.default = AppStateService;
});
;define("ember-three-components/services/ember-three/-lib/ember-three-scene", ["exports", "@babel/runtime/helpers/esm/defineProperty", "ember-three-components/services/ember-three/-lib/request-animation-frame", "three"], function (_exports, _defineProperty2, _requestAnimationFrame, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  const DEFAULT_RENDERER_PARAMS = {
    alpha: false,
    antialias: true,
    clearColor: 0xffffff,
    shadowMapEnabled: false
  };

  class EmberThreeScene {
    constructor({
      rendererParams = {}
    } = {}) {
      (0, _defineProperty2.default)(this, "camera", undefined);
      (0, _defineProperty2.default)(this, "frameAcc", 0);
      (0, _defineProperty2.default)(this, "frameTime", 16);
      (0, _defineProperty2.default)(this, "raf", undefined);
      (0, _defineProperty2.default)(this, "renderer", undefined);
      (0, _defineProperty2.default)(this, "scene", undefined);
      (0, _defineProperty2.default)(this, "stats", undefined);
      (0, _defineProperty2.default)(this, "parentElement", undefined);
      (0, _defineProperty2.default)(this, "mouse", new _three.default.Vector2());
      (0, _defineProperty2.default)(this, "resizeEventDelegate", undefined);
      (0, _defineProperty2.default)(this, "mouseMoveDelegate", undefined);
      this.scene = new _three.default.Scene();
      this.updateRenderer({
        rendererParams
      });

      this.resizeEventDelegate = () => this.resize();

      this.mouseMoveDelegate = e => this.onMouseMove(e);

      this.raf = new _requestAnimationFrame.RequestAnimationFrame(this.render, this);
    }

    updateRenderer({
      rendererParams
    }) {
      if (this.renderer) {
        this.renderer.dispose();
      }

      let rendererProps = { ...DEFAULT_RENDERER_PARAMS,
        ...rendererParams
      };
      this.renderer = new _three.default.WebGLRenderer(rendererProps);
      this.renderer.setClearColor(rendererParams.clearColor);
      this.renderer.shadowMap.enabled = rendererParams.shadowMapEnabled;

      if (rendererParams.shadowMapType) {
        this.renderer.shadowMap.type = rendererParams.shadowMapType;
      }
    }

    start() {
      this.raf.start();
    }

    stop() {
      this.raf.stop();
    }

    addRafCallback(callbackFunction, context) {
      this.raf.addCallback(callbackFunction, context);
    }

    setCamera(camera) {
      this.camera = camera;
      this.resize();
    }

    setStats(stats) {
      this.stats = stats;
    }

    render(dt) {
      if (this.stats) {
        this.stats.begin();
      }

      this.frameAcc += dt;

      if (this.frameAcc > this.frameTime && this.camera) {
        this.frameAcc = 0;
        this.renderer.render(this.scene, this.camera);
      }

      if (this.stats) {
        this.stats.end();
      }
    }

    dispose() {
      window.removeEventListener('resize', this.resizeEventDelegate);
      this.parentElement.removeEventListener('mousemove', this.mouseMoveDelegate, false);
      this.parentElement.removeChild(this.domElement);
      this.stop();
      this.raf.dispose();
      this.scene.dispose();
      this.renderer.dispose();
      this.preRenderCallback = undefined;
    }

    resize() {
      if (!this.parentElement) {
        return;
      }

      this.renderer.setSize(this.parentWidth, this.parentHeight);

      if (this.camera) {
        this.camera.aspect = this.parentWidth / this.parentHeight;
        this.camera.updateProjectionMatrix();
      }
    }

    onMouseMove(event) {
      event.preventDefault();
      this.mouse.x = event.clientX / this.parentWidth * 2 - 1;
      this.mouse.y = -(event.clientY / this.parentHeight) * 2 + 1;
    }

    onInsertElement(parentElement) {
      this.parentElement = parentElement;
      this.parentElement.appendChild(this.domElement);
      this.resize();
      this.parentElement.removeEventListener('mousemove', this.mouseMoveDelegate, false);
      this.parentElement.addEventListener('mousemove', this.mouseMoveDelegate, false);
      window.removeEventListener('resize', this.resizeEventDelegate);
      window.addEventListener('resize', this.resizeEventDelegate);
    }

    get domElement() {
      return this.renderer.domElement;
    }

    get parentHeight() {
      return this.parentElement.offsetHeight;
    }

    get parentWidth() {
      return this.parentElement.offsetWidth;
    }

  }

  _exports.default = EmberThreeScene;
});
;define("ember-three-components/services/ember-three/-lib/request-animation-frame", ["exports", "@babel/runtime/helpers/esm/defineProperty"], function (_exports, _defineProperty2) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.RequestAnimationFrame = void 0;

  class RequestAnimationFrame {
    constructor(callback, callbackContext) {
      (0, _defineProperty2.default)(this, "_active", false);
      (0, _defineProperty2.default)(this, "_argsArray", []);
      (0, _defineProperty2.default)(this, "_listeners", []);
      this.addCallback(callback, callbackContext);

      this._rafUpdateFunction = () => {
        if (this._active) {
          this._tick();
        }
      };

      this._argsArray.push(this._dt);
    }

    addCallback(callbackFunction, context) {
      this._listeners.push({
        callbackFunction,
        context
      });
    }

    start() {
      if (this._active) {
        return;
      }

      this._prevTime = Date.now();
      this._active = true;
      requestAnimationFrame(this._rafUpdateFunction);
    }

    dispose() {
      this.stop();
      this._active = null;
      this._argsArray = null;
      this._listeners = null;
    }

    stop() {
      this._active = false;
    }

    get active() {
      return this._active;
    }

    _tick() {
      this._currentTime = Date.now();
      this._dt = this._currentTime - this._prevTime;
      this._argsArray[0] = this._dt;
      let {
        length
      } = this._listeners;

      for (let c = 0; c < length; c++) {
        let {
          callbackFunction,
          context
        } = this._listeners[c];
        callbackFunction.apply(context, this._argsArray);
      }

      requestAnimationFrame(this._rafUpdateFunction);
      this._prevTime = this._currentTime;
    }

  }

  _exports.RequestAnimationFrame = RequestAnimationFrame;
});
;define("ember-three-components/services/ember-three/scene-manager", ["exports", "ember-three-components/services/ember-three/-lib/ember-three-scene"], function (_exports, _emberThreeScene) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  class EmberThreeSceneManager extends Ember.Service {
    constructor() {
      super(...arguments);
    }

    getDefaultScene(id = undefined) {
      if (id === undefined) {
        let keys = Object.keys(EmberThreeSceneManager._scenes);

        if (keys.length > 1) {
          console.warn('At the moment we only support a single three js scene');
        }

        return EmberThreeSceneManager._scenes[keys[0]];
      }

      return EmberThreeSceneManager._scenes[id];
    }

    get(id, {
      rendererParams = undefined
    } = {}) {
      let scene = EmberThreeSceneManager._scenes[id];

      if (!scene) {
        EmberThreeSceneManager._scenes[id] = new _emberThreeScene.default({
          rendererParams
        });
      } else if (Ember.isPresent(rendererParams)) {
        scene.updateRenderer({
          rendererParams
        });
      }

      return EmberThreeSceneManager._scenes[id];
    }

    dispose(id) {
      let scene = EmberThreeSceneManager._scenes[id];

      if (scene) {
        scene.dispose();
        delete EmberThreeSceneManager._scenes[id];
      }
    }

  }

  _exports.default = EmberThreeSceneManager;
  EmberThreeSceneManager._scenes = {};
});
;define("ember-three-components/templates/application", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jS3+ZunH",
    "block": "{\"symbols\":[],\"statements\":[[1,[22,\"outlet\"],false],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-three-components/templates/application.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-three-components/templates/index", ["exports"], function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;

  var _default = Ember.HTMLBars.template({
    "id": "jWZuJblC",
    "block": "{\"symbols\":[],\"statements\":[[5,\"ember-three-demo\",[],[[\"@demoId\",\"@onSelectDemo\"],[[24,[\"model\",\"id\"]],[24,[\"model\",\"onSelectDemo\"]]]]],[0,\"\\n\"]],\"hasEval\":false}",
    "meta": {
      "moduleName": "ember-three-components/templates/index.hbs"
    }
  });

  _exports.default = _default;
});
;define("ember-three-components/utils/utils", ["exports", "@babel/runtime/helpers/esm/initializerDefineProperty", "@babel/runtime/helpers/esm/defineProperty", "@babel/runtime/helpers/esm/applyDecoratedDescriptor", "@babel/runtime/helpers/esm/initializerWarningHelper", "three"], function (_exports, _initializerDefineProperty2, _defineProperty2, _applyDecoratedDescriptor2, _initializerWarningHelper2, _three) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.avg = avg;
  _exports.random = random;
  _exports.newProperties = newProperties;

  var _class, _descriptor, _descriptor2, _descriptor3, _temp;

  function avg(arr) {
    return arr.reduce((total, num) => total + num, 0) / arr.length;
  }

  function random() {
    return Math.random() * 360;
  }

  let ObjectProperties = (_class = (_temp = class ObjectProperties {
    constructor() {
      (0, _initializerDefineProperty2.default)(this, "r", _descriptor, this);
      (0, _initializerDefineProperty2.default)(this, "p", _descriptor2, this);
      (0, _initializerDefineProperty2.default)(this, "s", _descriptor3, this);
    }

  }, _temp), (_descriptor = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "r", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Euler();
    }
  }), _descriptor2 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "p", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3();
    }
  }), _descriptor3 = (0, _applyDecoratedDescriptor2.default)(_class.prototype, "s", [Ember._tracked], {
    configurable: true,
    enumerable: true,
    writable: true,
    initializer: function () {
      return new _three.default.Vector3();
    }
  })), _class);

  function newProperties(num = 20) {
    return Array(num).fill().map(() => {
      let properties = new ObjectProperties();
      properties.r.x = random();
      properties.r.y = random();
      properties.r.z = random();
      let scalar = Math.random();
      properties.s.x = scalar;
      properties.s.y = scalar;
      properties.s.z = scalar;
      return properties;
    });
  }
});
;

;define('ember-three-components/config/environment', [], function() {
  var prefix = 'ember-three-components';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(decodeURIComponent(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

;
          if (!runningTests) {
            require("ember-three-components/app")["default"].create({"name":"ember-three-components","version":"0.0.0+97a504d9"});
          }
        
//# sourceMappingURL=ember-three-components.map
