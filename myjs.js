
          var t = null;
          t = setTimeout(time, 1000); 
          function time() {
            clearTimeout(t); 
            dt = new Date();
            var y = dt.getFullYear();
            var mt = dt.getMonth() + 1;
            var day = dt.getDate();
            var h = dt.getHours(); 
            var m = dt.getMinutes(); 
            var s = dt.getSeconds(); 
            document.querySelector(".showTime").innerHTML =
              "Present time：" +
              day +
              "/" +
              mt +
              "/" +
              y +
              "---" +
              h +
              ":" +
              m +
              ":" +
              s;
            t = setTimeout(time, 1000); 
          }

 
          function validateform(){  
            var name=document.myform.name.value;  
            var password=document.myform.password.value; 
            var email=document.myform.email.value;  
            var Snumber=document.myform.Snumber.value;  
              
            if (name==null || name==""){  
              alert("Name can't be blank");  
              return false;  
            }
            if (email==null || email==""){  
              alert("emial can't be blank");  
              return false;  
            }
            if (Snumber==null || Snumber==""){  
              alert("student number can't be blank");  
              return false;  
            }
            if(password.length<6){  
              alert("Password must be at least 6 characters long.");  
              return false;  
              }  
            } 



