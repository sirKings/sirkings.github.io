


var generate = document.querySelector("#generate");

generate.addEventListener("click", function (){

//grab the input values from the user

var shoulderFront = document.querySelector("#shoulderFront").value;
var shoulderSide = document.querySelector("#shoulderSide").value;
document.querySelector("#shoulderValue").value = shoulderFront;

var sleeveFront = document.querySelector("#sleeveFront").value;
var sleeveSide = document.querySelector("#sleeveSide").value;
document.querySelector("#sleeveValue").value = Number(sleeveFront) + Number(sleeveSide);

var bicepFront = document.querySelector("#bicepFront").value;
var bicepSide = document.querySelector("#bicepSide").value;
document.querySelector("#bicepValue").value = valueCalc(bicepFront,bicepSide);

var wristFront = document.querySelector("#wristFront").value;
var wristSide = document.querySelector("#wristSide").value;
document.querySelector("#wristValue").value = valueCalc(wristFront,wristSide);


var stomachFront = document.querySelector("#stomachFront").value;
var stomachSide = document.querySelector("#stomachSide").value;
document.querySelector("#stomachValue").value = valueCalc(stomachFront,stomachSide);

var waistBellyFront = document.querySelector("#waistBellyFront").value;
var waistBellySide = document.querySelector("#waistBellySide").value;
document.querySelector("#waistBellyValue").value = valueCalc(waistBellyFront,waistBellySide);

var hipsFront = document.querySelector("#hipsFront").value;
var hipsSide = document.querySelector("#hipsSide").value;
document.querySelector("#hipsValue").value = valueCalc(hipsFront,hipsSide);

var frontJacketFront = document.querySelector("#frontJacketFront").value;
var frontJacketSide = document.querySelector("#frontJacketSide").value;
document.querySelector("#frontJacketValue").value = frontJacketFront;

var chestFront = document.querySelector("#chestFront").value;
var chestSide = document.querySelector("#chestSide").value;
document.querySelector("#chestValue").value = valueCalc(chestFront,chestSide);

var halfShoulderFront = document.querySelector("#halfShoulderFront").value;
var halfShoulderSide = document.querySelector("#halfShoulderSide").value;
document.querySelector("#halfShoulderValue").value = halfShoulderFront;

var shoulderFront = document.querySelector("#shoulderFront").value;
var shoulderSide = document.querySelector("#shoulderSide").value;
document.querySelector("#shoulderValue").value = shoulderFront;

var fullBackFront = document.querySelector("#fullBackFront").value;
var fullBackSide = document.querySelector("#fullBackSide").value;
document.querySelector("#fullBackValue").value = fullBackFront;

var halfBackFront = document.querySelector("#halfBackFront").value;
var halfBackSide = document.querySelector("#halfBackSide").value;
document.querySelector("#halfBackValue").value = halfBackFront;

var trouserWaistFront = document.querySelector("#trouserWaistFront").value;
var trouserWaistSide = document.querySelector("#trouserWaistSide").value;
document.querySelector("#trouserWaistValue").value = valueCalc(trouserWaistFront,trouserWaistSide);

var trouserOutseamFront = document.querySelector("#trouserOutseamFront").value;
var trouserOutseamSide = document.querySelector("#trouserOutseamSide").value;
document.querySelector("#trouserOutseamValue").value = trouserOutseamFront;

var trouserInseamFront = document.querySelector("#trouserInseamFront").value;
var trouserInseamSide = document.querySelector("#trouserInseamSide").value;
document.querySelector("#trouserInseamValue").value = valueCalc(trouserInseamSide, trouserInseamFront);

var crotchFront = document.querySelector("#crotchFront").value;
var crotchSide = document.querySelector("#crotchSide").value;
document.querySelector("#crotchValue").value = crotchFront;

var thighFront = document.querySelector("#thighFront").value;
var thighSide = document.querySelector("#thighSide").value;
document.querySelector("#thighValue").value = valueCalc(thighFront,thighSide);
 	
var kneeFront = document.querySelector("#kneeFront").value;
var kneeSide = document.querySelector("#kneeSide").value;
document.querySelector("#kneeValue").value = valueCalc(kneeFront,kneeSide);


 })

//grab the refresh button
var refresh = document.querySelector("#refresh");

//set the button to listen for clicks

refresh.addEventListener("click", function(){

//change the value of all the input boxes back to empty. 
document.querySelector("#shoulderFront").value = "";
document.querySelector("#shoulderSide").value = "";
document.querySelector("#shoulderValue").value = "";

document.querySelector("#sleeveFront").value = "";
document.querySelector("#sleeveSide").value = "";
document.querySelector("#sleeveValue").value = "";

document.querySelector("#bicepFront").value = "";
document.querySelector("#bicepSide").value = "";
document.querySelector("#bicepValue").value = "";

document.querySelector("#wristFront").value = "";
document.querySelector("#wristSide").value = "";
document.querySelector("#wristValue").value = "";


document.querySelector("#stomachFront").value = "";
document.querySelector("#stomachSide").value = "";
document.querySelector("#stomachValue").value = "";

document.querySelector("#waistBellyFront").value = "";
document.querySelector("#waistBellySide").value = "";
document.querySelector("#waistBellyValue").value = "";

document.querySelector("#hipsFront").value = "";
document.querySelector("#hipsSide").value = "";
document.querySelector("#hipsValue").value = "";

document.querySelector("#frontJacketFront").value = "";
document.querySelector("#frontJacketSide").value = "";
document.querySelector("#frontJacketValue").value = "";

document.querySelector("#chestFront").value = "";
document.querySelector("#chestSide").value = "";
document.querySelector("#chestValue").value = "";

document.querySelector("#halfShoulderFront").value = "";
document.querySelector("#halfShoulderSide").value = "";
document.querySelector("#halfShoulderValue").value = "";

document.querySelector("#shoulderFront").value = "";
document.querySelector("#shoulderSide").value = "";
document.querySelector("#shoulderValue").value = "";

document.querySelector("#fullBackFront").value = "";
document.querySelector("#fullBackSide").value = "";
document.querySelector("#fullBackValue").value = "";

document.querySelector("#halfBackFront").value = "";
document.querySelector("#halfBackSide").value = "";
document.querySelector("#halfBackValue").value = "";

document.querySelector("#trouserWaistFront").value = "";
document.querySelector("#trouserWaistSide").value = "";
document.querySelector("#trouserWaistValue").value = "";

document.querySelector("#trouserOutseamFront").value = "";
document.querySelector("#trouserOutseamSide").value = "";
document.querySelector("#trouserOutseamValue").value = "";

document.querySelector("#trouserInseamFront").value = "";
document.querySelector("#trouserInseamSide").value = "";
document.querySelector("#trouserInseamValue").value = "";

document.querySelector("#crotchFront").value = "";
document.querySelector("#crotchSide").value = "";
document.querySelector("#crotchValue").value = "";

document.querySelector("#thighFront").value = "";
document.querySelector("#thighSide").value = "";
document.querySelector("#thighValue").value = "";
 	
document.querySelector("#kneeFront").value = "";
document.querySelector("#kneeSide").value = "";
document.querySelector("#kneeValue").value = "";
})



//function to calculate circumference of an ellipse, ie length of elliptical parameters.
function valueCalc(a , b){
	var val = (Math.sqrt(((a/2 * a/2) + (b/2 * b/2)) / 2)) * 6.284;
	return Math.round(val);
}

function getHeight(){
    var heightTag = document.getElementById('height')
    heightTag.innerHTML = '';
    var userId = document.getElementById('userId').value;
    console.log(userId)
    return firebase.database().ref('/users/' + userId +'/height').once('value').then(function(snapshot) {
        if(snapshot.val() == null){
            heightTag.innerHTML = 'no data found'
        }else{
            var height = snapshot.val().height;
            var unit = snapshot.val().unit;

            switch(unit) {
                case 'cm':
                    if(isNaN(height)){
                        height = height
                    }else{
                       height = height*0.39370 
                    }
                    break;
                case 'ft':
                    if(isNaN(height)){
                        height = height
                    }else{
                       height = height*12
                    }
                    break;
                case 'meters':
                    if(isNaN(height)){
                        height = height
                    }else{
                        height = height*39.370
                    }  
                    break;
                case 'inc':
                    if(isNaN(height)){
                        height = height
                    }else{
                        height = height*1
                    } 
                    break;
                default:
                    height = height
            }
            
            heightTag.innerHTML = height + ' inc'
        }

        
    });
}

function submit() {
  var admin = document.getElementById('admin')
  var notice = document.getElementById('notice')
  notice.innerHTML = ''
  var userId = document.getElementById('userId').value;
  firebase.database().ref('users/' + userId + '/size').update({
    shoulder: document.querySelector("#shoulderValue").value,
    ankle: document.querySelector("#kneeValue").value,
    thigh: document.querySelector("#thighValue").value,
    //crotch: document.querySelector("#crotchValue").value,
    head: document.querySelector("#trouserInseamValue").value,
    trouserLength: document.querySelector("#trouserOutseamValue").value,
    waist: document.querySelector("#trouserWaistValue").value,
    neck: document.querySelector("#halfBackValue").value,
    fullback: document.querySelector("#fullBackValue").value,
    //halfShoulder: document.querySelector("#halfShoulderValue").value,
    chest: document.querySelector("#chestValue").value,
    hips: document.querySelector("#hipsValue").value,
    belly: document.querySelector("#stomachValue").value,
    wrist: document.querySelector("#wristValue").value,
    bicep: document.querySelector("#bicepValue").value,
    sleeve: document.querySelector("#sleeveValue").value,
    unit: 'inc',
    author: admin.innerHTML

  }).then(() => {notice.innerHTML = 'Saved Successfully'})
  .catch((err)=>{
    notice.innerHTML = 'error'
    console.log(err)
  })
}

