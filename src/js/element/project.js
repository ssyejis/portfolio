import {
  MeshBasicMaterial,
  TextureLoader,
  Mesh,
  PlaneGeometry,
  sRGBEncoding
} from 'three';
import { Font } from './font';

export class Project {
  constructor(info) {
    this.scene = info.scene;

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;

    const textureLoader = new TextureLoader();
    const texture = textureLoader.load(`././images/${info.url}.png`);
    texture.encoding =sRGBEncoding;

    this.geometry = new PlaneGeometry(6.2,4);

    this.mesh = new Mesh(this.geometry, new MeshBasicMaterial({ map: texture }))
    this.mesh.position.set(this.positionX, this.positionY, this.positionZ);
    this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
    this.mesh.name = info.name || '';
    // this.scene.add(this.mesh)

    this.font = new Font({
      scene: this.scene,
      fontLoader: info.fontLoader,
      fontUrl: './font/DNF Bit Bit TTF_Regular.json',
      text: info.projectName,
      color1: '#71443b',
      color2: '#c4796a',
      size: 0.4,
      height: 0.2,
      addScene: false,
      rotationX: -Math.PI/10,
      positionX: this.positionX,
      positionY: 5.5,
      positionZ: this.positionZ+1,
    });
  }
}