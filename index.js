function showMessage(){
    let name = prompt ("Представьтесь, пожалуйста");
    let massage_to = `Привет, ${name}`;
    alert (massage_to);
}

function calcSum() {
    let a = prompt ('Веедите первое число');
    let b = prompt ('Веедите второе число');

    alert (+a + +b);
}
function calc() {
    let c = prompt ('Веедите первое число');
    let d = prompt ('Веедите второе число');

    alert (+c - +d);
}
function calcDel() {
    let e = prompt ('Веедите первое число');
    let f = prompt ('Веедите второе число');

    alert (+e / +f);
}
function calcUmn() {
    let g = prompt ('Веедите первое число');
    let h = prompt ('Веедите второе число');

    alert (+g * +h);
}