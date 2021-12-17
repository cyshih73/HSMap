import React from 'react'
const propositions = [
  {
    title: "Proposition 1",
    description: "Concerning the lack of persistent spread of Covid- 19 virus",
    explanations: [
      {
        key: "Local cases have been seen to rise and fall around the world.",
        sup: [],
      },
    ],
    images: [
      {
        title: "Italy - Lat: 41.9, Long: 12.6",
        src: "/captures/prop1/Italy.png",
      },
      {
        title: "Egypt - Lat: 26.8, Long: 30.8",
        src: "/captures/prop1/Egypt.png",
      },
      {
        title: "Germany - Lat: 51.2, Long: 10.5",
        src: "/captures/prop1/Germany.png",
      },
      {
        title: "South Africa - Lat: -30.6, Long: 22.9",
        src: "/captures/prop1/South Africa.png",
      },
      {
        title: "France - Lat: 46.2, Long: 2.2",
        src: "/captures/prop1/France.png",
      },
      {
        title: "Russia - Lat: 61.5, Long: 105.3",
        src: "/captures/prop1/Russia.png",
      },
      {
        title: "New York - Lat: 43.0, Long: -75.0",
        src: "/captures/prop1/New York.png",
      },
      {
        title: "Texas - Lat: 31.0, Long: -100.0",
        src: "/captures/prop1/Texas.png",
      },
      {
        title: "Florida - Lat: 28.0, Long: -81.8",
        src: "/captures/prop1/Florida.png",
      },
    ],
  },
  {
    title: "Proposition 2",
    description: "Concerning the distribution of cases over time",
    explanations: [
      {
        key: "Rise and fall of outbreaks follow a bell-shaped curve.",
        sup: [],
      },
    ],
    images: [
      {
        title: "Algeria - Lat: 28, Long: 1.7",
        src: "/captures/prop2/Algeria.png",
      },
      {
        title: "New York - Lat: 43.0, Long: -75.0",
        src: "/captures/prop2/NewYork.png",
      },
      {
        title: "Saudi Arabia - Lat: 23.9, Long: 45.1",
        src: "/captures/prop2/SaudiArabia.png",
      },
      {
        title: "South Africa - Lat: -30.6, Long: 22.9",
        src: "/captures/prop2/SouthAfrica.png",
      },
      {
        title: "Spain - Lat: 40.5, Long: -3.7",
        src: "/captures/prop2/Spain.png",
      },
      {
        title: "Turkey - Lat: 39.0, Long: 35.2",
        src: "/captures/prop2/Turkey.png",
      },
      {
        title: "Victoria - Lat: -37.8, Long: 145.0",
        src: "/captures/prop2/Victoria.png",
      },
      {
        title: "Yemen - Lat: 15.6, Long: 48.5",
        src: "/captures/prop2/Yemen.png",
      },
      {
        title: "India - Lat: 20.6, Long: 79.0",
        src: "/captures/prop2/India.png",
      },
    ],
  },
  {
    title: "Proposition 3",
    description: "Concerning seasonal reactivation of Covid-19 virus",
    explanations: [
      {
        key: "In a regional/geographic community, a respiratory virus earlier present in the community will later exhibit a seasonal pattern of cases. Reemergence happens around and during the winter in a region.",
        sup: [],
      },
    ],
    images: [
      {
        title: "Arizona - Lat: 34.0, Long: -111.0",
        src: "/captures/prop3/Arizona.png",
      },
      {
        title: "California - Lat: 36.7, Long: -119.4",
        src: "/captures/prop3/California.png",
      },
      {
        title: "Hebei - Lat: 37.8, Long: 114.9",
        src: "/captures/prop3/Hebei.png",
      },
      {
        title: "Iowa - Lat: 42.0, Long: -93.5",
        src: "/captures/prop3/Iowa.png",
      },
      {
        title: "Massachusetts - Lat: 42.4, Long: -71.3",
        src: "/captures/prop3/Massachusetts.png",
      },
      {
        title: "Minnesota - Lat: 46.7, Long: -94.6",
        src: "/captures/prop3/Minnesota.png",
      },
      {
        title: "NSwitzerland - Lat: 46.8, Long: 8.2",
        src: "/captures/prop3/Switzerland.png",
      },
      {
        title: "Victoria - Lat: -37.8, Long: 145.0",
        src: "/captures/prop3/Victoria.png",
      },
      {
        title: "Wisconsin - Lat: 43.7, Long: -88.7",
        src: "/captures/prop3/Wisconsin.png",
      },
    ],
  },
  {
    title: "Proposition 4",
    description:
      'Concerning Covid-19 viral epidemics that occur "out of season"',
    explanations: [
      {
        key: "An out-of-season outbreak must be caused by",
        sup: [
          "New variant(s), to which the population is largely nonimmune, per Proposition 1.",
          'Brought into the community from outside carriers, per Proposition 1. This mechanism is known as "carriage".',
        ],
      },
    ],
    images: [
      {
        title: "Norway - Lat: 60.4720, Long: 8.4689",
        src: "/captures/prop4/Norway.png",
      },
      {
        title: "Florida - Lat: 27.6648, Long: -81.5158",
        src: "/captures/prop4/FL.png",
      },
      {
        title: "Georgia- Lat: 32.1656, Long: 82.9001",
        src: "/captures/prop4/GA.png",
      },
      {
        title: "Louisiana - Lat: 30.9843, Long: 91.9623",
        src: "/captures/prop4/LA.png",
      },
      {
        title: "North Carolina - Lat: 35.7596, Long: 79.0193",
        src: "/captures/prop4/NC.png",
      },
      {
        title: "South Carolina - Lat: 33.8361, Long: 81.1637",
        src: "/captures/prop4/SC.png",
      },
      {
        title: "Harris County - Lat: 29.758938, Long: -95.367697",
        src: "/captures/prop4/Harris.png",
      },
      {
        title: "Oregon - Lat: 31.0, Long: -100.0",
        src: "/captures/prop4/Oregon.png",
      },
      {
        title: "Italy - Lat: 41.9, Long: 12.6",
        src: "/captures/prop4/Italy.png",
      },
    ],
  },
  {
    title: "Proposition 5",
    description: "Concerning the speed of epidemic travel of Covid-19 virus",
    explanations: [
      {
        key: "Propositions 3, 4, and 6 imply three forms of signal patterns for the virus",
        sup: [
          [<p>a more synchronous <b>rapid onset</b> due to seasonality and a variant that previously appeared in the community.</p>,
            [
              'The virus may appear seasonally or',
              'The virus may ‘vanish’ for a season'
            ]
          ],
          ["a more asynchronous out-of-season outbreak due to carriage."],
        ],
      },
    ],
    images: [
      {
        title:
          " Colorado: 39.5501° N, 105.7821° W & \nPennsylvania: 41.2033° N, 77.1945° W",
        src: "/captures/prop5/CO,PA.png",
      },
      {
        title:
          "Ireland: 53.1424° N, 7.6921° W & \nGermany: 51.1657° N, 10.4515° E",
        src: "/captures/prop5/Ire,Ger.png",
      },
      {
        title:
          "New York: 40.7128° N, 74.0060° W & \nUnited Kingdom: 55.3781° N, 3.4360° W",
        src: "/captures/prop5/NY,UK.png",
      },
      {
        title:
          "Pennsylvania: 41.2033° N, 77.1945° W & \nOregon: 43.8041° N, 120.5542° W",
        src: "/captures/prop5/PA,OG.png",
      },
      {
        title:
          "Denmark: 56.2639° N, 9.5018° E & \nGreece: 39.0742° N, 21.8243° E",
        src: "/captures/prop5/DK,Gr.png",
      },
      {
        title:
          "Estonia: 58.5953° N, 25.0136° E & \nEgypt: 26.8206° N, 30.8025° E",
        src: "/captures/prop5/Est,Eg.png",
      },
      {
        title:
          "Greece: 39.0742° N, 21.8243° E & \nBelgium: 50.5039° N, 4.4699° E",
        src: "/captures/prop5/Gr,Bel.png",
      },
      {
        title:
          "Jordan: 30.5852° N, 36.2384° E & \nSlovakia: 48.6690° N, 19.6990° E",
        src: "/captures/prop5/Jor,Slo.png",
      },
      {
        title:
          "Wisconsin: 43.7844° N, 88.7879° W & \nItaly: 41.8719° N, 12.5674° E",
        src: "/captures/prop5/Wisc + Italy.png",
      },
    ],
  },
  {
    title: "Proposition 6",
    description:
      "Concerning the diminishing and increasing of cases of respiratory viruses between successive seasons",
    explanations: [
      {
        key: "When there is more than one respiratory virus in a community, for some seasons the cases of one of the viruses may be significantly diminished (“disappear”) and in a later season have its number of cases significantly increased (“reappear”).",
        sup: [
          'This is the so-called “vanishing trick”', 'This phenomenon is not conclusively understood.'
        ],
      },

    ],
    images: [
      {
        title: "common A & B influenza in the US",
        src: "/captures/prop6/pic_1_overview.png",
      },
      {
        title: 'outbreak and "re-emerging" of A - H1N1',
        src: "/captures/prop6/pic_2_H1N1.png",
      },
      {
        title: " latency and spike of B - Victoria",
        src: "/captures/prop6/pic_3_Victoria.png",
      },
      {
        title: "synchronous  - influenza A",
        src: "/captures/prop6/pic_4_synchronous.png",
      },
      {
        title: 'synchronous "disappearing tricks" - influenza B',
        src: "/captures/prop6/pic_5_synchronous.png",
      },
      {
        title: 'asynchronous "tricks" - H1N1 and H3',
        src: "/captures/prop6/pic_6_asynchronous.png",
      },
      {
        title: 'asynchronous "tricks" - H1N1 and an influenza B',
        src: "/captures/prop6/pic_7_asynchronous.png",
      },
      {
        title: 'asynchronous "tricks" - COVID and "vanished" common flu',
        src: "/captures/prop6/pic_9_asynchronous.png",
      },
      {
        title: 'asynchronous "tricks" - zoom in on the "vanished" flu',
        src: "/captures/prop6/pic_8_asynchronous.png",
      },
    ],
  },
];


export default propositions;
