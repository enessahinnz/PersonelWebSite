//* LOG
// console.log("Loglama");

//*  WARNING
// console.warn("Warning");

//* INFO
// console.info("Info");

//* ERROR
// console.error("Error");

////////////////////////////////////////////////////////
// VAR (Global)
// var kelime="Js Öğreniyorum JS";
// console.log(kelime);
// alert(kelime)

//* hoisting
// kelime44="Kelimeler";
// var kelime44;

// var sayi = 44;
// console.log(sayi);

// var sayi=44.23;
// console.log(sayi);

// var karar=true;
// console.log(karar);

//* LET
// let kelime2="Math2"
// console.log(kelime2);

// let kelime3="Math3"
// console.log(kelime3);
// kelime3="Math33333"
// console.log(kelime3);

//* CONST
// const kelime4="Math4"
// console.log(kelime4);

// const kelime5="Math5"
// console.log(kelime5);

// yazamazsınız.
// kelime5="Math5"
// console.log(kelime5);
/////////////////////////////////////////////////////////////
//* OPERATORS

// let number1=11;
// let number2=2;

//* let number3=11,number4=2;
// console.log(number1+number2);
// console.log(number1-number2);
// console.log(number1*number2);
// console.log(number1/number2);
// console.log(number1%number2);
// console.log(number1**number2);

//* && VE ||VEYA  ! DEĞİL > >= < <=
// = Atama
// == Eşittir (Türüne bakmaksızın)
// === Eşittir (Türüne bakarak)

///////////////////////////////////////////////////////////////
//*  Kullanıcıdan veri almak
// let user1=Number(prompt("Lütfen 1.sayıyı giriniz")) ;
// let user2=parseInt(prompt("Lütfen 2.sayıyı giriniz"));
// console.log(user1+user2);
// console.log(user1-user2);
// console.log(user1*user2);
// console.log(user1/user2);
// console.log(user1%user2);
// console.log(user1**user2);

/////////////////////////////////////////////////////////
//* MATH
// let user=Number(prompt("Lütfen 1.sayıyı giriniz"));

// console.log("PI: "+Math.PI);
// console.log("E: "+Math.E);
// console.log("Mutlak: "+Math.abs(user));
// console.log("Karekök: "+Math.sqrt(user));

// console.log("Üslü: "+Math.pow(user,2));
// console.log("Üslü: "+(user**2));

// console.log("Yuvarla: "+Math.round(7.3));
// console.log("Yuvarla: "+Math.round(7.5));

// console.log("Aşağı Yuvarla: "+Math.floor(8.9));
// console.log("Yukarı Yuvarla: "+Math.ceil(8.1));

// console.log("Sin: "+Math.sin(45));

// console.log("Rastgele: "+Math.random());
// console.log("Rastgele: "+Math.random()*4+1);
// console.log("Rastgele: "+Math.floor(Math.random()*4+1));

/////////////////////////////////////////////////////////
//* TYPEOF
// let variable1=44
// console.log(typeof variable1);

// //variable1="44";
// variable1=String(44);
// console.log(typeof variable1);

// variable1=true;
// console.log(typeof variable1);

// variable1=()=>{};
// console.log(typeof variable1);

/////////////////////////////////////////////////////////
/// UNDEFINED
//let data;
//console.log(data);

/////////////////////////////////////////////////////////
//* FUNCTION
//* 1-) parametresiz Returnsuz
// function parametresizReturnsuz(){
//     console.log("Parametresiz Returnsuz");
// }
// parametresizReturnsuz();

//* 2-) parametresiz Returnsuz
// function parametreliReturnsuz(adi,soyadi,memleket){
//     console.log("Parametreli Returnsuz: "+adi+" "+soyadi+" "+memleket);
// }
// parametreliReturnsuz("Hamit","Mızrak","Malatya");

//* 3-) parametresiz Returnsuz
// function parametresizReturnlu(){
//    return "Parametresiz Returnlu";
// }
// const data3=parametresizReturnlu();
// console.log(data3);

//* 4-) parametresiz Returnsuz
// function parametreliReturnlu(adi,soyadi,memleket){
//     return "Parametresiz Returnlu: "+adi+" "+soyadi+" "+memleket;
//     return `Parametresiz Returnlu: ${adi} ${soyadi} ${memleket}`;
//  }
//  const data4=parametreliReturnlu("Hamit","Mızrak","Malatya");
//  console.log(data4);

//////////////////////////////////////
//* Immedia Function
// (function (){
//     console.log("Immedia Anonymous Function");
//  })();

//  (()=>{
//     console.log("Immedia Arrow Function");
//  })();

//* NORMAL
//  function normalFunction(){
//     console.log("normal Function");
//  }
//  normalFunction();

//*  // Anonymous Function
// const anonymousFunction = function (){
//     console.log("anonymous Function");
//  }
//  anonymousFunction();

//*   // arrow Function
//   const arrowFunction =  ()=>{
//     console.log("arrow  Function");
//  }
//  arrowFunction()

/*
let age = 5;

if (age >= 18) {
  console.log("Yetişkindir.");
} else {
  console.log("Yetişkin Değildir.");
}

do {
  console.log("do while döngü");
} while (age < 4);

const number = 5;

switch (number) {
  case 2:
    console.log("sayı: 2 eşittir");
    break;
  case 1:
    console.log("sayı: 1 eşittir");
    break;
  case 3:
    console.log("sayı: 3 eşittir");
    break;
  case 4:
    console.log("sayı: 4 eşittir");
    break;
  case 5:
    console.log("sayı: 5 eşittir");
    break;

  default:
    console.log("Sayı 5'ten farklıdır");
    break;
}

const callBackFunction = () => {
  let hesapla = (x, y, callBack) => {
    let result = x + y;
    callBack(result);
  };
  let goster = (data) => {
    console.log("Sonuç: " + data);
  };

  hesapla(5, 3, goster);
};

callBackFunction();
*/
///////////////////////////////////////
/*
//* Array
let diziFunction = () => {
  let dizi = [1, 4, 3, 5, 6, 2, 7];
  //dizi.sort()
  //dizi.sort().reverse()
  console.log(typeof dizi);
  console.log(dizi);
  console.log(dizi.length);
  console.log(dizi[0]);
  console.log(dizi[5]);
  console.log(dizi[dizi.length - 1]);
  console.log(dizi.toString().concat("merhabalar"));
  console.log(dizi.join("+"));
  console.log(dizi.fill("Malatya", 0, 2));
};
*/
///////////////////////////////////////////
//* CLASS
/*
const classExample=()=>{

  class Person {

    // constructor 
    constructor( name, age ) {
      this.name = name;
      this.age = age;
    }

    // Function
    greet(){
      console.log( `Merhaba ${this.name} yaşım ${this.age}` );
    }
  } //end class

  let personData1=new Person("isim-1",6);
  personData1.greet();
}

//classExample()
*/

const greek = () => {
  alert("Enes Sahin");
};
