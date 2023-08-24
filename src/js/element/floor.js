import {
  CircleGeometry,
  MeshStandardMaterial,
  TextureLoader,
  RepeatWrapping,
  Mesh
} from 'three';

export class Floor {
  constructor(info) {
    this.scene = info.scene;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.positionZ || 0;

    const textureLoader = new TextureLoader();
    const floorTexture = textureLoader.load('././images/grid.png');
    floorTexture.wrapS = RepeatWrapping;
    floorTexture.wrapT = RepeatWrapping;
    floorTexture.repeat.x = 10;
    floorTexture.repeat.y = 10;

    this.geometry = new CircleGeometry(info.radius, info.segment);
    this.material = new MeshStandardMaterial({
      map: floorTexture,
      // color: info.color,
    });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
    this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
    this.mesh.name = info.name || '';
    this.scene.add(this.mesh);
  }
}