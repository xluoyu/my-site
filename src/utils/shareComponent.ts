import type { Ref } from 'vue'

interface IComp {
  root: HTMLElement
  left: number
  top: number
  width: number
  height: number
}

const compMap = new Map()
const moveEl = document.createElement('div')
moveEl.style.position = 'fixed'
moveEl.style.transitionProperty = 'all'
moveEl.style.transitionDuration = '500ms'
const isMoving = ref(false)
let done: NodeJS.Timeout

const ShareComponent = {
  props: {
    op: {
      type: String,
      required: true,
    },
  },
  setup(props: { op: string }, { slots }: any) {
    const proxyEl = ref()
    onMounted(() => {
      useShare(props.op, proxyEl)
    })

    return () => h('div', {
      ref: proxyEl,
    }, slots)
  },
}

async function useShare(key: string, proxyEl: Ref<HTMLElement>) {
  const rect = proxyEl.value.getBoundingClientRect()
  console.log(rect)
  const saveObj: IComp = {
    root: proxyEl.value,
    left: rect.left,
    top: rect.top,
    width: rect.width,
    height: rect.height,
  }
  if (compMap.has(key)) {
    await moveComp(compMap.get(key), saveObj)
    compMap.set(key, saveObj)
  }
  else {
    compMap.set(key, saveObj)
  }
}

/**
 * 新旧dom移动
 * 1. 将新节点push到body中，并fixed定位，位置为旧节点
 * 2. 透明化新节点
 * 3. 样式名称替换
 * 4. 动画结束，新节点透明度为1，旧节点移除
 *
 * tip： 注意移动中的状态 当move节点处于移动中并再次发生改变时，强制结束动画，迅速到达目标位置，并进行最新移动动画
 * @param oldEl
 * @param newEl
 * @returns
 */
function moveComp(oldObj: IComp, newObj: IComp) {
  function init() {
    isMoving.value = true
    moveEl.innerHTML = newObj.root.outerHTML
    moveEl.style.left = `${oldObj.left}px`
    moveEl.style.top = `${oldObj.top}px`
    const moveChild = moveEl.children[0] as HTMLElement
    moveChild.style.transition = 'all 500ms'
    moveChild.style.width = `${oldObj.width}px`
    moveChild.style.height = `${oldObj.height}px`
    document.body.appendChild(moveEl)
    newObj.root.style.opacity = '0'
  }

  function finish() {
    const moveChild = moveEl.children[0] as HTMLElement
    moveEl.style.left = `${newObj.left}px`
    moveEl.style.top = `${newObj.top}px`
    moveChild.style.width = `${newObj.width}px`
    moveChild.style.height = `${newObj.height}px`
  }

  function aftermath() {
    newObj.root.style.opacity = '1'
    isMoving.value = false
    setTimeout(() => {
      moveEl.remove()
      moveEl.innerHTML = ''
    }, 100)
  }

  if (isMoving.value) {
    const moveChild = moveEl.children[0] as HTMLElement
    newObj.root.style.opacity = '0'
    moveEl.style.transitionDuration = '0'
    moveChild.style.transition = 'all 0ms'
    clearTimeout(done)
    setTimeout(() => {
      moveEl.style.transitionDuration = '500ms'
      moveChild.style.transition = 'all 500ms'
      finish()
      setTimeout(() => {
        aftermath()
      })
    }, 0)
  }
  else {
    init()
    setTimeout(() => {
      finish()
      done = setTimeout(() => {
        aftermath()
      }, 500)
    }, 0)
  }
}

export default ShareComponent
