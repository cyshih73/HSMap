const propositions = [
  {
    title: "Propositions1",
    description: "Concerning the lack of persistent spread of Covid- 19 virus",
    explanations: [
      {
        key: "Local cases have been seen to rise and fall around the world",
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
    title: "Propositions2",
    description: "Concerning the distribution of cases over time",
    explanations: [
      {
        key: "Rise and fall of outbreaks follow a bell-shaped curve",
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
    title: "Propositions3",
    description: "Concerning seasonal reactivation of Covid-19 virus",
    explanations: [
      {
        key: "In a regional/geographic community, a respiratory virus earlier present in the community will exhibit a seasonal pattern of cases.Reemergence happens around and during the winter in a region",
        sup: [],
      },
    ],
    images: [
      {
        title: "Italy - Lat: 41.9, Long: 12.6",
        src: "/captures/prop1/Italy.png",
      },
      {
        title: "United Kingdom - Lat: 55.4, Long: -3.4",
        src: "/captures/prop1/United Kingdom.png",
      },
      {
        title: "Germany - Lat: 51.2, Long: 10.5",
        src: "/captures/prop1/Germany.png",
      },
      {
        title: "Japan - Lat: 36.2, Long: 138.3",
        src: "/captures/prop1/Japan.png",
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
        title: "California - Lat: 36.8, Long: -119.4",
        src: "/captures/prop1/California.png",
      },
    ],
  },
  {
    title: "Propositions4",
    description:
      'Concerning Covid-19 viral epidemics that occur "out of season"',
    explanations: [
      {
        key: "An out-of-season outbreak must be caused by",
        sup: [
          "New variant(s), to which the population is largely nonimmune, per Proposition 1.",
          'Brought into the community from outside carriers, per Proposition 1. This mechanism is known as "carriage"',
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
        title: "California - Lat: 36.8, Long: -119.4",
        src: "/captures/prop1/California.png",
      },
    ],
  },
  {
    title: "Propositions5",
    description: "Concerning the speed of epidemic travel of Covid-19 virus",
    explanations: [
      {
        key: "Propositions 3, 4, and 6 imply three forms of signal patterns for the virus",
        sup: [
          "a more synchronous rapid onset due to seasonality and a variant that previously appeared in the community",
          "a more asynchronous out-of-season outbreak due to carriage",
        ],
      },
    ],
    images: [
      {
        title: "Italy - Lat: 41.9, Long: 12.6",
        src: "/captures/prop1/Italy.png",
      },
      {
        title: "United Kingdom - Lat: 55.4, Long: -3.4",
        src: "/captures/prop1/United Kingdom.png",
      },
      {
        title: "Germany - Lat: 51.2, Long: 10.5",
        src: "/captures/prop1/Germany.png",
      },
      {
        title: "Japan - Lat: 36.2, Long: 138.3",
        src: "/captures/prop1/Japan.png",
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
        title: "California - Lat: 36.8, Long: -119.4",
        src: "/captures/prop1/California.png",
      },
    ],
  },
  {
    title: "Propositions6",
    description:
      "Concerning the diminishing and increasing of cases of respiratory viruses between successive seasons.",
    explanations: [
      {
        key: "Local cases have been seen to rise and fall around the world",
        sup: [],
      },
    ],
    images: [
      {
        title: "Italy - Lat: 41.9, Long: 12.6",
        src: "/captures/prop1/Italy.png",
      },
      {
        title: "United Kingdom - Lat: 55.4, Long: -3.4",
        src: "/captures/prop1/United Kingdom.png",
      },
      {
        title: "Germany - Lat: 51.2, Long: 10.5",
        src: "/captures/prop1/Germany.png",
      },
      {
        title: "Japan - Lat: 36.2, Long: 138.3",
        src: "/captures/prop1/Japan.png",
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
        title: "California - Lat: 36.8, Long: -119.4",
        src: "/captures/prop1/California.png",
      },
    ],
  },
];


export default propositions;
