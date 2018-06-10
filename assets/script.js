var name = $('input[name=fio]').val(); 

var adress =$('input[name=adress]').val();

var city =$('input[name=city]').val();

var country =$('input[name=country]').val();

var zipcode =$('input[name=zipcode]').val();

var phone = $('input[name=phone]').val();

var dannie

var otpravka = true;

if(name==""){ 
otpravka = false;
}

if(adress==""){ 
otpravka = false;
}

if(city==""){ 
otpravka = false;
}

if(country==""){
otpravka = false;
}   

if(zipcode==""){
otpravka = false;
}

if(phone ==""){
otpravka = false;
}
dannie = {'polz_name':name, 'polz_adress':adress, 'polz_city':adress, 'polz_country':country, 'polz_zipcode':zipcode, 'polz_phone':phone};

if(otpravka) 
{
$.post('senda.php', dannie, function(otvet){ 
    
rezultat = '<div>'+otvet.text+'</div>';

$("#form_result").hide().html(rezultat).slideDown();

}, 'json');
}