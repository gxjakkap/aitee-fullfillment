const getFoodName = () => {
    const foodList = ["ข้าวผัดอเมริกัน", "ข้าวผัดหมู", "ข้าวผัดไก่", "ข้าวผัดกุ้ง", "ข้าวผัดทะเล", "ข้าวผัดรวมมิตร", "ข้าวผัดไข่", "ข้าวผัดกระเทียม", "ข้าวผัดกะเพราหมู", "ข้าวผัดกะเพราไก่", "ข้าวผัดกะเพราหมูกรอบ", "ข้าวผัดกะเพราหมูสับ", "ข้าวผัดกะเพรากุ้ง", "ข้าวผัดกะเพราหมึก", "ข้าวผัดกะเพราทะเล", "ข้าวผัดกะเพรารวมมิตร", "ข้าวไข่ดาว", "ข้าวไข่เจียว", "ข้าวไข่เจียวหมูสับ", "ข้าวไข่เจียวไก่สับ", "ข้าวไข่เจียวกุ้งสับ", "ข้าวไข่เจียวทะเล", "ข้าวไข่ข้น", "ข้าวไข่ข้นแฮม", "ข้าวไข่ข้นกุ้ง", "ข้าวไข่ข้นทะเล", "ข้าวไข่ตุ๋นหมูสับ", "ข้าวไข่ตุ๋นไก่สับ", "ข้าวไข่ตุ๋นกุ้งสับ", "ข้าวไข่ตุ๋นทะเล", "สุกี้แห้งหมู", "สุกี้แห้งไก่", "สุกี้แห้งไก่", "สุกี้แห้งทะเล", "สุกี้น้ำหมู", "สุกี้น้ำไก่", "สุกี้น้ำทะเล", "ข้าวผัดคะน้าหมูกรอบ", "ข้าวผัดเครื่องแกงหมู", "ข้าวผัดเครื่องแกงไก่", "ข้าวผัดเครื่องแกงทะเล", "ข้าวผัดเครื่องแกงรวมมิตร", "ข้าวผัดรถไฟ", "ผัดไทกุ้งสด", "ผัดหมี่โคราช", "ผัดซีอิ๊วหมู", "ผัดซีอิ๊วไก่", "ผัดซีอิ๊วทะเล", "ผัดซีอิ๊วรวมมิตร", "ราดหน้าหมู", "ราดหน้าไก่", "ราดหน้าทะเล", "ราดหน้ารวมมิตร", "ราดหน้าหมี่กรอบ", "ข้าวไก่เกาหลี", "ข้าวหมูเกาหลี", "ข้าวเนื้อเกาหลี", "ขนมจีนน้ำยาใต้", "ขนมจีนน้ำยากะทิ", "ขนมจีนน้ำยาปู", "ขนมจีนน้ำเงี้ยว", "ขนมจีนน้ำยาป่า", "ขนมจีนแกงเขียวหวาน", "ขนมจีนแกงไตปลา", "ข้าวไก่ทอดน้ำปลา", "ข้าวไก่ทอดกระเทียม", "ข้าวไก่ทอดซอสครีมมะนาว", "ข้าวไก่ทอดปาปิก้า", "ข้าวไก่แซ่บ", "ข้าวไก่เทอริยากิ", "ข้าวแกงกะหรี่ไก่", "ข้าวหมูทอดน้ำปลา", "ข้าวหมูทอดกระเทียม", "ข้าวหมูทอดซอสครีมมะนาว", "ข้าวหมูทอดปาปิก้า", "ข้าวหมูเทอริยากิ", "ข้าวแกงกะหรี่หมู", "ข้าวแกงกะหรี่เนื้อ", "ข้าวผัดผักบุ้งไฟแดง", "ต้มยำหมู", "ต้มยำไก่", "ต้มยำตีนไก่", "ต้มยำเครื่องในหมู", "ต้มยำกุ้งน้ำข้น", "ต้มยำกุ้งน้ำใส", "ต้มยำทะเล", "ต้มยำซี่โครงหมู", "ต้มยำรวมมิตร", "ยำวุ้นเส้น", "ยำมาม่า", "ยำหมูยอ", "ยำแซบม่อน", "ยำกุ้งเต้น", "ลาบหมู", "ลาบไก่", "ลาบทะเล", "ลาบเนื้อ", "น้ำตกหมู", "น้ำตกไก่", "ส้มตำไทย", "ส้มตำปูปลาร้า", "ส้มตำข้าวโพด", "ส้มตำไข่เค็ม", "ส้มตำไทยไข่เค็ม", "ส้มตำทอด", "ไก่ย่าง", "หมูย่าง", "เนื้อเสือร้องไห้", "ต้มแซ่บ", "ข้าวเหนียวมะม่วง", "ปลาดุกย่าง", "เมี่ยงปลาทับทิม", "เมี่ยงปลานิล", "ปลากะพงทอดน้ำปลา", "ปลากะพงนึ่งมะนาว", "หมูมะนาว", "ไส้อั่ว", "ไส้อ่อนทอดกระเทียม", "ต้มพะโล้หมู", "ต้มพะโล้ไก่", "แกงจืดหมูก้อน", "แกงจืดไก่ก้อน", "แกงจืดมะระยัดไส้หมู", "แกงจืดมะระยัดไส้ไก่", "ก๋วยเตี๋ยวหมูน้ำใส", "ก๋วยเตี๋ยวไก่น้ำใส", "ก๋วยเตี๋ยวเนื้อน้ำใส", "ก๋วยเตี๋ยวหมูน้ำข้น", "ก๋วยเตี๋ยวไก่น้ำข้น", "ก๋วยเตี๋ยวเนื้อน้ำข้น", "ก๋วยเตี๋ยวหมูน้ำตก", "ก๋วยเตี๋ยวไก่น้ำตก", "ก๋วยเตี๋ยวเนื้อน้ำตก", "ก๋วยเตี๋ยวเรือหมู", "ก๋วยเตี๋ยวเรือไก่", "ก๋วยเตี๋ยวเรือเนื้อ", "ก๋วยเตี๋ยวไก่ตุ๋น", "ก๋วยเตี๋ยวหมูตุ๋น", "ก๋วยเตี๋ยวเนื้อตุ๋น", "ก๋วยเตี๋ยวเย็นตาโฟ", "ก๋วยจั๊บหมู", "ก๋วยจั๊บไก่", "สปาเกตตีคาโบนาร่า", "สปาเกตตีผัดขี้เมา", "สปาเกตตีซอสมะเขือเทศ", "ข้าวมันไก่", "ข้าวหมูแดง", "ข้าวหมูกรอบ", "ข้าวมันไก่ทอด", "ข้าวขาหมู", "ข้าวรวม", "ข้าวซอย", "ข้าวคลุกกะปิ", "ข้าวยำ", "ข้าวพะแนงไก่", "ข้าวพะแนงหมู", "สเต็กหมูคุโรบูตะ", "สเต็กหมู ", "สเต็กไก่", "สเต็กปลา", "สเต็กเนื้อ", "แซลม่อนย่างเกลือ", "หมูอบน้ำผึ้ง", "ปูผัดผงกะหรี่", "ยำไข่เยี่ยวม้า", "กุ้งเผา", "กุ้งแช่น้ำปลา", "แซลม่อนดองน้ำปลา", "ปูไข่ดอง", "ข้าวห่อไข่", "ซุปเห็ดทรัฟเฟิล", "ซุปข้าวโพด", "แคปหมูน้ำพริกหนุ่ม", "ซุปหางวัว", "จี้นตุ๊บ", "แหนมหมู", "แหนมไก่", "แหนมเนื้อ", "ปลาหมึกยัดไส้", "ผัดเปรี้ยวหวานหมู", "ผัดเปรี้ยวหวานไก่", "ผัดเปรี้ยวหวานทะเล", "แกงมัสมั่นไก่", "แกงมัสมั่นเนื้อ", "ยำใหญ่", "ไก่โสร่ง", "หมูโสร่ง", "กุ้งโสร่ง", "ข้าวยำไก่แซ่บ", "เต้าหู้ทอด", "เต้าหู้ทรงเครื่อง", "ต้มข่าไก่", "เฟรนด์ฟรายด์", "ซุปหัวหอม", "เบอร์เกอร์หมู", "เบอร์เกอร์ไก่", "เบอร์เกอร์เนื้อ", "เบอร์เกอร์ปลา", "ลาซานย่า", "พิซซ่าหน้าฮาวาเฮี้ยน", "พิซซ่าหน้าซีฟู้ด", "พิซซ่าหน้าบาร์บีคิว", "ชาบู", "หมูกระทะ", "บิบิมบับ", "ข้าวผัดกิมจิ", "ซุปกิมจิ", "คิมบับ", "ไก่ทอดซอสเกาหลี", "ต๊อกบกกี", "ข้าวปลาแกะ", "ซุปหัวหอม", "กุ้งอบชีส", "ผักโขมอบชีส", "สปาเกตตี้กุ้งซอสไวน์ขาว", "แซนด์วิชแฮมชีส", "ขนมปังไส้กรอก", "ขนมจีบหมู", "ขนมจีบกุ้ง", "ขนมจีบปู", "ซาลาเปาไส้หมูแดง", "ซาลาเปาไส้หวาน", "ซาลาเปาไส้ครีม", "ซาลาเปาไส้หมูสับ", "ตำไหลบัวกุ้งสด", "ตำไหลบัวแซลม่อน", "ตำไหลบัวหมูยอ", "ตำไหลบัวไข่เค็ม", "ตำไหลบัวไข่เค็ม", "ซุปหน่อไม้", "เกี๊ยวทอด", "ซาลาเปาทอด", "เกี๊ยวซ่า", "ราเมง", "หมูทงคัตสึ", "ราเมงต้มยำ", "ซูชิหน้าแซลม่อน", "ซูชิหน้าไข่กุ้ง", "ซูชิไข่หวาน", "เทมปุระ", "ซุปมิโซะ", "ข้าวหน้าปลาไหล", "ซาชิมิ", "อูนิ", "โอโทโร่", "ต้มเลือดหมู", "ซอยจุ๊", "ก้อยเลือด", "แกงไข่ผำ", "ลาบเทา", "ยำหอยเชอรี่", "แกงหอยขม", "ทาโก้", "ทาโกะยากิ", "โอนิกิริ", "นาโช่", "ปูรีโต้", "เบค่อนรมควัน", "ไส้กรอกรมควัน", "วอฟเฟิลไก่ทอด", "ไก่งวงอบน้ำผึ้ง", "มันเผา", "เคบับ", "กุ้งอบวุ้น", "เส้น", "กุ้งผัดพริกเกลือ", "กั้งย่างเกลือ", "ข้าวหน้าวากิวเอ5", "ปลาสามรส", "ปลาทอดสมุนไพร", "ข้าวหน้าไข่อิกุระ"]
    const x = Math.floor(Math.random() * foodList.length)

    return foodList[x]
}

const getDrinksName = () => {
    const drinksList = ['Long Island Iced Tea', 'น้ำผลไม้', 'น้ำส้ม', 'น้ำมะนาว', 'น้ำแอปเปิ้ล', 'น้ำมะม่วง', 'น้ำมะตูม', 'น้ำบ๊วย', 'น้ำเก๊กฮวย', 'น้ำมะขาม', 'น้ำมะเขือเทศ', 'น้ำกระเจี๊ยบ', 'น้ำองุ่น', 'น้ำผลไม้ปั่น', 'น้ำผลไม้คั้น', 'ฟรัพเพ', 'ม็อคเทล', 'กาแฟ', 'กาแฟเย็น', 'กาแฟร้อน', 'กาแฟม็อคค่า ', 'กาแฟอเมริกาโน่ ', 'กาแฟดำ ', 'กาแฟคาปูชิโน่ ', 'กาแฟลาเต้', 'กาแฟมัคคิอาโต้ ', 'กาแฟไร้คาเฟอีน', 'ช็อคโกแลตเย็น', 'ช็อคโกแลตร้อน', 'โกโก้', 'ชาเย็น', 'ชาร้อน', 'ชาดำ (แบบชาจีน) ', 'ชาเขียว', 'ชาผลไม้', 'ชาสมุนไพร ', 'น้ำอัดลม', 'น้ำอัดลม', 'โซดา', 'โค้ก', 'น้ำเปล่า', 'น้ำแร่', 'นม', 'นมปั่น', 'เหล้า', 'เบียร์', 'ไวน์', 'ค็อกเทล', 'น้ำผลไม้ผสม ', 'บรั่นดี', 'เหล้า', 'วิสกี้ ', 'เหล้ากลั่น', 'เตกีล่า', 'เหล้ามาร์ตินี่', 'เหล้าองุ่นขาวซึ่งมีกลิ่นหอม', 'เหล้าวอดกา', 'เหล้ารัสเซีย', 'น้ำโทนิค ', 'ชานม', 'ชาเย็น', 'ชาเขียว', 'โกโก้', 'นมชมพู', 'แดงมะนาวโซดา', 'ชามะนาว', 'บลูฮาวาย', 'Blue margarita', 'Mojito', 'Singapore sling', 'Pink lady', 'Old fashioned', 'Dry martini', 'Negroni', 'ลาเต้', 'อเมริกาโน่', 'มอคค่า', 'เอสเปรสโซ่', 'ดอปปิโอ', 'คาปูชิโน่', 'มัคคิอาโต้', 'สตรอว์เบอรี่', 'ลาเต้', 'โยเกิร์ตปั่น', 'สตรอว์เบอร์รี่ปั่น', 'บลูเบอร์รี่ปั่น', 'โยเกิร์ตปีโป้ปั่น', 'บลูเบอร์รี่โซดา', 'กีวีโซดา', 'น้ำส้ม', 'มะนาวโซดา', 'อัญชัญ', 'มะนาว', 'โคล่า', 'สไปร์ท', 'ชากุหลาบ', 'ชาพีช', 'ชาดำ', 'ชาแอปเปิล', 'โอวัลตินภูเขาไฟ', 'คาราเมลนมสด', 'แดงโซดา', 'เขียวโซดา', 'ปีโป้นมสด', 'นมสดโอวัลติน', 'น้ำผึ้งมะนาวโซดา', 'แอปเปิ้ลเขียวโซดา', 'ช็อคโกแลต', 'นมสดบราวน์ชูก้า', 'โอริโอ้นมสดปั่น', 'นมน้ำผึ้ง', 'นมสดอัลมอนด์', 'แตงโมปั่น']
    const x = Math.floor(Math.random() * drinksList.length)

    return drinksList[x]
}

const getSongsLink = () => {
    const songList = ['q5nAxoCIvy4', '6f5sozKp0R0', 'H5cfhMe3SuY', 'rPzC1o8E4t0', 'iRqptvgqQPo', '21E3MNWz5m4', '10LhhygC_SA', 'fInw31Xf488', 'kds-99H7ek0', 'H5v3kku4y6Q', 'mW92wLzwGhM', '4HLumkaPcCI', '8i_uPqIFlY8', 'DJ-t5-CRSZY', '4xvSFYbVa0U', 'ks7p6DA0dKk', 'JBAuRoIRAs8', '3O_Hxdtoyac', 'V69g4fo8oZ0', 'DxDSqoXT_SM', 'aHdtoDZlUKA', 'S3x2KC5DXf0', 'xPJJLvMUyfs', '3qy4JOWxkZ0', 'VVs5UHgafv8', 'ywtN9eWJRmE', 'eXqDjhI9W6U', 'AH7A9hBntE4', '-F1G2vgta6o', 'muLqukEiVm4', 'IMUxZVb50Rc', 'cM9SCz4pNQ4', 'W8a4sUabCUo', 'vv3um0BlygY', 'FTA0jyo_GoY', '5xYlc4OBnPg', 'zxND-svLcZ8', 'OG0lTKDNKUk', '5wunh46uVKY', 'dJ9uVVNWClk', 'fBZfrZadyNM', 'P2y-C4sQfCc', 'yOwwa4wjuJ0', '0msD8eJyRo0', 'u1rE-v-KpFY', 'H5cfhMe3SuY', 'UZxDLz-li_c', 'CMbYwYYFI3Y', 'lFD2eid8Ugw', 'BcUg0XKT3sI', 'j367e7BiEyU', 'g8z3rLjmFUc', 'pSUydWEqKwE', 'sVTy_wmn5SU', 'TArooQFjuNc', 'YJ3KDs33ItI', 'L0YF-qzCyJc', 'KzElkEA95ss', 'TKL8Sq14MiQ', '3h5tRt5eJjM', 'qUB81bn-GjQ']
    const x = Math.floor(Math.random() * songList.length)

    return `https://youtu.be/${songList[x]}`
}

const getSongs = (intentName) => {

    if (!data[intentName]){
        const songList = ['q5nAxoCIvy4', '6f5sozKp0R0', 'H5cfhMe3SuY', 'rPzC1o8E4t0', 'iRqptvgqQPo', '21E3MNWz5m4', '10LhhygC_SA', 'fInw31Xf488', 'kds-99H7ek0', 'H5v3kku4y6Q', 'mW92wLzwGhM', '4HLumkaPcCI', '8i_uPqIFlY8', 'DJ-t5-CRSZY', '4xvSFYbVa0U', 'ks7p6DA0dKk', 'JBAuRoIRAs8', '3O_Hxdtoyac', 'V69g4fo8oZ0', 'DxDSqoXT_SM', 'aHdtoDZlUKA', 'S3x2KC5DXf0', 'xPJJLvMUyfs', '3qy4JOWxkZ0', 'VVs5UHgafv8', 'ywtN9eWJRmE', 'eXqDjhI9W6U', 'AH7A9hBntE4', '-F1G2vgta6o', 'muLqukEiVm4', 'IMUxZVb50Rc', 'cM9SCz4pNQ4', 'W8a4sUabCUo', 'vv3um0BlygY', 'FTA0jyo_GoY', '5xYlc4OBnPg', 'zxND-svLcZ8', 'OG0lTKDNKUk', '5wunh46uVKY', 'dJ9uVVNWClk', 'fBZfrZadyNM', 'P2y-C4sQfCc', 'yOwwa4wjuJ0', '0msD8eJyRo0', 'u1rE-v-KpFY', 'H5cfhMe3SuY', 'UZxDLz-li_c', 'CMbYwYYFI3Y', 'lFD2eid8Ugw', 'BcUg0XKT3sI', 'j367e7BiEyU', 'g8z3rLjmFUc', 'pSUydWEqKwE', 'sVTy_wmn5SU', 'TArooQFjuNc', 'YJ3KDs33ItI', 'L0YF-qzCyJc', 'KzElkEA95ss', 'TKL8Sq14MiQ', '3h5tRt5eJjM', 'qUB81bn-GjQ']
        const x = Math.floor(Math.random() * songList.length)

        return `https://youtu.be/${songList[x]}`
    }

    const data = {
        popgenrewtl: ['-VeAUgO8Wtg', 'YjSPnhLy5N0', 'XqQMisU5En8', 'ENqhZpQ302c', 'q5nAxoCIvy4', 'DjWSpqDp8Eo', 'SJNFhQ1gdLo', 'u1rE-v-KpFY', 'AH7A9hBntE4', 'iRqptvgqQPo', 'LZWKYShMsus', '6f5sozKp0R0', 'fInw31Xf488', 'rPzC1o8E4t0', 'L5SSKx7H-gA', 's8QzkOulL5w', 'D-aCb9xsqTE', 'IkxhsTwNybU', 'NvBHCtMb5u8', 'guCCAF-fkNI', 'eXqDjhI9W6U', 'RzttASVRHAI', 'wizfyujwvfw', '5xYlc4OBnPg', 'aVKJrJbHUV0', 'xXUFl-hDG2g', 'zEt0-5fgy6I', 'B7riGDoRpR8', 'GMFdfDlmETE', 'FHGTJeskLYE', 'KsgDFv2c5gI', '8o_RAoWXJY'],
        rockgenrewtl: ['q3bWhsg9HH8', 'H5cfhMe3SuY', 'ZwcmNkzm7m0', 'I9TCLKlMzpc', 'ywtN9eWJRmE', 'JBAuRoIRAs8', 'XTWJFGF-Ev4', 'Cuoop11CL74', 'VNIE3VX1KeA', 'Wk2BPFVzvlQ', '8k6C_3Q4S1o', 'Whu6oBYdYvk', 'lfraUZsVfqk', 'bAQw8ZS_0kg', 'CMbYwYYFI3Y', '9Vp_5L0BOTg', 'UZxDLz-li_c', 'cg93Z3si7iA', '9pZ37Rsblyk', 'DkKr8fGIrCM', 'mJ55QUb_dvA', '2fv0qKJXZVQ', 'B9mgd2QIIgU', 'nIVOFq3Xyzs', 'eO8bQOqUU54', 'dXf3sWxIhfY', '6RF1Zz5xcNg', 'cqQAzpZBpAw', '1MQk_2_JBBY', 'UmeE7qc5MMc', 'Y9nSm9WaEdc', 'Cim5eyLZaiY'],
        rnbgenrewtl: ['FvOpPeKSf_4', 'gbPBskTsI7E', 'Lxeq3_uWib8', 'E6TWhzCwvYo', '2-KIxNNrJwc', '3basVsq1VnY', 'eRH_v2o1a9w', '-gg5ns2fd4U', 'MSRcC626prw', 'hYF0uUEcCy0', 'ybdz-nTVHrk', 'FFkLoUwQ9a4', 'aMyO6GNkfpo', 'Qmt9Bzrf29k', 'kl_yYuZ7vcc', 'a1rxl9SIMNI', 'HVi5kQjyUVQ', 'iwyAxyE2Ajg', 'ntqjNK_shw8', 'nja_0BaQcNg', 'adLGHcj_fmA', 'QLCpqdqeoII', 'Lt315PJvY9o', 'mKy2LUvdE5w', 'PALMMqZLAQk', 'OXtZfPZIex4', 'coaMyxxEm5w'],
        altindiegenrewtl: ['NtgCUNQrwnU, DJ-t5-CRSZY, IrfvvTe9nKk, BU5SWC4OpRk, CCxlsWFH3Nc, 9j4qcYXfIJg, DEsYOTzM4IU, dPw5yJ5Goqw, p5CsJurJ5Lo, CLjPAiYIYZA, HCxkE41TWpw, 3uyZ5g-0CwM, 8i_uPqIFlY8, gqTAu8LAlsg, cR2mX12WrfU, RLQVlxYoTGE, dW9qosHmO10, NTD_SfZzHUs, cNMawSwWn5Y, ioY7YyORYS4, 1oCxCAsw-8g, OGZDyxtl8LA, M20mlHihUHk, eIKncbPvPx8, G4dyN9yZgOE, dJ9uVVNWClk, HIKX2xkXMdg, zoS5h7oerPY, 573BdVZDNKA, X7dlHE1xESQ, ITggPfe9hyA, A01rCGwLiHc, 08owq42Q2uM, W28LV238Wao, hWWMxBbOU-I, nFEH4-hR3V0, NKIMsZUSCcA, SUoZiDqK_9o, 6f5sozKp0R0, 8GEoXqGeXtk, JkQldf0nWng, fKRwXlB-fDM, BjBXoSX5aQI, KWhIaytWsms, QBD6wXa_0gQ, BpJMI-biOFI, U7mQtx4lf4s, OcnZuLPA5L8, 9iBRviiaWOE, ZqCazU5fvsU, 2cH47_nTJQ4, IklOuUh6Z1Q, 8-4zZpEw020, _m8fL9eCTZI, 1AqQDVkm280, uZilgncPk9s, sJCihD6-9Fg, 5A5lnXL9s3c, G-FkirF5QVw, 0ymSbyvPPaI, KVX3zVYgAS4, omeX6xiPtPI, J_DGrkDX4hY, xfz6ygnKodE, ksHssBeEUUs, GmNVYZQgIEQ, KqpAxzbUWdU, gO9455ISEo4, 42qfoGfHBmE, mZNEjU_n8xs, j1DLKT1bksU, Lzw4IuqZHJ4, n0-LYfiVGOE, Tnl-HCEA7sc, dytvU-Z-H1k, akV5HKtc_TM, h2VIUdst5y4, gOnOMTyi89w, ebEZ5I2Wmgw, i5wNSYo6nxM, oXnhIbz3hz0, ZdKxeKqXb5g, VMlp07MYU7o, 0T4mlXVSoWQ, VaguhHZD_LQ, rq9UXpw7IJE, trlOKllgLg0, alLLkLYmsig, WeszpwtcSe0, dFphAeuU1x4, aHYiO8Y5H3Y, tXGoj10MZVM, 5JPGMJjioqs, IUGRu6N80bc, -gYlelurNVk, pfaL7T4mlaE, 0jzr501QApk, pLiWDf9HGMI, y5CqrnRD_g8, DNIDBbjqFCo, PFRJvHXaNBk, UweO1ICBR9o, P2MAkyG5LXw, qOjlSEkUilc, b78niM5zBQ0, g0G4iBxm3As, -gYlelurNVk, 5b9TdbvvR-g, bmDkAvL6HPo, j1emWxdxXBc, T3miH0PzBf8, W3V1KfbvEz8, E9tmr7lPWnc, UyOmaTdxtOo, KvLXyTPmN84, DQB5O0BUAsI, 9Cb872pCbMs, C1wKQUFuzng, Z6x63Q1UvVM, Kt-tLuszKBA, 8kpgR77pzn0, FwZvuV79jeY, Vg7PNyCt8mg, 1AyWoI2e7FM, CLeZyIID9Bo, G7KNmW9a75Y, uYJKQHd7MhA, mjrdywp5nyE, ZKynmFKCsJc, fGn_ikKMdIk, tfdj8s8a47M, 1zBxl7iNZuM, b8ffwn_cwqI, 0go2nfVXFgA, 4N6q7egoVgM, ZbPir0si4so, TKL8Sq14MiQ, IMUxZVb50Rc, XYAJ6SWJBiY, UsdW4PA7HuQ, vVdDs54DFMw, fMd5yadqznk, J4NEmO_sjew, BalgC4iXpO8, q9gxA6Tw7OU, T_ZaVZ8CQKU, ucGmSOgIhdQ, kds-99H7ek0, OblL026SvD4'],
        thaisongwtl: ['q5nAxoCIvy4', 'q0Uta5ODVGg', '6f5sozKp0R0', 'H5cfhMe3SuY', 'rPzC1o8E4t0', '-mEs2laCcxA', 'iRqptvgqQPo', '5qVgoL1rZlA', 'jthza-s_NEg', 'u1rE-v-KpFY', 'FTA0jyo_GoY', 'E_wrJhXm7jo', 'a0M_QUS3kC0', '-WZkw3GXx4w', '-ghaH5H1uak', '21E3MNWz5m4', 'ISsHnqkIpIs', 'Z4eLf7f6mqQ', 'CgkPUIOxpGw', 'FPOyxPIpzcU', 'bzpmJJcO47E', 'V6mXmFcA5P8', 'wNO6kMJB63I', 'L0YF-qzCyJc', 'jCPM-r10T28', 'nLOxOYUCkMM', 'AJEoJYgktb4', 'yOwwa4wjuJ0', 'n7XNd1zvH_8', 'guCCAF-fkNI', 'OLptmsaTnIg', 'U2b5i3EYPuU', 'XqQMisU5En8', 'NFXPALvjcL8', 'sXhTk7Pl9o0', 'vLuXN8-U75k', '9pZ37Rsblyk', 'cNGJ1bf8XUU', '5xYlc4OBnPg', 'AH7A9hBntE4', '5OtqLbG6T04', 'MXWHentnfxI', 'BX6hVQqgNCA', 'KE069_SR4EA', 'AZ_t9iAJRDw', 'Oo1m83WXZH4', 'L5SSKx7H-gA', '68uXgjGJg5c', 'NvBHCtMb5u8', 'TRrVrSznG7Y', 'RzttASVRHAI', 'eX0GuxhDBVA', 'Jaui34_KH5Y', 'dJ9uVVNWClk', 'jrgpLYx69ZE', 'mEj2v4rNXJw', 'J8cbl4XmbQQ', 'D-aCb9xsqTE', '9nDjgusMmCY', '0XQofKpqBnE', '0lcqNa93TFU', 'JBAuRoIRAs8', 'ypuzo5V2gQI', 'vjZWJcQ27n0', 'E0IfcXBxyic', 'Xh89WD3CBEU', 'PSEcZas-QZg', 'oPnjEiwH0Vk', 'EmUFMfhYLbs'],
        sadsongwtl: ['EslLei7vVH8', 'P2MAkyG5LXw', 'VO3OPBkjXwQ', 'RLQVlxYoTGE', 'T83YHc89hSI', 'pq4ID3_VL7I', '1SnQQp5S1S0', '-BUPLrBauNQ', 'tMTjj0QHLBI', '4g-lKrpDY9Q', 'A01rCGwLiHc', 'Kkij6nEs2XM', 'p5MspDHojPI', '-mEs2laCcxA', 'hk9Eug4S5fM', 'mVT1SNc_t2Q', 'P2y-C4sQfCc', 'FAHC1vbsr5w', 'tUuqWFExZgY', 'jY-OULI8iHE', 'agPF9Eptt1s', 'nBBIuLUYa_w', 'ks7p6DA0dKk', 'Ejj2t6tJfEU', 'SLNMlSP2Rqk', 'OuUNVTQTbvM', '3O_Hxdtoyac', '1HJzCHafK2w', 'CJ81rDzW3ms', '4jGjbsjefgs', 'J5_oYvthjgA', '5xYlc4OBnPg', 'Rq7pU0mk_ms', 'ksX5GvUB418', 'WNAlskoOfFA', 'ksHssBeEUUs', 'Z6YgwPLSzIE', 'rPzC1o8E4t0', 'c2Cca1uihcU', 'PkzWnmchPIY', 'xRcw5ScUG0I', 'ZFYaCLo2tRg', 'H5cfhMe3SuY', 'ki3d6MjqM7c', 'pol3UYEtQEo', 'NtgCUNQrwnU', 'DJ-t5-CRSZY', 'c0sRLkEJmKs', 'Wii4DusZ6L8', 'WcX442Mb11s', '0mlWZcH8gs0', '_-sQSqou2ck', '1AqQDVkm280', 'AfeEOrQHBAo', 'kbXlgrwyaJM', 'sMUzfe6pTZM', 'sXhTk7Pl9o0', 'V6mXmFcA5P8', 'BwSnxnKP8Gg', 'ypOIS4Udae0', 'lEQXfcDUwfA', 'U0DaTW85aew', 'fvFSKD3eDlU', 'VgOzPNQ4-Qw', 'm4lNSIy_bUg', 'q8tGU5r6Ziw', 'nFEH4-hR3V0', 'h9W6FhK38GU', '7grezzVb-AU', 'LRlYM2J1lt4', 'T4uX6DqU_rw', 'qBLauIwUvZs', 'ChQX7DDVdbk', 'qUB81bn-GjQ', 'M20mlHihUHk', 'unaIDrb_sII', 'IvfVYLdGiXY', '4ptgVKcTYsE', '5ei8WL8ee8E', 'Iyy3YOpxL2k', 'bVS1LzxSALw', 'Vwa4DhDPXc4', 'IrfvvTe9nKk', 'PsYeZcyJqHQ', 'AKlSgAsCV0c', '38g_DzLk3qw', 'ZMsyYL5RK8E', 'dO_IDdszdYo', 'ZwcmNkzm7m0', 'rMrTHasf4uk', 'k0mmlY-K_J4', 'zpCxTeiaw1k', 'Nsr-OjuZfY4', 'sUVgKzzN9Zw', 'Tee3KnppVnk', 'lY__VKI0Vs8', 'fWq-zVYxFuY', '5yWE3zODVnA', '7JDwMOol-yw', 'du7paNLQN9M', '03XPXYKA4Ng', 'DBa18WvSpXc', 'ba7mB8oueCY', 'xVrNFaeMvP8', 'joN23n_e5hk', '4h26oYuE2h0', 'RHXdA-ZkEsw', 'UsDgg_dYaAI', 'ykRGStsDNgQ', 'pRFpjRJMUzc', 'RcnXyZQItJg', 'Ov_m2EbgxUs', 'sAf5zzY2EH8', 'SYSnjNei_Ms', 'FgTNmJKV2eA', 'KObJ3-EsbT8', 'EEocnHtllJ8', 'HOlHIBEL7XE', 'mZNEjU_n8xs', 'y9p2TXnNXnQ', 'LqYQIIg338g', '42qfoGfHBmE', 'eoQAnGx4Pss', 'gUqL6meIfdA', 'onnZ0Z9IFHE', '3rYL8AHJaTc', '-zU4Mj9dpUI', '1uk7176wJFk', 'RTK3kc16JLw', 'uLUvHUzd4UA', 'WpmYwDhxZoU', 'VvXVuWwAG90', 'uPD0QOGTmMI', 'W-w3WfgpcGg', 'I_QpDE-Uco0', '7tyEDx9tgBk', 'BU6wOvGkFH4', 'haO0W4k7Ch4', 'u0tG1ezKUpE', '8R6HoWBnb98', 'GLshspTLgvw', '3XSxqImKx2Y', 'RGVmhrfQqzg', 'e-mIa7bDnFs', 'gDmubAFyA2k', 'FP-ygTxtMz8', 'sEhvEO50-7w', 'mr6KS5s6quQ', 'MtFFz57qgp8', 'qWslbu3DhN0', '6GZf4kuHt7k', '_IIYIpB-Ii0', '9u14-QBPzSE', 'rf5pVEU_qoU', 'OmLNs6zQIHo', 'KpPLr0W_fEk', 'EX3LKJSSkNg', 'azn0noCjCRc', 'Wv2rLZmbPMA', '_qPMBWFa5o4', '6yXFGGPtG8E', 'UGHX4ZGPEgY', 'gbI-OKvxkqs', 'ayiodm4KSsI', 'D46cvfCW2xA', 'E9Htsu-gCqs', 'oam71AdogXs', 'dJMtC5lEd-E', '1juNF4vmUww', 'I9ZIq7ynvdU', 'f9ppNKO7WFQ', '61jjcnd884A', 'Vu08Ir6IdOo', 'lWFge60Pdbc', 'E6TWhzCwvYo', 'c9D8HuiUHR8', '3NnJYUDrFH4', 'gbah9C01fes', 'ZYwXHV5-x6w', 'qN4ooNx77u0', 'mXcWDKahepM', 'eP4eqhWc7sI', 'rJABBmAMXnY', 'v4UOiR5Cyzg', '3EL20VKlvbs', 'zFnvAbX96gM', '9F9-dtr7Rs0', 'smX6xCPDbrE', 'Wx6kSoQxWSY', 'pxAiwZlzSD8', 'O_8RYsyAkXY', 'qbqJs9BBghI', 'VjpBaiJlJ5I', 'BWXrTrmP2kM', 'Q3FQfBBJWeQ', 'P1g99XOn5VY', 'qnFcVpItds4', 'k73EBmeJ950', 'K3Qzzggn--s', 'sRJ4RywOPvA', 'v2wYgfKe_nk', 'J0oxFEX2fuQ', 'S0SKokKFkO4', 'u9_dhL7QVQc', 'Mw5mAozjC6M', 'GbbxkhtWX7g', 'vOFIxSQ2vi4', 'UHIeh8cTuDA', 'dQnObWp9q6E', 'nW-w4PKe1vU', 'nz-EfFuzi3s', 'lLsUYiE_d4A', 'fYMO8X4Q6Y4', 'iGVeFDyhxA0', 'qnGTC8EUUes', 'QB8SLS02iUI', 'kIcGLMcSTd0', 'pRCQ0_sKCOM', 'heRCAbBJksA', 'W_NT7IaK9V0', '6TF9DSpGjsw', 'QePZ2pLNjMY', 'RzhAS_GnJIc', 'sh-MYtENchs', 'K7q-XTZTQvU', 'FQxxwd1JNKk', 'UQsy6yBCp7o', 'S_E2EHVxNAE', 'Rw4KKvAr5pY', 'GOPy0YK2aTQ', 'NqFOXOcanTE', 'xMg9vdftwyU', 'gjohZdkE9r8', 'xw7gmx3vwMg', 'TvhcZWNMph4', '8MGxbsDGA7k', 'ZjrKOTu3cT8', 'W6hvFX9EbaU', 'QxKnT2yXi0Q', '1_374c5JFv8', 'NSyEZdDD000', 'x93nZql9y04', 'o0dvEKlXzSw', 'U89ol5U5ufY', 'kdhsFNabGng', 'fS1wLTOGu5A', 'fADbP9m0a_M', 'gqTAu8LAlsg', '7rJfs_OiwLA', 'aH_6GYuIYFw', '8ulR00x-B1I', '40QXPac2sQM', 'Q7pHmq1nq1o', 'yaJx0Gj_LCY', 'WpkY06ItI8U', 'CDBL_JjoC1M', 'FhCuoJuHwQA', 'M4ZoCHID9GI', 'O1OTWCd40bc', 'HQfCoXAPowo', 'QAM-VBxkj8U', '2hlT8CqZ2pA', 'mCdWxZtOzpg', 'FlZzhi2usVI', 'FtDaTXg1wOs', 'UOOQWrrZDgY', '_rKKkDFuCGU'],
        cheerupwtl: ['y5CqrnRD_g8', 'zjTPKObsnO8', 'PFRJvHXaNBk', 'BioTdtwTz9A', 'jCPM-r10T28', 'G4dyN9yZgOE'],
        oldsongwtl: ['B7xmlaxxO7I', 'HTf8OwPjtHw', 'RXZ5X_LGX9Q', 'vMP5o7a8aGU', 'JXI21WGBItA', 'V3BR2FLeB_Q', 'is5ZcCUZ90o', 'xIElr7RV5SQ', 'krk9TTf_Ez8', 'YlngrcncnDw', 'Dmhg_zFMvIY', '7-_Z567nBg0', 'XR4BP3SfPPs', 'Wn8pU5_OqyY', 'BNw26kVGsis', '2v-lnzAGqg0', 'IHvzsDAZCzc', 'c31LQOCmLVU', 'VodCeDuixbk', 'WlY25SbEHFo', '9uBB1tbrQvI', 'jJqjY6iISDw', 'NmZKEbUk00Y', 'hhnkpyFwlKg', 'E4lwRzvd86c', 'srGBf9DsBag', 'SKlRUkLDtHw', 'erfaEyxsKOc', '3fR09DsFByk', 'q3gC7giETWE', 'ih3Ftx3rboQ', 'o2bixTGPMJM', 'FZTu5DfVR2w', '0Rk3FfHw6QE', 'Wg54bn4_ofU', 'G2JFOEFmnnI', 'OBh_2C2wRyY', 'VYilwXVMcl0', 'dcIRriaZuo0', 'n-YVFvxnebo', 'JT985N6B5h0', 'ytMc26hA19Q', 'IatZP3NlUnY', 'IujqMzDHlHo', 's0PEtMHLYd8', 'x9VUZqg9Dmk', 'grFLHG6kxDU', 'wf9JO6aUcrw', '0X5RhuzKnhY', 'Dw3t9qlQs5E', '34SQGlxTp_Y', 'Xg-gZXEEwIs', 'dMpBjCNZE0c', 'J5BaqevWWaw', 'cS4iOFVEgkY', 'mCgggt3FVCw', '4G2sOl5Vy44', 'G44dKh11SBI', 'Bi_JNAgseZU', 'JpG9aHw9whQ', 'SjjxMls8LmY', 'NzDIVwJTef4', 'OhkOBzoL94Q', '0UPTZrW8eJc', 'a4WuT8DLW5w', 'zRCICqUpgZ8', 'hjZqVw3qI9E', 'Xl6sWYI8oLs', 'hJQncyACl-I', 'Qr7tDGi_UTk', 'eRLWxm2RWAo', 'J4mdxo4VPG4', 'uTn61iJ6oLw', '2W3d1sTbo1M', '5WPaBN_0OZM', 'YIuQUNszV_E', 'D1vMkNUWl_Q', '37-W0WWdBT0', 'g6hr2XO39k8', 'W_VeBkniw8I', 'WlBY3uMZca8', 'pOtrcFoCShc', '2cmI4ldY3ek', '6RINalEzyfQ', 'WCvcU8sbG_g', 'WgQCS5wiJQ4', 'Ov0QN8h_n7M', 'usMBVidVpbw', 'm-saDqely-E', 'aRrKoLM6Pm4', 'lsPpHd0OzgE', 'n-CCf5pymII', 'JmPMjVMCKww', '2k53UefIob8', 'TFxgvRkBAGc', 're2v0aw5TbQ', 's7_Ooanyry0', 'R8jIP2-rse0', 'mKFmwCNRvR8', 'GkiEGlZE0ZE', '62EcuXw-7OA', 'Gs4MTjWItyE', '7uzXUjSYbmk', 'bimw4o6wNtA', 'GttWDPwYENY', '757OK7D-qLI', 'hxeQk7bS_8U', 'JclRIIluhcg', '2sfyL7NKHjQ', 'xzVwkX7898k', '58qZFMtKmLc', 'QQa73LVsqRo', '6plHEpfzRcw', 'PT5-jMtHOFs', 'Ps5rZWvcdJM', 'S2izsIN0-Wo', '80rCf0nRJr0', 'M0vzYfe9gNQ', 'Bd-Gju4bnW0', 'EsN6T43GlJ0', '_c6yirfYia0', 'tlxuAdSy418', 'I-Gir_TMvIE', 'lwuJy7ftajM', 'hsAB9utQ3cI', 'EHfQ5txM0Es', 'xRLHxFr_ako', 'E07_bKV5oA8', 'GQYd5qHOLkg', 'aWhoUE9nBFs', 'HIE2pmb6OLk', '28rR-9p9uxs', 'MrODvZZ4k3k', 'db_6UO-O4T8', '3nlwg6Bku7I', 'wxh_y-hVFlU', '4bVkPzF-0j0', 'd-AvXHMv2G8', 'feTF2qrQ69I', '7d8etODTyR4', '4Vdh-pqdaPg', 'F7MNscDUHI0', 'Ont3ZbVKqjA', 'KZWkdTKBgkY', '7blZI7I8AcU', 'JaGfpQ3UMRI', 'GkrbfnQ3tVg', 'iVRen1XYX14', '5c8YewjmrUk', 'V9n4gewAx_A', 'TLngax18A6k', 'JZkbT5vWqR8', 'wSloSD45sRM', '__pSq5r0QDE', 'UvKGvlJspOo', 'F4Xan2BfZxk', 'm0AqSu4eEok', 'GhWfXs_xAFY', 'DJqBhZrT518', 'hvPBvpJcgns', 'GZv-zNflRkE', 'aUuqLVyLheQ', 'exNOwyiEEWU', 'CcTgfJHEyac', 'PLEB-G5aNkU', 'ITMN7-kqnj8', 't7mw22RPwVU', 'lMcgJQe218s', 'W9OwYeS92QE', '5s1uE240MIo', 'yyb9qnGdAhA', 'pduOFbK_R-A', 'KOC7Oo66bgY', 'H2c6oWPkLt8', '2TjxTE7_TqE', 'HQNlxELykzI', 'C1rXPdlbOy8', 'afNX1gi0avc', 'E31oirzTfP4', 'qTQY1W8v2FM', '-ABaJ7Cz7oc', 'lAvVedVbkUs', 'OYrR2lSdFOM', 'WFAYekX4s9I', 'sTPNPvDNyQ0', 'PEeALvIHvJw', 'uCOAiiKvjSw', '7-bYnL0m2pY', '6CFUnCwIMK4', '55HiX-yA7HY', 'ZB_mQ9B3mis', '77fZ8A1pQZc', 'Guf3H1ls8TU', 'uMQYjI9EmY8', 'pGnxp8j7yAo', 'J9-Rvs8rp4Y', 'AbBEF-ugUBQ', '5XDOJDwbfqE', 'LkHWLg0Om7w', 'H7RraH_HIXE', 'KYovlLVSJDs', 'LNRJZZi46U0', 'w3Z_chCASSU', '5CWoaKWbw4E', 'vSv2KACek4k', 'P6NC1lnwbQU', 'u8pkAaU078g', 'MIdFySOwDvU', 'a2JAF0lDv4w', 'G8_k0P_K1ns', 'oSoa9oA8Vjg', 'UWgg9r2u4PI', 'jq1Uz3xcUDM', 'yfkOdgM60rM', 'S04649WAkBc', 'OLO9V4rZaYA', 'd13b6YKq0l0', 'CPAHL4llP_0', 'CLUl1u34jz8', 'OmKY0V-FiaA'],
        lovesongwtl: ['B7xmlaxxO7I', 'HTf8OwPjtHw', 'RXZ5X_LGX9Q', 'vMP5o7a8aGU', 'JXI21WGBItA', 'V3BR2FLeB_Q', 'is5ZcCUZ90o', 'xIElr7RV5SQ', 'krk9TTf_Ez8', 'YlngrcncnDw', 'Dmhg_zFMvIY', '7-_Z567nBg0', 'XR4BP3SfPPs', 'Wn8pU5_OqyY', 'BNw26kVGsis', '2v-lnzAGqg0', 'IHvzsDAZCzc', 'c31LQOCmLVU', 'VodCeDuixbk', 'WlY25SbEHFo', '9uBB1tbrQvI', 'jJqjY6iISDw', 'NmZKEbUk00Y', 'hhnkpyFwlKg', 'E4lwRzvd86c', 'srGBf9DsBag', 'SKlRUkLDtHw', 'erfaEyxsKOc', '3fR09DsFByk', 'q3gC7giETWE', 'ih3Ftx3rboQ', 'o2bixTGPMJM', 'FZTu5DfVR2w', '0Rk3FfHw6QE', 'Wg54bn4_ofU', 'G2JFOEFmnnI', 'OBh_2C2wRyY', 'VYilwXVMcl0', 'dcIRriaZuo0', 'n-YVFvxnebo', 'JT985N6B5h0', 'ytMc26hA19Q', 'IatZP3NlUnY', 'IujqMzDHlHo', 's0PEtMHLYd8', 'x9VUZqg9Dmk', 'grFLHG6kxDU', 'wf9JO6aUcrw', '0X5RhuzKnhY', 'Dw3t9qlQs5E', '34SQGlxTp_Y', 'Xg-gZXEEwIs', 'dMpBjCNZE0c', 'J5BaqevWWaw', 'cS4iOFVEgkY', 'mCgggt3FVCw', '4G2sOl5Vy44', 'G44dKh11SBI', 'Bi_JNAgseZU', 'JpG9aHw9whQ', 'SjjxMls8LmY', 'NzDIVwJTef4', 'OhkOBzoL94Q', '0UPTZrW8eJc', 'a4WuT8DLW5w', 'zRCICqUpgZ8', 'hjZqVw3qI9E', 'Xl6sWYI8oLs', 'hJQncyACl-I', 'Qr7tDGi_UTk', 'eRLWxm2RWAo', 'J4mdxo4VPG4', 'uTn61iJ6oLw', '2W3d1sTbo1M', '5WPaBN_0OZM', 'YIuQUNszV_E', 'D1vMkNUWl_Q', '37-W0WWdBT0', 'g6hr2XO39k8', 'W_VeBkniw8I', 'WlBY3uMZca8', 'pOtrcFoCShc', '2cmI4ldY3ek', '6RINalEzyfQ', 'WCvcU8sbG_g', 'WgQCS5wiJQ4', 'Ov0QN8h_n7M', 'usMBVidVpbw', 'm-saDqely-E', 'aRrKoLM6Pm4', 'lsPpHd0OzgE', 'n-CCf5pymII', 'JmPMjVMCKww', '2k53UefIob8', 'TFxgvRkBAGc', 're2v0aw5TbQ', 's7_Ooanyry0', 'R8jIP2-rse0', 'mKFmwCNRvR8', 'GkiEGlZE0ZE', '62EcuXw-7OA', 'Gs4MTjWItyE', '7uzXUjSYbmk', 'bimw4o6wNtA', 'GttWDPwYENY', '757OK7D-qLI', 'hxeQk7bS_8U', 'JclRIIluhcg', '2sfyL7NKHjQ', 'xzVwkX7898k', '58qZFMtKmLc', 'QQa73LVsqRo', '6plHEpfzRcw', 'PT5-jMtHOFs', 'Ps5rZWvcdJM', 'S2izsIN0-Wo', '80rCf0nRJr0', 'M0vzYfe9gNQ', 'Bd-Gju4bnW0', 'EsN6T43GlJ0', '_c6yirfYia0', 'tlxuAdSy418', 'I-Gir_TMvIE', 'lwuJy7ftajM', 'hsAB9utQ3cI', 'EHfQ5txM0Es', 'xRLHxFr_ako', 'E07_bKV5oA8', 'GQYd5qHOLkg', 'aWhoUE9nBFs', 'HIE2pmb6OLk', '28rR-9p9uxs', 'MrODvZZ4k3k', 'db_6UO-O4T8', '3nlwg6Bku7I', 'wxh_y-hVFlU', '4bVkPzF-0j0', 'd-AvXHMv2G8', 'feTF2qrQ69I', '7d8etODTyR4', '4Vdh-pqdaPg', 'F7MNscDUHI0', 'Ont3ZbVKqjA', 'KZWkdTKBgkY', '7blZI7I8AcU', 'JaGfpQ3UMRI', 'GkrbfnQ3tVg', 'iVRen1XYX14', '5c8YewjmrUk', 'V9n4gewAx_A', 'TLngax18A6k', 'JZkbT5vWqR8', 'wSloSD45sRM', '__pSq5r0QDE', 'UvKGvlJspOo', 'F4Xan2BfZxk', 'm0AqSu4eEok', 'GhWfXs_xAFY', 'DJqBhZrT518', 'hvPBvpJcgns', 'GZv-zNflRkE', 'aUuqLVyLheQ', 'exNOwyiEEWU', 'CcTgfJHEyac', 'PLEB-G5aNkU', 'ITMN7-kqnj8', 't7mw22RPwVU', 'lMcgJQe218s', 'W9OwYeS92QE', '5s1uE240MIo', 'yyb9qnGdAhA', 'pduOFbK_R-A', 'KOC7Oo66bgY', 'H2c6oWPkLt8', '2TjxTE7_TqE', 'HQNlxELykzI', 'C1rXPdlbOy8', 'afNX1gi0avc', 'E31oirzTfP4', 'qTQY1W8v2FM', '-ABaJ7Cz7oc', 'lAvVedVbkUs', 'OYrR2lSdFOM', 'WFAYekX4s9I', 'sTPNPvDNyQ0', 'PEeALvIHvJw', 'uCOAiiKvjSw', '7-bYnL0m2pY', '6CFUnCwIMK4', '55HiX-yA7HY', 'ZB_mQ9B3mis', '77fZ8A1pQZc', 'Guf3H1ls8TU', 'uMQYjI9EmY8', 'pGnxp8j7yAo', 'J9-Rvs8rp4Y', 'AbBEF-ugUBQ', '5XDOJDwbfqE', 'LkHWLg0Om7w', 'H7RraH_HIXE', 'KYovlLVSJDs', 'LNRJZZi46U0', 'w3Z_chCASSU', '5CWoaKWbw4E', 'vSv2KACek4k', 'P6NC1lnwbQU', 'u8pkAaU078g', 'MIdFySOwDvU', 'a2JAF0lDv4w', 'G8_k0P_K1ns', 'oSoa9oA8Vjg', 'UWgg9r2u4PI', 'jq1Uz3xcUDM', 'yfkOdgM60rM', 'S04649WAkBc', 'OLO9V4rZaYA', 'd13b6YKq0l0', 'CPAHL4llP_0', 'CLUl1u34jz8', 'OmKY0V-FiaA']
    }

    return `https://youtu.be/${data[intentName][Math.floor(Math.random() * data[intentName].length)]}`
}

const getRandomMeme = async () => {
    const memeData = await fetch('https://meme-api.com/gimme')
    const rsp = await memeData.json()
    console.log(rsp)
    return [rsp.url, rsp.preview[rsp.preview.length - 1]]
}

const whattoeatMW = (res) => {
    const foodName = getFoodName()
    const pre = ["ผมว่านะ ลอง", "พี่ลองกิน", "กิน", "", "ลอง"]
    const post = ["ดีมั้ย", "ดีป้ะ", "ดูดิ", "สิ", " เชื่อผม"]

    const message = pre[Math.floor(Math.random() * pre.length)] + foodName + post[Math.floor(Math.random() * post.length)]

    const rep = {
        fulfillmentMessages: [
            {
                text: {
                    text: [message]
                }
            }
        ]
    }

    console.log(rep)

    res.status(200).json(rep)
    return
}

const whattodrinkMW = (res) => {
    const drinkName = getDrinksName()
    const pre = ["ผมว่านะ ลอง", "พี่ลองกิน", "กิน", "", "ลอง"]
    const post = ["ดีมั้ย", "ดีป้ะ", "ดูดิ", "สิ", " เชื่อผม", "มั้ย สดชื่นๆ"]

    const message = pre[Math.floor(Math.random() * pre.length)] + drinkName + post[Math.floor(Math.random() * post.length)]

    const rep = {
        fulfillmentMessages: [
            {
                text: {
                    text: [message]
                }
            }
        ]
    }

    console.log(rep)

    res.status(200).json(rep)
    return
}

const whattolistenMW = (intent, res) => {
    const songLink = getSongs(intent)

    const rep = {
        fulfillmentMessages: [
            {
                text: {
                    text: [songLink]
                }
            }
        ]
    }

    console.log(rep)

    res.status(200).json(rep)
    return
}

const randomMemeMW = (res) => {
    getRandomMeme().then(data => {
        const rep = {
            fulfillmentMessages: [
                {
                    payload: {
                        line: {
                            type: "image",
                            originalContentUrl: data[0],
                            previewImageUrl: data[1]
                        }
                    }
                }
            ]
        }

        console.log(rep)

        res.status(200).json(rep)
        return
    })
    return
}

export default function handler(req, res) {

    if (req.method !== "POST") {
        res.status(404).json({ status: 404, message: "Not Found" })
        return
    }

    const cred = req.headers['authorization']

    const eCr = 'Basic ' + process.env.CREDENTIALS

    if (cred !== eCr) {
        res.status(403).json({ status: 403, message: "Forbidden" })
        return
    }

    if (!req.body || !req.body.queryResult) {
        res.status(200).json({ status: 200, message: "OK" })
        return
    }

    console.log(req.body)

    const { queryResult } = req.body


    switch (queryResult.intent.displayName) {
        case "whattoeat":
            whattoeatMW(res)
            break;

        case "whattodrink":
            whattodrinkMW(res)
            break;

        case "randommeme":
            randomMemeMW(res)
            break;

        case "popgenrewtl":
        case "rnbgenrewtl":
        case "thaisongwtl":
        case "sadsongwtl":
        case "cheerupwtl":
        case "rockgenrewtl":
        case "altindiewtl":
        case "fallbackwtl":
        case "lovesongwtl":
        case "oldsongwtl":
            whattolistenMW(queryResult.intent.displayName, res)
            break;

        default:
            res.status(200).json({})
            break;
    }
}