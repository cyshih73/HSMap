# Python dataset downloader for Hope-Simpson Map
# Author: Chang-Yuan Shih

import argparse
import urllib.request
import pandas as pd

from convertWorld import convertWorld
from convertUS import convertUS
from convertBrazil import convertBrazil
from convertArgentina import convertArgentina
from pd2csv import pd2csv

urls = [  ("World", "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv"),
          ("US", "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv"), 
          ("Brazil", "https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv"), 
          ("Argentina", "https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19Casos.csv")]

def downloadFiles(verbose, todo):
  if verbose: print('Downloading dataset...')
  
  for idx, url in enumerate(urls):
    if pow(2, idx) & todo == 0: continue
    if verbose: print("%s..." % url[0])
    urllib.request.urlretrieve(url[1], "./dataset_%s.csv" % url[0])

  if verbose: print("Done.")


def main(args):
  if not(args.all or args.world or args.us or args.brazil or args.argentina): 
    print("Nothing entered. Please try again.")
    exit()
  
  todo = (args.world) + (args.us * 2) + (args.brazil * 4) + (args.argentina * 8)
  if args.all: todo = 15

  if args.download:
    print("Downloading Files from web...")
    downloadFiles(args.verbose, todo)

  print("Converting Files to Dataframe...")
  if args.all or args.world: 
    print("World...")
    dfWorld = convertWorld(args.verbose)

  if args.all or args.us:
    print("US...")
    dfUS = convertUS(args.verbose)

  if args.all or args.brazil:
    print("Brazil...")
    dfBrazil = convertBrazil(args.verbose)

  if args.all or args.argentina:
    print("Argentina...")
    dfArgentina = convertArgentina(args.verbose)

  if args.all:
    print("Converting all the dataframes to one csv...")
    pd2csv(args.verbose, dfWorld, dfUS, dfBrazil, dfArgentina)
  
  print("Done!")
    

if __name__ == "__main__":
  parser = argparse.ArgumentParser(description="Python dataset downloader for Hope-Simpson Map\n", formatter_class=argparse.RawTextHelpFormatter)
  parser.add_argument("-v", "--verbose", action="store_true")
  parser.add_argument("-d", "--download", action="store_true")
  parser.add_argument("-a", "--all", action="store_true")

  parser.add_argument("--world", action="store_true")
  parser.add_argument("--us", action="store_true")
  parser.add_argument("--brazil", action="store_true")
  parser.add_argument("--argentina", action="store_true")


  # parser.add_argument("-A", "--account", help="Enter your registered email", metavar='')
  # parser.add_argument("-P", "--password", help="Enter your password", metavar='')
  # parser.add_argument("-l", "--lazyloading", help="Lazily find whether product is available. Refersh every N secs.\n"+
  #                                             "Please specify N. (e.g. python pchome.py -l 30)", type=int, metavar='')
  args = parser.parse_args()

  main(args)

