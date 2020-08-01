const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }  
}];

//1
const getSubjects = (student) =>{
    const subjects = Object.keys(student.subjects);
    return subjects.map( subject => subject.slice(0,1).toUpperCase()+ subject.slice(1).replace('_', ' ') );
}

//2
const getAverageMark = (student) =>{
    const subjects = Object.keys(student.subjects);
    let count = 0;
    let sum = 0;
    const marks = subjects.map(subject =>{
        return student.subjects[subject];
    });
    for(let i = 0; i < marks.length; i++){
        count += marks[i].length;
        sum = marks[i].reduce((a,b)=> a + b, sum);
    }
    return +(sum/count).toFixed(2);
}

//3
const getStudentInfo = (student) =>{
    return {
        name: student.name,
        course: student.course,
        averageMark: getAverageMark(student)
    }
}

//4
const getStudentsNames = (students) =>{
    return students.map(student => student.name)
    .sort();
}

//5
const getBestStudent = (students) =>{
    let bestMark = students.map(el =>{
        el.averageMark = getAverageMark(el);
        return el.averageMark;
    }).sort((a,b)=>b-a)[0];
    
    return students.filter(el => el.averageMark === bestMark)[0].name
}

//6
const calculateWordLetters = (word) =>{
    let counts = {};
    word.toLowerCase().split('').map(el =>{
        counts[el] = 1 + (counts[el] || 0);
    })
    return counts;
}

document.addEventListener('DOMContentLoaded', function(){
    let outputStudentsData = students.map(el => {
        let subjectsAndMarks = getSubjects(el).map(subject =>{
            let originalSubjectName = subject.toLowerCase().replace(' ', '_')
            return `<li>${subject}: ${el.subjects[originalSubjectName]}</li>`
        }).join('');
        return `<div class="card col-lg-3 col-md-5 col-sm-12">
        <img src="./assets/img/student_img.png" class="card-img-top" alt="user_img">
        <div class="card-body">
            <h5 class="card-title student__name">${el.name}</h5>
            <p>Course: ${el.course}</p>
            Subjects
            <ul>
                ${subjectsAndMarks}
            </ul>
        </div>
    </div>`
    }).join('');

    document.querySelector('.students__block').innerHTML = outputStudentsData;

    let studentsNamesToSelect = getStudentsNames(students).map(name =>{
        return `<option value='${name}'>${name}</option>`
    }).join('');
    document.querySelector('.averageMark__block select').innerHTML =  `<option value='default'>Choose a student</option>` +  studentsNamesToSelect;

    document.querySelector('.studentsInfo__block select').innerHTML = `<option value='default''>Choose a student</option>` + studentsNamesToSelect;
    
    document.querySelector('.bestStudent__block h3').innerHTML = getBestStudent(students);

    document.querySelector('#getAverageMarkButton').addEventListener('click', function(){
        let studentName = document.querySelector('#averageMarkSelect').value;
        if(studentName === 'default'){
            document.querySelector('#modalLabel').innerHTML = 'Error';
            document.querySelector('.modal-body').innerHTML = 'Choose a student';
            return
        }
        let student = students.find(function (el){
            return el.name === studentName;
        })
        document.querySelector('#modalLabel').innerHTML = `${student.name}'s average mark`;
        document.querySelector('.modal-body').innerHTML = student.averageMark;
    });

    document.querySelector('#getStudentInfoButton').addEventListener('click', function(){
        let studentName = document.querySelector('#studentInfoSelect').value;
        if(studentName === 'default'){
            document.querySelector('#modalLabel').innerHTML = 'Error';
            document.querySelector('.modal-body').innerHTML = 'Choose a student';
            return
        }
        let student = students.find(function (el){
            return el.name === studentName;
        })
        document.querySelector('#modalLabel').innerHTML = `Info about ${student.name}`;
        document.querySelector('.modal-body').innerHTML = `
        <p>Name: ${student.name}</p>
        <p>Course: ${student.course}</p>
        <p>Average mark: ${student.averageMark}</p>`
    });

    document.querySelector('#calculateLetters').addEventListener('click', function(){
        let lettersOutput = document.querySelector('.lettersOutput');
        let word = document.querySelector('#wordForCalculatingInput').value;
        let lettersResult = [];
        if(word){
            let letters = calculateWordLetters(word);
            for( let key in letters){
            lettersResult.push(`<span>${key}: ${letters[key]}</span>`);
            }
        }
        else{
            lettersResult.push('Error: check input value')
        }
        lettersOutput.classList.add('alert');
        lettersOutput.classList.add('alert-warning');
        lettersOutput.innerHTML = lettersResult.join('');
        document.querySelector('#wordForCalculatingInput').value = '';
    })
})



