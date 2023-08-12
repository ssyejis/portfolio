import {
  CylinderGeometry,
  TorusGeometry,
  MeshBasicMaterial,
  Mesh,
  MeshPhongMaterial,
  PlaneGeometry,
  BoxGeometry
} from 'three';

export class Spot {
  constructor(info) {
    this.scene = info.scene;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;

    this.type = info.type || 'circle';

    this.enter = false;

    if (this.type === 'circle') this.geometry = new CylinderGeometry(info.radius,info.radius,info.height,info.segment);
    else if (this.type === 'rect') this.geometry = new BoxGeometry(info.width, info.height, info.depth);
    this.material = new MeshBasicMaterial({
      color: info.color ,
      transparent: true,
      opacity: 0.5
    });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
    this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
    this.mesh.name = info.name || '';
    this.scene.add(this.mesh);

    if(info.torus) {
      const torusGeometry = new TorusGeometry(info.radius, 0.01, 16, 100)
      const torusMaterial = new MeshPhongMaterial({ color: 'orange', emissive: 'red' });
      this.torusMesh = new Mesh(torusGeometry, torusMaterial);
      this.torusMeshClone = this.torusMesh.clone();
      this.torusMesh.position.y = 0.5;
      this.torusMesh.rotation.x = Math.PI/2
      this.torusMesh.rotation.y= Math.PI/15
      this.torusMeshClone.position.y = 0.5;
      this.torusMeshClone.rotation.x = Math.PI/2
      this.torusMeshClone.rotation.y= -Math.PI/15
      this.mesh.add(this.torusMesh, this.torusMeshClone);
    }
  }
}