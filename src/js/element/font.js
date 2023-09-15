import {
  MeshBasicMaterial,
  DoubleSide,
  Mesh,
  Box3
} from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

export class Font {
  constructor(info) {
    this.scene = info.scene;
    this.fontLoader = info.fontLoader

    this.positionX = info.positionX || 0;
    this.positionY = info.positionY || 0;
    this.positionZ = info.positionZ || 0;

    this.rotationX = info.rotationX || 0;
    this.rotationY = info.rotationY || 0;
    this.rotationZ = info.rotationZ || 0;

    this.addScene = info.addScene || false;

    this.fontLoader.load(
      info.fontUrl,
      (font) => {
        const geometry = new TextGeometry(info.text, {
          font: font,
          size: info.size,
          height: info.height,
          curveSegments: 20,
        });
        const material = [
          new MeshBasicMaterial({color: info.color1}),
          new MeshBasicMaterial({color: info.color2})
        ];
        this.mesh = new Mesh(geometry, material); 
        const meshBox = new Box3().setFromObject(this.mesh)
        const width = meshBox.max.x - meshBox.min.x;
        this.mesh.position.set(this.positionX - width/2, this.positionY, this.positionZ);
        this.mesh.rotation.set (this.rotationX, this.rotationY, this.rotationZ);
        this.mesh.name = info.name || '';
        if(this.addScene)this.scene.add(this.mesh);
      }
    )
  }
}