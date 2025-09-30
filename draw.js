document.addEventListener("DOMContentLoaded", function () {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    // ตัวอย่างการวาดรูป
  ctx.fillStyle = "rgba(37, 188, 37, 0.82)";
    ctx.fillRect(0, canvas.height / 2, canvas.width, canvas.height / 2);

	ctx.fillStyle = "rgba(69, 98, 243, 0.86)";
    ctx.fillRect(0, 0, canvas.width, canvas.height / 2);

	 ctx.beginPath();
    // วาดภูเขาโค้งตรงกลาง
    ctx.arc(150, 300, 150, Math.PI, 0, false);

   ctx.strokeStyle = "rgba(187, 115, 14, 0.6)";
    ctx.lineWidth = 3;
	ctx.fillStyle = "rgba(66, 153, 16, 0.87)";
    ctx.fill();
    ctx.stroke();
	 ctx.beginPath();
    // วาดภูเขาโค้งตรงกลาง
    ctx.arc(300, 300, 150, Math.PI, 0, false);

       ctx.strokeStyle = "rgba(187, 115, 14, 0.6)";
    ctx.lineWidth = 3;
	ctx.fillStyle = "rgba(66, 153, 16, 0.87)";
    ctx.fill();
    ctx.stroke();
	 ctx.beginPath();
    // วาดภูเขาโค้งตรงกลาง
    ctx.arc(500, 300, 150, Math.PI, 0, false);

       ctx.strokeStyle = "rgba(187, 115, 14, 0.6)";
    ctx.lineWidth = 3;
	ctx.fillStyle = "rgba(66, 153, 16, 0.87)";
    ctx.fill();
    ctx.stroke();
	 ctx.beginPath();
    // วาดภูเขาโค้งตรงกลาง
    ctx.arc(700, 300, 150, Math.PI, 0, false);

    ctx.strokeStyle = "rgba(187, 115, 14, 0.6)";
    ctx.lineWidth = 3;
	ctx.fillStyle = "rgba(66, 153, 16, 0.87)";
    ctx.fill();
    ctx.stroke();
	
	ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.arc(700, 50, 50, 0, Math.PI * 2); // วาดวงกลม
	ctx.fillStyle = "rgba(249, 122, 38, 1)"; // กำหนดสีเติมสำหรับวงกลม
	ctx.fill(); // เติมสีวงกลม
	ctx.strokeStyle = "rgba(248, 236, 1, 0.98)"; // กำหนดสีเส้นขอบสำหรับวงกลม
	ctx.stroke(); // วาดเส้นขอบวงกลม

	   // กำหนดสีเติม

const rectWidth = 100;
const rectHeight = 300;

let posX = 200; // ปรับค่าที่นี่เพื่อเปลี่ยนตำแหน่งแนวนอน
let posY = 300; // ปรับค่าที่นี่เพื่อเปลี่ยนตำแหน่งแนวตั้ง


// วาดสี่เหลี่ยมสีน้ำตาลเข้มแบบโปร่งเล็กน้อย
ctx.fillStyle = "rgba(11, 152, 253, 0.96)";
ctx.fillRect(posX, posY, rectWidth, rectHeight);

// วาดเส้นขอบสีแดงโปร่ง
ctx.strokeStyle = "rgba(7, 109, 233, 0.82)";
ctx.lineWidth = 3;
ctx.strokeRect(posX, posY, rectWidth, rectHeight);

ctx.strokeStyle = "green";
ctx.lineWidth = 1;

// วาดหญ้าหลายใบ
for (let i = 0; i < 500; i++) {
    let x = 300 + i * 2;       // ตำแหน่งแนวนอน
    let y = 600;               // จุดเริ่มด้านล่าง
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 20 - Math.random() * 5); // ความสูงสุ่ม
    ctx.stroke();
}
// วาดหญ้าหลายใบ
for (let i = 0; i <100; i++) {
    let x = 0 + i *2;       // ตำแหน่งแนวนอน
    let y = 600;               // จุดเริ่มด้านล่าง
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x, y - 20 - Math.random() * 5); // ความสูงสุ่ม
    ctx.stroke();
}
// วาดสี่เหลี่ยมสีน้ำตาลเข้มแบบโปร่งเล็กน้อย
ctx.fillStyle = "rgba(154, 84, 8, 0.8)";
ctx.fillRect(500,450, 250,100);

// วาดเส้นขอบสีแดงโปร่ง
ctx.strokeStyle = "rgba(105, 65, 0, 0.82)";
ctx.lineWidth = 3;
ctx.strokeRect(500, 450, 250, 100);
ctx.lineWidth = 1;

// วาดสี่เหลี่ยมสีน้ำตาลเข้มแบบโปร่งเล็กน้อย
ctx.fillStyle = "rgba(233, 180, 95, 1)";
ctx.fillRect(550,480,50,70);

// วาดเส้นขอบสีแดงโปร่ง
ctx.strokeStyle = "rgba(105, 65, 0, 0.82)";
ctx.lineWidth = 3;
ctx.strokeRect(550, 480,50,70);
ctx.lineWidth = 1;

// วาดสี่เหลี่ยมสีน้ำตาลเข้มแบบโปร่งเล็กน้อย
ctx.fillStyle = "rgba(247, 236, 219, 0.99)";
ctx.fillRect(630,480,50,40);

// วาดเส้นขอบสีแดงโปร่ง
ctx.strokeStyle = "rgba(105, 65, 0, 0.82)";
ctx.lineWidth = 3;
ctx.strokeRect(630, 480,50,40);
ctx.lineWidth = 1;

ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.arc(590,520,5,0, Math.PI * 2); // วาดวงกลม
	ctx.fillStyle = "rgba(130, 61, 16, 1)"; // กำหนดสีเติมสำหรับวงกลม
	ctx.fill(); // เติมสีวงกลม
	ctx.strokeStyle = "rgba(248, 236, 1, 0.98)"; // กำหนดสีเส้นขอบสำหรับวงกลม
	ctx.stroke(); // วาดเส้นขอบวงกลม

// วาดรูปหลายเหลี่ยม
ctx.beginPath();            // เริ่มเส้นทางใหม่
ctx.moveTo(610, 350);      // จุดยอดบน
ctx.lineTo(500, 450);      // จุดขวาล่าง
ctx.lineTo(750, 450);      // จุดซ้ายล่าง
ctx.closePath();            // ปิดเส้นทาง (เชื่อมกลับจุดเริ่มต้น)
ctx.fillStyle = "rgba(255, 53, 53, 1)"; // สีเติม
ctx.fill();                 // เติมสี
ctx.strokeStyle = "rgba(3, 20, 15, 1)"
ctx.lineWidth = 2;
ctx.stroke();               // วาดเส้นขอบ

ctx.beginPath();            // เริ่มเส้นทางใหม่
ctx.moveTo(550,40);      // จุดยอดบน
ctx.lineTo(500,58);      // จุดขวาล่าง
ctx.lineTo(500,24);      // จุดซ้ายล่าง              
ctx.strokeStyle = "rgba(3, 20, 15, 1)"
ctx.lineWidth = 2;
ctx.stroke();               // วาดเส้นขอบ

ctx.beginPath();            // เริ่มเส้นทางใหม่
ctx.moveTo(600,45);      // จุดยอดบน
ctx.lineTo(570,58);      // จุดขวาล่าง
ctx.lineTo(570,28);      // จุดซ้ายล่าง              
ctx.strokeStyle = "rgba(3, 20, 15, 1)"
ctx.lineWidth = 2;
ctx.stroke();               // วาดเส้นขอบ


// วาดสี่เหลี่ยมสีน้ำตาลเข้มแบบโปร่งเล็กน้อย
ctx.fillStyle = "rgba(117, 74, 0, 0.96)";
ctx.fillRect(400,480,30,100);

// วาดเส้นขอบสีแดงโปร่ง
ctx.strokeStyle = "rgba(46, 29, 2, 0.82)";
ctx.lineWidth = 3;
ctx.strokeRect(400, 480,30,100);
ctx.lineWidth = 1;

ctx.beginPath(); // เริ่มเส้นทางใหม่
	ctx.arc(410,440,50,0, Math.PI * 2); // วาดวงกลม
	ctx.fillStyle = "rgba(47, 183, 6, 0.76)"; // กำหนดสีเติมสำหรับวงกลม
	ctx.fill(); // เติมสีวงกลม
	ctx.strokeStyle = "rgba(13, 109, 0, 0.98)"; // กำหนดสีเส้นขอบสำหรับวงกลม
	ctx.stroke(); // วาดเส้นขอบวงกลม

});
