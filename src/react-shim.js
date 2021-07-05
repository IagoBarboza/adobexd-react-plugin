if (window.setTimeout === null) window.setTimeout = (fn) => fn()

if (window.clearTimeout === null) window.clearTimeout = () => {}

if (window.cancelAnimationFrame === null) window.cancelAnimationFrame = () => {}

if (window.requestAnimationFrame === null) window.requestAnimationFrame = () => console.log('requestAnimationFrame is not supported yet')

if (window.HTMLIFrameElement === null) window.HTMLIFrameElement = class HTMLIFrameElement {};