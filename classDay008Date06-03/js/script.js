//El programa muestra primero una tabla de notas con sus equivalentes en el Standard Grading System o el sistema utilizado en los Estados Unidos que va desde la A hasta la F.El programa preguntará al usuario su nota y transformará ese resultado al equivalente en el Standard Grading System. También el programa dará una pequeña pero valiosa recomendación al usuario respecto a su nivel de estudio y calidad como estudiante.
//const mostar = {};
//mostrar.traditional= 90
//mostar.lettrer.A
//console.log(mostar)
const table = {
    traditional_: {1:"90-100", 2:"80-89", 3:"70-79", 4:"60-69", 5:"<60", 6:"0" },
    range14_Point:{1:"12-14" , 2:"9-11", 3:"6-8", 4:"3-5", 5:"1-2", 6:"0"},
    letter: {1:"A", 2:"B", 3:"C", 4:"D", 5:"E", 6:"F"},
    sbg:{1:"4", 2:"3", 3:"2", 4:"1", 5:"0", 6:"0"},
    proficiencyLevel:{1:'Exceeded proficiency', 2:'Demonstrated proficiency', 3: 'Approaches proficiency', 4:  'Falls well below proficiency', 5:'Lacks all proficiency', 6:'No attempt made'}
  };
  recommendation = {
    1: 'Keep up the great work!',
    2:'You\'re doing well, but keep pushing yourself.',
    3:'You\'re doing okay, but there\'s room for improvement.',
    4:'You should consider seeking help from your teacher or a tutor.',
    5:'You need to improve your study habits and seek help immediately.',
    6:'You need to take your studies more seriously.'
  }
  console.table(table);

let typeofGradingSystem= prompt("What's the grading system of your grade (type 1 for traditional %, 2 for 14PointRange or 3 for SBG")
let grades
 if (typeofGradingSystem==1 )
{
  //console.log(typeof(name))
grades = parseInt(prompt("Enter your grade,type 1 if your score is between 90 and 100, 2 if is between 80-89, 3 for 70-79, 4 for 60-69, or 5 if its 60-1, if its 0 type 6"))
}
else if ((typeofGradingSystem==2 ))
grades = parseInt(prompt("Enter your grade,type 1 if your score is between 14 and 12, 2 if is between 9-11, 3 for 6-8, 4 for 3-5, or 5 if its 1-2, if its 0 type 6"))

else {
  grades = parseInt(prompt("Enter your grade,type 1 if your score is 4, 2 if is 3, 3 if is 2, 2 if is 1, or 5 if its 1, for 0 score type 6"))
}
console.log(`Your grade is equivalent to a ${table.letter[grades]} in the Standard Grading System.` )
console.log(`You ${table.proficiencyLevel[grades]} for this subject.`);
console.log(`Recommendation: ${recommendation[grades]}`);
