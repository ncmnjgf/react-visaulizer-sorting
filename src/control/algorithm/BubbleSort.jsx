export default function bubblesort(arr) {
  const animations = [];
  const array = [...arr];

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      // Push comparison
      animations.push([j, j + 1, false]); // comparing
      if (array[j] > array[j + 1]) {
        // Push swap
        animations.push([j, j + 1, true]);
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
      // Push back to normal color
      animations.push([j, j + 1, false]);
    }
  }

  return animations;
}
