document.addEventListener('DOMContentLoaded', function(){
    page_load_finish();
});

function page_load_finish(){
    // timestamp to datetime clicked listener
    transfer_button1 = document.getElementById('button_timestamp');
    transfer_button1.addEventListener('click', timestamp_to_datetime_listener)

    // datetime to timestamp clicked listener
    transfer_button2 = document.getElementById('button_datetime');
    transfer_button2.addEventListener('click', datetime_to_timestamp_listener)

    // copy datetime
    copy_button1 = document.getElementById('copy_datetime');
    copy_button1.addEventListener('click', copy_datetime)

    // copy timestamp
    copy_button2 = document.getElementById('copy_timestamp');
    copy_button2.addEventListener('click', copy_timestamp)


    date = new Date(Date.now());
    timestamp=Math.floor(date/1000)
    datetime=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    document.getElementById("current_timestamp").innerHTML =datetime
    document.getElementById("current_datetime").innerHTML  =timestamp

    //realtime thread
    var worker = new Worker('worker.js');
    worker.postMessage('Hello World');
    worker.onmessage = function (parameter) {
    document.getElementById("current_timestamp").innerHTML  =parameter.data.datetime
    document.getElementById("current_datetime").innerHTML  =parameter.data.timestamp

}

}

function timestamp_to_datetime_listener(){
    input_timestamp_value=document.getElementById("input_timestamp").value
    if(input_timestamp_value){
        var date = new Date(parseInt(input_timestamp_value,10)*1000);
        var datetime=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
        document.getElementById("transfer_datetime").innerHTML  =datetime
    }
}

function datetime_to_timestamp_listener(){
    input_datetime_value=document.getElementById("input_datetime").value;
    if (input_datetime_value){
        timestamp = (new Date(input_datetime_value).getTime())/1000;
        document.getElementById("transfer_timestamp").innerHTML=timestamp;
    }
}

function copy_datetime(){
    datetime_value=document.getElementById("current_timestamp").innerHTML
    navigator.clipboard.writeText(datetime_value);
}

function copy_timestamp(){
    datetime_value=document.getElementById("current_datetime").innerHTML
    navigator.clipboard.writeText(datetime_value);
}
