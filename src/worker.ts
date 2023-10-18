import { heavyFunction } from "./heavyFunction"

/* eslint-disable no-empty */
onmessage = (e: MessageEvent<number>) => {
    console.log('Worker start for ', e.data, " seconds")

    const res = heavyFunction(e.data)

    console.log('Worker end')

    postMessage(res)
  }