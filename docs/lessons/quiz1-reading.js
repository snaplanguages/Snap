window.quizData = {
  title: "Reading Practice 1 | Florida Bay",
  testName: "Test 1",
  partName: "Passage 1",
  dbPrefix: "ielts_R_T1_P1",
  passageTitle: "Florida Bay",
  startQ: 1,
  endQ: 13,
  totalQuestions: 13,
  
  // Nội dung bài đọc đã được gán chuẩn các ID ev-1 đến ev-13 để phục vụ định vị dẫn chứng
  passageContent: `
    <p class="paragraph"><strong>A.</strong> <span id="ev-9" class="ev-box">Pouring water into the sea sounds harmless enough. But in Florida Bay, a large and shallow section of the Gulf of Mexico that lies between the southern end of the Everglades and the Florida Keys, it is proving highly controversial.</span> That is because researchers are divided over whether it will help or hinder the plants and animals that live in the bay.</p>
    <p class="paragraph"><strong>B.</strong> What is at risk is the future of the bay’s extensive beds of seagrasses. These grow on the bay’s muddy floor and act as nurseries for the larvae of shrimps, lobsters and fish – many of the important sport and commercial-fishing species. Also in danger is an impressive range of coral reefs that run the length of the Florida Keys and form the third-largest barrier reef in the world. <span id="ev-4" class="ev-box">Since the 1980s, coral cover has dropped by 40%, and a third of the coral species have gone.</span> This has had a damaging effect on the animals that depend on the reef, such as crabs, turtles and nearly 600 species of fish.</p>
    <p class="paragraph"><strong>C.</strong> What is causing such ecological change is a matter of much debate. <span id="ev-2" class="ev-box">And the answer is of no small consequence. This is because the American government is planning to devote $8 billion over the next 30 years to revitalise the Everglades.</span> Seasonal freshwater flows into the Everglades are to be restored in order to improve the region’s health. But they will then run off into the bay.</p>
    <p class="paragraph"><strong>D.</strong> Joseph Zieman, a marine ecologist at the University of Virginia, thinks this is a good idea. He believes that a lack of fresh water in the bay is its main problem. <span id="ev-5" class="ev-box">The blame, he says, lies with a century of drainage in the Everglades aimed at turning the marshes into farmland and areas for development.</span> This has caused the flow of fresh water into Florida Bay to dwindle, making the water in the bay, overall, more saline. This, he argues, kills the seagrasses, and as these rots, nutrients are released that feed the microscopic plants and animals that live in the water. This, he says, is why the bay’s once crystal-clear waters often resemble pea soup. And in a vicious circle, these turbid blooms block out sunlight, causing more seagrasses to die and yet more turbidity.</p>
    <p class="paragraph"><strong>E.</strong> Brian Lapointe, a marine scientist at the Harbour Branch Oceanographic Institution at Fort Pierce in Florida, disagrees. <span id="ev-1" class="ev-box">He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays.</span> Furthermore, he notes that when freshwater flows through the Everglades were increased experimentally in the 1990s, it led to massive plankton blooms. <span id="ev-7" class="ev-box">Freshwater running off from well-fertilised farmlands, he says, caused a fivefold rise in nitrogen levels in the bay.</span> This was like pouring fuel on a fire. The result was mass mortality of seagrasses because of increased turbidity from the plankton. Dr Lapointe adds that, because corals thrive only in waters where nutrient levels are low, <span id="ev-6" class="ev-box">restoring freshwater rich in nitrogen will do more damage to the reef.</span></p>
    <p class="paragraph"><strong>F.</strong> It is a plausible theory. <span id="ev-10" class="ev-box">The water flowing off crops that are grown on the 750,000 acres of heavily fertilised farmland on the northern edge of the Everglades is rich in nitrogen</span>, half of which ends up in the bay. But Bill Kruczynski, of America’s Environmental Protection Agency, is convinced that nitrogen from farmlands is not the chief problem. Some coral reefs well away from any nitrogen pollution are dying and, curiously, a few are thriving. <span id="ev-8" class="ev-box">Dr Kruczynski thinks that increased nutrients arriving from local sewage discharges from the thousands of cesspits along the Florida Keys are part of the problem.</span></p>
    <p class="paragraph"><strong>G.</strong> Such claims and counterclaims make the impact of the restoration plan difficult to predict. <span id="ev-11" class="ev-box">If increased salinity is the main problem, the bay’s ecology will benefit from the Everglades restoration project. If, however, nitrogen is the problem, increasing the flow of freshwater could make matters much worse.</span></p>
    <p class="paragraph"><strong>H.</strong> If this second hypothesis proves correct, the cure is to remove nitrogen from farmland or sewage discharges, or perhaps both. Neither will be easy. Man-made wetlands, at present, being built to reduce phosphate runoff into the bay—also from fertilisers—would need an algal culture (a sort of contained algal bloom) added to them to deal with discharges from farmlands. <span id="ev-3" class="ev-box">That would be costly. So too would be the replacement of cesspits with proper sewerage—one estimate puts the cost at $650m.</span> Either way, it is clear that when, on December 1st, 3,000 square miles of sea around the reef are designated as a “protective zone” by the deputy secretary of commerce, Sam Bodman, this will do nothing to protect the reef from pollution.</p>
    <p class="paragraph"><strong>I.</strong> Some argue, though, that there is a more fundamental flaw in the plans for the bay: the very idea of returning it to a Utopian ideal before man wrought his damage. <span id="ev-12" class="ev-box">Nobody knows what Florida Bay was like before the 1950s when engineers cut the largest canals in the Everglades and took most of the water away.</span> Dr Kruczynski suspects it was more like an estuary. The bay that many people wish to re-create could have been nothing more than a changing phase in the bay’s history.</p>
    <p class="paragraph"><strong>J.</strong> These arguments do not merely threaten to create ecological problems but economic ones as well. <span id="ev-13" class="ev-box">The economy of the Florida Keys depends on tourism—the local tourist industry has an annual turnover of $2.5 billion.</span> People come for fishing-boat trips, for manatee watching, or for scuba diving and snorkeling to view the exotically coloured corals. If the plan to restore the Everglades makes problems in the bay and the reef worse, it could prove a very expensive mistake.</p>
  `,

  // Giao diện câu hỏi được tối ưu hóa đồng bộ sang các phần tử nhập liệu chuẩn hóa
  questionsHTML: `
    <div class="question-section">
      <div class="instruction">
        Questions 1-4: Which paragraph contains the following information?<br>
        Write the correct letter, <strong>A – J</strong>, in answer boxes 1-4 on your answer sheet.
      </div>
      
      <div class="q-row" id="q-row-1">
        <span class="q-num">1.</span>
        <span class="q-content">Seagrass turned to be more resistant to the saline water level in the Bay.
          <select class="input-select" id="ans-1" onchange="updateNav(1)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
          </select>
          <span id="fb-1" class="feedback"></span>
        </span>
      </div>
      <div id="exp-1"></div>
      
      <div class="q-row" id="q-row-2">
        <span class="q-num">2.</span>
        <span class="q-content">Significance of finding a specific reason in controversy.
          <select class="input-select" id="ans-2" onchange="updateNav(2)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
          </select>
          <span id="fb-2" class="feedback"></span>
        </span>
      </div>
      <div id="exp-2"></div>

      <div class="q-row" id="q-row-3">
        <span class="q-num">3.</span>
        <span class="q-content">Expensive proposals raised to solve the nitrogen dilemma.
          <select class="input-select" id="ans-3" onchange="updateNav(3)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
          </select>
          <span id="fb-3" class="feedback"></span>
        </span>
      </div>
      <div id="exp-3"></div>

      <div class="q-row" id="q-row-4">
        <span class="q-num">4.</span>
        <span class="q-content">A statistic of ecological changes in both the coral area and species.
          <select class="input-select" id="ans-4" onchange="updateNav(4)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
          </select>
          <span id="fb-4" class="feedback"></span>
        </span>
      </div>
      <div id="exp-4"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Questions 5-8: Match the people (listed A-C) with opinions or deeds below.<br>
        Write the correct letter, <strong>A, B or C</strong>, in answer boxes 5-8.
      </div>
      <div class="headings-list">
        <p><strong>A</strong> Bill Kruczynski</p>
        <p><strong>B</strong> Brian Lapointe</p>
        <p><strong>C</strong> Joseph Zieman</p>
      </div>

      <div class="q-row" id="q-row-5">
        <span class="q-num">5.</span>
        <span class="q-content">Drainage system in Everglades actually results in high salty water in the bay.
          <select class="input-select" id="ans-5" onchange="updateNav(5)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option>
          </select>
          <span id="fb-5" class="feedback"></span>
        </span>
      </div>
      <div id="exp-5"></div>

      <div class="q-row" id="q-row-6">
        <span class="q-num">6.</span>
        <span class="q-content">Restoring water high in nitrogen level will make more ecological side effect.
          <select class="input-select" id="ans-6" onchange="updateNav(6)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option>
          </select>
          <span id="fb-6" class="feedback"></span>
        </span>
      </div>
      <div id="exp-6"></div>

      <div class="q-row" id="q-row-7">
        <span class="q-num">7.</span>
        <span class="q-content">High nitrogen levels may be caused by the nearby farmland.
          <select class="input-select" id="ans-7" onchange="updateNav(7)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option>
          </select>
          <span id="fb-7" class="feedback"></span>
        </span>
      </div>
      <div id="exp-7"></div>

      <div class="q-row" id="q-row-8">
        <span class="q-num">8.</span>
        <span class="q-content">Released sewage rather than nutrients from agricultural area increase the level of Nitrogen.
          <select class="input-select" id="ans-8" onchange="updateNav(8)">
            <option value="">Select...</option>
            <option value="A">A</option><option value="B">B</option><option value="C">C</option>
          </select>
          <span id="fb-8" class="feedback"></span>
        </span>
      </div>
      <div id="exp-8"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Questions 9-13: Do the following statements agree with the information given in Reading Passage?<br>
        In boxes 9-13 on your answer sheet, write:<br>
        <strong>TRUE</strong> if the statement agrees with the information<br>
        <strong>FALSE</strong> if the statement contradicts the information<br>
        <strong>NOT GIVEN</strong> if there is no information on this
      </div>

      <div class="q-row" id="q-row-9">
        <span class="q-num">9.</span>
        <span class="q-content">Everyone agrees with 'pouring water into the sea is harmless enough'.
          <select class="input-select" id="ans-9" onchange="updateNav(9)">
            <option value="">Select...</option>
            <option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-9" class="feedback"></span>
        </span>
      </div>
      <div id="exp-9"></div>

      <div class="q-row" id="q-row-10">
        <span class="q-num">10.</span>
        <span class="q-content">Nitrogen was poured in from different types of crops as water flows through.
          <select class="input-select" id="ans-10" onchange="updateNav(10)">
            <option value="">Select...</option>
            <option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-10" class="feedback"></span>
        </span>
      </div>
      <div id="exp-10"></div>

      <div class="q-row" id="q-row-11">
        <span class="q-num">11.</span>
        <span class="q-content">Everglades restoration project can be effective regardless of the cause of the pollution.
          <select class="input-select" id="ans-11" onchange="updateNav(11)">
            <option value="">Select...</option>
            <option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-11" class="feedback"></span>
        </span>
      </div>
      <div id="exp-11"></div>

      <div class="q-row" id="q-row-12">
        <span class="q-num">12.</span>
        <span class="q-content">Human has changed Florida Bay where old image before 1950s is unrecalled.
          <select class="input-select" id="ans-12" onchange="updateNav(12)">
            <option value="">Select...</option>
            <option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-12" class="feedback"></span>
        </span>
      </div>
      <div id="exp-12"></div>

      <div class="q-row" id="q-row-13">
        <span class="q-num">13.</span>
        <span class="q-content">Tourism contributes fundamentally to the Florida Bay area.
          <select class="input-select" id="ans-13" onchange="updateNav(13)">
            <option value="">Select...</option>
            <option value="TRUE">TRUE</option><option value="FALSE">FALSE</option><option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-13" class="feedback"></span>
        </span>
      </div>
      <div id="exp-13"></div>
    </div>
  `,

  // Danh sách đáp án được chuẩn hóa cú pháp thành công
  correctAnswers: {
    1: "E",
    2: "C",
    3: "H",
    4: "B",
    5: "C",
    6: "B",
    7: "B",
    8: "A",
    9: "FALSE",
    10: "NOT GIVEN",
    11: "FALSE",
    12: "TRUE",
    13: "TRUE"
  },

  // Hệ thống giải thích, từ vựng và định vị ID ev-X chính xác
  explanations: {
    1: {
      translation: "Cỏ biển có khả năng chống chịu tốt hơn với mức độ mặn của nước trong Vịnh.",
      exp: "Đoạn E dẫn lời Brian Lapointe: <i>'He thinks seagrasses can tolerate much higher levels of salinity...'</i>. Cụm 'can tolerate' được paraphrase thành 'more resistant', nghĩa là cỏ biển chịu mặn tốt hơn mức hiện tại.",
      vocab: "<b>Tolerate (v)</b>: Chịu đựng | <b>Salinity (n)</b>: Độ mặn | <b>Resistant (adj)</b>: Kháng, chống chịu",
      colorClass: "ev-1"
    },
    2: {
      translation: "Tầm quan trọng của việc tìm ra một lý do cụ thể trong cuộc tranh cãi.",
      exp: "Đoạn C đề cập đến tranh cãi (matter of much debate) và khẳng định câu trả lời có tầm quan trọng lớn (no small consequence) vì liên quan đến khoản ngân sách 8 tỷ USD của chính phủ.",
      vocab: "<b>Consequence (n)</b>: Tầm quan trọng, hệ quả | <b>Controversy (n)</b>: Cuộc tranh cãi",
      colorClass: "ev-2"
    },
    3: {
      translation: "Những đề xuất đắt đỏ được đưa ra để giải quyết tình trạng tiến thoái lưỡng nan về nitơ.",
      exp: "Đoạn H đưa ra các giải pháp xử lý Nitơ (hệ thống đầm lầy nhân tạo, thay thế bể tự hoại) và nhấn mạnh chi phí rất đắt đỏ (costly / $650m).",
      vocab: "<b>Costly (adj)</b>: Đắt đỏ | <b>Proposal (n)</b>: Đề xuất | <b>Dilemma (n)</b>: Thế tiến thoái lưỡng nan",
      colorClass: "ev-3"
    },
    4: {
      translation: "Một số liệu thống kê về những thay đổi sinh thái ở cả khu vực san hô và các loài.",
      exp: "Đoạn B chứa số liệu thống kê cụ thể: tỷ lệ bao phủ của san hô giảm 40% (coral cover has dropped by 40%) và 1/3 số loài san hô đã biến mất (a third of the coral species have gone).",
      vocab: "<b>Statistic (n)</b>: Số liệu thống kê | <b>Species (n)</b>: Loài sinh vật",
      colorClass: "ev-4"
    },
    5: {
      translation: "Hệ thống thoát nước ở Everglades thực chất dẫn đến độ mặn cao trong Vịnh.",
      exp: "Trong đoạn D, Zieman cho rằng hệ thống thoát nước (drainage) làm giảm dòng nước ngọt, khiến nước trong Vịnh trở nên mặn hơn (more saline).",
      vocab: "<b>Drainage (n)</b>: Hệ thống thoát nước | <b>Saline (adj)</b>: Mặn",
      colorClass: "ev-5"
    },
    6: {
      translation: "Việc phục hồi nguồn nước có nồng độ nitơ cao sẽ gây ra nhiều tác dụng phụ về sinh thái hơn.",
      exp: "Trong đoạn E, Lapointe lập luận rằng việc khôi phục dòng nước ngọt chứa nhiều nitơ sẽ gây tổn hại nặng nề hơn cho rạn san hô (do more damage to the reef).",
      vocab: "<b>Side effect (n)</b>: Tác dụng phụ, tác hại kèm theo | <b>Restore (v)</b>: Phục hồi",
      colorClass: "ev-6"
    },
    7: {
      translation: "Nồng độ nitơ cao có thể do đất nông nghiệp gần đó gây ra.",
      exp: "Đoạn E dẫn lời Lapointe: nước chảy tràn từ các vùng đất nông nghiệp bón nhiều phân bón (well-fertilised farmlands) đã làm lượng nitơ tăng gấp 5 lần.",
      vocab: "<b>Runoff (n)</b>: Dòng chảy tràn | <b>Farmland (n)</b>: Đất nông nghiệp",
      colorClass: "ev-7"
    },
    8: {
      translation: "Nước thải xả ra hơn là chất dinh dưỡng từ khu vực nông nghiệp làm tăng nồng độ Nitơ.",
      exp: "Trong đoạn F, Kruczynski cho rằng nitơ từ nông nghiệp không phải nguyên nhân chính, mà nước thải từ các bể tự hoại địa phương (local sewage discharges) mới là một phần của vấn đề.",
      vocab: "<b>Sewage discharge (n)</b>: Sự xả nước thải | <b>Agricultural (adj)</b>: Thuộc nông nghiệp",
      colorClass: "ev-8"
    },
    9: {
      translation: "Mọi người đều đồng ý rằng 'đổ nước vào biển là đủ vô hại'.",
      exp: "Đoạn A nêu rõ vấn đề này đang gây tranh cãi gay gắt (highly controversial) và các nhà nghiên cứu đang bất đồng ý kiến (researchers are divided). Thông tin trái ngược với 'Everyone agrees'.",
      tip: "🚩 <b>Bẫy IELTS:</b> Từ mang tính tuyệt đối như 'Everyone' thường báo hiệu đáp án FALSE hoặc NO.",
      colorClass: "ev-9"
    },
    10: {
      translation: "Nitơ được đổ vào từ các loại cây trồng khác nhau khi nước chảy qua.",
      exp: "Đoạn F có đề cập nước chảy qua cây trồng (water flowing off crops), nhưng bài KHÔNG hề đề cập đến việc có 'các loại cây trồng khác nhau' (different types of crops) hay không.",
      tip: "🚩 <b>Bẫy IELTS:</b> Thêm tính từ so sánh/phân loại ('different types') mà bài đọc không đề cập -> Chọn NOT GIVEN.",
      colorClass: "ev-10"
    },
    11: {
      translation: "Dự án phục hồi Everglades có thể hiệu quả bất kể nguyên nhân gây ô nhiễm là gì.",
      exp: "Đoạn G khẳng định hiệu quả phụ thuộc vào nguyên nhân: Nếu do độ mặn thì dự án có lợi, nhưng nếu do Nitơ thì dự án sẽ làm mọi thứ tồi tệ hơn (make matters much worse). Thông tin trái ngược với 'regardless of the cause'.",
      vocab: "<b>Regardless of</b>: Bất kể, không phụ thuộc vào",
      colorClass: "ev-11"
    },
    12: {
      translation: "Con người đã thay đổi Vịnh Florida đến mức hình ảnh cũ trước những năm 1950 không thể nhớ lại/biết được.",
      exp: "Đoạn I nêu rõ: <i>'Nobody knows what Florida Bay was like before the 1950s...'</i> (Không ai biết Vịnh Florida trông như thế nào trước những năm 1950), hoàn toàn trùng khớp với ý 'old image is unrecalled'.",
      vocab: "<b>Unrecalled (adj)</b>: Không thể nhớ lại / không ai biết",
      colorClass: "ev-12"
    },
    13: {
      translation: "Du lịch đóng góp một phần căn bản/nền tảng cho khu vực Vịnh Florida.",
      exp: "Đoạn J xác nhận: <i>'The economy of the Florida Keys depends on tourism'</i> (Nền kinh tế phụ thuộc vào du lịch). Ý 'depends on' tương đương với 'contributes fundamentally'.",
      vocab: "<b>Fundamentally (adv)</b>: Một cách căn bản / nền tảng",
      colorClass: "ev-13"
    }
  }
};
