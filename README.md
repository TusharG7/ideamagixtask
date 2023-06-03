# ideamagixtask
Commands To Run :

For Backend - 

              cd backend
              npm install
              node index.js
							
For Frontend - 

              cd frontend
              npm install
              npm start
          
 
 An Admin controllable system for assigning lectures to instructors.
  Admin has access for adding new Instructor and Course as well as assign a Lecture of certain Course to Instructor on a selected Date.
 
 Backend holds the logic under controllers folder which utilized by routes which are created using express.js and it also holds the local storage of Instructors and Courses in db.js file, which is initialized as Empty. 
 
 Frontend Rendering the Data from backend by calling the API using Axios
 
 So start with adding new Instructors and Courses first, then assign lectures.
