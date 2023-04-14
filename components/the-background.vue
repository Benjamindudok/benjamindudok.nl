<template>
  <div id="background" ref="background" class="background">
  </div>
  <span class="background__caption"><button type="button" @click="generateUniverse(sketch)">regenerate</button></span>
</template>

<script lang="ts" setup>
import p5, {p5InstanceExtensions} from 'p5';
import {onBeforeUnmount, computed} from "@vue/runtime-core";
import {observableToBeFn} from "rxjs/internal/testing/TestScheduler";

const enum objectTypes {
  planets = 'planet',
  largeObjects = 'largeObject',
  smallObjects = 'smallObject',
}
interface DrawableObjectConfig {
  type: objectTypes;
  amount: number,
  minAngle: number,
  minRadius: number,
  minSize: number,
  minSpeed: number,
  minOffset: number,
  maxAngle: number,
  maxRadius: number,
  maxSize: number,
  maxSpeed: number,
  maxOffset: number,
  colors: string[],
}
interface DrawableObjectInstance {
  id: string;
  type: objectTypes,
  angle: number;
  color: string;
  radius: number;
  offsetX: number;
  offsetPosition: number;
  size: number;
  speed: number;
}
interface Nebula {
  x1: number;
  x2: number;
  x3: number;
  x4: number;
  y1: number;
  y2: number;
  y3: number;
  y4: number;
  rotation: number;
  points: Array<{
    x: number;
    y: number;
    size: number;
    tl: number;
    tr: number;
    br: number;
    bl: number;
    color: string;
  }>
}

let sketch: p5;

const body = document.querySelector('body');
const background = ref<HTMLElement>();
const config = reactive<{
  backgroundVariations: {
    light: string,
    dark: string,
  }
  objects: { [objectTypes.planets]: DrawableObjectConfig, [objectTypes.largeObjects]: DrawableObjectConfig, [objectTypes.smallObjects]: DrawableObjectConfig }
}>({
  backgroundVariations: {
    light: '#FDFDFD',
    dark: '#292929'
  },
  objects: {
    [objectTypes.planets]: {
      type: objectTypes.planets,
      amount: 5,
      minAngle: 20,
      minRadius: 200,
      minSize: 30,
      minSpeed: 20,
      minOffset: 0,
      maxAngle: 45,
      maxRadius: 800,
      maxSize: 80,
      maxSpeed: 200,
      maxOffset: 0,
      colors: [
        '#F20055',
        '#FB2576',
        '#8A00C9',
        '#3F0071',
      ]
      // moons...
    },
    [objectTypes.largeObjects]: {
      type: objectTypes.largeObjects,
      amount: 200,
      minAngle: 0,
      minRadius: 700,
      minSize: 10,
      minSpeed: 2,
      minOffset: 0,
      maxAngle: 0,
      maxRadius: 900,
      maxSize: 20,
      maxSpeed: 100,
      maxOffset: 0,
      colors: [
        '#7A7A7A50',
        '#A3A3A350',
        '#CCCCCC50',
        '#D6D6D650',
      ]
    },
    [objectTypes.smallObjects]: {
      type: objectTypes.smallObjects,
      amount: 800,
      minAngle: 0,
      minRadius: 300,
      minSize: 1,
      minSpeed: 0.1,
      minOffset: 0,
      maxAngle: 0,
      maxRadius: 1000,
      maxSize: 5,
      maxSpeed: 50,
      maxOffset: 0,
      colors: [
        '#3D5DB7',
        '#79A4CE',
        '#B6D9E4',
        '#F2FAFA',
      ]
    }
  }
});
const isDarkMode = ref(false);
const universe = reactive({ x: 0, y: 0, angle: 0 });
const universeObjects = ref<DrawableObjectInstance[]>([]);
const universeNebula = reactive<Nebula>({ x1: 0, x2: 0, x3: 0, x4: 0, y1: 0, y2: 0, y3: 0, y4: 0, rotation: 0, points: [] });
const FPS = 60;

const backgroundColor = computed(() => {
  return isDarkMode.value ? config.backgroundVariations.dark : config.backgroundVariations.light;
})

const mutationObserver = new MutationObserver(() => {
  isDarkMode.value = body?.getAttribute('data-color-scheme') === 'dark';
});
mutationObserver.observe(document.querySelector('body')!, {
  attributeFilter: ['data-color-scheme']
});

function getBackgroundSize() {
  return {
    width: background.value?.offsetWidth ?? 0,
    height: background.value?.offsetHeight ?? 0
  }
}

function shouldChangeProperty(sk: p5InstanceExtensions, treshold: number) {
  return sk.random(0, 100) >= treshold
}

function calculateProperty(sk: p5InstanceExtensions, min: number, max: number, round = true) {
  return round
      ? Math.floor(sk.random(min, max))
      : sk.random(min, max);
}

function calculateAngle(sk: p5InstanceExtensions, data: DrawableObjectConfig) {
  return (data.type === objectTypes.planets || data.type === objectTypes.largeObjects) && shouldChangeProperty(sk, 85)
      ? calculateProperty(sk, data.minAngle, data.maxAngle) * (Math.round(Math.random()) * 2 - 1)
      : 0;
}

function calculatePosition(sk: p5InstanceExtensions, data: DrawableObjectConfig) {
  return data.type === objectTypes.planets && shouldChangeProperty(sk, 50)
      ? calculateProperty(sk, data.minOffset, data.maxOffset)
      : 0;
}

function generateUniverse(sk: p5InstanceExtensions) {
  universeObjects.value = [];

  Object.entries(config.objects).forEach(([objectType, data]) => {
    for(let a = 0; a<data.amount; a+=1){
      const angle = calculateAngle(sk, data);
      const offsetX = angle ? calculatePosition(sk, data) : 0; // only change offset is angle is changed, so we don't get colliding radius

      universeObjects.value.push({
        id: `${objectType}-${a}`,
        type: objectType as objectTypes,
        angle,
        radius: calculateProperty(sk, data.minRadius, data.maxRadius),
        color: data.colors[a % data.colors.length],
        offsetX,
        offsetPosition: sk.TAU / data.amount * a,
        size: calculateProperty(sk, data.minSize,data.maxSize),
        speed: calculateProperty(sk, data.minSpeed,data.maxSpeed, false) * (Math.round(Math.random()) * 2 - 1),
      })
    }
  })

  universe.angle = calculateProperty(sk, 0, 10, false) * (Math.round(Math.random()) * 2 - 1);
  universe.x = calculateProperty(sk, 0, 100, false) * (Math.round(Math.random()) * 2 - 1);
  universe.y = calculateProperty(sk, 0, 100, false) * (Math.round(Math.random()) * 2 - 1);

  const direction = (Math.round(Math.random()) * 2 - 1);
  Object.assign(universeNebula, {
    x1: Math.floor(sk.random(400, 900)) * direction,
    x2: Math.floor(sk.random(400, 900)) * direction,
    x3: Math.floor(sk.random(-400, -900)) * direction,
    x4: Math.floor(sk.random(-400, -900)) * direction,
    y1: Math.floor(sk.random(200, 500)),
    y2: Math.floor(sk.random(200, 500)),
    y3: Math.floor(sk.random(-200, -500)),
    y4: Math.floor(sk.random(-200, -500)),
    rotation: sk.random(-20, 20) * 180/sk.PI,
    points: [],
  });

  let steps = 10;
  for (let i = 0; i < steps; i++) {
    const size = sk.random(50, 900);
    let t = i / steps;
    universeNebula.points.push({
      x: sk.bezierPoint(universeNebula.x1, universeNebula.x2, universeNebula.x3, universeNebula.x4, t),
      y: sk.bezierPoint(universeNebula.y1, universeNebula.y2, universeNebula.y3, universeNebula.y4, t),
      size,
      tl: size / sk.random(1, 6),
      tr: size / sk.random(1, 6),
      br: size / sk.random(1, 6),
      bl: size / sk.random(1, 6),
      color: '#3F007105',
    });
  }
}
function drawObject(sk: p5InstanceExtensions, drawableObject: DrawableObjectInstance) {
  const t = sk.frameCount/FPS; //divide frameCount by FPS
  const a = drawableObject.offsetPosition + (t / drawableObject.speed);
  const x = drawableObject.radius * sk.cos(a);
  const y = drawableObject.radius * sk.sin(a) * sk.asin(1/3);

  // save drawing state,
  // so we can reset the rotation after this object
  sk.push();
  sk.rotate(drawableObject.angle * sk.PI/180);

  switch (drawableObject.type) {
    case objectTypes.largeObjects:
      break;
    case objectTypes.planets:
      sk.noFill();
      sk.strokeWeight(1);
      sk.stroke('#D6D6D650');
      sk.ellipse(0 + drawableObject.offsetX, 0, drawableObject.radius * 2, drawableObject.radius * 2  * sk.asin(1/3));
      break;
    case objectTypes.smallObjects:
      break;
  }

  sk.stroke(drawableObject.color);
  sk.strokeWeight(drawableObject.size);
  sk.point(x + drawableObject.offsetX, y );

  // restore drawing state
  sk.pop();
}

onMounted(() => {
  sketch = new p5((sk: (p5InstanceExtensions & { setup: () => void, draw: () => void })) => {
    sk.setup = () => {
      const { width, height } = getBackgroundSize();
      sk.createCanvas(width, height).parent(background.value!);

      generateUniverse(sk);

      sk.frameRate(FPS);
    }
    sk.draw = () => {
      sk.background(backgroundColor.value + '80');
      sk.translate(sk.width/2 + universe.x, sk.height/2 + universe.y);
      sk.rotate(universe.angle * sk.PI/180);

      universeNebula.points.forEach((p, i) => {
        sk.push();
        sk.noStroke();
        sk.fill(p.color);
        sk.rotate(universeNebula.rotation);
        // sk.circle(x, y, universeNebula[`r${i}`]);
        sk.square(p.x, p.y, p.size, p.tl, p.tr, p.br, p.bl);
        sk.pop();
      });

      universeObjects.value.forEach((object, index) => {
        drawObject(sk, object);
      })
    }
  });

  sketch.windowResized = async () => {
    const { width, height } = getBackgroundSize();
    sketch.resizeCanvas(width, height);
  }
})

onBeforeUnmount(() => {
  sketch.remove();
})
</script>

<style>
.background {
  background: var(--color-background-alternate);
  height: 95vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 95vw;
  z-index: 1;
}

.background__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index:10;
}
</style>