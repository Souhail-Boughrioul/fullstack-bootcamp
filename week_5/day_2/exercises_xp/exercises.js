// 🌟 Exercise 1 : Giphy API

const fetchGiphy = async (search)=>{
    const api_key = 'llIiDVOUXhTQpAF2FgscknVIlput1LhO';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(search)}&rating=g&api_key=${api_key}`;
    try{
        const response = await fetch(url);
        if(response.ok){
            const result = await response.json();
            console.log(result);
        }else{
            throw new Error(`Error: ${response.status}`)
        }
        
        
    }catch(err){
        console.error('Something went wrong:', err.message)
    }
}

fetchGiphy('hilarious')

// 🌟 Exercise 2 : Giphy API

const fecthGifSun = async (gif) => {
    const api_key = 'llIiDVOUXhTQpAF2FgscknVIlput1LhO';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURIComponent(gif)}&rating=g&api_key=${api_key}&limit=10&offset=2`;
    try{
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            console.log(data);
        }else{
            throw new Error(`Error: ${response.status}`)
        }
    }catch(err){
        console.error('Something went wrong:', err.message)
    }
}

fecthGifSun('sun');


// 🌟 Exercise 3 : Async function

const fetchStarsWars = async ()=>{
    try{
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        if(response.ok){
            const data = await response.json();
            console.log(data.result);
        }else{
            throw new Error((`Error: ${response.status}`))
        }
    }catch(err){
        console.error('Something went wrong:', err.message)
    }
}

fetchStarsWars();

// 🌟 Exercise 4: Analyze

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}
// This function returns a Promise.
// After 2 seconds, it calls resolve('resolved').
// So the promise will resolve with the value 'resolved' after 2 seconds

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();

// Output: calling
//         resolved
