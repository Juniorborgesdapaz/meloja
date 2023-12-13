function showCourseDetails(courseName) {
    // Simule informações detalhadas do curso
    var courseDetails = {
        amazon: {
            title: "Curso na Amazon",
            description: "Detalhes adicionais sobre o curso na Amazon. Requisitos, benefícios, etc."
        }
        // Adicione mais cursos conforme necessário
    };

    // Atualize o conteúdo da seção de detalhes do curso
    document.getElementById("course-details-title").innerHTML = courseDetails[courseName].title;
    document.getElementById("course-details-description").innerHTML = courseDetails[courseName].description;

    // Exiba a seção de detalhes do curso
    document.querySelector('.course-details').style.display = 'block';
}

function hideCourseDetails() {
    // Oculte a seção de detalhes do curso
    document.querySelector('.course-details').style.display = 'none';
}
