const convertSeasonCode = (seasonCode) => {
  seasonCode = seasonCode.toUpperCase();

  switch (seasonCode) {
    case 'B&GND':
      return 'Boys & Girls Next Door';

    case 'CD':
      return 'Closing Door';

    case 'B&GITC':
      return 'Boys & Girls in the City';

    case 'AS':
      return 'Aloha State';

    case 'OND':
      return 'Opening New Doors';

    case 'T1920':
      return 'Tokyo 19/20';

    default:
      return 'Season Not Found';
  }
};

module.exports = { convertSeasonCode };
