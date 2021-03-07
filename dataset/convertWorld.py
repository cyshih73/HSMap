# Convert the downloaded files to Dataframes for World
# Author: Chang-Yuan Shih
# Courtesy: I-No Liao

import pandas as pd

def convertWorld(verbose):
  dfWorld = pd.read_csv("./dataset_World.csv")
  if verbose: dfWorld.head(20)

  # Renaming columns
  dfWorld.rename(columns = {
    "Province/State": "Province_State", 
    "Country/Region": "Country_Region"
  }, inplace = True)

  # Name the "Province_State" as "Country_Region" if marked as NaN
  dfWorld["Province_State"] = dfWorld["Province_State"].mask(pd.isnull, dfWorld["Country_Region"])

  # Derive confirmed cases per day and attach back to the source dataframe
  locationsDf = dfWorld.iloc[:, :4]
  datesDf = dfWorld.iloc[:, 4:].diff(axis = 1)
  diffDf = pd.concat([locationsDf, datesDf], axis = 1)

  # Transform spreading "date & confirmed cases" data into "Date" adn "Confirmed Cases"
  dfWorld = diffDf.melt(
      id_vars = ["Province_State", "Country_Region", "Lat", "Long"],
      var_name = "Date",
      value_name = "Confirmed Cases")
  
  if verbose: print(dfWorld)
  return dfWorld