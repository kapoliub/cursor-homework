class Student {
    constructor(fullName, university, course){
        this.fullName = fullName;
        this.university = university;
        this.course = course;
        this.isStudent = true;
        this.allMarks = [];
    }

    getInfo(){
        return `Student of <b>${this.course}</b> course at the <b>${this.university}</b>, <b>${this.fullName}</b>`;
    }

    get marks(){
        if(this.isStudent) return this.allMarks;
    }

    set marks(mark){
        if(this.isStudent){
            this.allMarks.push(mark);
            return this.allMarks;
        }
    }

    getAverageMark(){
        if(this.isStudent) return this.marks.reduce((a,b) => a + b)/this.marks.length;
    }

    dismiss(){
        return this.isStudent = false;
    }

    recover(){
        return this.isStudent = true;
    }
}

class BudgetStudent extends Student{
    constructor(fullName, university, course){
        super(fullName, university, course)
        let timerId = setInterval(() => this.getScholarship(), 30000);
    }
    getScholarship(){
        if(this.isStudent && this.getAverageMark() >= 4){
            console.log('Ви отримали 1400 грн. стипендії')
        }
        else{
            return 
        }
    }
}
const oleg = new Student('oleg', 'lou', 3)

function addStudent(studentType){
    const name = document.querySelector(`#new${studentType}NameInput`).value;
        const university = document.querySelector(`#new${studentType}UniversityInput`).value;
        const course = +document.querySelector(`#new${studentType}CourseInput`).value;
        let student;
        if(name && university && course > 0){
            if(studentType === 'Student'){
                student = new Student(name, university, course)
            }
            else{
                student = new BudgetStudent(name, university, course)
            }
            document.querySelector(`#new${studentType}NameInput`).value = '';
            document.querySelector(`#new${studentType}UniversityInput`).value = '';
            document.querySelector(`#new${studentType}CourseInput`).value = '';
            document.querySelector(`#new${studentType}Info`).innerHTML = student.getInfo();
            document.querySelector(`#set${studentType}MarksButton`).addEventListener('click', ()=>{
                const marks = document.querySelector(`#set${studentType}MarksInput`).value.replace(' ', '');
                marks.replace(' ', '').split(',').forEach(el => student.marks = +el);
                document.querySelector(`#set${studentType}MarksInput`).value = '';
            });
            document.querySelector(`#show${studentType}MarksButton`).addEventListener('click', ()=>{
                document.querySelector(`#${studentType}MarksInfo`).innerHTML = student.marks;
            });
            document.querySelector(`#add${studentType}MarkButton`).addEventListener('click', ()=>{
                student.marks = +document.querySelector(`#add${studentType}MarkInput`).value;
                document.querySelector(`#add${studentType}MarkInput`).value = '';
            });
            document.querySelector(`#get${studentType}AverageMarkButton`).addEventListener('click', ()=>{
                document.querySelector(`#${studentType}MarksInfo`).innerHTML = student.getAverageMark();
            });
            document.querySelector(`#dismiss${studentType}Button`).addEventListener('click', ()=>{
                student.dismiss();
            });
            document.querySelector(`#recover${studentType}Button`).addEventListener('click', ()=>{
                student.recover();
            });
        }
        else{
            document.querySelector(`#new${studentType}Info`).innerHTML = '';
        }
        
}

document.addEventListener('DOMContentLoaded', ()=>{
    document.querySelector(`#addNewStudentButton`).addEventListener('click', ()=>{
        const studentType = 'Student';
        addStudent(studentType);
    });
    document.querySelector(`#addNewBudgetStudentButton`).addEventListener('click', ()=>{
        const studentType = 'BudgetStudent';
        addStudent(studentType);
    });
})