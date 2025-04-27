<?php
$page = "home";

if (isset($_GET['page'])) {
    $page = $_GET ['page'];
    switch ($page){
        case "home":
            $page = "home";
            break;
        case "products":
            $page = "products";
            break;
        case "cart":
            $page = "cart";
            break;
        default :
        header("location:?page=home");
        break;


    }
}else {
    header("location:?page=home");
}


?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Beaut Shop</title>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <link rel="icon" href="imgs/LogoS.png">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:ital,wght@0,400;0,700;1,400;1,700&family=Baskervville+SC&family=Baskervville:ital@0;1&family=Castoro+Titling&family=Crimson+Text:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Damion&family=Eczar:wght@400..800&family=Inknut+Antiqua:wght@300;400;500;600;700;800;900&family=League+Spartan:wght@100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Simonetta:ital,wght@0,400;0,900;1,400;1,900&display=swap"
        rel="stylesheet">

    <style>
        .brandName {
            font-family: "Damion";
            font-weight: 400;
            color: #583010;
            align-items: center;
            font-size: 5vw;
        }

        .buttons {
            color: #b37551;
            font-family: "Open Sans", sans-serif;
            text-shadow: 1px 1px 3px #f5f5f5;
            font-size: 2vw;
        }

        .banner {
            position: absolute;
        }

        .titleBanner {
            font-family: "Damion", cursive;
            font-weight: 400;
            color: #E6C4B1;
            position: relative;
            text-align: center;
        }

        .mainContent {
            outline: #583010;
            outline-style: solid;
        }

        .popular {
            font-family: "Open Sans", sans-serif;
            color: #b37551;
            font-size: 2vw;
            font-weight: 700;
        }

        .cardTitle {
            font-family: "Crimson Text", serif;
            font-weight: 600;
            font-style: normal;
            color: #c48158;
            text-align: center;
        }

        .cardText {
            font-family: "Open Sans", sans-serif;
            font-weight: 400;
            font-style: normal;
            color: #0c0c0c;
        }

        .cardPrice {
            font-family: "Crimson Text", serif;
            font-weight: 800;
            font-style: normal;
            color: #866048;
        }

        @media (max-width: 480px) {

            .buttons {
                font-size: 7vw;
            }

            .brandName {
                font-size: 9vw;
            }

            .popular {
                font-size: 4vw;
            }
        }

        @media (max-width: 780px) {

            .buttons {
                font-size: 5vw;
            }

            .brandName {
                font-size: 8vw;
            }

            .popular {
                font-size: 5vw;
            }

        }
    </style>


</head>

<!-- Navbar -->
<nav class="navbar" style="background-color: #E4D6CD;">
    <div class="container-fluid">

        <div class="col-12 col-sm-6 col-md-6 col-xl-6">

            <p class="navbar brandName d-flex justify-content-center align-items-center">Beaut</p>

        </div>

        <div class="col-12 col-sm-6 col-md-6 col-xl-6">
            <div class="container d-flex align-items-center">
                <input class="form-control" type="text" placeholder="Search" id="searchTerm"
                    style="border-radius: 20px 0px 0px 20px; height: 42px;">
                <button class="btn"
                    style="border-radius: 0px 20px 20px 0px; height: 42px; background-color: #CE9372;"><img
                        class="img-fluid" src="imgs/magni.png"></button>
            </div>
        </div>

    </div>
</nav>

<!-- Section Buttons -->
<div class="container-fluid">

    <div class="row" style="background-color: #DBC5BC;">

        <div class="col-12 col-sm-12 col-md-4 col-xl-4 d-flex justify-content-center align-items-center mt-3 ">
            <a href = "?page=home">
                <p class="buttons">Home</p>
            </a>
        </div>

        <div class="col-12 col-sm-12 col-md-4 col-xl-4 d-flex justify-content-center align-items-center mt-3">
            <a href = "?page=products">
                <p class="buttons">Products</p>
            </a>
        </div>

        <div class="col-12 col-sm-12 col-md-4 col-xl-4 d-flex justify-content-center align-items-center mt-3">
            <a href = "?page=cart">
                <p class="buttons">Cart</p>
            </a>
        </div>

    </div>

</div>

<?php
include("shared/" .$page. ".php");
?>

<body>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>