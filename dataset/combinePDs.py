# Convert all the dataframes to a csv file
# Author: Chang-Yuan Shih

import pandas as pd

def combinePDs(verbose, dfWorld, dfUS, dfBrazil, dfArgentina):
  if verbose: print("Combine all the data into one dataframe...")
  
  # Drop Brazil from dfBrazil (we've subsampled Brazil to regions)
  dfBrazil = dfBrazil[dfBrazil.Province_State != "Brazil"]

  # Drop Brazil and Argentina data from dfWorld
  dfWorld = dfWorld[dfWorld.Country_Region != "Brazil"]
  dfWorld = dfWorld[dfWorld.Country_Region != "Argentina"]

  # Drop US data from dfWorld
  dfWorld = dfWorld[dfWorld.Country_Region != "US"]

  # Merge datasets
  dfFinal = pd.concat([dfWorld, dfUS], axis = 0)
  dfFinal = pd.concat([dfFinal, dfBrazil], axis = 0)
  dfFinal = pd.concat([dfFinal, dfArgentina], axis = 0).reset_index(drop = True)

  # Convert NaN to 0
  dfFinal["Confirmed Cases"] = dfFinal["Confirmed Cases"].mask(pd.isnull, 0)

  # Convert negative numbers to 0
  dfFinal["Confirmed Cases"] = dfFinal["Confirmed Cases"].mask(dfFinal["Confirmed Cases"] < 0, 0)

  # Drop (Lat, Long) == (0, 0) or (NaN, NaN)
  #   - This action involves the following regions:
  #       - (0, 0)    : 'Diamond Princess', 'Grand Princess', 'MS Zaandam'
  #       - (NaN, NaN): 'Repatriated Travellers'
  # ```
  # droppedDf = dfFinal[((dfFinal.Lat == 0) & (dfFinal.Long == 0)) | ((dfFinal.Lat.isnull()) & (dfFinal.Long.isnull()))]
  # droppedDf["Province_State"].unique()
  # ```
  dfFinal.drop(dfFinal[((dfFinal.Lat == 0) & (dfFinal.Long == 0)) | ((dfFinal.Lat.isnull()) & (dfFinal.Long.isnull()))].index, inplace = True)

  if verbose: print(dfFinal)
  return dfFinal