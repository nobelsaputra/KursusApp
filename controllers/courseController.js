const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createCourse = async (req, res) => {
  const { title, description } = req.body;
  const instructorId = req.user.id;

  if (!title || !description) {
    return res.status(400).send({ message: "Title dan description diperlukan" });
  }

  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        description,
        instructorId,
      },
    });
    res.status(201).send({ message: "Kursus berhasil dibuat", course: newCourse });
  } catch (error) {
    res.status(500).send({ message: "Error saat membuat kursus", error });
  }
};

exports.enrollCourse = async (req, res) => {
  const studentId = req.user.id;
  const { courseId } = req.body;

  try {
    const enrollment = await prisma.enrollment.create({
      data: {
        studentId,
        courseId,
      },
    });
    res.status(201).send({ message: "Berhasil mendaftar kursus", enrollment });
  } catch (error) {
    res.status(500).send({ message: "Error saat mendaftar kursus", error });
  }
};
