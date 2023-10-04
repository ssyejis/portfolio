import*as THREE from"three";import gsap from"gsap";import{preset,element,repeatElement}from"./element/repeatElements";export default function threeCanvas(){const e=document.querySelector(".home"),t=document.querySelector(".profil"),o=document.querySelector(".skill"),s=document.querySelector(".contact"),n=document.querySelectorAll(".detail-close"),i=document.querySelector("#three-canvas"),m=new THREE.WebGLRenderer({canvas:i,antialias:!0});m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(window.devicePixelRatio>1?2:1),m.shadowMap.enabled=!0,m.shadowMap.type=THREE.PCFSoftShadowMap,preset.scene.background=new THREE.Color("#9fb9e2");const l=new THREE.Vector3(0,0,5),a=new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,100);a.position.set(0,0,15);const r=[[element.profilSpot,t],[element.skillSpot,o],[element.projectSpot,null],[element.postSpot,s],[element.trafficSpot,null]],d=new THREE.DirectionalLight(16777215,1);d.position.x=1,d.position.z=2,preset.scene.add(d);const h=new THREE.AmbientLight("white",.5);preset.scene.add(h),a.position.y=1.2*element.globe.geometry.parameters.radius;const p=new THREE.Clock;let c=1;const u=new THREE.Raycaster,f=new THREE.Vector2;let M=new THREE.Vector3,g=0,y=!1,x=!1,w=1500,b=790;function E(e){if(r[e][0].enter=!0,element.modelMesh2.moving=!1,gsap.to(a,{duration:.5,zoom:1.5}),r[e][1]&&gsap.to(r[e][1],{delay:1===e||3===e&&r[3][0].once?.3:2,duration:.4,css:{right:"10px",display:"block"}}),0===e)setTimeout((()=>{element.modelMesh2.mesh.children.forEach((e=>{e.children.forEach((e=>{e.isMesh&&(e.material.wireframe=!0,e.material.color={r:0,g:240,b:244})}))}))}),500),element.modelMesh2.mesh.lookAt(a.position.x,.3,a.position.z),gsap.to(a.position,{duration:.5,y:8}),gsap.to(element.modelMesh2.mesh.position,{delay:.5,duration:2,y:.8,x:element.profilSpot.mesh.position.x,z:element.profilSpot.mesh.position.z}),gsap.to(element.modelMesh2.mesh.rotation,{delay:.5,duration:2,y:2*Math.PI}),gsap.to(element.profilSpot.mesh.position,{delay:.5,duration:2,y:.3}),gsap.to(a.position,{duration:.5,y:3,onUpdate:()=>{a.lookAt(element.modelMesh2.mesh.position),a.position.x=element.modelMesh2.mesh.position.x}});else if(1===e)for(let e=0;e<element.skillBoxes.length;e++)2!==e?gsap.to(element.skillBoxes[e].mesh.position,{duration:.5+.2*e,y:.5,ease:"Back.easeOut"}):gsap.to(element.skillBoxes[e].mesh.position,{duration:.5+.2*e,y:1,ease:"Back.easeOut"});else if(2===e)2===c?(preset.scene.add(element.projectHome.mesh),preset.scene.add(element.directMove.mesh),preset.scene.add(element.exit.mesh),preset.scene.add(element.moveSign.mesh),element.projectList.forEach((e=>{preset.scene.add(e.mesh,e.font.mesh)})),x=!0,gsap.to(element.modelMesh2.mesh.position,{delay:.5,duration:2,y:6.5}),gsap.to(a.position,{delay:.5,duration:2,y:8}),gsap.to(element.projectSpot.mesh.position,{delay:.5,duration:2,y:5.7}),setTimeout((()=>{x=!1,c=3}),3e3)):3===c&&(x=!0,gsap.to(element.modelMesh2.mesh.position,{delay:.5,duration:4,y:.7,x:-3}),gsap.to(element.projectSpot.mesh.position,{delay:.5,duration:4,y:0,x:-3}),gsap.to(a.position,{delay:.5,duration:4,y:4.5,x:-3}),setTimeout((()=>{x=!1,c=2}),4500));else if(3===e)r[4][0].once&&(r[3][0].once=!0,gsap.to(element.post.mesh.children[3].position,{delay:.5,duration:.5,x:.9,y:.5}),gsap.to(element.post.mesh.children[3].rotation,{delay:.5,duration:.5,z:-Math.PI/3.5}),gsap.to(element.bird.mesh.position,{delay:1,duration:1,x:0}),gsap.to(element.bird.mesh.position,{delay:1.5,duration:5,x:5,y:7}),setTimeout((()=>{element.bird.mesh.visible=!0}),900));else if(4===e){preset.scene.remove(element.trafficText.mesh),r[4][0].once=!0;for(let e=0;e<element.crossWalkBoxes.length;e++)gsap.to(element.crossWalkBoxes[e].mesh.position,{delay:.5+.1*e,y:0,ease:"Back.easeOut"});gsap.to(element.postSpot.mesh.position,{delay:1,y:0,ease:"Back.easeOut"}),gsap.to(element.post.mesh.position,{delay:1,y:2,ease:"Back.easeOut"}),setTimeout((()=>{element.trafficSpot.mesh.material.color.set("#4a933e"),element.trafficLight.mesh.children[1].material.color.set("#6c6c6c"),element.trafficLight.mesh.children[2].material.color.set("#4a933e")}),500)}}function z(e){if(r[e][0].enter=!1,2!==e&&(gsap.to(a.position,{duration:.5,y:4.5}),r[e][1]&&gsap.to(r[e][1],{duration:.5,css:{right:"-100%",display:"none"}})),0===e)element.modelMesh2.mesh.position.y=.7,element.modelMesh2.mesh.children.forEach((e=>{e.children.forEach(((e,t)=>{e.isMesh&&(e.material.wireframe=!1,e.material.color=element.modelMesh2.colors[t])}))})),gsap.to(element.profilSpot.mesh.position,{duration:1,y:-1.2});else if(1===e)for(let e=0;e<element.skillBoxes.length;e++)gsap.to(element.skillBoxes[e].mesh.position,{duration:.5+.2*e,y:-.5,ease:"Back.easeOut"});else 2===e&&3===c&&gsap.to(element.projectSpot.mesh.position,{duration:1,x:60.8})}function k(e){f.x=e.clientX/i.clientWidth*2-1,f.y=-(e.clientY/i.clientHeight*2-1)}function v(e){M.x=e.point.x,M.y=.3,M.z=e.point.z,element.modelMesh2.mesh.lookAt(M.x,element.modelMesh2.mesh.position.y,M.z),element.modelMesh2.moving=!0}function S(e){const t=document.body.offsetWidth/2-w/2,o=window.screen.height/2-b/2;"function"==typeof window.open?window.open(`/portfolio/dist/project.html?num=${e.num}`,'_blank"',`width=${w},height=${b}, left=${t}, top=${o}`):window.location.href=`/portfolio/dist/project.html?num=${e.num}`}function j(){if(x)return;1===c&&(u.setFromCamera(f,a),x=!0,a.lookAt(0,-1,0),e.classList.add("display--none"),gsap.to(a.position,{duration:1,y:70,z:0}),gsap.to(a.position,{delay:1,duration:2,x:0,y:5,z:19.5}),setTimeout((()=>{preset.scene.remove(element.globe.mesh),preset.scene.remove(element.modelMesh1.mesh)}),1800),setTimeout((()=>{c=2}),2600),setTimeout((()=>{x=!1}),3e3));const t=u.intersectObjects(preset.scene.children);for(const e of t){(e.object.name.indexOf("floor")>=0||e.object.name.indexOf("spot")>=0||e.object.name.indexOf("box")>=0)&&2===c&&v(e),(e.object.name.indexOf("projectHome")>=0||e.object.name.indexOf("spot")>=0)&&3===c&&v(e);break}}n.forEach(((e,t)=>{let o;o=2===t?3:t,e.addEventListener("click",(()=>{gsap.to(r[o][1],{duration:.5,css:{right:"-100%",display:"none"}})}))})),window.addEventListener("resize",(function(){a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight),document.body.offsetWidth<1500&&(w=document.body.offsetWidth),window.screen.height<800&&(b=window.screen.height)})),i.addEventListener("mousedown",(e=>{1===c&&(k(e),j()),1!==c&&(y=!0,k(e))})),i.addEventListener("mouseup",(()=>{y=!1})),i.addEventListener("mousemove",(e=>{y&&k(e)})),i.addEventListener("click",(()=>{const e=u.intersectObjects(preset.scene.children);for(const t of e){t.object.name.indexOf("projectItem")>=0&&S(t.object);break}})),i.addEventListener("touchstart",(e=>{1===c&&(k(e.touches[0]),j()),1!==c&&(y=!0,k(e.touches[0]))})),i.addEventListener("touchend",(()=>{y=!1})),i.addEventListener("touchmove",(e=>{y&&k(e.touches[0])})),function e(){const t=p.getDelta();element.globe.mesh.rotation.z+=t/3,element.skillSpot.torusMesh.rotation.x+=t,element.skillSpot.torusMeshClone.rotation.y+=t,element.modelMesh1.mesh&&(element.modelMesh1.mesh.position.y=1.1*element.globe.geometry.parameters.radius),element.modelMesh1.mixer&&element.modelMesh1.mixer.update(t),element.modelMesh2.mixer&&element.modelMesh2.mixer.update(t),element.bird.mixer&&element.bird.mixer.update(t),element.modelMesh2.mesh&&(1===c||r[2][0].enter||a.lookAt(element.modelMesh2.mesh.position),y&&(u.setFromCamera(f,a),j()),element.modelMesh2.moving?(a.zoom=1,preset.scene.remove(element.directMove.mesh),g=Math.atan2(M.z-element.modelMesh2.mesh.position.z,M.x-element.modelMesh2.mesh.position.x),element.modelMesh2.mesh.position.x+=.05*Math.cos(g),element.modelMesh2.mesh.position.z+=.05*Math.sin(g),a.position.x=l.x+element.modelMesh2.mesh.position.x,a.position.z=l.z+element.modelMesh2.mesh.position.z,element.modelMesh2.actions[0].play(),Math.abs(M.x-element.modelMesh2.mesh.position.x)<.03&&Math.abs(M.z-element.modelMesh2.mesh.position.z)<.03&&(element.modelMesh2.moving=!1)):element.modelMesh2.actions[0].stop(),r.forEach(((e,t)=>{3!==t&&4!==t?Math.abs(e[0].mesh.position.x-element.modelMesh2.mesh.position.x)<.35&&Math.abs(e[0].mesh.position.z-element.modelMesh2.mesh.position.z)<.35&&!e[0].enter&&!element.modelMesh2.moving?E(t):Math.abs(e[0].mesh.position.x-element.modelMesh2.mesh.position.x)>=.35&&Math.abs(e[0].mesh.position.z-element.modelMesh2.mesh.position.z)>=.35&&e[0].enter&&z(t):Math.abs(e[0].mesh.position.x-element.modelMesh2.mesh.position.x)<2&&Math.abs(e[0].mesh.position.z-element.modelMesh2.mesh.position.z)<.5&&!e[0].enter&&!element.modelMesh2.moving?E(t):(Math.abs(e[0].mesh.position.x-element.modelMesh2.mesh.position.x)>=2||Math.abs(e[0].mesh.position.z-element.modelMesh2.mesh.position.z)>=.5)&&e[0].enter&&z(t)}))),m.render(preset.scene,a),a.updateProjectionMatrix(),m.setAnimationLoop(e)}(),repeatElement()}