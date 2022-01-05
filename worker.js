addEventListener('message', trigger_by_1sec);

function trigger_by_1sec(){
    setInterval(get_current_datetime,1000);
}
function get_current_datetime(){
    var date = new Date(Date.now());
    var timestamp=Math.floor(date/1000)
    var datetime=date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate()+" "+date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()
    postMessage({
        "datetime":datetime,
        "timestamp":timestamp
    });

}