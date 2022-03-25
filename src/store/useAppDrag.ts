import { Sortable } from 'sortablejs'

/**
 * app展示模块
 */
export const useAppDrag = (el: string) => {
  const rootBox = document.querySelector(el)
  if (!rootBox) {
    throw new Error('[useAppDrag]: el is not found')
  }
  let mainSortable

  const ops = {
    group: 'app-group',
    animation: 400,
    ghostClass: 'box-ghost',
    handle: '.app',
    onEnd() {
      console.log(mainSortable.toArray())
    },
  }

  mainSortable = Sortable.create(rootBox, ops)
}
