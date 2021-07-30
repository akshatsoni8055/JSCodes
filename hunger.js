
const foodDistribution = (input) => {
  const numberOfSandwiches = input[0];
  const hungerLevels = input.splice(1);

  const optimizedHungerLevels = optimizeHungerLevels(
    numberOfSandwiches,
    hungerLevels
  );

  return sumOfHungerDifferences(optimizedHungerLevels);
};

const optimizeHungerLevels = (numberOfSandwiches, hungerLevels) => {
  if (numberOfSandwiches === 0 || sumOfHungerDifferences(hungerLevels) === 0)
    return hungerLevels;

  const optimizedHungerLevelStep = optimizeHungerLevelsStep(
    hungerLevels,
    indexOfMaxDifference(calculateHungerDifferences(hungerLevels))
  );

  return optimizeHungerLevels(--numberOfSandwiches, optimizedHungerLevelStep);
};

const indexOfMaxDifference = (hungerDifferences) =>
  hungerDifferences.indexOf(Math.max(...hungerDifferences));

const sumOfHungerDifferences = (hungerLevels) =>
  calculateHungerDifferences(hungerLevels).reduce(
    (sum, current) => sum + current,
    0
  );

const calculateHungerDifferences = (hungerLevels) =>
  hungerLevels.map((hungerLevel, hungerLevelIndex) =>
    hungerLevelIndex < hungerLevels.length - 1
      ? Math.abs(hungerLevel - hungerLevels[hungerLevelIndex + 1])
      : 0
  );

const optimizeHungerLevelsStep = (hungerLevels, indexOfMaxDifference) => {
  const newHungerLevels = [...hungerLevels];
  const indexToBeOptimized =
    hungerLevels[indexOfMaxDifference] > hungerLevels[indexOfMaxDifference + 1]
      ? indexOfMaxDifference
      : indexOfMaxDifference + 1;

  newHungerLevels[indexToBeOptimized] = --newHungerLevels[indexToBeOptimized];

  return newHungerLevels;
};

console.log(foodDistribution([2,3,4,5,6]))




