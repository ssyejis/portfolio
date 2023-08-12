import {
  AnimationMixer
} from 'three';

export class Model {
  constructor(info) {
    this.scene = info.scene;
    this.loader = info.loader;
    this.scale = info.scale || 0.3;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;
    this.actions = [];
    this.colors = [];

    this.moving = false;

    this.gltfLoader = info.gltfLoader;
    info.gltfLoader.load(
      this.loader,
      glb => {
        glb.scene.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
            this.colors.push(child.material.color);
          }
        });
        this.mesh = glb.scene.children[0];
        this.mesh.scale.set(this.scale, this.scale, this.scale);
        this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
        this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
        this.mesh.name = info.name || '';
        this.scene.add(this.mesh);
        this.mixer = new AnimationMixer(this.mesh);
        this.actions[0] = this.mixer.clipAction(glb.animations[0]);
        this.actions[0].timeScale = 4;
        this.actions[0].play();
      }
    )
  }
}