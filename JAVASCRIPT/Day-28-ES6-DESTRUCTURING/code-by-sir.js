// ! destructuring 
// destructuring is the process of extracting the elements from the array or the properties from an object and storing them in a variable
// ! with array 
// let arr = [10 , 20 , 30 , 40 , 50]
// let [,,,a] = arr;
// console.log(a);

// let arr = [10 , [20 , [30 , [40 , [50]]]]]
// let [,[,[,[,[a]]]]] = arr;
// console.log(a);
// ! with objects 
let obj = {
    name:'abc',
    age:90,
    place:'heaven',
    Died:true,
    hadAGoodLife:false,
    hobbies:['gaming' , 'eating' , 'sleeping'],
    skills:{
        frontend:{
            basic:['html' , 'css' , 'js'],
            advance:['react' , 'vue' , 'next']
        },
        backend:{
            basic:['java'],
            advance:['springboot']
        }
    }
}
let {Died , hobbies:[,a,b] , skills:{frontend:{advance:[s1]}}} = obj
console.log(Died , a , b , s1);


// ! Ques


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
let {user:{profile:{details:{contact:{address:{city:city1 , coordinates:{lat}}} , contact2:{address:{city:city2 , coordinates:{lng}}}}}}} = data;
console.log(city1 , city2 , lat , lng );



//! https://codeshare.io/adpn4B


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
let {environment:{regions:[{services:{database:{credentials:{endpoints:[{host:h1}]}} , cache:{nodes:[{host:h2}]}}}]}} = systemConfig;

console.log(h1);
console.log(h2);
