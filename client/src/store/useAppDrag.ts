import { Sortable } from 'sortablejs'

/**
 * app展示模块
 */
export const useAppDrag = (rootBox: HTMLElement) => {
  const ops = {
    group: 'app-group',
    animation: 400,
    ghostClass: 'box-ghost',
    handle: '.app',
  }

  Sortable.create(rootBox, ops)
}
