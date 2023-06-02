import { courses, instructors } from "../db.js";

const getAllLectures = async (req, res) => {
  const id = req.body.id;

  // Find the instructor
  try {
    const instructor = instructors.find((i) => i.id == id);
    console.log(instructor.lectures);
    // Get the list of lectures assigned to the instructor
    const assignedLectures = instructor.lectures.map((lecture) => {
      const course = courses.find((c) => c.name === lecture.name);
      return {
        courseName: course.name,
        date: lecture.date,
      };
    });
    res.json(assignedLectures);
  } catch (error) {
    throw new Error("Error caused while fetching lectures.");
  }
};
export { getAllLectures };
