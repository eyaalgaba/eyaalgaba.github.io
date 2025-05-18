-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 18, 2025 at 07:37 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mystybloom`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `categoryID` int(20) NOT NULL,
  `categoryName` varchar(100) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`categoryID`, `categoryName`, `image`) VALUES
(1, 'Focal Flowers', 'navFocal.png'),
(2, 'Filler Flowers', 'navFiller.png'),
(3, 'Line Flowers', 'navLine.png'),
(4, 'Greenery Flowers', 'navGreenery.png');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` int(11) NOT NULL,
  `isAvailable` varchar(10) NOT NULL DEFAULT 'true',
  `image` varchar(100) NOT NULL,
  `name` varchar(400) NOT NULL,
  `code` varchar(200) NOT NULL,
  `price` int(50) NOT NULL,
  `categoryID` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `isAvailable`, `image`, `name`, `code`, `price`, `categoryID`) VALUES
(1, 'true', 'focalH.png', 'Hydrangea', 'Hydra', 666, 1),
(2, 'true', 'focalL.png', 'Lilies', 'Lily', 270, 1),
(3, 'true', 'focalP.png', 'Peonies', 'Pons', 222, 1),
(4, 'true', 'focalR.png', 'Roses', 'Rosa', 250, 1),
(5, 'true', 'focalS.png', 'Sunflower', 'Sunny', 300, 1),
(6, 'true', 'focalT.png', 'Tulips', 'Tule', 290, 1),
(7, 'true', 'fillerAG.png', 'Agapanthus', 'Agaths', 150, 2),
(8, 'true', 'fillerAL.png', 'Alliums', 'Ally', 200, 2),
(9, 'true', 'fillerBB.png', 'Baby\'s Breath', 'Babs', 240, 2),
(10, 'true', 'fillerBV.png', 'Bouvardia', 'Bovdi', 230, 2),
(11, 'true', 'fillerC.png', 'Corn Flower', 'Corn', 130, 2),
(12, 'true', 'fillerD.png', 'Daisies', 'Dasy', 190, 2),
(13, 'true', 'lineA.png', 'Amarathus', 'Amara', 75, 3),
(14, 'true', 'lineB.png', 'Bells of Ireland', 'Bela', 70, 3),
(15, 'true', 'lineC.png', 'Campanulas', 'Camp', 130, 3),
(16, 'true', 'lineE.png', 'Eramurus', 'Era', 88, 3),
(17, 'true', 'lineO.png', 'Orchids', 'Orca', 150, 3),
(18, 'true', 'greeneryE.png', 'Eucalyptus', 'Euca', 66, 4),
(19, 'true', 'greeneryL.png', 'Leather Leaf', 'Leafy', 86, 4),
(20, 'true', 'greeneryLG.png', 'Lily Grass', 'Legras', 90, 4),
(21, 'true', 'greeneryR.png', 'Ruscus', 'Russ', 55, 4);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`categoryID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `categoryID` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `productID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
