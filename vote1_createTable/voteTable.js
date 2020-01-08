//vtb : vote table body
//vth : vote table head

var col_len = 2; //열 길이
var rownum = 2;
var colnum = 2;

function add_row() {
    var vtb = document.getElementById('voteTbody');
    var row = vtb.insertRow(-1);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = '항목' + rownum;
    rownum++;

    // var vth = document.getElementById('voteThead');
    // var col_len = vth.rows[0].cells.length;
    // for (i = 1; i < col_len; i++) {
    //     var cell_ = row.insertCell(i);
    //     cell_.innerHTML = '투표인원';
    // } //이 코드는 안 돼서 따로 col_len 변수를 만들었다.

    for (i = 1; i < col_len; i++) {
        var cell_ = row.insertCell(i);
        cell_.innerHTML = '투표인원';
    }
    
}

function add_col() {
    col_len++;
    var vtb = document.getElementById('voteTbody');
    for (i = 0; i < vtb.rows.length; i++) {
        var cell_ = vtb.rows[i].insertCell(-1);
        cell_.innerHTML = '투표인원';
    }
    var vth = document.getElementById('voteThead');
    var cell_h = vth.insertCell(-1);
    cell_h.innerHTML = '항목'+colnum;
    colnum++;
}

function del_row() {
    var result = confirm('마지막 행을 삭제합니다.');
    if(result==true) {
        rownum--;
        var vtb = document.getElementById('voteTbody');
        if(vtb.rows.length < 1) return;
        vtb.deleteRow(vtb.rows.length - 1);
    }
}

function del_col() {
    var result = confirm('마지막 열을 삭제합니다.');
    if(result==true) {
        colnum--;
        col_len--;
        var vtb = document.getElementById('voteTbody');
        var vth = document.getElementById('voteThead');

        vth.deleteCell(-1);
        for (i = 0; i < vtb.rows.length; i++) {
            vtb.rows[i].deleteCell(-1);
        }
    }
}

function del_all() {
    var result = confirm('초기화합니다.');
    if(result==true) {
        while(rownum > 2) {
            rownum--;
            var vtb = document.getElementById('voteTbody');
            if(vtb.rows.length < 1) return;
            vtb.deleteRow(vtb.rows.length - 1);
        }
        while(colnum > 2) {
            colnum--;
            col_len--;
            var vtb = document.getElementById('voteTbody');
            var vth = document.getElementById('voteThead');
    
            vth.deleteCell(-1);
            for (i = 0; i < vtb.rows.length; i++) {
                vtb.rows[i].deleteCell(-1);
            }
        }
        return;
    }
}