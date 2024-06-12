
## Getting Started

First, run the development server:

```bash
docker-compose up --build -d
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Project use

 - Nodejs:20.10.0
 - Nextjs:14
 - Docker/Docker-compose
 - Mysql:8.0
 - Sequelize

## รีวิวสิ่งที่ได้รับจากการพัฒนา/แนะนำฟัง์ชันที่มี
ื้
 # next เป็น framework ที่น่าใช้อีกตัวนึงที่ผมคิดว่าถ้าจะขึ้นโปรเจคใหม่จะใช้ Template นี้ในการขึ้นโปรเจคต่างๆ ซึ่งรองรับ api และการเชื่อมต่อ database mysql ไว้ให้เรียบร้อยแล้ว

 # ฟังก์ชันหลักๆ ที่ผมทำไว้คือ
  - ข้อมูลตาราง ผู้ใช้งาน รองรับการทำงานของ role level
  - การเข้ารหัส password
  - การแบ่งการทำงานของผู้ใช้งานตาม Role level
  - การเชื่อมต่อฐานข้อมูลด้วย sequelize

 # ปัญหาตอนพัฒนา และความรู้สึกส่วนตัว
  - เรื่องของ โครงสร้างของ Front และ Server โครงสร้างของ next ถ้าจะใช้ Route ที่เค้า Design แบบสะดวกจะต้องสร้าง API ไว้ที่ pages/api จะทำให้มันแยกการทำงานของ หน้าบ้าน และหลังบ้านได้โดยที่ไม่ต้องไปแก้ไข config ส่วนตัวอยากให้แยก folder ของ api กับ front ออกจากกันให้ชัดเจนมากกว่านี้ เพราะหากคนที่พึ่งจะเริ่มเขียนโปรแกรม อาจจะสับสนกับโครงสร้างดังกล่าว
  - เรื่องของ .env กับ .env.local ตอนพัฒนาต้องการจะใช้ .env เป็น production mode และใช้ .env.local เป็น dev mode แต่ project ที่ initial มาไม่สามารถแยกได้ ลองหาวิธีแก้ไขดูแล้วอาจจะต้องเพิ่ม config เพิ่มเติมจึงไม่ได้แก้ส่วนนี้ต่อ
  - เรื่องของ การ connect database ด้วย sequelize ส่วนตัวทำงานฝั่ง backend เมื่อ start program มันจะต้อง sync db ก่อนระบบถึงจะพร้อมให้ใช้งาน แต่ด้วยโครงสร้างของ next มันจะไป sync ตอนที่ไปเรียกใช้งาน api ในครั้งแรก ผมคิดว่ามันควรจะ sync ก่อนแล้วถึงให้ Start program สิ? แต่ลองหาวิธีในการ config เพิ่มเติมหลายทางแล้ว ก็ยังไม่สามารถทำแบบที่ต้องการได้
  
 # สุดท้ายนี้ template ที่ผมทำขึ้นหากใครลองเอาไปใช้แล้ว มีข้อแนะนำเพิ่มเติม สามารถเขียนมาพูดคุยกันได้ที่ kok.jarukit@gmail.com ครับ ขอบคุณที่ติดตามครับ
