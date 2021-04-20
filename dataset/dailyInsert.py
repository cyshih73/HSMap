# Python dataset database-insert for Hope-Simpson Map
# Author: Chiao-Yu Pai

import pandas as pd
import datetime
import psycopg2
import csv
import os

def dailyInsert(verbose, df):
    # get the date
    x = datetime.datetime.now()
    yesterday = x - datetime.timedelta(days=1)
    year = yesterday.year % 100
    month = yesterday.month
    day = yesterday.day
    yesterdayDataString = "%d/%d/%d" % (month, day, year)
    yesterdayDataStringLog = "%d_%d_%d" % (month, day, year)
    #yesterdayDataString = "3/16/21"
    #yesterdayDataStringLog = "3_16_21"


    if verbose:
        print(yesterdayDataString)

    # open log text file
    logDir = "logFolder/log_%s.txt" % (yesterdayDataStringLog)
    text_file = open(logDir, "wt")
    executeDateLog = "Execute date : %s\n"  % (x.strftime("%m-%d-%Y"))
    text_file.write(executeDateLog)
    dataDateLog = "Data date : %s\n" % (yesterdayDataString)
    text_file.write(dataDateLog)


    dailyData = df.loc[df['Date'] == yesterdayDataString]

    totalDataLog = "Total data : %d\n" % (len(dailyData.index))
    text_file.write(totalDataLog)

    dailyData.to_csv('dailyData.csv', index=False, sep='|')

    # insert data to database
    t_host = "127.0.0.1"
    t_port = "5432"
    t_dbname = "postgres"
    t_user = "postgres"
    t_pw = os.environ['DBpwd']  # TODO : us env
    db_conn = psycopg2.connect(host=t_host, port=t_port, dbname=t_dbname, user=t_user, password=t_pw)
    db_cursor = db_conn.cursor()

    count = 0
    while True:
        try:
            f_contents = open("dailyData.csv", 'r')
            next(f_contents) # Skip the header row
            db_cursor.copy_from(f_contents, '"hope_simpson"."ConfirmCase"', columns=('"Province_State"', '"Country_Region"',  '"Lat"', '"Long"', '"Date"', '"Confirmed_Cases"'), sep="|")
            db_conn.commit()
            break
        except psycopg2.Error as e:
            errorLog = "Error : %s\n" % (e)
            text_file.write(errorLog)
            errorLog = "Upload failed %d times. Try again now..." % count
            text_file.write(errorLog)
            count += 1
            if count > 5 : break
            pass

    
    print("close connect")
    db_cursor.close()
    db_conn.close()
    text_file.close()
