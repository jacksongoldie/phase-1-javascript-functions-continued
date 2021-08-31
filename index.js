// Your code here

//saturdayFun function
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`
}

let mondayWork = function(activity = "go to the office"){
    return `This Monday, I will ${activity}.`;
}

function wrapAdjective(string ="*"){
    return function(paramenter = "special"){
        return `You are ${string}${paramenter}${string}!`;
    }
}
const ecouragingPromptFunction = wrapAdjective("!!!");