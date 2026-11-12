# Student Enrollment Form using JsonPowerDB

## Description

The Student Enrollment Form is a micro project developed using HTML, Bootstrap, JavaScript, jQuery and JsonPowerDB.

The project allows users to store and manage student enrollment information in a database using JsonPowerDB.

The form contains the following input fields:

- Roll No (Primary Key)
- Full Name
- Class
- Birth Date
- Address
- Enrollment Date

The project provides three main operations:

- **Save:** Stores new student information in the database.
- **Update:** Updates existing student information.
- **Reset:** Clears all form fields and returns the form to its initial state.

The Roll No is used as the primary key to check whether a student record already exists in the database.

## Benefits of using JsonPowerDB

1. JsonPowerDB is a simple and easy-to-use database.
2. It provides a high-performance database solution.
3. It supports JSON-based data storage.
4. It provides REST API support for database operations.
5. It reduces development time and complexity.
6. It supports CRUD operations.
7. It provides easy integration with JavaScript applications.
8. It supports indexing for faster data retrieval.

## Scope of Functionalities

- Student record insertion.
- Student record retrieval using Roll No.
- Updating existing student information.
- Resetting the enrollment form.
- Validating all required input fields.
- Managing student records using JsonPowerDB.

## Technologies Used

- HTML
- CSS
- Bootstrap 3
- JavaScript
- jQuery
- JsonPowerDB

## Database Details

| Property | Value |
|---|---|
| Database Name | SCHOOL-DB |
| Relation Name | STUDENT-TABLE |
| Primary Key | rollNo |

## Project Structure

```text
StudentEnrollment/
│
├── index.html
│
└── js/
    └── index.js
```

## Examples of Use

1. Open the Student Enrollment Form.
2. Enter a student Roll No.
3. If the Roll No does not exist, enter the student details and click Save.
4. If the Roll No already exists, the stored information will be displayed.
5. Modify the required details and click Update.
6. Click Reset to clear the form.

## Release History

### Version 1.0.0

- Created Student Enrollment Form.
- Integrated JsonPowerDB.
- Implemented primary key validation using Roll No.
- Implemented Save functionality.
- Implemented Update functionality.
- Implemented Reset functionality.
- Added input field validation.

## Project Status

Completed as a Micro Project.

## Author

Developed as part of the academic Micro Project assignment.

## Sources

- [JsonPowerDB](https://login2explore.com/jpdb/)
- [GitHub](https://github.com/)
- [Bootstrap](https://getbootstrap.com/)
- [jQuery](https://jquery.com/)
