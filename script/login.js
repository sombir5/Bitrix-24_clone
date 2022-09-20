let userdata=JSON.parse(localStorage.getItem("user_data"))||[]

class Login{
    
    login(email,pwd){
        console.log('im inside')
        let crosscheck=this.validateemail(email)&&this.validatepwd(pwd)
        if(crosscheck){
            alert('Login success')
            console.log('Login success')
            window.location.href='index.html'
        }else{
            console.log('Login fail')
            alert('wrong credentials')
        }
    }
    validateemail(email){
        for(let i=0;i<userdata.length;i++){
            if(userdata[i].uemail==email){
                return true
            }
            
        }return false
    }
    validatepwd(pwd){
        for(let i=0;i<userdata.length;i++){
            if(userdata[i].upwd==pwd){
                return true
            }
            
        }return false
    }
}

let clicking=()=>{
    console.log('hey there')
    let mail=document.querySelector('#emailreg').value;
    let pwd=document.querySelector('#pwdreg').value;

    let sign=new Login()
    
    sign.login(mail,pwd)
}

document.querySelector('#registr').addEventListener('click',clicking)

let clicking1=()=>{
    window.location.href='signup.html'
}

document.querySelector('#signbtn').addEventListener('click',clicking1)