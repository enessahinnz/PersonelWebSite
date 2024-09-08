//* 1-) ES5 Katı Modu
//"use strict";

function myData1() {
  x = 5;
  console.log(x);
}
myData1();

//* 2-) object Methods (nesne metotları: Keys)
function myData2() {
  const person = { name: "Enes", lastname: "Sahin", age: "23" };
  const keys = Object.keys(person);
  console.log(keys);
}
myData2();

//* 3-) object Methods (nesne metotları: Keys)
function myData3() {
  const person = {};

  Object.defineProperty(person, "name", {
    value: "Enes",
    writables: false,
  });
  console.log(person.name);
}
myData3();

//* Array
function arrayData() {
  var data1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return data1;
}

//* 4-) Array (forEach)
function myData4() {
  console.log(arrayData());
  var data2 = arrayData();
  data2.forEach(function (temp) {
    console.log(temp);
  });
}
//* myData4();

//* 5-) Array (map)
function myData5() {
  var data2 = arrayData();
  var temp = data2.map(function (temp) {
    return temp * 2;
  });
  temp.forEach(function (temp) {
    console.log(temp);
  });
}
//myData5();

//* 6-) Array (filter)
function myData6() {
  var data2 = arrayData();
  data2
    .map(function (temp) {
      return temp + 1;
    })
    .filter(function (temp) {
      return temp % 2 == 1;
    })
    .forEach(function (temp) {
      console.log(temp);
    });
}
//myData6();

//* 6-) Array (reduce)
function myData7() {
  var data2 = arrayData();
  var sum = data2.reduce(function (total, number) {
    return total + number;
  }, 0);
  console.log(sum);
}
//myData7();

// 7-) JSON (JavaScript Object Notation)
function myData8() {
  var person = {
    name: "Hamit",
    surname: "Mızrak",
    job: "Master Computer Engineer",
  };

  // String'e çevir
  var jsonToString = JSON.stringify(person);
  console.log(jsonToString.substring(0, 8));

  //
  var stringToJson = JSON.parse(jsonToString);
  console.log(stringToJson.name);
  console.log(stringToJson.surname);
}
//myData8();

// 8-) GET SET
function myData9() {
  var person = {
    name: "Hamit",
    surname: "Mızrak",
    job: "Master Computer Engineer",
    get fullName() {
      return this.name + " " + this.surname + " " + this.job;
    },
    set fullName(name) {
      var splitData = name.split(" ");
      this.name = splitData[0];
      this.surname = splitData[1];
      this.job = splitData[2];
    },
  };

  console.log(person.fullName);
  person.fullName = "Hamit Mızrak Computer";
  console.log(person.name);
  console.log(person.surname);
  console.log(person.job);
}
//myData9();

// 8-) BIND
function myData10() {
  var person = {
    name: "Hamit",
    surname: "Mızrak",
    job: "Master Computer Engineer",
    fullName: function () {
      return this.name + " " + this.surname;
    },
  };

  var student = {
    name: "Mehmet",
    surname: "Xyz",
  };

  var dataBind = person.fullName.bind(student);
  console.log(dataBind());
}
myData10();
