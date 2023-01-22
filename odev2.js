let toDoListDOM = document.querySelector("#list")         // call for UL
let inputDOM = document.querySelector("#task")            // call for INPUT AREA
let buttonDOM = document.querySelectorAll(".rightbutton") // call for DELETE BUTTONs


function newElement() {                      
    let liDOM = document.createElement("li") // creating the list item
    if(inputDOM.value == false){             // empty entries are not allowed
        showToast(false)
    } else {
        liDOM.innerHTML = ` ${inputDOM.value} <button onclick="this.parentElement.remove();" type="button" class="rightbutton"><span aria-hidden="true">&times;</span></button>` //adding buttons
        toDoListDOM.append(liDOM)           // adding the new list item to top       
        showToast(true)
        setStorage(liDOM.value)                  
    }
    inputDOM.value = ""                     // reset the entered value
} 

toDoListDOM.addEventListener("click",function(event){  //toggle the done "to do"
        event.target.classList.toggle("checked");
});


function showToast(toaster){                 //Toast Function
    if(toaster == false){
        $(document).ready(function(){        // jquery for toast on fail
            $("#liveToastFail").toast("show");
        })
    } else if(toaster == true){
        $(document).ready(function(){       // jquery for toast on fail
            $("#liveToastSuccess").toast("show");
        })
    }
}

