import { breaks } from './breaks'; // percentage breaks for parties (now using old one)

const staticStyleUrl = 'https://data.irozhlas.cz/mapa-domu/map_styl/style.json';

// colors for parties without specified color palette and for attendance
const basicColors = ['#fee5d9', '#fcbba1', '#fc9272', '#fb6a4a', '#de2d26', '#a50f15'];

// color for the first break - same for everyone
const zeroPercentColor = '#f2f0f7';
// color for the last break - same for everyone
const hundredPercentColor = '#a50f15';

// party color palettess
const partyColors = {
  part_30: ['#f2f0f7', '#dadaeb', '#bcbddc', '#9e9ac8', '#756bb1', '#54278f'], // ANO
  part_5: ['#eff3ff', '#c6dbef', '#9ecae1', '#6baed6', '#3182bd', '#08519c'], // ODS
  part_27: ['#edf8e9', '#c7e9c0', '#a1d99b', '#74c476', '#31a354', '#006d2c'], // Pirati
  part_26: ['#f1eef6', '#d4b9da', '#c994c7', '#df65b0', '#dd1c77', '#980043'], // STAN
  part_28: ['#ffffd4', '#fee391', '#fec44f', '#fe9929', '#d95f0e', '#993404'], // SPD
  part_39: ['#feebe2', '#fcc5c0', '#fa9fb5', '#f768a1', '#c51b8a', '#7a0177'], // KDU
  part_9: ['#fee5d9', '#fcbba1', '#fc9272', '#fb6a4a', '#de2d26', '#a50f15'], // KSCM
};

function getPartyColor(partyIdLong, idx) {
  if (partyIdLong in partyColors) {
    return partyColors[partyIdLong][idx];
  }
  return basicColors[idx];
}

function getAttendanceStyle(partyIdLong) {
  const style = [
    'case',
    ['has', 'zapsani'],
    [
      'interpolate',
      ['linear'],
      ['/', ['get', 'hlasy_platne'], ['get', 'zapsani']],
      0, zeroPercentColor,
      breaks[partyIdLong][0], getPartyColor(partyIdLong, 0),
      breaks[partyIdLong][1], getPartyColor(partyIdLong, 1),
      breaks[partyIdLong][2], getPartyColor(partyIdLong, 2),
      breaks[partyIdLong][3], getPartyColor(partyIdLong, 3),
      breaks[partyIdLong][4], getPartyColor(partyIdLong, 4),
      1.0, hundredPercentColor,
    ],
    'white',
  ];
  return style;
}

function getPartyStyle(partyIdLong) {
  const style = [
    'case',
    ['has', partyIdLong],
    [
      'interpolate',
      ['linear'],
      ['/', ['get', partyIdLong], ['get', 'hlasy_platne']],
      0, zeroPercentColor,
      breaks[partyIdLong][0], getPartyColor(partyIdLong, 0),
      breaks[partyIdLong][1], getPartyColor(partyIdLong, 1),
      breaks[partyIdLong][2], getPartyColor(partyIdLong, 2),
      breaks[partyIdLong][3], getPartyColor(partyIdLong, 3),
      breaks[partyIdLong][4], getPartyColor(partyIdLong, 4),
      1.0, hundredPercentColor,
    ],
    'white',
  ];
  return style;
}

function getMapLayerStyle(partyIdLong) {
  if (partyIdLong === 'ucast') {
    return getAttendanceStyle(partyIdLong);
  }
  return getPartyStyle(partyIdLong);
}

export { staticStyleUrl, getMapLayerStyle };
