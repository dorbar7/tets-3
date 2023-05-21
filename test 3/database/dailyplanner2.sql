-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 10, 2023 at 08:38 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dailyplanner`
--

-- --------------------------------------------------------

--
-- Table structure for table `developmentgroups`
--

CREATE TABLE `developmentgroups` (
  `developmentGroupId` int(11) NOT NULL,
  `developmentGroupName` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `developmentgroups`
--

INSERT INTO `developmentgroups` (`developmentGroupId`, `developmentGroupName`) VALUES
(1, 'Mobile Team'),
(2, 'Ui Team'),
(3, 'Beckend Team'),
(4, 'Frontend Team'),
(5, 'Data Team');

-- --------------------------------------------------------

--
-- Table structure for table `meetingschedule`
--

CREATE TABLE `meetingschedule` (
  `meetingId` int(11) NOT NULL,
  `developmentGroupId` int(11) NOT NULL,
  `timeAndDateStartMeeting` date NOT NULL,
  `timeAndDateStopMeeting` date NOT NULL,
  `description` varchar(100) NOT NULL,
  `meetingRoom` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meetingschedule`
--

INSERT INTO `meetingschedule` (`meetingId`, `developmentGroupId`, `timeAndDateStartMeeting`, `timeAndDateStopMeeting`, `description`, `meetingRoom`) VALUES
(1, 3, '2023-05-09', '2023-05-10', 'A meeting to review progress and where we stand until now.', 'Green Room'),
(2, 4, '2023-05-10', '2023-05-11', 'A meeting to review progress and where we stand unil now before the weekend.', 'The Big Meetingroom'),
(3, 1, '2023-05-13', '2023-05-13', 'Opening of the week and tasks to continue.', 'Blue Meetingroom'),
(4, 5, '2023-05-13', '2023-05-13', 'Opening of the week and tasks to continue.', 'Green Room'),
(5, 2, '2023-05-15', '2023-05-15', 'Distribution of certificates of excellence and distribution of tasks for the week.', 'The Big Meetingroom');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `developmentgroups`
--
ALTER TABLE `developmentgroups`
  ADD PRIMARY KEY (`developmentGroupId`);

--
-- Indexes for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  ADD PRIMARY KEY (`meetingId`),
  ADD KEY `developmentGroupId` (`developmentGroupId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `developmentgroups`
--
ALTER TABLE `developmentgroups`
  MODIFY `developmentGroupId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  MODIFY `meetingId` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetingschedule`
--
ALTER TABLE `meetingschedule`
  ADD CONSTRAINT `meetingschedule_ibfk_1` FOREIGN KEY (`developmentGroupId`) REFERENCES `developmentgroups` (`developmentGroupId`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
