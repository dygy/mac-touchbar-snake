const { app, BrowserWindow, TouchBar, webContents } = require('electron')

const { TouchBarLabel, TouchBarButton, TouchBarSpacer } = TouchBar

let spinning = false

// Reel labels
const reel1 = new TouchBarLabel()
const reel2 = new TouchBarLabel()
const reel3 = new TouchBarLabel()

// Spin result label
const result = new TouchBarLabel()

// Spin button
const getRandomValue = () => {
  const values = ['🍒', '💎', '7️⃣', '🍊', '🔔', '⭐', '🍇', '🍀']
  return values[Math.floor(Math.random() * values.length)]
}

const updateReels = () => {
  reel1.label = getRandomValue()
  reel2.label = getRandomValue()
  reel3.label = getRandomValue()
}



let window

app.whenReady().then(() => {
  window = new BrowserWindow({
    frame: true,
    titleBarStyle: 'hiddenInset',
    width: 800,
    height: 500,
    backgroundColor: '#000',
    icon: __dirname +'/images.png'
  })
  const move  = (direction) => window.webContents.executeJavaScript(`snake.setDirection('${direction}')`, true)

  const left = new TouchBarButton({
    label: '⬅️',
    backgroundColor: '#7851A9',
    click: () => move('left')
  })
  const right = new TouchBarButton({
    label: '➡️',
    backgroundColor: '#7851A9',
    click: () => move('right')
  })
  const bottom = new TouchBarButton({
    label: '⬇️',
    backgroundColor: '#7851A9',
    click: () => move('down')
  })
  const top = new TouchBarButton({
    label: '⬆️',
    backgroundColor: '#7851A9',
    click: () => move('up')
  })
  const touchBar = new TouchBar({
    items: [
      left,
      new TouchBarSpacer({ size: 'large' }),
      top,
      new TouchBarSpacer({ size: 'large' }),
      right,
      new TouchBarSpacer({ size: 'large' }),
      bottom,
      new TouchBarSpacer({ size: 'large' }),
    ]
  })

  window.loadFile('index.html')
  window.setTouchBar(touchBar)
})
