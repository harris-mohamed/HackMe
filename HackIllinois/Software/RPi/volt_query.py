import pyodbc 
import plotly.plotly as py 
import plotly.graph_objs as go 

import numpy as np 
N = 500

random_x = np.linspace(0, 1, N)
random_y = np.random.rand(N)

trace = go.Scatter(
  x = random_x, 
  y = random_y
)

data = [trace] 

py.iplot(data, filename = 'basic-line')

server = 'hackillinois2019.database.windows.net'
database = 'HackIllinoisTest' 
username = 'hacker' 
password = 'gOOns412' 
driver = '{ODBC Driver 17 for SQL Server}' 
conn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+password) 
cursor = conn.cursor()
cursor.execute("SELECT Voltage FROM voltages")
row = cursor.fetchone()

while row:
  row0 = str(row[0])
#  row1 = str(row[1])
  print (row0 + " ")
  row = cursor.fetchone()
