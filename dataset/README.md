# Hope-Simpson Map

Hope-Simpson inspired COVID-19 research project

## Dataset Tools
This tool will help you download the newest data from:

- World(Global), US: [Johns Hopkins University](https://github.com/CSSEGISandData/COVID-19)
- Brazil: [wcota](https://github.com/wcota/covid19br)
- Argentina: [datos.gob.ar](https://sisa.msal.gov.ar/datos/descargas/covid-19/files/Covid19Casos.csv)

and pack them into one csv file named "dataset_all.csv"

### Requirements
- Unix-based system (Ubuntu 20.04 tested)
- Python3 (3.8.5 tested)
- pandas (from Anaconda tested)

### Usage
- python dataset.py -a -d
  - `-a`: run for all four country
  - `-d`: download the data from web
  - `-v`: verbose
  - `--world, --us, --brazil, --argentina`: run the conversion for one dataset only
- bash clean.sh
  - Clean the output
- bash download.sh
  - Run this if python script not working

### Credit
- Author: [Chang-Yuan (Charlie) Shih](https://github.com/cyshih73)
- Most of the code for US and world: [I-No Liao](https://github.com/INoLiao)
- Most of the code for Brazil and Argentina: [Vini Da Silva](https://github.com/ViniBR01)
