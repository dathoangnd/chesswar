-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th10 06, 2019 lúc 12:10 PM
-- Phiên bản máy phục vụ: 10.4.6-MariaDB
-- Phiên bản PHP: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `chesswar`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `heroku_a98559dc874212b.users`
--

CREATE TABLE `heroku_a98559dc874212b.users` (
  `id` int(11) NOT NULL,
  `name` varchar(30) NOT NULL,
  `secret` varchar(50) NOT NULL,
  `move` varchar(5000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Đang đổ dữ liệu cho bảng `heroku_a98559dc874212b.users`
--

INSERT INTO `heroku_a98559dc874212b.users` (`id`, `name`, `secret`, `move`) VALUES
(1, 'Nhóm 2', '203752508709', '\n'),
(2, 'Nhóm 3', '791684095253', ''),
(3, 'Nhóm 6', '256856883648', ''),
(4, 'Nhóm 8', '873072990708', ''),
(5, 'Nhóm 9', '720857478539', ''),
(6, 'Nhóm 10', '142703737488', ''),
(7, 'Nhóm 11', '181892762848', ''),
(8, 'Nhóm 12', '212285988787', '');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `heroku_a98559dc874212b.users`
--
ALTER TABLE `heroku_a98559dc874212b.users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `id` (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `secret` (`secret`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `heroku_a98559dc874212b.users`
--
ALTER TABLE `heroku_a98559dc874212b.users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
