insert into categories (name, definition)
values ('งาน', 'หมวดหมู่สำหรับบันทึกกิจกรรมที่ต้องทำเพื่อให้บรรลุเป้าหมายหรือวัตถุประสงค์บางอย่าง'),
('การพักผ่อน', 'หมวดหมู่สำหรับบันทึกกิจกรรมเกี่ยวกับงานอดิเรก รายการพักผ่อนหรือกิจกรรมที่ทำให้ผู้ใช้รู้สึกผ่อนคลาย มีความสุข'),
('การเงิน', 'หมวดหมู่สำหรับบันทึกกิจกรรมเกี่ยวข้องกับการเงิน ไม่ว่าจะเป็นวันครบกำหนดชำระเงิน แผนการใช้เงินหรืออื่นๆ');

insert into users (userName, email, image, status, password)
values ('user1', 'user1@email.com','link1','offline', 'user1'),
('user2', 'user2@email.com','link2','offline', 'user2');

insert into tasks (name, description, activityDate, lastEditDate, userID, categoryID)
values ('เที่ยวเพชรบุรี', 'ไปเที่ยวที่เพชรบุรี วันเสาร์ที่ 10 เมษายน ออกจากบ้านเวลา 08:00 นาฬิกา แวะกินข้าวตอนใกล้ถึง','10/4/2022','1/4/2022','1','2'),
('Project ITPM', 'ส่งงาน ITPM ก่อนเวลา...... ต้องทำงานเอกสาร วางแผนการทำโครงการที่คิดขึ้นมาเองและต้องจำลองสถานการณ์','4/5/2022','15/4/2022','2','1'),
('จ่ายค่าตัดชุด', 'จ่ายไปก่อนแล้ว2000 และจ่ายที่เหลืออีก3000 รวมเป็นเงินทั้งหมด 5000 แพงสุดๆ','1/10/2022','11/1/2022','2','3'),
('Project SDTE', 'นำเสนองาน dev tool วันจันทร์ สำสไลด์ด้วย ต้องนำเสนอทุกคน','2/4/2022','30/4/2022','1','1'),
('Present Project SVV', 'นำเสนองาน project SVV วันพฤพัส คาบบ่าย ลำดับการนำเสนอต้องดูอีกที','5/4/2022','30/4/2022','1','1'),
('จ่ายค่าโทรศัพท์', 'ราคาทั้งหมด 19000 บาท ผ่อนจ่าย 10เดือน ทุกวันที่ 3 ของเดือน จ่ายงวดละ 1200 บาท','3/5/2022','10/3/2022','1','3');