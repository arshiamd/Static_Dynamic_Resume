// function loadjson(file,callback){
//     var xhr = new XMLHttpRequest();
//     xhr.overrideMimeType("application/json");
//     xhr.open("GET",file,true);
//     xhr.onreadystatechange = function(){
//         if(xhr.readyState===4 && xhr.status=="200"){
//             callback(xhr.responseText);
//         }
//     };

//     xhr.send(null);
// }

// loadjson("data.json",function(text){
//     var data = JSON.parse(text);
//     console.log(data);
//     basic(data.details);// data is tot info, details is obj to access
//     careerinfo(data.carrerObjective);
//     education(data.educationalQualification);
//     skills(data.technicalskills);
// });

//Using  Fetch-Promise

function loadjson(file){
    return new Promise((resolve,reject) => {
        return fetch(file).then(response=>{
            if(response.ok){
                resolve(response.json());
            }
            else{
                reject(new Error('error'));
            }
        })
    })
}

var newfile = loadjson("data.json");
newfile.then(data=>{
    console.log(data);
    basic(data.details);// data is tot info, details is obj to access
    careerinfo(data.carrerObjective);
    education(data.educationalQualification);
    skills(data.technicalskills);
})

var c1 = document.querySelector(".child-1");

function basic(data1){
   
    var img = document.createElement("img");
    img.src = data1.image;
    c1.appendChild(img);


    var name = document.createElement("h1");
    name.textContent = data1.name;
    c1.appendChild(name);

    var email =document.createElement("a");
    email.href ="mailto:"+data1.email;
    email.textContent = data1.email;
    c1.appendChild(email);

    var number = document.createElement("h4");
    number.textContent = data1.number;
    c1.appendChild(number);

    var address = document.createElement("h2");
    address.textContent = "Address";
    c1.appendChild(address);

    c1.appendChild(document.createElement("hr"));

    var addr = document.createElement("h4");
    addr.textContent = data1.address;
    c1.appendChild(addr);

}

var c2 = document.querySelector(".child-2");

function careerinfo(info1){
    var heading1 = document.createElement("h2");
    heading1.textContent = "Career Objective:";
    c2.appendChild(heading1);

    c2.appendChild(document.createElement("hr"));

    var heading2 = document.createElement("p");
    heading2.textContent = info1.info;
    c2.appendChild(heading2);       

}

function education(edu){
    var heading2 = document.createElement("p");
    heading2.textContent = edu.info;
    c2.appendChild(heading2);    
    
    c2.appendChild(document.createElement("hr"));

    var table1 = document.createElement("table");
    table1.border = "1";

    c2.appendChild(table1);

    tb = "";
    for(i=0;i<edu.length;i++){
        tb+= "<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].Passoutyear+"</td><tr>";
    }

    table1.innerHTML = tb;
}

function skills(skillinfo){
    var hd = document.createElement("h2");
    hd.textContent = "Technical Skills";
    c2.appendChild(hd);
    c2.appendChild(document.createElement("hr"));

    for(i=0;i<skillinfo.length;i++){
        var title = document.createElement("h4");
        title.textContent = skillinfo[i].title;
        c2.append(title);

        var skillul = document.createElement("ul");
        var skillli = document.createElement("li");

        skillli.textContent = skillinfo[i].info;
        skillul.appendChild(skillli);
        c2.appendChild(skillul)



    }

}