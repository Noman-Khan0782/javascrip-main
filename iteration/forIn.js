const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(key);
    // console.log(myObject[key]);
    
    // console.log(`${key} shortcut is for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    // console.log(programming[key]);
}
const map = new Map()
map.set('Pak', "Pakistan")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('Pak', "Pakistan")

for (const key in map) {
    console.log(key);  // not print in this case not use for-in loop use for-of loop
}