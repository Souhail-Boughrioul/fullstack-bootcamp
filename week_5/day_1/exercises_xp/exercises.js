//  Exercise 1 : Comparison
const compareToTen = (num)=>{
    return new Promise((resolve,reject)=>{
        if(num <= 10){
            resolve('The num is less or equal to 10');
        }else{
            reject('The num is greater than 10');
        }
    })
}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// In the example, the promise should resolve
compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// Exercise 2 : Promises

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve('success');
  }, 4000);
});

promise.then((result) => console.log(result));

// Exercise 3 : Resolve & Reject

// Promise that resolves with value 3
const resolvedPromise = Promise.resolve(3);

// Promise that rejects with "Boo!"
const rejectedPromise = Promise.reject('Boo!');

// Handling the resolved promise
resolvedPromise.then(value => console.log('Resolved with:', value));

// Handling the rejected promise
rejectedPromise.catch(error => console.log('Rejected with:', error));
