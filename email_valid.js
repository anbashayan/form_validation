var sname=document.getElementById("sname").value;
var email=document.getElementById("email").value;
var phonenumber=document.getElementById("phonenumber").value;
var postalcode=document.getElementById("postalcode").value;




function validatemail(){
    if (/[a-zA-Z{2-23}$]/.test(sname)) {
        document.getElementById("alertname").innerHTML = " "
    } else {
        document.getElementById("alertname").innerHTML = "<span style='color:red; font-size: 17px;'>charecters should be 2 to 23</span>";
        
      
    }
    if (/[a-zA-Z!@#$%^&*_0-9]+\@+[a-z{gmail,hotmail,yahoo,outlook}]+\.+[com,co.uk,co.lk]$/gim.test(email)) {
        document.getElementById("alertemail").innerHTML = " "
    } else {
        document.getElementById("alertemail").innerHTML = "<span style='color:red; font-size: 17px;'>Enter a valid email</span>";
        
    
    }
    if (/([10000-90000]{5}$)/.test(postalcode)) {
        document.getElementById("alertzip").innerHTML = "";
        
    } else {
        document.getElementById("alertzip").innerHTML = "<span style='color:red; font-size: 17px;'>Enter a valid zip code</span>";
        
    
    }
    
    if (/[0-9{3}]+\-[0-9]{7}$/.test(phonenumber)) {
        document.getElementById("alertcontact").innerHTML = " "
    } else {
        document.getElementById("alertcontact").innerHTML = "<span style='color:red; font-size: 17px;'>Enter a valid contact number</span>";
        ;
        return false;
    }
}