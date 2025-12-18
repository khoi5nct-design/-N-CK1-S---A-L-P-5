
import { Question, QuestionType } from './types';

export const QUESTIONS: Question[] = [
  // CHỦ ĐỀ 1
  {
    id: 1,
    topic: 'Chủ đề 1',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Đồng bằng chiếm bao nhiêu phần lãnh thổ nước ta?',
    options: [
      { id: 'A', text: '3/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '1/4' },
      { id: 'D', text: '2/3' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 2,
    topic: 'Chủ đề 1',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Quần đảo Trường Sa của Việt Nam thuộc tỉnh nào?',
    options: [
      { id: 'A', text: 'Phú Yên' },
      { id: 'B', text: 'Đà Nẵng' },
      { id: 'C', text: 'Đồng Nai' },
      { id: 'D', text: 'Khánh Hòa' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 3,
    topic: 'Chủ đề 1',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Quốc ca nước Cộng hoà xã hội chủ nghĩa Việt Nam có nhạc và lời là của bài hát nào?',
    options: [
      { id: 'A', text: 'Việt Nam ơi!' },
      { id: 'B', text: 'Một vòng Việt Nam' },
      { id: 'C', text: 'Tiến quân ca' },
      { id: 'D', text: 'Xin chào Việt Nam' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 4,
    topic: 'Chủ đề 1',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Địa bàn cư trú của cư dân Chăm pa chủ yếu ở khu vực nào trên Việt Nam hiện nay?',
    options: [
      { id: 'A', text: 'Bắc Bộ' },
      { id: 'B', text: 'Bắc Trung Bộ' },
      { id: 'C', text: 'Trung Bộ' },
      { id: 'D', text: 'Nam Bộ' }
    ],
    correctAnswer: 'C'
  },
  {
    id: 5,
    topic: 'Chủ đề 1',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Đâu được coi là ranh giới phân chia khí hậu giữa miền Nam và miền Bắc nước ta?',
    options: [
      { id: 'A', text: 'Núi Bà Đen' },
      { id: 'B', text: 'Dãy Trường Sơn' },
      { id: 'C', text: 'Đèo Hải Vân' },
      { id: 'D', text: 'Dãy Bạch Mã' }
    ],
    correctAnswer: 'D'
  },
  // CHỦ ĐỀ 2
  {
    id: 6,
    topic: 'Chủ đề 2',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Thời gian ra đời của nhà nước Văn Lang?',
    options: [
      { id: 'A', text: 'Khoảng thế kỉ thứ V TCN' },
      { id: 'B', text: 'Khoảng thế kỉ thứ VI TCN' },
      { id: 'C', text: 'Khoảng thế kỉ thứ IV TCN' },
      { id: 'D', text: 'Khoảng thế kỉ thứ VII TCN' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 7,
    topic: 'Chủ đề 2',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Hình ảnh trên (trong đề cương) mô tả đồ dùng nào của người dân Vương quốc Phù Nam?',
    options: [
      { id: 'A', text: 'Khung cửi' },
      { id: 'B', text: 'Cà ràng (Bếp đun)' },
      { id: 'C', text: 'Ấm tích' },
      { id: 'D', text: 'Cái giỏ' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 8,
    topic: 'Chủ đề 2',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Vương quốc Chăm-pa được thành lập vào thời gian nào?',
    options: [
      { id: 'A', text: 'Cuối thế kỉ I' },
      { id: 'B', text: 'Cuối thế kỉ II' },
      { id: 'C', text: 'Cuối thế kỉ III' },
      { id: 'D', text: 'Cuối thế kỉ IV' }
    ],
    correctAnswer: 'B'
  },
  // CHỦ ĐỀ 3
  {
    id: 9,
    topic: 'Chủ đề 3',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Chính sách nào về giáo dục, khoa cử không được thực hiện dưới Triều Trần?',
    options: [
      { id: 'A', text: 'Tổ chức kì thi Thái học sinh' },
      { id: 'B', text: 'Dựng bia Tiến sĩ ở Văn Miếu' },
      { id: 'C', text: 'Đặt danh hiệu "Tam khôi"' },
      { id: 'D', text: 'Mở rộng Quốc Tử Giám' }
    ],
    correctAnswer: 'B'
  },
  {
    id: 10,
    topic: 'Chủ đề 3',
    type: QuestionType.MULTIPLE_CHOICE,
    content: 'Vua Lý Thái Tổ đã dời đô từ Hoa Lư (Ninh Bình) đến địa điểm nào?',
    options: [
      { id: 'A', text: 'Cổ Loa (Hà Nội)' },
      { id: 'B', text: 'Phú Xuân (Thừa Thiên Huế)' },
      { id: 'C', text: 'Phong Châu (Phú Thọ)' },
      { id: 'D', text: 'Đại La (Hà Nội)' }
    ],
    correctAnswer: 'D'
  },
  {
    id: 11,
    topic: 'Chủ đề 3',
    type: QuestionType.TRUE_FALSE_SEQUENCE,
    content: 'Chiếu dời đô thể hiện điều gì? Điền Đ (đúng) hoặc S (sai) theo thứ tự các câu sau:',
    options: [
      { id: '1', text: 'Lý Thái Tổ chọn Đại La vì gần quê vua.' },
      { id: '2', text: 'Trước đó, kinh đô đóng ở Phong Châu (Phú Thọ).' },
      { id: '3', text: 'Thành Đại La có địa thế đẹp, thuận lợi phát triển đất nước.' },
      { id: '4', text: 'Việc dời đô cho thấy tầm nhìn sáng suốt của vua Lý Thái Tổ.' }
    ],
    correctSequence: ['S', 'S', 'Đ', 'Đ']
  },
  {
    id: 12,
    topic: 'Chủ đề 3',
    type: QuestionType.MATCHING,
    content: 'Nối tên các cuộc khởi nghĩa với mốc thời gian tương ứng:',
    matchingOptions: {
      left: [
        { id: 'L1', text: 'Năm 40 - 43' },
        { id: 'L2', text: 'Năm 248' },
        { id: 'L3', text: 'Năm 542 - 602' },
        { id: 'L4', text: 'Năm 905' },
        { id: 'L5', text: 'Năm 938' }
      ],
      right: [
        { id: 'R1', text: 'Khởi nghĩa Hai Bà Trưng' },
        { id: 'R2', text: 'Khởi nghĩa Bà Triệu' },
        { id: 'R3', text: 'Khởi nghĩa Lý Bí – Triệu Quang Phục' },
        { id: 'R4', text: 'Khởi nghĩa Khúc Thừa Dụ' },
        { id: 'R5', text: 'Khởi nghĩa Ngô Quyền' }
      ]
    },
    correctPairs: {
      'L1': 'R1',
      'L2': 'R2',
      'L3': 'R3',
      'L4': 'R4',
      'L5': 'R5'
    }
  },
  {
    id: 13,
    topic: 'Chủ đề 3',
    type: QuestionType.MULTI_SELECT,
    content: 'Đánh dấu vào ô trống trước những thành tựu, công trình kiến trúc thời nhà Lý:',
    options: [
      { id: 'VM', text: 'Văn Miếu Quốc Tử Giám' },
      { id: 'TD', text: 'Thánh địa Mỹ Sơn' },
      { id: 'CMC', text: 'Chùa Một Cột' },
      { id: 'TC', text: 'Tháp Chăm' }
    ],
    correctIds: ['VM', 'CMC']
  },
  {
    id: 14,
    topic: 'Chủ đề 3',
    type: QuestionType.TRUE_FALSE_SEQUENCE,
    content: 'Đúng ghi Đ – sai ghi S về cuộc kháng chiến chống quân xâm lược Mông - Nguyên:',
    options: [
      { id: '1', text: 'Quân dân nhà Trần đã ba lần chiến thắng quân xâm lược vào các năm 1258, 1285 và 1287 – 1288.' },
      { id: '2', text: 'Tại Hội nghị Diên Hồng, các vị bô lão đã đồng thanh hô "Đánh!".' },
      { id: '3', text: 'Trần Quốc Toản là vị tướng có câu nói: "Đầu thần chưa rơi xuống đất, xin bệ hạ đừng lo".' },
      { id: '4', text: 'Lá cờ thêu sáu chữ vàng của Trần Quốc Toản có nội dung là: "Phá cường địch, báo hoàng ân".' }
    ],
    correctSequence: ['Đ', 'Đ', 'S', 'Đ']
  }
];
