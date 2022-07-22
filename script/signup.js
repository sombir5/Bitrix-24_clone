let userdata=JSON.parse(localStorage.getItem("user_data"))||[]

class Signing{
    constructor(mob,id){
        this.mob=mob;
        this.id=id;
    }
    signup(email,pwd){
        console.log('im inside')
        let crosscheck=this.validateemail(email)&&this.validatepwd(pwd)
        if(crosscheck){
            this.uemail=email;
            this.upwd=pwd;
            
            userdata.push(this)
            localStorage.setItem("user_data",JSON.stringify(userdata))
            alert('signup success')
            console.log('signup success')
            window.location.href='login.html'
            
        }else{
            console.log('signup fail')
            alert('wrong credentials or user does not exist')
        }
    }
    validateemail(email){
        for(let i=0;i<userdata.length;i++){
            if(userdata[i].uemail==email){
                return false
            }
           
        } return true
    }
    validatepwd(pwd){
        for(let i=0;i<userdata.length;i++){
            if(userdata[i].upwd==pwd){
                return false
            }
            
        }return true
    }
}

let clicking=()=>{
    console.log('hey there')
    let mail=document.querySelector('#emailreg').value;
    let pwd=document.querySelector('#pwdreg').value;
    let mob=document.querySelector('#mobreg').value;
    console.log(mail,pwd,mob)
    let id=Math.floor(Math.random()*1000)+1

    let sign=new Signing(mob,id)
    
    sign.signup(mail,pwd)
}

document.querySelector('#registr').addEventListener('click',clicking)