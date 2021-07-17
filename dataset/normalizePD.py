# Create dataframe for normalized comparison
# Author: Chang-Yuan Shih

import pandas as pd

def normalizePD(verbose, df):
  if verbose: print("Normalize data with sum...")

  # Get the sum of confirm cases
  sumdf = df.groupby(['Province_State'])['Confirmed Cases'].sum()

  # Merge the sum into df
  result = pd.merge(df, sumdf, on="Province_State")
  result = result.rename(columns={"Confirmed Cases_x": "Confirmed Cases","Confirmed Cases_y" : "Confirmed_Sum"})

  # Get the Ratio
  result['Cases_Ratio'] = result['Confirmed Cases'] / result['Confirmed_Sum'] * 100
  if verbose: print(result)
  
  return result