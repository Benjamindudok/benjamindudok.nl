<template>
  <div id="background" ref="background" class="background">
  </div>
  <span class="background__caption">Generated universe with {{planetCount}} planets, {{largeObjectCount}} large objects, {{smallObjectCount}} small objects - <button type="button" @click="generateUniverse(sketch)">regenerate</button></span>
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
  amount: { min: number; max: number },
  angle: { min: number; max: number },
  radius: { min: number; max: number },
  size: { min: number; max: number },
  speed: { min: number; max: number },
  offset: { min: number; max: number },
  colors: { light: string[]; dark: string[]; },
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
  objects: { [objectTypes.planets]: DrawableObjectConfig, [objectTypes.largeObjects]: DrawableObjectConfig, [objectTypes.smallObjects]: DrawableObjectConfig },
  nebula: {
    height: { min: number; max: number },
    width: { min: number; max: number },
    angle: { min: number; max: number },
    colors: { light: string[]; dark: string[]; };
    resolution: { min: number; max: number },
  }
}>({
  backgroundVariations: {
    light: '#FFFFFF',
    dark: '#0B0D12'
  },
  objects: {
    [objectTypes.planets]: {
      type: objectTypes.planets,
      amount: {min: 1, max: 8},
      angle: {min: 20, max: 45},
      radius: {min: 200, max: 800},
      size: {min: 30, max: 80},
      speed: {min: 20, max: 200},
      offset: {min: 0, max: 0},
      colors: {
        light: [
          '#535353',
          '#5F5F5F',
        ],
        dark: [
          '#F20055',
          '#FB2576',
          '#8A00C9',
          '#3F0071',
          '#3F0071',
        ]
      }
      // moons...
    },
    [objectTypes.largeObjects]: {
      type: objectTypes.largeObjects,
      amount: {min: 20, max: 200},
      angle: {min: 0, max: 0},
      radius: {min: 800, max: 1000},
      size: {min: 10, max: 20},
      speed: {min: 2, max: 100},
      offset: {min: 0, max: 0},
      colors: {
        light: [
          '#3C3C3C',
          '#474747',
          '#535353',
          '#5F5F5F',
          '#6B6B6B',
          '#777777',
          '#8D8D8D',
          '#A3A3A3',
        ],
        dark: [
          '#8C99A3',
          '#BCC4C8',
          '#FDFDFD',
        ]
      }
    },
    [objectTypes.smallObjects]: {
      type: objectTypes.smallObjects,
      amount: {min: 600, max: 1000},
      angle: {min: 0, max: 0},
      radius: {min: 300, max: 1500},
      size: {min: 1, max: 5},
      speed: {min: 0.1, max: 50},
      offset: {min: 0, max: 0},
      colors: {
        light: [
          '#3C3C3C',
          '#474747',
          '#535353',
          '#5F5F5F',
          '#6B6B6B',
          '#777777',
          '#8D8D8D',
          '#A3A3A3',
        ],
        dark: [
          '#009DAE',
          '#71DFE7',
          '#C2FFF9',
          '#3D5DB7',
          '#79A4CE',
          '#B6D9E4',
          '#F2FAFA',
        ]
      }
    }
  },
  nebula: {
    height: { min: 200, max: 500},
    width: { min: 400, max: 900},
    angle: { min: -20, max: 20},
    resolution: { min: 5, max: 40},
    colors: {
      light: [
        // '#F2005515',
        // '#FB257615',
        // '#8A00C915',
        // '#3F007115',
        // '#0002A115',
        // '#3D5DB715',
        '#3C3C3C10',
        '#47474710',
        '#53535310',
        '#5F5F5F10',
        '#6B6B6B10',
        '#77777710',
        '#8D8D8D10',
        '#A3A3A310',
        '#B8B8B810',
        '#CECECE10',
        '#E4E4E410',
      ],
      dark: [
        '#F2005510',
        '#FB257610',
        '#8A00C910',
        '#3F007110',
        '#0002A110',
        '#3D5DB710',
        '#79A4CE10',
      ]
    },
  }
});
const isDarkMode = ref(body?.getAttribute('data-color-scheme') === 'dark');
const universe = reactive({x: 0, y: 0, angle: 0});
const universeObjects = ref<DrawableObjectInstance[]>([]);
const universeNebula = reactive<Nebula>({
  x1: 0,
  x2: 0,
  x3: 0,
  x4: 0,
  y1: 0,
  y2: 0,
  y3: 0,
  y4: 0,
  rotation: 0,
  points: []
});
const FPS = 60;

const colorKey = computed(() => isDarkMode.value ? 'dark' : 'light');
const backgroundColor = computed(() => {
  return isDarkMode.value ? config.backgroundVariations.dark : config.backgroundVariations.light;
});

const planetCount = computed(() => universeObjects.value.filter((o) => o.type === objectTypes.planets).length);
const smallObjectCount = computed(() => universeObjects.value.filter((o) => o.type === objectTypes.smallObjects).length);
const largeObjectCount = computed(() => universeObjects.value.filter((o) => o.type === objectTypes.largeObjects).length);

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
      ? calculateProperty(sk, data.angle.min, data.angle.max) * (Math.round(Math.random()) * 2 - 1)
      : 0;
}

function calculatePosition(sk: p5InstanceExtensions, data: DrawableObjectConfig) {
  return data.type === objectTypes.planets && shouldChangeProperty(sk, 50)
      ? calculateProperty(sk, data.offset.min, data.offset.max)
      : 0;
}

function generateUniverse(sk: p5InstanceExtensions) {
  universeObjects.value = [];

  Object.entries(config.objects).forEach(([objectType, data]) => {
    const amount = sk.random(data.amount.min, data.amount.max);
    for (let a = 0; a < amount; a += 1) {
      const angle = calculateAngle(sk, data);
      const offsetX = angle ? calculatePosition(sk, data) : 0; // only change offset is angle is changed, so we don't get colliding radius

      universeObjects.value.push({
        id: `${objectType}-${a}`,
        type: objectType as objectTypes,
        angle,
        radius: calculateProperty(sk, data.radius.min, data.radius.max),
        color: data.colors[colorKey.value][a % data.colors[colorKey.value].length],
        offsetX,
        offsetPosition: sk.TAU / amount * a,
        size: calculateProperty(sk, data.size.min, data.size.max),
        speed: calculateProperty(sk, data.speed.min, data.speed.max, false) * (Math.round(Math.random()) * 2 - 1),
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
    rotation: sk.random(-20, 20) * 180 / sk.PI,
    points: [],
  });

  let steps = sk.random(config.nebula.resolution.min, config.nebula.resolution.max);
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
      color: `${config.nebula.colors[colorKey.value][Math.floor(sk.random(0, config.nebula.colors[colorKey.value].length -1))]}`,
    });
  }
}

function drawObject(sk: p5InstanceExtensions, drawableObject: DrawableObjectInstance) {
  const t = sk.frameCount / FPS; //divide frameCount by FPS
  const a = drawableObject.offsetPosition + (t / drawableObject.speed);
  const x = drawableObject.radius * sk.cos(a);
  const y = drawableObject.radius * sk.sin(a) * sk.asin(1 / 3);

  // save drawing state,
  // so we can reset the rotation after this object
  sk.push();
  sk.rotate(drawableObject.angle * sk.PI / 180);

  switch (drawableObject.type) {
    case objectTypes.largeObjects:
      break;
    case objectTypes.planets:
      sk.noFill();
      sk.strokeWeight(1);
      sk.stroke(drawableObject.color + '99');
      sk.ellipse(0 + drawableObject.offsetX, 0, drawableObject.radius * 2, drawableObject.radius * 2 * sk.asin(1 / 3));
      break;
    case objectTypes.smallObjects:
      break;
  }

  sk.stroke(drawableObject.color);
  sk.strokeWeight(drawableObject.size);
  sk.point(x + drawableObject.offsetX, y);

  // restore drawing state
  sk.pop();
}

onMounted(() => {
  sketch = new p5((sk: (p5InstanceExtensions & { setup: () => void, draw: () => void })) => {
    sk.setup = () => {
      const {width, height} = getBackgroundSize();
      sk.createCanvas(width, height).parent(background.value!);

      generateUniverse(sk);

      sk.frameRate(FPS);
    }
    sk.draw = () => {
      sk.background(backgroundColor.value + '80');
      sk.translate(sk.width / 2 + universe.x, sk.height / 2 + universe.y);
      sk.rotate(universe.angle * sk.PI / 180);

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
    const {width, height} = getBackgroundSize();
    sketch.resizeCanvas(width, height);
  }
})

watch(isDarkMode, () => {
  generateUniverse(sketch);
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
  z-index: 0;
}

.background__caption {
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 10;
}
</style>