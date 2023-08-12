import {
  AnimationMixer
} from 'three';

export class TrafficPost {
  constructor(info) {
    this.scene = info.scene;
    this.loader = info.loader;

    this.scaleX = info.scaleX || 0.3;
    this.scaleY = info.scaleY || 0.3;
    this.scaleZ = info.scaleZ || 0.3;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;
    this.actions = [];

    this.moving = false;

    this.gltfLoader = info.gltfLoader;
    info.gltfLoader.load(
      `/models/${info.url}`,
      glb => {
        this.mesh = glb.scene.children[0];
        this.mesh.scale.set(this.scaleX, this.scaleY, this.scaleZ);
        this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
        this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
        this.mesh.name = info.name || '';
        this.scene.add(this.mesh);
      }
    )
  }
}