var viewContainer = document.getElementById ("viewContainer");

const loadData = async (searchTerm) => {
    const dataResponse = await fetch (`https://api.attackontitanapi.com/characters/?name=${searchTerm}`);
    const titanResponse = await fetch (`https://api.attackontitanapi.com/titans/?name=${searchTerm}`);

    if (dataResponse.ok){
        const data = await dataResponse.json();
        viewContainer.innerHTML = `
    
        <div class="row justify-content-center align-items-center nameSection">
                <p class="viewName">${data.results[0].name}</p> 
             </div>
    
            <div class="row charInfo">
                
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
                    <img src="${data.results[0].img}" class="img-fluid viewPicture" style="height: 400px;" alt="character-picture">
                </div>
    
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 " style="border-radius: 30px 30px 30px 30px; background-color: rgba(255, 255, 255, 0.507); height: 380px; width: 500px;">
    
                    <div style="padding-top: 30px; font-size: 25px;"> 
                     <p>  Species: ${data.results[0].species} </p>
                     <p>  Gender: ${data.results[0].gender} </p>
                     <p>  Age: ${data.results[0].age} </p>
                     <p>  Status: ${data.results[0].status} </p>
                     <p>  Occupation: ${data.results[0].occupation} </p>
                     <p>  Residence: ${data.results[0].residence} </p>
                    </div>
    
                </div>
     
            </div>
        `
    } else if (titanResponse.ok){
        const data = await titanResponse.json();
        viewContainer.innerHTML = `
    
        <div class="row justify-content-center align-items-center nameSection">
                <p class="viewName">${data.results[0].name}</p> 
             </div>
    
            <div class="row charInfo">
                
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 d-flex justify-content-center align-items-center">
                    <img src="${data.results[0].img}" class="img-fluid viewPicture" style="height: 400px;" alt="character-picture">
                </div>
    
                <div class="col-12 col-sm-12 col-md-6 col-xl-6 " style="border-radius: 30px 30px 30px 30px; background-color: rgba(255, 255, 255, 0.507); height: 380px; width: 500px;">
    
                    <div style="padding-top: 30px; font-size: 25px;"> 
                     <p>  Height: ${data.results[0].height} </p>
                     <p>  Abilities: ${data.results[0].abilities} </p>
                     <p>  Allegiance: ${data.results[0].allegiance} </p>
                    </div>
    
                </div>
     
            </div>
        `
    }
}
const query = window.location.search;
const urlparams = new URLSearchParams(query);

if (urlparams.has('result')) {
    loadData (urlparams.get('result'));
}

else {
    document.getElementById ('viewContainer').innerHTML = "Character not found";
}
