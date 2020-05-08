function sprawdz_formularz_1(element) {
    tf=document.forms[element];
    tf.adres_url.style.border='1px solid #A1A3A8';
    tf.nazwa_pl.style.border='1px solid #A1A3A8';
    if(tf.nazwa_pl.value=='') {
        alert('Nazwa sklepu jest wymagana');
        tf.nazwa_pl.focus();
        tf.nazwa_pl.style.border='1px solid  red';
        return 1;
    }
     else if(tf.adres_url.value=='') {
        alert('Adres internetowy sklepu jest wymagany');
        tf.adres_url.focus();
        tf.adres_url.style.border='1px solid  red';
        return 1;
    }
     else if(!iswww(tf.adres_url.value)) {
        alert('Niepoprawny adres internetowy sklepu');
        tf.adres_url.focus();
        tf.adres_url.style.border='1px solid  red';
        return 1;
    }
     else if(tf.kategoria.value=='' || tf.kategoria.value=='0') {
        alert('Wybierz kategoriê podstawow±');
        return 1;
    }
     else if(!tf.zgoda.checked) {
        alert('Akceptacja regulaminu jest warunkiem koniecznym do korzystania z portalu sklepy24.pl');
        tf.zgoda.focus();
        tf.zgoda.style.border='1px solid red';
        return 1;
    }
     else
    return 0;
}



function zaznacz(element, element_2) {
    if(element_2.value!='') element.checked=1;
}

function zaznacz2(element, element_2a, element_2b) {
    if(element_2a.value!='' || element_2b.value!='') element.checked=1;
    else element.checked=0;
}

function ismail(e) {
    return /^[\w\.-]{2,}@[\w\.-]+\.[a-z]{2,5}$/i.test(e)
}

function iswww(e) {
    return /^[htps:/]{0,8}[\w\._-]{1,}\.[^@%]{2,}$/i.test(e)
}

function sprawdz_formularz_2(element) {
    tf=document.forms[element];
    tf.cecha_17.style.border='1px solid #A1A3A8';
    if(tf.cecha_17.value=='' || !ismail(tf.cecha_17.value) ) {
        alert('Adres e-mail sklepu jest wymagany');
        tf.cecha_17.focus();
        tf.cecha_17.style.border='1px solid  red';
        return 1;
    }
     else
    return 0;
}

function glink(address) {
    location.href=address;
}

function g(element) {
    //element ma na celu uruchomienie linku gdy mo¿na (go==1)
    var el=document.getElementById(element);
    if(el.go!=0)
    location.href=el.href;
    el.go=1;
}

function st(element) {
    //element ma na celu zablokowanie linku
    var el=document.getElementById(element);
    el.go=0;
}

function sub(element) {
    var el=document.getElementById(element);
    el.submit();
}

function im1(element) {
    tl=element.src.length;
    extension=element.src.substr(tl-3,3);
    ns=element.src.substr(0,tl-4)+'_over.'+extension;
    element.src=ns;
    return;
}



function im0(element) {
    tl=element.src.length;
    extension=element.src.substr(tl-3,3);
    ns=element.src.substr(0,tl-9)+'.'+extension;
    element.src=ns;
    return;
}

function sprawdz_dlugosc(element, max) {
    if(element.value.length>max) element.value=element.value.substring(0, max);
}

function set_value(element,new_value) {
    //element ma na celu zablokowanie linku
    var el=document.getElementById(element);
    el.value=new_value;
    //alert(el.value);
}

function get_value(element) {
    //element ma na celu zablokowanie linku
    var el=document.getElementById(element);
    return el.value;
}

function set_style(element,style_name,style_value) {
    var el=document.getElementById(element);
    //alert(element);
    if(el){
    	//alert(el.style[style_name]);
    	el.style[style_name]=style_value;
    	//alert(el.style[style_name]);
    }
}

function set_style_class(element,class_value) {
    var el=document.getElementById(element);
    //alert(element);
    if(el){
    	//alert(el.style[style_name]);
    	el.className=class_value;
    	//alert(el.style[style_name]);
    }
}

function ukryj(element) {
    var el=document.getElementById(element);
    if(el) el.style.display='none';
}

function pokaz(element, styl) {
    var el=document.getElementById(element);
    if(styl="") styl="block"
    if(el) el.style.display=styl;
}

function powieksz(element, wysokosc)
{
	var el=document.getElementById(element);
	var w=el.style.height.valueOf()+wysokosc.valueOf();

	el.style.height=w;

	return;
}

function open_link(plik,okno) {
    pop=window.open(plik,okno);
    pop.focus();
}

function open_window(url,wym_x,wym_y,window_name, setscrolly) {
    scrollx=0;
    scrolly=0;
    if((wym_x<=0)||(wym_x>(screen.availWidth-20))) {
        scrollx=1;
        wym_x=screen.availWidth-20;
    }
    if((wym_y<=0)||(wym_y>(screen.availHeight-40))) {
        scrolly=1;
        wym_y=screen.availHeight-40;
    }
    if(setscrolly==true){
    	scrolly=1;
    }
    x=(screen.availWidth-wym_x)/2;
    y=(screen.availHeight-wym_y)/2;
    if(scrollx || scrolly ) scrollbars='scrollbars=yes';
    else scrollbars='scrollbars=no';
    pop=window.open(url,window_name, 'toolbar=no,menubar=no,'+scrollbars+',resizable=no,height='+wym_y+',width='+wym_x+',left='+x+',top='+y);
    pop.focus();
}

// Multiple onload function created by: Simon Willison
// http://simonwillison.net/2004/May/26/addLoadEvent/
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}


function getURL(url, new_window) {
	if(!url){
		url=location.href;
	}
	if(new_window==1){
      pop=window.open(url);
      pop.focus();
	} else {
		location.href=url;
	}
}

function create_link(url, name, target, css_class, on_click){
    var href = '';
    var attributes = 'rel="nofollow"';
    if (url instanceof Array) {
        href = url.join('');
    } else {
        href = url;
    }
    if (css_class!=null) {
        attributes += ' class="'+css_class+'"';
    }
    if (target!=null) {
        attributes += ' target="'+target+'"';
    }
    if (on_click!=null) {
        attributes += ' onclick="'+on_click+'"';
    }
    document.write('<a '+attributes+' href="'+href+'">'+name+'</a>');
}




function reload_with_loader(){
	podmienHtml('content','<p style="text-align: center; margin: 20px;">Od¶wie¿anie...<br /><br /><img src="/lib/js/greybox/indicator.gif" alt="" style="width: 66px; height: 66px;"/></p>');
	location.href=location.href;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}

function getHTTPObject() {
    var http_request = false;
    if (window.XMLHttpRequest) {
        // Mozilla, Safari, ...
        http_request = new XMLHttpRequest();
        if (http_request.overrideMimeType) {
            http_request.overrideMimeType('text/xml; charset=ISO-8859-2');
            // See note below about this line
        }
    }
    else if (window.ActiveXObject) {
        // IE
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        }
        catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            }
            catch (e) {
            }
        }
    }
    return http_request;
}

function glosuj(opinia,glos,id) {
		url='http://www.sklepy24.pl/glosuj_na_opinie.php?o='+opinia+'&v='+glos;
		//url='http://localhost/~sklepy24/glosuj_na_opinie.php?o='+opinia+'&v='+glos;
		cookieValue=readCookie('glosy_na_opinie');
		//alert(cookieValue);
		createCookie('glosy_na_opinie',cookieValue+','+opinia,365);

      var http_request = false;
		http_request=getHTTPObject();
        if (!http_request) {
            return;
        }
        http_request.onreadystatechange = function() {podmienTxt(http_request, id);};
        http_request.open('GET', url+'&ct='+(+new Date()), true);
        http_request.send(null);
        el=document.getElementById(id);
        el.innerHTML='G³osowanie...';
    }

function evalScripts( html )
{
	 var ScriptFragment= '(?:<script.*?>)((\n|\r|.)*?)(?:<\/script>)';
    var matchAll = new RegExp(ScriptFragment, 'img');
    var matchOne = new RegExp(ScriptFragment, 'im');
    var vysl=html.match(matchAll);
    if(vysl)
    {
    for(i=0;i<vysl.length;i++)
    {
     var one=vysl[i].match(matchOne);
     eval(one[1]);
    }
    }
}


function podmienTxt(http_request, id) {


    if (http_request.readyState == 4) {
        if (http_request.status == 200) {
            el=document.getElementById(id);
            evalScripts(http_request.responseText);
           	el.innerHTML=http_request.responseText;
        }
        else {
            alert('There was a problem with the request.');
        }
    }
}

function podmienHtml(id, htmlValue) {


            el=document.getElementById(id);
           	el.innerHTML=htmlValue;
}

function wywolajGet(url, id) {
    //
    var http_request = false;
    http_request=getHTTPObject();
    if (!http_request) {
        return;
    }
    http_request.onreadystatechange = function() {
        podmienTxt(http_request, id);
    }

    http_request.open('GET', url+'&ct='+(+new Date()), true);
    http_request.send(null);
}

function wywolajPost(url, id, parameters) {
    var http_request = false;
    http_request=getHTTPObject();
    if (!http_request) {
        return;
    }
    http_request.onreadystatechange = function() {
        podmienTxt(http_request, id);
    }

    http_request.open('POST', url, true);
    http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http_request.setRequestHeader("Content-length", parameters.length);
    http_request.setRequestHeader("Connection", "close");
    http_request.send(parameters);
}

function submitFormByAjax(formName, url, returnId) {
	elForm=window.document.forms[formName];
	d = new Date();
	var parameters='microTime='+d.getTime();
	for(i=0; i<elForm.length; i++){
		if(elForm.elements[i].type=='radio' || elForm.elements[i].type=='checkbox'){
			if(elForm.elements[i].checked==true){
				parameters+='&'+elForm.elements[i].name+'='+escape(encodeURI(elForm.elements[i].value));
			}
		} else if(elForm.elements[i].type=='select-one'){
			//alert()
			parameters+='&'+elForm.elements[i].name+'='+escape(encodeURI(elForm.elements[i].options[elForm.elements[i].selectedIndex].value));
		} else {
			parameters+='&'+elForm.elements[i].name+'='+escape(encodeURI(elForm.elements[i].value));
		}
	}
	wywolajPost(url,returnId,parameters);
	//return parameters;
}



function wstaw_masowo_html(nazwa, i_od, i_do, html){
	i=i_od;
	el=document.getElementById(nazwa+i);
	while(el && i<=i_do){
      el.innerHTML=html;
      i++;
   	el=document.getElementById(nazwa+i);
   }
}

/* premiumlink */

function premiumlink_kwota_za_klikniecie_check(el){
	el.value=Math.round(el.value*100.0)/100.0;
	if((el.value*1.0)<0.05 || isNaN(el.value*1.0)){
		el.value='0.05';
	}
	return ;
}

function zwieksz_wartosc(nazwa, wartosc){
	el=document.getElementById(nazwa);
	el.value=(el.value*1.0)+wartosc;
	el.onchange();
	return;
}

function wlacz_zakladke(numer){
	var max_iter=20;

	for(i=1;i<=max_iter;i++){

		if(i==numer){
			pokaz('zakladka_'+i+'_on');
			pokaz('zakladka_'+i);
			ukryj('zakladka_'+i+'_off');
		} else{
			ukryj('zakladka_'+i+'_on');
			ukryj('zakladka_'+i);
			pokaz('zakladka_'+i+'_off');
		}
	}
}

function wybierz_product_categories(basename, max_iter, outname, outlistname){
	var outvalue='';
	var outvalue_count=0;
	var lista_kategorii='';
	for(i=1;i<=max_iter;i++){
		var elname=basename+''+i;
		var el=document.getElementById(elname);
		if(el.checked){
			outvalue+=el.value+',';
			outvalue_count++;
			lista_kategorii+=el.title+'<br />';
		}
	}
	if(outvalue_count<=5){
      var el=document.getElementById(outname);
      if(el){
         el.value=outvalue;
         //
         podmienHtml(outlistname,lista_kategorii);
         //alert(lista_kategorii);
         //
         return true;
      }
	} else {
		alert('Uwaga. Maksymalnie mo¿na wybraæ 5 podkategorii');
	}
	return false;
}
