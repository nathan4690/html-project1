const ques = [
  "Since when did the World Health Organization (WHO) declare COVID-19 a global pandemic?",
  "01/04/2020",
  "23/01/2020",
  "11/3/2020",
  "01/02/2020",
  3,
  "For the COVID-19 epidemic, which of the following contact distances is defined as close contact?",
  "Contact outside a radius of 2m with a confirmed or suspected case during COVID-19 disease.",
  "Contact within a radius of 2 m with a confirmed or suspected case during COVID-19 illness.",
  "Contact within a radius of 3 m with a confirmed or suspected case during COVID-19 disease.",
  "Contact within a radius of 4 m with a confirmed or suspected case during COVID-19 illness.",
  2,
  "What is the message '5K' of the Ministry of Health in the prevention of COVID-19 in English?",
  "Masks - Disinfection - Do not gather - Medical declaration - Distance.",
  "Masks - Do not leave the house - Do not gather - Health declaration - Distance.",
  "Mask - Disinfection - No smoking - Medical declaration - Distance.",
  "Masks - Disinfection - Do not gather - Do not go to crowded places - Distance.",
  1,
  "According to the provisions of the Vietnam's Law on Prevention and Control of Infectious Diseases, who will pay for the examination and treatment costs for patients with COVID-19?",
  "Paid by the patient.",
  "Paid by the Health Insurance Fund.",
  "Paid by the infector.",
  "Paid by the State (free of charge).",
  4,
  "Which of the following costs do Vietnamese people living in the country who must apply concentrated medical isolation measures according to the requirements of COVID-19 disease prevention and control?",
  "Transportation costs from the facility, the location where the subject must undergo medical isolation to the concentrated medical isolation facility.",
  "Cost of SARS-CoV-2 screening test.",
  "The cost of living needs in the days of concentrated medical isolation with a total cost of 40,000 VND/person/day.",
  "Food costs 80,000 VND/person/day.",
  4
  ];
  var quesCount = 1;
  replace()
function showEnd(){
  document.getElementById("endDiv").style.display = "block";
}
function startquiz(){
  document.getElementById("startdiv").style.display = "none";
}
function checkans(val){
  if(val == ques[(quesCount-1)*6 + ques[quesCount*6-1]]){
    window.alert("Correct!!!");
    quesCount += 1;
    if(quesCount == 6){showEnd()}
    else{replace();}
  }else{
    window.alert("Wrong answer, try again.")
  }
}
function replace(){
  let arr = [1, 2, 3, 4];
  arr.sort(() => Math.random() - 0.5);
  document.getElementById("ques").innerHTML = ques[(quesCount-1)*6];
  document.getElementById("ans1").innerHTML = ques[(quesCount-1)*6+(arr[0])];
  document.getElementById("ans2").innerHTML = ques[(quesCount-1)*6+arr[1]];
  document.getElementById("ans3").innerHTML = ques[(quesCount-1)*6+arr[2]];
  document.getElementById("ans4").innerHTML = ques[(quesCount-1)*6+arr[3]];
  document.getElementById("ans1").value = ques[(quesCount-1)*6+arr[0]];
  document.getElementById("ans2").value = ques[(quesCount-1)*6+arr[1]];
  document.getElementById("ans3").value = ques[(quesCount-1)*6+arr[2]];
  document.getElementById("ans4").value = ques[(quesCount-1)*6+arr[3]];
}