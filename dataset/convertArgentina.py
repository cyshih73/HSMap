# Convert the downloaded files to Dataframes for Argentina
# Author: Chang-Yuan Shih
# Courtesy: Vini 

# data source: https://datos.gob.ar/dataset/salud-covid-19-casos-registrados-republica-argentina
# Información actualizada diariamente a las 20:00 hs. (updated daily at 8:00 PM)
# notificando CASOS COVID-19 registrados en el país con un corte del día a las 17:45 hs.

import csv
import datetime
import pandas as pd

#Create a function to convert date formats:
def convert_date_format(date_in):
  #receives yyyy-mm-dd and returns mm/dd/yy
  #print(type(date_in)) #string
  month = date_in[5:7] if date_in[5] != '0' else date_in[6]
  day = date_in[8:10] if date_in[8] != '0' else date_in[9]
  date_out = month + '/' + day + '/' + date_in[2:4]
  return date_out

def is_first_date(input, first): # yyy-mm-dd
  if (input == '' or first == ''): return False
  y_in = int(input[2:4])
  m_in = int(input[5:7])
  d_in = int(input[8:10])
  y_f = int(first[2:4])
  m_f = int(first[5:7])
  d_f = int(first[8:10])
  if y_in < y_f: return True
  elif y_in == y_f and m_in < m_f: return True
  elif y_in == y_f and m_in == m_f and d_in < d_f: return True
  else: return False

def is_last_date(input, last):
  if (input == '' or last == ''): return False
  y_in = int(input[2:4])
  m_in = int(input[5:7])
  d_in = int(input[8:10])
  y_l = int(last[2:4])
  m_l = int(last[5:7])
  d_l = int(last[8:10])
  if y_in < y_l: return True
  elif y_in == y_l and m_in < m_l: return True
  elif y_in == y_l and m_in == m_l and d_in < d_l: return True
  else: return False

def convertArgentina(verbose):
  # Data structure to compile information per day per province: HashMap from {date, province} to int
  #
  # Date: field 9 (in date format)
  # Provincia: field 5 (CABA means undefined yet)
  # Each line is a single case
  #
  first_date = "2020-03-19"
  last_date = "2020-10-09"
  all_dict = {}
  provinces_set = set()
  dates_set = set()
  #
  # Latitude and longitude dictionary:
  lat_dict = {'Formosa' : -26.183, 'Chaco' : -27.451, 'Neuquén' : -38.953, 'Catamarca' : -28.467, 'Buenos Aires' : -33.700, 'Salta' : -24.783, 'Tierra del Fuego' : -54.362, 'Misiones' : -26.920, 'La Rioja' : -29.433, 'Santa Fe' : -33.723, 'Santa Cruz' : -48.620, 'La Pampa' : -36.617, 'Río Negro' : -40.800, 'Tucumán' : -26.940, 'San Luis' : -33.300, 'Jujuy' : -23.750, 'Santiago del Estero' : -27.783, 'Entre Ríos' : -32.048, 'Corrientes' : -28.660, 'San Juan' : -30.870, 'Chubut' : -43.300, 'Mendoza' : -32.890, 'Córdoba' : -31.417, 'CABA' : -34.603}

  long_dict = {'Formosa' : -58.183, 'Chaco' : -58.987, 'Neuquén' : -68.064, 'Catamarca' : -65.783, 'Buenos Aires' : -61.000, 'Salta' : -65.417, 'Tierra del Fuego' : -67.638, 'Misiones' : -54.520, 'La Rioja' : -66.850, 'Santa Fe' : --62.246, 'Santa Cruz' : -70.010, 'La Pampa' : -64.283, 'Río Negro' : -63.000, 'Tucumán' : -65.340, 'San Luis' : -66.35, 'Jujuy' : -65.500, 'Santiago del Estero' : -64.267, 'Entre Ríos' : -60.281, 'Corrientes' : -57.630, 'San Juan' : -68.980, 'Chubut' : -65.100, 'Mendoza' : -68.847, 'Córdoba' : -64.183, 'CABA' : -58.382}

  

  #Read all dataset and fill out the data structures
  with open('dataset_Argentina.csv') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    line_count = 0
    for row in csv_reader:
      province = row[5]
      date = row[9]
      outcome = row[20] #"Descartado" or "Confirmado" or "Suspechoso", respectively: discarded, confirmed, suspected
      if line_count == 0: line_count += 1
      else:
        if outcome == 'Confirmado':
          #Here add this line input to the data-structure if it is confirmed
          if (date, province) in all_dict: all_dict[(date, province)] += 1
          else: all_dict[(date, province)] = 1
          if province not in provinces_set: provinces_set.add(province)
          if date not in dates_set:
            dates_set.add(date)
            if is_first_date(date, first_date): first_date = date
            if is_last_date(date, first_date): last_date = date
        line_count += 1
    if verbose: print(f'Processed {line_count} lines.')

  # Using the dictionary of all data, create output csv file named output_argentina.csv
  # Must generate output with format:
  # Province_State | Country_Region | Lat | Long | Date | Confirmed Cases
  #e.g., Buenos Aires | Argentina | -36.001 | -51.954 | mm/dd/aa | 12

  with open('dataset_Argentina_converted.csv', mode='w') as output_file:
    output_writer = csv.writer(output_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    output_writer.writerow(['Province_State', 'Country_Region', 'Lat', 'Long', 'Date', 'Confirmed Cases'])
    count_confirmed = 0
    for province in provinces_set:
      for date in dates_set:
        if (date, province) in all_dict and (province != 'SIN ESPECIFICAR') and (date != ''):
          output_writer.writerow([province, 'Argentina', lat_dict[province], long_dict[province], convert_date_format(date), all_dict[(date, province)]])
          count_confirmed += all_dict[(date, province)]

    if verbose: print(f'Confirmed cases = {count_confirmed}')
          
  #That's all folks
  dfArgentina = pd.read_csv("dataset_Argentina_converted.csv")
  if verbose: print(dfArgentina)
  return dfArgentina
