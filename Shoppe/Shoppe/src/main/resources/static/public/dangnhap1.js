function Validator(options){

    var bochuot = $('._1k7-2');
    var ba = $('._1k7-2-1');

    var selestorRule = {};
   //thực hiện validar
     function Valida(inputElement,rule){
       var errorElemet =inputElement.parentElement.querySelector("._1k7-7");
       var erroMessage;
        var Rules = selestorRule[rule.selestor];
        var tru = inputElement.parentElement.querySelector('._1k7-6-1');
        //vòng lặp qua các rule đó
        //Nếu có lỗi sẽ dừng lại
        for(var i=0; i < Rules.length; i++){
            erroMessage = Rules[i](inputElement.value);
            if(erroMessage) break;
        }
       if(erroMessage){
        errorElemet.innerText = erroMessage;
        inputElement.parentElement.classList.add("invalid");
        tru.style.display ="none";
        ba.attr("disabled", true);
        bochuot.attr("disabled", true);

       }else{
          errorElemet.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
          tru.style.display ="flex";
          bochuot.attr("disabled", false);
          ba.attr("disabled", false);
       }
   }

   var formElement = document.querySelector(options.form);
     if(formElement){

       //khi nhấn vào buttom
         formElement.onsubmit = function(e){
           e.preventDefault();
           var isForm = true;
             //lặp qua từng rule để check
             options.rules.forEach(function(rule){
                var inputElement = formElement.querySelector(rule.selestor);
                var isValidator = Valida(inputElement,rule);
                if(isValidator){
                    isForm = false;
                }

             });

             if(isForm){
                 
                 //trường hợp submit js
                 if (typeof options.onSubmit === 'function'){

                   var enbarInput = formElement.querySelectorAll('[name]');
                   console.log(enbarInput);
                   var formVali = Array.from(enbarInput).reduce(function (values, input) {
                      $('.mode2-2').html(input.value);
                       return (values[input.name] = input.value) && values;
                   }, {});
                   options.onSubmit(formVali);
                      formElement.submit(); 
                }
                //Trường hợp submit mặc định
               /* else{
                 
                }*/
             }

       }
     }

     //Lắng nghe các sự kiện rules để xử lý bằng (butttom)
      options.rules.forEach(function(rule){

       //lưu lại các rule trong test
       if(Array.isArray(selestorRule[rule.selestor])){
           selestorRule[rule.selestor].push(rule.test);

       }else{
         selestorRule[rule.selestor]=[rule.test];
        }


       var inputElement = formElement.querySelector(rule.selestor);
       var errorElemet =inputElement.parentElement.parentElement.querySelector("._1k7-7");
       var tru = inputElement.parentElement.querySelector('._1k7-6-1');
       if(inputElement){
             inputElement.onblur = function(){
                 //lấy ra các giá trị của các thẻ input đó
                 //Và test qua nếy có giá trị lỗi thì sẽ trả ra giá trị lỗi
                 Valida(inputElement,rule);
                 console.log(selestorRule[rule.selestor]);

                
             }
             inputElement.oninput = function(){
               errorElemet.innerText = "";
               inputElement.parentElement.classList.remove("invalid");
               tru.style.display ="none";
               bochuot.attr("disabled", false);
               inputElement.setAttribute("value",inputElement.value);
           }
         }
       });
}









Validator.isRequired = function(selestor,message){
 return{
     selestor:selestor,
     test: function(value){
         return value.trim()?undefined : message || 'Vui lòng nhập trường này!'
     }
 };
}
Validator.isPhone = function(selestor,message){
   return{
       selestor:selestor,
       test: function(value){
           var isPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
           return isPhone.test(value) ? undefined : message || 'Số điện thoại không đúng!';        
       }
   };
 }
 Validator.minLength = function(selestor, min){
   return {
     selestor:selestor,
     test : function(value){
       return value.length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} kí tự `;
     }
   }
 } 
 Validator.isPassword =function(selestor,getPassword,message){
   return {
     selestor:selestor,
     test : function(value){
       return value ===getPassword() ? undefined :message ||'Giá trị nhập vào không đúng!';
     }
   }
 }
 
$.ajax