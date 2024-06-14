document.getElementById('add-course-btn').addEventListener('click', function() {
    const container = document.getElementById('courses-container');
    const courseDiv = document.createElement('div');
    courseDiv.className = 'course';
    courseDiv.innerHTML = `
        <input type="number" placeholder="Course Units">
        <select required>
            <option value="">Grade</option>
            <option value="5">A</option>
            <option value="4">B</option>
            <option value="3">C</option>
            <option value="2">D</option>
            <option value="1">E</option>
            <option value="0">F</option>
        </select>
    `;
    container.appendChild(courseDiv)
})

document.getElementById('calculate-btn').addEventListener('click', function() {
    const courses = document.querySelectorAll ('.course');
    
    let totalGradePoints = 0;
    let totalCourseUnits = 0;

    courses.forEach(course => {
        const courseUnits = parseFloat(course.children[0].value)
        const gradePoint = parseFloat(course.children[1].value)
        totalGradePoints += courseUnits * gradePoint;
        totalCourseUnits += courseUnits
    });

    const gpa = totalGradePoints / totalCourseUnits;
    document.getElementById('result').innerText = `Your GPA is ${gpa.toFixed(2)}`;
});