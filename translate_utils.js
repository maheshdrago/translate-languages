const destroyClickedElement = (event)=>{
    document.body.removeChild(event.target);
}

const toggleButton = document.getElementsByClassName('toggle-button')[0]
    const navbarLinks = document.getElementsByClassName('navbar-links')[0]
    console.log(toggleButton)
    toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
    })

var download_icon = document.getElementById("download-icon");
download_icon.addEventListener('click',()=>{
    saveFile(1);
});

let data = document.getElementById("transliterateDiv");

const saveFile = (flag)=>{
    let data = document.getElementById("transliterateDiv").value;
    let blob_data;
    let extension;
    if(flag==0){
        blob_data = new Blob([data], {type:"text/Doc"});
        extension = 'doc';
    }
    else if(flag==1){
        blob_data = new Blob([data], {type:"text/plain"});
        extension = 'txt';
    }
    
    let link = document.createElement("a");
    
    link.href = window.URL.createObjectURL(blob_data);
    link.download = "deepwali-hindi-typing."+extension;
    link.onclick = destroyClickedElement;

    document.body.appendChild(link);

    link.click();
}

var copyTextareaBtn = document.querySelector('.copy-icon');

copyTextareaBtn.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('#transliterateDiv');
  copyTextarea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});

function dataLoaded()
{
    function init() {

            if (localStorage["hindi"]) {
                document.getElementById('transliterateDiv').value = localStorage["data"]; 
            }
            else{
                console.log("Nothing")
            }
        }
    init();
    
}
data.addEventListener('keypress',counter);
//data.addEventListener('keyup',sendCode);
function sendCode()
{
	localStorage[document.getElementById('transliterateDiv').getAttribute('name')] = document.getElementById('transliterateDiv').value;	 
}

function counter() {

    var value = document.getElementById('transliterateDiv').value;
    if (value.length == 0) {	     
		  document.getElementById('wordCount').innerHTML = 0;
		  document.getElementById('totalChars').innerHTML = 0;
          return;
    }

    var regex = /\s+/gi;
    var wordCount = value.trim().replace(regex, ' ').split(' ').length;
    var totalChars = value.length;
    console.log(value)
    var charCount = value.trim().length;
    var charCountNoSpace = value.replace(regex, '').length;
	      document.getElementById('wordCount').innerHTML = wordCount;
		  document.getElementById('totalChars').innerHTML = charCount;
		  //document.getElementById('charCount').innerHTML = charCount;

		  
	  
};
