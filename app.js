'use strict';

let fileJson = require('./a.json')


let jsonToArr = [fileJson];

jsonToArr.forEach(eachProp =>
    {
        console.log('name : ', eachProp.name);
        console.log('pets : ', eachProp.pets);
        console.log('childern : zach :' , eachProp.children.zach.age , '      allie :',eachProp.children.allie.age );
        console.log('job : ', eachProp.job);
    });



jsonToArr.filter ( eachPet =>
    {
        if (eachPet.pets)
        {
            eachPet.pets.filter(r =>
                {
                    let indx = r.charAt(0);
                    if ( indx === 'R')
                    console.log('Pets Starts With R : ', r);
                })
        }
    });
