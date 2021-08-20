var a = [1, 2, 3, "hello", null, true, [[{ 1: 0 }]]];
console.log(a.length);
console.log();

var a = [4];
a[1000] = 3;
console.log(a.length);
console.log(a[500]);
console.log(a[0]);
console.log(a[1000]);
console.log();

var a = [4];
a.push(5);
console.log(a.length);
console.log();

var a = [1, 2, 3, 4].indexOf(3);
var a1 = [1, 2, 3, 4].indexOf(100);
var b = [1, 2, 3, 4].join();
var c = [1, 2, 3, 4].concat(2, 3);
console.log(a);
console.log(a1);
console.log(b);
console.log(c);
console.log();

var origin = [1, 2, 3, 4];
var afterConcat = origin.concat([5, 6]);
var spreadOperatorUsed = [...origin, 2, 3];
console.log(origin === afterConcat);
console.log(origin, afterConcat);
console.log("spreadOperatorUsed : " + spreadOperatorUsed);
console.log(spreadOperatorUsed);
console.log();

spreadOperatorUsed.forEach(function (v, i, o) {
  // value, index, object
  console.log(v);
});
console.log();

var func = function (v, i, o) {
  console.log(v);
};
spreadOperatorUsed.forEach(func);
console.log();

var mapped = spreadOperatorUsed.map(function (v) {
  return v * 2; // spreadOperaterUsed의 원소를 돌면서, 값을 변경시킨 후에 새로운 배열로 만들어서 반환한다.
});
console.log(mapped, spreadOperatorUsed);
console.log("\n");

// **************  MDN practice  **************`
var fruits = ["사과", "바나나"];
console.log(fruits.length);

var first = fruits[0]; // 사과
var last = fruits[fruits.length - 1]; // 바나나
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

var newLength = fruits.push("오렌지"); // ["사과", "바나나", "오렌지"]

var last2 = fruits.pop(); // 끝의 오렌지 제거

var first2 = fruits.shift(); // 처음의 사과 제거

var newLength2 = fruits.unshift("딸기"); // 앞에추가

fruits.push("망고"); // ["딸기", "바나나", "망고"]

var pos = fruits.indexOf("바나나"); // 1

var removedItem = fruits.splice(pos, 1); // 항목을 제거하는 방법. ["딸기", "망고"]

var vegetables = ["양배추", "순무", "무", "당근"];
console.log(vegetables);

var pos = 1;
var n = 2;

var removedItems = vegetables.splice(pos, n); // 배열에서 항목을 제거하는 방법 // pos부터 n개의 항목을 제거

console.log(vegetables);
console.log(removedItems);

var shallowCopy = fruits.slice(); // 사본을 만드는 방법
console.log(shallowCopy);

let arr = ["첫 번재 요소입니다", "두 번째 요소입니다", "마지막 요소입니다"];
console.log(arr[0]); // '첫 번재 요소입니다'를 기록
console.log(arr[1]); // '두 번재 요소입니다'를 기록
console.log(arr[arr.length - 1]); // '마지막 요소입니다'를 기록
//console.log(arr.0) // 구문 오류
console.log();

// 1. forEach메서드
// 함수를 배열 요소 각각에 대해 실행 ( 함수가 인자 )
var fruits = ["사과", "바나나"];
fruits.forEach(function (item, index, array) {
  console.log(item, index);
});

const array1 = ["a", "b", "c"];
array1.forEach((element) => console.log(element));
console.log();

// 2. map메서드
// 배열 내의 모든 요소 각각에 대해 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
const array2 = [1, 4, 9, 16];
const map1 = array2.map((x) => x * 2);
console.log(map1);
console.log();

// 3. filter메서드
// 제공된 함수로 구현된 테스트를 통과하는 모든 요소 가 포함된 새 배열 을 반환
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);
console.log();

// for문
let str = "";
for (let i = 0; i < 9; i++) {
  str = str + i;
}
console.log(str);
console.log();

// while문
var n = 0;
var x = 0;

while (n < 3) {
  n++;
  x += n;
  console.log("n = ", n, ", x = ", x);
}
console.log();

// ************object************
var myFriend = {
  key: "value",
  addition: [{ name: "codesquad" }, { age: 2 }],
};
console.log(myFriend.key);
console.log(myFriend["key"]);
console.log(myFriend.addition[0].name, myFriend.addition[1].age);
console.log();

for (value in myFriend) {
  console.log(value);
}
console.log();

for (key in myFriend) {
  console.log(myFriend[key]);
}
console.log();

console.log(Object.keys(myFriend));
console.log();

Object.keys(myFriend).forEach(function (v) {
  console.log(myFriend[v]);
});
