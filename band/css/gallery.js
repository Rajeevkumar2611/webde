function billingFunction() 
{
	if (document.getElementById('same').checked)
	{
    	var shipName=document.getElementById('shippingName');
      	var shipZip=document.getElementById('shippingZip');
      	document.getElementById('billingName').value=shipName.value;
      	document.getElementById('billingZip').value=shipZip.value;
	}
	else
	{ 
		document.getElementById('billingName').value=' ';
		document.getElementById('billingZip').value=' ';
	}
}