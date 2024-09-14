export function closest(nums: number[], target: number) {
  // Implement me
  function toPositive(number: number) {
    return Math.sqrt(Math.pow(number, 2));
  }

  const sortedNums = nums.sort((a, b) => a - b);

  let prevDifference = 1000000;

  let closestSum = 0;
  
  for (let i = 0; i < sortedNums.length; i++) {
    let j = i + 1;
    let k = sortedNums.length - 1;

    while (j < k) {
      let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];

      let newDifference = target - sum;

      if (toPositive(newDifference) < toPositive(prevDifference)) {
        prevDifference = newDifference;
        closestSum = sum;
      }

      if (sum > target) {
        k--;
      } else {
        j++;
      }
    }
  }
  return closestSum;
}

module.exports = { closest };
