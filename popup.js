document.addEventListener('DOMContentLoaded', function() {
    var textarea = document.getElementById('note');
    var store_value = function() {
        localStorage.setItem('note', textarea.value);
    };
    var read_value = function() {
        localStorage.getItem('note');
    };
    textarea.onkeydown = function(evt) {
        evt = evt || window.event;
        store_value();
    };
    textarea.onkeyup = function(evt) {
        evt = evt || window.event;
        store_value();
    };
    textarea.value = localStorage.getItem('note');
    
});