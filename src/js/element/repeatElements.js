import { Scene } from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { Cloud } from "./cloud";
import { Model } from './model';
import { Globe } from './globe';
import { Spot } from './spot';
import { Tree } from './tree';
import { Box } from './box';
import { Project } from './project';
import { Font } from './font';
import { Floor } from './floor';
import { TrafficPost } from "./trafficPost";
import { Bird } from './bird';
import { t, lang } from "../i18n";
import { ProjectHome } from './projectHome';

export const preset = {
  scene: new Scene(),
  gltfLoader: new GLTFLoader(),
  fontLoader: new FontLoader()
}

export const element = {
  globe: new Globe({
    name: 'globe',
    scene: preset.scene,
    radius: 30,
    segment: 10,
    color: 'seagreen'
  }),
  modelMesh1: new Model({
    name: 'model1',
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    scale: 1.5,
    rotationY: Math.PI/2,
    loader: './models/model.glb',
  }),
  modelMesh2: new Model({
    name: 'model2',
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    scale: 0.35,
    positionZ: 17, 
    positionY: 0.7,
    loader: './models/model.glb',
    updown: false,
  }),
  profilSpot: new Spot({
    name: 'spot',
    scene: preset.scene,
    positionX: -5,
    positionY: -1.2,
    positionZ: 15,
    radius: 0.7,
    height: 2.5,
    segment: 10,
    color: '#83a0ce',
    enter: false,
  }),
  skillSpot: new Spot({
    name: 'spot',
    scene: preset.scene,
    positionX: 3,
    positionY: 0,
    positionZ: 12,
    radius: 0.7,
    height: 0.1,
    segment: 50,
    torus: true,
    color: '#83a0ce',
    enter: false,
  }),
  projectSpot: new Spot({
    name: 'spot',
    scene: preset.scene,
    positionX: -3,
    positionY: 0,
    positionZ: 8,
    radius: 0.7,
    height: 0.1,
    segment: 50,
    color: '#83a0ce',
    enter: false,
  }),
  trafficSpot: new Spot({
    name: 'spot',
    type: 'rect',
    scene: preset.scene,
    positionX: 0,
    positionY: 0,
    positionZ: 2,
    rotationX: Math.PI/2,
    width: 4,
    height: 1,
    depth: 0.05,
    color: '#83a0ce',
    once: false,
    enter: false,
  }),
  postSpot: new Spot({
    name: 'spot',
    type: 'rect',
    scene: preset.scene,
    positionX: 0,
    positionY: -1,
    positionZ: -5,
    rotationX: Math.PI/2,
    width: 4,
    height: 1,
    depth: 0.05,
    color: '#83a0ce',
    enter: false,
    once: false,
  }),
  skillBoxes: [
    new Box({
      name: 'box',
      url: `skill1`,
      positionX: 4,
      positionY: -1.5,
      positionZ: 11,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      url: `skill2`,
      positionX: 4.5,
      positionY: -1.5,
      positionZ: 11.2,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      url: `skill3`,
      positionX: 4.3,
      positionY: -1,
      positionZ: 11,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      url: `skill4`,
      positionX: 5.1,
      positionY: -1.5,
      positionZ: 11,
      rotationZ: Math.PI/4,
      scene: preset.scene,
    })
  ],
  projectHome: new ProjectHome({
    name: 'projectHome',
    positionX: 21.5,
    positionY: 5.4,
    positionZ: 4.5,
    loader: '././models/projectHome.glb',
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    enter: false,
  }),
  projectList: [
    new Project({
      name: 'projectItem',
      num: 0,
      url: 'project0',
      scene: preset.scene,
      fontLoader: preset.fontLoader,
      projectName: `${t(lang._contry,'portfolio')}`,
      positionX: 8,
      positionY: 7.5,
      positionZ: 5,
      rotationX: -Math.PI/8,
    }),
    new Project({
      name: 'projectItem',
      num: 1,
      url: 'project1',
      scene: preset.scene,
      fontLoader: preset.fontLoader,
      projectName: `${t(lang._contry,'yeosu')}`,
      positionX: 16,
      positionY: 7.5,
      positionZ: 5,
      rotationX: -Math.PI/8,
      open: false,
    }),
    
    new Project({
      name: 'projectItem',
      num: 2,
      url: 'project2',
      scene: preset.scene,
      fontLoader: preset.fontLoader,
      projectName: `${t(lang._contry,'changwon')}`,
      positionX: 24,
      positionY: 7.5,
      positionZ: 5,
      rotationX: -Math.PI/8,
    }),
    
    new Project({
      name: 'projectItem',
      num: 3,
      url: 'project3',
      scene: preset.scene,
      fontLoader: preset.fontLoader,
      projectName: `${t(lang._contry,'singhaHome')}`,
      positionX: 32,
      positionY: 7.5,
      positionZ: 5,
      rotationX: -Math.PI/8,
    }),
    
    new Project({
      name: 'projectItem',
      num: 4,
      url: 'project4',
      scene: preset.scene,
      fontLoader: preset.fontLoader,
      projectName: `${t(lang._contry,'hanz')}`,
      positionX: 40,
      positionY: 7.5,
      positionZ: 5,
      rotationX: -Math.PI/8,
    }),
    
    // new Project({
    //   name: 'projectItem',
    //   num: 5,
    //   url: 'project5',
    //   scene: preset.scene,
    //   fontLoader: preset.fontLoader,
    //   projectName: `${t(lang._contry,'hydro')}`,
    //   positionX: 48,
    //   positionY: 7.5,
    //   positionZ: 5,
    //   rotationX: -Math.PI/8,
    // }),
    
    new Project({
      name: 'projectItem',
      num: 6,
      url: 'project6',
      scene: preset.scene,
      fontLoader: preset.fontLoader,
      projectName: `${t(lang._contry,'hwaseong')}`,
      positionX: 48,
      positionY: 7.5,
      positionZ: 5,
      rotationX: -Math.PI/8,
    }),
  ],
  trafficLight: new TrafficPost({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    url: '././models/trafficLight.glb',
    scaleX: 0.4,
    scaleY: 0.6,
    scaleZ: 0.4,
    positionX: 1.5,
    positionY: 1,
    positionZ: 1,
    rotationX: -Math.PI/8,
  }),
  post: new TrafficPost({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    url: '././models/post.glb',
    scaleX: 0.6,
    scaleY: 0.4,
    scaleZ: 0.4,
    positionX: -1,
    positionY: -3,
    positionZ: -6.2,
    rotationX: -Math.PI/10,
  }),
  crossWalkBoxes: [
    new Box({
      name: 'box',
      type: 'crossWalk',
      width: 3,
      height: 0.4,
      depth: 0.2,
      color: '#d3d3d3',
      positionX: -0.7,
      positionY: -1,
      positionZ: 0.5,
      rotationX: Math.PI/2,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      type: 'crossWalk',
      width: 3,
      height: 0.4,
      depth: 0.2,
      color: '#d3d3d3',
      positionX: 0,
      positionY: -1,
      positionZ: -0.5,
      rotationX: Math.PI/2,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      type: 'crossWalk',
      width: 3,
      height: 0.4,
      depth: 0.2,
      color: '#d3d3d3',
      positionX: 0.5,
      positionY: -1,
      positionZ: -1.5,
      rotationX: Math.PI/2,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      type: 'crossWalk',
      width: 3,
      height: 0.4,
      depth: 0.2,
      color: '#d3d3d3',
      positionX: -0.3,
      positionY: -1,
      positionZ: -2.5,
      rotationX: Math.PI/2,
      scene: preset.scene,
    }),
    new Box({
      name: 'box',
      type: 'crossWalk',
      width: 3,
      height: 0.4,
      depth: 0.2,
      color: '#d3d3d3',
      positionX: -0.1,
      positionY: -1,
      positionZ: -3.5,
      rotationX: Math.PI/2,
      scene: preset.scene,
    })
  ],
  bird: new Bird({
    name: 'bird',
    scene: preset.scene,
    positionY: 40,
    scale: 0.05,
    positionX: -1,
    positionY: 2,
    positionZ: -6.2,
    loader: '././models/bird.glb',
    gltfLoader: preset.gltfLoader,
  }),
  directMove: new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'direction')}`,
    color1: '#83a0ce',
    color2: '#5b78a8',
    size: 0.2,
    height: 0.1,
    addScene: true,
    rotationX: -Math.PI/5,
    positionX: 0,
    positionY: 0.3,
    positionZ: 18,
  }),
  exit: new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'exit')}`,
    color1: '#293d64',
    color2: '#172540',
    size: 0.6,
    height: 0.1,
    addScene: false,
    rotationX: -Math.PI/8,
    positionX: 1,
    positionY: 7.5,
    positionZ: 5,
  }),
  moveSign: new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: '>>             >>             >>             >>             >>            >>',
    color1: '#293d64',
    height: 0,
    size: 0.8,
    addScene: false,
    rotationX: -Math.PI/2,
    positionX: 47,
    positionY: 6,
    positionZ: 9.5,
  }),
  trafficText: new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'trafficText')}`,
    color1: '#293d64',
    color2: '#172540',
    size: 0.25,
    height: 0.1,
    addScene: true,
    rotationX: -Math.PI/8,
    positionX: 0,
    positionY: 0.5,
    positionZ: 3.5,
  }),
}

export function repeatElement() {
  new Cloud({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    positionX: 20,
    positionY: 39,
    positionz: 20,
    rotationX: Math.PI/7,
    scale: 1,
  })
  new Cloud({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    positionX: -10,
    positionY: 45,
    positionz: 10,
    rotationX: Math.PI/7,
    scale: 1,
  })
  new Cloud({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    positionX: -20,
    positionY: 39,
    positionz: 25,
    rotationX: Math.PI/7,
    scale: 1,
  })
  new Cloud({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    positionX: 19,
    positionY: 45,
    positionz: 20,
    rotationX: Math.PI/7,
    scale: 1,
  })
  new Cloud({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    positionX: -10,
    positionY: 35,
    positionz: 20,
    rotationX: Math.PI/7,
    scale: 1,
  })
  new Cloud({
    scene: preset.scene,
    gltfLoader: preset.gltfLoader,
    positionX: 15,
    positionY: 30,
    positionz: 20,
    rotationX: Math.PI/3,
    scale: 1,
  })

  new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'click')}`,
    color1: '#83a0ce',
    color2: '#5b78a8',
    size: 1,
    height: 1,
    addScene: true,
    positionY: 36,
  });

  new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'profil')}`,
    color1: '#83a0ce',
    color2: '#5b78a8',
    size: 0.5,
    height: 0.3,
    addScene: true,
    rotationX: -Math.PI/10,
    positionX: -5,
    positionY: 0.3,
    positionZ: 14.5,
  });

  new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'skill')}`,
    color1: '#83a0ce',
    color2: '#5b78a8',
    size: 0.5,
    height: 0.3,
    addScene: true,
    rotationX: -Math.PI/10,
    positionX: 3,
    positionY: 0.3,
    positionZ: 11,
  });

  new Font({
    scene: preset.scene,
    fontLoader: preset.fontLoader,
    fontUrl: './font/DNF Bit Bit TTF_Regular.json',
    text: `${t(lang._contry,'project')}`,
    color1: '#83a0ce',
    color2: '#5b78a8',
    size: 0.5,
    height: 0.3,
    addScene: true,
    rotationX: -Math.PI/10,
    positionX: -3,
    positionY: 0.3,
    positionZ: 7.5,
  });

  new Floor({
    name: 'floor',
    scene: preset.scene,
    radius: 20,
    segment: 100,
    color: '#7ad763',
    rotationX: -Math.PI/2,
  });
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: -10,
    positionZ: 5 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: -12,
    positionZ: 10 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: -13,
    positionZ: 0 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: -9,
    positionZ: 15 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: 12,
    positionZ: 5 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: 7,
    positionZ: 3 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: 10,
    positionZ: 9 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: 7,
    positionZ: 13 
  })
  new Tree({
    name: 'tree',
    scene: preset.scene,
    positionX: 7,
    positionZ: 3 
  })
  
}