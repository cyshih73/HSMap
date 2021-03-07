# Convert the downloaded files to Dataframes for United States
# Author: Chang-Yuan Shih
# Courtesy: I-No Liao

import pandas as pd

def convertUS(verbose):
  stateCoordinates = {
      "Wisconsin": (44.500000, -89.500000),
      "West Virginia": (39.000000, -80.500000),
      "Vermont": (44.000000, -72.699997),
      "Texas": (31.000000, -100.000000),
      "South Dakota": (44.500000, -100.000000),
      "Rhode Island": (41.700001, -71.500000),
      "Oregon": (44.000000, -120.500000),
      "New York": (43.000000, -75.000000),
      "New Hampshire": (44.000000, -71.500000),
      "Nebraska": (41.500000, -100.000000),
      "Kansas": (38.500000, -98.000000),
      "Mississippi": (33.000000, -90.000000),
      "Illinois": (40.000000, -89.000000),
      "Delaware": (39.000000, -75.500000),
      "Connecticut": (41.599998, -72.699997),
      "Arkansas": (34.799999, -92.199997),
      "Indiana": (40.273502, -86.126976),
      "Missouri": (38.573936, -92.603760),
      "Florida": (27.994402, -81.760254),
      "Nevada": (39.876019, -117.224121),
      "Maine": (45.367584, -68.972168),
      "Michigan": (44.182205, -84.506836),
      "Georgia": (33.247875, -83.441162),
      "Hawaii": (19.741755, -155.844437),
      "Alaska": (66.160507, -153.369141),
      "Tennessee": (35.860119, -86.660156),
      "Virginia": (37.926868, -78.024902),
      "New Jersey": (39.833851, -74.871826),
      "Kentucky": (37.839333, -84.270020),
      "North Dakota": (47.650589, -100.437012),
      "Minnesota": (46.392410, -94.636230),
      "Oklahoma": (36.084621, -96.921387),
      "Montana": (46.965260, -109.533691),
      "Washington": (47.751076, -120.740135),
      "Utah": (39.419220, -111.950684),
      "Colorado": (39.113014, -105.358887),
      "Ohio": (40.367474, -82.996216),
      "Alabama": (32.318230, -86.902298),
      "Iowa": (42.032974, -93.581543),
      "New Mexico": (34.307144, -106.018066),
      "South Carolina": (33.836082, -81.163727),
      "Pennsylvania": (41.203323, -77.194527),
      "Arizona": (34.048927, -111.093735),
      "Maryland": (39.045753, -76.641273),
      "Massachusetts": (42.407211, -71.382439),
      "California": (36.778259, -119.417931),
      "Idaho": (44.068203, -114.742043),
      "Wyoming": (43.075970, -107.290283),
      "North Carolina": (35.782169, -80.793457),
      "Louisiana": (30.391830, -92.329102),
      "Harris, Texas": (29.7752, -95.3103)
  }

  # Read data
  dfUS = pd.read_csv("./dataset_US.csv")
  if verbose: dfUS.head(20)

  # Separate Harris from Texas
  harrisIndex = dfUS[(dfUS["Admin2"] == "Harris") & (dfUS["Province_State"] == "Texas")].index
  dfUS.at[harrisIndex, "Province_State"] = dfUS.iloc[harrisIndex, :]["Admin2"] + ", " + dfUS.iloc[harrisIndex, :]["Province_State"]

  # Drop unwanted columns
  droppedCols = [0, 1, 2, 3, 4, 5, 10]
  dfUS = dfUS.iloc[:, [col for col in range(len(dfUS.columns)) if col not in droppedCols]]

  # Rename columns (inplace)
  dfUS.rename(columns = {
      "Long_": "Long"
  }, inplace = True)

  # Group separately and combine
  #   - 1. Group Lat and Long (aggregated by taking first)
  #   - 2. Group Confirmed Cases (aggregated by taking sum)
  firstHalf = dfUS.iloc[:, :4].groupby(["Province_State", "Country_Region"]).first().reset_index()
  secondHalf = dfUS.drop(dfUS.columns[[2, 3]], axis = 1).groupby(["Province_State", "Country_Region"]).sum().reset_index()
  dfUS = pd.concat([firstHalf, secondHalf.iloc[:, 2:]], axis = 1)

  # Drop regions that are not in dictionary (stateCoordinates)
  dfUS = dfUS[dfUS["Province_State"].isin(stateCoordinates)]

  # Update "Lat" and "Long"
  for index, row in dfUS.iterrows():
      if row["Province_State"] in stateCoordinates:
          dfUS.at[index, "Lat"] = stateCoordinates[row["Province_State"]][0]
          dfUS.at[index, "Long"] = stateCoordinates[row["Province_State"]][1]
          
  # Derive confirmed cases per day and attach back to the source dataframe
  locationsDf = dfUS.iloc[:, :4]
  datesDf = dfUS.iloc[:, 4:].diff(axis = 1)
  diffDf = pd.concat([locationsDf, datesDf], axis = 1)

  # Transform spreading "date & confirmed cases" data into "Date" adn "Confirmed Cases"
  dfUS = diffDf.melt(
      id_vars = ["Province_State", "Country_Region", "Lat", "Long"],
      var_name = "Date",
      value_name = "Confirmed Cases")


  if verbose: print(dfUS)
  return dfUS