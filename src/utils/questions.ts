/* eslint-disable prettier/prettier */


export type Question = {
    question: string;
    answers: string[];
    correctAnswer: string;
  };

  export const getRandomQuestions = (): Question[] => {
    const questions: Question[] = [
      {
        question: 'รองเท้าอะไรหายาก',
        answers: ['รองเท้าหาย', 'รองเท้าแตะ', 'รองเท้าผ้าใบ', 'รองเท้าบูท'],
        correctAnswer: 'รองเท้าหาย',
      },
      {
        question: 'ประตูกลัวอะไร',
        answers: ['กลัวไฟ', 'กลัวผี', 'กลัวเปิด', 'กลัวปิด'],
        correctAnswer: 'กลัวไฟ',
      },
      {
        question: 'เงินสกุลอะไรน่ากลัวที่สุด',
        answers: ['เงินบาด', 'เงินยูโร', 'เงินเยน', 'เงินดอลลาร์'],
        correctAnswer: 'เงินบาด',
      },
      {
        question: 'น้ำอะไรเอ่ย ยืนได้',
        answers: ['น้ำตื้น', 'น้ำมีขา', 'น้ำเป็นคน', 'น้ำตก'],
        correctAnswer: 'น้ำตื้น',
      },
      {
        question: 'ตัวอะไรเอ่ย ชอบอยู่ในห้องสมุด',
        answers: ['ตัวดูด', 'ตัวหนังสือ', 'ตัวเอง', 'ตัวปลอม'],
        correctAnswer: 'ตัวหนังสือ',
      },
      {
        question: 'ในเรื่องซินเดอเรลล่า มีคนแคระกี่คน',
        answers: ['7', '4', '5', 'ไม่มีสักคน เพราะไม่ใช่เรื่องสโนไวท์'],
        correctAnswer: 'ไม่มีสักคน เพราะไม่ใช่เรื่องสโนไวท์',
      },
      {
        question: 'ขาอะไรอยู่ในปาก',
        answers: ['ขาไก่', 'ขาหมู', 'ขากรรไกร', 'ขากบ'],
        correctAnswer: 'ขากรรไกร',
      },
      {
        question: 'ห้องอะไรฉันเห็นคุณ',
        answers: ['ห้องนอน', 'ห้องครัว', 'ห้องน้ำ', 'ห้องไอซียู'],
        correctAnswer: 'ห้องไอซียู',
      },
      {
        question: 'ปลาอะไรไม่มีสัมมาคาราวะ',
        answers: ['ปลาหมอ', 'ปลาสลิด', 'ปลาช่อน', 'ปลาตาย'],
        correctAnswer: 'ปลาตาย',
      },
      {
        question: 'แมวอะไรอยู่ใต้ดิน',
        answers: ['แมวมุดดิน', 'แมวกัน', 'แมวนอน', 'แมววิ่ง'],
        correctAnswer: 'แมวกัน',
      },
      {
        question: 'นกอะไรอยู่ในทะเล',
        answers: ['นกเขา', 'นกเรา', 'นกอินทรี', 'นกทะเล'],
        correctAnswer: 'นกอินทรี',
      },
      {
        question: 'ครูอะไรทั้งชีวิตมีปากกาด้ามเดียว',
        answers: ['ครูพร', 'ครูพละ', 'ครูจน', 'ครูวันเพ็ญ'],
        correctAnswer: 'ครูวันเพ็ญ',
      },
      {
        question: 'แมวอะไรเอ่ย',
        answers: ['แมวเล้า', 'แมวเฉยๆ', 'แมวสีส้ม', 'แมวง่วง'],
        correctAnswer: 'แมวเล้า',
      },
      {
        question: 'มดอะไรใหญ่กว่ามดเอ็กซ์',
        answers: ['มดแดง', 'มดดำ', 'มดเขียว', 'มดเอ็กซ์แอล'],
        correctAnswer: 'มดเอ็กซ์แอล',
      },
      {
        question: 'มดอะไรดำน้ำได้',
        answers: ['มดงาน', 'มดว่ายน้ำ', 'มดนางพญา', 'มดดำ'],
        correctAnswer: 'มดดำ',
      },
      {
        question: 'ปูอะไรมี 4 ขา',
        answers: ['ปูโดนตัดขา', 'ปูไต่', 'ปูนา', 'ปูเสื่อนอนกับเพื่อน 2 คน'],
        correctAnswer: 'ปูเสื่อนอนกับเพื่อน 2 คน',
      },
      {
        question: 'ปลาอะไรปากกว้างที่สุด',
        answers: ['ปลาหมอ', 'ปลากัด', 'ปลาดุก', 'ปลาร้า'],
        correctAnswer: 'ปลาร้า',
      },
      {
        question: 'ปลาอะไรว่ายน้ำจากขั้วโลกเหนือไปขั้วโลกใต้',
        answers: ['ปลาหมอ', 'ปลากัด', 'ปลาดุก', 'ปลาไม่มีอะไรทำ'],
        correctAnswer: 'ปลาไม่มีอะไรทำ',
      },
      {
        question: 'ซุปอะไรมีสารอาหารมากที่สุด',
        answers: ['ซุปไข่', 'ซุปไก่', 'ซุปหมู', 'ซุปเปอร์มาร์เก็ต'],
        correctAnswer: 'ซุปเปอร์มาร์เก็ต',
      },
      {
        question: 'หมูอะไรกินไม่อิ่ม',
        answers: ['หมูหิว', 'หมูอ้วน', 'หมูละโมบ', 'หมูน้อย'],
        correctAnswer: 'หมูน้อย',
      },
    ];

    const shuffledQuestions = questions
      .map(q => ({
        ...q,
        answers: q.answers.sort(() => Math.random() - 0.5),
      }))
      .sort(() => Math.random() - 0.5)
      .slice(0, 20);

    return shuffledQuestions;
  };
