import { courses, instructors } from "../db.js";

const getAllInstructors = async (req, res) => {
  try {
    res.json(instructors);
  } catch (e) {
    throw new Error("Error while fetching instructors");
  }
};
const addInstructor = async (req, res) => {
  try {
    const newInstructor = req.body;
    newInstructor.id = req.body.id
      ? req.body.id
      : Math.floor(Math.random() * (100 - 1 + 1) + 1);
    newInstructor.lectures = [];
    instructors.push(newInstructor);
    res.json({ message: "Instructor added successfully" });
  } catch (error) {
    throw new Error("Error while adding new instructor");
  }
};

const addCourse = async (req, res) => {
  try {
    let newCourse = req.body;
    newCourse.id = req.body.id
      ? req.body.id
      : Math.floor(Math.random() * (100 - 1 + 1) + 1);
    newCourse.name = req.body.name ? req.body.name : "Default-Course";
    newCourse.level = req.body.level ? req.body.level : "Default-Level";
    newCourse.description = req.body.description
      ? req.body.description
      : "Default-Description";
    newCourse.image = req.body.image ? req.body.image : "Default-Image";
    newCourse.lectures = req.body.lectures ? req.body.lectures : [];
    courses.push(newCourse);

    res.json({ message: "Course added successfully" });
  } catch (error) {
    throw new Error("Error while adding new course");
  }
};

const getAllCourses = async (req, res) => {
  try {
    res.json(courses);
  } catch (error) {
    throw new Error("Error while fetching courses.");
  }
};

const assignLecture = async (req, res) => {
  try {
    const { instructorId, courseId, date } = req.body;

    // Check if the instructor is available on the given date
    console.log(instructorId);
    const instructor = instructors.find((i) => i.id === instructorId);
    if (instructor) {
      console.log(instructor);
      const isAvailable = instructor.lectures.every(
        (lecture) => lecture.date !== date
      );
      console.log(isAvailable);
      if (!isAvailable) {
        res
          .status(400)
          .json({ error: "Instructor is not available on this date" });
      } else {
        // Assign the lecture to the instructor

        let course = courses.find((c) => c.id === courseId);
        console.log(course);
        if (course) {
          const name = course.name;
          const lecture = {
            name,
            date,
          };
          instructor.lectures.push(lecture);
          res.json({ message: "Lecture assigned successfully" });
          console.log(instructor.lectures);
        }
      }
    } else {
      res.json({ message: "No instructor found!" });
    }
  } catch (error) {
    throw new Error("Error while assigning a lecture.");
  }
};

export {
  getAllInstructors,
  addInstructor,
  getAllCourses,
  addCourse,
  assignLecture,
};
