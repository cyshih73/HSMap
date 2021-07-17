# Upload dataframe to googld sheets
# Author: Chang-Yuan Shih

import pandas as pd
import pygsheets

def uploadGSheet(verbose, df):
  if verbose: print("Upload the dataframe onto google sheet")

  # Get the credential with given json-file
  # hsmap-credential.json is not on the github repo. Contact author for access
  GCloud = pygsheets.authorize(service_file="hsmap-credential.json")

  # Open the Google sheet file
  sheet = GCloud.open_by_key("1eAJwWsfpLqxAyCvEsSsQ0PfZzfm7Luw0PzKefG7JCHI")

  # Select the table
  worksheet = sheet.sheet1

  # Upload the dataframe
  if verbose: print("Uploading the dataframe...")
  count = 0
  while True:
    try:
      worksheet.set_dataframe(df, start = 'A1', copy_index=False, copy_head=True, fit=True, escape_formulae=False, nan = 0)
      break
    except: 
      print("Upload failed %d times. Try again now..." % count)
      count += 1
      if count > 5: break
      pass
  

  if verbose: print("Done")
  return