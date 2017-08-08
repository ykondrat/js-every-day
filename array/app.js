const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Jahannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Plank', year: 1858, passed: 1947}
];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick',
                'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire',
                'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
                'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas',
                'Bentesen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano',
                'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi',
                'Berry, Halle', 'Berry, Wendel', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken',
                'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
                'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);

const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

const oldest = inventors.sort((a, b) => {
    const last = a.passed - a.year;
    const next = b.passed - a .year;
    
    return (last > next ? -1 : 1);
});

console.table(oldest);

//const category = document.querySelector('.mw-category');
//const links = Array.from(category.querySelectorAll('a'));
//
//const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));


const alpha = people.sort(function(lastOne, nextOne) {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    
    return (alast > blast ? 1 : -1);
});

console.log(alpha);

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

const transportation = data.reduce(function(obj, item) {
    if (!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return (obj);
}, {});

console.log(transportation);