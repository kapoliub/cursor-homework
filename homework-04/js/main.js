const students = ["Саша", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];

const getRandomMark = () =>{
    return Math.floor(Math.random() * 5) +1;
}

//1
const getPairs = (students) =>{
    const studentsPairs = []; 
    const boys = [];
    const girls = [];
    students.forEach(student => {
        if(student.match(/\на|ра+$/ig)){
            girls.push(student);
        }
        else{
            boys.push(student);
        }
    });
    for(let i = 0; i < students.length/2; i++){
        studentsPairs[i] = new Array(boys[i], girls[i]);
    }
    return studentsPairs;
}
const pairs = getPairs(students);

//2
const getThemesForStudents = (themes) =>{
    const studentsAndThemes = [];
    for(let i = 0; i < themes.length; i++){
        studentsAndThemes[i] = [...pairs[i]]
    }
    themes.map( (element,i) => {
        studentsAndThemes[i].push(element)
    });
    return studentsAndThemes;
}
const themesForStudents = getThemesForStudents(themes);

//3
const getStudentsMarks = (students, marks) =>{
    const studentsMarks = [];
    for(let i = 0; i < students.length; i++){
        studentsMarks[i] = new Array(students[i], marks[i]);
    }
    return studentsMarks;
}
const studentsMarks = getStudentsMarks(students, marks);

//4
const getRandomMarksForPairs = (pairsAndThemes) => {
    const pairsThemesMarks = [];
    for(let i = 0; i < pairsAndThemes.length; i++){
        pairsThemesMarks[i] = [...pairsAndThemes[i]]
    }
    pairsThemesMarks.forEach( e =>{
        e.push(getRandomMark());
    })
    return pairsThemesMarks;
}
const randomMarksForPairs = getRandomMarksForPairs(themesForStudents)

console.log(pairs);
console.log(themesForStudents);
console.log(studentsMarks);
console.log(randomMarksForPairs);




