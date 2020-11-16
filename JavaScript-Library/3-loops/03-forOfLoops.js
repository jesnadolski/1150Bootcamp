//FOR OF LOOPS

//Of loops require that your "thing" that you're looping through be iterable - that means it needs to be numbered:

let student = {name: 'Peter', isAwesome: true, degree: 'javascript', week: 1};

for (item of student){
    console.log(item);
}

let catArray = ['tabby', 'british', 'bermese', 'coon', 'ragdoll'];

for( cat of catArray){
    console.log(cat, 'says meow');
}