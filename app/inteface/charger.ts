import { FaFacebook } from "react-icons/fa";

export const imageChager = [
  {
    id: 0,
    name: "รูปโครงการคอนโด",
  },
  {
    id: 1,
    name: "รูปที่ 1.1) แสดงตำแหน่งห้อง MDB และจุดติดต้้ง Main ของเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 2,
    name: "รูปที่ 1.2) แสดงตำแหน่งห้อง MDB และจุดติดต้้ง Main ของเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 3,
    name: "รูปที่ 2.1) แสดงจุดเชื่อมต่อ Circuit Beaker สำหรับเชื่อมต่อเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 4,
    name: "รูปที่ 2.2) แสดงจุดเชื่อมต่อ Circuit Beaker สำหรับเชื่อมต่อเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 5,
    name: "รูปที่ 3.1) แนวเดิน ท่อหรือราง ร้อยสายไฟฟ้าและตำแหน่งติดต้้งตู้ไฟฟ้า สำหรับเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 6,
    name: "รูปที่ 3.2) แนวเดิน ท่อหรือราง ร้อยสายไฟฟ้าและตำแหน่งติดต้้งตู้ไฟฟ้า สำหรับเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 7,
    name: "รูปที่ 4.1) แนวเดิน ท่อหรือราง ร้อยสายไฟฟ้าและตำแหน่งติดตั้งตู้ไฟฟ้า สำหรับเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 8,
    name: "รูปที่ 4.2) แนวเดิน ท่อหรือราง ร้อยสายไฟฟ้าและตำแหน่งติดตั้งตู้ไฟฟ้า สำหรับเครื่องอัดประจุไฟฟ้า",
  },
  {
    id: 9,
    name: "รูปที่ 5.1) ตำแหน่งติดต้งัเครื่องอัดประจุไฟฟ้าจำนวน 2 เครื่อง",
  },
  {
    id: 10,
    name: "รูปที่ 5.2) ตำแหน่งติดต้งัเครื่องอัดประจุไฟฟ้าจำนวน 2 เครื่อง",
  },
  {
    id: 11,
    name: "รูปที่ 6) ตำแหน่งช่องจอดรถยนต์ไฟฟ้า และเครื่องอัดประจุไฟฟ้าจำนวน 2 เครื่อ",
  },
];

export enum StatusChargerSurveys {
  Visit = "Visit Site Survey",
  Final = "Final Contract Survey Scheduler Installation",
  Process = "Process Installation",
  Onboard = "Onboard test with platform",
  Ready = "Ready to Revenue",
}

export enum Role {
  Admin = "ADMIN",
  User = "USER",
}
// export enum UserActive {
//   T = true,
//   F = false,
// }

export const RoleUser = [
  {
    id: 0,
    name: "ADMIN",
  },
  {
    id: 1,
    name: "USER",
  },
];

export const Gender = [
  {
    id: 0,
    name: "ชาย",
    ff: "1",
  },
  {
    id: 1,
    name: "หญิง",
    ff: "2",
  },
];

export const StatusChargerSurvey = [
  {
    id: 1,
    name: "Visit Site Survey",
  },
  {
    id: 2,
    name: "Final Contract Survey Scheduler Installation",
  },
  {
    id: 3,
    name: "Process Installation",
  },
  {
    id: 4,
    name: "Onboard test with platform",
  },
  {
    id: 5,
    name: "Ready to Revenue",
  },
];
export const empoyee_survey = [
  {
    id: 0,
    name: "พจนารถ พงษ์แพทย์ (ต้อม)",
  },
  {
    id: 1,
    name: "ศุภกิตติ์ โสชัยยัง (ฟลุ๊ค)",
  },
  {
    id: 2,
    name: "กิตติชัย รัตนะวัน (บอย)",
  },
  {
    id: 3,
    name: "ทรงสุรัชฌ์ ลวนานนท์ (เล็ก)",
  },
  {
    id: 4,
    name: "สุวรรณ รื่นสุคนธ์ (หนึ่งโย่ว)",
  },
  {
    id: 5,
    name: "สุภิชยา เต๊ะขันหมาก (กาฟิว)",
  },
];

export const banks: any[] = [
  { id: 1, name: "ธนาคารกรุงเทพ", code: "BBL" },
  { id: 2, name: "ธนาคารกสิกรไทย", code: "KBANK" },
  { id: 3, name: "ธนาคารกรุงไทย", code: "KTB" },
  { id: 4, name: "ธนาคารทหารไทย", code: "TMB" },
  { id: 5, name: "ธนาคารไทยพาณิชย์", code: "SCB" },
  { id: 6, name: "ธนาคารกรุงศรีอยุธยา", code: "BAY" },
  { id: 7, name: "ธนาคารเกียรตินาคิน", code: "KKP" },
  { id: 8, name: "ธนาคารซีไอเอ็มบีไทย", code: "CIMBT" },
  { id: 9, name: "ธนาคารทิสโก้", code: "TISCO" },
  { id: 10, name: "ธนาคารธนชาต", code: "TBANK" },
  { id: 11, name: "ธนาคารยูโอบี", code: "UOBT" },
  { id: 12, name: "ธนาคารสแตนดาร์ดชาร์เตอร์ด (ไทย)", code: "SCBT" },
  { id: 13, name: "ธนาคารไทยเครดิตเพื่อรายย่อย", code: "TCRB" },
  { id: 14, name: "ธนาคารแลนด์ แอนด์ เฮาส์", code: "LH" },
  { id: 15, name: "ธนาคารไอซีบีซี (ไทย)", code: "ICBC" },
  {
    id: 16,
    name: "ธนาคารพัฒนาวิสาหกิจขนาดกลางและขนาดย่อมแห่งประเทศไทย",
    code: "SME D Bank",
  },
  { id: 17, name: "ธนาคารเพื่อการเกษตรและสหกรณ์การเกษตร", code: "BAAC" },
  {
    id: 18,
    name: "ธนาคารเพื่อการส่งออกและนำเข้าแห่งประเทศไทย",
    code: "EXIM",
  },
  { id: 19, name: "ธนาคารออมสิน", code: "GSB" },
  { id: 20, name: "ธนาคารอาคารสงเคราะห์", code: "GH Bank" },
  { id: 21, name: "ธนาคารอิสลามแห่งประเทศไทย", code: "IBANK" },
  { id: 22, name: "ธนาคารแห่งประเทศจีน", code: "BOC" },
  { id: 23, name: "ธนาคารซูมิโตโม มิตซุย ทรัสต์ (ไทย)", code: "SMTB" },
  {
    id: 24,
    name: "ธนาคารฮ่องกงและเซี้ยงไฮ้แบงกิ้งคอร์ปอเรชั่น จำกัด",
    code: "HSBC",
  },
];

export const bank_type = [
  {
    id: 0,
    name: "ออมทรัพย์",
  },
  {
    id: 2,
    name: "กระเเสรายวัน",
  },
  {
    id: 3,
    name: "ผากประจำ",
  },
];

export const rate_type = [
  {
    id: 0,
    name: "50% - 50%",
  },
  {
    id: 0,
    name: "55% - 45%",
  },
  {
    id: 2,
    name: "60% - 40%",
  },
  {
    id: 2,
    name: "65% - 35%",
  },
  {
    id: 3,
    name: "70% - 30%",
  },
  {
    id: 3,
    name: "75% - 25%",
  },
];

export const typeele = [
  {
    id: 0,
    name: "3 phase",
  },
  {
    id: 1,
    name: "1 phase",
  },
];

export const ins = [
  {
    id: 0,
    name: "ยึดผนัง",
  },
  {
    id: 1,
    name: "ตั้งพื้นพร้อมขา",
  },
];
