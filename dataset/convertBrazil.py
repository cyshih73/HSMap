# Convert the downloaded files to Dataframes for Brazil
# Author: Chang-Yuan Shih
# Courtesy: Vini 

import csv
import pandas as pd

#Create a function to convert date formats:
def convert_date_format(date_in):
  #receives yyyy-mm-dd and returns mm/dd/yy
  #print(type(date_in)) #string
  month = date_in[5:7] if date_in[5] != '0' else date_in[6]
  day = date_in[8:10] if date_in[8] != '0' else date_in[9]
  date_out = month + '/' + day + '/' + date_in[2:4]
  return date_out

def convertBrazil(verbose):
  n_states = 28
  states = ['TOTAL', 'SP', 'RJ', 'MG', 'ES', 'RS', 'SC', 'PR', 'GO', 'MS', 'MT', 'SE', 'AL', 'PE', 'PB', 'RN', 'CE', 'PI', 'MA', 'TO', 'PA', 'AP', 'AM', 'RR', 'RO', 'AC', 'DF', 'BA']
  states_full = ['Brazil', 'Sao Paulo', 'Rio de Janeiro', 'Minas Gerais', \
                'Espirito Santo', 'Rio Grande do Sul', 'Santa Catarina', 'Parana', \
                'Goias', 'Mato Grosso do Sul', 'Mato Grosso', 'Sergipe', \
                'Alagoas', 'Pernambuco', 'Paraiba', 'Rio Grande do Norte', \
                'Ceara', 'Piaui', 'Maranhao', 'Tocantins', \
                'Para', 'Amapa', 'Amazonas', 'Roraima', \
                'Rondonia', 'Acre', 'Distrito Federal', 'Bahia']
  latitude =  [-14.200, -23.550, -22.911, -19.917, -20.289, -30.033, -27.612, -25.417, -16.667, -20.484, -15.596, -10.917, -9.666, -8.050, -7.083, -5.783, -3.728, -5.095, -2.528, -10.184, -1.456, 0.034, -3.100, 2.819, -8.762, -9.975, -15.794, -12.975]
  longitude = [-51.900, -46.633, -43.206, -43.933, -40.308, -51.230, -48.485, -49.250, -49.250, -54.615, -56.096, -37.050, -35.735, -34.900, -34.833, -35.200, -38.528, -42.8042, -44.304, -48.334, -48.504, -51.066, -60.017, -60.671, -63.904, -67.810, -47.883, -38.477]

  #Create a dictinary to store values for each state
  my_dict = {}
  for i in range(n_states):
    my_dict[states[i]] = [states_full[i], latitude[i], longitude[i]]

  #Generate a new csv file with the new format
  with open('dataset_Brazil_converted.csv', mode='w') as output_file:
    output_writer = csv.writer(output_file, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    #state | country | latitude | longitude | date as mm/dd/yy | daily cases
    #create one entry for each day in each state/region
    output_writer.writerow(['Province_State', 'Country_Region', 'Lat', 'Long', 'Date', 'Confirmed Cases'])

    with open('dataset_Brazil.csv') as csv_file:
      csv_reader = csv.reader(csv_file, delimiter=',')
      line_count = 0
      for row in csv_reader:
        if line_count == 0: line_count += 1
        else:
          if len(row) > 8:
              state_id = row[3]
              date = convert_date_format(row[1])
              daily_cases = row[7]
              state_info = my_dict[state_id]
              output_writer.writerow([state_info[0], 'Brazil', state_info[1], state_info[2], date, daily_cases])
          line_count += 1
      # print(f'Processed {line_count} lines.')
  
  dfBrazil = pd.read_csv('dataset_Brazil_converted.csv')
  if verbose: print(dfBrazil)
  return dfBrazil
            
