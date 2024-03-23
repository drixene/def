import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"

let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "DRIXENE DANE BARBAC",
    desc: " I'm passionate about Assembling a motorcycle parts. I often share insights about motorcycle. Feel free to ask a similar interests about motorcycle!",
    btn:"About me",
    myImg: "../image/mine.png"
}

let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "PROJECT PLAN",
    img1: "../image/budget.png",
    desc1: "For my budget planing, Based on income, expenses, and financial goals,  im going to create a budget that allocates my income towards different categories. so that my total expenses do not exceed on my total income.",
    btn1: "LearnMore",
    img2: "../image/motor1.jpg",
    desc2: "Starting a small business requires dedication, hard work, and perseverance, but with careful planning and execution, you can turn your entrepreneurial vision into a successful reality.",
    btn2: "Learn More",
    img3: "../image/sucess.png",
    desc3: " Strive for a balanced life that encompasses your personal, professional, and well-being goals. Prioritize self-care, health, and relationships alongside career or financial success.",
    btn3: "Learn More"
}

let {title, desc, btn, myImg} = Obj1
a.append(func2(title,desc,btn))
a.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


