

let submit = () => {
    //array
    let studentDetails = []

    //getname
    let studentName = document.getElementById("sname")
    studentDetails.push(studentName.value)

    //get tamil mark
    let tamilMark = document.getElementById("tamil")
    studentDetails.push(Number(tamilMark.value))

    //get english mark
    let englishMark = document.getElementById("english")
    studentDetails.push(Number(englishMark.value))

    //get maths mark
    let mathsMark = document.getElementById("maths")
    studentDetails.push(Number(mathsMark.value))

    //get science mark
    let scienceMark = document.getElementById("science")
    studentDetails.push(Number(scienceMark.value))

    // get social mark
    let socialMark = document.getElementById("social")
    studentDetails.push(Number(socialMark.value))

    //total()
    let TOT = total(studentDetails)

    //avg()
    let AVG = avg(studentDetails, TOT)


    // ---------------------------------------

    //Name
    let outDetailsName = document.createElement("div")
    outDetailsName.style.padding = `10px`
    outDetailsName.style.display = `flex`
    outDetailsName.style.gap = `5px`


    let StNameLabel = document.createElement("h3")
    StNameLabel.textContent="Student Name :  "
    outDetailsName.append(StNameLabel)


    let stName = document.createElement("h3");
    stName.textContent = studentDetails[0];
    outDetailsName.append(stName)


    document.getElementById("output").appendChild(outDetailsName)


    //tot

    let outDetailstot = document.createElement("div")
    outDetailstot.style.padding = `10px`
    outDetailstot.style.display = `flex`
    outDetailstot.style.gap = `5px`


    let totLabel = document.createElement("h3")
    totLabel.textContent="Total : "
    outDetailstot.append(totLabel)


    let ttot = document.createElement("h3");
    ttot.textContent = TOT;
    outDetailstot.append(ttot)


    document.getElementById("output").appendChild(outDetailstot)


    //avg

    let outDetailsavg = document.createElement("div")
    outDetailsavg.style.padding = `10px`
    outDetailsavg.style.display = `flex`
    outDetailsavg.style.gap = `5px`


    let avgLabel = document.createElement("h3")
    avgLabel.textContent="Average :  "
    outDetailsavg.append(avgLabel)


    let avgg = document.createElement("h3");
    avgg.textContent = AVG;
    outDetailsavg.append(avgg)


    document.getElementById("output").appendChild(outDetailsavg)




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