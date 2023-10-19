# Chanathip Kulsirilak's Assignments

## 2110507 Software Development Practice II

### Computer Engineering, Chulalongkorn University

***

## Assignment Explanation (in Thai)

### 3. Assignment 03

ผมสร้าง component ที่ชื่อว่า MainBanner ไว้สำหรับแบนเนอร์ในหน้าเพจหลักของเว็บไซต์ โดยใช้ div เป็น container และใช้ CSS กำหนดความกว้างและความสูง จากนั้นด้านในก็ประกอบด้วย 4 element หลักที่อยู่ระดับเดียวกัน ได้แก่ h1, h2, div, และ Image โดยทั้งสามตัวนี้มีหน้าที่แตกต่างกัน แต่ div ในแบนเนอร์นี้จะทำหน้าที่ทำให้รูปภาพค่อย ๆ จางกลายเป็นสีขาวเหมือนกับสีหลักของหน้าเพจ เพื่อความกลมกลืน

### 4. Assignment 04

ผมเปลี่ยน Card component ให้สามารถรับ props เข้ามาได้ จากนั้นก็ดาวน์โหลดรูปภาพที่ถูกเตรียมไว้ลงมาในไดเรคทอรี่ของโปรเจค แล้วก็ทำการแก้ไขส่วนที่เรียกใช้ Card เรียบร้อย

สำหรับในส่วนของ Menu bar ผมเลือกจะออกแบบโดยใช้ flexbox โดยตั้งค่า flex-direction ให้เป็น row-reverse ใช้ Link แทนโลโก้เพราะผมไม่สามารถหาโลโก้ที่เหมาะสมได้ (ผมพิสูจน์ความรู้ความเข้าใจการใช้ Image component ไปแล้วในส่วนของ Card) จากนั้นก็จัดการ routing และตกแต่งจัดวาง layout โดยอาศัยความสามารถของ Tailwind CSS ตามความเหมาะสม

### 5. Assignment 05

ในการบ้านครั้งนี้ ผมไม่ค่อยได้ใช้ component สำเร็จรูปจาก Tailwind UI สักเท่าไหร่ แต่ผมจะเลือกหยิบใช้คลาสบางตัวที่มีประโยชน์และหาเจอได้อย่างอย่าง outline

ส่วนการใช้ DatePicker จาก MUI X นั้น เป็นไปได้ด้วยดีครับ

### 6. Assignment 06

การบ้านครั้งนี้ ผมค่อนข้างเหนื่อยเลยครับ การใช้ useReducer Hook เป็นอะไรที่ใหม่และซับซ้อนมาก แต่ก็สนุกมากเช่นกัน สิ่งหนึ่งที่ผมไม่ชอบเกี่ยวกับการบ้านครั้งนี้คือการใช้ Map ครับ ในตัวอย่าง อาจารย์ใช้ map() ซึ่งเป็นฟังก์ชันของ Array ที่จะ map และคืนค่า array กลับมา แต่ในการบ้านกลับใช้ Map มันทำให้ผมสับสนมาก ๆ ครับ

แต่ถึงอย่างนั้น มันก็คุ้มค่าครับ

### 7. Assignment 07

ในการบ้านครั้งนี้ ผมรู้สึกสนุกกับการทำ Group Routing, Dynamic Routing มาก เป็นเรื่องที่ผมมองว่าน่าสนใจและดูเจ๋งมาก เป็นอีกบทหนึ่งที่เรียนสนุกครับ

(ผมส่งการบ้านครั้งนี้ช้า เนื่องจากเข้าใจผิด)

### 8. Assignment 08

ผมรู้สึกสนุกกับการทำการบ้านครั้งนี้มาก ผมรู้สึกว่าการจัดการกับ Event ที่เกิดขึ้นบนฝั่ง client เป็นเรื่องที่น่าสนใจ และมีหลายสิ่งหลายอย่างที่ไม่ถูกเขียนไว้ตรง ๆ แต่รอให้ศึกษาเพิ่มเติม เห็นได้ชัดจากการที่ video element เก็บ state เวลาไว้ในตัวมันเอง ไม่ว่าจะ render ครั้งไหน ๆ หากเราไม่ทำ full reload เวลาก็จะยังคงอยู่เหมือนเดิม (ทำให้การ play/pause เป็นไปอย่างราบรื่นด้วย)

(ผมส่งการบ้านครั้งนี้ช้า เนื่องจากเข้าใจผิด)

### 9. Assignment 09

การบ้านครั้งที่เก้านี้เป็นการบ้านที่สนุกมากครับ ผมได้เรียนรู้อะไรใหม่เยอะมากเลย ส่วนที่ผมชอบที่สุดก็คงจะเป็นการเขียน Asynchronous ใน JavaScript

นอกจากนี้ ยังมีสิ่งที่ผมได้ทำเพิ่มเติมไปก็คือการเติม Type ให้กับ Promise บางตัว เพราะผมไม่ชอบเห็น error สีแดงครับ

***

## Assets

### Images

1. An image by [Diana Polekhina](https://unsplash.com/@diana_pole) from [Unsplash](https://unsplash.com)
![An image](public/images/vaccine_a.jpg)

2. รูปภาพที่ถูกเตรียมไว้สำหรับ Assignment

3. An image by [Mat Napo](https://unsplash.com/@matnapo) from [Unsplash](https://unsplash.com)
![An image](/public/images/vaccine_b.jpg)

4. An image by [National Cancer Institute](https://unsplash.com/@nci) from [Unsplash](https://unsplash.com)
![An image](/public/images/vaccine_c.jpg)

5. An image by [CDC](https://unsplash.com/@cdc) from [Unsplash](https://unsplash.com)
![An image](/public/images/vaccine_d.jpg)

### Videos

1. วิดีโอที่ถูกเตรียมไว้สำหรับ Assignment