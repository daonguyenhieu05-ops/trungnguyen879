//cách cũ
var employee = {
    name: null,
    age: null,
    setName: function(name){
        this.name = name;
    },
    getName: function(){
        return this.name;
    },
    setAge: function(age){
        this.age = age;
    },
    getAge: function(){
        return this.age;
    }
};
console.log(employee);
employee.setName("Trung");
employee.setAge(19);
console.log(employee.getName());
console.log(employee.getAge());

//cách mới
class Employee {
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

let emp = new Employee();
console.log(emp);
emp.setName("Trung");
emp.setAge(19);
console.log(emp.getName());
console.log(emp.getAge());

//bài 1
const products = [
    { name: 'Bút bi', quantity: 123 },
    { name: 'Bút chì', quantity: 165 },
    { name: 'Bút màu', quantity: 170 },
];

const sumQuantity = (arr) => arr.reduce((sum, item) => sum + item.quantity, 0);
console.log("Tổng số lượng:", sumQuantity(products));

//bài 2
const findMaxQuantity = (arr) => arr.reduce((max, item) => item.quantity > max.quantity ? item : max);
console.log("Sản phẩm có số lượng nhiều nhất:", findMaxQuantity(products));

//bài 3
const productList1 = [
    { name: 'Cá hồi', price: 250 },
];

const productList2 = [
    { name: 'Cá tầm', price: 350 },
    { name: 'Cá lăng', price: 180 },
];

const mergeArrays = (...arrays) => arrays.flat();
console.log("Danh sách sản phẩm ghép:", mergeArrays(productList1, productList2));