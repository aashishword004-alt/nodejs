1) Write an SQL statement to create a table students with fields: student_id, name, age, class, city.
 
create table student

CREATE TABLE studentt ( stdid int PRIMARY key, name varchar(64), age int(32), class varchar(32), city varchar(32)) 

2) Create a table employees with emp_id as primary key, name, salary, and department.


 CREATE TABLE employee (
 emp_id int PRIMARY KEY,
 name varchar(64),
 salary int(64),
 department varchar(64)
)


3) Create a table products with auto-increment product_id, product_name, price, and stock.


 CREATE TABLE productss( id int PRIMARY key AUTO_INCREMENT, product_name varchar(64), price int(64), stock int(64)) 




  4)Create a table orders with order_id, order_date, customer_name, and total_amount.


 CREATE TABLE orderss ( order_id int(32), customer_name varchar(64), order_date date, total_amount int(64)) 


5)Create a table books with isbn as unique, title, author, and price.


  CREATE TABLE books ( isbn int(32) UNIQUE, title varchar(64), author varchar(64), price int(64)) 


6) Insert one record into the students table.

 INSERT INTO studentt (name,age,class,city) VALUES ('ashsih',20,12,'bhavnager') 


7) Insert three records into the employees table in a single SQL statement.


  INSERT INTO  employee (name,salary,department) VALUES ('rohan',25000,'Fronted' ) ,( 'pratik',12000,'backed' ) , ('rohit',23000,'tester') 



 8) Insert a record into products without specifying the auto-increment column.


   INSERT INTO productss (product_name,price,stock) VALUES ('Toy', 299,34) 

9)  Insert today’s date into the orders table while inserting a record.
 
INSERT into orderss (order_id,customer_name,order_date,total_amount) VALUES (2,'rohan','2025-12-29',1300) 


10) Insert a book record where price is greater than 300.


 INSERT INto books (isbn,title,author,price) VALUES (102,'Greate Things','John Mayer',400) 


11)Update the salary of an employee whose emp_id is 101.

UPDATE employee SET salary = 2600 WHERE emp_id = 101

12) Update the city of a student named “Rahul”.

 UPDATE studentt set city = 'rajkot' WHERE name = 'rahul' 


13) Increase the price of all products by 10%.

UPDATE productss set price = price*10

14) Update the stock to 0 for products with stock less than 5.

UPDATE productss set stock = 0 WHERE stock < 5 

15) Change the department of all employees from “Sales” to “Marketing”.

16) Delete a student record whose student_id is 5.

 DELETE studentt FROM studentt WHERE stdid = 5

17) Delete all employees whose salary is less than 15000.

 delete employee from employee where salary < 15000

18) Delete products where stock is 0.

DELETE productss FROM productss WHERE stock = 0 

19) Delete orders placed before 2024-01-01.

 DELETE orderss FROM orderss WHERE order_date > '2024-01-01' 

20)Delete all records from the books table written by a specific author.

 DELETE books FROM books WHERE author = ' john Mayer' 

21) Write a query to select all records from the students table.

   SELECT stdid ,name,age,class,city FROM studentt 


22) Select only name and salary from the employees table.


SELECT name, salary FROM employee

23) Select all products whose price is greater than 500.

 
 SELECT * FROM productss WHERE price>500 

24) Select students who belong to class “10”.

  SELECT * FROM studentt WHERE class > 10 

25) Select all orders sorted by order_date in descending order.

  SELECT * FROM  orderss ORDER by order_date
  
26) Truncate the orders table.

 TRUNCATE TABLE orderss 

27) Drop the products table completely.

 DROP TABLE productss 

28) Write a query to count total number of students.

SELECT COUNT(stdid) as 'total student' FROM studentt  

 29) Select distinct departments from the employees table.

   SELECT * FROM employee WHERE department = 'distinct'


31) Select the highest salary from the employees table.

  SELECT * FROM employee order by salary DESC 
 


































