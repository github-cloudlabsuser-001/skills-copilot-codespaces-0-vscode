const data = [
    [
        { name: 'John', age: 25 },
        { name: 'Jane', age: 30 }
    ],
    [
        { name: 'Bob', age: 40 }
    ]
];

const names = data.flatMap(array => array.map(item => item.name));
console.log(names); // ["John", "Jane", "Bob"]
