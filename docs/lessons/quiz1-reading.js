window.quizData = {
  title: "Reading Practice 1 | Anxiety",
  testName: "Test 1",
  partName: "Passage 1",
  dbPrefix: "ielts_R_T1_P1", 
  passageTitle: "Anxiety",
  startQ: 1,
  endQ: 13,
  totalQuestions: 13,
  
  // Toàn bộ nội dung bài đọc được bọc trong chuỗi HTML
  passageContent: `
        <p><strong>A.</strong> <span id="ev-9" class="ev-box">Pouring water into the sea sounds harmless enough. But in Florida Bay, a large and shallow section of the Gulf of Mexico that lies between the southern end of the Everglades and the Florida Keys, it is proving highly controversial.</span> That is because researchers are divided over whether it will help or hinder the plants and animals that live in the bay.</p>
        <p><strong>B.</strong> What is at risk is the future of the bay’s extensive beds of seagrasses. These grow on the bay’s muddy floor and act as nurseries for the larvae of shrimps, lobsters and fish – many of the important sport and commercial-fishing species. Also in danger is an impressive range of coral reefs that run the length of the Florida Keys and form the third-largest barrier reef in the world. <span id="ev-4" class="ev-box">Since the 1980s, coral cover has dropped by 40%, and a third of the coral species have gone.</span> This has had a damaging effect on the animals that depend on the reef, such as crabs, turtles and nearly 600 species of fish.</p>
        <p><strong>C.</strong> What is causing such ecological change is a matter of much debate. <span id="ev-2" class="ev-box">And the answer is of no small consequence. This is because the American government is planning to devote $8 billion over the next 30 years to revitalise the Everglades.</span> Seasonal freshwater flows into the Everglades are to be restored in order to improve the region’s health. But they will then run off into the bay.</p>
        <p><strong>D.</strong> Joseph Zieman, a marine ecologist at the University of Virginia, thinks this is a good idea. He believes that a lack of fresh water in the bay is its main problem. <span id="ev-5" class="ev-box">The blame, he says, lies with a century of drainage in the Everglades aimed at turning the marshes into farmland and areas for development.</span> This has caused the flow of fresh water into Florida Bay to dwindle, making the water in the bay, overall, more saline. This, he argues, kills the seagrasses, and as these rots, nutrients are released that feed the microscopic plants and animals that live in the water. This, he says, is why the bay’s once crystal-clear waters often resemble pea soup. And in a vicious circle, these turbid blooms block out sunlight, causing more seagrasses to die and yet more turbidity.</p>
        <p><strong>E.</strong> Brian Lapointe, a marine scientist at the Harbour Branch Oceanographic Institution at Fort Pierce in Florida, disagrees. <span id="ev-1" class="ev-box">He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays.</span> Furthermore, he notes that when freshwater flows through the Everglades were increased experimentally in the 1990s, it led to massive plankton blooms. <span id="ev-7" class="ev-box">Freshwater running off from well-fertilised farmlands, he says, caused a fivefold rise in nitrogen levels in the bay.</span> This was like pouring fuel on a fire. The result was mass mortality of seagrasses because of increased turbidity from the plankton. Dr Lapointe adds that, because corals thrive only in waters where nutrient levels are low, <span id="ev-6" class="ev-box">restoring freshwater rich in nitrogen will do more damage to the reef.</span></p>
        <p><strong>F.</strong> It is a plausible theory. <span id="ev-10" class="ev-box">The water flowing off crops that are grown on the 750,000 acres of heavily fertilised farmland on the northern edge of the Everglades is rich in nitrogen</span>, half of which ends up in the bay. But Bill Kruczynski, of America’s Environmental Protection Agency, is convinced that nitrogen from farmlands is not the chief problem. Some coral reefs well away from any nitrogen pollution are dying and, curiously, a few are thriving. <span id="ev-8" class="ev-box">Dr Kruczynski thinks that increased nutrients arriving from local sewage discharges from the thousands of cesspits along the Florida Keys are part of the problem.</span></p>
        <p><strong>G.</strong> Such claims and counterclaims make the impact of the restoration plan difficult to predict. <span id="ev-11" class="ev-box">If increased salinity is the main problem, the bay’s ecology will benefit from the Everglades restoration project. If, however, nitrogen is the problem, increasing the flow of freshwater could mate matters much worse.</span></p>
        <p><strong>H.</strong> If this second hypothesis proves correct, the cure is to remove nitrogen from farmland or sewage discharges, or perhaps both. Neither will be easy. Man-made wetlands, at present, being built to reduce phosphate runoff into the bay—also from fertilisers—would need an algal culture (a sort of contained algal bloom) added to them to deal with discharges from farmlands. <span id="ev-3" class="ev-box">That would be costly. So too would be the replacement of cesspits with proper sewerage—one estimate puts the cost at $650m.</span> Either way, it is clear that when, on December 1st, 3,000 square miles of sea around the reef are designated as a “protective zone” by the deputy secretary of commerce, Sam Bodman, this will do nothing to protect the reef from pollution.</p>
        <p><strong>I.</strong> Some argue, though, that there is a more fundamental flaw in the plans for the bay: the very idea of returning it to a Utopian ideal before man wrought his damage. <span id="ev-12" class="ev-box">Nobody knows what Florida Bay was like before the 1950s when engineers cut the largest canals in the Everglades and took most of the water away.</span> Dr Kruczynski suspects it was more like an estuary. The bay that many people wish to re-create could have been nothing more than a changing phase in the bay’s history.</p>
        <p><strong>J.</strong> These arguments do not merely threaten to create ecological problems but economic ones as well. <span id="ev-13" class="ev-box">The economy of the Florida Keys depends on tourism—the local tourist industry has an annual turnover of $2.5 billion.</span> People come for fishing-boat trips, for manatee watching, or for scuba diving and snorkeling to view the exotically coloured corals. If the plan to restore the Everglades makes problems in the bay and the reef worse, it could prove a very expensive mistake.</p>
    `,
    questionsHTML: `
    <div class="question-section">
            <div class="instruction">
                <u>Questions 1-4:</u> The reading Passage has seven paragraphs A-J. <br>Which paragraph contains the following information? Drag and drop the correct letter.
            </div>
            <div class="drag-palette" id="palette-1"></div>
            <div id="render-q1-4"></div>
        </div>

        <div class="q-block">
            <div class="instruction">
                <u>Questions 5-8:</u> Use the information in the passage to match the people (listed A-C) with opinions or deeds below. <br><i>NB: You may use any letter more than once.</i>
            </div>
            <div class="drag-palette" id="palette-2">
                <div class="drag-item" draggable="true" ondragstart="drag(event)" data-val="A" data-reusable="true" data-group="g2">A. Bill Kruczynski</div>
                <div class="drag-item" draggable="true" ondragstart="drag(event)" data-val="B" data-reusable="true" data-group="g2">B. Brian Lapointe</div>
                <div class="drag-item" draggable="true" ondragstart="drag(event)" data-val="C" data-reusable="true" data-group="g2">C. Joseph Zieman</div>
            </div>
            <div id="render-q5-8"></div>
        </div>

        <div class="q-block">
            <div class="instruction">
                <u>Questions 9-13:</u> Do the following statements agree with the information given in Reading Passage?<br><br>
                <strong>TRUE</strong> if the statement agrees with the information<br>
                <strong>FALSE</strong> if the statement contradicts the information<br>
                <strong>NOT GIVEN</strong> if there is no information on this
            </div>
            <div id="render-q9-13"></div>
        </div>

    ,

  // Danh sách đáp án đúng (Hỗ trợ định dạng array cho câu có nhiều đáp án đúng)
  correctAnswers: {
        { id: 1, type: "match", group: "g1", text: "Seagrass turned to be more resistant to the saline water level in the Bay.", ans: "E" },
        { id: 2, type: "match", group: "g1", text: "Significance of finding a specific reason in controversy.", ans: "C" },
        { id: 3, type: "match", group: "g1", text: "Expensive proposals raised to solve the nitrogen dilemma.", ans: "H" },
        { id: 4, type: "match", group: "g1", text: "A statistic of ecological changes in both the coral area and species.", ans: "B" },
        { id: 5, type: "match", group: "g2", text: "Drainage system in Everglades actually results in high salty water in the bay.", ans: "C" },
        { id: 6, type: "match", group: "g2", text: "Restoring water high in nitrogen level will make more ecological side effect.", ans: "B" },
        { id: 7, type: "match", group: "g2", text: "High nitrogen levels may be caused by the nearby farmland.", ans: "B" },
        { id: 8, type: "match", group: "g2", text: "Released sewage rather than nutrients from agricultural area increase the level of Nitrogen.", ans: "A" },
        { id: 9, type: "tf", text: "Everyone agrees with 'pouring water into the sea is harmless enough'.", ans: "FALSE" },
        { id: 10, type: "tf", text: "Nitrogen was poured in from different types of crops as water flows through.", ans: "NOT GIVEN" },
        { id: 11, type: "tf", text: "Everglades restoration project can be effective regardless of the cause of the pollution.", ans: "FALSE" },
        { id: 12, type: "tf", text: "Human has changed Florida Bay where old image before 1950s is unrecalled.", ans: "TRUE" },
        { id: 13, type: "tf", text: "Tourism contributes fundamentally to the Florida Bay area.", ans: "TRUE" }
    },

  // Bản dịch nghĩa, dẫn chứng và phân tích giải thích đáp án
  explanations: {
    1: { 
        translation: "Cỏ biển có khả năng chống chịu tốt hơn với mức độ mặn của nước trong Vịnh.", 
        exp: "<b>Đáp án: E</b><br>Đoạn E dẫn lời Brian Lapointe: <i>'He thinks seagrasses can tolerate much higher levels of salinity...'</i>. Cụm 'can tolerate' được paraphrase thành 'more resistant', nghĩa là cỏ biển chịu mặn tốt hơn mức hiện tại.", 
        vocab: "<b>Tolerate (v)</b>: Chịu đựng | <b>Salinity (n)</b>: Độ mặn | <b>Resistant (adj)</b>: Kháng, chống chịu", 
        colorClass: "ev-color-1" 
    },
    2: { 
        translation: "Tầm quan trọng của việc tìm ra một lý do cụ thể trong cuộc tranh cãi.", 
        exp: "<b>Đáp án: C</b><br>Đoạn C đề cập đến tranh cãi (matter of much debate) và khẳng định câu trả lời có tầm quan trọng lớn (no small consequence) vì liên quan đến khoản ngân sách 8 tỷ USD của chính phủ.", 
        vocab: "<b>Consequence (n)</b>: Tầm quan trọng, hệ quả | <b>Controversy (n)</b>: Cuộc tranh cãi", 
        colorClass: "ev-color-2" 
    },
    3: { 
        translation: "Những đề xuất đắt đỏ được đưa ra để giải quyết tình trạng tiến thoái lưỡng nan về nitơ.", 
        exp: "<b>Đáp án: H</b><br>Đoạn H đưa ra các giải pháp xử lý Nitơ (hệ thống đầm lầy nhân tạo, thay thế bể tự hoại) và nhấn mạnh chi phí rất đắt đỏ (costly / $650m).", 
        vocab: "<b>Costly (adj)</b>: Đắt đỏ | <b>Proposal (n)</b>: Đề xuất | <b>Dilemma (n)</b>: Thế tiến thoái lưỡng nan", 
        colorClass: "ev-color-3" 
    },
    4: { 
        translation: "Một số liệu thống kê về những thay đổi sinh thái ở cả khu vực san hô và các loài.", 
        exp: "<b>Đáp án: B</b><br>Đoạn B chứa số liệu thống kê cụ thể: tỷ lệ bao phủ của san hô giảm 40% (coral cover has dropped by 40%) và 1/3 số loài san hô đã biến mất (a third of the coral species have gone).", 
        vocab: "<b>Statistic (n)</b>: Số liệu thống kê | <b>Species (n)</b>: Loài sinh vật", 
        colorClass: "ev-color-4" 
    },
    5: { 
        translation: "Hệ thống thoát nước ở Everglades thực chất dẫn đến độ mặn cao trong Vịnh.", 
        exp: "<b>Đáp án: A (Joseph Zieman)</b><br>Trong đoạn D, Zieman cho rằng hệ thống thoát nước (drainage) làm giảm dòng nước ngọt, khiến nước trong Vịnh trở nên mặn hơn (more saline).", 
        vocab: "<b>Drainage (n)</b>: Hệ thống thoát nước | <b>Saline (adj)</b>: Mặn", 
        colorClass: "ev-color-5" 
    },
    6: { 
        translation: "Việc phục hồi nguồn nước có nồng độ nitơ cao sẽ gây ra nhiều tác dụng phụ về sinh thái hơn.", 
        exp: "<b>Đáp án: B (Brian Lapointe)</b><br>Trong đoạn E, Lapointe lập luận rằng việc khôi phục dòng nước ngọt chứa nhiều nitơ sẽ gây tổn hại nặng nề hơn cho rạn san hô (do more damage to the reef).", 
        vocab: "<b>Side effect (n)</b>: Tác dụng phụ, tác hại kèm theo | <b>Restore (v)</b>: Phục hồi", 
        colorClass: "ev-color-6" 
    },
    7: { 
        translation: "Nồng độ nitơ cao có thể do đất nông nghiệp gần đó gây ra.", 
        exp: "<b>Đáp án: B (Brian Lapointe)</b><br>Đoạn E dẫn lời Lapointe: nước chảy tràn từ các vùng đất nông nghiệp bón nhiều phân bón (well-fertilised farmlands) đã làm lượng nitơ tăng gấp 5 lần.", 
        vocab: "<b>Runoff (n)</b>: Dòng chảy tràn | <b>Farmland (n)</b>: Đất nông nghiệp", 
        colorClass: "ev-color-7" 
    },
    8: { 
        translation: "Nước thải xả ra hơn là chất dinh dưỡng từ khu vực nông nghiệp làm tăng nồng độ Nitơ.", 
        exp: "<b>Đáp án: C (Bill Kruczynski)</b><br>Trong đoạn F, Kruczynski cho rằng nitơ từ nông nghiệp không phải nguyên nhân chính, mà nước thải từ các bể tự hoại địa phương (local sewage discharges) mới là một phần của vấn đề.", 
        vocab: "<b>Sewage discharge (n)</b>: Sự xả nước thải | <b>Agricultural (adj)</b>: Thuộc nông nghiệp", 
        colorClass: "ev-color-8" 
    },
    9: { 
        translation: "Mọi người đều đồng ý rằng 'đổ nước vào biển là đủ vô hại'.", 
        exp: "<b>Đáp án: FALSE</b><br>Đoạn A nêu rõ vấn đề này đang gây tranh cãi gay gắt (highly controversial) và các nhà nghiên cứu đang bất đồng ý kiến (researchers are divided). Thông tin trái ngược với 'Everyone agrees'.", 
        tip: "🚩 <b>Bẫy IELTS:</b> Từ mang tính tuyệt đối như 'Everyone' thường báo hiệu đáp án FALSE hoặc NO.", 
        colorClass: "ev-color-9" 
    },
    10: { 
        translation: "Nitơ được đổ vào từ các loại cây trồng khác nhau khi nước chảy qua.", 
        exp: "<b>Đáp án: NOT GIVEN</b><br>Đoạn F có đề cập nước chảy qua cây trồng (water flowing off crops), nhưng bài KHÔNG hề đề cập đến việc có 'các loại cây trồng khác nhau' (different types of crops) hay không.", 
        tip: "🚩 <b>Bẫy IELTS:</b> Thêm tính từ so sánh/phân loại ('different types') mà bài đọc không đề cập -> Chọn NOT GIVEN.", 
        colorClass: "ev-color-10" 
    },
    11: { 
        translation: "Dự án phục hồi Everglades có thể hiệu quả bất kể nguyên nhân gây ô nhiễm là gì.", 
        exp: "<b>Đáp án: FALSE</b><br>Đoạn G khẳng định hiệu quả phụ thuộc vào nguyên nhân: Nếu do độ mặn thì dự án có lợi, nhưng nếu do Nitơ thì dự án sẽ làm mọi thứ tồi tệ hơn (make matters much worse). Thông tin trái ngược với 'regardless of the cause'.", 
        vocab: "<b>Regardless of</b>: Bất kể, không phụ thuộc vào", 
        colorClass: "ev-color-11" 
    },
    12: { 
        translation: "Con người đã thay đổi Vịnh Florida đến mức hình ảnh cũ trước những năm 1950 không thể nhớ lại/biết được.", 
        exp: "<b>Đáp án: TRUE</b><br>Đoạn I nêu rõ: <i>'Nobody knows what Florida Bay was like before the 1950s...'</i> (Không ai biết Vịnh Florida trông như thế nào trước những năm 1950), hoàn toàn trùng khớp với ý 'old image is unrecalled'.", 
        vocab: "<b>Unrecalled (adj)</b>: Không thể nhớ lại / không ai biết", 
        colorClass: "ev-color-12" 
    },
    13: { 
        translation: "Du lịch đóng góp một phần căn bản/nền tảng cho khu vực Vịnh Florida.", 
        exp: "<b>Đáp án: TRUE</b><br>Đoạn J xác nhận: <i>'The economy of the Florida Keys depends on tourism'</i> (Nền kinh tế phụ thuộc vào du lịch). Ý 'depends on' tương đương với 'contributes fundamentally'.", 
        vocab: "<b>Fundamentally (adv)</b>: Một cách căn bản / nền tảng", 
        colorClass: "ev-color-13" 
    }
};
