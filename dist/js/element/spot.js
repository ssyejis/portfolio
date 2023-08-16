import{CylinderGeometry,TorusGeometry,MeshBasicMaterial,Mesh,MeshPhongMaterial,PlaneGeometry,BoxGeometry}from"three";export class Spot{constructor(t){if(this.scene=t.scene,this.positionX=t.positionX||0,this.positionY=t.positionY||0,this.positionZ=t.positionZ||0,this.rotationX=t.rotationX||0,this.rotationY=t.rotationY||0,this.rotationZ=t.rotationZ||0,this.type=t.type||"circle",this.enter=!1,"circle"===this.type?this.geometry=new CylinderGeometry(t.radius,t.radius,t.height,t.segment):"rect"===this.type&&(this.geometry=new BoxGeometry(t.width,t.height,t.depth)),this.material=new MeshBasicMaterial({color:t.color,transparent:!0,opacity:.5}),this.mesh=new Mesh(this.geometry,this.material),this.mesh.receiveShadow=!0,this.mesh.position.set(this.positionX,this.positionY,this.positionZ),this.mesh.rotation.set(this.rotationX,this.rotationY,this.rotationZ),this.mesh.name=t.name||"",this.scene.add(this.mesh),t.torus){const s=new TorusGeometry(t.radius,.01,16,100),i=new MeshPhongMaterial({color:"orange",emissive:"red"});this.torusMesh=new Mesh(s,i),this.torusMeshClone=this.torusMesh.clone(),this.torusMesh.position.y=.5,this.torusMesh.rotation.x=Math.PI/2,this.torusMesh.rotation.y=Math.PI/15,this.torusMeshClone.position.y=.5,this.torusMeshClone.rotation.x=Math.PI/2,this.torusMeshClone.rotation.y=-Math.PI/15,this.mesh.add(this.torusMesh,this.torusMeshClone)}}}