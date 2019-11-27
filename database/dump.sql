-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: soulMate
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `images` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstName` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `lastName` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `gender` varchar(8) COLLATE utf8mb4_unicode_ci NOT NULL,
  `location` varchar(128) COLLATE utf8mb4_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `height` varchar(32) COLLATE utf8mb4_unicode_ci NOT NULL,
  `jobTitle` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ethnicity` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `religion` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iLike` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iAm` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `iAppreciate` varchar(512) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`userId`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'wenhao@soulmate.com','root','/images/Wenhao.png','Wenhao','Wang','Male','Hacienda Heights, CA',31,'5\'11\"','Software Engineer','Asian','None','I like to walk under the water.','I am an easy going guy.','I appreciate my other half loving cat as I do.','2019-11-27 18:35:33'),(2,'jeff@soulmate.com','root','/images/Jeff.jpg','Jeff','Lee','Male','Irvine, CA',28,'5\'11\"','Jr. Web Dev','Asian','Christian','Women that play tennis in cute tennis clothes.','Man that plays tennis in cute tennis clothes.','Women that are open-minded & say what\'s on their minds.','2019-11-27 18:36:54'),(3,'Irene@soulmate.com','root','/images/Irene.jpg','Irene','Kim','Female',' Los Angeles, CA',25,'5\'0\"','Singer','Asian','Christian','Men who are amazing singers & dress well','A simple girl who likes simple things','When a guy opens doors for me.','2019-11-27 18:39:32'),(4,'sarah@soulmate.com','root','/images/Sarah.png','Sarah','Park','Female','Irvine, CA',24,'5\'2\"','Actress','Asian','Christian','Men that play amazing tennis in cute tennis clothes.','a girl who plays decent tennis in very cute tennis clothes.','Guys who are funny & easy going.','2019-11-27 18:39:48'),(5,'jennifer@soulmate.com','root','/images/Jennifer.jpg','Jennifer','Park','Female','Santa Ana, CA',22,'5\'5\"','Screenwriter','Asian','Buddhist','to watch movies in my cozy couch.','a screenwriter who appreciates all forms of art.','guys with sense of taste & appreciation of the arts.','2019-11-27 18:40:06'),(6,'frodo@soulmate.com','root','/images/Frodo.png','Frodo','Baggins','Male','Shire, ME',25,'4\'2\"','Ring Bearer','Latino','Muslim','shiny golden jewelry like rings!','a short but brave hobbit who loves adventures!','Tall women who do not take my jewelry away from me.','2019-11-27 18:40:29'),(7,'legolas@soulmate.com','root','/images/Legolas.jpg','Legolas','Greenleaf','Male','Northern Mirkwood, ME',31,'5\'11\"','King of Woodland Realm','Middle Eastern','Hindu','to shoot arrows, travel with dwarfs, and enter random wars for fun!','a master archer who is looking for a beautiful queen.','women who are not gold-diggers - I am a king & rich!','2019-11-27 18:41:06'),(8,'alex@soulmate.com','root','/images/Alex.png','Alex','Hassler','Male','Laguna, CA',22,'5\'10\"','Surfer','Caucasian','Catholic','I like to sing.','A caring person.','If mydate is friendly.','2019-11-27 18:41:24'),(9,'michael@soulmate.com','root','/images/Michael.png','Michael','Chang','Male','Irvine, CA',29,'5\'11\"','Potato farmer','Asian','None','Women that like oranges','a couch potato','women that sleep more than 6 hours','2019-11-27 18:41:35'),(10,'jackie@soulmate.com','root','/images/Jackie.png','Jackie','Evancho','Female','San Diego, CA',26,'5\'7\"','Teacher','Asian','Christian','Men that sleep before 12:00','a person that loves oversleeping ','Men that can run faster than me','2019-11-27 18:41:50'),(11,'taylor@soulmate.com','root','/images/Taylor.png','Taylor','Swift','Female','Los Angeles, CA',25,'6\'2\"','Singer','Caucasion','Muslim','To dump boys because they are the ones with probems.','a perfect girl that any guy should be grateful to date.','Handsome guys with lots and lots of money.','2019-11-27 18:42:02'),(12,'vivian@soulmate.com','root','/images/Vivian.png','Vivian','Uzair','Female','Lakeforest, CA',35,'4\'10\"','Cashier at Whole Foods','Caucasion','Hindu','a desperate girl who really needs a boyfriend','a tired girl just sick of coming home alone all the time.','If you are a boy - I am sick of meeting girls pretending to be men.','2019-11-27 18:42:29');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-11-27 18:43:13
