/* eslint-disable no-empty */
export const heavyFunction = (time: number) => {
    console.time('heavyFunction');
    const now = performance.now();
    while(performance.now() - now < time) {}
    console.timeEnd('heavyFunction');

    return Math.random() * 100000
}