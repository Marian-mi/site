const hello = (async function () {
    let resObj = await fetch('txt.json',{
        headers: {
            'Content-type': 'json'
        }
    }).then(res => {
        if(!res.ok){
            console.log(resObj.statusText)
        }
        return res.json();
    });
    
    console.log(resObj)
   
})();

if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('service-worker.js').then( () => {
            console.log('registered succesfully')
        })})
}