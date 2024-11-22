var characterContainer = document.getElementById("characterContainer");

const loadHuman = async () =>{
    const humanResponse = await fetch (`https://api.attackontitanapi.com/characters/`);
    const human = await humanResponse.json();

    for (var i = 1; i <= human.info.count; i++){
        const characterResponse = await fetch (`https://api.attackontitanapi.com/characters/` + i);
        const character = await characterResponse.json();

  

        characterContainer.innerHTML += 
        `
        <div class="col-12 col-sm-12 col-md-4 col-xl-3 profile">
                <!-- Display 1 -->
                <a href="viewPage.html?result=${character.name}"><button class="btn" style="background-color: transparent; border-radius: 30px;"><div class="card align-items-center profileCard mx-auto"
                    style="height: 287px; width: 237px; background-color: #4F4F4F;">

                    <!-- image -->
                    <div class="row charImage">
                        <div class="container p-3" style="height: 213px; width: 237px;"> <img src="${character.img}"
                                class="img-fluid image" style="border-radius: 30px;" > </div>
                    </div>

                    <!-- nametag -->
                    <div class="row" style="height: 74px; width: 237px;">
                        <div class="nameTag" style="background-color: white;">
                            <p><b>${character.name}</b></p>
                        </div>
                    </div>
                </div></button> </a>
        </div>
        `;


    }
    

}

loadHuman();