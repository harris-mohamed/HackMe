import pyodbc
server = 'hackillinois2019.database.windows.net'
database = 'HackIllinoisTest'
username = input("Enter username: ")
password = input("Enter password: ")
driver= '{ODBC Driver 17 for SQL Server}'
cnxn = pyodbc.connect('DRIVER='+driver+';SERVER='+server+';PORT=1433;DATABASE='+database+';UID='+username+';PWD='+ password)
cursor = cnxn.cursor()

#Sample insert query
# cursor.execute("INSERT SalesLT.Product (Name, ProductNumber, StandardCost, ListPrice, SellStartDate) OUTPUT INSERTED.ProductID VALUES ('SQL Server Express New 20', 'SQLEXPRESS New 20', 0, 0, CURRENT_TIMESTAMP )")
# row = cursor.fetchone()
#
# while row:
#     print ('Inserted Product key is ' + str(row[0]))
#     row = cursor.fetchone()


sql = "INSERT INTO SalesLT.ProductCategory (ParentProductCategoryID, Name) VALUES (?, ?)"
val = ("4", "test") #change parameters to whatever parent product, and product name you want (look at DB for examples for current names)
cursor.execute(sql, val)

cnxn.commit()

print(cursor.rowcount, "record inserted.")
