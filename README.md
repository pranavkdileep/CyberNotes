# CyberNotes
A simple Website For KTU Computer Science Cyber Security 

# DATABASE Integration

Tables :- syllabus, Materials,LabMaterials,QuestionPapers

## Syllabus Table
Semester | Subject Code | Subject Name | Material Link | Title | Description

## Materials Table
Semester | Subject Code | Subject Name | Material Link | Title | Description

## LabMaterials Table
Semester | Subject Code | Subject Name | Material Link | Title | Description

## QuestionPapers Table
Semester | Subject Code | Subject Name | Material Link | Title | Description

# Sql Queries
```sql
CREATE TABLE syllabus (
    Semester INT,
    SubjectCode VARCHAR(10),
    SubjectName VARCHAR(100),
    MaterialLink VARCHAR(100),
    Title VARCHAR(100),
    Description VARCHAR(100)
);

CREATE TABLE Materials (
    Semester INT,
    SubjectCode VARCHAR(10),
    SubjectName VARCHAR(100),
    MaterialLink VARCHAR(100),
    Title VARCHAR(100),
    Description VARCHAR(100)
);

CREATE TABLE LabMaterials (
    Semester INT,
    SubjectCode VARCHAR(10),
    SubjectName VARCHAR(100),
    MaterialLink VARCHAR(100),
    Title VARCHAR(100),
    Description VARCHAR(100)
);

CREATE TABLE QuestionPapers (
    Semester INT,
    SubjectCode VARCHAR(10),
    SubjectName VARCHAR(100),
    MaterialLink VARCHAR(100),
    Title VARCHAR(100),
    Description VARCHAR(100)
);
```

# Insert Queries
```sql
INSERT INTO syllabus VALUES (1, 'CS101', 'Computer Science', 'https://www.google.com', 'Syllabus', 'Syllabus for Computer Science');

INSERT INTO Materials VALUES (1, 'CS101', 'Computer Science', 'https://www.google.com', 'Materials', 'Materials for Computer Science');

INSERT INTO LabMaterials VALUES (1, 'CS101', 'Computer Science', 'https://www.google.com', 'LabMaterials', 'LabMaterials for Computer Science');

INSERT INTO QuestionPapers VALUES (1, 'CS101', 'Computer Science', 'https://www.google.com', 'QuestionPapers', 'QuestionPapers for Computer Science');
``` 
# Read Queries
```sql
SELECT DISTINCT Semester FROM syllabus;
SELECT DISTINCT Subjectname FROM syllabus WHERE Semester = 1;
SELECT MaterialLink, Title, Description FROM syllabus WHERE Semester = 1 AND SubjectCode = 'CS101';
```
