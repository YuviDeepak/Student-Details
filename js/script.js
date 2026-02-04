

let submit = () => {
    //array
    let studentDetails = []



    //getname
    let studentName = document.getElementById("sname")
    studentDetails.push(studentName.value)
    studentName.value=""

    //get tamil mark
    let tamilMark = document.getElementById("tamil")
    studentDetails.push(Number(tamilMark.value))

    tamilMark.value=""

    //get english mark
    let englishMark = document.getElementById("english")
    studentDetails.push(Number(englishMark.value))
    englishMark.value=""

    //get maths mark
    let mathsMark = document.getElementById("maths")
    studentDetails.push(Number(mathsMark.value))
    mathsMark.value=""

    //get science mark
    let scienceMark = document.getElementById("science")
    studentDetails.push(Number(scienceMark.value))
    scienceMark.value=""

    // get social mark
    let socialMark = document.getElementById("social")
    studentDetails.push(Number(socialMark.value))
    socialMark.value=""

    //total()
    let TOT = total(studentDetails)

    //avg()
    let AVG = avg(studentDetails, TOT)

    //out

    let oN=document.getElementById("outname")
    oN.innerText=studentDetails[0]


    let otot=document.getElementById("outtot")
    otot.innerText=TOT


    let oavg=document.getElementById("outavg")
    oavg.innerText=AVG


    




}

let total = (array) => {
    let [name, ...mark] = array
    let sum = 0
    for (let i of mark) {
        sum += i
    }
    return sum
}

let avg = (arr, tot) => {
    let [name, ...mark] = arr
    let a = tot / (mark.length)
    return a

}