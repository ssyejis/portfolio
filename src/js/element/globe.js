import {
  IcosahedronGeometry,
  MeshStandardMaterial,
  DoubleSide,
  Mesh
} from 'three';

export class Globe {
  constructor(info) {
    this.scene = info.scene;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.positionZ || 0;

    this.geometry = new IcosahedronGeometry(info.radius, info.segment);
    this.material = new MeshStandardMaterial({
      color: info.color,
      side: DoubleSide,
      flatShading: true,
    });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.name = info.name || '';
    this.scene.add(this.mesh);
  }
}