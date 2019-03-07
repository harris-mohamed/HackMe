import pyodbc
server = 'hackillinois2019.database.windows.net'
database = 'HackIllinoisTest'
username = input("Enter username: ")
password = input("Enter password: ")
driver= '{ODBC Driver 17 for SQL Server}'
cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
#cnxn.autocommit = True
cursor = cnxn.cursor()

cursor.execute("CREATE TABLE customers (id INT NOT NULL PRIMARY KEY, firstName VARCHAR(255) NOT NULL, lastName VARCHAR(255) NOT NULL, userName VARCHAR(255) NOT NULL, pass VARCHAR(255) NOT NULL)")
cnxn.commit()
