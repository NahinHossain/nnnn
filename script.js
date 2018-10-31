function addTasl() {
    var tsk_nem = $('#tsk_nem').val();
    var tsk_dt = $('#tsk_dt').val();
    
    var div = document.createElement("div");
    
    var h2 = document.createElement("h2");
    var h2_text = document.createTextNode('test heading');   //text entered from object list 
    h2.appendChild(h2_text);
    
    var para_m1 = document.createElement('p');
    var h2_text = document.createTextNode('Task COmpleted: ');   //text entered from object list
    para_m1.appendChild(h2_text);
    
    
    var para = document.createElement('p');
    var para_text = document.createTextNode('test date')  // date entered from object list
    para.appendChild(para_text);
    
    
    document.getElementById("task_div").appendChild(node);
}


var x = document.createElement("P");                        // Create a <p> node
var t = document.createTextNode("This is a paragraph.");    // Create a text node
x.appendChild(t);                                           // Append the text to <p>
document.body.appendChild(h2);
document.body.appendChild(para_m1);
document.body.appendChild(para);


var bookself = [
    {
        task :'Brave New World';
        name : 'Aldous Huxley';
    }
    
    {
        task : 'A House for Mr.biswas';
       name  : 'V.S Naload';
    }
    
    {
        task : 'Great Expectatioon';
        name  : 'Charles Dickens';
    }
    
    {
        task : 'Song pf Solomon';
        name  : 'Toni Morrison';
    }  
    ]
    
    
    

