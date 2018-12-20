function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name)
  return('Welcome, ' + name + '. You are number ' + katzDeliLine.length + ' in line.')
}


function nowServing(katzDeliLine){
  if (katzDeliLine.length===0){
  return('There is nobody waiting to be served!')
  }else {
    return('Currently serving ' + katzDeliLine.shift() + '.')
  }
}



 function currentLine(katzDeliLine) {
   if (katzDeliLine.length===0) {
     return "The line is currently empty."
   } else {
     var array=[]
  for (var i=0; i<katzDeliLine.length; i++){
    array.push(`${i+1}. ${katzDeliLine[i]}`)
  }
  return "The line is currently: " +array.join(", ")
}
}


var i=1 //TEST: you can delete this
function takeANumber(katzDeliLine){
  katzDeliLine.push(i++)
  return ('Welcome, you are ticket number' + i)
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return('There is nobody waiting to be served')
  }else{
    return('Currently serving ticket number'+ katzDeliLine.shift())
  }
}



var i=1 //TEST: you can delete this
function takeANumber(katzDeliLine){
  i++
  katzDeliLine.push(i)
  return ('Welcome, you are ticket number' + i)
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length===0){
    return('There is nobody waiting to be served')
  }else{
    return('Currently serving ticket number'+ katzDeliLine.shift())
  }
}
