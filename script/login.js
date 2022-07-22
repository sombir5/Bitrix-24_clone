let userdata=JSON.parse(localStorage.getItem("user_data"))||[]

class Login{
    
    login(email,pwd){
        console.log('im inside')
        let crosscheck=this.validateemail(email)&&this.validatepwd(pwd)
        if(crosscheck){
            // this.email=email;
            // this.pwd=pwd;
            
            // userdata.push(this)
            // localStorage.setItem("user_data",JSON.stringify(userdata))
            alert('Login success')
            // window.location.href='login.html'
            console.log('Login success')
        }else{
            console.log('Login fail')
            alert('wrong credentials')
        }
    }
    validateemail(email){
        for(let i=0;i<userdata.length;i++){
            if(userdata[i].email==email){
                return true
            }
            
        }return false
    }
    validatepwd(pwd){
        for(let i=0;i<userdata.length;i++){
            if(userdata[i].pwd==pwd){
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