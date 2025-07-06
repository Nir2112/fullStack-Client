
function creat(){
    let em=0 ,fn=0 ,ln=0 ,un=0 ,ps=1 ,cps=0;

    let email=document.getElementById("email").value;
    if(email.indexOf('@') < 2 || email.indexOf('.') < (email.indexOf('@')+2))
        em=1;

    let fname=document.getElementById("fname").value;
    for(i=0;i<fname.length;i++)
        if(!(fname[i]>="A" && fname[i]<="Z" || fname[i]>="a" && fname[i]<="z") || fname[i]==" ")
            {
                fn=1;
                break;
            }

    let lname=document.getElementById("lname").value;
    for(i=0;i<fname.length;i++)
        if(!(lname[i]>="A" && lname[i]<="Z" || lname[i]>="a" && lname[i]<="z") || lname[i]==" ")
            {
                ln=1;
                break;
            }        

    let uname=document.getElementById("s_username").value;
    for(let i=0; i < uname.length; i++)
        if( uname[i]==" " || !(uname.length<11))
            {
                un=1;
                break;
            }
              
    let psw=document.getElementById("s_password").value;
    let len=0,num=0,lat=0,LAT=0;
    
    for(let i=0; i < psw.length; i++){

        if(psw.length>12||psw.length<=0){
            len=1;
            break;
            
        }

        else {
            if(psw[i]>="A" && psw[i]<="Z") {
                LAT=1;
                
            }
            if(psw[i]>="a" && psw[i]<="z"){
                lat=1;
                
            }
            if(psw[i]>="0" && psw[i]<="9"){
                num=1;
                
            }
        }
        
    }
    
    /*alert("len="+len+", lat="+lat+", num="+num+", LAT="+LAT);*/
    if(len!=0)
        alert("yuor password length is not good");

    else if(LAT==1&&lat==1&&num==1)
        ps=0;       
    else
        alert("your password is not good")


    let conpsw=document.getElementById("confirm_s_password").value;
    if(conpsw!=psw){
        cps=1;
        alert("your conffirm password dont match");
    }

    if(em==0 &&fn==0 &&ln==0 &&un==0 &&ps==0 &&cps==0){
        let str="WELCOME "+fname+" your acount has been successfully created. you can login now";
        document.getElementById("wel").innerHTML=str;
    }

    if(em==1)
        alert("There is a problem with your email");

    if(fn==1||ln==1)
        alert("There is a problem with your first name or last name");

    if(un==1)
        alert("There is a problem with your user name");
        
}

function gotoo(){
    window.open("buy_loggin.html","_self")
}


let adminem=["nir@myb.com","yulia@myb.com"];
let admin=["nir2025","yulia2025"];
let adminpass=["Nir123456","Yulia654321"];

function login(){

    let w=0;
    let em=document.getElementById("lemail").value;
    let na=document.getElementById("username").value;
    let psw=document.getElementById("password").value;
  
    for(let i=0; i<2; i++){
        if(em==adminem[i] && na==admin[i]  && psw==adminpass[i])
            window.open("buy.html","_self");
        else
          w++;
    }
    
    if(w==2)
        alert("that user dont exists")
}

/*buy*/

let item=["Mona Lisa","Angelic Landscape","Storm on the Lake of Galilee","Last Supper"
    ,"The Persistence of Memory","Landscape with an Obelisk","The Scream","Guernica",
    "The Starry Night","Sunflowers"];
let price=[80000000,20000000,30000000,80000000,60000000,70000000,50000000,10000000,70000000,60000000]

let wallet=200000000;

function sel(){
    
    var item2 = document.getElementById("mySelect").selectedIndex;
    document.getElementById("res1").innerHTML=item[item2]+" vlaue is: "+price[item2]+"$";
    if(wallet>=0)
        document.getElementById("res").innerHTML="you have in your wallet: "+wallet+"$";
    else
        document.getElementById("res").innerHTML="you have in your wallet: 0$ :("
}

function buy(){

    var item2 = document.getElementById("mySelect").selectedIndex;

    if(wallet>price[item2])
        wallet-=price[item2];

    if(wallet>0)
        document.getElementById("res2").innerHTML="Thank you for your purchase!<br> You have money left in your wallet: "+wallet+"$";
    /*else 
        document.getElementById("res2").innerHTML="You do not have enough money to make the purchase:(";*/
}

function wal(){  
      document.getElementById("res").innerHTML="you have in your wallet: "+wallet+"$";
}