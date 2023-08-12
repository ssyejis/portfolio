import {
  MeshBasicMaterial,
  Mesh,
  BoxGeometry,
} from 'three';
import { Project } from './project';

export class ProjectHome {
  constructor(info) {
    this.scene = info.scene;
    // this.scale = info.scale || 0.3;
    this.loader = info.loader || 0.3;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;

    this.gltfLoader = info.gltfLoader;
    info.gltfLoader.load(
      this.loader,
      glb => {
        glb.scene.traverse(child => {
          if (child.isMesh) {
            child.castShadow = true;
          }
        });
        this.mesh = glb.scene.children[0];
        // this.mesh.scale.set(this.scale, this.scale, this.scale);
        this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
        this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
        this.mesh.name = info.name || '';
        // this.scene.add(this.mesh);
      }
    )
  }
}