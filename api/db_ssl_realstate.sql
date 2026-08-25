-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 25, 2026 at 07:57 PM
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
-- Database: `db_ssl_realstate`
--

-- --------------------------------------------------------

--
-- Table structure for table `banner`
--

CREATE TABLE `banner` (
  `id` int(11) NOT NULL,
  `name` varchar(200) DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `home_slider` varchar(255) DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `banner`
--

INSERT INTO `banner` (`id`, `name`, `type`, `home_slider`, `banner_image`, `created_at`, `updated_at`) VALUES
(14, 'For Top Banner', 'top_banner', NULL, 'uploads/banner/thumb_1762004608.jpg', '2025-11-01 07:43:28', '2025-11-01 07:43:28'),
(36, 'For Slider', 'slider', 'uploads/banner/thumb_1786946626.webp', NULL, '2026-08-17 00:03:46', '2026-08-17 00:03:46'),
(37, 'For Slider', 'slider', 'uploads/banner/thumb_1786946949.png', NULL, '2026-08-17 00:09:09', '2026-08-17 00:09:09'),
(38, 'For Slider', 'slider', 'uploads/banner/thumb_1786946975.png', NULL, '2026-08-17 00:09:35', '2026-08-17 00:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `cache`
--

INSERT INTO `cache` (`key`, `value`, `expiration`) VALUES
('astute360-cache-I4vFgEla6iwZTsWH', 'a:1:{s:11:\"valid_until\";i:1787569424;}', 1790161484),
('astute360-cache-spatie.permission.cache', 'a:3:{s:5:\"alias\";a:6:{s:1:\"a\";s:2:\"id\";s:1:\"b\";s:4:\"name\";s:1:\"c\";s:10:\"guard_name\";s:1:\"d\";s:9:\"role_type\";s:1:\"e\";s:9:\"parent_id\";s:1:\"r\";s:5:\"roles\";}s:11:\"permissions\";a:63:{i:0;a:6:{s:1:\"a\";i:1;s:1:\"b\";s:10:\"view posts\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:27;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:1;a:6:{s:1:\"a\";i:2;s:1:\"b\";s:12:\"create posts\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:27;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:2;a:6:{s:1:\"a\";i:3;s:1:\"b\";s:10:\"edit posts\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:27;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:3;a:5:{s:1:\"a\";i:4;s:1:\"b\";s:12:\"delete posts\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:27;}i:4;a:6:{s:1:\"a\";i:5;s:1:\"b\";s:10:\"view users\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:28;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:5;a:6:{s:1:\"a\";i:6;s:1:\"b\";s:12:\"create users\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:28;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:6;a:6:{s:1:\"a\";i:7;s:1:\"b\";s:10:\"edit users\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:28;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:7;a:5:{s:1:\"a\";i:8;s:1:\"b\";s:12:\"delete users\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:28;}i:8;a:6:{s:1:\"a\";i:9;s:1:\"b\";s:13:\"view products\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:29;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:9;a:6:{s:1:\"a\";i:10;s:1:\"b\";s:15:\"create products\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:29;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:10;a:6:{s:1:\"a\";i:11;s:1:\"b\";s:13:\"edit products\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:29;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:11;a:5:{s:1:\"a\";i:12;s:1:\"b\";s:15:\"delete products\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:29;}i:12;a:6:{s:1:\"a\";i:14;s:1:\"b\";s:19:\"view posts category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:30;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:13;a:6:{s:1:\"a\";i:15;s:1:\"b\";s:21:\"create posts category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:30;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:14;a:6:{s:1:\"a\";i:16;s:1:\"b\";s:19:\"edit posts category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:30;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:15;a:5:{s:1:\"a\";i:17;s:1:\"b\";s:21:\"delete posts category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:30;}i:16;a:6:{s:1:\"a\";i:22;s:1:\"b\";s:9:\"view role\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:31;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:17;a:6:{s:1:\"a\";i:23;s:1:\"b\";s:11:\"create role\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:31;s:1:\"r\";a:1:{i:0;i:2;}}i:18;a:6:{s:1:\"a\";i:24;s:1:\"b\";s:9:\"edit role\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:3:\"1,2\";s:1:\"e\";i:31;s:1:\"r\";a:2:{i:0;i:1;i:1;i:2;}}i:19;a:5:{s:1:\"a\";i:25;s:1:\"b\";s:11:\"delete role\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:5:\"1,2,3\";s:1:\"e\";i:31;}i:20;a:5:{s:1:\"a\";i:26;s:1:\"b\";s:22:\"Update website setting\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:21;a:5:{s:1:\"a\";i:27;s:1:\"b\";s:15:\"Post Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:22;a:5:{s:1:\"a\";i:28;s:1:\"b\";s:15:\"User Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:23;a:5:{s:1:\"a\";i:29;s:1:\"b\";s:19:\"Products Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:24;a:5:{s:1:\"a\";i:30;s:1:\"b\";s:24:\"Post Category Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:25;a:5:{s:1:\"a\";i:31;s:1:\"b\";s:15:\"Role Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:26;a:5:{s:1:\"a\";i:32;s:1:\"b\";s:21:\"Permission Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:27;a:6:{s:1:\"a\";i:33;s:1:\"b\";s:15:\"view permission\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:32;s:1:\"r\";a:1:{i:0;i:1;}}i:28;a:6:{s:1:\"a\";i:34;s:1:\"b\";s:17:\"create permission\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:32;s:1:\"r\";a:1:{i:0;i:1;}}i:29;a:6:{s:1:\"a\";i:35;s:1:\"b\";s:15:\"edit permission\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:32;s:1:\"r\";a:1:{i:0;i:1;}}i:30;a:5:{s:1:\"a\";i:36;s:1:\"b\";s:17:\"delete permission\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:32;}i:31;a:5:{s:1:\"a\";i:37;s:1:\"b\";s:28:\"Products Category Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:32;a:6:{s:1:\"a\";i:38;s:1:\"b\";s:21:\"view product category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:37;s:1:\"r\";a:1:{i:0;i:1;}}i:33;a:6:{s:1:\"a\";i:39;s:1:\"b\";s:23:\"create product category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:37;s:1:\"r\";a:1:{i:0;i:1;}}i:34;a:6:{s:1:\"a\";i:40;s:1:\"b\";s:21:\"edit product category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:37;s:1:\"r\";a:1:{i:0;i:1;}}i:35;a:5:{s:1:\"a\";i:41;s:1:\"b\";s:23:\"delete product category\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:37;}i:36;a:5:{s:1:\"a\";i:42;s:1:\"b\";s:17:\"Banner Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:37;a:6:{s:1:\"a\";i:43;s:1:\"b\";s:11:\"view banner\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:42;s:1:\"r\";a:1:{i:0;i:1;}}i:38;a:6:{s:1:\"a\";i:44;s:1:\"b\";s:13:\"create banner\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:42;s:1:\"r\";a:1:{i:0;i:1;}}i:39;a:6:{s:1:\"a\";i:45;s:1:\"b\";s:11:\"edit banner\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:42;s:1:\"r\";a:1:{i:0;i:1;}}i:40;a:6:{s:1:\"a\";i:46;s:1:\"b\";s:13:\"delete banner\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:42;s:1:\"r\";a:1:{i:0;i:1;}}i:41;a:5:{s:1:\"a\";i:47;s:1:\"b\";s:19:\"Supplier Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:42;a:6:{s:1:\"a\";i:48;s:1:\"b\";s:13:\"view supplier\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:47;s:1:\"r\";a:1:{i:0;i:1;}}i:43;a:6:{s:1:\"a\";i:49;s:1:\"b\";s:15:\"create supplier\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:47;s:1:\"r\";a:1:{i:0;i:1;}}i:44;a:6:{s:1:\"a\";i:50;s:1:\"b\";s:13:\"edit supplier\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:47;s:1:\"r\";a:1:{i:0;i:1;}}i:45;a:5:{s:1:\"a\";i:51;s:1:\"b\";s:15:\"delete supplier\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:47;}i:46;a:5:{s:1:\"a\";i:52;s:1:\"b\";s:25:\"Purchase Order Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:47;a:6:{s:1:\"a\";i:53;s:1:\"b\";s:19:\"view purchase order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:52;s:1:\"r\";a:1:{i:0;i:1;}}i:48;a:6:{s:1:\"a\";i:54;s:1:\"b\";s:21:\"create purchase order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:52;s:1:\"r\";a:1:{i:0;i:1;}}i:49;a:6:{s:1:\"a\";i:55;s:1:\"b\";s:19:\"edit purchase order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:52;s:1:\"r\";a:1:{i:0;i:1;}}i:50;a:5:{s:1:\"a\";i:56;s:1:\"b\";s:21:\"delete purchase order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:52;}i:51;a:5:{s:1:\"a\";i:57;s:1:\"b\";s:18:\"Product Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:52;a:6:{s:1:\"a\";i:58;s:1:\"b\";s:12:\"view product\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:57;s:1:\"r\";a:1:{i:0;i:1;}}i:53;a:6:{s:1:\"a\";i:59;s:1:\"b\";s:14:\"create product\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:57;s:1:\"r\";a:1:{i:0;i:1;}}i:54;a:6:{s:1:\"a\";i:60;s:1:\"b\";s:12:\"edit product\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:57;s:1:\"r\";a:1:{i:0;i:1;}}i:55;a:5:{s:1:\"a\";i:61;s:1:\"b\";s:14:\"delete product\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:57;}i:56;a:5:{s:1:\"a\";i:62;s:1:\"b\";s:16:\"Order Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:57;a:6:{s:1:\"a\";i:63;s:1:\"b\";s:10:\"view order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:62;s:1:\"r\";a:1:{i:0;i:1;}}i:58;a:6:{s:1:\"a\";i:64;s:1:\"b\";s:12:\"create order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:62;s:1:\"r\";a:1:{i:0;i:1;}}i:59;a:6:{s:1:\"a\";i:65;s:1:\"b\";s:10:\"edit order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:62;s:1:\"r\";a:1:{i:0;i:1;}}i:60;a:5:{s:1:\"a\";i:66;s:1:\"b\";s:12:\"delete order\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:62;}i:61;a:5:{s:1:\"a\";i:67;s:1:\"b\";s:19:\"Customer Management\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:0;}i:62;a:6:{s:1:\"a\";i:68;s:1:\"b\";s:13:\"view Customer\";s:1:\"c\";s:3:\"api\";s:1:\"d\";s:1:\"1\";s:1:\"e\";i:67;s:1:\"r\";a:1:{i:0;i:1;}}}s:5:\"roles\";a:2:{i:0;a:4:{s:1:\"a\";i:1;s:1:\"b\";s:5:\"admin\";s:1:\"c\";s:3:\"api\";s:1:\"d\";i:1;}i:1;a:4:{s:1:\"a\";i:2;s:1:\"b\";s:9:\"landowner\";s:1:\"c\";s:3:\"api\";s:1:\"d\";i:2;}}}', 1787756529),
('astute360-cache-vn30KIjyo3FUlzDA', 'a:1:{s:11:\"valid_until\";i:1787592014;}', 1790184074);

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

CREATE TABLE `categorys` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `sorting` int(11) DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `parent_child_id` int(11) DEFAULT NULL,
  `sort_order` int(11) DEFAULT 0,
  `category_image_inside_page` varchar(255) DEFAULT NULL,
  `banner_sub_cat_image` varchar(255) DEFAULT NULL,
  `insubCategoryImage` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `tabs_status` int(11) NOT NULL DEFAULT 1 COMMENT '1=category, subcategory 2=insubcategory',
  `thumbnail_image` varchar(255) DEFAULT NULL,
  `banner_image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `categorys`
--

INSERT INTO `categorys` (`id`, `name`, `slug`, `sorting`, `parent_id`, `parent_child_id`, `sort_order`, `category_image_inside_page`, `banner_sub_cat_image`, `insubCategoryImage`, `status`, `tabs_status`, `thumbnail_image`, `banner_image`, `created_at`, `updated_at`) VALUES
(1, 'About', 'about', 2, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:48:56', '2026-08-25 09:38:21'),
(2, 'Company Profile', 'company-profile', NULL, 1, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:49:09', '2026-08-24 21:49:09'),
(3, 'Our Team', 'our-team', NULL, 1, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:49:19', '2026-08-24 21:49:19'),
(4, 'Projects', 'projects', 3, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:49:37', '2026-08-25 09:38:33'),
(5, 'Construction Management', 'construction-management', NULL, 4, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:49:57', '2026-08-24 21:49:57'),
(6, 'Stellar Homes', 'stellar-homes', 4, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:50:27', '2026-08-25 09:38:45'),
(7, 'Ongoing Projects', 'ongoing-projects', NULL, 6, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:50:45', '2026-08-24 21:50:45'),
(8, 'Upcoming Projects', 'upcoming-projects', NULL, 6, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:50:55', '2026-08-24 21:50:55'),
(9, 'Services', 'services', 5, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:51:12', '2026-08-25 09:38:56'),
(10, 'Property Development', 'property-development', NULL, 9, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:51:20', '2026-08-24 21:51:20'),
(13, 'Construction Managements', 'construction-managements', 0, 9, NULL, 0, NULL, NULL, NULL, 0, 1, NULL, NULL, '2026-08-24 21:52:09', '2026-08-25 23:22:47'),
(14, 'Interior Design', 'interior-design', NULL, 9, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:52:25', '2026-08-24 21:52:25'),
(15, 'Architectural Design', 'architectural-design', NULL, 9, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:52:40', '2026-08-24 21:52:40'),
(16, 'Investment Consultancy', 'investment-consultancy', NULL, 9, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:52:54', '2026-08-24 21:52:54'),
(17, 'Contact', 'contact', 7, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:53:32', '2026-08-25 09:39:18'),
(18, 'Contact us', 'contact-us', NULL, 17, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:53:49', '2026-08-24 21:53:49'),
(19, 'Book Appointment', 'book-appointment', 0, 17, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:54:00', '2026-08-24 15:54:15'),
(20, 'Customer Support', 'customer-support', NULL, 17, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-24 21:54:20', '2026-08-24 21:54:20'),
(21, 'Blog', 'blog', 6, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-25 09:37:39', '2026-08-25 09:39:08'),
(22, 'Home', 'home', 1, 0, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-25 09:38:07', '2026-08-25 09:38:15'),
(23, 'Chairman Message', 'chairman-message', NULL, 1, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-25 21:02:09', '2026-08-25 21:02:09'),
(24, 'Managing Director', 'managing-director', NULL, 1, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-25 21:02:28', '2026-08-25 21:02:28'),
(25, 'Directors Message', 'directors-message', NULL, 1, NULL, 0, NULL, NULL, NULL, 1, 1, NULL, NULL, '2026-08-25 21:02:38', '2026-08-25 21:02:38');

-- --------------------------------------------------------

--
-- Table structure for table `documents`
--

CREATE TABLE `documents` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `description_short` text DEFAULT NULL,
  `description_full` longtext DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` text DEFAULT NULL,
  `categoryId` bigint(20) UNSIGNED NOT NULL,
  `landowner_id` int(11) DEFAULT NULL,
  `buyer_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `entry_by` bigint(20) UNSIGNED DEFAULT NULL,
  `thumnail_img` varchar(255) DEFAULT NULL,
  `document_file` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `documents`
--

INSERT INTO `documents` (`id`, `name`, `slug`, `description_short`, `description_full`, `meta_title`, `meta_description`, `meta_keyword`, `categoryId`, `landowner_id`, `buyer_id`, `user_id`, `entry_by`, `thumnail_img`, `document_file`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Assembly Language Test Guide: Instructions, Registers, and Memory', 'assembly-language-test-guide-instructions-registers-and-memory', '', '<p>Document Category</p>', '', '', '', 7, 1, NULL, 1, 2, '/backend/files/sRFXJ2y80wj1K523CgQm.png', '/backend/files/lfySGAeHft73Jnw5NUj9.pdf', 1, '2026-08-25 02:17:36', '2026-08-24 11:16:25'),
(2, 'SQL Tester Online: Compare Queries, Results, and Edge Cases', 'sql-tester-online-compare-queries-results-and-edge-cases', '', '<p>SQL Tester Online: Compare Queries, Results, and Edge Cases</p>', '', '', '', 30, NULL, 7, 7, 2, NULL, '/backend/files/71pafeh2Ob9i0B45WiOu.pdf', 1, '2026-08-25 02:17:36', '2026-08-24 11:16:37'),
(3, 'PHP Sandbox Projects: Practice Variables, Forms, and APIs Online', 'php-sandbox-projects-practice-variables-forms-and-apis-online', '', '<p>PHP Sandbox Projects: Practice Variables, Forms, and APIs Online</p>', '', '', '', 16, 1, NULL, 1, 2, NULL, '/backend/files/zDd6qu302dCTz1N5tiqZ.pdf', 1, '2026-08-25 02:17:36', '2026-08-24 11:16:59'),
(4, 'Ada Full Form in Computer Science: Meaning, History, and Uses', 'ada-full-form-in-computer-science-meaning-history-and-uses', '', '<p>Ada Full Form in Computer Science: Meaning, History, and Uses</p>', '', '', '', 6, NULL, 7, 7, 2, NULL, '/backend/files/vyKvFBmZNhh708PCwhrX.pdf', 1, '2026-08-25 02:17:36', '2026-08-24 11:17:15'),
(5, 'Ayesha begum', 'ayesha-begum', '', '<p>Ayesha begum</p>', '', '', '', 4, 6, NULL, 6, 2, NULL, '/backend/files/SBs9Ifen7xWd7XQs3QmP.pdf', 1, '2026-08-25 02:17:36', '2026-08-24 11:16:01'),
(6, 'Site Identification', 'site-identification', '', '<p>Site Identification</p>', '', '', '', 21, NULL, 7, 7, 2, NULL, '/backend/files/site-identification-2026-08-25_09-30-34.pdf', 1, '2026-08-25 02:17:36', '2026-08-25 03:30:34'),
(7, 'Document file', 'document-file', '', '<p>Document file&nbsp;</p>', '', '', '', 5, NULL, 7, 7, 2, '/backend/files/2026-08-25_09-27-49.png', '/backend/files/document-file-2026-08-25_09-29-52.pdf', 1, NULL, '2026-08-25 03:29:52');

-- --------------------------------------------------------

--
-- Table structure for table `document_category`
--

CREATE TABLE `document_category` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `document_category`
--

INSERT INTO `document_category` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Property Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(2, 'Land Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(3, 'Ownership Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(4, 'Sale Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(5, 'Purchase Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(6, 'Booking Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(7, 'Agreement Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(8, 'Legal Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(9, 'Registration Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(10, 'Tax Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(11, 'NOC Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(12, 'Approval Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(13, 'Construction Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(14, 'Architectural Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(15, 'Engineering Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(16, 'Floor Plan Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(17, 'Handover Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(18, 'Customer Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(19, 'Payment Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(20, 'Bank & Loan Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(21, 'Lease Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(22, 'Rental Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(23, 'Maintenance Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(24, 'Vendor Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(25, 'Contractor Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(26, 'Company Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(27, 'Employee Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(28, 'Project Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(29, 'Marketing Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(30, 'Other Documents', 1, '2026-08-24 16:11:03', '2026-08-24 16:11:03'),
(31, 'Property Title & Deed', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(32, 'Land Ownership Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(33, 'Mutation & Khatian Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(34, 'Mouza & Plot Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(35, 'Land Survey Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(36, 'Property Valuation Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(37, 'Property Inspection Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(38, 'Due Diligence Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(39, 'Title Verification Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(40, 'Encumbrance & Liability Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(41, 'Power of Attorney', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(42, 'Development Agreement', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(43, 'Joint Venture Agreement', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(44, 'Landowner Agreement', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(45, 'Property Sale Agreement', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(46, 'Property Purchase Agreement', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(47, 'Booking Form & Confirmation', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(48, 'Customer Allotment Letter', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(49, 'Installment Schedule', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(50, 'Payment Receipt Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(51, 'Payment Clearance Certificate', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(52, 'Cancellation & Refund Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(53, 'Property Handover Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(54, 'Possession Certificate', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(55, 'Transfer & Resale Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(56, 'Property Registration Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(57, 'Mortgage & Bank Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(58, 'Loan Approval Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(59, 'Tax & VAT Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(60, 'Utility Connection Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(61, 'Building Permit & Approval', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(62, 'Planning Permission', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(63, 'Environmental Clearance', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(64, 'Fire Safety Certificate', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(65, 'Occupancy Certificate', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(66, 'Completion Certificate', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(67, 'Architectural Drawings', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(68, 'Structural Drawings', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(69, 'MEP Drawings', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(70, 'Site Development Plans', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(71, 'Floor Plans & Layouts', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(72, 'BOQ & Cost Estimates', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(73, 'Construction Contracts', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(74, 'Contractor Work Orders', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(75, 'Material & Supplier Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(76, 'Project Progress Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(77, 'Quality Inspection Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(78, 'Safety & Compliance Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(79, 'Defect & Snag Reports', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(80, 'Maintenance Service Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(81, 'Warranty Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(82, 'Tenant Lease Agreements', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(83, 'Rental & Tenancy Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(84, 'Tenant Verification Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(85, 'Rent Collection Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(86, 'Security Deposit Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(87, 'Property Management Agreements', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(88, 'Vendor & Supplier Contracts', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(89, 'Broker & Agent Agreements', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(90, 'Commission & Incentive Records', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(91, 'Customer KYC Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(92, 'Customer Identity Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(93, 'Corporate & Company Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(94, 'Project Marketing Materials', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(95, 'Property Brochures & Catalogs', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(96, 'Digital Marketing Assets', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(97, 'Legal Notices & Correspondence', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(98, 'Court & Dispute Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(99, 'Insurance Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(100, 'Internal Project Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(101, 'Confidential Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(102, 'Archived Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23'),
(103, 'Other Documents', 1, '2026-08-24 16:17:23', '2026-08-24 16:17:23');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_entries`
--

CREATE TABLE `inventory_entries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `buy_date` date NOT NULL,
  `store_name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `grand_total` decimal(12,2) NOT NULL DEFAULT 0.00,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `entry_by` bigint(20) UNSIGNED DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `data_center` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_items`
--

CREATE TABLE `inventory_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `inventory_entry_id` bigint(20) UNSIGNED NOT NULL,
  `item_name` varchar(255) NOT NULL,
  `item_id` int(11) DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `inventory_item_masters`
--

CREATE TABLE `inventory_item_masters` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventory_item_masters`
--

INSERT INTO `inventory_item_masters` (`id`, `name`, `status`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Baby Diaper', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(2, 'Newborn Diaper', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(3, 'Diaper Pant', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(4, 'Baby Wipes', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(5, 'Wet Tissue', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(6, 'Face Tissue', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(7, 'Toilet Tissue', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(8, 'Kitchen Tissue', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(9, 'Baby Powder', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(10, 'Baby Lotion', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(11, 'Baby Oil', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(12, 'Baby Shampoo', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(13, 'Baby Soap', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(14, 'Baby Cream', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(15, 'Diaper Rash Cream', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(16, 'Baby Perfume', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(17, 'Baby Cotton Bud', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(18, 'Baby Cotton', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(19, 'Baby Nail Cutter', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(20, 'Baby Hair Brush', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(21, 'Feeding Bottle', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(22, 'Bottle Nipple', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(23, 'Baby Feeding Spoon', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(24, 'Baby Bowl', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(25, 'Baby Cup', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(26, 'Baby Milk', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(27, 'Formula Milk', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(28, 'Growing Up Milk', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(29, 'Breast Milk Storage Bag', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(30, 'Breast Pump', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(31, 'Maternity Pad', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(32, 'Sanitary Napkin', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(33, 'Panty Liner', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(34, 'Hand Sanitizer', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(35, 'Liquid Hand Wash', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(36, 'Body Soap', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(37, 'Body Wash', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(38, 'Shampoo', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(39, 'Conditioner', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(40, 'Toothpaste', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(41, 'Toothbrush', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(42, 'Mouthwash', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(43, 'Cotton Roll', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(44, 'Gauze Bandage', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(45, 'Surgical Mask', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(46, 'Disposable Gloves', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(47, 'Mineral Water', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(48, 'Fruit Juice', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(49, 'Biscuit', 1, 1, '2026-07-10 08:10:09', '2026-07-10 02:25:30'),
(50, 'Oats', 1, 1, '2026-07-10 08:10:09', '2026-07-10 08:10:09'),
(51, 'Horlicks', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(52, 'Complan', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(53, 'Boost', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(54, 'Bournvita', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(55, 'Cerelac Wheat', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(56, 'Cerelac Rice', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(57, 'Cerelac Mixed Fruit', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(58, 'Lactogen 1', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(59, 'Lactogen 2', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(60, 'NAN Optipro 1', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(61, 'NAN Optipro 2', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(62, 'Nido Milk', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(63, 'Dano Milk', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(64, 'Diploma Milk', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(65, 'Fresh Milk', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(66, 'Milk Powder', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(67, 'Condensed Milk', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(68, 'Baby Feeding Bottle Small', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(69, 'Baby Feeding Bottle Large', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(70, 'Baby Bottle Cleaner', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(71, 'Baby Bib', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(72, 'Baby Towel', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(73, 'Baby Blanket', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(74, 'Baby Pillow', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(75, 'Baby Dress', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(76, 'Baby Cap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(77, 'Baby Socks', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(78, 'Baby Shoes', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(79, 'Baby Toy', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(80, 'Baby Pacifier', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(81, 'Johnson Baby Shampoo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(82, 'Johnson Baby Oil', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(83, 'Johnson Baby Lotion', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(84, 'Johnson Baby Powder', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(85, 'Kodomo Baby Powder', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(86, 'Kodomo Baby Lotion', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(87, 'Savlon Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(88, 'Dettol Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(89, 'Lifebuoy Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(90, 'Lux Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(91, 'Dove Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(92, 'Sandalina Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(93, 'Meril Soap', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(94, 'Clinic Plus Shampoo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(95, 'Sunsilk Shampoo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(96, 'Pantene Shampoo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(97, 'Head and Shoulders Shampoo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(98, 'Clear Shampoo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(99, 'Wheel Detergent', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(100, 'Surf Excel', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(101, 'Rin Detergent', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(102, 'Tide Detergent', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(103, 'Vim Liquid', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(104, 'Harpic', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(105, 'Lizol Floor Cleaner', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(106, 'Dettol Hand Wash', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(107, 'Savlon Hand Wash', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(108, 'Hand Sanitizer 100ml', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(109, 'Hand Sanitizer 500ml', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(110, 'Face Mask', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(111, 'N95 Mask', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(112, 'Surgical Gloves', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(113, 'Latex Gloves', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(114, 'Cotton Roll Large', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(115, 'Bandage Roll', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(116, 'Adhesive Tape', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(117, 'Band Aid', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(118, 'Gauze Pad', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(119, 'Hydrogen Peroxide', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(120, 'Spirit', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(121, 'Dettol Antiseptic', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(122, 'Savlon Antiseptic', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(123, 'Mineral Water 500ml', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(124, 'Mineral Water 1L', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(125, 'Pran Juice', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(126, 'Frutika Juice', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(127, 'Mojo', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(128, 'Coca Cola', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(129, 'Pepsi', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(130, 'Sprite', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(131, '7Up', 1, 1, '2026-07-10 08:10:50', '2026-07-10 02:20:55'),
(132, 'Fanta', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(133, 'Energy Drink', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(134, 'Biscuit Marie', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(135, 'Toast Biscuit', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(136, 'Cream Biscuit', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(137, 'Chocolate', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(138, 'Candy', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(139, 'Chanachur', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(140, 'Potato Chips', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(141, 'Noodles', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(142, 'Bread', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(143, 'Butter', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(144, 'Jam', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(145, 'Honey', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(146, 'Green Tea', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(147, 'Black Tea', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(148, 'Coffee', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(149, 'Sugar', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(150, 'Salt', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(151, 'Rice', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(152, 'Lentil', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(153, 'Cooking Oil', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(154, 'Egg', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(155, 'Chicken', 1, 1, '2026-07-10 08:10:50', '2026-07-10 08:10:50'),
(156, 'test', 1, 2, '2026-07-10 02:15:57', '2026-07-10 02:15:57'),
(157, 'Olive Oil', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(158, 'Mustard Oil', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(159, 'Soyabean Oil', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(160, 'Ghee', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(161, 'Baby Food Jar', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(162, 'Baby Rice Cereal', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(163, 'Baby Fruit Puree', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(164, 'Baby Teether', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(165, 'Baby Comb', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(166, 'Baby Nail File', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(167, 'Shaving Cream', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(168, 'Shaving Foam', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(169, 'Razor Blade', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(170, 'Disposable Razor', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(171, 'Hair Gel', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(172, 'Hair Oil', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(173, 'Hair Color', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(174, 'Face Wash', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(175, 'Face Cream', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(176, 'Body Lotion', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(177, 'Petroleum Jelly', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(178, 'Lip Balm', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(179, 'Perfume', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(180, 'Body Spray', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(181, 'Room Freshener', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(182, 'Mosquito Coil', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(183, 'Mosquito Spray', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(184, 'Mosquito Bat', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(185, 'Dish Wash Bar', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(186, 'Dish Wash Liquid', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(187, 'Laundry Brush', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(188, 'Floor Wiper', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(189, 'Cleaning Sponge', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(190, 'Garbage Bag', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(191, 'Aluminium Foil', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(192, 'Cling Film', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(193, 'Paper Cup', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(194, 'Paper Plate', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(195, 'Plastic Spoon', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(196, 'Plastic Fork', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(197, 'Plastic Glass', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(198, 'Lunch Box', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(199, 'Water Bottle', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(200, 'Flask', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(201, 'Ice Cream', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(202, 'Yogurt', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(203, 'Cheese', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(204, 'Soft Drink', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(205, 'Dry Cake', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05'),
(206, 'Muffin', 1, 1, '2026-07-10 08:24:05', '2026-07-10 08:24:05');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_10_09_160506_create_permission_tables', 2),
(5, '2026_07_10_000001_create_inventory_entries_table', 3),
(6, '2026_07_10_000002_create_inventory_items_table', 4),
(7, '2026_07_10_000003_add_status_to_inventory_entries_table', 5),
(8, '2026_07_10_000004_create_inventory_item_masters_table', 6),
(9, '2026_07_10_000006_create_stock_out_entries_table', 7),
(10, '2026_07_10_000007_create_stock_out_items_table', 8),
(11, '2026_07_10_000008_add_entry_tracking_to_inventory_tables', 9),
(12, '2026_07_10_000009_create_notes_table', 10);

-- --------------------------------------------------------

--
-- Table structure for table `model_has_permissions`
--

CREATE TABLE `model_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `model_has_roles`
--

CREATE TABLE `model_has_roles` (
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `model_type` varchar(255) NOT NULL,
  `model_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `model_has_roles`
--

INSERT INTO `model_has_roles` (`role_id`, `model_type`, `model_id`) VALUES
(1, 'App\\Models\\User', 2),
(2, 'App\\Models\\User', 1),
(2, 'App\\Models\\User', 6),
(3, 'App\\Models\\User', 7);

-- --------------------------------------------------------

--
-- Table structure for table `mother_entry_frm`
--

CREATE TABLE `mother_entry_frm` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `month_age` varchar(200) DEFAULT NULL,
  `mobile_no` varchar(200) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `child_info` varchar(255) DEFAULT NULL,
  `select_year_month_day` varchar(255) DEFAULT NULL,
  `gender` varchar(50) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `entry_by` int(11) DEFAULT NULL,
  `district` int(11) DEFAULT NULL,
  `data_center` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp(),
  `child_name` varchar(255) DEFAULT NULL,
  `child_age` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `mother_entry_frm`
--

INSERT INTO `mother_entry_frm` (`id`, `name`, `month_age`, `mobile_no`, `address`, `child_info`, `select_year_month_day`, `gender`, `status`, `entry_by`, `district`, `data_center`, `created_at`, `updated_at`, `child_name`, `child_age`) VALUES
(1, 'Josna', '30', '01915728985', 'Dhaka', NULL, 'Month', 'Female', 1, 2, 7, 4, '2026-07-05 10:53:14', '2026-07-05 10:53:14', 'Jibon', '4'),
(2, 'Ayesha', '40', '01915728982', 'B.baria', NULL, 'Year', 'Male', 1, 2, 7, 4, '2026-07-05 10:54:05', '2026-07-05 10:54:05', 'Bijon', '2'),
(3, 'Mrs. Ayesha Bgeum', '45', '01915728982', 'Dhaka, Bangladesh', NULL, 'Month', 'Male', 1, 4, 16, 4, '2026-07-09 13:37:42', '2026-07-09 13:37:42', 'Bijon', '5'),
(4, 'Rokeya begum', '35', '01915728982', 'Dhaka', NULL, 'Month', 'Female', 1, 2, 7, 4, '2026-07-09 13:46:56', '2026-07-09 13:46:56', 'JON', '25'),
(5, 'Josna', '22', '01915728985', 'DHK', NULL, 'Month', 'Female', 1, 4, 16, 4, '2026-07-10 16:32:51', '2026-07-10 16:32:51', 'Tini', '5');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `entry_date` date NOT NULL,
  `description` text NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `entry_by` bigint(20) UNSIGNED DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `data_center` varchar(255) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `orderId` varchar(255) NOT NULL,
  `pathao_consignment_id` varchar(255) DEFAULT NULL,
  `pathao_merchant_order_id` varchar(255) DEFAULT NULL,
  `pathao_order_status` varchar(100) DEFAULT NULL,
  `pathao_delivery_fee` varchar(50) DEFAULT NULL,
  `customer_id` int(11) DEFAULT NULL COMMENT 'ref users table role_id=2',
  `shipping_phone` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `coupons` text DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  `subtotal` decimal(10,2) DEFAULT NULL,
  `amount` decimal(10,2) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL COMMENT '%',
  `discount_amount` decimal(10,2) DEFAULT NULL,
  `grand_total` decimal(10,2) DEFAULT NULL,
  `advance` decimal(10,2) DEFAULT NULL,
  `due` decimal(10,2) DEFAULT NULL,
  `order_status` int(11) NOT NULL DEFAULT 1 COMMENT '1=Pending\r\n2=Order Received\r\n3=Shipped\r\n4=Out for Delivery\r\n5=Delivered\r\n6=Cancelled\r\n7=Returned\r\n8=Refunded\r\n9=Return complete\r\n',
  `bkash_number` varchar(255) DEFAULT NULL,
  `transaction_id` varchar(255) DEFAULT NULL,
  `paymentMethod` varchar(255) DEFAULT NULL,
  `devliery_charge` decimal(10,2) DEFAULT NULL,
  `order_type` int(1) NOT NULL COMMENT '1=online\r\n2=instant_order',
  `coupon_code` varchar(255) DEFAULT NULL,
  `coupon_offer_status` int(11) DEFAULT NULL,
  `orderUpdateDate` date DEFAULT NULL,
  `orderUpdateby` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `orderId`, `pathao_consignment_id`, `pathao_merchant_order_id`, `pathao_order_status`, `pathao_delivery_fee`, `customer_id`, `shipping_phone`, `address`, `coupons`, `order_date`, `payment_type`, `subtotal`, `amount`, `discount`, `discount_amount`, `grand_total`, `advance`, `due`, `order_status`, `bkash_number`, `transaction_id`, `paymentMethod`, `devliery_charge`, `order_type`, `coupon_code`, `coupon_offer_status`, `orderUpdateDate`, `orderUpdateby`, `created_at`, `updated_at`) VALUES
(1, '00000001', NULL, NULL, NULL, NULL, 27, '01875758578', 'Austria', '', '2026-01-17', NULL, 100.00, NULL, 0, 0.00, 160.00, NULL, NULL, 1, NULL, NULL, 'cash', 60.00, 1, NULL, NULL, NULL, NULL, '2026-01-17 00:09:42', '2026-01-17 06:09:42');

-- --------------------------------------------------------

--
-- Table structure for table `order_history`
--

CREATE TABLE `order_history` (
  `id` int(11) NOT NULL,
  `order_id` int(11) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  `attribue_id` int(11) DEFAULT NULL,
  `variation_value` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `total_price` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `order_history`
--

INSERT INTO `order_history` (`id`, `order_id`, `product_id`, `attribue_id`, `variation_value`, `qty`, `price`, `total_price`, `created_at`, `updated_at`) VALUES
(1, 1, 229, NULL, '', 1, 100.00, 100.00, '2026-01-17 00:09:42', '2026-01-17 00:09:42');

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`id`, `name`, `description`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Pending', 'The order has been placed but not yet confirmed or paid.', 1, '2023-12-04 11:15:23', '2023-12-04 05:55:06'),
(2, 'Order Received', 'Payment has been received (for prepaid), and the order is being prepared.', 1, '2023-12-04 11:15:23', '2023-12-04 05:55:48'),
(3, 'Shipped', 'The order has been dispatched from the warehouse and is in transit.', 1, '2023-12-04 11:15:23', '2023-12-04 05:56:14'),
(4, 'Out for Delivery', 'The order is with the delivery agent and will reach the customer soon.', 1, '2023-12-04 11:15:23', '2023-12-04 05:56:45'),
(5, 'Delivered', 'The order has successfully reached the customer.', 1, '2023-12-04 11:15:23', '2023-12-04 05:57:14'),
(6, 'Cancelled', 'The order has been cancelled either by the user or the system (e.g., due to payment failure or stock issues).', 1, '2023-12-04 11:15:23', '2023-12-04 05:57:42'),
(7, 'Returned', 'The customer has returned the product after delivery.', 1, '2023-12-04 11:15:23', '2023-12-04 05:58:19'),
(8, 'Refunded', 'Returning', 1, '2023-12-04 11:15:23', '2023-12-04 05:58:53'),
(9, 'Return complete', 'A refund has been initiated and processed for the customer.', 1, '2023-12-04 11:15:23', '2023-12-04 05:59:17'),
(10, 'Order Received & Send to Pathao', 'Send to Pathao', 1, '2023-12-04 11:15:23', '2023-12-04 05:59:17');

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pathao_tokens`
--

CREATE TABLE `pathao_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `access_token` text NOT NULL,
  `refresh_token` text NOT NULL,
  `expires_in` int(11) NOT NULL,
  `expires_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `pathao_tokens`
--

INSERT INTO `pathao_tokens` (`id`, `access_token`, `refresh_token`, `expires_in`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIzNTIiLCJhdWQiOlsiMjY3Il0sImV4cCI6MTc3MjEwOTI3NCwibmJmIjoxNzY0MzMzMjc0LCJpYXQiOjE3NjQzMzMyNzQsImp0aSI6IjY1NjU4YzY1ZjU5NzRjZDZhNGE3OGE3MTIwZWIyZjVjNGQxOTYzOGM3MjBiYWYwOTQyOWMyOWVjNzk0MzgyYmIiLCJtZXJjaGFudF9pZCI6Iks0b2VFOWtlMEIiLCJzY29wZXMiOltdfQ.HdpzFl10Ul7lDW9x2lsDt73FGDnCD8JNYfmIjVKviSp0lyJ_E4YV9b_3XLcLzvkXk8wuCWcR3QM4K3Lp4e3gpQ114g5BLXNYxZGIkA6nRs23inWUv43oM8g73LYwPMMDyZo6nTpL6HMKbQaeilSfl7n8f-yf5h-e2U21uEoeHdE-u2NyXxLvkvW0kIhsnO-uhXyYmoCCEZXHv31Z_xFRTAEgGDb4NsifWgOcCNbzAU6tiZXymCGmSuKE1Kod0Xnw7znqWGULNVofSrogYwc0kuLFRnUvagBp6jvydhPxUJfAgSKu4561xC7HI3mmwsnfOZ-UeGVSgblkNAcFnvGy4xCx3OhU8of63BbFY9eGbmP1lVp8UvvoKLn03A7MZWP8qNOr4Cn9clhuVYc0ZdER3QprIqhVsknPvPRs-eodnKsCuxR-gNr3NCaLYZSKxpY7y_RcxtbIBdJOr04nj3s0HgnaZ_gbuI5aGfdqGdqTD7AtJDqUvZg7w1ukazHQJL-fScbvAGmbzIBN8wV5IsYp8QswGzfqFCJh6uYLBSCJ5ZajwViNVX10bXUFyrefrZ_8-uxG53ozyWjThtvyR7UoRJSNA9Hx2U76yvdXlZi4PxwsPgCw5EGVXmPi-n3hNM6McMP5bffey-PnSVsDhbu1CYRMVw417NdOPtdT7WWq0oI', 'def502006775528b6f041dbeb1e89312605e2aa5d92fc7daf9eaad2fabccfa35e54f4cba0474e063cf12770d72be55b346a7cfda987df6dca6159bdbee1a20ec686326b705e7cc90a062f52167901f4145fe19165d3882a57920cab75f8e3c42d388ed0e7bc7d3b6abd608700e4b36fdcf2f8b7a461611f1850e1aa4f46ceceed2344f15785ab03b3fa44572b2830206e2d35942c3f827e89b1fd20220db48b725857f9bba5d0442748e5f102c7f03eccd903572edb8c713ed251026d6a45838b10279a3ce092c0cb2f92ce93ccea8145191b6e48f38b5193ad3b10c2a2fd67b0da5eedc1a9834a01e7d1d4b50e4ecb0e8d599f2e6dd4128faa5ecc3aec51c086f04980d9f30165d3cf6fd652b6b134542c7dfc6e3aa48be5b38ba09c62f9994d9e770b1cd2c52a5385ed7d0f15f74fb13e518f1d5304473e2f91587ff5ae614a00dd1dbdf09fcf176d945520ff67acdbb72ecc088caf08514', 7776000, '2026-02-26 06:34:36', '2025-11-28 06:34:36', '2025-11-28 06:34:36');

-- --------------------------------------------------------

--
-- Table structure for table `permissions`
--

CREATE TABLE `permissions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `role_type` varchar(255) DEFAULT NULL COMMENT '1=admin, 2=Editor, 3=Viewer, 4=General Post 5=Product Manage 6=User Manage ',
  `parent_id` int(11) DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `permissions`
--

INSERT INTO `permissions` (`id`, `name`, `guard_name`, `role_type`, `parent_id`, `created_at`, `updated_at`) VALUES
(1, 'view posts', 'api', '1,2,3', 27, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(2, 'create posts', 'api', '1,2', 27, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(3, 'edit posts', 'api', '1,2', 27, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(4, 'delete posts', 'api', '1,2,3', 27, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(5, 'view users', 'api', '1,2,3', 28, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(6, 'create users', 'api', '1,2', 28, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(7, 'edit users', 'api', '1,2', 28, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(8, 'delete users', 'api', '1,2,3', 28, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(9, 'view products', 'api', '1,2,3', 29, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(10, 'create products', 'api', '1,2', 29, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(11, 'edit products', 'api', '1,2', 29, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(12, 'delete products', 'api', '1,2,3', 29, '2025-10-09 14:53:43', '2025-10-09 14:53:43'),
(14, 'view posts category', 'api', '1,2,3', 30, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(15, 'create posts category', 'api', '1,2', 30, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(16, 'edit posts category', 'api', '1,2', 30, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(17, 'delete posts category', 'api', '1,2,3', 30, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(22, 'view role', 'api', '1,2,3', 31, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(23, 'create role', 'api', '1,2', 31, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(24, 'edit role', 'api', '1,2', 31, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(25, 'delete role', 'api', '1,2,3', 31, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(26, 'Update website setting', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(27, 'Post Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(28, 'User Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(29, 'Products Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(30, 'Post Category Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(31, 'Role Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(32, 'Permission Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(33, 'view permission', 'api', '1', 32, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(34, 'create permission', 'api', '1', 32, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(35, 'edit permission', 'api', '1', 32, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(36, 'delete permission', 'api', '1', 32, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(37, 'Products Category Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(38, 'view product category', 'api', '1', 37, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(39, 'create product category', 'api', '1', 37, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(40, 'edit product category', 'api', '1', 37, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(41, 'delete product category', 'api', '1', 37, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(42, 'Banner Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(43, 'view banner', 'api', '1', 42, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(44, 'create banner', 'api', '1', 42, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(45, 'edit banner', 'api', '1', 42, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(46, 'delete banner', 'api', '1', 42, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(47, 'Supplier Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(48, 'view supplier', 'api', '1', 47, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(49, 'create supplier', 'api', '1', 47, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(50, 'edit supplier', 'api', '1', 47, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(51, 'delete supplier', 'api', '1', 47, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(52, 'Purchase Order Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(53, 'view purchase order', 'api', '1', 52, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(54, 'create purchase order', 'api', '1', 52, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(55, 'edit purchase order', 'api', '1', 52, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(56, 'delete purchase order', 'api', '1', 52, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(57, 'Product Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(58, 'view product', 'api', '1', 57, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(59, 'create product', 'api', '1', 57, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(60, 'edit product', 'api', '1', 57, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(61, 'delete product', 'api', '1', 57, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(62, 'Order Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(63, 'view order', 'api', '1', 62, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(64, 'create order', 'api', '1', 62, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(65, 'edit order', 'api', '1', 62, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(66, 'delete order', 'api', '1', 62, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(67, 'Customer Management', 'api', '1', 0, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(68, 'view Customer', 'api', '1', 67, '2025-10-09 10:09:35', '2025-10-09 10:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description_short` text DEFAULT NULL,
  `description_full` text DEFAULT NULL,
  `meta_title` text DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` text DEFAULT NULL,
  `text_1` text DEFAULT NULL,
  `text_2` text DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `subcategoryId` int(11) DEFAULT NULL,
  `entry_by` int(11) DEFAULT NULL,
  `thumnail_img` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `name`, `slug`, `description_short`, `description_full`, `meta_title`, `meta_description`, `meta_keyword`, `text_1`, `text_2`, `categoryId`, `subcategoryId`, `entry_by`, `thumnail_img`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Crafting Premium Living Spaces Across Dhaka', 'crafting-premium-living-spaces-across-dhaka', '', '<p>Stellar Structures Limited is a trusted name in Bangladesh\'s real estate industry, delivering exceptional residential and commercial developments built on quality, transparency, and innovation.</p>', 'Crafting Premium Living Spaces Across Dhaka', 'Crafting Premium Living Spaces\r\nAcross Dhaka', 'Crafting Premium Living Spaces Across Dhaka', NULL, NULL, 22, NULL, 2, NULL, 1, '2026-08-25 04:11:32', '2026-08-25 04:11:32'),
(2, 'Building Landmarks. Creating Better Living.', 'building-landmarks-creating-better-living-', '', '<p>Founded with a vision to redefine urban living in Bangladesh, Stellar Structures Limited brings together passionate professionals dedicated to creating residences that inspire. From site selection to final handover, we maintain the highest standards of construction quality, design innovation, and transparent communication.</p>', 'Building Landmarks. Creating Better Living.', 'Building Landmarks. Creating Better Living.', 'Building Landmarks. Creating Better Living.', NULL, NULL, 22, NULL, 2, NULL, 1, '2026-08-25 04:26:14', '2026-08-25 04:26:14'),
(3, 'Company Profile', 'company-profile', '', '<p>Stellar Structures Limited is a premier real estate development company in Bangladesh, dedicated to creating exceptional residential and commercial spaces that redefine modern living. Since our inception, we have been driven by a singular mission — to deliver premium quality properties that combine innovative design, superior craftsmanship, and sustainable building practices. Our portfolio spans across luxury apartments, commercial complexes, duplexes, penthouses, and mixed-use developments, each designed to meet the evolving needs of discerning homeowners and investors in Dhaka and beyond.</p><p>&nbsp;</p><p>What sets Stellar Structures apart is our unwavering commitment to transparency and trust. In an industry where uncertainty can often cloud decisions, we have built our reputation on complete openness — from clear pricing and detailed project timelines to regular progress updates and honest communication. Every client who partners with Stellar receives the same level of dedication and respect, regardless of project size. We believe that trust is the foundation of every successful development, and we work tirelessly to earn and maintain that trust through every interaction, every milestone, and every handover.</p><p>&nbsp;</p><p>As a forward-thinking company, we are embracing digitalization to transform the way real estate is experienced in Bangladesh. From virtual reality property tours and AI-powered design optimization to smart building management systems and digital customer portals, we are leveraging cutting-edge technology to enhance every step of the property journey. Our digital initiatives ensure that clients have real-time access to project updates, payment schedules, and document management — all from the convenience of their devices. We are not just building properties; we are building a digital ecosystem that empowers our clients with transparency, convenience, and control.</p><p>&nbsp;</p><p>At Stellar Structures Limited, our vision extends beyond individual buildings. We are committed to shaping communities and contributing to the sustainable development of Bangladesh. Every project we undertake is designed with environmental responsibility in mind, incorporating energy-efficient systems, eco-friendly materials, and green spaces that promote healthy living. Our team of architects, engineers, and project managers work collaboratively to deliver developments that stand the test of time — not just in structural integrity, but in the value they bring to families, businesses, and neighborhoods. Discover the Stellar difference, where quality meets innovation and trust meets excellence.</p>', 'About Stellar Structures', 'About Stellar Structures', 'About Stellar Structures', NULL, NULL, 1, 2, 2, NULL, 1, '2026-08-25 04:28:41', '2026-08-25 04:28:41'),
(4, 'Chairman\'s Profile', 'chairman-s-profile', '', '<p>Muhammad Fakhrul Haider is an accomplished entrepreneur and business leader with a diverse professional background spanning banking, information technology, enterprise resource planning (ERP) security, and real estate.</p><p>Mr. Haider graduated from Independent University, Bangladesh (IUB) in 2002 and began his professional career as a Management Trainee Officer at Bank Asia Limited. He went on to build a successful career in Bangladesh\'s banking sector, serving in various professional capacities until 2014. His final banking position was Vice President at Mutual Trust Bank Limited.</p><p>&nbsp;</p><p>In 2014, Mr. Haider relocated to the United States and transitioned his career into the information technology sector. He spent five years at Halliburton, where he served as a Senior Application Analyst – SAP, gaining extensive experience in enterprise applications, SAP systems, and technology solutions.</p><p>&nbsp;</p><p>Driven by an entrepreneurial vision, Mr. Haider founded Astute 360 Corporation in 2019. Under his leadership, the company has developed into an IT services organization supporting federal and private-sector clients, with a particular focus on ERP security and enterprise technology solutions. Astute 360 Corporation has created employment opportunities for 27 IT specialists and generates more than USD 1 million in annual revenue.</p><p>In 2023, Mr. Haider expanded his entrepreneurial activities into the real estate sector in Bangladesh. With a strong commitment to innovation, sustainable growth, and long-term value creation, he is working to establish the real estate venture as a leading and respected company in Bangladesh.</p><p><br>As Chairman, Mr. Haider brings together his experience in banking, technology, entrepreneurship, and international business. His leadership philosophy is centered on building strong organizations, creating employment opportunities, delivering value to clients and stakeholders, and pursuing sustainable growth through integrity, innovation, and professional excellence.</p>', 'Our Team', 'Chairman\'s Profile', 'Our Team', 'Muhammad Fakhrul Haider', 'Chairman', 1, 23, 2, '/backend/files/RfUIdv2pejwKjBwc7ZZi.png', 1, '2026-08-25 04:30:43', '2026-08-25 15:11:13'),
(5, 'Managing Director\'s Profile', 'managing-director-s-profile', '', '<p>Leading Stellar Structures Limited as Managing Director is a tremendous honor and responsibility. With over 15 years of experience in structural design and project management, I am committed to upholding the highest standards of engineering excellence and delivering projects that stand as testaments to quality, innovation, and customer satisfaction.</p><p>&nbsp;</p><p>As a civil engineer trained at BUET, I bring a deep understanding of structural integrity, sustainable construction practices, and modern engineering methodologies to every project we undertake. Since 2009, I have been working in partnership at KIOSK Consultants and Construction, KIOSK Steel Structure Limited, and Revive Asset, successfully completing structural designs for numerous apartments, hospitals, educational institutions, and commercial developments.</p><p>&nbsp;</p><p>Under my leadership, Stellar Structures Limited has embraced cutting-edge technology and innovative design approaches. Our collaboration with CFS Engineers LLC, Virginia, USA on light gauge steel framing systems demonstrates our commitment to international standards and modern construction techniques. We are dedicated to delivering residential and commercial projects that are not only architecturally stunning but also structurally sound and environmentally responsible.</p><p>&nbsp;</p><p>Our vision extends beyond constructing buildings — we aim to create thriving communities and landmarks that stand the test of time. By integrating smart home solutions, energy-efficient systems, and world-class amenities, we are shaping the future of urban living in Bangladesh. I believe that the foundation of any great real estate company is the trust it earns through transparency, timely delivery, and an uncompromising commitment to excellence in every detail.</p><p>To our valued clients, partners, and well-wishers — I extend my heartfelt gratitude for your continued faith in Stellar Structures Limited. Together, we will continue to build landmarks that define Dhaka\'s skyline, create homes that nurture families, and develop commercial spaces that drive economic growth for generations to come. The future of real estate in Bangladesh is bright, and Stellar Structures Limited is proud to be at the forefront of this transformation.</p>', 'Managing Director\'s Profile', 'Managing Director\'s Profile', 'Managing Director\'s Profile', 'Engr. Mohammad Adnan', 'Managing Director', 1, 24, 2, '/backend/files/Wsr6bswJn9lte5sZGkxa.png', 1, '2026-08-25 04:33:24', '2026-08-25 15:06:41'),
(6, 'Directors\' Profile', 'directors-profile', '', '<p>Mohiuddin Khan is an experienced business professional and entrepreneur with <strong>20+ years of professional and business experience</strong> spanning information technology, energy, manufacturing, garments, and real estate. Mr. Khan graduated with a degree in Computer Science from Minnesota State University Moorhead.</p><p>He began his professional career in the United States as an IT professional in <strong>2002</strong>, gaining extensive experience in technology, business operations, and professional management. With more than two decades of experience, he has developed a strong understanding of business strategy, technology, operations, and organizational growth.</p><p>In <strong>2012</strong>, Mr. Khan expanded his professional activities into Bangladesh and began building his business career, initially focusing on the Liquefied Natural Gas (LNG) sector. Over the years, he has successfully diversified his business interests across several important industries, including <strong>steel rerolling mills, ready-made garments (RMG), and real estate</strong>.</p><p>With <strong>20+ years of international professional and business experience</strong>, combined with a strong technology background and broad exposure to multiple industries, Mr. Khan brings a strategic, diversified, and forward-looking perspective to business leadership. His experience across both the United States and Bangladesh enables him to contribute valuable insights into business development, operations, investment opportunities, strategic partnerships, and long-term growth.</p><p>As a Company Director, Mr. Khan is committed to supporting <strong>sustainable business growth, strengthening strategic partnerships, improving operational efficiency, and identifying new investment and business opportunities</strong> across the company\'s areas of operation. His extensive experience and multidisciplinary background position him to provide strategic leadership and contribute meaningfully to the company\'s continued success and expansion.</p>', 'Directors\' Profile', 'Directors\' Profile', 'Directors\' Profile', 'Mohiuddin Khan', 'Director', 1, 25, 2, '/backend/files/6G9oHWkZOyWvLH2dKJuW.jpeg', 1, '2026-08-25 05:15:24', '2026-08-25 15:07:10'),
(7, 'Directors\' Profile', 'directors-profile', '', '<p>Architect Wali Muhammad is an experienced architect, construction professional, and business partner with <strong>14+ years of professional experience</strong> in architectural design, interior design, building planning, construction technology, and project development. He holds a <strong>Bachelor of Architecture (B.Arch.) from Bangladesh University of Engineering and Technology (BUET)</strong>.</p><p>Throughout his professional career, Architect Wali Muhammad has worked closely with senior architects and engineers, gaining extensive practical experience in <strong>Building Design, Interior Design, Construction Technology, Project Planning, and Architectural Development</strong>. His professional exposure includes working with both <strong>indigenous and international consulting firms</strong>, providing him with a broad understanding of diverse architectural practices, design standards, and construction methodologies.</p><p>&nbsp;</p><p>Since <strong>2009</strong>, he has been actively involved as a partner at <strong>KIOSK Consultants and Construction</strong>, <strong>KIOSK Steel Structure Limited</strong>, and <strong>Revive Asset</strong>, contributing to architectural design, construction, project development, and business operations.</p><p>During his <strong>14+ years of professional experience</strong>, Architect Wali Muhammad has successfully completed the architectural design of a wide range of projects, including <strong>residential apartments, industrial facilities, hospitals, medical colleges, religious complexes, educational institutions, commercial buildings, and mixed-use developments</strong>. His multidisciplinary experience enables him to understand projects from both architectural and construction perspectives, from initial concept and planning through design development and implementation.</p><p>Architect Wali Muhammad is a <strong>full member of the Institute of Architects, Bangladesh (IAB)</strong> and is an <strong>enlisted architect with RAJUK (Rajdhani Unnayan Kartripakkha) and CDA (Chittagong Development Authority)</strong>.</p><p>With his strong academic foundation from BUET, <strong>14+ years of professional experience</strong>, and extensive involvement in architectural and construction-related businesses, Architect Wali Muhammad brings valuable expertise in <strong>design, construction, project development, and built-environment solutions</strong>. He is committed to delivering functional, innovative, and sustainable architectural solutions while contributing to the successful development and execution of diverse projects.</p>', 'Directors\' Profile', 'Directors\' Profile', 'Directors\' Profile', 'Ar. Wali Muhammad', 'Principal Architect & Partner', 1, 25, 2, '/backend/files/gfnXmkfypLkEyc62xSI4.png', 1, '2026-08-25 05:18:17', '2026-08-25 15:07:22'),
(8, 'Ongoing Projects', 'ongoing-projects', '', '<p>Bashundhara R/A Premium Residential Living , Bashundhara, Dhaka</p><p>A thoughtfully designed residential enclave featuring spacious floor plans, premium finishes, and world-class amenities. Currently in advanced construction stages with rapid progress being made.</p>', 'Ongoing Projects', 'Ongoing Projects', 'Ongoing Projects', NULL, NULL, 6, 7, 2, '/backend/files/LsXqQa4dj3oQcjYVtHGQ.jpg', 1, '2026-08-25 05:20:04', '2026-08-25 05:20:04'),
(9, 'Sunset Tower', 'sunset-tower', '', '<p>Bashundhara R/A, Dhaka<br>A modern mixed-use tower combining luxury apartments with retail spaces, designed for urban professionals seeking convenience and elegance.</p>', 'Sunset Tower', 'Mixed-Use Development\r\nBashundhara R/A, Dhaka\r\nA modern mixed-use tower combining luxury apartments with retail spaces, designed for urban professionals seeking convenience and elegance.', 'Sunset Tower', NULL, NULL, 6, 7, 2, '/backend/files/i9LYmmXhecc8myI9o6GX.jpg', 1, '2026-08-25 05:20:53', '2026-08-25 05:20:53'),
(10, 'Upcoming Developments', 'upcoming-developments', '', '<p>Jolshiri, Dhaka</p><p>An upcoming luxury residential development set in the prestigious Jolshiri area, featuring panoramic views, smart home integration, and premium lifestyle amenities.</p>', 'Upcoming Developments', 'Upcoming Developments', 'Upcoming Developments', NULL, NULL, 6, 8, 2, '/backend/files/Lo16QotDjDZQwXhaISsA.jpg', 1, '2026-08-25 05:23:23', '2026-08-25 05:24:53'),
(11, 'Riverview Residences', 'riverview-residences', '', '<p>Jolshiri, Dhaka</p><p>An upcoming luxury residential development set in the prestigious Jolshiri area, featuring panoramic views, smart home integration, and premium lifestyle amenities.</p>', 'Jolshiri, Dhaka  An upcoming luxury residential development set in the prestigious Jolshiri area, featuring panoramic views, smart home integration, and premium lifestyle amenities.', 'Jolshiri, Dhaka\r\n\r\nAn upcoming luxury residential development set in the prestigious Jolshiri area, featuring panoramic views, smart home integration, and premium lifestyle amenities.', 'Jolshiri, Dhaka  An upcoming luxury residential development set in the prestigious Jolshiri area, featuring panoramic views, smart home integration, and premium lifestyle amenities.', NULL, NULL, 6, 8, 2, '/backend/files/9itBaf2FGuxspVMrY1Sl.jpg', 1, '2026-08-25 05:24:04', '2026-08-25 05:24:32'),
(12, 'Property Development', 'property-development', '', '<p>Property Development</p>', 'Property Development', 'Property Development', 'Property Development', NULL, NULL, 9, 10, 2, NULL, 1, '2026-08-25 05:26:13', '2026-08-25 05:26:13'),
(13, 'Construction Management', 'construction-management', '', '<p>Construction Management</p>', 'Construction Management', 'Construction Management', 'Construction Management', NULL, NULL, 9, 13, 2, NULL, 1, '2026-08-25 05:27:22', '2026-08-25 05:27:22'),
(14, 'Interior Design', 'interior-design', '', '<p>Interior Design</p>', 'Interior Design', 'Interior Design', 'Interior Design', NULL, NULL, 9, 14, 2, NULL, 1, '2026-08-25 05:27:58', '2026-08-25 05:27:58'),
(15, 'Architectural Design', 'architectural-design', '', '<p>Architectural Design</p>', 'Service Architectural Design', 'Architectural Design', 'Architectural Design', NULL, NULL, 9, 15, 2, NULL, 1, '2026-08-25 05:29:25', '2026-08-25 05:29:25'),
(16, 'Investment Consultancy', 'investment-consultancy', '', '<p>Investment Consultancy</p>', 'Investment Consultancy', 'Investment Consultancy', 'Investment Consultancy', NULL, NULL, 9, 16, 2, NULL, 1, '2026-08-25 05:30:03', '2026-08-25 05:30:03'),
(17, 'Blog', 'blog', '', '<p>Trusted IT Partner for Startups &amp; Enterprises<br>Founded in 2019, managed by professionals from an IT background with years of industry experience.<br>We offer technology consulting and staff augmentation services, with an operational presence in the United&nbsp;</p>', 'Blog', 'Trusted IT Partner for Startups & Enterprises\r\nFounded in 2019, managed by professionals from an IT background with years of industry experience.\r\nWe offer technology consulting and staff augmentation services, with an operational presence in the United', 'Blog', NULL, NULL, 21, NULL, 2, NULL, 1, '2026-08-25 13:27:53', '2026-08-25 13:27:53');

-- --------------------------------------------------------

--
-- Table structure for table `post_category`
--

CREATE TABLE `post_category` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post_category`
--

INSERT INTO `post_category` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Home', 1, '2026-08-24 14:53:19', '2026-08-24 14:53:19'),
(2, 'About', 1, '2026-08-24 14:53:41', '2026-08-24 14:53:41'),
(3, 'Company Profile', 1, '2026-08-24 14:53:55', '2026-08-24 14:53:55'),
(4, 'Our Team Chairman\'s Profile', 1, '2026-08-24 14:54:04', '2026-08-25 03:33:57'),
(5, 'Construction Management', 1, '2026-08-24 14:54:38', '2026-08-24 14:54:38'),
(6, 'Ongoing Projects', 1, '2026-08-24 14:55:01', '2026-08-24 14:55:01'),
(7, 'Upcoming Projects', 1, '2026-08-24 14:55:15', '2026-08-24 14:55:15'),
(8, 'Service Property Development', 1, '2026-08-24 14:56:43', '2026-08-24 14:56:43'),
(9, 'Service Construction Management', 1, '2026-08-24 14:57:06', '2026-08-24 14:57:06'),
(10, 'Service Interior Design', 1, '2026-08-24 14:57:19', '2026-08-24 14:57:19'),
(11, 'Service Architectural Design', 1, '2026-08-24 14:57:42', '2026-08-24 14:57:42'),
(12, 'Service Investment Consultancy', 1, '2026-08-24 14:58:11', '2026-08-24 14:58:11'),
(13, 'Book an Appointment', 1, '2026-08-24 14:58:43', '2026-08-24 14:58:43'),
(14, 'Customer Support', 1, '2026-08-24 14:59:10', '2026-08-24 14:59:10'),
(15, 'Our Team Managing Director\'s Profile', 1, '2026-08-25 03:34:20', '2026-08-25 03:34:20'),
(16, 'Our Team Directors\' Profile', 1, '2026-08-25 03:34:52', '2026-08-25 03:34:52');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  `description_full` text DEFAULT NULL,
  `purchase_order_id` int(11) DEFAULT NULL,
  `supplier_id` int(11) DEFAULT NULL,
  `categoryId` int(11) DEFAULT NULL,
  `subcategoryId` int(11) DEFAULT NULL,
  `inSubcategoryId` int(11) DEFAULT NULL,
  `meta_title` varchar(255) DEFAULT NULL,
  `meta_description` text DEFAULT NULL,
  `meta_keyword` varchar(255) DEFAULT NULL,
  `sku` varchar(255) DEFAULT NULL,
  `cash_dev_status` int(11) DEFAULT NULL,
  `price` double(10,2) DEFAULT NULL COMMENT 'regular_price',
  `discount_price` decimal(10,2) DEFAULT NULL COMMENT 'discount_price',
  `unit` varchar(255) DEFAULT NULL,
  `stock_qty` int(11) DEFAULT NULL,
  `stock_mini_qty` int(11) DEFAULT NULL,
  `shipping_days` int(11) DEFAULT NULL,
  `thumnail_img` varchar(255) DEFAULT NULL,
  `first_update` int(11) NOT NULL DEFAULT 0 COMMENT '1=first update\r\n0=no update',
  `status` int(11) DEFAULT 1,
  `entry_by` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_attribue`
--

CREATE TABLE `product_attribue` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `attributeName` varchar(255) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `sellingPrice` decimal(10,2) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_img_history`
--

CREATE TABLE `product_img_history` (
  `id` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `gallery_image` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT current_timestamp(),
  `updated_at` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_invoice`
--

CREATE TABLE `purchase_order_invoice` (
  `purchase_order_id` int(11) NOT NULL,
  `description` varchar(255) NOT NULL,
  `sku` varchar(100) NOT NULL,
  `attribute` text DEFAULT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `purchase_order_particular`
--

CREATE TABLE `purchase_order_particular` (
  `id` int(11) NOT NULL,
  `supplier_id` varchar(255) NOT NULL,
  `invNumber` varchar(255) DEFAULT NULL,
  `orderDate` date NOT NULL,
  `grandTotal` decimal(10,2) NOT NULL,
  `transfer_status` int(10) NOT NULL DEFAULT 0 COMMENT '1=Transfer\r\n0=Not transfer',
  `billingAddress` varchar(255) DEFAULT NULL,
  `shippingAddress` varchar(255) DEFAULT NULL,
  `remarks` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `role_type` int(11) NOT NULL COMMENT '1=admin,\r\n2=landowner,\r\n3=customer\r\n4=User Manage\r\n\r\n\r\n',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`, `guard_name`, `role_type`, `created_at`, `updated_at`) VALUES
(1, 'admin', 'api', 1, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(2, 'landowner', 'api', 2, '2025-10-09 10:09:35', '2025-10-09 10:09:35'),
(3, 'buyer', 'api', 3, '2025-10-09 10:09:35', '2025-10-09 10:09:35');

-- --------------------------------------------------------

--
-- Table structure for table `roles_type`
--

CREATE TABLE `roles_type` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `guard_name` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `roles_type`
--

INSERT INTO `roles_type` (`id`, `name`, `guard_name`, `created_at`, `updated_at`) VALUES
(1, 'Admin', 'api', '2023-01-08 12:10:18', '2023-01-08 12:10:18'),
(2, 'Landowner', 'api', '2023-01-23 14:58:53', '2023-01-23 14:58:53'),
(3, 'Buyer', 'api', '2023-01-23 14:58:53', '2023-01-23 14:58:53');

-- --------------------------------------------------------

--
-- Table structure for table `role_has_permissions`
--

CREATE TABLE `role_has_permissions` (
  `permission_id` bigint(20) UNSIGNED NOT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `role_has_permissions`
--

INSERT INTO `role_has_permissions` (`permission_id`, `role_id`) VALUES
(1, 1),
(1, 2),
(2, 1),
(2, 2),
(3, 1),
(3, 2),
(5, 1),
(5, 2),
(6, 1),
(6, 2),
(7, 1),
(7, 2),
(9, 1),
(9, 2),
(10, 1),
(10, 2),
(11, 1),
(11, 2),
(14, 1),
(14, 2),
(15, 1),
(15, 2),
(16, 1),
(16, 2),
(22, 1),
(22, 2),
(23, 2),
(24, 1),
(24, 2),
(33, 1),
(34, 1),
(35, 1),
(38, 1),
(39, 1),
(40, 1),
(43, 1),
(44, 1),
(45, 1),
(46, 1),
(48, 1),
(49, 1),
(50, 1),
(53, 1),
(54, 1),
(55, 1),
(58, 1),
(59, 1),
(60, 1),
(63, 1),
(64, 1),
(65, 1),
(68, 1);

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('7gLI2NsTYyrItp6jrcPZ7INlkuWggKGruhWQOnQe', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiV0lUYkVIMjhSQjNtQ0twdGd1UUxseHFITGlYU2FHbDBDcHFIRHIzOCI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1775820575),
('9Cpwce3ti1QKJIbzG3sQso7sCvy7VhUnzgeNPThY', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoicGdPTXgwNDVLYVBEOVJFelVmZXFNSHZNQjVYQWdqSXJkRkd6WnlpOSI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1775820766),
('AcJT1s6n7SykgAnk4EB6Jvu4Pt6tV7XACABdvdWC', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:153.0) Gecko/20100101 Firefox/153.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVFZoVlNzUTRQVzc1V3F0dUlkbExtWWh5NnV3U2k2NmZhRmFLSVFHMiI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1784954226),
('DEBJPPl9T9RvOQgVoJhsi1vTmi4YGEPLWCJuOJ6W', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:153.0) Gecko/20100101 Firefox/153.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiSlp4WGdQc1NJeGJFR3BHblk5aXBVdkRGcjRhWHoybkZ1NGhQSGEyciI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1784760406),
('IcVlHXMN1dPOZ3GFY1pOjW2dMND1db7SgZmZVvu7', NULL, '134.122.85.182', 'Mozilla/5.0 (X11; Linux x86_64; rv:142.0) Gecko/20100101 Firefox/142.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiZ05TanVBQUNPbUdOSFZWNFNKSDRYWUcwMjh3YWY1Nk91NmtZM3lCTiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6Mzk6Imh0dHBzOi8vd3d3LmFwaWJpcmdyb3VwLmZ1dHVyZWdlbml0LmNvbSI7fXM6NjoiX2ZsYXNoIjthOjI6e3M6Mzoib2xkIjthOjA6e31zOjM6Im5ldyI7YTowOnt9fX0=', 1768997359),
('L70t18Lk30ffJZAiNNurCgfRuLmV8eMNQn9yGJJe', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:149.0) Gecko/20100101 Firefox/149.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoibG5iSVJzTHlqaFdYU3RBSXFZbmdXRjRQYXg5RDQ1WXFpc2gwT0RiQyI7czo5OiJfcHJldmlvdXMiO2E6Mjp7czozOiJ1cmwiO3M6MjE6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMCI7czo1OiJyb3V0ZSI7Tjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1775820643),
('MzTCD7DLPdWWrcaUHlPtZyY1uDNsQCrUVoItU0tE', NULL, '45.250.23.12', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:147.0) Gecko/20100101 Firefox/147.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiVnJlQXRJOFF4ZUhJRXpTbzNtT1RoTFc3aHdUbnR6SXpNaDRDQVQ4SiI7czo2OiJfZmxhc2giO2E6Mjp7czozOiJuZXciO2E6MDp7fXM6Mzoib2xkIjthOjA6e319czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHBzOi8vYXBpYmlyZ3JvdXAuZnV0dXJlZ2VuaXQuY29tIjt9fQ==', 1768999565);

-- --------------------------------------------------------

--
-- Table structure for table `setting`
--

CREATE TABLE `setting` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `tel` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `address` mediumtext NOT NULL,
  `whatsApp` varchar(255) NOT NULL,
  `bkash_number` varchar(255) DEFAULT NULL,
  `emergency` varchar(255) NOT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `description` mediumtext NOT NULL,
  `copyright` varchar(255) NOT NULL,
  `status` int(11) NOT NULL,
  `admin_photo` varchar(244) NOT NULL,
  `admin_name` varchar(255) NOT NULL,
  `admin_email` varchar(255) NOT NULL,
  `admin_phone` varchar(255) NOT NULL,
  `meta_keywords` mediumtext DEFAULT NULL,
  `meta_description` mediumtext DEFAULT NULL,
  `pphoto` varchar(255) NOT NULL,
  `bg_color` varchar(255) DEFAULT NULL,
  `currency` varchar(150) DEFAULT NULL,
  `reffer_bonus` int(11) DEFAULT NULL,
  `fblink` varchar(255) DEFAULT NULL,
  `twitterlink` varchar(255) DEFAULT NULL,
  `linkdinlink` varchar(255) DEFAULT NULL,
  `instragramlink` varchar(255) DEFAULT NULL,
  `store_policy` longtext DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `telegram` varchar(255) DEFAULT NULL,
  `devliery_charge_inside_dhk` int(10) DEFAULT NULL,
  `devliery_charge_outside_dhk` int(10) DEFAULT NULL,
  `register_bonus` int(11) DEFAULT NULL,
  `promotional_banner` int(5) DEFAULT NULL COMMENT '1=show,0=hide',
  `level_1_bonus` int(11) DEFAULT NULL,
  `level_2_bonus` int(11) DEFAULT NULL,
  `level_3_bonus` int(11) DEFAULT NULL,
  `update_by` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `setting`
--

INSERT INTO `setting` (`id`, `name`, `tel`, `email`, `address`, `whatsApp`, `bkash_number`, `emergency`, `photo`, `description`, `copyright`, `status`, `admin_photo`, `admin_name`, `admin_email`, `admin_phone`, `meta_keywords`, `meta_description`, `pphoto`, `bg_color`, `currency`, `reffer_bonus`, `fblink`, `twitterlink`, `linkdinlink`, `instragramlink`, `store_policy`, `website`, `telegram`, `devliery_charge_inside_dhk`, `devliery_charge_outside_dhk`, `register_bonus`, `promotional_banner`, `level_1_bonus`, `level_2_bonus`, `level_3_bonus`, `update_by`, `created_at`, `updated_at`) VALUES
(1, 'Stellar Structures Limited', '58814651, 58814692', 'info@stellarstructuresbd.com', 'The Laureate, Level # C5-C7, House # 56, Road # 11, Block # F, Banani-11, Dhaka, Bangladesh, 1213', '01915728982', '', '58814651, 58814692', 'pic/2tAjiUpJ0X8GziIrKJJJ.png', 'Trusted IT Partner for Startups & Enterprises\nFounded in 2019, managed by professionals from an IT background with years of industry experience.\nWe offer technology consulting and staff augmentation services, with an operational presence in the United States. Our expertise spans across diverse IT domains, making us a preferred choice among several U.S.-based clients.', 'Copyright © 2026 . All Rights Reserved', 1, 'pic/ZOdc8nsWAMY1YELkp9zH.jpg', 'admin', 'info@admin.com', '+44245454545', NULL, NULL, '', '#ffffff', '', 5, '#', 'https://www.facebook.com', 'https://web.whatsapp.com/', '#', '', '#', '#', 0, 0, 5, 1, 0, 0, 0, NULL, '2024-05-12 05:32:50', '2026-08-25 12:54:42');

-- --------------------------------------------------------

--
-- Table structure for table `stock_out_entries`
--

CREATE TABLE `stock_out_entries` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `invoice_no` varchar(255) NOT NULL,
  `date` date NOT NULL,
  `purpose` varchar(255) DEFAULT NULL,
  `received_by` varchar(255) DEFAULT NULL,
  `grand_total` decimal(12,2) NOT NULL DEFAULT 0.00,
  `status` tinyint(4) NOT NULL DEFAULT 1,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `entry_by` bigint(20) UNSIGNED DEFAULT NULL,
  `district` varchar(255) DEFAULT NULL,
  `data_center` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `stock_out_items`
--

CREATE TABLE `stock_out_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `stock_out_entry_id` bigint(20) UNSIGNED NOT NULL,
  `item_id` bigint(20) UNSIGNED DEFAULT NULL,
  `item_name` varchar(255) NOT NULL,
  `qty` int(11) NOT NULL,
  `price` decimal(12,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `supplier`
--

CREATE TABLE `supplier` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `status` int(11) NOT NULL DEFAULT 1,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `supplier`
--

INSERT INTO `supplier` (`id`, `name`, `status`, `created_at`, `updated_at`) VALUES
(1, 'BMI', 1, '2025-11-03 00:09:06', '2025-12-10 08:03:01'),
(2, 'KGI HARDWARE ACCESSORIES LTD.', 1, '2025-11-03 00:09:16', '2025-11-03 00:09:16'),
(3, 'Bir Tools', 1, '2025-11-03 00:09:30', '2025-12-07 08:58:04'),
(4, 'Bir Consumer', 1, '2025-11-03 00:09:49', '2025-12-10 07:46:23');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  `role_type` int(11) DEFAULT NULL,
  `register_type` varchar(20) DEFAULT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT 1,
  `district` int(11) DEFAULT NULL COMMENT 'this data come from categories table',
  `data_center` int(11) DEFAULT NULL COMMENT 'this data come from categories table',
  `entry_by` int(11) DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `role_id`, `role_type`, `register_type`, `email_verified_at`, `password`, `phone_number`, `address`, `facebook`, `website`, `github`, `twitter`, `instagram`, `status`, `district`, `data_center`, `entry_by`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Landowner', 'landowner@gmail.com', 2, 2, NULL, NULL, '$2y$12$HojEaTtaPZMiSUu.Ajvbs.IIDQ/hKxWbt5s94wcwounOiTxSwc6Ve', '019157289821', 'DHK-1', 'https://www.facebook.com/watch/?ref=tab', '', '', '', '', 1, 6, 3, NULL, NULL, '2025-10-09 10:28:23', '2026-07-10 11:01:13'),
(2, 'Admin', 'admin@gmail.com', 1, 1, 'admin', NULL, '$2y$10$EeVcrscdDmc0XCaydCTAbuj6T.a4VpH79POvFPVkItnv9GOZP5ItO', '01915728988', 'DHK', NULL, NULL, NULL, NULL, NULL, 1, 7, 4, NULL, NULL, '2025-10-09 11:02:48', '2026-06-30 12:12:13'),
(3, 'Customer', 'ibraheem@gmail.com', 3, 3, NULL, NULL, '$2y$12$afrmcY8FZuebgVLZnoZTxeGYfWOsyCBGd0QkPAjVFakBdj7fiN9Ii', '019157289824', 'DHK-3', NULL, NULL, NULL, NULL, NULL, 1, 6, 3, 2, NULL, NULL, '2026-07-09 07:38:16'),
(6, 'Ayesha begum', 'ayesha@gmail.com', 2, 2, 'landowner', NULL, '$2y$12$7lXTz3iKrUtj.TOZdwZEJei2CV52Hu/8mTr5e1TbjhSmB8DncJX06', '019157289891', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, '2026-08-24 04:45:45', '2026-08-24 04:45:45'),
(7, 'Jannat Begum', 'jannat@gmail.com', 3, 3, 'buyer', NULL, '$2y$12$SAI2iqv/ZPvBxzAcN0mwKOgJxzAD/KEbsIgRLl2Z6NtSs/4rMzffm', '017457454785', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, '2026-08-24 04:46:32', '2026-08-24 04:46:32');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `banner`
--
ALTER TABLE `banner`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `categorys`
--
ALTER TABLE `categorys`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `slug` (`slug`);

--
-- Indexes for table `documents`
--
ALTER TABLE `documents`
  ADD PRIMARY KEY (`id`),
  ADD KEY `documents_categoryid_foreign` (`categoryId`);

--
-- Indexes for table `document_category`
--
ALTER TABLE `document_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `inventory_entries`
--
ALTER TABLE `inventory_entries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_entries_invoice_no_unique` (`invoice_no`),
  ADD KEY `inventory_entries_user_id_foreign` (`user_id`),
  ADD KEY `inventory_entries_entry_by_foreign` (`entry_by`);

--
-- Indexes for table `inventory_items`
--
ALTER TABLE `inventory_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_inventory_items_entry_id` (`inventory_entry_id`),
  ADD KEY `idx_inventory_items_item_name` (`item_name`);

--
-- Indexes for table `inventory_item_masters`
--
ALTER TABLE `inventory_item_masters`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `inventory_item_masters_name_unique` (`name`),
  ADD KEY `inventory_item_masters_user_id_foreign` (`user_id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`model_id`,`model_type`),
  ADD KEY `model_has_permissions_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD PRIMARY KEY (`role_id`,`model_id`,`model_type`),
  ADD KEY `model_has_roles_model_id_model_type_index` (`model_id`,`model_type`);

--
-- Indexes for table `mother_entry_frm`
--
ALTER TABLE `mother_entry_frm`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `notes_user_id_foreign` (`user_id`),
  ADD KEY `notes_entry_by_foreign` (`entry_by`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `orderId` (`orderId`);

--
-- Indexes for table `order_history`
--
ALTER TABLE `order_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `pathao_tokens`
--
ALTER TABLE `pathao_tokens`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `permissions`
--
ALTER TABLE `permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `permissions_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `post_category`
--
ALTER TABLE `post_category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `sku` (`sku`);

--
-- Indexes for table `product_attribue`
--
ALTER TABLE `product_attribue`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product_img_history`
--
ALTER TABLE `product_img_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `purchase_order_invoice`
--
ALTER TABLE `purchase_order_invoice`
  ADD KEY `order_id` (`purchase_order_id`);

--
-- Indexes for table `purchase_order_particular`
--
ALTER TABLE `purchase_order_particular`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `roles_type`
--
ALTER TABLE `roles_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `roles_name_guard_name_unique` (`name`,`guard_name`);

--
-- Indexes for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD PRIMARY KEY (`permission_id`,`role_id`),
  ADD KEY `role_has_permissions_role_id_foreign` (`role_id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `setting`
--
ALTER TABLE `setting`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `stock_out_entries`
--
ALTER TABLE `stock_out_entries`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `stock_out_entries_invoice_no_unique` (`invoice_no`),
  ADD KEY `stock_out_entries_user_id_foreign` (`user_id`),
  ADD KEY `stock_out_entries_entry_by_foreign` (`entry_by`);

--
-- Indexes for table `stock_out_items`
--
ALTER TABLE `stock_out_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `stock_out_items_stock_out_entry_id_index` (`stock_out_entry_id`),
  ADD KEY `stock_out_items_item_id_index` (`item_id`);

--
-- Indexes for table `supplier`
--
ALTER TABLE `supplier`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `phone_number` (`phone_number`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `banner`
--
ALTER TABLE `banner`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `categorys`
--
ALTER TABLE `categorys`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `documents`
--
ALTER TABLE `documents`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `document_category`
--
ALTER TABLE `document_category`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_entries`
--
ALTER TABLE `inventory_entries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_items`
--
ALTER TABLE `inventory_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `inventory_item_masters`
--
ALTER TABLE `inventory_item_masters`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=207;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `mother_entry_frm`
--
ALTER TABLE `mother_entry_frm`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_history`
--
ALTER TABLE `order_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `pathao_tokens`
--
ALTER TABLE `pathao_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `permissions`
--
ALTER TABLE `permissions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `post_category`
--
ALTER TABLE `post_category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_attribue`
--
ALTER TABLE `product_attribue`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_img_history`
--
ALTER TABLE `product_img_history`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `purchase_order_particular`
--
ALTER TABLE `purchase_order_particular`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `roles_type`
--
ALTER TABLE `roles_type`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `setting`
--
ALTER TABLE `setting`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `stock_out_entries`
--
ALTER TABLE `stock_out_entries`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `stock_out_items`
--
ALTER TABLE `stock_out_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `supplier`
--
ALTER TABLE `supplier`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `documents`
--
ALTER TABLE `documents`
  ADD CONSTRAINT `documents_categoryid_foreign` FOREIGN KEY (`categoryId`) REFERENCES `document_category` (`id`);

--
-- Constraints for table `inventory_entries`
--
ALTER TABLE `inventory_entries`
  ADD CONSTRAINT `inventory_entries_entry_by_foreign` FOREIGN KEY (`entry_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `inventory_entries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `inventory_items`
--
ALTER TABLE `inventory_items`
  ADD CONSTRAINT `fk_inventory_items_entry` FOREIGN KEY (`inventory_entry_id`) REFERENCES `inventory_entries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `inventory_item_masters`
--
ALTER TABLE `inventory_item_masters`
  ADD CONSTRAINT `inventory_item_masters_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `model_has_permissions`
--
ALTER TABLE `model_has_permissions`
  ADD CONSTRAINT `model_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `model_has_roles`
--
ALTER TABLE `model_has_roles`
  ADD CONSTRAINT `model_has_roles_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_entry_by_foreign` FOREIGN KEY (`entry_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `notes_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `purchase_order_invoice`
--
ALTER TABLE `purchase_order_invoice`
  ADD CONSTRAINT `purchase_order_invoice_ibfk_1` FOREIGN KEY (`purchase_order_id`) REFERENCES `purchase_order_particular` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `role_has_permissions`
--
ALTER TABLE `role_has_permissions`
  ADD CONSTRAINT `role_has_permissions_permission_id_foreign` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `role_has_permissions_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE;

--
-- Constraints for table `stock_out_entries`
--
ALTER TABLE `stock_out_entries`
  ADD CONSTRAINT `stock_out_entries_entry_by_foreign` FOREIGN KEY (`entry_by`) REFERENCES `users` (`id`) ON DELETE SET NULL,
  ADD CONSTRAINT `stock_out_entries_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `stock_out_items`
--
ALTER TABLE `stock_out_items`
  ADD CONSTRAINT `stock_out_items_item_id_foreign` FOREIGN KEY (`item_id`) REFERENCES `inventory_item_masters` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `stock_out_items_stock_out_entry_id_foreign` FOREIGN KEY (`stock_out_entry_id`) REFERENCES `stock_out_entries` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
