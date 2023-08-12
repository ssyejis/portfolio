import {
  MeshBasicMaterial,
  TextureLoader,
  Mesh,
  BoxGeometry,
  NearestFilter,
  LinearMipMapLinearFilter,
  sRGBEncoding
} from 'three';

export class Box {
  constructor(info) {
    // ColorManagement.enabled = true;
    // ColorManagement.legacyMode = false;
    this.scene = info.scene;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;

    this.width = info.width || 0.5;
    this.height = info.height || 0.5;
    this.depth = info.depth || 0.5;

    this.color = info.color || 'white';

    this.type = info.type || 'skillBox';

    this.geometry = new BoxGeometry(this.width, this.height, this.depth);

    if (this.type === 'skillBox') {
      const textureLoader = new TextureLoader();
      const boxTexture = textureLoader.load(`/images/${info.url}.png`);
      boxTexture.magFilter = NearestFilter;
      boxTexture.minFilter = LinearMipMapLinearFilter;
      boxTexture.encoding = sRGBEncoding;
      // boxTexture.outputColorSpace = THREE.LinearSRGBColorSpace;
  
      this.material = new MeshBasicMaterial({
        map: boxTexture,
      });
    } else if (this.type === 'crossWalk') this.material = new MeshBasicMaterial({ color: info.color });
    this.mesh = new Mesh(this.geometry, this.material);
    this.mesh.receiveShadow = true;
    this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
    this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
    this.mesh.name = info.name || '';
    this.scene.add(this.mesh);
  }
}