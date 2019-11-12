function create_tab() {
    x = document.getElementById("width").value;
    y = document.getElementById("height").value;
    x = 550;
    y = 200;
    var tab = document.getElementsByTagName("table");
    if (tab.length === 0) {
        if ((x > 0) & (y > 0)) {
            var table = document.createElement("table");
            table.id = "table_id";
            table.style.width = x + "px";
            table.style.height = y + "px";
            table.setAttribute("border", "1");
            table.style.margin = "10px";
            var tRow = [];
            var tData1 = [];
            var in1 = [];
            var btn1 = [];

            var tData2 = [];
            var in2 = [];
            var btn2 = [];

            var tData3 = [];
            var in3 = [];
            var btn3 = [];

            for (i = 0; i < 6; i++) {
                tRow[i] = document.createElement("tr");

                tData1[i] = document.createElement("td");
                tData1[i].id = "tData1_" + i;
                in1[i] = document.createElement("input");
                in1[i].type = "text";
                in1[i].class = "btn";
                in1[i].id = "inp" + i;
                in1[i].placeholder = "Textare";
                tData1[i].appendChild(in1[i]);
                btn1[i] = document.createElement("button");
                btn1[i].type = "button";
                btn1[i].class = "btn1";
                btn1[i].id = "btnx" + i;
                btn1[i].innerHTML = "Submit";

                btn1[i].onclick = function() {
                    des(this.id);
                };
                tData1[i].appendChild(btn1[i]);
                //tData.textContent = x;
                tRow[i].appendChild(tData1[i]);
                tData2[i] = document.createElement("td");
                tData2[i].id = "tData2_" + i;
                in2[i] = document.createElement("input");
                in2[i].type = "text";
                in2[i].class = "btn";
                in2[i].id = "inp_" + i;
                in2[i].placeholder = "Textare";
                tData2[i].appendChild(in2[i]);
                btn2[i] = document.createElement("button");
                btn2[i].type = "button";
                btn2[i].style.width = "30%";
                btn2[i].class = "btn1";
                btn2[i].innerHTML = "Submit";
                btn2[i].id = "btnx_" + i;
                btn2[i].onclick = function() {
                    des2(this.id);
                };
                tData2[i].appendChild(btn2[i]);
                //tData.textContent = x;
                tRow[i].appendChild(tData2[i]);

                tData3[i] = document.createElement("td");
                in3[i] = document.createElement("input");
                in3[i].type = "text";
                in3[i].class = "btn";
                in3[i].id = "inp3_" + i;
                in3[i].placeholder = "Textare";
                tData3[i].appendChild(in3[i]);
                tData3[i].id = "tData3_" + i;
                btn3[i] = document.createElement("button");
                btn3[i].type = "button";
                btn3[i].class = "btn1";
                btn3[i].innerHTML = "Submit";
                btn3[i].id = "btnxn_" + i;
                btn3[i].onclick = function() {
                    des3(this.id);
                };
                tData3[i].appendChild(btn3[i]);
                //tData.textContent = x;
                tRow[i].appendChild(tData3[i]);
                table.appendChild(tRow[i]);
            }
            document.body.appendChild(table);
            document.getElementById("form1").style.display = "none";
            document.getElementById("block1").style.display = "block";
            document.getElementById("caption").style.display = "block";
            document.getElementById("delete").style.display = "block";
            document.getElementById("delete_tab").style.display = "block";
        } else {
            alert("Pleasure type valid number!");
        }
    } else {
        if ((x > 0) & (y > 0)) {
            tab[0].style.width = x + "px";
            tab[0].style.height = y + "px";
            document.getElementById("form1").style.display = "none";
            document.getElementById("block1").style.display = "block";
            document.getElementById("caption").style.display = "block";
            document.getElementById("delete").style.display = "block";
            document.getElementById("delete_tab").style.display = "block";
        } else {
            alert("Pleasure type valid number!");
        }
    }
}

function change() {
    console.log("Dfdsf");
    tab = document.getElementById("width2");
    tab2 = document.getElementById("css");
    dict = [
        "none",
        "hidden",
        "dotted",
        "dashed",
        "solid",
        "double",
        "groove",
        "ridge",
        "inset",
        "outset",
        "inherit"
    ];
    text = "Применить";

    if (tab.value > 100) {
        table = document.getElementsByTagName("table");
        table[0].style.width = tab.value + "px";
        text = text + " " + tab.value + "px";
    }
    for (i = 0; i < dict.length; i++) {
        if (tab2.value === dict[i]) {
            table = document.getElementsByTagName("table");
            table[0].style["border-style"] = tab2.value;
            text = text + " " + tab2.value;
        }
    }
    if (text != "Применить") {
        btn = document.getElementById("button1");
        btn.innerHTML = text;
    }
}

function add_caption() {
    table = document.getElementsByTagName("table");
    txt = document.getElementById("cap_text");
    var cap = document.createElement("caption");
    cap.innerHTML = txt.value;
    table[0].appendChild(cap);
}

function des(clicked_id) {
    i = Number(clicked_id.replace(/^\D+/g, ""));
    console.log(i, x, clicked_id);
    x = document.getElementById("inp" + i);

    tData = document.getElementById("tData" + i);
    console.log(i, x, clicked_id);
    if (x) {
        if (tData) {
            tData.textContent = x.value;
        }
    }
}

function des2(clicked_id) {
    i = Number(clicked_id.replace(/^\D+/g, ""));
    console.log(i, x, clicked_id);
    x = document.getElementById("inp_" + i);

    tData = document.getElementById("tData_" + i);
    console.log(i, x, clicked_id);
    if (x) {
        if (tData) {
            tData.textContent = x.value;
        }
    }
}

function des3(clicked_id) {
    i = Number(clicked_id.replace(/^\D+/g, ""));
    console.log(i, x, clicked_id);
    x = document.getElementById("inp3_" + i);

    tData = document.getElementById("tData3_" + i);
    console.log(i, x, clicked_id);
    if (x) {
        if (tData) {
            tData.textContent = x.value;
        }
    }
}

function dele() {
    i = document.getElementById("del_text").value;
    console.log(i + 1);
    document.getElementById("table_id").deleteRow(i);
}

function dele_tab() {
    var tables = document.getElementsByTagName("table");
    tables[0].parentNode.removeChild(tables[0]);
    document.getElementById("form1").style.display = "block";
    document.getElementById("block1").style.display = "none";
    document.getElementById("caption").style.display = "none";
    document.getElementById("delete").style.display = "none";
    document.getElementById("delete_tab").style.display = "none";
}

function random_color() {
    var element = document.getElementById(
        "tData" + ran_dom(1, 3) + "_" + ran_dom(1, 5)
    );
    console.log(element);
    element.style.backgroundColor = "red";
}

function ran_dom(min, max) {
    return Math.random() * (max - min) + min;
}