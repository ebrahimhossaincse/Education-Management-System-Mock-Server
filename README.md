# Education Management System Mock Server

This repository contains a mock server for the Education Management System. It is designed to simulate the backend of an education management application, providing endpoints for managing students, instructors, courses, and batches.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
    - [Students](#students)
    - [Instructors](#instructors)
    - [Courses](#courses)
    - [Batches](#batches)
- [Authentication](#authentication)

## Features
- Mock endpoints for student, instructor, course, and batch management
- JSON responses with sample data
- Easy to extend and customize

## Installation

To get started with the mock server, clone the repository:

```sh
git clone https://github.com/ebrahimhossaincse/Education-Management-System-Mock-Server.git
```
## Install the necessary dependencies:

```sh
npm install -g json-server
npm install jsonwebtoken
```
## Usage
To start the mock server, run the following command:
```sh
npm start
```
By default, the server will run on http://localhost:3000.

## API Endpoints
### Students

- GET /students - Retrieve a list of all students
- GET /students/:id - Retrieve information about a specific student
- POST /students - Add a new student
- PUT /students/:id - Update an existing student
- DELETE /students/:id - Delete a student

### Instructors

- GET /instructors - Retrieve a list of all instructors
- GET /instructors/:id - Retrieve information about a specific instructor
- POST /instructors - Add a new instructor
- PUT /instructors/:id - Update an existing instructor
- DELETE /instructors/:id - Delete an instructor

### Courses

- GET /courses - Retrieve a list of all courses
- GET /courses/:id - Retrieve information about a specific course
- POST /courses - Add a new course
- PUT /courses/:id - Update an existing course
- DELETE /courses/:id - Delete a course

### Batches

- GET /batches - Retrieve a list of all batches
- GET /batches/:id - Retrieve information about a specific batch
- POST /batches - Add a new batch
- PUT /batches/:id - Update an existing batch
- DELETE /batches/:id - Delete a batch

## Authentication
To authenticate requests, you need to create and pass a token. When making requests to the API, include the token in the Authorization header:
```sh
curl -H "Authorization: Bearer <your-token>" http://localhost:3000/students
```
