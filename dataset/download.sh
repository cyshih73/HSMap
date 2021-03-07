#!bin/sh
wget -O dataset_World.csv https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv
wget -O dataset_US.csv https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_US.csv
wget -O dataset_Brazil.csv https://raw.githubusercontent.com/wcota/covid19br/master/cases-brazil-states.csv
wget -O dataset_Argentina.csv https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19Casos.csv