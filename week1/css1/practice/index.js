//Objects, Modifications,loops in javascript
const person = {
    name: 'Abhishek',
    age: 23,
    address: {
      city: 'New Delhi',
      state: 'NY',
      zip: '10001'
    },
    greet: function() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  };

  //console.log(person.greet())

  const obj1 = {
    userName: 'abhi',
    password: '*****'
  }

  obj1.id = 287283;
  obj1.userName = 'pandey';

  //console.log(obj1);

  let myArr = [
    {
     studenName: "jack",
     studenClass: 6,
     studenSection: "a"
    },
    {
     studenName: "tom",
     studenClass: 6,
     studenSection: "a"
    }
];

//console.log(myArr[1]);


  class Student{
    constructor(name,id,result){
       this.name = name,
       this.id = id,
       this.result = result;

    }
  }

  const newObj = Student('abhi','21wd23i','pass');
  const newObj2 = Student('dev','21wsdd23i','pass');
  const newObj3 = Student('roy','2123wd23i','fail');

  myArr.push(newObj);
  console.log(myArr);
