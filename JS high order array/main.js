const companies=[
{name:"Company One", category:"Finance",start:1981,end:2003},
{name:"Company Two", category:"Retail",start:1992,end:2008},
{name:"Company Three", category:"Auto",start:1999,end:2007},
{name:"Company Four", category:"Retail",start:1989,end:2010},
{name:"Company Five", category:"Technology",start:2009,end:2014},
{name:"Company Six", category:"Finance",start:1984,end:2007},
{name:"Company Seven", category:"Auto",start:1985,end:2009},
{name:"Company Eight", category:"Technology",start:2011,end:2016},
{name:"Company Nine", category:"Retail",start:1981,end:1989}
];

const ages=[33,12,11,34,56,45,78,25,15,18,19,22,23,20,48];


// for(let i=0;i<companies.length;i++)
// {
// 	console.log(companies[i]);
// }

//forEach


companies.forEach(function(company){
	console.log(company);
});


//filter

// let canDrink=[];
// for(let i=0;i<ages.length;i++){
// 	if(ages[i]>=21){
// 		canDrink.push(ages[i]);
// 	}
// }

// console.log(canDrink);

// const canDrink=ages.filter(function(age){
// 	if(age>=21){
// 		return true;
// 	}
// });


const canDrink=ages.filter(age => age>=21);
console.log(canDrink);

const retail=companies.filter(company=> company.category==='Retail');
console.log(retail);

const eightys=companies.filter(company=> (company.start>=1980) && (company.start<1990));
console.log(eightys);

const companyAge=companies.filter(company=> (company.end-company.start >=10));
console.log(companyAge);

//map

// create array of company names
const compName=companies.map(function(company){
	return company.name;
});
console.log(compName);


const testMap=companies.map(company=> `${company.name} [${company.start}-${company.end}]`);

console.log(testMap);

// const squareRoot=ages.map(age=> Math.sqrt(age));
// console.log(squareRoot);

//in case you want to do two operations

const squareRoot=ages
	.map(age=> Math.sqrt(age))
	.map(age=>age*2);

console.log(squareRoot);


//sort

// const sortedComapnies=companies.sort(function(c1,c2){
// 	if(c1.start>c2.start){
// 		return 1;
// 	}
// 	else{
// 		return -1;
// 	}

// });

// shorter form 

const sortedComapnies=companies.sort((a,b)=> (a.start>b.start ? 1 :-1));

console.log(sortedComapnies);

//sort ages

// const ageSort=ages.sort();
// console.log(ageSort);   This will only compare the first digit only .hence this will not return correct order


const ageSort=ages.sort((a,b)=> a-b);
console.log(ageSort);


//reduce

// let ageSum=0;
// for(let i=0;i<ages.length;i++){
// 	ageSum+=ages[i];
// }

// const ageSum=ages.reduce(function(total,age){
// 	return total+age;
// },0);

const ageSum=ages.reduce((total,age)=> total+age,0);

console.log(ageSum);

const totalYears=companies.reduce((total,company)=>total+(company.end-company.start),0);
console.log(totalYears);

// combine methods
const combined=ages
	.map(age=> age*2)
	.filter(age=> age>=40)
	.sort((a,b)=>a-b)
	.reduce((a,b)=>a+b,0);

console.log(combined);


