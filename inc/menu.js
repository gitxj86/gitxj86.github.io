var menuTimer = null;
var domainQueryAuthInput = false;

function menuOver(v){
	menuTimer = setTimeout(function(){
		do_exchange_menu(v);
	}, 20);
}

function menuOut(v){
	//clearTimeout(menuTimer);
	document.getElementById("mySubMenu_" + v).style.display = 'none';
}

function do_exchange_menu(v){
	//debugger;
	var myMainMenu = document.getElementsByName('myMainMenu[]');
	for(var i=0;i<myMainMenu.length;i++){
		document.getElementById("mySubMenu_" + i).style.display = i==v ? "block" : "none";
		myMainMenu[i].className = i==v ? "nav_on" : "nav_off";
	}
}

/*   help   */
function switch_mail_Tab(objTab){
	f_id="mail_box_list_";
	li_list=objTab.parentNode.getElementsByTagName("li");
	tagClass="mail_tab_";
	tagIndex=-1;
	for (i=0;i<li_list.length;i++){
		if (li_list[i]==objTab)
		{
			tagIndex=i;
			break;
		}
	}
	if (tagIndex==-1)
	{
		return;
	}


	for (i=0;i<li_list.length;i++){
		
		z_tagClass=tagClass+"center_";
		objTagDiv=document.getElementById(f_id+(i+1));
		
		objTag=li_list[i];

		if (tagIndex==i){
			z_tagClass=z_tagClass+"on";
			objTagDiv.style.display='block';
			
			
		}else{
			z_tagClass=z_tagClass+"off";
			objTagDiv.style.display='none';
		}
		objTag.className=z_tagClass;
		
	}
}


