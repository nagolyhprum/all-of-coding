-- Basic SQL Syntax (SELECT, INSERT, UPDATE, DELETE)

-- select column1 and column2 from table_name
SELECT column1, column2 FROM table_name;

-- select all columns from table_name
SELECT * FROM table_name;

-- we can filter queries
SELECT first_name, last_name
FROM employees
WHERE department = 'Sales';

-- we can insert
INSERT INTO employees (first_name, last_name, department)
VALUES ('John', 'Doe', 'Sales');

-- we can update
UPDATE employees
SET department = 'Marketing'
WHERE first_name = 'John' AND last_name = 'Doe';

-- we can delete
DELETE FROM employees
WHERE department = 'Sales';

-- we can sort
SELECT first_name, last_name
FROM employees
ORDER BY last_name ASC; -- ASC is default, DESC is alt

-- we can limit results
SELECT column1, column2
FROM table_name
LIMIT 5;


-- Joins (INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL OUTER JOIN)

-- Every basically maps every row of table A with table B
-- This results in a table with (A.length + 1) * (B.length + 1) rows
-- We will refer to this table as table AB
-- Imagine both B and B have an empty row

-- inner join - only keeps the rows of AB where the on clause evaluates to true
SELECT A.column1, B.column2
FROM A
JOIN B ON A.common_column = B.common_column;

SELECT A.column1, B.column2
FROM A
INNER JOIN B ON A.common_column = B.common_column;

-- left join - we get every row from A and we get B if the ON clause evaluates to true
SELECT A.column1, B.column2
FROM A
LEFT JOIN B ON A.common_column = tableB.common_column;

-- right join - we get every row from B and we get A if the ON clause evaluates to true
SELECT A.column1, B.column2
FROM A
LEFT JOIN B ON A.common_column = B.common_column;

-- full join - we get every row from A and every row from B and more for each ON clause that evaluates to true
SELECT A.column1, B.column2
FROM A
FULL OUTER JOIN B ON A.common_column = B.common_column;

-- Subqueries (WHERE, FROM, SELECT subqueries)

SELECT first_name, last_name
FROM employees
WHERE department_id = (
    SELECT id 
    FROM departments 
    WHERE department_name = 'Sales'
);

-- Aggregation Functions (COUNT, SUM, AVG, MIN, MAX)
-- Group By & Having Clauses
SELECT column1, COUNT(*) as total
FROM table_name
GROUP BY column1
HAVING COUNT(*) > 5;

-- Indexes and Performance Optimization
-- in case indexes get fragmented
ALTER INDEX idx_employee_id ON employees REBUILD;

-- Need to know the details of a queries execution?
EXPLAIN SELECT * FROM employees WHERE employee_id = 12345;

-- Data Types (VARCHAR, INT, DATE, BOOLEAN)

-- Constraints (Primary Key, Foreign Key, Unique, Not Null)

-- Transactions (COMMIT, ROLLBACK)

-- Normalization and Database Design

-- Window Functions (ROW_NUMBER, RANK, PARTITION BY)


