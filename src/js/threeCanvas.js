import * as THREE from 'three';
import gsap from 'gsap';
import * as body from './bodyElement';
import { preset, element, repeatElement } from './element/repeatElements';

export default function threeCanvas() {
    const home =  document.querySelector('.home');
    const profil = document.querySelector('.profil');
    const skill = document.querySelector('.skill');
    const contact = document.querySelector('.contact');

    const closeBtn = document.querySelectorAll('.detail-close');
    // canvas
    const canvas = document.querySelector('#three-canvas');
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    preset.scene.background = new THREE.Color('#9fb9e2');
    
    const cameraPosition = new THREE.Vector3(0, 0, 5);
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(0, 0, 15);

    const spotes = [[element.profilSpot, profil], [element.skillSpot, skill], [element.projectSpot, null], [element.postSpot, contact], [element.trafficSpot, null]];
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.x = 1;
    light.position.z = 2;
    preset.scene.add(light);
    //Light
    const ambientLight = new THREE.AmbientLight('white', 0.5)
    preset.scene.add(ambientLight);
  
    camera.position.y =  element.globe.geometry.parameters.radius * 1.2;
    
    const clock = new THREE.Clock();
    let sceneType = 1;
  
    // Raycaster
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    let destinationPoint = new THREE.Vector3();
    let angle = 0;
    let isPressed = false;
    let transitionMoving = false;

    let popWidth = 1500;
    let popHeight = 790
  
    function draw() {
      const delta = clock.getDelta();
  
      element.globe.mesh.rotation.z += delta/3;
      element.skillSpot.torusMesh.rotation.x += delta;
      element.skillSpot.torusMeshClone.rotation.y += delta;
      
      if(element.modelMesh1.mesh)element.modelMesh1.mesh.position.y = element.globe.geometry.parameters.radius * 1.1
  
      if (element.modelMesh1.mixer) element.modelMesh1.mixer.update(delta);
      if (element.modelMesh2.mixer) element.modelMesh2.mixer.update(delta);
      if (element.bird.mixer) element.bird.mixer.update(delta);
      
      if (element.modelMesh2.mesh) {
        if(sceneType !== 1 && !spotes[2][0].enter) camera.lookAt(element.modelMesh2.mesh.position);
        if (isPressed) {
          raycasting();
        }
  
        if (element.modelMesh2.moving) {
          camera.zoom = 1;
          preset.scene.remove(element.directMove.mesh);
          angle = Math.atan2(
            destinationPoint.z - element.modelMesh2.mesh.position.z,
            destinationPoint.x - element.modelMesh2.mesh.position.x,
          );
          element.modelMesh2.mesh.position.x += Math.cos(angle) * 0.05;
          element.modelMesh2.mesh.position.z += Math.sin(angle) * 0.05;
  
  
          camera.position.x = cameraPosition.x + element.modelMesh2.mesh.position.x;
          camera.position.z = cameraPosition.z + element.modelMesh2.mesh.position.z;
          
          element.modelMesh2.actions[0].play();
  
          if (
            Math.abs(destinationPoint.x - element.modelMesh2.mesh.position.x) < 0.03 &&
            Math.abs(destinationPoint.z - element.modelMesh2.mesh.position.z) < 0.03
          ) {
            element.modelMesh2.moving = false;
          }
        } else element.modelMesh2.actions[0].stop();
        spotes.forEach((e,i) => {
          if (i !== 3 && i !== 4) {
            if (
              Math.abs(e[0].mesh.position.x - element.modelMesh2.mesh.position.x) < 0.35 &&
              Math.abs(e[0].mesh.position.z - element.modelMesh2.mesh.position.z) < 0.35 &&
              !e[0].enter &&
              !element.modelMesh2.moving
            ) {
              enterSpot(i);
            } else if (
              Math.abs(e[0].mesh.position.x - element.modelMesh2.mesh.position.x) >= 0.35 &&
              Math.abs(e[0].mesh.position.z - element.modelMesh2.mesh.position.z) >= 0.35 &&
              e[0].enter
            ) {
              comeOutSpot(i);
            }
          } else {
            if (
              Math.abs(e[0].mesh.position.x - element.modelMesh2.mesh.position.x) < 2 &&
              Math.abs(e[0].mesh.position.z - element.modelMesh2.mesh.position.z) < 0.5 &&
              !e[0].enter &&
              !element.modelMesh2.moving
            ) {
              enterSpot(i);
            } else if (
              (Math.abs(e[0].mesh.position.x - element.modelMesh2.mesh.position.x) >= 2 ||
              Math.abs(e[0].mesh.position.z - element.modelMesh2.mesh.position.z) >= 0.5 )&&
              e[0].enter
            ) {
              comeOutSpot(i);
            }
          }
        })
      }
      renderer.render(preset.scene, camera);
      camera.updateProjectionMatrix();
      renderer.setAnimationLoop(draw);
    }

    function enterSpot(i) {
      spotes[i][0].enter = true;
      element.modelMesh2.moving = false;
      gsap.to(
        camera,
        {
          duration: 0.5,
          zoom: 1.5,
        }
      )
      if (spotes[i][1]) {
        gsap.to(
          spotes[i][1],
          {
            delay: (i === 1 || (i === 3 && spotes[3][0].once)) ? 0.3 : 2,
            duration: 0.4,
            css: { right: '10px', display: 'block' }
          }
        )
      }
      if (i === 0) {
        setTimeout(() => {
          element.modelMesh2.mesh.children.forEach((child) => {
            child.children.forEach((item) => {
              if(item.isMesh) {
                item.material.wireframe = true;
                item.material.color = {r: 0, g: 240, b: 244}
              }
            });
          });
        }, 500);
        element.modelMesh2.mesh.lookAt(camera.position.x, 0.3, camera.position.z);
        gsap.to(
          camera.position,
          {
            duration: 0.5,
            y: 8
          }
        )
        gsap.to(
          element.modelMesh2.mesh.position,
          {
            delay: 0.5,
            duration: 2,
            y: 0.8,
            x: element.profilSpot.mesh.position.x,
            z: element.profilSpot.mesh.position.z,
          }
        )
        gsap.to(
          element.modelMesh2.mesh.rotation,
          {
            delay: 0.5,
            duration: 2,
            y: Math.PI*2
          }
        )
        gsap.to(
          element.profilSpot.mesh.position,
          {
            delay: 0.5,
            duration: 2,
            y: 0.3
          }
        )
        gsap.to(
          camera.position,
          {
            duration: 0.5,
            y: 3,
            onUpdate: () => {
              camera.lookAt(element.modelMesh2.mesh.position)
              camera.position.x = element.modelMesh2.mesh.position.x
            }
          }
        )
      } else if (i === 1) {
        for (let i = 0; i < element.skillBoxes.length; i++) {
          if (i !== 2) {
            gsap.to(
              element.skillBoxes[i].mesh.position,
              {
                duration: 0.5 + i*0.2,
                y: 0.5,
                ease: 'Back.easeOut'
              }
            )
          } else {
            gsap.to(
              element.skillBoxes[i].mesh.position,
              {
                duration: 0.5 + i*0.2,
                y: 1,
                ease: 'Back.easeOut'
              }
            )
          }
        }
      } else if (i === 2) {
        if (sceneType === 2) {
          preset.scene.add(element.projectHome.mesh);
          preset.scene.add(element.directMove.mesh);
          preset.scene.add(element.exit.mesh);
          preset.scene.add(element.moveSign.mesh);
          element.projectList.forEach((i) => { preset.scene.add(i.mesh, i.font.mesh); })
          
          transitionMoving = true;
          gsap.to(
            element.modelMesh2.mesh.position,
            {
              delay: 0.5,
              duration: 2,
              y: 6.5,
            }
          )
          gsap.to(
            camera.position,
            {
              delay: 0.5,
              duration: 2,
              y: 8,
            }
          )
          gsap.to(
            element.projectSpot.mesh.position,
            {
              delay: 0.5,
              duration: 2,
              y: 5.7,
            }
          )
          setTimeout(() => { transitionMoving = false; sceneType = 3; },3000)
        } else if (sceneType === 3) {
          
          transitionMoving = true;
          gsap.to(
            element.modelMesh2.mesh.position,
            {
              delay: 0.5,
              duration: 4,
              y: 0.7,
              x: -3
            }
          )
          gsap.to(
            element.projectSpot.mesh.position,
            {
              delay: 0.5,
              duration: 4,
              y: 0,
              x: -3,
            }
          )
          gsap.to(
            camera.position,
            {
              delay: 0.5,
              duration: 4,
              y: 4.5,
              x: -3
            }
          )
          setTimeout(() => { transitionMoving = false; sceneType = 2; },4500)
        }
      } else if (i === 3) {
        if (spotes[4][0].once) {
          spotes[3][0].once = true;
          gsap.to(
            element.post.mesh.children[3].position,
            {
              delay: 0.5,
              duration: 0.5,
              x: 0.9,
              y: 0.5,
            }
          )
          gsap.to(
            element.post.mesh.children[3].rotation,
            {
              delay: 0.5,
              duration: 0.5,
              z: -Math.PI/3.5
            }
          )
          gsap.to(
            element.bird.mesh.position,
            {
              delay: 1,
              duration: 1,
              x: 0,
            }
          )
          gsap.to(
            element.bird.mesh.position,
            {
              delay: 1.5,
              duration: 5,
              x: 5,
              y: 7,
            }
          )
          setTimeout(() => {
            element.bird.mesh.visible = true;
          },900);
        }
      } else if (i === 4) {
        preset.scene.remove(element.trafficText.mesh);
        spotes[4][0].once = true;
        for (let i = 0; i < element.crossWalkBoxes.length; i++) {
          gsap.to(
            element.crossWalkBoxes[i].mesh.position,
            {
              delay: 0.5 + i*0.1,
              y: 0,
              ease: 'Back.easeOut'
            }
          )
        }
        gsap.to(
          element.postSpot.mesh.position,
          {
            delay: 1,
            y: 0,
            ease: 'Back.easeOut'
          }
        )
        gsap.to(
          element.post.mesh.position,
          {
            delay: 1,
            y: 2,
            ease: 'Back.easeOut'
          }
        )
        setTimeout(() => {
          element.trafficSpot.mesh.material.color.set('#4a933e')
          element.trafficLight.mesh.children[1].material.color.set('#6c6c6c');
          element.trafficLight.mesh.children[2].material.color.set('#4a933e');
        },500)
      }
    }

    function comeOutSpot(i) {
      spotes[i][0].enter = false;
      if (i !== 2) {
        gsap.to(
          camera.position,
          {
            duration: 0.5,
            y: 4.5
          }
        )
        if (spotes[i][1]) {
          gsap.to(
            spotes[i][1],
            {
              duration: 0.5,
              css: { right: '-100%', display: 'none' }
            }
          )
        }
      }
      if(i === 0) {
        element.modelMesh2.mesh.position.y = 0.7;
        element.modelMesh2.mesh.children.forEach((child) => {
          child.children.forEach((item, i) => {
            if(item.isMesh) {
              item.material.wireframe = false;
              item.material.color = element.modelMesh2.colors[i]
            }
          });
        });
        gsap.to(
          element.profilSpot.mesh.position,
          {
            duration: 1,
            y: -1.2
          }
        )
      } else if (i === 1) {
        for (let i = 0; i < element.skillBoxes.length; i++) {
          gsap.to(
            element.skillBoxes[i].mesh.position,
            {
              duration: 0.5 + i*0.2,
              y: -0.5,
              ease: 'Back.easeOut'
            }
          )
        }
      } else if (i === 2) {
        if (sceneType === 3) {
          gsap.to(
            element.projectSpot.mesh.position,
            {
              duration: 1,
              x: 60.8,
            }
          )
        }
      }
    }

    closeBtn.forEach((item, i) => {
      let num;
      if (i === 2) num = 3;
      else num = i;
      item.addEventListener('click', () => {
        gsap.to(
          spotes[num][1],
          {
            duration: 0.5,
            css: { right: `${-100}%`, display: 'none' }
          }
        )
      })
    });
  
    function calculateMousePosition(e) {
      mouse.x = e.clientX / canvas.clientWidth * 2 - 1;
      mouse.y = -(e.clientY / canvas.clientHeight * 2 - 1);
    }
  
    function raycasting() {
      raycaster.setFromCamera(mouse, camera);
      checkIntersects();
    }
  
    function transitionScene() {
      transitionMoving = true;
      camera.lookAt(0, -1, 0);
      home.classList.add('display--none');
      gsap.to(
        camera.position,
        {
          duration: 1,
          y: 70,
          z: 0,
        }
      )
      gsap.to(
        camera.position,
        {
          delay: 1,
          duration: 2,
          x: 0,
          y: 5,
          z: 19.5,
        }
      )
      setTimeout(() => {
        preset.scene.remove(element.globe.mesh);
        preset.scene.remove(element.modelMesh1.mesh);
      }, 1800);
      setTimeout(() => {
        sceneType = 2;
      }, 2600);
      setTimeout(() => {
        transitionMoving = false;
      }, 3000);
    }
  
    function moveModel(item) {
      destinationPoint.x = item.point.x;
      destinationPoint.y = 0.3;
      destinationPoint.z = item.point.z;
      element.modelMesh2.mesh.lookAt(destinationPoint.x, element.modelMesh2.mesh.position.y, destinationPoint.z);
  
      element.modelMesh2.moving = true;
    }

    function openProject(item) {
      const popupX = (document.body.offsetWidth / 2) - (popWidth / 2);
      const popupY= (window.screen.height / 2) - (popHeight / 2);
      if(typeof(window.open) === 'function') window.open(`/project.html?num=${item.num}`, '_blank"', `width=${popWidth},height=${popHeight}, left=${popupX}, top=${popupY}`);
      else window.location.href = `/project.html?num=${item.num}`, '_blank"', `width=${popWidth},height=${popHeight}, left=${popupX}, top=${popupY}`;
      
    }
  
    function checkIntersects() {
      if (transitionMoving) return;
      if (sceneType === 1) {
        raycaster.setFromCamera(mouse, camera);
        transitionScene();
      }
      const intersects = raycaster.intersectObjects(preset.scene.children);
      for (const item of intersects) {
        if ((item.object.name.indexOf('floor') >= 0 || item.object.name.indexOf('spot') >= 0 || item.object.name.indexOf('box') >= 0) && sceneType === 2 ) {
          moveModel(item);
        }
        if ((item.object.name.indexOf('projectHome') >= 0 || item.object.name.indexOf('spot') >= 0) && sceneType === 3) moveModel(item);
        break;
      }
    }
  
    function setSize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);

      if(document.body.offsetWidth < 1500) popWidth = document.body.offsetWidth;
      if(window.screen.height < 800) popHeight = window.screen.height;
    }
  
    window.addEventListener('resize', setSize);
  
    // 마우스 이벤트
    canvas.addEventListener('mousedown', e => {
      if (sceneType === 1) {
        calculateMousePosition(e);
        checkIntersects();
      }
      if (sceneType !== 1) {
        isPressed = true;
        calculateMousePosition(e);
      }
    });
    canvas.addEventListener('mouseup', () => {
      isPressed = false;
    });
    canvas.addEventListener('mousemove', e => {
      if (isPressed) {
        calculateMousePosition(e);
      }
    });
    canvas.addEventListener('click', () => {
      const intersects = raycaster.intersectObjects(preset.scene.children);
      for (const item of intersects) {
        if (item.object.name.indexOf('projectItem') >= 0 ) openProject(item.object);
        break;
      }
    })
  
    // 터치 이벤트
    canvas.addEventListener('touchstart', e => {
      if (sceneType === 1) {
        calculateMousePosition(e.touches[0]);
        checkIntersects();
      }
      if (sceneType !== 1) {
        isPressed = true;
        calculateMousePosition(e.touches[0]);
      }
    });
    canvas.addEventListener('touchend', () => {
      isPressed = false;
    });
    canvas.addEventListener('touchmove', e => {
      if (isPressed) {
        calculateMousePosition(e.touches[0]);
      }
    });
    draw();
    repeatElement();
}
