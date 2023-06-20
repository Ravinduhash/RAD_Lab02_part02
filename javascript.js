function exercise01(){
    var flowerName = "Lili"
    var x,y,z;
    x = 5;
    y = 6;
    z = x + y;
    let price1 = 100;
    let price2 = 200;
    let total = price1+price2;
    document.writeln("<h1>Exercise 01</h1>");
    document.writeln("1. flower Name: ",flowerName,"<br>");
    document.writeln("2. x: ",x,"<br>y: ",y,"<br>z: ",z,"<br>");
    document.writeln("3. Price1: ",price1,"<br>Price2: ", price2,"<br>Total: ",total);
}

function exercise02_1(){
    var Mark1 = 30;
    var Mark2 = 40;
    var Mark3 = 90;
    var total = Mark1+Mark2+Mark3;
    document.writeln("<h1>Exercise 02</h1>");
    document.writeln("1. total: ",total,"<br>");

    document.writeln("3.Find out the area of a rectangle")


}

function exercise02_2(){
    var name = "Ravindu Hasanaka";
    var age = 23;
    var gender = "Male"
    document.writeln("2. name: ",name,"<br>age: ",age,"<br>gender: ",gender,"<br>");
}

function exercise02_3(x,y){
    document.writeln("The area of the rectangle is ",x*y);
}

function exercise02_4(){
    var a = 10;
    var b = 20;
    document.writeln("a) ",a+=b)
    document.writeln("b) ",a-=b)
    document.writeln("c) ",a+=b)
    document.writeln("d) ",a*=b)
    document.writeln("e) ",a/=b)
    document.writeln("f) ",a%=b)
}

function exercise02_5(){
    var x = 5;
    var y = 4;
    var text1 = "A";
    var text2 = "B";
    if(x>=y){
        document.writeln("x>=y");
    }
    if(x!=y){
        document.writeln("x != y");
    }
    if(text1 < text2){
        document.writeln("text1 < text2");
    }
}

function exercise02_6(){
    var statement1 = "what a very";
    var statement2 = "nice day";

    document.writeln(statement1+statement2);
}

function exercise02_7(){
    var x = 5+5;
    var y = "5" + 5;
    var z = "Hello" + 5;
    
    document.writeln("x: ",x," y: ",y," z: ",z);
}

function area(r){
    document.writeln("The area of the circle is ",3.14*r*r)
}

function perimeter(r){
    document.writeln("The perimeter of the circle is ",2*3.14*r)
}

function volume(x){
    document.writeln("Volume of a Cube is ",x*x*x);
}

function hello(){
    alert("hello , welcome to our paradise");
}

function exercise04_1(){
    const mammal = {
        color : orange ,
        type : cat,
        legs:4,
        name:kitty,
        speed :24
    };

    document.writeln("type: ",mammal.type);
    document.writeln("name: ",mammal.name);
}

function exercise04_2(){
    const person = {
        firstName:"John",
        lastName:"Doe",
        id:5566,
        fullName:function(){
            return this.firstName + " " + this.lastName;
        }
    };
}

function exercise04_3(){
    const triangle = {
        height: 25,
        base: 24,
        color:"red",
        area:function(){
            return (this.height*this.base)/2;
        }
    };
    document.writeln("height:",triangle.height);
    document.writeln("base:",triangle.base);
    document.writeln("color:",triangle.color);
    document.writeln("area:",triangle.area);
}


function exercise05_1(){
    var time = current.getHours();
    if(time<10){
        document.writeln("Good morning")
    }
    else if(time<20){
        document.writeln("Good day");
    }
    else{
        document.writeln("Good evemning");
    }
}

function exercise05_2(x){
    switch(x){
        case "banana":
            alert("Yellow");
            break;
        case "pineapple":
            alert("Orange");
            break;
        case "apple":
            alert("Green");
            break;
    }
}

function exercise05_3(x,y,z){
    if(x>y){
        if(x>z){
            document.writeln(x);
        }
        else{
            document.writeln(z);
        }
    }
    else{
        if(y>z){
            document.writeln(y);
        }
        else{
            document.writeln(z);
        }
    }
}

function exercise05_4(x){
    var count = 1
}