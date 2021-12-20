let str1 = (prompt("Introduce a word"));
let str2 = (prompt("Introduce a word"));

function checkTwoStringsSame(str1, str2) {
    if (str1.toLowerCase() === str2.toLowerCase()){
        alert(true);
    }else {
        alert(false);
    }
}

checkTwoStringsSame(str1, str2);