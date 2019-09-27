function main() {
	var portNum = document.getElementById("Port").value;
	console.log(portNum);
	var items = [
		{port:"20", app:"FTP", note:"File Transfer Protocol, also on port 21"},
		{port:"21", app:"FTP", note:"File Transfer Protocol, also on port 20"},
		{port:"22", app:"SSH", note:"Secure Shell"},
		{port:"23", app:"Telnet", note:"Like SSH but not secure"},
		{port:"25", app:"SMTP", note:"Simple Mail Transfer Protocol"},
		{port:"53", app:"DNS", note:"Domain System Name"},
		{port:"67", app:"DHCP", note:"Dynamic Host Configuration Protocol, also on port 68."},
		{port:"68", app:"DHCP", note:"Dynamic Host Configuration Protocol, also on port 67."},
		{port:"69", app:"TFTP", note:"Trivial File Transfer Protocol"},
		{port:"80", app:"HTTP", note:"Hypertext Transfer Protocol"},
		{port:"110", app:"POP3", note:"Post Office Protocol 3"},
		{port:"123", app:"NTP", note:"Network Time Protocol"},
		{port:"137", app:"NetBIOS", note:"Also on ports 138, and 139"},
		{port:"138", app:"NetBIOS", note:"Also on ports 137, and 139"},
		{port:"139", app:"NetBIOS", note:"Also on ports 137, and 138"},
		{port:"143", app:"IMAP", note:"Internet Message Access Protocol"},
		{port:"161", app:"SNMP", note:"Simple Network Management Protocol, also on port 162"},
		{port:"162", app:"SNMP", note:"Simple Network Management Protocol, also on port 161"},
		{port:"179", app:"BGP", note:"Border Gateway Protocol"},
		{port:"389", app:"LDAP", note:"Lightweight Directory Access Protocol"},
		{port:"443", app:"HTTPS", note:"Hypertext Transfer Protocol over TLS/SSL"},
		{port:"636", app:"LDAPS", note:"Secure LDAP"},
		{port:"666", app:"DOOM", note:"A fun and classic game"},
		{port:"989", app:"FTPS", note:"File Transfer Protocol with TLS/SSL, also on port 990"},
		{port:"990", app:"FTPS", note:"File Transfer Protocol with TLS/SSL, also on port 989"},
	];
	
	var index = items.findIndex(lookFor => lookFor.port==portNum);
	
	if (items[index] == undefined) {
		error();
	} else {
		document.getElementById("name").innerHTML = items[index].app + " - " + items[index].note;
	};
};

function error() {
	alert("Error: That port is unknown.");
};

function alt() {
	var choice = document.getElementById("Port");
	var portNum = choice.options[choice.selectedIndex].value;
	console.log(portNum);
	var items = [
		{port:"20", app:"FTP", note:"File Transfer Protocol, also on port 21"},
		{port:"21", app:"FTP", note:"File Transfer Protocol, also on port 20"},
		{port:"22", app:"SSH", note:"Secure Shell"},
		{port:"23", app:"Telnet", note:"Like SSH but not secure"},
		{port:"25", app:"SMTP", note:"Simple Mail Transfer Protocol"},
		{port:"53", app:"DNS", note:"Domain System Name"},
		{port:"67", app:"DHCP", note:"Dynamic Host Configuration Protocol, also on port 68."},
		{port:"68", app:"DHCP", note:"Dynamic Host Configuration Protocol, also on port 67."},
		{port:"69", app:"TFTP", note:"Trivial File Transfer Protocol"},
		{port:"80", app:"HTTP", note:"Hypertext Transfer Protocol"},
		{port:"110", app:"POP3", note:"Post Office Protocol 3"},
		{port:"123", app:"NTP", note:"Network Time Protocol"},
		{port:"137", app:"NetBIOS", note:"Also on ports 138, and 139"},
		{port:"138", app:"NetBIOS", note:"Also on ports 137, and 139"},
		{port:"139", app:"NetBIOS", note:"Also on ports 137, and 138"},
		{port:"143", app:"IMAP", note:"Internet Message Access Protocol"},
		{port:"161", app:"SNMP", note:"Simple Network Management Protocol, also on port 162"},
		{port:"162", app:"SNMP", note:"Simple Network Management Protocol, also on port 161"},
		{port:"179", app:"BGP", note:"Border Gateway Protocol"},
		{port:"389", app:"LDAP", note:"Lightweight Directory Access Protocol"},
		{port:"443", app:"HTTPS", note:"Hypertext Transfer Protocol over TLS/SSL"},
		{port:"636", app:"LDAPS", note:"Secure LDAP"},
		{port:"989", app:"FTPS", note:"File Transfer Protocol with TLS/SSL, also on port 990"},
		{port:"990", app:"FTPS", note:"File Transfer Protocol with TLS/SSL, also on port 989"},
	];
	
	var index = items.findIndex(lookFor => lookFor.port==portNum);
	
	document.getElementById("name").innerHTML = items[index].app + " - " + items[index].note;
};
