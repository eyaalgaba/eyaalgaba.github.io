for (var i = 0; i < 11; i++) {
    var myContainer = document.getElementById("albumRow");
    myContainer.innerHTML += `
    <div class="col-12 col-sm-12 col-md-4 col-xl-4 wow animate__animated animate__fadeInUp">
        <div class="container" style="border-radius: 10px; height: 500px;">
            <img class="img-fluid" src="img/Album${i+1}.png" alt="taylor swift album" style="text-align: center; box-shadow: 8px 8px 5px 5px #7D00A3;">
        </div>
    </div>`;
}