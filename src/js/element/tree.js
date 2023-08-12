import {
  ConeGeometry,
  MeshStandardMaterial,
  Mesh,
  BoxGeometry
} from 'three';

export class Tree {
  constructor(info) {
    this.scene = info.scene;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.positionZ || 0;

    this.barGeometry = new BoxGeometry(0.5, 1.5, 0.5);
    this.barMaterial = new MeshStandardMaterial({
      color: '#472a24',
    });
    this.barMesh = new Mesh(this.barGeometry, this.barMaterial);
    this.barMesh.position.set(this.positionX, this.positionY, this.positionZ);
    this.scene.add(this.barMesh);
    this.conGeometry = new BoxGeometry(1, 1, 1);
    this.conMaterial = new MeshStandardMaterial({
      color: '#308c4f',
    });
    this.conMesh = new Mesh(this.conGeometry, this.conMaterial);
    this.conMesh.position.set(0,1,0);
    this.barMesh.add(this.conMesh);
    // this.scene.add(this.conMesh);

    // this.mesh.name = info.name || '';
  }
}