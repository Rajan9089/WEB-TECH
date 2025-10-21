//! With object

// let arr = [10,20,30,40,50];
// let [,,,a] = arr;
// console.log(a);


// let arr1 = [10,[20,[30,[40,[50]]]]]
// let [,[,[,[,[val]]]]] = arr1;
// console.log(val);

// ! with object
// let obj = {
//     name: 'abc',
//     age: 90,
//     place: 'heaven',
//     Died: true,
//     hadAGoodLife: false,
//     hobbies: ['gaming', 'gambling', 'sleeping', 'eating'],
//     skills: {
//         frontend: {
//             basic: ['html', 'css', 'js'],
//             advance: ['react', 'vue', 'next']
//         },
//         backend: {
//             basic: ['java'],
//             advance: ['springboot']
//         }
//     }
// }

// let { Died, hobbies: [, , val], skills: { frontend: { basic: [, , basicSkill] } }, skills: { backend: { advance: [advaceSkill] } } } = obj;

// console.log(Died);
// console.log(val);
// console.log(basicSkill);
// console.log(advaceSkill);


const data = {
    user: {
        profile: {
            name: "Jane Doe",
            details: {
                age: 30,
                contact: {
                    phone: "123-456-7890",
                    address: {
                        street: "456 Elm St",
                        city: "Metropolis",
                        coordinates: {
                            lat: 40.7128,
                            lng: -74.006
                        }
                    }
                },
                contact2: {
                    phone: "7890-123-456",
                    address: {
                        street: "christ St",
                        city: "NY",
                        coordinates: {
                            lat: 50.7128,
                            lng: -44.006
                        }
                    }
                }
            }
        }
    }
};

// city:city1 -> alias

// let { user:{profile:{details:{contact:{address:{city:city1}}}}} , 

//   user:{profile:{details:{contact2:{address:{city:city2}}}}} ,

//  user:{profile:{details:{contact:{address:{coordinates:{lat}}}}}},
//   user:{profile:{details:{contact2:{address:{coordinates:{lng}}}}}}  } = data;

//     console.log(city1);
//     console.log(city2);
//     console.log(lat);
//     console.log(lng);

// let {user:{profile:{details:{  contact:{address:{city:city1, coordinates:{lat}}}  , contact2:{address:{city:city2, coordinates:{lng}}}   }}}} = data;

// console.log(city1, city2 , lat, lng);






const systemConfig = {
    environment: {
        name: "production",
        regions: [
            {
                id: "us-east-1",
                services: {
                    database: {
                        type: "PostgreSQL",
                        credentials: {
                            user: "admin",
                            pass: "secret123",
                            endpoints: [
                                { host: "db1.useast.example.com", port: 5432 },
                                { host: "db2.useast.example.com", port: 5432 }
                            ]
                        }
                    },
                    cache: {
                        type: "Redis",
                        nodes: [
                            { host: "cache1.useast.example.com", port: 6379 },
                            { host: "cache2.useast.example.com", port: 6379 }
                        ]
                    }
                }
            }
        ]
    },
    logging: {
        level: "debug",
        outputs: {
            console: true,
            file: {
                enabled: true,
                path: "/var/log/app.log",
                rotation: {
                    size: "10MB",
                    interval: "1d"
                }
            }
        }
    }
};

let {environment:{regions:[{services:{   database:{credentials:{endpoints:[{host:h1}]}} , cache:{nodes:[{host:h2}]}    }}]}} = systemConfig;

console.log(h1 );
console.log(h2);








