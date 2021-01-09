interface GridProps {
  maxWidth?: string
  gridColumns?: string
  gridGap?: string
  padding?: string
  color?: string
}

let gridProps: GridProps

const createElement = (element: string = 'div') => document.createElement(element)

const appendColumns = (element: HTMLElement) => {
  for (let i = 0; i < 20; i++) {
    const column = createElement('span')
    column.style.background = gridProps.color || 'tomato'
    element.appendChild(column)
  }
}

const gridWrapper = (): HTMLElement => {
  const element = createElement()
  element.setAttribute('data-qa-tools', 'grid-wrapper')
  element.style.display = 'grid'
  element.style.columnGap = gridProps.gridGap || 'var(--grid-gap)'
  element.style.gridTemplate = `1fr / repeat(${
    gridProps.gridColumns || 'var(--grid-columns)'
  }, 1fr)`
  element.style.width = '100%'
  element.style.maxWidth = gridProps.maxWidth || 'var(--component-max-width)'
  element.style.paddingInlineStart = gridProps.padding || 'var(--component-padding)'
  element.style.paddingInlineEnd = gridProps.padding || 'var(--component-padding)'
  element.style.opacity = '0.2'
  appendColumns(element)
  return element
}

const grid = (): HTMLElement => {
  const grid = createElement()
  grid.setAttribute('data-qa-tools', 'grid')
  grid.style.position = 'fixed'
  grid.style.top = '0'
  grid.style.bottom = '0'
  grid.style.left = '0'
  grid.style.right = '0'
  grid.style.display = 'flex'
  grid.style.justifyContent = 'center'
  grid.style.pointerEvents = 'none'
  grid.style.opacity = '0'
  grid.style.zIndex = '999'
  grid.style.transition = 'opacity 250ms linear'
  grid.append(gridWrapper())
  return grid
}

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key != 'g') return
  const grid = <HTMLElement>document.querySelector('[data-qa-tools="grid"]')
  grid!.style.opacity = getComputedStyle(grid).opacity === '1' ? '0' : '1'
}

const gridOverlay = (props?: GridProps) => {
  gridProps = props || {}
  document.body.append(grid())
  window.addEventListener('keydown', handleKeyDown)
}

export { gridOverlay }
