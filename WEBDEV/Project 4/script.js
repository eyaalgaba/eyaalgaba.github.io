var searchResultContainer = document.getElementById("searchResultContainer");

const loadData = async (searchTerm) => {


    try{
        const dataResponse = await fetch (`https://api.attackontitanapi.com/characters/?name=${searchTerm}`);
        const titanResponse = await fetch (`https://api.attackontitanapi.com/titans/?name=${searchTerm}`);


        if (dataResponse.ok) {

            const data = await dataResponse.json();
            searchResultContainer.innerHTML =`
            <a href="viewPage.html?result=${data.results[0].name}"><div class="col-12" style="height: 200px;">         
                <div class="card mx-auto align-items-center" style="background-color: #a9a7a7; max-width: 554px;">
                    <div class="row">
                        <div class="container"> <img src="${data.results[0].img}"> </div>
                    </div>
        
                            
                    <div class="row">
                        <div class="container p-5" style=" height: 74; max-width: 440px;"> <b>${data.results[0].name}</b> </div>
                    </div>
                </div>
        
            </div></a>
            `;
        } else if (titanResponse.ok) {
            const titan = await titanResponse.json();
            console.log (titan);
            searchResultContainer.innerHTML =`
            <div class="col-12" style="height: 200px;">         
                <div class="card mx-auto align-items-center" style="background-color: #a9a7a7; max-width: 554px;">
                    <div class="row">
                        <div class="container"> <img src="${titan.results[0].img}"> </div>
                    </div>
        
                            
                    <div class="row">
                        <div class="container p-5" style=" height: 74; max-width: 440px;"> <b>${titan.results[0].name}</b> </div>
                    </div>
                </div>
        
            </div>
            `;
        }


    } catch (error){
        searchResultContainer.innerHTML =`
        <div class="alert alert-danger mx-auto p-5" style="max-width:500px">
            <strong>Error 404[Character Not Found!]</strong>
        </div>
        `
    }

    
    
}

function searchData(){
    var searchTerm = document.getElementById("searchBar").value;
    loadData(searchTerm)


}