-- MySQL dump 10.13  Distrib 5.7.26, for Linux (x86_64)
--
-- Host: localhost    Database: cms
-- ------------------------------------------------------
-- Server version	5.7.26-0ubuntu0.18.04.1

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
-- Table structure for table `announcement`
--

DROP TABLE IF EXISTS `announcement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `announcement` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `summary` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `announcement_title_unique` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `announcement`
--

LOCK TABLES `announcement` WRITE;
/*!40000 ALTER TABLE `announcement` DISABLE KEYS */;
INSERT INTO `announcement` VALUES (1,'ခိုးသန်းရွာရှိ အခြေခံပညာ မူလတန်းကျောင်းဆောင်သစ် ဆောက်လုပ်ရန် ဆွေးနွေးခြင်း','၃၀.၆.၂၀၁၉က်နေ့တွင် ရွာရှိ အခြေခံပညာ မူလတန်းလွန်ကျောင်းဆောင်သစ် ဖြစ်မြောက်ရေးအတွက် ဆွေးနွေးတိုင်ပင်ခြင်း၊ ရွာသူ/သားများမှ တစ်လလျှင် တစ်အိမ်(၁၅၀၀)ကျပ်နှုန်းဖြင့် ငွေအားပါဝင်ကူညီခြင်း၊ ကျောင်းဆောင်သစ် အမြန်ပြီးမြောက်ရေးအတွက် ငွေအားအပြင် ရွာသူ/သားများမှ မိမိတို့တတ်နိုင်သည့်ဘက်မှ လုပ်အားပါဝင်ကူညီခြင်းစသည့် အကြောင်းအရာများ တိုင်ပင်ဆွေးနွေးရန်အတွက် ကျောင်းကော်မတီဝင်များနှင့် ရပ်မိရပ်ဖများ မပျက်မကွက် တက်ရောက်ကြပါရန် တိုက်တွန်းကြေညာအပ်ပါသည်။ ဆွေးနွေးပြုလုပ်မည့် နေရာမှာ ခိုးသန်းကျေးရွာ စာသင်ကျောင်းဝင်းအတွင်း ဖြစ်ပါသည်။','၃၀.၆.၂၀၁၉က်နေ့တွင် ရွာရှိ အခြေခံပညာ မူလတန်းလွန်ကျောင်းဆောင်သစ် ဖြစ်မြောက်ရေးအတွက် ဆွေးနွေးတိုင်ပင်ခြင်း၊ ရွာသူ/သားများမှ တစ်လလျှင် တစ်အိမ်(၁၅၀၀)ကျပ်နှုန်းဖြင့် ငွေအားပါဝင်ကူညီခြင်း၊ ကျောင်းဆောင်သစ် အမြန်ပြီးမြောက်ရေးအတွက် ငွေအားအပြင် ရွာသူ/သားများမှ မိမိတို့တတ်နိုင်သည့်ဘက်မှ လုပ်အားပါဝင်ကူညီခြင်း','2019-08-19 14:23:01','default-admin','2019-08-19 14:23:01','',1,1,0.00),(2,'သွေးလွန်တုပ်ကွေး ကာကွယ်ဆေးထိုးရန် ကြေညာခြင်း','မိုးတွင်းကာလဖြစ်သဖြင့် ရေဆိုး/ရေပုပ်များမှ ပေါက်ဖွားသော ခြင်များမှ ကူးစက်တတ်သည့် ကလေးငယ်များတွင် အဖြစ်များသော သွေးလွန်တုပ်ကွေးရောဂါအကြောင်းကို မြို့နယ်ကျန်းမာရေးဌာနမှ လာရောက်ဟောပြောခြင်းနှင့် ကာကွယ်ဆေးထိုးခြင်းများ ပြုလုပ်မည်ဖြစ်ပါသည်။ သို့ဖြစ်ပါ၍ မိဘများမှ မိမိတို့၏ (၅)နှစ်အောက် ကလေးငယ်များနှင့်အတူ ကျေးလက်ကျန်းမာရေးဌာနသို့ ၃.၈.၂၀၁၉ရက်နေ့ နံနက်(၈)နာရီ အချိန်တွင် လာရောက်ကြပါရန် သတိပေး ကြေညာအပ်ပါသည်။','မိုးတွင်းကာလဖြစ်သဖြင့် ရေဆိုး/ရေပုပ်များမှ ပေါက်ဖွားသော ခြင်များမှ ကူးစက်တတ်သည့် ကလေးငယ်များတွင် အဖြစ်များသော သွေးလွန်တုပ်ကွေးရောဂါအကြောင်းကို မြို့နယ်ကျန်းမာရေးဌာနမှ လာရောက်ဟောပြောခြင်းနှင့် ကာကွယ်ဆေးထိုးခြင်းများ ပြုလုပ်မည်ဖြစ်ပါသည်။','2019-08-19 14:24:01','default-admin','2019-08-19 14:24:01','',1,1,0.00),(3,'ကျောက်ချောလမ်း ဖြစ်မြောက်ရေးအတွက် အစည်းအဝေး တက်ရောက်ရန်ကြေညာခြင်း','မုံရွာမြို့နယ် ခိုးသန်းရွာ၌ ခိုးသန်း-ကော်လပြ ကျေးရွာချင်းဆက်၍ ကျောက်ချောလမ်း ခင်းမည်ဖြစ်ပါသည်။ သို့ဖြစ်ပါ၍ ၁၂.၅.၂၀၁၉ရက်နေ့ နံနက်(၉)နာရီအချိန်၌ အုပ်ချုပ်ရေးရုံးတွင် အစည်းအဝး ပြုလုပ်သွားမည် ဖြစ်ပါသည်။ ထိုအစည်းအဝေးကို ကော်မတီဝင်များ ဆယ်အိမ်ခေါင်းများနှင့် ရွာသူ/သားများ မပျက်မကွက် တက်ရောက်ကြပါရန် တိုက်တွန်းနှိုးဆော်အပ်ပါသည်။','မုံရွာမြို့နယ် ခိုးသန်းရွာ၌ ခိုးသန်း-ကော်လပြ ကျေးရွာချင်းဆက်၍ ကျောက်ချောလမ်း ခင်းမည်ဖြစ်ပါသည်။ သို့ဖြစ်ပါ၍ ၁၂.၅.၂၀၁၉ရက်နေ့ နံနက်(၉)နာရီအချိန်၌ အုပ်ချုပ်ရေးရုံးတွင် အစည်းအဝး ပြုလုပ်သွားမည် ဖြစ်ပါသည်။ ','2019-08-19 14:25:05','default-admin','2019-08-19 14:25:05','',1,1,0.00),(4,'ခိုးသန်းကျေးရွာအတွင်း လျှပ်စစ်မီးရရှိရန်အတွက် ဆောင်ရွက်ခြင်း','ခိုးသန်းရွာတွင် လျှပ်စစ်မီးရရှိရန် လွန်ခဲ့သော ၃နှစ်မှစ၍ ကြိုးပမ်းခဲ့ပါသည်။  ကျောက်ဆစ်ပုံ Eleven လိုင်းမှ ခိုးသန်းကျေးရွာရှိTransferထိ မီးကြိုးသွယ်တန်းခြင်းကို နိုင်ငံတော်မှ ဆောင်ရွက်ပေးမည်ဖြစ်သည်။ ကျေးရွာအတွင်း မီးကြိုးသွယ်တန်းခြင်း ဓါတ်တိုင်ထူခြင်းများကို ကိုယ်ထူကိုယ်ထစနစ်ဖြင့် ဆောင်ရွက်လျှက်ရှိပါသည်။ မီတာ၁လုံးလျှင် ကျပ်၁၅၀၀၀၀ ကုန်ကျမည်ဖြစ်ပြီး ၂၀၁၉နှစ်ကုန်ပိုင်းတွင် ကျေးရွာအတွင်း မီးလင်းမည်ဟု ခန့်မှန်းထားပါသည်။','ခိုးသန်းရွာတွင် လျှပ်စစ်မီးရရှိရန် လွန်ခဲ့သော ၃နှစ်မှစ၍ ကြိုးပမ်းခဲ့ပါသည်။  ကျောက်ဆစ်ပုံ Eleven လိုင်းမှ ခိုးသန်းကျေးရွာရှိTransferထိ မီးကြိုးသွယ်တန်းခြင်းကို နိုင်ငံတော်မှ ဆောင်ရွက်ပေးမည်ဖြစ်သည်။','2019-08-19 14:26:02','default-admin','2019-08-19 14:26:02','',1,1,0.00),(5,'ခိုးသန်းရွာတွင် သွေးလွန်တုပ်ကွေးအဖြစ်များသောကြောင့် မြို့နယ်ကျန်းမာရေးဌာနမှ ကျန်းမာရေးဆောင်ရွက်ချက်များ လာရောက်ပြုလုပ်ခြင်း','ခိုးသန်းရွာတွင် သွေးလွန်တုပ်ကွေးအဖြစ်များသောကြောင့် မြို့နယ်ကျန်းမားရေးဌာနမှ တာဝန်ရှိပုဂ္ဂိုလ်များနှင့် ကျေးလက်ကျန်းမာရေးဌာနမှ ပူးပေါင်းကာ ရပ်ရွာတွင်းရှိရေတွင်းရေကန်များထဲသို့ ခြင်အန္တရာယ်ကာကွယ်နိုင်ရန် ဘိတ်ခပ်ခြင်းများ ပြုလုပ်ခဲ့ပါသည်။ ယခုနှစ်အတွင်း သွေးလွန်တုပ်ကွေးအဖြစ်များ၍ ဘိတ်ခပ်ခြင်း ကျန်းမာရေးဟောပြောခြင်းများ နှစ်ကြိမ်တိုင် ပြုလုပ်ခဲ့ပြီးဖြစ်သည်။','ခိုးသန်းရွာတွင် သွေးလွန်တုပ်ကွေးအဖြစ်များသောကြောင့် မြို့နယ်ကျန်းမားရေးဌာနမှ တာဝန်ရှိပုဂ္ဂိုလ်များနှင့် ကျေးလက်ကျန်းမာရေးဌာနမှ ပူးပေါင်းကာ ရပ်ရွာတွင်းရှိရေတွင်းရေကန်များထဲသို့ ခြင်အန္တရာယ်ကာကွယ်နိုင်ရန် ဘိတ်ခပ်ခြင်းများ ပြုလုပ်ခဲ့ပါသည်။ ','2019-08-19 14:26:47','default-admin','2019-08-19 14:26:47','',1,1,0.00);
/*!40000 ALTER TABLE `announcement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clinic_staff`
--

DROP TABLE IF EXISTS `clinic_staff`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `clinic_staff` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `position_id` int(10) unsigned NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `clinic_staff_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clinic_staff`
--

LOCK TABLES `clinic_staff` WRITE;
/*!40000 ALTER TABLE `clinic_staff` DISABLE KEYS */;
INSERT INTO `clinic_staff` VALUES (1,'ဒေါ်အေးနွဲ့','ကျေးလက်ကျန်းမာရေးဌာနခွဲ၏ တာဝန်ရှိပုဂ္ဂိုလ်','၀၉၇၉၁၇၆၄၅၉၃',5,'ACTIVE','2019-08-19 14:03:19','default-admin','2019-08-19 14:03:19','',1,1,0.00);
/*!40000 ALTER TABLE `clinic_staff` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `committee`
--

DROP TABLE IF EXISTS `committee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `committee` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `phone_no` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `position_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `committee_name_unique` (`name`),
  KEY `committee_position_id_foreign` (`position_id`),
  CONSTRAINT `committee_position_id_foreign` FOREIGN KEY (`position_id`) REFERENCES `position` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `committee`
--

LOCK TABLES `committee` WRITE;
/*!40000 ALTER TABLE `committee` DISABLE KEYS */;
INSERT INTO `committee` VALUES (1,'ဦးမြင့်အောင်','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၇၈၉၈၈၆၆၇၃','committee1566224270.png',1,'2019-08-19 14:17:50','default-admin','2019-08-19 14:17:50','',1,1,0.00),(2,'ဦးစိုးမြင့်ဦး','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၇၆၈၂၉၂၄၅၁','committee1566224978.png',3,'2019-08-19 14:29:38','default-admin','2019-08-19 14:29:38','',1,1,0.00),(3,'ဦးကျော်ကျော်ထွန်း','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၂၅၉၀၃၉၇၁၀','committee1566225042.png',3,'2019-08-19 14:30:42','default-admin','2019-08-19 14:30:42','',1,1,0.00),(4,'ဦးမြင့်ကို','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၄၄၂၄၃၇၄၇၅','committee1566271030.png',2,'2019-08-19 14:31:27','default-admin','2019-08-19 14:31:27','default-admin',1,1,0.00),(5,'ဦးမြင့်စိုး','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၉၇၆၃၄၈၃၄၇','committee1566271045.png',2,'2019-08-19 14:32:18','default-admin','2019-08-19 14:32:18','default-admin',1,1,0.00),(6,'ဦးထွန်း','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၃၃၂၀၀၃၃၁','committee1566271061.png',2,'2019-08-19 14:32:58','default-admin','2019-08-19 14:32:58','default-admin',1,1,0.00),(7,'ဦးကျော်မြင့်ဆွေ','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','၀၉၆၉၆၀၆၃၉၉၂','committee1566271079.png',2,'2019-08-19 14:33:32','default-admin','2019-08-19 14:33:32','default-admin',1,1,0.00);
/*!40000 ALTER TABLE `committee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact`
--

DROP TABLE IF EXISTS `contact`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contact` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `subject` longtext,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `contact_email_unique` (`email`),
  UNIQUE KEY `contact_phone_no_unique` (`phone_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact`
--

LOCK TABLES `contact` WRITE;
/*!40000 ALTER TABLE `contact` DISABLE KEYS */;
/*!40000 ALTER TABLE `contact` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `festival`
--

DROP TABLE IF EXISTS `festival`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `festival` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `festival_title_unique` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `festival`
--

LOCK TABLES `festival` WRITE;
/*!40000 ALTER TABLE `festival` DISABLE KEYS */;
INSERT INTO `festival` VALUES (1,'သိမ်းခိုရှင်ဘုရားပွဲ','သိမ်းခိုရှင်စေတီတော်သည်မင်္ဂလာရွာဦးကျောင်းတိုက်၀င်းအတွင်းတွင်တည်ထားကိုးကွယ်သောစေတီတော် ဖြစ်သည်။သိမ်းခိုရှင်ဘုရားပွဲတော်ကိုနှစ်စဥ်နှစ်တိုင်းကဆုန်လဆန်း၇/၈ရက်တွင်စည်ကားသိုက်မြိုက်စွာကျင်းပလျှက်ရှိသည်။','ACTIVE','2019-08-20 01:06:50','default-admin','2019-08-20 01:06:50','',1,1,0.00),(2,'ကဆုန်ညောင်ရေသွန်းပွဲတော်',' ညောင်ရေသွန်းပွဲတော်သည်ဗုဒ္ဓဘာသာ၀င်တို့၏အထွဋ်အမြတ်ထားရာဘာသာရေးဓလေ့ပွဲတော်ဖြစ်သည်။ညောင်ရေသွန်းပွဲကိုနှစ်စဥ်နွေဥတု၏နောက်ဆုံးလဖြစ်သောကဆုန်လပြည့်နေ့တွင်ကျင်းပလျှက်ရှိသည်။ထို့ကြောင့်နှစ်စဥ်ကဆုန်လပြည့်နေ့ညနေခင်းအချိန်အခါတွင်မဟာသုခါရာမကျောင်းအတွင်းရှိညောင်ပင်ကြီး၌ရွာသူ၊ရွာသားများကကဆုန်ညောင်ရေသွန်းပွဲကိုစည်ကားသိုက်မြိုက်စွာကျင်းပကြသည်။','ACTIVE','2019-08-20 01:07:43','default-admin','2019-08-20 01:07:43','',1,1,0.00),(3,'သီတင်းကျွတ်မီးထွန်းပွဲ','ဂေါတမမြတ်စွာဘုရားသည်နတ်ပြည်၌တရားဟောကြားပြီးနောက်လူ့ပြည်သို့ပြန်ကြွလာသည်ကိုအမှတ်တရဖြစ်စေရန်အလို့ငှာသီတင်းကျွတ်မီးထွန်းပွဲတော်ကိုသီတင်းကျွတ်လပြည့်နေ့နှင့်လပြည့်ကျော်တစ်ရက်နေ့တွင်ခိုးသန်းတစ်ရွာလုံးကျင်းပကြပါသည်။ရွာသူ၊ရွာသားများသည်သူတို့၏အိမ်များကိုဆီမီးများ၊ရောင်စုံမီးပုံးများဖြင့်အလှဆင်ပြီးပွဲတော်ကိုဖော်ကျူးကြပါသည်။','ACTIVE','2019-08-20 01:09:39','default-admin','2019-08-20 01:09:39','default-admin',1,1,0.00),(4,'တန်ဆောင်တိုင်ပွဲတော်','တန်ဆောင်တိုင်ပွဲတော်ကိုတန်ဆောင်မုန်းလအတွင်းတွင်ခိုးသန်းရွာတစ်ရွာလုံး၌ကျင်းပကြပြီးသင်္ကန်းပရိက္ခရာနှင့်လှူဖွယ်ပစ္စည်းများရဟန်းသံဃာတော်များကိုဆပ်ကပ်လှူဒါန်းကြပါသည်။ဤအချိန်တွင်ဘုန်းကြီးကျောင်းအတွက်လှူဒါန်းမည့်၀တ္ထုငွေများကိုပဒေသာတွင်သီ၍လှူဒါန်းကြပါသည်။','ACTIVE','2019-08-20 01:12:02','default-admin','2019-08-20 01:12:02','default-admin',1,1,0.00);
/*!40000 ALTER TABLE `festival` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `file`
--

DROP TABLE IF EXISTS `file`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `file` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `other_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `file_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `file`
--

LOCK TABLES `file` WRITE;
/*!40000 ALTER TABLE `file` DISABLE KEYS */;
INSERT INTO `file` VALUES (1,'clinic15662233991713.png','CLINIC','1'),(2,'school15662235674700.png','SCHOOL','1'),(3,'school15662236038699.png','SCHOOL','2'),(4,'school15662236202312.png','SCHOOL','3'),(5,'school15662236401271.png','SCHOOL','4'),(6,'school15662236609655.png','SCHOOL','5'),(7,'school15662236725461.png','SCHOOL','6'),(8,'school15662236872855.png','SCHOOL','7'),(9,'MONESTRY15662253609259.png','MONESTRY','1'),(10,'MONESTRY15662254618502.png','MONESTRY','2'),(11,'MONESTRY15662255442595.png','MONESTRY','3'),(12,'MONESTRY15662256117595.png','MONESTRY','4'),(13,'MONESTRY15662256716632.png','MONESTRY','5'),(14,'PAGODA15662257221121.png','PAGODA','1'),(15,'PAGODA15662257517827.png','PAGODA','2'),(16,'PAGODA15662257891584.png','PAGODA','3'),(17,'PAGODA15662258399068.png','PAGODA','4'),(18,'PAGODA15662258577364.png','PAGODA','5'),(19,'PAGODA15662258771293.png','PAGODA','6'),(20,'PAGODA15662258947978.png','PAGODA','7'),(21,'PAGODA15662259147626.png','PAGODA','8'),(22,'PAGODA15662259355181.png','PAGODA','9'),(23,'PAGODA15662259578589.png','PAGODA','10'),(24,'PAGODA15662260073516.png','PAGODA','11'),(25,'PAGODA15662260238942.png','PAGODA','12'),(26,'PAGODA15662260406271.png','PAGODA','13'),(27,'PAGODA1566226063467.png','PAGODA','14'),(30,'post15662265366348.png','POST','2'),(31,'post15662265363892.png','POST','2'),(32,'post15662266748042.png','POST','3'),(33,'post15662267846750.png','POST','4'),(34,'post15662270016498.png','POST','1'),(35,'post1566227295132.png','POST','5'),(36,'post15662273894931.png','POST','6'),(37,'post15662273899067.png','POST','6'),(38,'post15662275485280.png','POST','7'),(39,'post15662275482537.png','POST','7'),(40,'product15662305531452.png','PRODUCT','1'),(41,'product15662306083223.png','PRODUCT','2'),(42,'product15662306393966.png','PRODUCT','3'),(43,'product15662306699366.png','PRODUCT','4'),(44,'product15662306981971.png','PRODUCT','5'),(45,'product15662307301654.png','PRODUCT','6'),(46,'product1566230763428.png','PRODUCT','7'),(47,'product15662307911877.png','PRODUCT','8'),(48,'product15662308569859.png','PRODUCT','9'),(49,'product15662308834745.png','PRODUCT','10'),(50,'product15662309083180.png','PRODUCT','11'),(51,'product15662309323073.png','PRODUCT','12'),(52,'product15662309599408.png','PRODUCT','13'),(53,'product15662309929740.png','PRODUCT','14'),(54,'product15662310487997.png','PRODUCT','15'),(55,'product15662310747703.png','PRODUCT','16'),(57,'product15662311165090.png','PRODUCT','17'),(58,'product15662311697650.png','PRODUCT','18'),(59,'product15662312568804.png','PRODUCT','19'),(60,'product15662312868020.png','PRODUCT','20'),(61,'product15662313336119.png','PRODUCT','21'),(62,'product15662313826456.png','PRODUCT','22'),(63,'product15662314084695.png','PRODUCT','23'),(64,'product15662314363288.png','PRODUCT','24'),(65,'product15662314656379.png','PRODUCT','25'),(66,'FESTIVAL15662632102994.png','FESTIVAL','1'),(67,'FESTIVAL15662632642593.png','FESTIVAL','2'),(72,'FESTIVAL15662726944953.png','FESTIVAL','3'),(73,'FESTIVAL15662728369317.png','FESTIVAL','4');
/*!40000 ALTER TABLE `file` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations`
--

DROP TABLE IF EXISTS `knex_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `batch` int(11) DEFAULT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations`
--

LOCK TABLES `knex_migrations` WRITE;
/*!40000 ALTER TABLE `knex_migrations` DISABLE KEYS */;
INSERT INTO `knex_migrations` VALUES (1,'20190515170605_identity.js',1,'2019-08-19 13:43:28'),(2,'20190605131743_position.js',1,'2019-08-19 13:43:29'),(3,'20190609130121_monestry.js',1,'2019-08-19 13:43:30'),(4,'20190609163742_committee.js',1,'2019-08-19 13:43:33'),(5,'20190609180806_post.js',1,'2019-08-19 13:43:34'),(6,'20190610091858_school.js',1,'2019-08-19 13:43:36'),(7,'20190610184425_product_type.js',1,'2019-08-19 13:43:37'),(8,'20190610185230_products.js',1,'2019-08-19 13:43:40'),(9,'20190610210844_clinic.js',1,'2019-08-19 13:43:41'),(10,'20190617092819_slider.js',1,'2019-08-19 13:43:42'),(11,'20190713090231_file.js',1,'2019-08-19 13:43:43'),(12,'20190720154302_student_list.js',1,'2019-08-19 13:43:44'),(13,'20190721200745_society_member.js',1,'2019-08-19 13:43:45'),(14,'20190722151945_contact.js',1,'2019-08-19 13:43:46'),(15,'20190722193631_announcement.js',1,'2019-08-19 13:43:47'),(16,'20190818081548_festival.js',1,'2019-08-19 13:43:48'),(17,'20190818083445_pagoda.js',1,'2019-08-19 13:43:49');
/*!40000 ALTER TABLE `knex_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `knex_migrations_lock`
--

DROP TABLE IF EXISTS `knex_migrations_lock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `knex_migrations_lock` (
  `index` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `is_locked` int(11) DEFAULT NULL,
  PRIMARY KEY (`index`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `knex_migrations_lock`
--

LOCK TABLES `knex_migrations_lock` WRITE;
/*!40000 ALTER TABLE `knex_migrations_lock` DISABLE KEYS */;
INSERT INTO `knex_migrations_lock` VALUES (1,0);
/*!40000 ALTER TABLE `knex_migrations_lock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `monastery`
--

DROP TABLE IF EXISTS `monastery`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `monastery` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `abbot` varchar(255) NOT NULL,
  `number_of_monk` varchar(255) NOT NULL,
  `festival_date` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `phone_no` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `monastery_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `monastery`
--

LOCK TABLES `monastery` WRITE;
/*!40000 ALTER TABLE `monastery` DISABLE KEYS */;
INSERT INTO `monastery` VALUES (1,'ဓမ္မဂုဏ်ရောင်ကျောင်းတိုက်','ဦးကေသရ','၃ပါး','တပို့တွဲလဆန်း(၈)ရက်','ဓမ္မဂုဏ်ရောင်ကျောင်းတိုက်ကို ရှေးယခင်က တိုက်ကျောင်းဟု ခေါ်ဆိုခဲ့သည်။ ဓမ္မဂုဏ်ရောင်ကျောင်းတိုက်ကို ဒါယိကာကိုသောင်းရက ရွာ၏အရှေ့တောင်အရပ်တွင် တောကျောင်းတည်ဆောက်၍ ကျောင်းဆောက်လုပ် ကိုးကွယ်ခဲ့သည်။ ပထမဆုံးကျောင်းထိုင်ဆရာတော်မှာ ဦးနန္ဒိယ ဖြစ်သည်။','ACTIVE','၀၉ ၉၇၁၃၃၂၄၃၆','2019-08-19 14:36:00','default-admin','2019-08-19 14:36:00','',1,1,0.00),(2,'ဒက္ခိဏာရာမကျောင်းတိုက်','ဦးပဏ္ဍိ','၂ပါး','၀ါခေါင်လပြည့်ကျော်(၂)ရက်','ခိုးသန်းရွာအဝင်လမ်းနံဘေးတွင်တည်ရှိသောဒက္ခိဏရာမကျောင်းတိုက်၏ပထမဦးဆုံးကျောင်းထိုင်ဆရာတော်မှာဦးရွဲ(ခေါ်)ဦးဣန္ဒမာလာဖြစ်သည်။ထိုကျောင်းကိုလှိုင်ထောင့်ရပ်တွင်ရှိသောဆရာတော်၏ဆွေမျိုးစုကရွာအရှေ့လမ်းတောင်ဘက်တွင်ကျောင်းဆောက်၍ကိုးကွယ်ကြသည်။တစ်နည်းအားဖြင့်လေသာကျောင်းတိုက်ဟူ၍လည်းခေါ်ဆိုခဲ့သည်။ ဆရာတော်ဦးနန္ဒလက်ထက်တွင် မုဒ်ထွက်(၄)ခုနှင့်စေတီတစ်ဆူကိုတည်ထားကိုးကွယ်ခဲ့ပြီးကျောင်းမြောက်ဘက်တွင်တစ်ဖက်ဆည်ကန်ကြီးတစ်ခုတူးဖော်ခဲ့သည်။ဒါယိကာဦးပြူး၏သိမ်ထဲမှအလယ်တွင်တည်ထားသည့်ရပ်တော်မူဘုရားကိုပါးပျဥ်ဖြင့်အုပ်ထားသောနဂါးရုပ်မှာအုတ်အင်္ဂတေဖြင့်လုပ်ထားသဖြင့်မပျက်စီးဘဲကျောက်သားကဲ့သို့ယနေ့တိုင်တည်ရှိနေသေးသည်။','ACTIVE','၀၉၇၅၁၃၆၀၆၂၂','2019-08-19 14:37:41','default-admin','2019-08-19 14:37:41','',1,1,0.00),(3,'မင်္ဂလာရွာဦးကျောင်းတိုက်','ဦးသီလာနန္ဒ','၂ပါး','ကဆုန်လဆန်း ၈ ရက်','ပထမဦးဆုံးကျောင်းထိုင်ဆရာတော်မှာ ဦးပညာသီဟ(ခေါ်)ဦးပွား ဖြစ်သည်။ ရွာတွင် အဦးဆုံးတည်ဆောက်သော ကျောင်းတိုက်ဖြစ်သောကြောင့် မင်္ဂလာရွာဦးကျောင်းတိုက်ဟူ၍ ခေါ်ဆိုခဲ့ကြသည်။    ကျောင်းတိုက်အတွင်းတွင် ရှေးယခင်ကပင် တန်ခိုးကြီးထင်ရှားသော သိမ်းခိုရှင်စေတီတော် တည်ထားကိုးကွယ်ခဲ့ကြသည်။ ဆရာတော်ဦးပညာသီဟသည် အုတ်ပြဿဒ်ကြီး၊ တံခွန်တိုင်ကြီး၊ လေးထောင့်ကန်ကြီး ဟူ၍ ကြီးသုံးကြီးတည်ထားကိုးကွယ်တော်မူသည်။','ACTIVE','၀၉၄၄၅၆၀၁၄၅၄','2019-08-19 14:39:04','default-admin','2019-08-19 14:39:04','',1,1,0.00),(4,'မဟာသုခါရာမကျောင်းတိုက်','ဦးပညာ၀ံသ','၂ပါး','သီတင်းကျွတ်လပြည့်ကျော်(၂)ရက်','ရှေးယခင်အခေါ်အဝေါ်မှာ ဥတ္တရာရာမကျောင်းတိုက်ဖြစ်၍ ယနေ့အခါ မဟာသုခါရာမကျောင်းတိုက်ဟူ၍ ခေါ်ဆိုကြသည်။ တစ်နည်းအားဖြင့် မြောက်ကျောင်းဟူ၍လည်း ခေါ်ဆိုကြသည်။ ပထမဦးဆုံးကျောင်းထိုင်ဆရာတော်မှာ တရားဟောဓမ္မကထိကဆရာတော် ဦးလှော်(ခေါ်)ဦးသီလာစာရ ဖြစ်သည်။ ဆရာတော်သည် မိမိကျောင်းဝင်းအတွင်း ရုပ်ပွားဆင်းတုတော်၊ အသားပြဿဒ်ကျောင်းတော်နှင့်တကွ ချမ်းသာကြီးဘုရား၊ ရွှေဘုံသာစေတီတော် စသည်တို့ကို တည်ထားကိုးကွယ်ခဲ့သည်။ ကျောင်းဝင်းအတွင်းရှိ ညောင်ပင်ကြီးတွင် နှစ်စဥ် ကဆုန်လပြည့်နေ့ရောက်သည့်အခါ ကဆုန်ညောင်ရေသွန်းပွဲကို စည်ကားသိုက်မြိုက်စွာ ကျင်းပကြသည်။','ACTIVE','၀၉ ၇၇၉၇၂၇၅၃၀','2019-08-19 14:40:11','default-admin','2019-08-19 14:40:11','',1,1,0.00),(5,'မနောသီတဂူကျောင်းတိုက်','ဦးသုဇာတ','၂ပါး','တပေါင်းလဆန်း ၈ ရက်','မနောသီတဂူကျောင်းတိုက်၏ ပထမဆုံးကျောင်းထိုင်ဆရာတော်မှာ ပထမပြန် ပထမစာချ ခိုးသန်းရွာသား ဦးရွှေညှာ(ခေါ်)ဦးကလျာဏ ဖြစ်သည်။ ၁၂၃၉ခုနှစ် မင်းတုန်းမင်းလက်ထက်တွင် ခိုးသန်းရွာ ဒါယိကာဦးမြတ်ထွန်းက ရွာအရှေ့လမ်းတောင်ဘက်တွင် ပြဿဒ်စနူသုံးထပ်ဘောဂဆောင်နှင့်တကွ ကျောင်းသစ်ကြီးကို ဆောက်လုပ်လှူဒါန်းခဲ့သည်။','ACTIVE','၀၉၂၅၉၀၃၉၇၁၀','2019-08-19 14:41:11','default-admin','2019-08-19 14:41:11','',1,1,0.00);
/*!40000 ALTER TABLE `monastery` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pagoda`
--

DROP TABLE IF EXISTS `pagoda`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pagoda` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `pagoda_name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `monastery_id` int(10) unsigned NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `pagoda_pagoda_name_unique` (`pagoda_name`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pagoda`
--

LOCK TABLES `pagoda` WRITE;
/*!40000 ALTER TABLE `pagoda` DISABLE KEYS */;
INSERT INTO `pagoda` VALUES (1,'aaa','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',1,'2019-08-19 14:42:02','default-admin','2019-08-19 14:42:02','',1,1,0.00),(2,'bbb','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',1,'2019-08-19 14:42:31','default-admin','2019-08-19 14:42:31','',1,1,0.00),(3,'dddd','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',1,'2019-08-19 14:43:09','default-admin','2019-08-19 14:43:09','',1,1,0.00),(4,'cccc','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',2,'2019-08-19 14:43:59','default-admin','2019-08-19 14:43:59','',1,1,0.00),(5,'eeee','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',2,'2019-08-19 14:44:17','default-admin','2019-08-19 14:44:17','',1,1,0.00),(6,'ffff','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',3,'2019-08-19 14:44:37','default-admin','2019-08-19 14:44:37','',1,1,0.00),(7,'gggg','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',3,'2019-08-19 14:44:54','default-admin','2019-08-19 14:44:54','',1,1,0.00),(8,'hhhh','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',3,'2019-08-19 14:45:14','default-admin','2019-08-19 14:45:14','',1,1,0.00),(9,'iiii','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',4,'2019-08-19 14:45:35','default-admin','2019-08-19 14:45:35','',1,1,0.00),(10,'jjj','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',4,'2019-08-19 14:45:57','default-admin','2019-08-19 14:45:57','',1,1,0.00),(11,'kkkk','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',2,'2019-08-19 14:46:47','default-admin','2019-08-19 14:46:47','',1,1,0.00),(12,'llll','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',3,'2019-08-19 14:47:03','default-admin','2019-08-19 14:47:03','',1,1,0.00),(13,'llllll','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',3,'2019-08-19 14:47:20','default-admin','2019-08-19 14:47:20','',1,1,0.00),(14,'kkkkk','ခိုးသန်းကျေးရွာရှိစေတီတော်များ','ACTIVE',3,'2019-08-19 14:47:43','default-admin','2019-08-19 14:47:43','',1,1,0.00);
/*!40000 ALTER TABLE `pagoda` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `position`
--

DROP TABLE IF EXISTS `position`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `position` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `position_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `position`
--

LOCK TABLES `position` WRITE;
/*!40000 ALTER TABLE `position` DISABLE KEYS */;
INSERT INTO `position` VALUES (1,'အုပ်ချုပ်ရေးမှုး','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်များ','2019-08-19 14:01:03','default-admin','2019-08-19 14:01:03','',1,1,0.00),(2,'ရပ်မိရပ်ဖ','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်များ','2019-08-19 14:01:15','default-admin','2019-08-19 14:01:15','',1,1,0.00),(3,'ရာအိမ်မှုး','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်များ','2019-08-19 14:01:24','default-admin','2019-08-19 14:01:24','',1,1,0.00),(4,'ဥက္ကဌ','ခိုးသန်းရွာ၏အုပ်ချုပ်ရေးပိုင်းဆိုင်ရာ အဖွဲ့ဝင်','2019-08-19 14:01:53','default-admin','2019-08-19 14:01:53','',1,1,0.00),(5,'သူနာပြု','ကျန်းမာရေးစောင့်ရှောက်မှုပေးရန်','2019-08-19 14:02:09','default-admin','2019-08-19 14:02:09','',1,1,0.00);
/*!40000 ALTER TABLE `position` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `summary` text NOT NULL,
  `type` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `title_image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `post_title_unique` (`title`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'ကျေးရွာအတွင်း ကျောက်ချောလမ်းခင်းခြင်း','မုံရွာမြို့နယ် ခိုးသန်းရွာ၌ ခိုးသန်း-ကော်လပြ ကျေးရွာချင်းဆက် ကျောက်ချောလမ်းခင်းခြင်းကို ပြုလုပ်ခဲ့ပါသည်။ ထိုလမ်းကို ၂၀၁၈-၁၉ ဘဏ္ဍာရေးနှစ် ပြည်ထောင်စုလွှတ်တော် ကျပ်သိန်ိး(၁၀၀၀) ဒေသဖွံ့ဖြိုးရေး ရန်ပုံငွေမှ ခွင့်ပြုရန်ပုံငွေ ကျပ်သိန်း(၃၀)ဖြင့် ကျောက်ချောလမ်းကိုခင်းခဲ့ပါသည်။ အလျား(၁၀၀၀)ပေ၊ အနံ(၁၂)ပေနှင့် ထုထည်(၆)လက်မရှိသော ကျောက်ချောလမ်းကို ခင်းခဲ့ပါသည်။','မုံရွာမြို့နယ် ခိုးသန်းရွာ၌ ခိုးသန်း-ကော်လပြ ကျေးရွာချင်းဆက် ကျောက်ချောလမ်းခင်းခြင်းကို ပြုလုပ်ခဲ့ပါသည်။','NEWS','ACTIVE','post15662270019613.png','2019-08-19 14:52:56','default-admin','2019-08-19 14:52:56','default-admin',1,1,0.00),(2,'ခိုးသန်းရွာတွင် ရေသိုလှောင်ကန်မှ တစ်ရွာလုံသို့ ရေဖြန့်ဝေပေးခြင်း','ခိုးသန်းကျေးရွာ ရေရရှိရေးအတွက် ရပ်ရွာလူထု ပူးပေါင်းဆောင်ရွက်သော  စက်ရေတွင်းတူးဖော်ခြင်း၊ ရေစက်ရုံနှင့်ရေလှောင်ကန် အမိုးပြုပြင်ခြင်းများကို UN HARBITAT, USAIDနှင့်SHAE THOT စသော အဖွဲ့အစည်းများမှ ငွေကြေးအနေဖြင့် ကျပ်သိန်း(၁၀၀)ကျော် ထောက်ပံ့ခဲ့ပါသည်။ ထိုအဖွဲ့အစည်းများမှ ယင်လုံအိမ်သာ(၂၅)လုံးနှင့် ရေထည့်ရန်ကျောက်ကန်(၅၀)ကို ခိုးသန်းကျေးရွာသို့ ထောက်ပံ့ပေးအပ်ခဲ့ပါသည်။ ထောက်ပံ့ခဲ့သော ယင်လုံအိမ်သာနှင့် ကျောက်ကန်များကို ငွေကြေးမတတ်နိုင်သော မိသားစုများကို ထောက်ပံ့ရန်ဖြစ်သည်။ ထိုမိသားစုများကို ယင်လုံအိမ်သာ၁လုံးနှင့် ကျောက်ကန်၂ဆင့်ကို ပေးဝေပေးခဲ့သည်။  ရေရရှိရန်အတွက် ပိုက်လိုင်းများကို အဖွဲ့အစည်းများမှ ထောက်ပံ့ခဲ့သော ငွေကြေးဖြင့် ကျေးရွာအတွင်း ဖြန်ဖြူးပေးခဲ့ပါသည်။ ရွာသူ/သားများက မိမိတို့ငွေကြေးဖြင့် အလွယ်တကူ သွယ်ယူ၍ အသုံးပြုကြသည်။ ရေမီတာခအနေဖြင့် ၁ယူနစ်လျှင် ၃၀၀ကျပ်နှုန်းဖြင့် ကောက်ခံလျှက်ရှိသည်။','ခိုးသန်းကျေးရွာ ရေရရှိရေးအတွက် ရပ်ရွာလူထု ပူးပေါင်းဆောင်ရွက်သော  စက်ရေတွင်းတူးဖော်ခြင်း၊ ရေစက်ရုံနှင့်ရေလှောင်ကန် အမိုးပြုပြင်ခြင်းများကို UN HARBITAT, USAIDနှင့်SHAE THOT စသော အဖွဲ့အစည်းများမှ ငွေကြေးအနေဖြင့် ကျပ်သိန်း(၁၀၀)ကျော် ထောက်ပံ့ခဲ့ပါသည်။ ','NEWS','ACTIVE','post15662265367743.png','2019-08-19 14:55:36','default-admin','2019-08-19 14:55:36','',1,1,0.00),(3,'ခိုးသန်းရွာသူ/သားများကို ကွန်ပျူတာတက္ကသိုလ် နောက်ဆုံးနှစ် ကျောင်းသူ/သားများမှ Mobile Phone အကြောင်းအသိပညာပေးခြင်း','ကွန်ပျူတာတက္ကသိုလ် နောက်ဆုံးနှစ် ကျောင်းသူ/သားများမှ Mobile Phone၏ အသုံး၀င်ပုံ အကျိုးရှိရှိ အသုံးပြုတတ်စေရန် ပြောကြားပေးပါသည်။ Mobile Phone၏settingတွင်ပါ၀င်သော အချက်အလက်များအကြောင်းကို နားလည်သဘောပေါက်အောင် ရှင်းပြခဲ့ပါသည်။ နေ့လည်စာအဖြစ်လည်း မုန့်နှင့်အအေးများကိုလည်း ကျောင်းသူ/သားများက ကျွေးမွေးဧည့်ခံခဲ့ပါသည်။ တာ၀န်ကျဆရာမများနှင့်အတူ internshipကျောင်းသူ/သားများမှ ၈.၆.၂၀၁၉ (စနေနေ့) တွင် ခိုးသန်းကျေးရွာသို့ သွားရောက်၍ Mobile Phone အသုံးပြုပုံများအကြောင်းကို ဓမ္မဂုဏ်ရောင်ကျောင်းတိုက် အတွင်း၌ ပြောကြားခဲ့ပါသည်။','ကွန်ပျူတာတက္ကသိုလ် နောက်ဆုံးနှစ် ကျောင်းသူ/သားများမှ Mobile Phone၏ အသုံး၀င်ပုံ အကျိုးရှိရှိ အသုံးပြုတတ်စေရန် ပြောကြားပေးပါသည်။ Mobile Phone၏settingတွင်ပါ၀င်သော အချက်အလက်များအကြောင်းကို နားလည်သဘောပေါက်အောင် ရှင်းပြခဲ့ပါသည်။ ','NEWS','ACTIVE','post15662266748309.png','2019-08-19 14:57:54','default-admin','2019-08-19 14:57:54','',1,1,0.00),(4,'ခိုးသန်းကျေးရွာ မူလွန်ကျောင်းတွင် ကျောင်းဆောင်သစ် ဆောက်လုပ်ခြင်း','ခိုးသန်းကျေးရွာရှိ မူလွန်ကျောင်းတွင် ကျောင်းဆောင်သစ်ဆောက်လုပ်ရန်အတွက် တစ်အိမ်လျှင် ၁၅၀၀ကျပ်နှုန်းဖြင့် လစဥ်လတိုင်း အလှူငွေ ကောက်ခံလျှက်ရှိပါသည်။ ၂၀၁၈-၁၉ပညာသင်နှစ်မှစ၍ မူလွန်ကျောင်းအဖြစ်သို့ ပြောင်လဲလာခဲ့ပါသည်။ ထိုနှစ်တွင် ဆရာ/ဆရာမအင်အားနည်းသဖြင့် ကျေးရွာမှစုပေါင်း၍ တစ်လတစ်သိန်းနှုန်းဖြင့် ဆရာမနှစ်ယောက် ငှားရမ်းခဲ့ရပါသည်။ ၂၀၁၉-၂၀ပညာသင်နှစ်တွင် အစိုးရမှ ဆရာ/ဆရာမ(၃)ဦး ချထားပေးခဲ့ပါသည်။ ယခင်နှစ်က ပဥ္စမတန်းထိ ပညာသင်ကြားနိုင်ခဲ့ပြီး ယခုနှစ်တွင် ဆဌမတန်းထိ ပညာသင်ကြားနိုင်ခဲ့ပြီဖြစ်သည်။ ထိုရွာ၌ ကျောင်းသူ/သား အင်အားများလာသဖြင့် ကျောင်းဆောင်သစ် တိုးချဲ့ဆောက်လုပ်ခြင်း ဖြစ်ပါသည်။ ','ခိုးသန်းကျေးရွာရှိ မူလွန်ကျောင်းတွင် ကျောင်းဆောင်သစ်ဆောက်လုပ်ရန်အတွက် တစ်အိမ်လျှင် ၁၅၀၀ကျပ်နှုန်းဖြင့် လစဥ်လတိုင်း အလှူငွေ ကောက်ခံလျှက်ရှိပါသည်။ ၂၀၁၈-၁၉ပညာသင်နှစ်မှစ၍ မူလွန်ကျောင်းအဖြစ်သို့ ပြောင်လဲလာခဲ့ပါသည်။','NEWS','ACTIVE','post1566226784631.png','2019-08-19 14:59:44','default-admin','2019-08-19 14:59:44','',1,1,0.00),(5,'ခိုးသန်းကျေးရွာတွင် ကွန်ကရစ်လမ်းခင်းခြင်း','ခိုးသန်းကျေးရွာတွင် ကွန်ကရစ်လမ်းကို ၂၆.၂.၂၀၁၉မှ စတင်၍ ၃၀.၄.၂၀၁၉တွင် ခင်းကျင်းပြီးစီးခဲ့ပါသည်။ ထိုကွန်ကရစ်ခင်းကျင်းရာတွင် ကျေးရွာဖွင့်ဖြိုးရေး(VDP)ကော်မတီနှင့် ခိုးသန်းရွာသူ/သားများ ပူးပေါင်းဆောင်ရွက်ခဲ့ပါသည်။ ထိုလမ်းပြီးစီးဖို့ရန်အတွက် (VDP)ထောက်ပံ့ငွေ ကျပ်သိန်း(၁၀၀)ကို လက်ခံရရှိခဲ့ပါသည်။ ထို့အပြင် ရွာသူ/သားများမှလည်း ထိုလမ်းအတွက် ငွေကျပ်သိန်း(၂၀)နှင့် လုပ်အားကိုလည်း ကူညီထောက်ပံ့ခဲ့ပါသည်။ ထိုလမ်းခင်းရာတွင် ခိုးသန်းရွာရှိ ဆယ်အိမ်ခေါင်းများမှ တစ်အိမ်တစ်ယောက်နှုန်းဖြင့် တစ်ရက်လျှင် အယောက်(၄၀)ခေါ်ယူ၍ လုပ်အားပေးခဲ့ကြပါသည်။ ထိုလမ်းပြီးသည်အထိ တစ်အိမ်လျှင် (၅)ကြိမ်တိုင် လုပ်အားပေးခဲ့ကြရပါသည်။ ထိုလမ်းအတိုင်းအတာအနေဖြင့် အလျား(၁၅၀၀)ပေ၊ အနံ(၁၂)ပေနှင့် ထုထည်(၀.၆)လက်မ ရှိပါသည်။ ','ခိုးသန်းကျေးရွာတွင် ကွန်ကရစ်လမ်းကို ၂၆.၂.၂၀၁၉မှ စတင်၍ ၃၀.၄.၂၀၁၉တွင် ခင်းကျင်းပြီးစီးခဲ့ပါသည်။ ထိုကွန်ကရစ်ခင်းကျင်းရာတွင် ကျေးရွာဖွင့်ဖြိုးရေး(VDP)ကော်မတီနှင့် ခိုးသန်းရွာသူ/သားများ ပူးပေါင်းဆောင်ရွက်ခဲ့ပါသည်။','ACTIVITY','ACTIVE','post15662272954508.png','2019-08-19 15:08:15','default-admin','2019-08-19 15:08:15','',1,1,0.00),(6,'ခိုးသန်းကျေးရွာအတွင်း လျှပ်စစ်မီးရရှိရန်အတွက် ဆောင်ရွက်ခြင်း','ခိုးသန်းရွာတွင် လျှပ်စစ်မီးရရှိရန် လွန်ခဲ့သော ၃နှစ်မှစ၍ ကြိုးပမ်းခဲ့ပါသည်။  ကျောက်ဆစ်ပုံ Eleven လိုင်းမှ ခိုးသန်းကျေးရွာရှိTransferထိ မီးကြိုးသွယ်တန်းခြင်းကို နိုင်ငံတော်မှ ဆောင်ရွက်ပေးမည်ဖြစ်သည်။ ကျေးရွာအတွင်း မီးကြိုးသွယ်တန်းခြင်း ဓါတ်တိုင်ထူခြင်းများကို ကိုယ်ထူကိုယ်ထစနစ်ဖြင့် ဆောင်ရွက်လျှက်ရှိပါသည်။ မီတာ၁လုံးလျှင် ကျပ်၁၅၀၀၀၀ ကုန်ကျမည်ဖြစ်ပြီး ၂၀၁၉နှစ်ကုန်ပိုင်းတွင် ကျေးရွာအတွင်း မီးလင်းမည်ဟု ခန့်မှန်းထားပါသည်။','ခိုးသန်းရွာတွင် လျှပ်စစ်မီးရရှိရန် လွန်ခဲ့သော ၃နှစ်မှစ၍ ကြိုးပမ်းခဲ့ပါသည်။  ကျောက်ဆစ်ပုံ Eleven လိုင်းမှ ခိုးသန်းကျေးရွာရှိTransferထိ မီးကြိုးသွယ်တန်းခြင်းကို နိုင်ငံတော်မှ ဆောင်ရွက်ပေးမည်ဖြစ်သည်။','NEWS','ACTIVE','post15662273883394.png','2019-08-19 15:09:48','default-admin','2019-08-19 15:09:48','',1,1,0.00),(7,'ခိုးသန်းရွာတွင် သွေးလွန်တုပ်ကွေးအဖြစ်များသောကြောင့် မြို့နယ်ကျန်းမာရေးဌာနမှ ကျန်းမာရေးဆောင်ရွက်ချက်များ လာရောက်ပြုလုပ်ခြင်း','ခိုးသန်းရွာတွင် သွေးလွန်တုပ်ကွေးအဖြစ်များသောကြောင့် မြို့နယ်ကျန်းမားရေးဌာနမှ တာဝန်ရှိပုဂ္ဂိုလ်များနှင့် ကျေးလက်ကျန်းမာရေးဌာနမှ ပူးပေါင်းကာ ရပ်ရွာတွင်းရှိရေတွင်းရေကန်များထဲသို့ ခြင်အန္တရာယ်ကာကွယ်နိုင်ရန် ဘိတ်ခပ်ခြင်းများ ပြုလုပ်ခဲ့ပါသည်။ ယခုနှစ်အတွင်း သွေးလွန်တုပ်ကွေးအဖြစ်များ၍ ဘိတ်ခပ်ခြင်း ကျန်းမာရေးဟောပြောခြင်းများ နှစ်ကြိမ်တိုင် ပြုလုပ်ခဲ့ပြီးဖြစ်သည်။','ခိုးသန်းရွာတွင် သွေးလွန်တုပ်ကွေးအဖြစ်များသောကြောင့် မြို့နယ်ကျန်းမားရေးဌာနမှ တာဝန်ရှိပုဂ္ဂိုလ်များနှင့် ကျေးလက်ကျန်းမာရေးဌာနမှ ပူးပေါင်းကာ ရပ်ရွာတွင်းရှိရေတွင်းရေကန်များထဲသို့ ခြင်အန္တရာယ်ကာကွယ်နိုင်ရန် ဘိတ်ခပ်ခြင်းများ ပြုလုပ်ခဲ့ပါသည်။','NEWS','ACTIVE','post15662275474038.png','2019-08-19 15:12:27','default-admin','2019-08-19 15:12:27','',1,1,0.00);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `productType_id` int(10) unsigned NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_product_name_unique` (`product_name`),
  KEY `product_producttype_id_foreign` (`productType_id`),
  CONSTRAINT `product_producttype_id_foreign` FOREIGN KEY (`productType_id`) REFERENCES `product_type` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'ကြက်သွန်ဖြူ','ဒုတိယမြောက် အဓိကစိုက်ပျိုးသီးနှံအဖြစ် ကြက်သွန်ဖြူကို စိုက်ပျိုးကြသည်။ ကြက်သွန်ဖြူကို နှစ်စဉ် သီတင်းကျွတ်၊ တန်ဆောင်မုန်းလများတွင် စတင်စိုက်ပျိုးကြပြီး တပေါင်းလဆုတ်တွင် ရိတ်သိမ်းကြသည်။ ကြက်သွန်ဖြူအမွှာများကို အစိမ်းသော်လည်းကောင်း၊ ချက်ပြုတ်၍သော်လည်းကောင်း စားသုံးနိုင်ပါသည်။ ကြက်သွန်ဖြူကို စားသုံးပါက နှလုံးရောဂါ၊ သွေးတိုးရောဂါ၊ အအေးမိခြင်း၊ ကင်ဆာရောဂါနှင့် ကိုလက်စထရောများခြင်းများကို ကာကွယ်ပေးပါသည်။ သွေးတိုးရောဂါမဖြစ်စေရန်နှင့် ဖြစ်ပွားနေသော သွေးတိုးရောဂါများကိုလည်း ပျောက်ကင်းစေသည်။',1,'ACTIVE','2019-08-19 16:02:33','default-admin','2019-08-19 16:02:33','',1,1,0.00),(2,' ပဲကြီး','ပဲကြီးကို သြဂုတ်၊ စက်တင်ဘာလများတွင် စိုက်ပျိုးကြပြီး ဖေဖော်ဝါရီ၊ မတ်နှင့် ဧပြီလများတွင် ရိတ်သိမ်းလေ့ရှိသည်။ ပဲကြီးမျိုးကောင်းရရှိနိုင်ရန် အပင်သက်တမ်းရက်(၁၀၀)ခန့် ရှိသင့်သည်။ အရည်အသွေးကောင်းစေရန် ရိတ်သိမ်းချိန်ကို နံနက်(သို့မဟုတ်)ညနေစောင်းတွင် ရိတ်သိမ်းသင့်သည်။ ပဲကြီးကို စွတ်ပြုတ်ပြုလုပ်၍သော်လည်းကောင်း၊ ဟင်းအဖြစ်သော်လည်းကောင်း၊ ပဲအနှစ်လုပ်၍သော်လည်းကောင်း စားသုံးတတ်ကြသည်။ ထို့အပြင် ပဲကြီးကို လှော်၍ဖြစ်စေ၊ ကြော်၍ဖြစ်စေ၊ လက်ဖက်ရည်ကြမ်းဖြင့် တွဲဖက်၍ဖြစ်စေ စားသုံးတတ်ကြသည်။ ကျန်းမာရေးအတွက် အထောက်အကူပြုသော အမျှင်ဓာတ်များ ပါဝင်သောကြောင့် ဝမ်းချုပ်ခြင်းမှ ကာကွယ်ပေးသည်။ ပရိုတိန်းဓာတ်များ မြင့်မားစွာ ပါဝင်၍ အစာချေမှုအတွက် အလွန် ကောင်းမွန်သည်။',1,'ACTIVE','2019-08-19 16:03:28','default-admin','2019-08-19 16:03:28','',1,1,0.00),(3,'နှမ်း','နှမ်းကို မေ၊ ဇွန်၊ စက်တင်ဘာ၊ ဖေဖော်ဝါရီလများတွင် စတင် စိုက်ပျိုးကြသည်။ စိုက်ပျိုးပြီး ရက်(၁၀၀-၁၁၀)ကြားတွင် ရိတ်သိမ်းပေးရသည်။ နှမ်းသီးတောင့် (၇၅)ရာခိုင်နှုန်း ရင့်မှည့်ချိန်(အဝါရောင်ပြောင်းချိန်)တွင် ရိတ်သိမ်းပေးရန် အသင့်တော်ဆုံးဖြစ်သည်။ နှမ်းကို ကြိတ်၍ ဆီအဖြစ်သော်လည်းကောင်း နှမ်းလှော်ကို လက်ဖက်ဖြင့် တွဲဖက်၍သော်လည်းကောင်း စားသုံးကြပါသည်။',1,'ACTIVE','2019-08-19 16:03:59','default-admin','2019-08-19 16:03:59','',1,1,0.00),(4,'မြေပဲ','မြေပဲကို မိုးရာသီနှင့် ဆောင်းရာသီတွင် အများအားဖြင့် စိုက်ပျိုးနိုင်သည်။ စိုက်ပျိုးပြီး (၇)ရက်မှ (၁၀)ရက်အတွင်း အပင်ငယ်များ ပေါက်လာကြသည်။ (၁)လခွဲအတွင်း၌ အပွင့်များပွင့်ကြသည်။ စိုက်ပျိုးပြီးနောက် (၅)လမှ (၇)လခန့်ကြာလျှင် အသီးများရင့်မှည့်၍ လာသည်။ တစ်ဧကလျှင် မြေပဲတင်းပေါင်း(၃၀)မှ (၄၀)အထိ ထွက်သည်။ မြေပဲကို မြေပဲဆီရရန် အများဆုံး စိုက်ပျိုးကြပြီး သရေစာအဖြစ်လည်း စားသုံးကြသည်။ မြေပဲပင်မှ စွန့်ပစ်သော မြေပဲမှော်များကို ကျွဲစာ၊ နွားစာအဖြစ်လည်း အသုံးပြုကြသည်။ မြေပဲရိုးတံနှင့် အမြစ်များကို မြေဩဇာအဖြစ် အသုံးပြုကြသည်။ မြေပဲသည် နှလုံးကျန်းမာရေးကို စွမ်းဆောင်ပေးပြီး သွေးအတွင်း ကိုလက်စထရောတိုးမြှင့်မှုကို လျော့ချပေးသည်။ မြေပဲကို တစ်ပတ်လျှင် နှစ်ကြိမ်ခန့် စားသုံးပေးပါက အူမကြီးကင်ဆာ ဖြစ်ပွားမှုကို လျော့ချပေးသည်။',1,'ACTIVE','2019-08-19 16:04:29','default-admin','2019-08-19 16:04:29','',1,1,0.00),(5,'ကြက်','ကြက်မွေးမြူရေးလုပ်ငန်းတွင် ကြက်ခြံစုစုပေါင်း (၂)ခြံရှိသည်။ တစ်ခြံလျှင် ပျမ်းမျှအကောင်အရေအတွက်မှာ (၆၀၀)ခန့် ရှိပြီး စုစုပေါင်းကြက်အရေအတွက်မှာ (၁၂၀၀)ခန့်ရှိသည်။ ကြက်ဥတစ်လုံး၏ဈေးနှုန်းမှာ (၁၂၀)ကျပ်နှင့် (၁၅၀)ကျပ်အကြားတွင် ရှိသည်။',3,'ACTIVE','2019-08-19 16:04:58','default-admin','2019-08-19 16:04:58','',1,1,0.00),(6,' နွား','ခိုးသန်းရွာတွင် နွားအကောင်အရေအတွက်မှာ (၆၀၀) နှင့် (၇၀၀) အကြားတွင် ရှိသည်။',3,'ACTIVE','2019-08-19 16:05:30','default-admin','2019-08-19 16:05:30','',1,1,0.00),(7,'သိုး','သိုးအုပ်(၁၂)အုပ်ခန့် ရှိပြီး သိုးအုပ်တစ်အုပ်လျှင် ပျမ်းမျှအကောင်အရေအတွက်မှာ (၈၅)ကောင် ရှိပြီး စုစုပေါင်းသိုးအရေအတွက်မှာ (၁၀၀၀)ခန့် ရှိသည်။',3,'ACTIVE','2019-08-19 16:06:03','default-admin','2019-08-19 16:06:03','',1,1,0.00),(8,'ထောပတ်ပဲ','ထောပတ်ပဲကို မိုးရာသီသီးနှံများအပြီး ကျန်ရှိသော အစိုဓာတ်ဖြင့် စိုက်ပျိုးနိုင်သည်။ စိုက်ပျိုးပြီး ရက်ပေါင်း(၆၅)ရက်တွင် ခူးဆွတ်နိုင်သည်။ ထောပတ်ပဲသည် အသီးတောင့်ထဲမှ အသီးကို ယူသောကြောင့် ကောင်းစွာ ခြောက်သွေ့စေရန် လိုအပ်သည်။ ထောပတ်ပဲကို ပြုတ်၍သော်လည်းကောင်း၊ ပဲကြမ်းကြော် ပြုလုပ်၍သော်လည်းကောင်း၊ ပဲရေပွပြုလုပ်၍သော်လည်းကောင်း စားသုံးကြသည်။ သွေးတွင်းအောက်စီဂျင်ပါဝင်မှုနှင့် သွေးလည်ပတ်မှုကို ကောင်းမွန်စေသည်။သွေးချိုဓာတ်ကို ထိန်းပေးသောကြောင့် သွေးချိုသမားများအတွက် စားသုံးရန် သင့်လျော်သည်။ နှလုံးနှင့် နှလုံးကြွက်သားများကို ကောင်းမ္ွန်စေသည်။',1,'ACTIVE','2019-08-19 16:06:31','default-admin','2019-08-19 16:06:31','',1,1,0.00),(9,'ကွမ်း','ကွမ်းကို မေလ၊ ဇွန်လ၊ ဩဂုတ်လနှင့် စက်တင်ဘာလများတွင် အထူးစိုက်ပျိုးကြသည်။ ကွမ်းပင်တွင် အနုစား၊ အလတ်စား၊ အကြမ်းစား၊ အရိုင်းစားဟူ၍ (၄)မျိုး ခွဲထားသည်။ ကပ်ပါးနွယ်ပင်မျိုး ဖြစ်၍ ဝါးလုံးများကို အမှီပြု၍ စိုက်ပျိုးရသည်။ ကွမ်းသီးသည် လုံးဝန်း၍ တစ်စေ့သီး ဖြစ်သည်။ ကွမ်းရွက်ကို ကွမ်းယာအဖြစ် ဆေးခြောက်၊ ကွမ်းသီး၊ ထုံးတို့ဖြင့် စားသုံးကြသည်။ ဂျင်းပြုတ်ရည်၊ ဆားနှင့် ကွမ်းရွက်ညှစ်၍ရသော အရည်ကို သောက်သုံးပါက ပန်းနာရင်ကျပ်၊ ရင်အောင့်ရင်ပြည့်၊ သွေးတိုးရောဂါများ ပျောက်ကင်းစေသည်။ အဖျားကြောင့်ဖြစ်သော ခေါင်းကိုက်ရောဂါများကို ကွမ်းရွက်ကို မျက်စဥ်းအဖြစ် ခတ်ပေးလျှင် သက်သာပျောက်ကင်းစေသည်။ မျက်စိပူခြင်း၊ ယားခြင်း၊ နာခြင်းများအတွက် ကွမ်းရွက်ကို ချေ၍ မျက်လုံးပေါ်တွင် ကပ်ပေးနိုင်သည်။',5,'ACTIVE','2019-08-19 16:07:36','default-admin','2019-08-19 16:07:36','',1,1,0.00),(10,'ကုလားပဲ','ကုလားပဲကို ဆောင်းသီးနှံအဖြစ် အောက်တိုဘာလနှင့် နိုဝင်ဘာလတွင် စိုက်ပျိုးကြပြီး ဇန်နဝါရီနှင့် ဧပြီလတွင် ရိတ်သိမ်းကြသည်။ ကုလားပဲသည် မြေအမျိုးမျိုးတွင် စိုက်ပျိုးနိုင်သော်လည်း နုံးမြေနှင့် နုံးရောသောမြေစေးများတွင် ကောင်းစွာ ဖြစ်ထွန်းသည်။ အပင်ပေါက်ကောင်းစေရန် ထွန်ကြောင်းအတွင်း မျိုးစေ့အနက် (၂)လက်မမှ (၃)လက်မအတွင်း ချ၍ စိုက်ပျိုးရသည်။ ရွက်ဖျန်းမြေဩဇာကို (၁၅)ရက်ခြား ဖျန်းပေးနိုင်သည်။ စိုက်ပျိုးပြီး ရက်(၆၀)နှင့် (၈၀)ဝန်းကျင်တွင် အစေ့အဆံတည်သောအချိန်ဖြစ်၍ ပိုးမကျစေရန် အထူးဂရုစိုက်ရမည်။ ရက်(၉၀-၁၂၀)အတွင်း ရင့်မှည့်လေ့ရှိသည်။ သီးတောင့်အရောင်၊ ကောက်ရိုးရောင်၊ အညိုဖျော့ရောင် ပြောင်းချိန်တွင် ရိတ်သိမ်းနိုင်သည်။ ကုလားပဲကို ဟင်းချိုအဖြစ် ချက်၍သော်လည်းကောင်း၊ ကုလားပဲသုပ်၊ ကုလားပဲခြမ်းကြော်စသည်ဖြင့် စားသုံးကြသည်။ ကုလားပဲကို ကြိတ်၍ ကုလားပဲမှုန့်အဖြစ်လည်း အသုံးပြုနိုင်သည်။ ကုလားပဲသည် နှလုံးသွေးကြောနှင့်ဆိုင်သော ရောဂါများ ဖြစ်နုင်ခြေကို လျော့ချပေးပြီး အစာခြေလမ်းကြောင်းရှိ လုပ်ငန်းများကို ကောင်းစွာ ဆောင်ရွက်ပေးသည်။',1,'ACTIVE','2019-08-19 16:08:03','default-admin','2019-08-19 16:08:03','',1,1,0.00),(11,'ပဲစင်းငုံ','ပဲစင်းငုံကို မိုးရာသီသီးနှံအဖြစ် မိုးရာသီတွင် အထူးစိုက်ပျိုးကြသည်။ စိုက်ပျိုးပြီး (၆)လအကြာ အသီးတောင့်များ(၈၅)ရာခိုင်နှုန်းခန့် ရင့်မှည့်ချိန်တွင် ခူးဆွတ်ရိတ်သိမ်းရပါသည်။ အခြားသီးနှံများအတွက် လေကာပင်များအဖြစ် စိုက်ပျိုးနိုင်ပါသည်။ ပရိုတင်း၊ အမိုင်နိုအက်ဆစ်၊ သတ္တုဓာတ်များ၊ ဗိုက်တာမင်အေ၊ ဗိုက်တာမင်ဒီနှင့် ကာဗွန်ဟိုက်ဒရိတ်ဓာတ်များ ပါဝင်သောကြောင့် ကျန်းမာရေးအတွက် အထူးကောင်းမွန်စေသည်။',1,'ACTIVE','2019-08-19 16:08:28','default-admin','2019-08-19 16:08:28','',1,1,0.00),(12,'ဂျုံ','ဂျုံမှာ ဆောင်းရာသီတွင် အထူးစိုက်ပျိုးသော သီးနှံဖြစ်၍ အောက်တိုဘာလနှင့် နိုဝင်ဘာလများတွင် စိုက်ပျိုးပြီး ဇန်နဝါရီလနှင့် ဖေဖော်ဝါရီလများတွင် ရိတ်သိမ်းကြသည်။ ဖေဖော်ဝါရီလနှင့် မတ်လများသည် ဈေးကွက်ဝင်သည့်အချိန် ဖြစ်သည်။ ဂျုံရိုးဦးထုပ် ထုတ်လုပ်ခြင်း၊ ဂျုံနှင့် ပြုလုပ်သော အစားအသောက်များ ထုတ်လုပ်ခြင်းတို့တွင် အသုံးဝင်သည်။ ဂျုံသည် သည်းခြေကျောက်တည်မှု မဖြစ်အောင် ကာကွယ်ပေးနိုင်ပြီး ခန္ဓာကိုယ်တွင်း သကြားဓာတ်ပမာဏကို ထိန်းချုပ်ပေးသည်။ ဂျုံသည် အူရောင်ရောဂါများကို ကာကွယ်ပေးနိုင်သည်။',1,'ACTIVE','2019-08-19 16:08:52','default-admin','2019-08-19 16:08:52','',1,1,0.00),(13,'ပဲနီ','ပဲနီကို ဩဂုတ်လ၊ စက်တင်ဘာလများတွင် စိုက်ပျိုးပြီး ဖေဖော်ဝါရီလ၊ မတ်လနှင့် ဧပြီလများတွင် ရိတ်သိမ်းလေ့ရှိသည်။ ပဲနီမျိုးကောင်းရရှိနိုင်ရန် အပင်သက်တမ်း ရက်(၁၀၀)ခန့် ရှိသင့်သည်။ အရည်အသွေးကောင်းစေရန် ရိတ်သိမ်းချိန်ကို နံနက်(သို့)ညနေစောင်းတွင် ရိတ်သိမ်းနိုင်သည်။ ပဲနီကို ဟင်းချိုပြုလုပ်ရာတွင်လည်းကောင်း၊ ဟင်းအဖြစ်သော်လည်းကောင်း စားသုံးကြသည်။ ပဲနီကို ကြော်၍ဖြစ်စေ၊ လှော်၍ဖြစ်စေ၊ လက်ဖက်ရည်ကြမ်းနှင့် တွဲဖက်၍ အမြည်းအဖြစ် စားသုံးကြသည်။ ကျန်းမာရေးအတွက် အထောက်အကူပြုသော အမျှင်ဓာတ်များ ပါဝင်သောကြောင့် ဝမ်းချုပ်ခြင်းမှ ကာကွယ်ပေးသည်။ ပရိုတိန်းဓာတ်များ မြင့်မားစွာ ပါဝင်၍ အစာချေဖျက်မှုအတွက် အလွန် ကောင်းမွန်သည်။',1,'ACTIVE','2019-08-19 16:09:19','default-admin','2019-08-19 16:09:19','',1,1,0.00),(14,'လက်သုတ်ပုဝါ','လက်သုတ်ပုဝါသည် ခိုးသန်းရွာမှထွက်ရှိသော လက်မှုပစ္စည်းတစ်ခု ဖြစ်သည်။ လက်သုတ်ပုဝါကို ချည်ဖြင့် ရက်လုပ်ထားပြီး အလျား(၁)ပေနှင့် အနံ(၁)ပေ ခန့်ရှိသည်။ လက်သုတ်ပုဝါတစ်အုပ်လျှင် အထည်(၄၀)ပါပြီး တစ်အုပ်လျှင် ငွေကျပ်(၁၀၀၀၀)ခန့် ရှိသည်။ တစ်ထည်လျှင် ငွေကျပ်(၂၅၀)ခန့် ရှိသည်။ လက်သုတ်ပုဝါကို မီးဖိုချောင်နှင့် ဧည့်ခန်းတွင် ထား၍ အသုံးပြုကြသည်။',2,'ACTIVE','2019-08-19 16:09:52','default-admin','2019-08-19 16:09:52','',1,1,0.00),(15,'သင်္ဘောခြံ ','သင်္ဘောပင်အား ဖေဖော်ဝါရီလ၊ မတ်လ၊ ဇွန်လ၊ အောက်တိုဘာလနှင့် နိုဝင်ဘာလများတွင် စိုက်ပျိုးနိုင်သည်။ သင်္ဘောသီးမှည့်ချိန်မှာ နိုဝင်ဘာလ၊ ဒီဇင်ဘာလ၊ မတ်လနှင့် ဧပြီလများအတွင်း ဖြစ်သည်။ သင်္ဘောပင်များသည် ဘေးကိုင်းများထွက်ရှိခြင်းမရှိသော်လည်း အပင်အိုလာသည့်အခါ ဘေးကိုင်းများထ္ွက်တတ်သည်။ သင်္ဘောပင်သည် တစ်ပင်လုံး အသုံးဝင်သည်။ သင်္ဘောသီးစားသုံးခြင်းဖြင့် ကျန်းမာစေကာ အသက်ရှည်၍ ရောဂါကင်းဝေးစေနိုင်ပြီး ဝမ်းပျက်ရောဂါ ပျောက်ကင်းစေနိုင်သည်။ သင်္ဘောသီးအစေ့စားခြင်းဖြင့်လည်း ဝမ်းတွင်းရှိသန်ကောင်များကို သေစေနိုင်သည်။ သင်္ဘောသီးစိမ်းမှ ထွက်သောအစေးသည်လည်း အရေပြားရောဂါများကို ပျောက်ကင်းစေသည်။ သင်္ဘောရွက်သည်လည်း လေနာတတ်သူများအတွက် စားသုံးခြင်းဖြင့် သက်သာစေပြီး ဗီတာမင်စီနှင့် ဗီတာမင်အီး အပြင် စုစုပေါင်းအာဟာရဓာတ်(၆)မျိုးခန့် ပါဝင်သည့် အဖိုးတန်အရွက် ဖြစ်သည်။',5,'ACTIVE','2019-08-19 16:10:48','default-admin','2019-08-19 16:10:48','',1,1,0.00),(16,'ပဲလုံးကြော်','ပဲလုံးကြော်သည် ခိုးသန်းရွာမှ ထွက်ရှိသော စားသောက်ကုန်ပစ္စည်း ဖြစ်သည်။ အမှတ်တံဆိပ်မှာ စုစုနွေး(ပဲစိမ်းကြော်လုပ်ငန်း) ဖြစ်သည်။ ပါဝင်ပစ္စည်းများမှာ ပဲလုံး၊ ဆီ၊ ဆားနှင့် ဟင်းခတ်မှုန့်တို့ ဖြစ်ပြီး တစ်ထုပ်လျှင် (၂၀၀)ကျပ် ဖြစ်သည်။ ထုတ်ပိုးပြီးသော ပဲလုံးကြော်များကို အနီးအနားရှိ ကျေးရွာများနှင့် မုံရွာ၊ မန္တလေးမြို့များသို့ တင်သွင်းဖြန့်ချီသည်။\n',4,'ACTIVE','2019-08-19 16:11:14','default-admin','2019-08-19 16:11:14','',1,1,0.00),(17,'ပဲနီကြော်','ပဲနီကြော်သည် ခိုးသန်းရွာမှ ထွက်ရှိသော စားသောက်ကုန်ပစ္စည်း ဖြစ်သည်။ အမှတ်တံဆိပ်မှာ စုစုနွေး(ပဲစိမ်းကြော်လုပ်ငန်း) ဖြစ်သည်။ ပါဝင်ပစ္စည်းများမှာ ပဲနီ၊ ဆီ၊ ဆားနှင့် ဟင်းခတ်မှုန့်တို့ ဖြစ်ပြီး တစ်ထုပ်လျှင် (၂၀၀)ကျပ် ဖြစ်သည်။ ထုတ်ပိုးပြီးသော ပဲနီကြော်များကို အနီးအနားရှိ ကျေးရွာများနှင့် မုံရွာ၊ မန္တလေးမြို့များသို့ တင်သွင်းဖြန့်ချီသည်။',4,'ACTIVE','2019-08-19 16:11:40','default-admin','2019-08-19 16:11:40','default-admin',1,1,0.00),(18,'ချည်ချိတ်ထည်','ချည်ချိတ်ထည်များ ရက်လုပ်ရာတွင် အထူးသဖြင့် အမျိုးသမီးများ ဝတ်ဆင်ရန် လုံချည်များကို ရက်လုပ်လေ့ရှိသည်။ ချည်ထည်များမှာ ရာသီဥတုအေးလျှင် နွေးပြီး ရာသီဥတုပူလျှင် အေးစေသည့် အထည်များ ဖြစ်သည်။ ချည်ချိတ်ဒီဇိုင်းများမှာ ခေတ်မီဆန်းသစ်ပြီး အရွယ်သုံးပါးမရွေး နှစ်သက်သော ဒီဇိုင်းများ ဖြစ်ကြသည်။ လုံချည်တွင် ချိတ်လိုင်းများ ထည့်ကာ အင်္ကျီစကို ရိုးရှင်းသော ပြောင်ဒီဇိုင်းများလည်း ရှိသည်။ လုံချည်ဈေးနှုန်းမှာ ကျပ်(၅၀၀၀)ခန့် ရှိသည်။ အင်္ကျီနှင့် လုံချည်ဈေးနှုန်းမှာ ကျပ်(၈၀၀၀)ခန့် ရှိသည်။',2,'ACTIVE','2019-08-19 16:12:49','default-admin','2019-08-19 16:12:49','',1,1,0.00),(19,'ပိုးချိတ်ထည်','ချည်ဖြင့်ရက်လုပ်ထားသော ချည်ပိတ်အုပ်ပေါ်တွင် ဆန်းသစ်လှပသော ဒီဇိုင်းများနှင့် ပိုးချိတ်များ ဖောက်လုပ်ထားသော ပိုးချိတ်ထည်များ ဖြစ်ကြသည်။ ပိုးချိတ်ထည်များကို အလှူမင်္ဂလာပွဲများနှင့် ပ္ွဲလမ်းသဘင်များတွင် အထူးဝတ်ဆင်ကြသည်။ ဈေးနှုန်းမှာ မြန်မာကျပ်ငွေ(၂၀၀၀၀)ကျော်မှ (၅၀၀၀၀)ခန့် အထိ ရှိသည်။',2,'ACTIVE','2019-08-19 16:14:15','default-admin','2019-08-19 16:14:15','',1,1,0.00),(20,'သံပုရာခြံ','သံပုရာသီးသည် ဆေးဖက်ဝင်အသီးတစ်မျိုး ဖြစ်သည်။ သံပုရာသီးကို အသုပ်၊ မုန့်ဟင်းခါး၊ ကြာဇံဟင်းနှင့် အခြားစားသောက်ဖွယ်ရာများတွင်လည်း ထည့်၍ စားသုံးလေ့ရှိသည်။ သံပုရာသီးသည် ကျန်းမာရေးသာမက အလှအပအတွက်လည်း အထောက်အကူပြုသည်။ ထို့အပြင် သွားများကို ဖြူစေပြီး နှုတ်ခမ်းကွဲခြင်း၊ ဆံပင်ကျွတ်ခြင်း၊ ဦးရေပြားယားယံခြင်းနှင့် အသားအရေခြောက်သွေ့ခြင်းများ ဖြစ်ပေါ်ချိန်တွင် သံပုရာသီးကို အသုံးပြုခြင်းဖြင့် သက်သာပျောက်ကင်းစေသည်။ သံပုရာရည်ကို သောက်သုံးခြင်းအားဖြင့် မောပန်းနွမ်းနယ်ခြင်းကို ပျောက်ကင်းစေပြီး လူ၏ခန္ဓာကိုယ်တွင်(အထူးသဖြင့် ဝမ်းတွင်) ဖြစ်ပွားတတ်သော ရောဂါများကို ကာကွယ်နိုင်ပါသည်။\n',5,'ACTIVE','2019-08-19 16:14:46','default-admin','2019-08-19 16:14:46','',1,1,0.00),(21,'ငှက်ပျောခြံ','ငှက်ပျောသည် မြေအမျိုးမျိုးပေါ်တွင် စိုက်ပျိုးဖြစ်ထွန်းသည်။ သဲနုန်းဆန်သောမြေ၊ နုန်းဆန်သော ရွှံ့မြေပေါ်တွင် စိုက်ပျိုးသင့်သည်။ မစိုက်မီ (၂)လ ကြိုတင်ပြီး စိုက်ကျင်းပေါ် မြေဆွေးထည့်ပေးရသည်။ အအေးလွန်ကဲသည့် ဆောင်းရာသီနှင့် မိုးများစွာရွာသည့် ကာလမှ လွဲ၍ ကျန်အချိန်များတွင် စိုက်ပျိုးသင့်ပါသည်။ ငှက်ပျောသီးမှာ အာရုံကြောကို ကျန်းမာစေသော ဗီတာမင်ဘီဆစ်ပါဝင်ပါသည်။\n',5,'ACTIVE','2019-08-19 16:15:33','default-admin','2019-08-19 16:15:33','',1,1,0.00),(22,' ငုံး','ခိုးသန်းရွာတွင် ငုံးမွေးမြူရေးသည်လည်း အရေးပါသော စီးပွားရေးလုပ်ငန်းတစ်ခု ဖြစ်သည်။ ငုံးခြံစုစုပေါင်း(၃)ခြံ ရှိသည်။ တစ်ခြံလျှင် ပျမ်းမျှငုံးအကောင်အရေအတွက်(၂၃၀၀၀)ကျော်ခန့် ရှိသည်။ တစ်ခြံလျှင် ပျမ်းမျှ ငုံးအရေအတွက်မှာ (၇၀၀၀၀)ခန့် ရှိသည်။ ငုံးမှ ထွက်ရှိသော ငုံးဥတစ်လုံး၏ဈေးနှုန်းမှာ (၂၃)ကျပ်နှင့် (၂၅)ကျပ်အကြားတွင် ရှိသည်။',3,'ACTIVE','2019-08-19 16:16:22','default-admin','2019-08-19 16:16:22','',1,1,0.00),(23,'ချည်ထည်','ဆန်းသစ်သော ဒီဇိုင်းများနှင့် လူကြိုက်များသော မြန်မာ့ရိုးရာ ချည်ထည်များကို ခိုးသန်းရွာတ္ွင်လည်း ထွက်ရှိသည်။ အသင့်ပြုလုပ်ပြီးသား ချည်လုံးများကို စက်ရုံများမှ မှာယူပြီး ထိုချည်များကို ချည်ပုတ်ခြင်း၊ ချည်အစားထည့်ခြင်းများ ပြုလုပ်ပြီးကာမှ ရက်ကန်းခတ်ကြသည်။ ချည်ထည်စစ်စစ်ကို ကိုယ်တိုင်ကိုယ်ကျ ချုပ်လုပ်ပြီး ဈေးကွက်ထဲသို့ တင်သွင်းလျက် ရှိသည်။ ရိုးရာလက်ဖြစ် ချည်ထည်များကို မုံရွာ၊ မန္တလေးမြို့များသို့ တင်သွင်းလျက်ရှိသည်။ ချည်လုံချည်တစ်ထည်၏ ဈေးနှုန်းမှာ ငွေကျပ်(၄၀၀၀)ခန့် ဖြစ်သည်။',2,'ACTIVE','2019-08-19 16:16:48','default-admin','2019-08-19 16:16:48','',1,1,0.00),(24,'ပြောင်းဖူး','ပြောင်းဖူးကို မိုးရာသီ၏ ပထမအပတ် မေလ(၁၅)ရက်မှ ဇွန်လပထမအပတ်အတွင်းတွင် စတင်စိုက်ပျိုးကြပြီး မောင်းညိုချိန်၊ ပြောင်းဖူးအခွံအဝါရောင်ပြောင်းချိန်၊ ပြောင်းဖူးရိုးတံနှင့် အခွံကြားအစပ် အညိုရောင်ကွင်းလေးပေါ်ချိန်တွင် ရိတ်သိမ်းပေးရသည်။ ပြောင်းဖူးကို ပြုတ်၍သော်လည်းကောင်း ဟင်းအဖြစ် ချက်ပြုတ်၍သော်လည်းကောင်း အမျိုးမျိုးပြုလုပ်ကာ စားသုံးနိုင်ပါသည်။ ပြောင်းဖူးသည် နှလုံးသွေးကြောဆိုင်ရာ ကျန်းမာရေးနှင့် ကင်ဆာရောဂါများကို ကာကွယ်ပေးသည်။ မှတ်ဥာဏ်ကို အားကောင်းစေပြီး အမြင်အာရုံကို ကြည်လင်စေကာ ရောင်ရမ်းမှုကို လျော့ကျစေပါသည်။',1,'ACTIVE','2019-08-19 16:17:15','default-admin','2019-08-19 16:17:15','',1,1,0.00),(25,'ကြက်သွန်နီ','ကြက်သွန်နီသည် ရွာ၏အဓိကစိုက်ပျိုးသီးနှံ ဖြစ်သည်။ ကြက်သွန်နီကို နှစ်စဥ် တန်ဆောင်မုန်းလဆန်းပိုင်းတွင် စတင်စိုက်ပျိုးကြပြီး ပြာသို၊ တပို့တွဲလများတွင် ပွင့်ကာ တပေါင်းလတွင် ကြက်သွန်ဥများကို တူးဖော်ကြသည်။ ကြက်သွန်ဥကိုသာမက ကြက်သွန်မြိတ်ကိုလည်း စားသုံးနိုင်ပါသည်။ ကြက်သွန်နီသည် ကျန်းမာရေးအတွက်လည်း အထူးအသုံးဝင်သည်။ သာမန်အအေးမိရောဂါ၊ နှလုံးရောဂါ၊ လေးဘက်နာရောဂါ၊ အရိုးကြွပ်ဆတ်ရောဂါနှင့် အခြားရောဂါများကို ကုသရာတွင်လည်း အသုံးပြုနိုင်သည်။ ဦးခေါင်းပိုင်းနှင့် လည်ချောင်းကင်ဆာများကိုလည်း ကာကွယ်ပေးနိုင်သည်။ ',1,'ACTIVE','2019-08-19 16:17:45','default-admin','2019-08-19 16:17:45','',1,1,0.00);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_type`
--

DROP TABLE IF EXISTS `product_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product_type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `product_type_name` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `product_type_product_type_name_unique` (`product_type_name`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_type`
--

LOCK TABLES `product_type` WRITE;
/*!40000 ALTER TABLE `product_type` DISABLE KEYS */;
INSERT INTO `product_type` VALUES (1,'လယ်ယာထွက်ကုန်ပစ္စည်း','ခိုးသန်းကျေးရွာမှထွက်ရှိသောလယ်ယာထွက်ကုန်ပစ္စည်းများ','2019-08-19 15:57:50','default-admin','2019-08-19 15:57:50','',1,1,0.00),(2,'လက်မှုပစ္စည်း','ခိုးသန်းကျေးရွာမှရက်လုပ်သောလက်မှုပစ္စည်းများ','2019-08-19 15:58:27','default-admin','2019-08-19 15:58:27','',1,1,0.00),(3,'မွေးမြူရေး','ခိုးသန်းကျေးရွာမှမွေးမြူသောတိရစ္ဆာန်များ','2019-08-19 15:59:02','default-admin','2019-08-19 15:59:02','',1,1,0.00),(4,'စားသုံးကုန်ပစ္စည်း','ခိုးသန်းကျေးရွာမှထုတ်လုပ်သောစားသုံးကုန်ပစ္စည်းများ','2019-08-19 15:59:42','default-admin','2019-08-19 15:59:42','',1,1,0.00),(5,'ခြံထွက်သီးနှံများ','ခိုးသန်းကျေးရွာမှစိုက်ပျိုးသောခြံထွက်သီးနှံများ','2019-08-19 16:01:04','default-admin','2019-08-19 16:01:04','',1,1,0.00);
/*!40000 ALTER TABLE `product_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `school`
--

DROP TABLE IF EXISTS `school`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `school` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` longtext NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `school_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `school`
--

LOCK TABLES `school` WRITE;
/*!40000 ALTER TABLE `school` DISABLE KEYS */;
INSERT INTO `school` VALUES (1,'သူငယ်တန်းကျောင်းသား၊ကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:06:07','default-admin','2019-08-19 14:06:07','',1,1,0.00),(2,'ပထမတန်းကျောင်းသားကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:06:43','default-admin','2019-08-19 14:06:43','',1,1,0.00),(3,'ဒုတိယတန်းကျောင်းသားကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:07:00','default-admin','2019-08-19 14:07:00','',1,1,0.00),(4,'တတိယတန်းကျောင်းသားကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:07:20','default-admin','2019-08-19 14:07:20','',1,1,0.00),(5,'စတုတ္ထတန်းကျောင်းသားကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:07:40','default-admin','2019-08-19 14:07:40','',1,1,0.00),(6,'ပဥ္စမတန်းကျောင်းသားကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:07:52','default-admin','2019-08-19 14:07:52','',1,1,0.00),(7,'ဆဌမတန်းကျောင်းသားကျောင်းသူများ','ခိုးသန်းကျေးရွာ၏အခြေခံပညာမူလတန်းလွန်ကျောင်းမှကျောင်းသားကျောင်းသူများ','ACTIVE','2019-08-19 14:08:07','default-admin','2019-08-19 14:08:07','',1,1,0.00);
/*!40000 ALTER TABLE `school` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `slider`
--

DROP TABLE IF EXISTS `slider`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `slider` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `slider_name_unique` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `slider`
--

LOCK TABLES `slider` WRITE;
/*!40000 ALTER TABLE `slider` DISABLE KEYS */;
/*!40000 ALTER TABLE `slider` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `society_member`
--

DROP TABLE IF EXISTS `society_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `society_member` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `position_id` int(10) unsigned NOT NULL,
  `description` longtext NOT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `society_member_name_unique` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `society_member`
--

LOCK TABLES `society_member` WRITE;
/*!40000 ALTER TABLE `society_member` DISABLE KEYS */;
INSERT INTO `society_member` VALUES (1,'ဦးဇော်လတ်',4,'ကလျာဏ္ဏမိတ္တလူမှုကူညီရေးအသင်း၏တာ၀န်ရှိပုဂ္ဂိုလ်','၀၉၂၅၉၀၇၀၂၅၄','2019-08-19 14:04:57','default-admin','2019-08-19 14:04:57','',1,1,0.00);
/*!40000 ALTER TABLE `society_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `student_list`
--

DROP TABLE IF EXISTS `student_list`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `student_list` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `grade` varchar(255) NOT NULL,
  `teacher_name` varchar(255) NOT NULL,
  `school_girl` varchar(255) NOT NULL,
  `school_boy` varchar(255) NOT NULL,
  `total_student` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `status` tinyint(1) DEFAULT '1',
  `version_no` int(11) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `student_list_grade_unique` (`grade`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `student_list`
--

LOCK TABLES `student_list` WRITE;
/*!40000 ALTER TABLE `student_list` DISABLE KEYS */;
INSERT INTO `student_list` VALUES (1,'သူငယ်တန်း','ဒေါ်ဇင်မာနွယ်','၇','၅','၁၂','2019-08-19 14:09:23','default-admin','2019-08-19 14:09:23','',1,1,0.00),(2,'ပထမတန်း','ဒေါ်မြမြခိုင်','၄','၈','၁၂','2019-08-19 14:09:55','default-admin','2019-08-19 14:09:55','',1,1,0.00),(3,'ဒုတိယတန်း','ဒေါ်မြင့်မိုး','၆','၁၁','၁၇','2019-08-19 14:10:17','default-admin','2019-08-19 14:10:17','',1,1,0.00),(4,'တတိယတန်း','ဒေါ်ခင်ရတနာတိုး','၁၀','၅','၁၅','2019-08-19 14:10:46','default-admin','2019-08-19 14:10:46','',1,1,0.00),(5,'စတုတ္ထတန်း','ဦးဇော်နိုင်ဦး','၄','၇','၁၁','2019-08-19 14:11:17','default-admin','2019-08-19 14:11:17','',1,1,0.00),(6,'ပဥ္စမတန်း','ဒေါ်သင်းသင်းနွယ်','၁၅','၂','၁၇','2019-08-19 14:11:45','default-admin','2019-08-19 14:11:45','',1,1,0.00),(7,'ဆဌမတန်း','ဒေါ်ကျိန်လမ်းဒိတ်၊ဒေါ်အေးမြတ်မွန်','၃','၁၂','၁၅','2019-08-19 14:12:22','default-admin','2019-08-19 14:12:22','',1,1,0.00);
/*!40000 ALTER TABLE `student_list` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `email` varchar(255) NOT NULL,
  `password_hash` longtext NOT NULL,
  `phone_no` varchar(255) DEFAULT NULL,
  `nric` varchar(255) DEFAULT NULL,
  `created_by` varchar(255) NOT NULL,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` varchar(255) NOT NULL,
  `version_no` int(11) DEFAULT '1',
  `status` tinyint(1) DEFAULT '1',
  `sort_order_no` decimal(8,2) DEFAULT '0.00',
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_user_name_unique` (`user_name`),
  UNIQUE KEY `user_email_unique` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'default-super-admin','2019-08-19 13:47:38','hello@irrasoft.com','$2a$10$7JQLtklC4OCkVwE2JvY4JOx5ybTp0Bb921QeXaa5xltIcEctaEJsW','09788885091','5/mayana(naing)181818','default-super-admin','2019-08-19 13:47:38','default-super-admin',1,1,0.00),(2,'default-admin','2019-08-19 13:47:38','info@irrasoft.com','$2a$10$tnNppX2gqSWOHduu.pAMfO7XNkbo4EtqQAwV9E0dfTgxRpm95cjfG','09788885090','5/mayana(naing)161678','default-super-admin','2019-08-19 13:47:38','default-super-admin',1,1,0.00),(3,'default-user','2019-08-19 13:47:38','user@irrasoft.com','$2a$10$6wRQy28DWT8Iw0uc8JXEeOoLKiYZCU0Xjf5wuGV68lBjeOPEMy1B6','09788885092','5/mayana(naing)341567','default-super-admin','2019-08-19 13:47:38','default-super-admin',1,1,0.00),(4,'Htet Htet Win','2019-08-19 13:59:55','htetw3487@gmail.com','$2a$10$IlqC9MfJ7G7aca0vhj2HkuxonHs.3sO0c29XD9RWw3RX8J6M8e6vC','09971332436','5/mayana(naing)306597','default-admin','2019-08-19 13:59:55','',1,1,0.00);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-08-21  9:50:11
