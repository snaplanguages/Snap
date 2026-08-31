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

  // =========================================================================
// BẢN CẬP NHẬT EXPLANATIONS CHO FILE QUIZ1-READING
// =========================================================================
// Hướng dẫn: Bạn hãy copy toàn bộ block "explanations: { ... }" dưới đây 
// và ghi đè vào phần "explanations" cũ trong file của bạn.
// Bản cập nhật này đã tích hợp toàn bộ các phần chi tiết nhất từ file explanation
// (loại câu hỏi, bảng so sánh từ khóa paraphrase, lập luận chi tiết, phân tích bẫy,
// phân tích lỗi sai, ngữ pháp, bài học...) nhưng vẫn giữ nguyên cấu trúc các key 
// (translation, exp, vocab/tip, colorClass) để đảm bảo không bị lỗi hệ thống.

explanations: {
  1: {
    translation: `<b>Câu hỏi:</b> Cỏ biển hóa ra có khả năng chịu được mức độ mặn của nước trong Vịnh tốt hơn.<br><br><b>Nói đơn giản:</b> Đoạn nào cho biết rằng <b>seagrasses chịu được nước có độ mặn cao hơn người ta tưởng?</b>`,
    exp: `<b>Dạng câu hỏi:</b> Matching Information — Tìm đoạn chứa thông tin
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph E
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>seagrasses</b>: cỏ biển</li>
  <li><b>can tolerate</b>: có thể chịu đựng/chịu được</li>
  <li><b>much higher levels</b>: mức độ cao hơn nhiều</li>
  <li><b>salinity</b>: độ mặn</li>
  <li><b>than the bay actually displays</b>: so với mức độ mặn thực tế của Vịnh</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Cỏ biển có thể chịu được mức độ mặn cao hơn rất nhiều so với mức độ mặn hiện tại của Vịnh.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">more resistant</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">can tolerate</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Paraphrase về khả năng chịu đựng/chống chịu.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">saline water level</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">levels of salinity</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Đổi cách diễn đạt giữa tính từ (saline) và danh từ (salinity).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">more resistant</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">much higher levels ... can tolerate</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Cùng ý nghĩa: có thể chịu đựng được mức độ mặn cao hơn nhiều.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi nói:</b> Cỏ biển chịu được độ mặn tốt hơn.
<br>
- <b>Bài đọc nói:</b> Cỏ biển có thể chịu đựng mức độ mặn cao hơn nhiều so với thực tế Vịnh đang hiển thị.
<br>
→ Hai thông tin khớp hoàn hảo về ý nghĩa. Do đó đáp án chắc chắn là <b>E</b>.
<br><br>
<b>🚫 Phân tích các đoạn khác (Distractors):</b>
<br>
- <b>A:</b> Chỉ nói về sự tranh cãi và tác động của việc đổ nước ngọt vào Vịnh nói chung → không đề cập khả năng chịu mặn của cỏ biển.
<br>
- <b>B:</b> Nói về sự suy giảm san hô và rạn san hô → không liên quan đến cỏ biển.
<br>
- <b>C:</b> Nói về dự án phục hồi vùng Everglades trị giá 8 tỷ đô → không có thông tin về cỏ biển chịu mặn.
<br>
- <b>D:</b> Nói rằng sự thiếu hụt nước ngọt làm tăng độ mặn và <i>giết chết cỏ biển</i> (kills the seagrasses) → Ý này dễ làm bạn nhầm lẫn, nhưng nó chỉ ra tác hại chứ không hề nói cỏ biển có khả năng chịu mặn tốt hơn dự kiến.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Đừng tìm kiếm từ khóa "resistant" một cách máy móc trên bài đọc. Bài đọc hoàn toàn không dùng từ này mà thay vào đó sử dụng động từ <b>tolerate</b>. Đây là kỹ năng nhận diện paraphrase cốt lõi trong IELTS Reading.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Nếu bạn chọn sai, bạn thường mắc phải 1 trong 3 lỗi sau:
<ol>
  <li>Không nhận diện được từ đồng nghĩa: <b>tolerate = chịu đựng (resistant)</b>.</li>
  <li>Bị bẫy từ khóa: Tìm kiếm các từ giống hệt trong câu hỏi mà bỏ qua việc đọc hiểu ý nghĩa.</li>
  <li><b>Nhầm lẫn giữa đoạn D và đoạn E:</b> Thấy đoạn D nhắc đến độ mặn cao giết chết cỏ biển liền chọn D. Hãy nhớ: Đoạn D nói <i>độ mặn cao gây hại</i>, còn đoạn E mới là nơi đưa ra thông tin <i>cỏ biển chịu mặn tốt hơn mức hiện tại của Vịnh</i>.</li>
</ol>
<br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- <b>can tolerate</b>: động từ khuyết thiếu (modal verb) + V nguyên mẫu.
<br>
- <b>much higher levels of salinity</b>: sử dụng từ nhấn mạnh so sánh hơn <i>much + comparative adjective + noun phrase</i>. "higher" tạo sự so sánh giữa mức độ mặn cỏ biển có thể chịu được với độ mặn thực tế của Vịnh.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Không bao giờ tìm kiếm từ vựng y hệt câu hỏi. Hãy xây dựng thói quen tìm kiếm <b>cụm ý nghĩa tương đương (concept matching)</b>.
<br>
<i>Công thức:</i> <b>Ý tưởng câu hỏi (Question idea) → Nhận diện Paraphrase → Đối chiếu dẫn chứng (Evidence) → Đáp án chính xác.</b>`,
    vocab: `<b>tolerate (v)</b>: chịu đựng, chống chịu<br><b>salinity (n)</b>: độ mặn<br><b>resistant (adj)</b>: có khả năng kháng/chống chịu<br><b>level (n)</b>: mức độ`,
    colorClass: "ev-1"
  },
  2: {
    translation: `<b>Câu hỏi:</b> Tầm quan trọng của việc tìm ra một nguyên nhân cụ thể trong cuộc tranh cãi.<br><br><b>Nói đơn giản:</b> Tại sao việc xác định chính xác nguyên nhân gây ra sự thay đổi sinh thái lại quan trọng và có ý nghĩa lớn?`,
    exp: `<b>Dạng câu hỏi:</b> Matching Information — Tìm đoạn chứa thông tin
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph C
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"What is causing such ecological change is a matter of much debate. And the answer is of no small consequence."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>What is causing such ecological change</b>: Điều gì đang gây ra sự thay đổi sinh thái này (tương đương với việc tìm ra một nguyên nhân cụ thể).</li>
  <li><b>a matter of much debate</b>: vấn đề đang được tranh luận rất nhiều (tranh cãi/controversy).</li>
  <li><b>the answer is of no small consequence</b>: câu trả lời có tầm quan trọng/hệ quả không hề nhỏ (significance).</li>
</ul>
👉 <i>Phân tích sâu:</i> Bài đọc giải thích lý do tầm quan trọng này là vì chính phủ Mỹ dự định chi tới <b>8 tỷ USD ($8 billion)</b> trong vòng 30 năm tới để phục hồi Everglades. Việc biết chính xác nguyên nhân không chỉ dừng lại ở mặt học thuật, mà quyết định hiệu quả của dự án khổng lồ này.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">specific reason</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">what is causing such ecological change</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Nguyên nhân gây ra sự thay đổi sinh thái = lý do cụ thể.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">significance</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">of no small consequence</td>
      <td style="padding: 8px; border: 1px solid #ddd;">"Hậu quả không hề nhỏ" = vô cùng quan trọng, có ý nghĩa lớn lao.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">controversy</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">matter of much debate</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Vấn đề tranh luận nhiều = cuộc tranh cãi.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi tìm:</b> Đoạn nói về tầm quan trọng của việc tìm ra nguyên nhân cụ thể trong cuộc tranh cãi.
<br>
- <b>Bài đọc đoạn C đáp ứng đủ 2 vế:</b> (1) Nguyên nhân gây ra sự thay đổi đang bị tranh cãi gay gắt (matter of much debate), và (2) Câu trả lời có ý nghĩa cực kỳ quan trọng (no small consequence) gắn liền với dự án 8 tỷ đô của chính phủ.
<br>
→ Do đó đáp án là <b>C</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Cụm từ <i>"no small consequence"</i> thường bị học viên dịch nhầm là "không có hậu quả nhỏ" hoặc "hậu quả không đáng kể". Đây là cách nói giảm nói tránh (litotes) trong tiếng Anh nhằm nhấn mạnh: <b>"of no small consequence" = extremely important / highly significant</b>.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Nếu bạn chọn sai, có thể bạn đã nhìn thấy từ khóa "debate" ở đoạn A hoặc đoạn J và vội vã chọn ngay. Hãy nhớ rằng dạng bài Matching Information yêu cầu toàn bộ các ý của câu hỏi phải được thỏa mãn trong đoạn văn, chứ không chỉ một từ đơn lẻ. Chỉ có đoạn C mới phân tích sâu tại sao việc tìm ra câu trả lời lại quan trọng đối với thực tế và kinh tế.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Khi câu hỏi chứa các từ chỉ tầm quan trọng/hệ quả như <i>significance, importance, value, consequence, impact, effect, crucial, key...</i>, hãy lập tức quét bài đọc để tìm các biểu đạt tương đương, đặc biệt là các cụm từ mang tính nhấn mạnh như "of no small consequence".`,
    vocab: `<b>consequence (n)</b>: hệ quả, tầm quan trọng<br><b>of no small consequence</b>: cực kỳ quan trọng, có tầm ảnh hưởng lớn<br><b>debate (n/v)</b>: tranh luận<br><b>ecological (adj)</b>: thuộc về sinh thái<br><b>revitalise (v)</b>: phục hồi, đem lại sức sống mới`,
    colorClass: "ev-2"
  },
  3: {
    translation: `<b>Câu hỏi:</b> Những đề xuất tốn kém được đưa ra để giải quyết vấn đề nan giải về nitơ.<br><br><b>Nói đơn giản:</b> Đoạn nào nói về các giải pháp xử lý lượng nitơ dư thừa nhưng các biện pháp này đều vô cùng đắt đỏ?`,
    exp: `<b>Dạng câu hỏi:</b> Matching Information — Tìm đoạn chứa thông tin
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph H
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"the cure is to remove nitrogen from farmland or sewage discharges, or perhaps both... That would be costly. So too would be the replacement of cesspits with proper sewerage—one estimate puts the cost at $650m."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>remove nitrogen from farmland or sewage discharges</b>: giải pháp loại bỏ nitơ khỏi đất nông nghiệp hoặc nguồn nước thải (các đề xuất giải quyết vấn đề nitơ).</li>
  <li><b>That would be costly</b>: Việc đó sẽ rất tốn kém (expensive).</li>
  <li><b>replacement of cesspits with proper sewerage... cost at $650m</b>: việc thay thế các bể chứa chất thải bằng hệ thống thoát nước chuẩn quy mô... ước tính chi phí lên đến 650 triệu USD (minh họa cụ thể cho sự đắt đỏ).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Giải pháp điều trị là loại bỏ nitơ từ đất canh tác hoặc nước thải sinh hoạt, hoặc cả hai. Tuy nhiên điều đó rất đắt đỏ, ví dụ việc thay thế các bể phốt tự hoại bằng hệ thống xử lý nước thải chuẩn mực được ước tính tốn khoảng 650 triệu đô la.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">expensive</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">costly / one estimate puts the cost at $650m</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Đắt đỏ / Đưa ra con số cụ thể 650 triệu USD để chứng minh chi phí cực cao.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">proposals</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">the cure / remove nitrogen / replacement...</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Phương thuốc/giải pháp cứu chữa, đề xuất thay thế bể tự hoại = các đề xuất phương án giải quyết.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">nitrogen dilemma</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">if this second hypothesis proves correct... (hypothesis of nitrogen)</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Thế lưỡng nan về nitơ (được coi là giả thuyết thứ hai gây suy thoái sinh thái ở Vịnh).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn H trình bày rõ ràng: Nếu giả thuyết thứ hai (Nitơ là thủ phạm) đúng, thì giải pháp (cure/proposal) là loại bỏ nó.
<br>
- Tuy nhiên, các đề xuất này đi kèm chi phí vô cùng lớn được nhắc đến trực tiếp (costly, $650m).
<br>
→ Đoạn H chứa đầy đủ và trọn vẹn combo ý nghĩa của câu hỏi. Do đó đáp án là <b>H</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Đừng vội chọn đoạn E hoặc đoạn F chỉ vì thấy xuất hiện ngập tràn từ khóa <i>"nitrogen"</i> hay <i>"farmland"</i>. Đoạn E và F chỉ tập trung giải thích <b>nguyên nhân và giả thuyết</b> vì sao nitơ tăng cao (do phân bón hoặc nước thải sinh hoạt) chứ chưa hề đưa ra <b>các giải pháp cụ thể và chi phí đắt đỏ</b> để xử lý nó như đoạn H.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Đối với dạng bài Matching Information có chứa nhiều thành phần thông tin kết hợp (Nitơ + Giải pháp + Chi phí đắt đỏ), bạn phải tìm được <b>"combo ý nghĩa"</b> chứ không được dựa dẫm vào một từ khóa đơn lẻ. Hãy luôn kiên nhẫn kiểm tra xem tất cả các khía cạnh trong câu hỏi đã xuất hiện đủ trong đoạn văn chưa trước khi đưa ra quyết định cuối cùng.`,
    vocab: `<b>costly (adj)</b>: đắt đỏ, tốn kém<br><b>cure (n/v)</b>: giải pháp, phương thuốc cứu chữa<br><b>sewage discharge (n)</b>: sự xả nước thải sinh hoạt<br><b>cesspit (n)</b>: bể phốt tự hoại/bể chứa chất thải dưới đất<br><b>proper sewerage (n)</b>: hệ thống cống rãnh, thoát nước đúng quy chuẩn<br><b>estimate (n/v)</b>: ước tính, con số ước lượng`,
    colorClass: "ev-3"
  },
  4: {
    translation: `<b>Câu hỏi:</b> Một số liệu thống kê cho thấy sự thay đổi sinh thái ở cả diện tích san hô và số lượng loài san hô.<br><br><b>Nói đơn giản:</b> Tìm đoạn văn đưa ra con số thống kê cụ thể về sự suy giảm sinh thái của san hô, bao gồm cả độ bao phủ (diện tích) lẫn số loài san hô bị biến mất.`,
    exp: `<b>Dạng câu hỏi:</b> Matching Information — Tìm đoạn chứa thông tin
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph B
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Since the 1980s, coral cover has dropped by 40%, and a third of the coral species have gone."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>Since the 1980s</b>: Từ những năm 1980 (mốc thời gian).</li>
  <li><b>coral cover has dropped by 40%</b>: độ bao phủ san hô (tương đương diện tích san hô) đã sụt giảm 40%.</li>
  <li><b>a third of the coral species have gone</b>: một phần ba số loài san hô đã biến mất (số lượng loài san hô).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Kể từ những năm 1980, độ phủ của rạn san hô đã giảm 40%, và một phần ba số loài san hô đã hoàn toàn biến mất.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">statistic</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">40% / a third (1/3)</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Số liệu thống kê phần trăm và phân số cụ thể.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">coral area</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">coral cover</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Độ phủ san hô đồng nghĩa với diện tích bề mặt san hô bao phủ.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">species</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">coral species</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Trùng khớp hoàn toàn về từ vựng (loài san hô).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">ecological changes</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">has dropped / have gone</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Mức độ bao phủ sụt giảm và các loài biến mất là biểu hiện rõ nét của sự thay đổi sinh thái theo hướng tiêu cực.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn B cung cấp trực tiếp các số liệu thống kê (40%, a third) liên quan chặt chẽ tới cả diện tích bao phủ san hô (coral cover) lẫn các loài san hô (coral species) bị tàn phá.
<br>
- Sự trùng khớp ý nghĩa này là tuyệt đối, không có đoạn nào khác nhắc đến thống kê của cả hai đối tượng này.
<br>
→ Do đó đáp án là <b>B</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Trong bài đọc xuất hiện cực kỳ nhiều con số thống kê khác như: <i>$8 billion</i> ở đoạn C, <i>750,000 acres</i> ở đoạn F, <i>$650m</i> ở đoạn H, <i>$2.5 billion</i> ở đoạn J. Tuy nhiên, bẫy ở đây là bạn chỉ đi scan số một cách mù quáng. Hãy luôn kiểm tra xem <b>con số thống kê đó đang bổ nghĩa cho thông tin gì</b>. Chỉ có duy nhất số liệu ở đoạn B là phản ánh về diện tích và loài san hô.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Khi câu hỏi chứa từ khóa <i>"a statistic"</i> (một số liệu thống kê), hãy nhanh chóng quét qua bài đọc để tìm các ký hiệu số, dấu phần trăm (%), phân số (a half, a third) hoặc số thập phân. Tuy nhiên, bước quyết định là phải đối chiếu ngữ cảnh của con số đó xem có khớp với chủ ngữ của câu hỏi hay không.`,
    vocab: `<b>cover (n)</b>: độ che phủ, diện tích bao phủ<br><b>species (n)</b>: loài, chủng loài sinh vật (dạng số ít và số nhiều giống nhau)<br><b>drop (v)</b>: giảm mạnh, sụt giảm<br><b>a third (n)</b>: một phần ba (1/3)<br><b>statistic (n)</b>: số liệu thống kê`,
    colorClass: "ev-4"
  },
  5: {
    translation: `<b>Câu hỏi:</b> Hệ thống thoát nước ở Everglades thực sự dẫn đến việc nước trong Vịnh có độ mặn cao.<br><br><b>Nói đơn giản:</b> Ai là người đưa ra ý kiến cho rằng hệ thống thoát nước suốt một thế kỷ qua tại Everglades là nguyên nhân khiến nước Vịnh Florida bị mặn hơn?`,
    exp: `<b>Dạng câu hỏi:</b> Matching Features / Matching People — Nối quan điểm với người phát biểu
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"The blame, he says, lies with a century of drainage in the Everglades... This has caused the flow of fresh water into Florida Bay to dwindle, making the water in the bay, overall, more saline."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>The blame, he says</b>: Sự đổ lỗi, ông ấy nói (trong đó "he" ở đây chính là nhà sinh thái học biển <b>Joseph Zieman</b> được giới thiệu ở đầu đoạn D).</li>
  <li><b>lies with a century of drainage in the Everglades</b>: nằm ở một thế kỷ thoát nước tại vùng đầm lầy Everglades (hệ thống thoát nước).</li>
  <li><b>caused the flow of fresh water ... to dwindle</b>: làm cho dòng nước ngọt chảy vào Vịnh bị cạn kiệt dần.</li>
  <li><b>making the water ... more saline</b>: khiến cho nước trong vịnh nhìn chung bị mặn hơn (nước có độ mặn cao).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Ông ấy (Zieman) nói rằng trách nhiệm thuộc về một thế kỷ thoát nước ở Everglades... Điều này đã làm dòng nước ngọt chảy vào vịnh Florida bị suy giảm, khiến nước vịnh nhìn chung mặn hơn.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">drainage system</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">a century of drainage</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Hệ thống thoát nước = hoạt động tiêu thoát nước kéo dài một thế kỷ.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">high salty water</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">more saline</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Nước mặn hơn = nước có độ mặn cao hơn (saline là tính từ của salt/salinity).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">actually results in</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">has caused ... making...</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Dẫn đến việc/gây ra việc... (mối quan hệ nguyên nhân - kết quả).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn D chỉ rõ chuỗi lập luận nguyên nhân - kết quả của <b>Joseph Zieman</b>:
<br>
  <i>Hệ thống thoát nước (Drainage) → Giảm nước ngọt (less freshwater) → Tăng độ mặn của nước Vịnh (more saline)</i>.
<br>
- Đối chiếu với danh sách các nhân vật đề bài cho:
  <ul>
    <li>A: Bill Kruczynski</li>
    <li>B: Brian Lapointe</li>
    <li>C: Joseph Zieman</li>
  </ul>
→ Do đó đáp án khớp hoàn hảo với <b>C</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Trong bài đọc, cả Joseph Zieman (đoạn D) và Brian Lapointe (đoạn E) đều thảo luận về "freshwater" và "salinity" (độ mặn). Tuy nhiên, quan điểm của họ hoàn toàn trái ngược nhau: Zieman cho rằng <i>thiếu nước ngọt gây độ mặn cao là vấn đề chính</i>; còn Lapointe lại bác bỏ và cho rằng cỏ biển chịu mặn rất tốt. Bạn phải phân biệt rõ <b>ai là người đổ lỗi cho hệ thống thoát nước gây ra nước mặn</b> để tránh chọn nhầm sang Lapointe.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Dạng bài Matching People yêu cầu bạn phải xác định được chính xác <b>Ai đã nói/làm cái gì (WHO said/did WHAT)</b>. Khi đọc, hãy dùng bút gạch chân tên riêng của nhân vật, sau đó khoanh vùng các động từ báo hiệu ý kiến như <i>thinks, believes, argues, says, disagrees, notes...</i> để nắm bắt đúng tư tưởng chủ đạo của họ.`,
    vocab: `<b>drainage (n)</b>: hệ thống thoát nước, sự tiêu thoát nước<br><b>dwindle (v)</b>: co lại, giảm dần, cạn kiệt dần<br><b>saline (adj)</b>: mặn, chứa muối<br><b>overall (adv)</b>: nhìn chung, tổng thể`,
    colorClass: "ev-5"
  },
  6: {
    translation: `<b>Câu hỏi:</b> Việc phục hồi nguồn nước có hàm lượng nitrogen cao sẽ gây thêm tác động tiêu cực đến hệ sinh thái.<br><br><b>Nói đơn giản:</b> Ai là người cảnh báo rằng việc bơm trả lại nguồn nước ngọt giàu nitơ sẽ phản tác dụng, gây tổn hại nghiêm trọng hơn cho rạn san hô?`,
    exp: `<b>Dạng câu hỏi:</b> Matching Features / Matching People — Nối quan điểm với người phát biểu
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph E
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"restoring freshwater rich in nitrogen will do more damage to the reef."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>restoring freshwater</b>: phục hồi nguồn nước ngọt (restoring water).</li>
  <li><b>rich in nitrogen</b>: giàu chất nitơ (high in nitrogen level).</li>
  <li><b>will do more damage to the reef</b>: sẽ gây ra nhiều thiệt hại hơn đối với rạn san hô (gây ra nhiều tác hại/tác động tiêu cực đến sinh thái).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Ông (Brian Lapointe) bổ sung rằng, vì san hô chỉ phát triển tốt ở vùng nước có nồng độ dinh dưỡng thấp, việc khôi phục nguồn nước ngọt giàu nitơ sẽ gây ra nhiều tổn hại hơn cho rạn san hô.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">restoring water</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">restoring freshwater</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Phục hồi nước = khôi phục dòng nước ngọt chảy vào vịnh.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">high nitrogen level</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">rich in nitrogen</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Nồng độ nitơ cao = giàu chất nitơ.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">ecological side effect</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">do more damage to the reef</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Gây hại thêm cho rạn san hô (rạn san hô là một phần hệ sinh thái quan trọng của vịnh).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Người đưa ra quan điểm này là nhà khoa học đại dương <b>Brian Lapointe</b> (được giới thiệu ở đầu đoạn E). Ông lo ngại rằng nước ngọt chảy qua đất nông nghiệp đã bị nhiễm nitơ nặng, nếu khôi phục dòng chảy này vào vịnh sẽ làm hại đến san hô (đòi hỏi môi trường nghèo dinh dưỡng).
<br>
- Đối chiếu danh sách nhân vật: B chính là Brian Lapointe.
<br>
→ Do đó đáp án là <b>B</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Bạn rất dễ bị nhầm lẫn giữa Joseph Zieman và Brian Lapointe vì cả hai đều nói về việc "khôi phục nước ngọt" (restoring freshwater).
<ul>
  <li><b>Zieman (đoạn D):</b> Cho rằng khôi phục dòng nước ngọt là <i>ý tưởng tốt</i> để giảm độ mặn.</li>
  <li><b>Lapointe (đoạn E):</b> Phản bác (disagrees) và cho rằng khôi phục dòng nước ngọt <i>giàu nitơ</i> sẽ phá hủy rạn san hô (tác hại sinh thái).</li>
</ul>
Do đó, câu hỏi bàn về tác hại sinh thái của nguồn nước giàu nitơ phải thuộc về <b>Lapointe (B)</b>.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Một từ khóa phổ biến (như <i>restoring water</i>) có thể xuất hiện trong lập luận của nhiều người khác nhau với thái độ trái ngược. Bạn luôn phải đọc trọn vẹn cả câu để xác định rõ lập trường của từng người: họ ủng hộ hay phản đối, điều đó mang lại lợi ích hay tác hại?`,
    vocab: `<b>rich in (adj)</b>: dồi dào, giàu cái gì đó<br><b>damage (v/n)</b>: gây hại, tàn phá<br><b>reef (n)</b>: rạn san hô, rặng đá ngầm<br><b>restore (v)</b>: khôi phục, phục hồi`,
    colorClass: "ev-6"
  },
  7: {
    translation: `<b>Câu hỏi:</b> Nồng độ nitrogen cao có thể được gây ra bởi các vùng đất nông nghiệp gần đó.<br><br><b>Nói đơn giản:</b> Ai cho rằng lượng nitơ tăng vọt gấp 5 lần trong Vịnh là do nguồn nước ngọt chảy tràn ra từ các khu đất nông nghiệp được bón nhiều phân bón lân cận?`,
    exp: `<b>Dạng câu hỏi:</b> Matching Features / Matching People — Nối quan điểm với người phát biểu
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph E
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Freshwater running off from well-fertilised farmlands, he says, caused a fivefold rise in nitrogen levels in the bay."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>Freshwater running off</b>: Nước ngọt chảy tràn ra (dòng chảy tràn).</li>
  <li><b>from well-fertilised farmlands</b>: từ các vùng đất nông nghiệp được bón nhiều phân bón (đất nông nghiệp gần đó).</li>
  <li><b>he says</b>: ông ấy nói (ở đây chủ ngữ "he" vẫn là <b>Brian Lapointe</b>).</li>
  <li><b>caused a fivefold rise in nitrogen levels</b>: đã gây ra sự gia tăng gấp 5 lần về nồng độ nitơ trong vịnh (nồng độ nitơ cao).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Nước ngọt chảy tràn từ những vùng đất nông nghiệp được bón phân nhiều, ông nói, đã khiến nồng độ nitơ trong vịnh tăng lên gấp 5 lần.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">high nitrogen levels</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">fivefold rise in nitrogen levels</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Lượng nitơ tăng gấp 5 lần = nồng độ nitơ cao.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">nearby farmland</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">well-fertilised farmlands</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Đất nông nghiệp được bón nhiều phân bón (nguyên nhân gây ô nhiễm chất dinh dưỡng).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">may be caused by</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">caused...</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Nguyên nhân trực tiếp dẫn tới sự gia tăng.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Brian Lapointe</b> lập luận trực tiếp rằng phân bón từ các vùng canh tác nông nghiệp lân cận ngấm vào dòng nước ngọt chảy tràn và làm nồng độ nitơ của vịnh tăng vọt gấp 5 lần.
<br>
- Nhân vật này tương ứng với đáp án <b>B</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Đoạn F cũng đề cập rất nhiều đến <i>"750,000 acres of heavily fertilised farmland"</i> và lượng nitơ chảy ra từ đây. Tuy nhiên, nếu bạn chọn Bill Kruczynski (nhân vật chính ở đoạn F) thì bạn đã sập bẫy. 
<br>
Lý do: Đoạn F viết <i>"Bill Kruczynski... is convinced that nitrogen from farmlands is not the chief problem."</i> (Kruczynski tin rằng nitơ từ đất nông nghiệp <b>không phải</b> vấn đề chính). 
<br>
Như vậy, người thực sự quy trách nhiệm cho đất nông nghiệp gây ra lượng nitơ cao phải là <b>Brian Lapointe (đoạn E) → B</b>.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Khi hai đoạn văn cạnh nhau cùng thảo luận về một chủ đề (farmland và nitrogen), hãy đặc biệt chú ý đến thái độ và quan điểm của từng người: Ai là người đồng ý/khởi xướng giả thuyết (Lapointe) và ai là người phản đối/bác bỏ giả thuyết đó (Kruczynski)? Việc phân định rạch ròi <b>"Speaker's Position"</b> giúp giải quyết triệt để các câu hỏi nhiễu của IELTS.`,
    vocab: `<b>runoff (n)</b>: dòng chảy tràn, nước mưa/nước ngọt chảy từ đất ra sông biển<br><b>well-fertilised (adj)</b>: được bón nhiều phân bón<br><b>fivefold (adj/adv)</b>: gấp 5 lần<br><b>nitrogen level (n)</b>: nồng độ/mức độ khí nitơ`,
    colorClass: "ev-7"
  },
  8: {
    translation: `<b>Câu hỏi:</b> Nước thải từ hệ thống thoát nước địa phương, chứ không phải nitrogen từ nông nghiệp, góp phần làm tăng vấn đề nitrogen.<br><br><b>Nói đơn giản:</b> Ai tin rằng nước thải sinh hoạt từ hàng ngàn bể tự hoại tại địa phương mới là tác nhân làm trầm trọng thêm vấn đề nitơ, chứ không phải do phân bón nông nghiệp?`,
    exp: `<b>Dạng câu hỏi:</b> Matching Features / Matching People — Nối quan điểm với người phát biểu
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Bill Kruczynski... is convinced that nitrogen from farmlands is not the chief problem... Dr Kruczynski thinks that increased nutrients arriving from local sewage discharges from the thousands of cesspits along the Florida Keys are part of the problem."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>nitrogen from farmlands is not the chief problem</b>: nitơ từ đất canh tác nông nghiệp không phải vấn đề chính (rather than agricultural nutrients).</li>
  <li><b>local sewage discharges from the thousands of cesspits</b>: nước thải sinh hoạt xả ra từ hàng ngàn bể phốt tự hoại tại địa phương (released sewage).</li>
  <li><b>are part of the problem</b>: là một phần của vấn đề (góp phần làm tăng vấn đề nitơ).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Bill Kruczynski... tin chắc rằng nitơ từ các trang trại không phải là vấn đề chính... Ông nghĩ rằng lượng chất dinh dưỡng gia tăng từ việc xả nước thải địa phương từ hàng ngàn bể phốt dọc theo Florida Keys là một phần của vấn đề.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">released sewage</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">local sewage discharges</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Xả thải nước thải địa phương = nước thải được thải ra.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">rather than agricultural nutrients</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">nitrogen from farmlands is not the chief problem</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Không phải do nguồn chất dinh dưỡng nitơ từ đất nông nghiệp (nhấn mạnh sự so sánh loại trừ).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">increase nitrogen problem</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">increased nutrients... part of the problem</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Tăng lượng chất dinh dưỡng (nitơ) xả ra vịnh và làm vấn đề thêm nghiêm trọng.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Bill Kruczynski</b> (nhà khoa học thuộc Cơ quan Bảo vệ Môi trường Mỹ EPA) đề xuất một nguyên nhân khác: Ông hạ thấp vai trò của nitơ nông nghiệp (not the chief problem) và nhấn mạnh vai trò tàn phá của nước thải từ các bể tự hoại dân cư (local sewage discharges).
<br>
- Tên nhân vật tương ứng với đáp án <b>A</b> (Bill Kruczynski).
<br><br>
<b>⚠️ Bẫy cực kỳ quan trọng (Opposing Opinions):</b>
<br>
Đây là một ví dụ kinh điển về cuộc tranh biện học thuật trong bài IELTS Reading:
<ul>
  <li><b>Brian Lapointe (đoạn E):</b> Đổ lỗi cho <i>farmland nitrogen</i> làm tăng nitơ gấp 5 lần.</li>
  <li><b>Bill Kruczynski (đoạn F):</b> Bác bỏ ý kiến trên và đổ lỗi cho <i>local sewage</i>.</li>
</ul>
Đề bài cố tình tạo ra hai câu hỏi liên tục (Câu 7 và Câu 8) để kiểm tra xem bạn có phân biệt được hai luồng quan điểm đối lập này hay không.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Các từ ngữ mang tính phủ định hoặc tương phản như: <i>not the chief problem, disagrees, however, but, instead, rather than...</i> thường là tín hiệu chỉ ra sự chuyển hướng lập trường hoặc quan điểm trái ngược. Khi bắt gặp những từ này, hãy đặc biệt cẩn trọng đọc kỹ câu sau đó để tránh sập bẫy thông tin đối lập.`,
    vocab: `<b>chief (adj)</b>: chính, chủ yếu, đứng đầu<br><b>sewage discharge (n)</b>: sự xả nước thải<br><b>nutrient (n)</b>: chất dinh dưỡng, chất nuôi dưỡng sinh vật (ở đây chỉ nitơ/phốt-pho gây ô nhiễm)<br><b>part of the problem</b>: một phần của vấn đề`,
    colorClass: "ev-8"
  },
  9: {
    translation: `<b>Câu hỏi:</b> Mọi người đều đồng ý rằng "đổ nước vào biển là hoàn toàn vô hại".<br><br><b>Nói đơn giản:</b> Có phải tất cả mọi người/các nhà nghiên cứu đều thống nhất rằng việc đổ thêm nước vào vịnh Florida là hành động hoàn toàn không gây ra tác hại gì?`,
    exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph A
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Pouring water into the sea sounds harmless enough. But in Florida Bay... it is proving highly controversial. That is because researchers are divided over whether it will help or hinder the plants and animals that live in the bay."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>pouring water into the sea</b>: đổ thêm nước vào biển.</li>
  <li><b>sounds harmless enough</b>: nghe có vẻ đủ vô hại (trùng khớp với mệnh đề trong câu hỏi).</li>
  <li><b>But ... it is proving highly controversial</b>: Nhưng thực tế hành động này đang gây ra tranh cãi vô cùng gay gắt.</li>
  <li><b>researchers are divided</b>: các nhà nghiên cứu đang bị chia rẽ sâu sắc / bất đồng ý kiến (mâu thuẫn hoàn toàn với "Everyone agrees").</li>
  <li><b>help or hinder</b>: giúp ích hay cản trở/gây hại (mâu thuẫn với "harmless").</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Đổ nước vào biển nghe có vẻ vô hại. Nhưng ở Vịnh Florida... nó đang chứng tỏ là một vấn đề gây tranh cãi gay gắt. Đó là vì các nhà nghiên cứu đang bất đồng ý kiến về việc liệu nó sẽ giúp ích hay gây hại cho các loài thực vật và động vật sống trong vịnh.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối quan hệ đối chiếu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Everyone agrees</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">researchers are divided / highly controversial</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">Mâu thuẫn hoàn toàn (Bất đồng vs Đồng ý).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">harmless</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">help or hinder</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">Mâu thuẫn (Có thể gây cản trở/gây hại vs Vô hại).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi khẳng định:</b> Mọi người đều đồng ý (Everyone agrees).
<br>
- <b>Bài đọc khẳng định:</b> Ý kiến bị chia rẽ sâu sắc (researchers are divided) và vấn đề này cực kỳ tranh cãi (controversial).
<br>
→ Hai luồng thông tin phủ định nhau trực tiếp. Do đó đáp án chắc chắn phải là <b>FALSE</b>.
<br><br>
<b>🔍 Phân biệt rạch ròi FALSE và NOT GIVEN:</b>
<br>
- Nếu bài đọc chỉ nói "Việc đổ nước vào vịnh đang được tiến hành" và hoàn toàn không đề cập đến thái độ đồng tình hay phản đối của mọi người → đáp án sẽ là <i>NOT GIVEN</i>.
<br>
- Nhưng ở đây bài đọc khẳng định rõ ràng có sự bất đồng ý kiến (divided, controversial). Điều này bác bỏ hoàn toàn sự thống nhất (Everyone agrees). Vì vậy đáp án phải là <i>FALSE</i>.
<br><br>
<b>⚠️ Bẫy IELTS cần lưu ý (Trap):</b>
<br>
Hãy cẩn giác với các từ mang tính tuyệt đối như <b>Everyone, all, always, only, completely...</b> xuất hiện trong câu hỏi TFNG. Những từ này làm thu hẹp phạm vi đúng của câu hỏi xuống mức tối đa. Chỉ cần bài đọc chỉ ra một sự bất đồng nhỏ hoặc một trường hợp ngoại lệ, câu hỏi lập tức trở thành <b>FALSE</b>. Tuy nhiên, không được đoán mò mà phải luôn tìm thấy bằng chứng đối lập (như "researchers are divided").`,
    tip: `🚩 <b>Bẫy IELTS:</b> Từ mang tính tuyệt đối như 'Everyone' thường báo hiệu đáp án FALSE hoặc NO. Tuy nhiên hãy luôn tìm dẫn chứng đối lập rõ ràng (divided, controversial).<br><br><b>Từ vựng quan trọng:</b><br><b>harmless (adj)</b>: vô hại<br><b>controversial (adj)</b>: gây tranh cãi<br><b>divided (adj)</b>: bị chia rẽ, bất đồng ý kiến<br><b>hinder (v)</b>: cản trở, gây hại`,
    colorClass: "ev-9"
  },
  10: {
    translation: `<b>Câu hỏi:</b> Nitơ được đưa vào từ nhiều loại cây trồng khác nhau khi nước chảy qua.<br><br><b>Nói đơn giản:</b> Có phải lượng nitơ chảy vào vịnh là do nước chảy qua nhiều loại cây trồng khác nhau (different types of crops)?`,
    exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"The water flowing off crops that are grown on the 750,000 acres of heavily fertilised farmland... is rich in nitrogen"</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>The water flowing off crops</b>: Nước chảy ra từ cây trồng (trùng khớp với "water flows through crops").</li>
  <li><b>750,000 acres of heavily fertilised farmland</b>: 750,000 mẫu đất nông nghiệp bón nhiều phân bón.</li>
  <li><b>is rich in nitrogen</b>: rất giàu chất nitơ (trùng với "nitrogen was poured in").</li>
  <li><b>different types of crops</b>: bài đọc hoàn toàn KHÔNG đề cập đến việc có "nhiều loại cây trồng khác nhau" hay không.</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Nước chảy ra từ các loại cây trồng được trồng trên 750.000 mẫu đất nông nghiệp được bón phân nhiều... rất giàu nitơ.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thành phần trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thành phần trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Kết quả đối chiếu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">nitrogen was poured in</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">is rich in nitrogen</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp (Đúng)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">water flows through / flowing off</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">water flowing off</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp (Đúng)</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">different types of crops</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic; color: #d32f2f;">crops (only)</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #e65100;">Không có thông tin (Missing)</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Mặc dù phần lớn thông tin trong câu hỏi đều chính xác (nước chảy qua cây trồng mang theo lượng nitơ lớn đổ vào vịnh), tuy nhiên câu hỏi có thêm một chi tiết phân loại: <b>different types of crops</b> (các loại cây trồng khác nhau).
<br>
- Bài đọc chỉ dùng từ "crops" chung chung, hoàn toàn không xác nhận cây trồng ở đây là một loại hay nhiều loại khác nhau. Do không thể kiểm chứng được chi tiết này là đúng hay sai dựa vào bài đọc, đáp án bắt buộc phải là <b>NOT GIVEN</b>.
<br><br>
<b>🔍 Phân biệt rạch ròi FALSE và NOT GIVEN:</b>
<br>
- Bạn chỉ chọn <i>FALSE</i> nếu bài đọc phủ định chi tiết này, ví dụ bài đọc viết: "Tất cả 750.000 mẫu đất này chỉ độc canh một loại cây duy nhất" (all lands were planted with a single crop).
<br>
- Vì bài đọc hoàn toàn im lặng, không đưa ra bất cứ manh mối nào về tính đa dạng của cây trồng, nên ta không thể kết luận nó đúng hay sai → Chọn <i>NOT GIVEN</i>.
<br><br>
<b>⚠️ Bẫy IELTS cần lưu ý (Trap):</b>
<br>
Đây là một kiểu bẫy cực kỳ tinh vi và phổ biến nhất của IELTS Reading:
<center><b>TRUE information + extra unsupported information = NOT GIVEN</b></center>
Đề bài sẽ viết một câu dài có khoảng 80-90% thông tin khớp hoàn toàn với bài đọc, nhưng cố tình lồng ghép thêm một tính từ phân loại hoặc so sánh (như <i>different types, unique, main, the most...</i>) mà bài đọc không nhắc tới. Đừng chỉ thấy đa số từ khóa khớp mà chọn TRUE! Hãy kiểm tra kỹ từng từ bổ nghĩa.`,
    tip: `🚩 <b>Bẫy IELTS:</b> Việc thêm thắt các tính từ so sánh, phân loại (như 'different types') mà bài đọc không đề cập là chiêu trò tạo đáp án NOT GIVEN kinh điển.<br><br><b>Từ vựng quan trọng:</b><br><b>crop (n)</b>: cây trồng, hoa màu<br><b>farmland (n)</b>: đất canh tác nông nghiệp<br><b>heavily fertilised (adj)</b>: được bón phân hóa học cực kỳ nhiều`,
    colorClass: "ev-10"
  },
  11: {
    translation: `<b>Câu hỏi:</b> Dự án phục hồi Everglades có thể hiệu quả bất kể nguyên nhân gây ô nhiễm là gì.<br><br><b>Nói đơn giản:</b> Liệu dự án phục hồi đầm lầy Everglades có mang lại hiệu quả tốt trong mọi trường hợp, cho dù nguyên nhân gốc rễ gây ra suy thoái sinh thái ở vịnh là gì đi chăng nữa?`,
    exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph G
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"If increased salinity is the main problem, the bay’s ecology will benefit from the Everglades restoration project. If, however, nitrogen is the problem, increasing the flow of freshwater could make matters much worse."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>If increased salinity is the main problem</b>: Nếu tăng độ mặn là vấn đề chính.</li>
  <li><b>the bay’s ecology will benefit...</b>: hệ sinh thái của vịnh sẽ được hưởng lợi từ dự án phục hồi Everglades (dự án hiệu quả).</li>
  <li><b>If, however, nitrogen is the problem</b>: Tuy nhiên, nếu nitơ mới là vấn đề thực sự.</li>
  <li><b>increasing the flow of freshwater could make matters much worse</b>: việc tăng dòng chảy nước ngọt (bản chất của dự án phục hồi) có thể khiến tình hình trở nên tồi tệ hơn nhiều (dự án phản tác dụng/gây hại).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Nếu độ mặn gia tăng là vấn đề chính, hệ sinh thái của vịnh sẽ được hưởng lợi từ dự án phục hồi Everglades. Tuy nhiên, nếu nitơ là vấn đề, việc tăng dòng chảy nước ngọt có thể khiến mọi việc tồi tệ hơn nhiều.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Thông tin trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối quan hệ đối chiếu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">regardless of the cause</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">If salinity is the problem... / If nitrogen is...</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">Mâu thuẫn trực tiếp (Bất kể nguyên nhân vs Phụ thuộc hoàn toàn vào nguyên nhân).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">can be effective (always positive)</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">will benefit OR make matters much worse</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">Mâu thuẫn (Luôn có lợi vs Có thể có lợi hoặc cực kỳ có hại).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi khẳng định:</b> Dự án sẽ hiệu quả <i>bất kể nguyên nhân gây ô nhiễm là gì</i> (regardless of the cause).
<br>
- <b>Bài đọc chỉ ra logic có điều kiện (conditional logic):</b> Kết quả phụ thuộc hoàn toàn vào nguyên nhân. Nếu do độ mặn thì có lợi (benefit), nhưng nếu do nitơ thì sẽ làm tình hình tồi tệ hơn nhiều (make matters much worse).
<br>
→ Thông tin mâu thuẫn trực tiếp 100%. Do đó đáp án chắc chắn là <b>FALSE</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Cụm từ <i>"regardless of"</i> (bất kể, không quan tâm tới) là một bẫy logic cực mạnh. Khi bài đọc trình bày cấu trúc song song mang tính giả định: <b>IF A → X, IF B → Y</b> (với X và Y trái ngược nhau), điều đó có nghĩa là kết quả cuối cùng bị phụ thuộc hoàn toàn vào điều kiện đầu vào. Lập luận này phủ định hoàn toàn từ "regardless of".
<br><br>
<b>📘 Ngữ pháp quan trọng:</b>
<br>
Bài đọc sử dụng nhuần nhuyễn cấu trúc câu điều kiện loại 1: <b>If + S + V (present simple), S + will + V (bare)</b> để biểu thị kết quả thực tế có thể xảy ra.
<ul>
  <li><i>If increased salinity is the main problem, the bay's ecology will benefit...</i></li>
  <li>Từ nối phản phản đề: <b>If, however, ...</b> được chèn giữa chủ ngữ và động từ để tạo sự tương phản sắc nét với giả thuyết trước đó.</li>
</ul>
<br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Hãy đặc biệt nhạy cảm với các cấu trúc câu điều kiện (If) và các từ chỉ sự độc lập/phụ thuộc (regardless, depend on, rely on). Nếu câu hỏi nói kết quả là cố định bất chấp điều kiện, còn bài đọc nói kết quả biến đổi phụ thuộc điều kiện → Hãy tự tin chọn <b>FALSE</b>.`,
    vocab: `<b>regardless of</b>: bất kể, bất chấp, không quan tâm<br><b>benefit (v)</b>: có lợi, được hưởng lợi từ<br><b>make matters worse</b>: làm cho tình hình tồi tệ hơn<br><b>restoration (n)</b>: sự phục hồi, trùng tu`,
    colorClass: "ev-11"
  },
  12: {
    translation: `<b>Câu hỏi:</b> Con người đã làm thay đổi Florida Bay, và không ai biết chính xác Vịnh từng như thế nào trước những năm 1950.<br><br><b>Nói đơn giản:</b> Có phải những tác động cải tạo của con người đã thay đổi vịnh, và hiện tại không một ai có ký ức hay biết được trạng thái nguyên bản của Vịnh trước cột mốc những năm 1950?`,
    exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph I
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Nobody knows what Florida Bay was like before the 1950s when engineers cut the largest canals in the Everglades and took most of the water away."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>Nobody knows what Florida Bay was like before the 1950s</b>: Không ai biết Vịnh Florida trông như thế nào trước những năm 1950 (trùng khớp hoàn toàn với vế "old image before 1950s is unrecalled").</li>
  <li><b>engineers cut the largest canals ... and took most of the water away</b>: các kỹ sư đã đào những con kênh lớn nhất ở Everglades và lấy đi phần lớn lượng nước (con người đã can thiệp và làm thay đổi sâu sắc hệ sinh thái vịnh).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Không ai biết Vịnh Florida trông như thế nào trước những năm 1950, khi các kỹ sư đào những con kênh lớn nhất ở Everglades và lấy đi phần lớn nước ở đây.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Human has changed Florida Bay</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">engineers cut the largest canals ... and took most of the water away</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Kỹ sư đào kênh và lấy nước đi là hành vi can thiệp thô bạo của con người làm biến đổi dòng chảy tự nhiên.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">before 1950s</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">before the 1950s</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Trùng khớp hoàn toàn về mốc thời gian.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">old image ... is unrecalled</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">Nobody knows what ... was like</td>
      <td style="padding: 8px; border: 1px solid #ddd;">"Không ai biết trông nó như thế nào" đồng nghĩa với việc hình ảnh/trạng thái cũ của nó không thể phục dựng lại hay nhớ lại được (unrecalled).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Bài đọc chỉ ra 2 ý:</b> (1) Con người (engineers) đã thay đổi vịnh bằng cách đào kênh và chuyển dòng nước ngọt đi nơi khác; (2) Trạng thái trước mốc thời gian đó (trước năm 1950) là hoàn toàn không ai biết được (Nobody knows).
<br>
- Cả hai vế này khớp hoàn toàn với câu hỏi của đề bài.
<br>
→ Do đó đáp án chính xác chắc chắn là <b>TRUE</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Từ <i>"unrecalled"</i> là một từ vựng nâng cao không hề xuất hiện trực tiếp trong bài đọc. Bài đọc dùng cách nói đơn giản hơn nhiều: <i>"Nobody knows what ... was like"</i>. Nhiều bạn không biết nghĩa của từ "unrecalled" (không thể nhớ lại / không ai biết rõ) nên hoang mang và chọn NOT GIVEN. Hãy nhớ rằng IELTS luôn dùng các từ đồng nghĩa cao cấp hơn ở câu hỏi để thử thách vốn từ của bạn.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Cụm từ chỉ sự thiếu hụt thông tin hoặc không ai biết đến như <i>"Nobody knows / It remains a mystery / Little is known"</i> rất thường xuyên được paraphrase thành các từ/cụm từ như <i>"unrecalled, unknown, unidentified, unrecorded"</i>. Hãy tích lũy những cặp từ đồng nghĩa này để tăng phản xạ làm bài.`,
    vocab: `<b>fundamental (adj)</b>: cơ bản, cốt lõi<br><b>flaw (n)</b>: điểm sai sót, kẽ hở, thiếu sót lớn<br><b>Utopian ideal (n)</b>: lý tưởng không tưởng, viễn cảnh hoàn hảo xa vời<br><b>wrought (v)</b>: gây ra, tạo ra (thường là sự phá hoại/biến đổi)<br><b>canal (n)</b>: kênh đào`,
    colorClass: "ev-12"
  },
  13: {
    translation: `<b>Câu hỏi:</b> Du lịch đóng vai trò nền tảng/quan trọng đối với khu vực Florida Bay.<br><br><b>Nói đơn giản:</b> Có phải hoạt động du lịch là trụ cột kinh tế đóng góp vai trò cốt lõi, mang tính nền tảng cho sự phát triển của khu vực này không?`,
    exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph J
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"The economy of the Florida Keys depends on tourism—the local tourist industry has an annual turnover of $2.5 billion."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>The economy ... depends on tourism</b>: Nền kinh tế của vùng Florida Keys phụ thuộc vào du lịch (du lịch đóng vai trò nền tảng/quyết định đối với kinh tế khu vực).</li>
  <li><b>annual turnover of $2.5 billion</b>: doanh thu hàng năm đạt tới 2,5 tỷ USD (chứng minh cụ thể cho vai trò khổng lồ của ngành này).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Nền kinh tế của Florida Keys phụ thuộc vào du lịch – ngành du lịch địa phương có doanh thu hàng năm là 2,5 tỷ đô la.
<br><br>
<b>📊 Bảng phân tích từ khóa (Paraphrase):</b>
<table border="1" style="border-collapse: collapse; width: 100%; border: 1px solid #ddd; font-size: 14px;">
  <thead>
    <tr style="background-color: #f2f2f2; font-weight: bold;">
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Từ khóa trong Câu hỏi</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Cụm từ trong Bài đọc (Passage)</th>
      <th style="padding: 8px; border: 1px solid #ddd; text-align: left;">Mối liên hệ / Giải thích</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">tourism / tourist industry</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">tourism / tourist industry</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Trùng khớp hoàn toàn về mặt từ vựng.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">contributes fundamentally</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">economy depends on... / $2.5 billion turnover</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Khi một nền kinh tế bị phụ thuộc hoàn toàn (depends on) vào một ngành có doanh thu khổng lồ (2.5 tỷ đô), ngành đó chắc chắn đóng vai trò nền tảng cốt lõi (contributes fundamentally).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Bài đọc khẳng định:</b> Nền kinh tế khu vực phụ thuộc trực tiếp vào ngành du lịch địa phương và bổ sung con số doanh thu khổng lồ 2.5 tỷ đô để khẳng định tầm vóc của ngành này.
<br>
- <b>Câu hỏi đưa ra:</b> Du lịch đóng vai trò nền tảng (contributes fundamentally). Hai thông tin này hoàn toàn tương thích và bổ trợ cho nhau một cách hoàn hảo.
<br>
→ Do đó đáp án chính xác là <b>TRUE</b>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Nhiều bạn có xu hướng phân tích quá sâu (over-analyse) và tự hỏi: "Bài đọc nói phụ thuộc (depends on), nhưng nhỡ đâu du lịch chỉ là một phần, còn các ngành khác thì sao? 'Fundamentally' có quá mạnh không?" 
<br>
Hãy nhớ rằng trong IELTS, khi nền kinh tế của một khu vực được định nghĩa là <b>"depends on tourism"</b>, điều đó mặc nhiên thừa nhận du lịch là trụ cột mang tính sống còn/nền tảng của khu vực đó. Đừng suy nghĩ quá phức tạp để tự làm mình bối rối.
<br><br>
<b>📘 Ngữ pháp quan trọng:</b>
<br>
- Cấu trúc: <b>depend on + noun/V-ing</b>: phụ thuộc vào cái gì đó.
<br>
- Các trạng từ/tính từ chỉ mức độ quan trọng sống còn thường được IELTS biến đổi linh hoạt: <i>depend on = rely on = be essential to = play a fundamental/critical role in</i>.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Ghi nhớ các biểu đạt đồng nghĩa chỉ tầm quan trọng cốt lõi. Khi bài đọc chỉ ra một thực thể phụ thuộc sống còn vào một yếu tố khác, điều đó có nghĩa yếu tố đó đóng vai trò <b>fundamental/essential/crucial</b>. Đây là quy tắc paraphrase kinh điển được áp dụng lặp đi lặp lại trong IELTS Reading.`,
    vocab: `<b>economy (n)</b>: nền kinh tế<br><b>depend on (v)</b>: phụ thuộc vào<br><b>tourism (n)</b>: ngành du lịch, việc đi du lịch<br><b>annual turnover (n)</b>: doanh thu hàng năm<br><b>scuba diving (n)</b>: lặn có bình khí<br><b>snorkeling (n)</b>: lặn với ống thở và kính bơi`,
    colorClass: "ev-13"
  }
}

};
