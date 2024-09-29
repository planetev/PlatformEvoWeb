import { report } from "process";

interface SolarBuilding {
  id: number;
  name: string;
}

export interface SolarInstallation {
  datebook: string;
  status: string;
  wno: string;
  customer_name: string;
  tel: string;
  date_Installation: string;
  collection_date: string;
  production_targets: string;
  servey_name: string;
  longlat: string;
  location: string;

  building_type: string;
  material_type: string;
  roof_condition: string;
  slope: string;
  direction: string;
  size_roof: string;
  frame_made: string;
  grounding: string;
  internet: string;
  wifi: string;
  results: string;
  remarks: string;

  solar_type: string;

  p1: string;
  p2: string;
  p3: string;
  p4: string;

  pp1: string;
  pp2: string;

  ele: string;

  ln: string;
  lg: string;
  ng: string;

  miter_size: string;
  miter_id: string;
  total_rs: string;
  inverter: string;
  panel: string;

  mounting: string;
  boq: any[];
  imagehome?: any[];
  imagesmiter?: any[];
  imagesout?: any[];
  imagesin?: any[];
  imagessolar?: any[];
  imagesins?: any[];
}

export const building: SolarBuilding[] = [
  {
    id: 1,
    name: "บ้านเดี่ยว",
  },
  {
    id: 2,
    name: "บ้านแฝด",
  },
  {
    id: 3,
    name: "ทาวน์เฮ้าส์",
  },
  {
    id: 4,
    name: "อาคารพาณิชย์",
  },
  {
    id: 5,
    name: "โรงเรียน",
  },
  {
    id: 6,
    name: "โรงพยาบาล",
  },
  {
    id: 7,
    name: "โรงงาน",
  },
];

export const roofMaterials: SolarBuilding[] = [
  {
    id: 1,
    name: "กระเบื้อง CPAC ลอน",
  },
  {
    id: 2,
    name: "กระเบื้อง CPAC เรียบ",
  },
  {
    id: 3,
    name: "Metal Sheet",
  },
  {
    id: 4,
    name: "Metal Sheet Clip lock",
  },
  {
    id: 5,
    name: "กระเบื้องลอนคู่",
  },
  {
    id: 6,
    name: "Solar slap",
  },
  {
    id: 7,
    name: "ลาคาที",
  },
];

export const roofDirection: SolarBuilding[] = [
  {
    id: 1,
    name: "เหนือ",
  },
  {
    id: 2,
    name: "ใต้",
  },
  {
    id: 3,
    name: "ตะวันออก",
  },
  {
    id: 4,
    name: "ตะวันตก",
  },
  {
    id: 5,
    name: "ตะวันออกเฉียงเหนือ",
  },
  {
    id: 6,
    name: "ตะวันออกเฉียงใต้",
  },
  {
    id: 7,
    name: "ตะวันตกเฉียงเหนือ",
  },
  {
    id: 8,
    name: "ตะวันตกเฉียงใต้",
  },
];

export const frameMaterials: SolarBuilding[] = [
  {
    id: 1,
    name: "เหล็ก",
  },
  {
    id: 2,
    name: "ไม้",
  },
  {
    id: 3,
    name: "อลูมิเนียม (รางสำเร็จ)",
  },
];

export const cableSystem: SolarBuilding[] = [
  {
    id: 1,
    name: "มีระบบสายดิน",
  },
  {
    id: 2,
    name: "ไม่มีระบบสายดิน",
  },
];

export const internetProviders: SolarBuilding[] = [
  {
    id: 1,
    name: "3BB",
  },
  {
    id: 2,
    name: "AIS",
  },
  {
    id: 3,
    name: "TRUE",
  },
  {
    id: 4,
    name: "TOT",
  },
];

export const electricalConnections = [
  {
    id: 1,
    name: "มีช่อง Breaker ว่าง",
  },
  {
    id: 2,
    name: "ต้องรวม Breaker ลูกค้า (แจ้งลูกค้าด้วย) รวม Breaker หมายเลข",
  },
  {
    id: 3,
    name: "เชื่อมได้ Main ประธาน (ความสาย)",
  },
  {
    id: 4,
    name: "ตั้ง Main ประธานใหม่ (มีค่าใช้จ่ายเพิ่ม)",
  },
];

export const surveyResults = [
  {
    id: 1,
    name: "ผ่าน",
  },
  {
    id: 2,
    name: "ไม่ผ่าน",
  },
];

export const additionalElectricalInfo = [
  {
    id: 1,
    name: "เบรคเกอร์มีไฟรั่ว",
  },
  {
    id: 2,
    name: "มีระบบ Ground",
  },
  {
    id: 3,
    name: "เช็คไฟรั่วรวม ปริมาณไฟรั่ว mA",
  },
];

export const breakerSizes = [
  {
    id: 1,
    name: "5(15) 1 P",
  },
  {
    id: 2,
    name: "5(100) 1 P",
  },
  {
    id: 3,
    name: "15(45) 3 P",
  },
  {
    id: 4,
    name: "50(150) 3 P",
  },
  {
    id: 5,
    name: "400 3 P",
  },
  {
    id: 6,
    name: "15(45) 1 P",
  },
  {
    id: 7,
    name: "50(150) 1 P",
  },
  {
    id: 8,
    name: "30(100) 3 P",
  },
  {
    id: 9,
    name: "200 3 P",
  },
];

export const imagesArray = [
  { id: 0, name: "รูปที่ 1.1 ด้านมุมสูง" },
  {
    id: 1,
    name: "รูปที่ 1.2 ด้านหน้าบ้าน",
  },
  {
    id: 2,
    name: "รูปที่ 1.3 ด้านหลังบ้าน",
  },
  {
    id: 3,
    name: "รูปที่ 1.4 รูป cutout ",
  },
];

export const imagesMiter = [
  { id: 0, name: "รูปเลข miter รูปที่ 1" },
  { id: 1, name: "รูปเลข miter รูปที่ 2" },
  {
    id: 3,
    name: " รูปเครื่องวัดขนาด miter รูปที่ 1",
  },
  {
    id: 4,
    name: " รูปเครื่องวัดขนาด miter รูปที่ 2",
  },
];

export const imagesOut = [
  { id: 0, name: "รูปถ่ายภายนอกอาคาร 1" },
  {
    id: 1,
    name: "รูปถ่ายภายนอกอาคาร 2",
  },
  {
    id: 2,
    name: "แนวสาย DC cable รูปที่ 1",
  },
  {
    id: 3,
    name: "แนวสาย DC cable รูปที่ 2",
  },
  {
    id: 4,
    name: "แนวสาย DC cable รูปที่ 3",
  },
  {
    id: 5,
    name: "แนวสาย DC cable รูปที่ 4",
  },
  {
    id: 6,
    name: "เส้นทางลําเลียงแผงโซลาร์เซลล์ขึนตําแหน่งติดตั้ง รูปที่ 1",
  },
  {
    id: 7,
    name: "เส้นทางลําเลียงแผงโซลาร์เซลล์ขึนตําแหน่งติดตั้ง รูปที่ 2",
  },
  {
    id: 8,
    name: "จุดติดตังระบบ Solar system รูปที่ 1",
  },

  {
    id: 9,
    name: "จุดติดตังระบบ Solar system รูปที่ 2",
  },

  {
    id: 10,
    name: "รูปที่ 3.8 จุดติดตังระบบ Solar system 3",
  },
  {
    id: 11,
    name: "รูปที่ 3.8 จุดติดตังระบบ Solar system 4",
  },

  {
    id: 12,
    name: "การเดินสาย Ground รูปที่ 1",
  },
  {
    id: 13,
    name: "การเดินสาย Ground รูปที่ 2",
  },
];

export const imagesIN = [
  { id: 0, name: "รูป ตู้ main breaker (ภายนอก)" },
  {
    id: 1,
    name: "รูป ตู้ main breaker เปิดฝา (ภายใน)",
  },
  {
    id: 2,
    name: "จุดคล้องสาย CT",
  },
  {
    id: 3,
    name: "แนวสาย CT และระยะ",
  },
  {
    id: 4,
    name: "ภาพรวม เห็นตําแหน่งตู้ main breaker ของลูกค้า รูปที่ 1",
  },
  {
    id: 5,
    name: "ภาพรวม เห็นตําแหน่งตู้ main breaker ของลูกค้า รูปที่ 2",
  },
  {
    id: 5,
    name: "ภาพรวม เห็นตําแหน่งตู้ main breaker ของลูกค้า รูปที่ 3",
  },

  {
    id: 6,
    name: "ภาพรวม เห็นตําแหน่งตู้ main breaker ของลูกค้า รูปที่ 4",
  },
];

export const imagesSolarE = [
  { id: 0, name: "รูป designer report Page 1" },
  {
    id: 1,
    name: "รูป designer report Page 2",
  },
];

export const Inverter = [
  { id: 0, name: "รูปที่ 1" },
  { id: 1, name: "รูปที่ 2" },
  { id: 2, name: "รูปที่ 3" },
  { id: 3, name: "รูปที่ 4" },
];

export const Tool = [
  { id: 0, name: "รูปที่ 1" },
  { id: 1, name: "รูปที่ 2" },
  { id: 2, name: "รูปที่ 3" },
  { id: 3, name: "รูปที่ 4" },
  { id: 4, name: "รูปที่ 5" },
  { id: 5, name: "รูปที่ 6" },
  { id: 6, name: "รูปที่ 7" },
  { id: 7, name: "รูปที่ 8" },
  { id: 8, name: "รูปที่ 9" },
];

export const StatusSolarSurvey = [
  { id: 1, name: "ติดต่อและนัดหมายการสำรวจ" },
  { id: 2, name: "สำรวจสถานที่และประเมินระบบ" },
  { id: 3, name: "ติดตั้งระบบโซล่าเซลล์" },
  { id: 4, name: "ตรวจสอบและส่งมอบ" },
  { id: 5, name: "พื้นที่ไม่เหมาะสมสำหรับการติดตั้ง" },
];

export enum StatusSolarSurveys {
  Visit = "ติดต่อและนัดหมายการสำรวจ",
  Final = "สำรวจสถานที่และประเมินระบบ",
  Process = "ติดตั้งระบบโซล่าเซลล์",
  Onboard = "ตรวจสอบและส่งมอบ",
  Ready = "พื้นที่ไม่เหมาะสมสำหรับการติดตั้ง",
}
