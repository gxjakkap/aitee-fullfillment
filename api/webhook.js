const drinkList = ['Long Island Iced Tea','น้ำผลไม้','น้ำส้ม' ,'น้ำมะนาว','น้ำแอปเปิ้ล','น้ำมะม่วง' ,'น้ำมะตูม' ,'น้ำบ๊วย' ,'น้ำเก๊กฮวย' ,'น้ำมะขาม','น้ำมะเขือเทศ' ,'น้ำกระเจี๊ยบ' ,'น้ำองุ่น','น้ำผลไม้ปั่น','น้ำผลไม้คั้น' ,'ฟรัพเพ' ,'ม็อคเทล','กาแฟ' ,'กาแฟเย็น' ,'กาแฟร้อน' ,'กาแฟม็อคค่า ','กาแฟอเมริกาโน่ ','กาแฟดำ ','กาแฟคาปูชิโน่ ','กาแฟลาเต้'  ,'กาแฟมัคคิอาโต้ ','กาแฟไร้คาเฟอีน' ,'ช็อคโกแลตเย็น' ,'ช็อคโกแลตร้อน' ,'โกโก้','ชาเย็น' ,'ชาร้อน' ,'ชาดำ (แบบชาจีน) ','ชาเขียว' ,'ชาผลไม้' ,'ชาสมุนไพร ','น้ำอัดลม','น้ำอัดลม','โซดา' ,'โค้ก','น้ำเปล่า','น้ำแร่','นม','นมปั่น','เหล้า', 'เบียร์' ,'ไวน์','ค็อกเทล' ,'น้ำผลไม้ผสม ','บรั่นดี','เหล้า' ,'วิสกี้ ','เหล้ากลั่น' ,'เตกีล่า','เหล้ามาร์ตินี่','เหล้าองุ่นขาวซึ่งมีกลิ่นหอม' ,'เหล้าวอดกา', 'เหล้ารัสเซีย' ,'น้ำโทนิค ','ชานม','ชาเย็น','ชาเขียว','โกโก้','นมชมพู','แดงมะนาวโซดา','ชามะนาว','บลูฮาวาย','Blue margarita','Mojito','Singapore sling','Pink lady','Old fashioned','Dry martini','Negroni','ลาเต้','อเมริกาโน่','มอคค่า','เอสเปรสโซ่','ดอปปิโอ','คาปูชิโน่','มัคคิอาโต้','สตรอว์เบอรี่','ลาเต้','โยเกิร์ตปั่น','สตรอว์เบอร์รี่ปั่น','บลูเบอร์รี่ปั่น','โยเกิร์ตปีโป้ปั่น','บลูเบอร์รี่โซดา','กีวีโซดา','น้ำส้ม','มะนาวโซดา','อัญชัญ','มะนาว','โคล่า','สไปร์ท','ชากุหลาบ','ชาพีช','ชาดำ','ชาแอปเปิล','โอวัลตินภูเขาไฟ','คาราเมลนมสด','แดงโซดา','เขียวโซดา','ปีโป้นมสด','นมสดโอวัลติน','น้ำผึ้งมะนาวโซดา','แอปเปิ้ลเขียวโซดา','ช็อคโกแลต','นมสดบราวน์ชูก้า','โอริโอ้นมสดปั่น','นมน้ำผึ้ง','นมสดอัลมอนด์','แตงโมปั่น']

const getFoodName = () => {
    const foodList = ["ข้าวผัดอเมริกัน","ข้าวผัดหมู","ข้าวผัดไก่","ข้าวผัดกุ้ง","ข้าวผัดทะเล", "ข้าวผัดรวมมิตร", "ข้าวผัดไข่", "ข้าวผัดกระเทียม", "ข้าวผัดกะเพราหมู", "ข้าวผัดกะเพราไก่", "ข้าวผัดกะเพราหมูกรอบ", "ข้าวผัดกะเพราหมูสับ", "ข้าวผัดกะเพรากุ้ง", "ข้าวผัดกะเพราหมึก", "ข้าวผัดกะเพราทะเล", "ข้าวผัดกะเพรารวมมิตร", "ข้าวไข่ดาว", "ข้าวไข่เจียว", "ข้าวไข่เจียวหมูสับ", "ข้าวไข่เจียวไก่สับ", "ข้าวไข่เจียวกุ้งสับ", "ข้าวไข่เจียวทะเล", "ข้าวไข่ข้น", "ข้าวไข่ข้นแฮม", "ข้าวไข่ข้นกุ้ง", "ข้าวไข่ข้นทะเล", "ข้าวไข่ตุ๋นหมูสับ", "ข้าวไข่ตุ๋นไก่สับ", "ข้าวไข่ตุ๋นกุ้งสับ", "ข้าวไข่ตุ๋นทะเล", "สุกี้แห้งหมู", "สุกี้แห้งไก่", "สุกี้แห้งไก่","สุกี้แห้งทะเล", "สุกี้น้ำหมู" ,"สุกี้น้ำไก่" ,"สุกี้น้ำทะเล" ,"ข้าวผัดคะน้าหมูกรอบ" ,"ข้าวผัดเครื่องแกงหมู" ,"ข้าวผัดเครื่องแกงไก่" ,"ข้าวผัดเครื่องแกงทะเล" ,"ข้าวผัดเครื่องแกงรวมมิตร" ,"ข้าวผัดรถไฟ" ,"ผัดไทกุ้งสด" ,"ผัดหมี่โคราช" ,"ผัดซีอิ๊วหมู" ,"ผัดซีอิ๊วไก่" ,"ผัดซีอิ๊วทะเล" ,"ผัดซีอิ๊วรวมมิตร" ,"ราดหน้าหมู" ,"ราดหน้าไก่" ,"ราดหน้าทะเล" ,"ราดหน้ารวมมิตร" ,"ราดหน้าหมี่กรอบ" ,"ข้าวไก่เกาหลี" ,"ข้าวหมูเกาหลี" ,"ข้าวเนื้อเกาหลี" ,"ขนมจีนน้ำยาใต้" ,"ขนมจีนน้ำยากะทิ" ,"ขนมจีนน้ำยาปู" ,"ขนมจีนน้ำเงี้ยว" ,"ขนมจีนน้ำยาป่า" ,"ขนมจีนแกงเขียวหวาน" ,"ขนมจีนแกงไตปลา" ,"ข้าวไก่ทอดน้ำปลา" ,"ข้าวไก่ทอดกระเทียม" ,"ข้าวไก่ทอดซอสครีมมะนาว" ,"ข้าวไก่ทอดปาปิก้า" ,"ข้าวไก่แซ่บ" ,"ข้าวไก่เทอริยากิ" ,"ข้าวแกงกะหรี่ไก่" ,"ข้าวหมูทอดน้ำปลา" ,"ข้าวหมูทอดกระเทียม" ,"ข้าวหมูทอดซอสครีมมะนาว" ,"ข้าวหมูทอดปาปิก้า" ,"ข้าวหมูเทอริยากิ" ,"ข้าวแกงกะหรี่หมู" ,"ข้าวแกงกะหรี่เนื้อ" ,"ข้าวผัดผักบุ้งไฟแดง" ,"ต้มยำหมู" ,"ต้มยำไก่" ,"ต้มยำตีนไก่" ,"ต้มยำเครื่องในหมู" ,"ต้มยำกุ้งน้ำข้น" ,"ต้มยำกุ้งน้ำใส" ,"ต้มยำทะเล" ,"ต้มยำซี่โครงหมู" ,"ต้มยำรวมมิตร" ,"ยำวุ้นเส้น" ,"ยำมาม่า" ,"ยำหมูยอ" ,"ยำแซบม่อน" , "ยำกุ้งเต้น" ,"ลาบหมู" ,"ลาบไก่" ,"ลาบทะเล" ,"ลาบเนื้อ" ,"น้ำตกหมู" ,"น้ำตกไก่" ,"ส้มตำไทย" ,"ส้มตำปูปลาร้า" ,"ส้มตำข้าวโพด" ,"ส้มตำไข่เค็ม" ,"ส้มตำไทยไข่เค็ม" ,"ส้มตำทอด" ,"ไก่ย่าง" ,"หมูย่าง" ,"เนื้อเสือร้องไห้" ,"ต้มแซ่บ" ,"ข้าวเหนียวมะม่วง" ,"ปลาดุกย่าง" ,"เมี่ยงปลาทับทิม" ,"เมี่ยงปลานิล" ,"ปลากะพงทอดน้ำปลา" ,"ปลากะพงนึ่งมะนาว" ,"หมูมะนาว" ,"ไส้อั่ว" ,"ไส้อ่อนทอดกระเทียม" ,"ต้มพะโล้หมู" ,"ต้มพะโล้ไก่" ,"แกงจืดหมูก้อน" ,"แกงจืดไก่ก้อน" ,"แกงจืดมะระยัดไส้หมู", "แกงจืดมะระยัดไส้ไก่" ,"ก๋วยเตี๋ยวหมูน้ำใส" ,"ก๋วยเตี๋ยวไก่น้ำใส" ,"ก๋วยเตี๋ยวเนื้อน้ำใส" ,"ก๋วยเตี๋ยวหมูน้ำข้น" ,"ก๋วยเตี๋ยวไก่น้ำข้น" ,"ก๋วยเตี๋ยวเนื้อน้ำข้น" ,"ก๋วยเตี๋ยวหมูน้ำตก" ,"ก๋วยเตี๋ยวไก่น้ำตก" ,"ก๋วยเตี๋ยวเนื้อน้ำตก" ,"ก๋วยเตี๋ยวเรือหมู" ,"ก๋วยเตี๋ยวเรือไก่" ,"ก๋วยเตี๋ยวเรือเนื้อ" ,"ก๋วยเตี๋ยวไก่ตุ๋น" ,"ก๋วยเตี๋ยวหมูตุ๋น" ,"ก๋วยเตี๋ยวเนื้อตุ๋น" ,"ก๋วยเตี๋ยวเย็นตาโฟ" ,"ก๋วยจั๊บหมู" ,"ก๋วยจั๊บไก่" ,"สปาเกตตีคาโบนาร่า" ,"สปาเกตตีผัดขี้เมา" ,"สปาเกตตีซอสมะเขือเทศ" ,"ข้าวมันไก่" ,"ข้าวหมูแดง" ,"ข้าวหมูกรอบ" ,"ข้าวมันไก่ทอด" ,"ข้าวขาหมู" ,"ข้าวรวม" ,"ข้าวซอย" ,"ข้าวคลุกกะปิ" ,"ข้าวยำ" ,"ข้าวพะแนงไก่" ,"ข้าวพะแนงหมู","สเต็กหมูคุโรบูตะ","สเต็กหมู ","สเต็กไก่","สเต็กปลา","สเต็กเนื้อ","แซลม่อนย่างเกลือ","หมูอบน้ำผึ้ง","ปูผัดผงกะหรี่","ยำไข่เยี่ยวม้า","กุ้งเผา","กุ้งแช่น้ำปลา","แซลม่อนดองน้ำปลา","ปูไข่ดอง","ข้าวห่อไข่","ซุปเห็ดทรัฟเฟิล","ซุปข้าวโพด","แคปหมูน้ำพริกหนุ่ม","ซุปหางวัว","จี้นตุ๊บ","แหนมหมู","แหนมไก่","แหนมเนื้อ","ปลาหมึกยัดไส้","ผัดเปรี้ยวหวานหมู","ผัดเปรี้ยวหวานไก่","ผัดเปรี้ยวหวานทะเล","แกงมัสมั่นไก่","แกงมัสมั่นเนื้อ","ยำใหญ่","ไก่โสร่ง","หมูโสร่ง","กุ้งโสร่ง","ข้าวยำไก่แซ่บ","เต้าหู้ทอด","เต้าหู้ทรงเครื่อง","ต้มข่าไก่","เฟรนด์ฟรายด์","ซุปหัวหอม","เบอร์เกอร์หมู","เบอร์เกอร์ไก่","เบอร์เกอร์เนื้อ","เบอร์เกอร์ปลา","ลาซานย่า","พิซซ่าหน้าฮาวาเฮี้ยน","พิซซ่าหน้าซีฟู้ด","พิซซ่าหน้าบาร์บีคิว","ชาบู","หมูกระทะ","บิบิมบับ","ข้าวผัดกิมจิ","ซุปกิมจิ","คิมบับ","ไก่ทอดซอสเกาหลี","ต๊อกบกกี","ข้าวปลาแกะ","ซุปหัวหอม","กุ้งอบชีส","ผักโขมอบชีส","สปาเกตตี้กุ้งซอสไวน์ขาว","แซนด์วิชแฮมชีส","ขนมปังไส้กรอก","ขนมจีบหมู","ขนมจีบกุ้ง","ขนมจีบปู","ซาลาเปาไส้หมูแดง","ซาลาเปาไส้หวาน","ซาลาเปาไส้ครีม","ซาลาเปาไส้หมูสับ","ตำไหลบัวกุ้งสด","ตำไหลบัวแซลม่อน","ตำไหลบัวหมูยอ","ตำไหลบัวไข่เค็ม","ตำไหลบัวไข่เค็ม","ซุปหน่อไม้","เกี๊ยวทอด","ซาลาเปาทอด","เกี๊ยวซ่า","ราเมง","หมูทงคัตสึ","ราเมงต้มยำ","ซูชิหน้าแซลม่อน","ซูชิหน้าไข่กุ้ง","ซูชิไข่หวาน","เทมปุระ","ซุปมิโซะ","ข้าวหน้าปลาไหล","ซาชิมิ","อูนิ","โอโทโร่","ต้มเลือดหมู","ซอยจุ๊","ก้อยเลือด","แกงไข่ผำ","ลาบเทา","ยำหอยเชอรี่","แกงหอยขม","ทาโก้","ทาโกะยากิ","โอนิกิริ","นาโช่","ปูรีโต้","เบค่อนรมควัน","ไส้กรอกรมควัน","วอฟเฟิลไก่ทอด","ไก่งวงอบน้ำผึ้ง","มันเผา","เคบับ","กุ้งอบวุ้น","เส้น","กุ้งผัดพริกเกลือ","กั้งย่างเกลือ","ข้าวหน้าวากิวเอ5","ปลาสามรส","ปลาทอดสมุนไพร","ข้าวหน้าไข่อิกุระ"]
    const x = Math.floor(Math.random() * foodList.length)

    return foodList[x]
}

export default function handler(req, res){

    if (req.method !== "POST"){
        res.status(404).json({status: 404, message: "Not Found"})
        return
    }

    const cred = req.headers['authorization']

    const eCr = 'Basic ' + process.env.CREDENTIALS

    if (cred !== eCr){
        res.status(403).json({status: 403, message: "Forbidden"})
        return
    }

    if (!req.body || !req.bodt.queryResult.intent){
        res.status(200).json({status: 200, message: "OK"})
        return
    }
    
    console.log(req.body)

    const { intent } = req.body.queryResult

    if (intent.displayName === "whattoeat"){
        const foodName = getFoodName()
        const pre = ["ผมว่านะ ลอง", "พี่ลองกิน", "พี่เคยลองกิน", ""]
        const post = ["ดีมั้ย", "ดีป้ะ", "ดูดิ", "สิ"]

        const message = pre[Math.floor(Math.random() * pre.length)] + foodName + post[Math.floor(Math.random() * post.length)]

        res.status(200).json({
            fulfillmentText: message
        })
    }
    else {
        res.status(200).json({})
    }
}