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

  ```javascript
explanations: {

  // =========================================================
  // QUESTION 1
  // =========================================================
  1: {
    translation: `
      <b>Câu hỏi:</b> Cỏ biển hóa ra có khả năng chịu được mức độ mặn của nước trong Vịnh tốt hơn.
      <br><br>
      Nói đơn giản: Đoạn nào cho biết rằng <b>seagrasses chịu được nước có độ mặn cao hơn người ta tưởng?</b>
    `,

    questionType: `
      <b>Matching Information — Tìm đoạn chứa thông tin</b>
      <br><br>
      Dạng này yêu cầu bạn không cần hiểu toàn bộ passage ngay lập tức.
      Bạn cần xác định <b>ý chính của câu hỏi</b>, tìm những từ khóa quan trọng,
      sau đó scan passage để tìm đoạn chứa cùng thông tin hoặc cách diễn đạt tương đương.
    `,

    keywords: `
      <ul>
        <li><b>Seagrass</b> = cỏ biển</li>
        <li><b>more resistant</b> = chống chịu tốt hơn</li>
        <li><b>saline water level</b> = mức độ mặn của nước</li>
      </ul>

      <b>Keyword quan trọng nhất:</b> <i>seagrass + resistant + saline</i>
    `,

    location: `
      <b>Vị trí:</b> Paragraph E
      <br><br>
      Từ khóa "seagrasses" xuất hiện trực tiếp ở đoạn E.
      Đặc biệt, câu:
      <br><br>
      <i>"He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays."</i>
    `,

    evidence: `
      <b>Evidence:</b>
      <br>
      <i>"He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays."</i>
      <br><br>

      Phân tích từng phần:
      <ul>
        <li><b>seagrasses</b> = cỏ biển</li>
        <li><b>can tolerate</b> = có thể chịu đựng/chịu được</li>
        <li><b>much higher levels</b> = mức độ cao hơn nhiều</li>
        <li><b>salinity</b> = độ mặn</li>
        <li><b>than the bay actually displays</b> = so với mức độ mặn thực tế của Vịnh</li>
      </ul>

      Ý của câu là:
      <br>
      <b>Cỏ biển có thể chịu được mức độ mặn cao hơn rất nhiều so với mức độ mặn hiện tại của Vịnh.</b>
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
          <th>Quan hệ</th>
        </tr>
        <tr>
          <td>more resistant</td>
          <td>can tolerate</td>
          <td>Paraphrase về khả năng chịu đựng</td>
        </tr>
        <tr>
          <td>saline water level</td>
          <td>levels of salinity</td>
          <td>Đổi cách diễn đạt</td>
        </tr>
        <tr>
          <td>more resistant</td>
          <td>much higher levels ... can tolerate</td>
          <td>Cùng ý: chịu được mức cao hơn</td>
        </tr>
      </table>

      <br>
      <b>Điểm cần học:</b> IELTS rất thường biến một tính từ thành một cụm động từ.
      <br>
      resistant → can tolerate
    `,

    reasoning: `
      <b>Logic:</b>
      <br><br>
      Question nói:
      <br>
      → seagrass chịu được độ mặn tốt hơn.
      <br><br>
      Passage nói:
      <br>
      → seagrasses can tolerate much higher levels of salinity.
      <br><br>
      Hai thông tin hoàn toàn tương ứng.
      Vì vậy đáp án là <b>E</b>.
    `,

    distractors: `
      Vì đây là Matching Information, các đoạn khác không cần phải "sai".
      Chúng chỉ đơn giản là <b>không chứa thông tin được hỏi</b>.
      <br><br>
      <b>A:</b> nói về tranh cãi và vấn đề đổ nước vào Vịnh → không nói khả năng chịu mặn của cỏ biển.
      <br>
      <b>B:</b> nói về sự suy giảm san hô → không phải khả năng chịu mặn của seagrass.
      <br>
      <b>C:</b> nói về kế hoạch phục hồi Everglades → không chứa thông tin này.
      <br>
      <b>D:</b> nói rằng thiếu nước ngọt làm nước mặn hơn và gây hại cho seagrass → nhưng không nói seagrass có thể chịu được độ mặn cao hơn.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Đừng tìm từ "resistant" một cách máy móc.
      Passage không dùng từ <i>resistant</i>.
      Nó dùng <b>tolerate</b>.
      <br><br>
      Đây chính là kỹ năng <b>paraphrase recognition</b>.
    `,

    vocab: `
      <b>tolerate (v)</b> = chịu đựng, chịu được
      <br>
      <b>salinity (n)</b> = độ mặn
      <br>
      <b>resistant (adj)</b> = có khả năng chống chịu
      <br>
      <b>level (n)</b> = mức độ
    `,

    grammar: `
      <b>can tolerate</b> = modal verb + V nguyên mẫu
      <br><br>
      <b>much higher levels of salinity</b>
      <br>
      = much + comparative adjective + noun phrase
      <br><br>
      "higher" đang tạo sự so sánh giữa:
      <br>
      mức độ mặn mà seagrasses có thể chịu được
      <br>
      và
      <br>
      mức độ mặn thực tế của bay.
    `,

    errorAnalysis: `
      <b>Nếu bạn chọn sai:</b>
      <br><br>
      Khả năng cao bạn gặp một trong ba lỗi:
      <ol>
        <li>Không nhận ra <b>tolerate = chịu được</b>.</li>
        <li>Chỉ tìm từ giống hệt trong question.</li>
        <li>Nhìn thấy đoạn D nói seagrass chết vì nước mặn rồi chọn D.</li>
      </ol>

      Lỗi số 3 rất quan trọng:
      <br>
      D nói <b>độ mặn cao gây hại</b>.
      <br>
      E nói <b>seagrass có thể chịu độ mặn cao hơn mức hiện tại</b>.
      <br><br>
      Hai ý có liên quan nhưng câu hỏi hỏi ý thứ hai → <b>E</b>.
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Khi Matching Information, đừng chỉ tìm từ giống nhau.
      Hãy tìm <b>ý nghĩa tương đương</b>.
      <br><br>
      Công thức:
      <br>
      <b>Question idea → Paraphrase → Evidence → Paragraph</b>
    `,

    colorClass: "ev-1"
  },


  // =========================================================
  // QUESTION 2
  // =========================================================
  2: {
    translation: `
      <b>Câu hỏi:</b> Tầm quan trọng của việc tìm ra một nguyên nhân cụ thể trong cuộc tranh cãi.
      <br><br>
      Nói đơn giản:
      <br>
      <b>Tại sao việc xác định nguyên nhân chính xác lại quan trọng?</b>
    `,

    questionType: `
      <b>Matching Information</b>
      <br><br>
      Câu hỏi đang tìm một đoạn giải thích <b>vì sao việc xác định nguyên nhân có ý nghĩa quan trọng</b>.
    `,

    keywords: `
      <ul>
        <li><b>significance</b> = tầm quan trọng</li>
        <li><b>finding</b> = việc tìm ra</li>
        <li><b>specific reason</b> = nguyên nhân cụ thể</li>
        <li><b>controversy</b> = tranh cãi</li>
      </ul>

      Keyword ý nghĩa nhất:
      <br>
      <b>reason + significance/consequence</b>
    `,

    location: `
      <b>Vị trí: Paragraph C</b>
      <br><br>
      Evidence:
      <br>
      <i>"What is causing such ecological change is a matter of much debate."</i>
      <br>
      và:
      <br>
      <i>"And the answer is of no small consequence."</i>
    `,

    evidence: `
      <b>Phân tích:</b>
      <br><br>

      <b>What is causing such ecological change</b>
      <br>
      = Điều gì đang gây ra sự thay đổi sinh thái này.
      <br><br>

      <b>a matter of much debate</b>
      <br>
      = vấn đề đang được tranh luận nhiều / còn gây tranh cãi.
      <br><br>

      <b>the answer is of no small consequence</b>
      <br>
      = câu trả lời có tầm quan trọng đáng kể.
      <br><br>

      Sau đó passage giải thích lý do:
      <br>
      Chính phủ Mỹ dự định chi <b>$8 billion</b> trong 30 năm để phục hồi Everglades.
      <br><br>

      Vì vậy việc biết chính xác nguyên nhân không chỉ là tranh luận học thuật.
      Nó ảnh hưởng trực tiếp đến một dự án trị giá hàng tỷ đô la.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>specific reason</td>
          <td>what is causing such ecological change</td>
        </tr>
        <tr>
          <td>significance</td>
          <td>no small consequence</td>
        </tr>
        <tr>
          <td>controversy</td>
          <td>matter of much debate</td>
        </tr>
      </table>

      <br>
      <b>Đây là một paraphrase rất đáng học:</b>
      <br>
      <i>important</i> → <i>of no small consequence</i>
    `,

    reasoning: `
      Passage có hai thành phần mà question yêu cầu:
      <br><br>
      <b>1.</b> Có tranh cãi về nguyên nhân.
      <br>
      <b>2.</b> Việc tìm ra câu trả lời có hậu quả/tầm quan trọng lớn.
      <br><br>
      Cả hai đều xuất hiện ở <b>C</b>.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      "no small consequence" nhìn giống như "không có hậu quả nhỏ",
      nhưng trong tiếng Anh đây là cách diễn đạt nhấn mạnh:
      <br>
      <b>of no small consequence = very important / significant</b>.
    `,

    vocab: `
      <b>consequence</b> = hậu quả, hệ quả
      <br>
      <b>of no small consequence</b> = rất quan trọng / có hệ quả đáng kể
      <br>
      <b>debate</b> = tranh luận
      <br>
      <b>ecological</b> = thuộc sinh thái
      <br>
      <b>revitalise</b> = phục hồi, làm cho phát triển trở lại
    `,

    errorAnalysis: `
      Nếu chọn sai, bạn có thể đã nhìn thấy "debate" ở đoạn A hoặc C nhưng không kiểm tra phần
      <b>why the answer matters</b>.
      <br><br>
      Matching Information thường yêu cầu bạn tìm <b>toàn bộ ý</b>, không phải một keyword đơn lẻ.
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Khi question hỏi "significance / importance / consequence",
      hãy tìm các expressions như:
      <br>
      <b>important, significant, consequence, impact, effect, matter, crucial...</b>
    `,

    colorClass: "ev-2"
  },


  // =========================================================
  // QUESTION 3
  // =========================================================
  3: {
    translation: `
      Những đề xuất tốn kém được đưa ra để giải quyết vấn đề nitơ.
      <br><br>
      Hiểu đơn giản:
      <br>
      <b>Đoạn nào nói về những giải pháp xử lý nitrogen nhưng rất đắt?</b>
    `,

    questionType: `<b>Matching Information</b>`,

    keywords: `
      <b>expensive</b> → costly
      <br>
      <b>proposals</b> → solutions / measures
      <br>
      <b>nitrogen dilemma</b> → vấn đề nan giải liên quan đến nitrogen
    `,

    location: `
      <b>Paragraph H</b>
      <br><br>
      Đây là đoạn trình bày cách giải quyết nếu giả thuyết nitrogen là đúng.
    `,

    evidence: `
      Passage đưa ra:
      <br><br>
      <i>"the cure is to remove nitrogen from farmland or sewage discharges, or perhaps both."</i>
      <br><br>
      Sau đó đưa ra các biện pháp cụ thể:
      <ul>
        <li>xử lý nitrogen từ farmland;</li>
        <li>xử lý nitrogen từ sewage;</li>
        <li>thêm algal culture vào wetlands;</li>
        <li>thay cesspits bằng proper sewerage.</li>
      </ul>

      Và quan trọng nhất:
      <br><br>
      <i>"That would be costly."</i>
      <br>
      <i>"So too would be the replacement of cesspits with proper sewerage—one estimate puts the cost at $650m."</i>
      <br><br>

      → Có giải pháp + có chi phí rất lớn.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>expensive</td>
          <td>costly / $650m</td>
        </tr>
        <tr>
          <td>proposals</td>
          <td>cure / remove nitrogen / replacement</td>
        </tr>
        <tr>
          <td>nitrogen dilemma</td>
          <td>if this second hypothesis proves correct</td>
        </tr>
      </table>
    `,

    reasoning: `
      Đoạn H có đúng hai ý:
      <br>
      <b>Problem:</b> nitrogen.
      <br>
      <b>Solution:</b> remove nitrogen.
      <br>
      <b>Cost:</b> costly / $650m.
      <br><br>
      Vì vậy đáp án là <b>H</b>.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Đừng chọn đoạn F chỉ vì đoạn F nói nhiều về nitrogen và farmland.
      <br><br>
      Question không chỉ hỏi <b>nitrogen</b>.
      Nó hỏi:
      <br>
      <b>nitrogen + proposals + expensive</b>.
      <br>
      Chỉ H có đủ cả ba.
    `,

    vocab: `
      <b>costly</b> = đắt đỏ
      <br>
      <b>cure</b> = giải pháp/chữa trị
      <br>
      <b>sewage discharge</b> = nước thải xả ra
      <br>
      <b>cesspit</b> = bể chứa chất thải tự hoại
      <br>
      <b>proper sewerage</b> = hệ thống thoát nước thải đúng chuẩn
      <br>
      <b>estimate</b> = ước tính
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Khi Matching Information có nhiều keyword,
      hãy tìm <b>combo ý nghĩa</b> thay vì một keyword.
      <br><br>
      nitrogen + solution + expensive → H
    `,

    colorClass: "ev-3"
  },


  // =========================================================
  // QUESTION 4
  // =========================================================
  4: {
    translation: `
      Một số liệu thống kê cho thấy sự thay đổi sinh thái ở cả diện tích san hô
      và số lượng loài san hô.
    `,

    questionType: `<b>Matching Information</b>`,

    keywords: `
      <b>statistic</b> = số liệu
      <br>
      <b>coral area/cover</b> = độ bao phủ san hô
      <br>
      <b>species</b> = loài
      <br>
      <b>ecological changes</b> = thay đổi sinh thái
    `,

    location: `<b>Paragraph B</b>`,

    evidence: `
      <i>"Since the 1980s, coral cover has dropped by 40%, and a third of the coral species have gone."</i>
      <br><br>

      Có <b>hai số liệu</b>:
      <br>
      <b>1.</b> coral cover giảm <b>40%</b>.
      <br>
      <b>2.</b> một phần ba số loài san hô đã biến mất.
      <br><br>

      Question nói "both the coral area and species" → passage có đúng hai thông tin tương ứng.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>statistic</td>
          <td>40% / a third</td>
        </tr>
        <tr>
          <td>coral area</td>
          <td>coral cover</td>
        </tr>
        <tr>
          <td>species</td>
          <td>coral species</td>
        </tr>
        <tr>
          <td>ecological changes</td>
          <td>cover has dropped / species have gone</td>
        </tr>
      </table>
    `,

    reasoning: `
      Chỉ cần nhìn thấy:
      <br>
      <b>40%</b> + <b>a third</b> + <b>coral cover</b> + <b>coral species</b>
      <br><br>
      là có thể xác định ngay Paragraph B.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Passage có rất nhiều số liệu khác như $8 billion, $650m, 750,000 acres, $2.5 billion.
      <br><br>
      Nhưng question yêu cầu số liệu về <b>coral cover + coral species</b>.
      <br>
      Không phải cứ nhìn thấy số là chọn.
    `,

    vocab: `
      <b>cover</b> = độ bao phủ
      <br>
      <b>species</b> = loài
      <br>
      <b>drop</b> = giảm
      <br>
      <b>a third</b> = một phần ba
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Khi câu hỏi nói "a statistic", hãy scan các con số,
      nhưng phải kiểm tra <b>con số đó đang nói về cái gì</b>.
    `,

    colorClass: "ev-4"
  },


  // =========================================================
  // QUESTION 5
  // =========================================================
  5: {
    translation: `
      Hệ thống thoát nước ở Everglades thực sự dẫn đến việc nước trong Vịnh có độ mặn cao.
    `,

    questionType: `<b>Matching People — Match opinion/deed with person</b>`,

    keywords: `
      <b>drainage system</b> = drainage
      <br>
      <b>Everglades</b>
      <br>
      <b>high salty water</b> = more saline
    `,

    location: `
      <b>Paragraph D — Joseph Zieman</b>
    `,

    evidence: `
      <i>"The blame, he says, lies with a century of drainage in the Everglades..."</i>
      <br><br>
      Sau đó:
      <br>
      <i>"This has caused the flow of fresh water into Florida Bay to dwindle, making the water in the bay, overall, more saline."</i>
      <br><br>

      Chuỗi nguyên nhân:
      <br>
      <b>drainage → less fresh water → bay becomes more saline</b>
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>drainage system</td>
          <td>a century of drainage</td>
        </tr>
        <tr>
          <td>high salty water</td>
          <td>more saline</td>
        </tr>
        <tr>
          <td>actually results in</td>
          <td>has caused</td>
        </tr>
      </table>
    `,

    reasoning: `
      Người đưa ra chuỗi lập luận này là <b>Joseph Zieman</b>.
      <br><br>
      Trong danh sách:
      <br>
      A = Bill Kruczynski
      <br>
      B = Brian Lapointe
      <br>
      C = Joseph Zieman
      <br><br>
      → <b>Answer: C</b>
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Có nhiều người trong passage nói về nitrogen và salinity.
      Nhưng cần xác định <b>ai là người đưa ra ý kiến</b>.
      <br><br>
      Câu này rõ ràng thuộc về Zieman.
    `,

    vocab: `
      <b>drainage</b> = sự thoát nước/hệ thống thoát nước
      <br>
      <b>dwindle</b> = giảm dần
      <br>
      <b>saline</b> = mặn
      <br>
      <b>overall</b> = nhìn chung
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Matching People thường chứa paraphrase rất mạnh.
      Hãy xác định:
      <br>
      <b>WHO said/did WHAT?</b>
    `,

    colorClass: "ev-5"
  },


  // =========================================================
  // QUESTION 6
  // =========================================================
  6: {
    translation: `
      Việc phục hồi nguồn nước có hàm lượng nitrogen cao sẽ gây thêm tác động tiêu cực đến hệ sinh thái.
    `,

    questionType: `<b>Matching People</b>`,

    keywords: `
      <b>restoring water</b>
      <br>
      <b>high nitrogen</b>
      <br>
      <b>ecological side effect</b>
    `,

    location: `<b>Paragraph E — Brian Lapointe</b>`,

    evidence: `
      Lapointe nói:
      <br><br>
      <i>"restoring freshwater rich in nitrogen will do more damage to the reef."</i>
      <br><br>

      Nghĩa:
      <br>
      Khôi phục nguồn nước ngọt giàu nitrogen sẽ gây <b>nhiều tổn hại hơn cho rạn san hô</b>.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>restoring water</td>
          <td>restoring freshwater</td>
        </tr>
        <tr>
          <td>high nitrogen level</td>
          <td>rich in nitrogen</td>
        </tr>
        <tr>
          <td>ecological side effect</td>
          <td>more damage to the reef</td>
        </tr>
      </table>
    `,

    reasoning: `
      Người đưa ra ý kiến này là <b>Brian Lapointe</b>.
      <br><br>
      B = Brian Lapointe.
      <br>
      → <b>Answer: B</b>
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Zieman cũng nói về freshwater nhưng ông cho rằng freshwater là tốt.
      <br><br>
      Lapointe lại cho rằng freshwater <b>giàu nitrogen</b> có thể gây hại.
      <br><br>
      Vì vậy phải đọc đủ phần sau của câu, không chỉ nhìn keyword "fresh water".
    `,

    vocab: `
      <b>rich in</b> = giàu
      <br>
      <b>damage</b> = gây tổn hại
      <br>
      <b>reef</b> = rạn san hô
      <br>
      <b>restore</b> = phục hồi
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Một keyword giống nhau có thể xuất hiện trong ý kiến của nhiều người.
      <br><br>
      Hãy luôn xác định <b>full claim</b>, không chỉ keyword.
    `,

    colorClass: "ev-6"
  },


  // =========================================================
  // QUESTION 7
  // =========================================================
  7: {
    translation: `
      Nồng độ nitrogen cao có thể được gây ra bởi các vùng đất nông nghiệp gần đó.
    `,

    questionType: `<b>Matching People</b>`,

    keywords: `
      <b>high nitrogen</b>
      <br>
      <b>farmland</b>
      <br>
      <b>caused by</b>
    `,

    location: `<b>Paragraph E — Brian Lapointe</b>`,

    evidence: `
      <i>"Freshwater running off from well-fertilised farmlands, he says, caused a fivefold rise in nitrogen levels in the bay."</i>
      <br><br>

      Chuỗi logic:
      <br>
      <b>well-fertilised farmland → freshwater runoff → nitrogen rises fivefold</b>
      <br><br>

      Đây là bằng chứng trực tiếp nhất cho question.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>high nitrogen levels</td>
          <td>fivefold rise in nitrogen levels</td>
        </tr>
        <tr>
          <td>nearby farmland</td>
          <td>well-fertilised farmlands</td>
        </tr>
        <tr>
          <td>may be caused by</td>
          <td>caused ... a rise</td>
        </tr>
      </table>
    `,

    reasoning: `
      Đây là ý kiến của <b>Brian Lapointe</b>.
      <br>
      → B.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Đoạn F cũng nhắc đến farmland.
      Nhưng F là nơi Kruczynski phản bác ý kiến rằng nitrogen từ farmland là nguyên nhân chính.
      <br><br>
      Question nói <b>nitrogen may be caused by farmland</b>,
      đây là quan điểm của Lapointe → <b>B</b>.
    `,

    vocab: `
      <b>runoff</b> = dòng nước chảy tràn
      <br>
      <b>well-fertilised</b> = được bón phân nhiều
      <br>
      <b>fivefold</b> = gấp năm lần
      <br>
      <b>nitrogen level</b> = mức nitrogen
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Khi hai đoạn đều chứa cùng topic,
      hãy kiểm tra <b>speaker's position</b>: đồng ý hay phản đối?
    `,

    colorClass: "ev-7"
  },


  // =========================================================
  // QUESTION 8
  // =========================================================
  8: {
    translation: `
      Nước thải từ hệ thống thoát nước địa phương, chứ không phải nitrogen từ nông nghiệp,
      góp phần làm tăng vấn đề nitrogen.
    `,

    questionType: `<b>Matching People</b>`,

    keywords: `
      <b>sewage</b>
      <br>
      <b>rather than agricultural nutrients</b>
      <br>
      <b>nitrogen</b>
    `,

    location: `<b>Paragraph F — Bill Kruczynski</b>`,

    evidence: `
      Kruczynski nói:
      <br><br>
      <i>"nitrogen from farmlands is not the chief problem."</i>
      <br><br>
      Sau đó:
      <br>
      <i>"increased nutrients arriving from local sewage discharges ... are part of the problem."</i>
      <br><br>

      Ông đang chuyển hướng nguyên nhân:
      <br>
      <b>farmland nitrogen → not the chief problem</b>
      <br>
      <b>local sewage → part of the problem</b>
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Question</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>released sewage</td>
          <td>local sewage discharges</td>
        </tr>
        <tr>
          <td>rather than agricultural...</td>
          <td>farmlands is not the chief problem</td>
        </tr>
        <tr>
          <td>increase nitrogen problem</td>
          <td>increased nutrients ... are part of the problem</td>
        </tr>
      </table>
    `,

    reasoning: `
      Người đưa ra quan điểm này là <b>Bill Kruczynski</b>.
      <br>
      → A.
    `,

    trap: `
      <b>⚠️ Bẫy cực quan trọng:</b>
      <br>
      Passage E nói farmland → nitrogen.
      <br>
      Passage F nói sewage → problem.
      <br><br>
      Đây là dạng <b>opposing opinions</b>.
      IELTS cố tình đặt hai ý cạnh nhau để gây nhầm.
    `,

    vocab: `
      <b>chief</b> = chính, chủ yếu
      <br>
      <b>sewage discharge</b> = xả nước thải
      <br>
      <b>nutrient</b> = chất dinh dưỡng
      <br>
      <b>part of the problem</b> = một phần của vấn đề
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Các từ:
      <br>
      <b>not the chief problem / disagrees / however / but / instead</b>
      <br>
      thường báo hiệu <b>contrast</b>.
      <br><br>
      Khi gặp chúng, hãy đặc biệt chú ý vì quan điểm có thể đã chuyển.
    `,

    colorClass: "ev-8"
  },


  // =========================================================
  // QUESTION 9
  // =========================================================
  9: {
    translation: `
      Mọi người đều đồng ý rằng "đổ nước vào biển là hoàn toàn vô hại".
    `,

    questionType: `<b>TRUE / FALSE / NOT GIVEN</b>`,

    keywords: `
      <b>Everyone</b> = tất cả mọi người
      <br>
      <b>agrees</b> = đồng ý
      <br>
      <b>harmless</b> = vô hại
    `,

    location: `<b>Paragraph A</b>`,

    evidence: `
      Passage nói:
      <br><br>
      <i>"it is proving highly controversial."</i>
      <br>
      và:
      <br>
      <i>"researchers are divided over whether it will help or hinder..."</i>
      <br><br>

      "researchers are divided" = các nhà nghiên cứu <b>không đồng ý với nhau</b>.
      <br><br>
      Statement lại nói <b>Everyone agrees</b> = tất cả mọi người đều đồng ý.
      <br><br>
      Đây là hai ý đối lập trực tiếp.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Statement</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>Everyone agrees</td>
          <td>researchers are divided</td>
        </tr>
        <tr>
          <td>harmless</td>
          <td>help or hinder</td>
        </tr>
        <tr>
          <td>agrees</td>
          <td>divided</td>
        </tr>
      </table>
    `,

    reasoning: `
      <b>TRUE?</b> Không.
      <br>
      Passage nói họ <b>divided</b>.
      <br><br>
      <b>FALSE?</b> Có.
      <br>
      Statement nói tất cả đồng ý, passage nói họ bất đồng.
      <br><br>
      → <b>FALSE</b>.
    `,

    distinction: `
      <b>FALSE vs NOT GIVEN:</b>
      <br><br>
      Nếu passage không nói gì về sự đồng ý → NOT GIVEN.
      <br>
      Nhưng passage nói trực tiếp rằng các researchers <b>are divided</b>.
      <br>
      Vì vậy statement bị <b>contradicted</b>.
      <br>
      → FALSE.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Từ <b>Everyone</b> là một quantifier tuyệt đối.
      <br>
      Passage chỉ cần cho thấy <b>không phải tất cả</b> đều đồng ý là statement sai.
      <br><br>
      Tuy nhiên không nên chọn FALSE chỉ vì thấy "Everyone".
      Phải có evidence: <b>researchers are divided</b>.
    `,

    vocab: `
      <b>harmless</b> = vô hại
      <br>
      <b>controversial</b> = gây tranh cãi
      <br>
      <b>divided</b> = chia rẽ / có quan điểm khác nhau
      <br>
      <b>whether...or...</b> = liệu...hay...
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      TRUE/FALSE/NOT GIVEN phải dựa trên quan hệ:
      <br><br>
      <b>Same → TRUE</b>
      <br>
      <b>Opposite → FALSE</b>
      <br>
      <b>No information → NOT GIVEN</b>
    `,

    colorClass: "ev-9"
  },


  // =========================================================
  // QUESTION 10
  // =========================================================
  10: {
    translation: `
      Nitrogen được đưa vào từ nhiều loại cây trồng khác nhau khi nước chảy qua.
    `,

    questionType: `<b>TRUE / FALSE / NOT GIVEN</b>`,

    keywords: `
      <b>nitrogen</b>
      <br>
      <b>different types of crops</b>
      <br>
      <b>water flows through</b>
    `,

    location: `
      Có liên quan đến Paragraph F:
      <br>
      <i>"The water flowing off crops that are grown on the 750,000 acres..."</i>
    `,

    evidence: `
      Passage chỉ nói:
      <br><br>
      <i>"The water flowing off crops that are grown on the 750,000 acres of heavily fertilised farmland ... is rich in nitrogen."</i>
      <br><br>

      Ta biết:
      <br>
      ✔ nước chảy ra từ crops
      <br>
      ✔ farmland được bón phân nhiều
      <br>
      ✔ nước giàu nitrogen
      <br><br>

      Nhưng passage KHÔNG nói:
      <br>
      ✘ có "different types of crops".
      <br><br>

      Đây là thông tin bị thiếu.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Statement</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>crops</td>
          <td>crops</td>
        </tr>
        <tr>
          <td>water flows</td>
          <td>water flowing off</td>
        </tr>
        <tr>
          <td>nitrogen</td>
          <td>rich in nitrogen</td>
        </tr>
        <tr>
          <td><b>different types</b></td>
          <td><b>Không được đề cập</b></td>
        </tr>
      </table>
    `,

    reasoning: `
      Có một phần thông tin đúng nhưng statement thêm một chi tiết:
      <br>
      <b>different types of crops</b>.
      <br><br>
      Passage không xác nhận cũng không phủ nhận có bao nhiêu loại cây trồng.
      <br><br>
      Vì vậy:
      <br>
      <b>NOT GIVEN</b>.
    `,

    distinction: `
      <b>⚠️ Tại sao KHÔNG phải FALSE?</b>
      <br><br>
      FALSE nghĩa là passage phải nói điều ngược lại.
      <br><br>
      Passage không nói:
      <br>
      "There was only one type of crop."
      <br>
      hoặc
      <br>
      "The crops were all the same."
      <br><br>
      Nó chỉ đơn giản <b>không cung cấp thông tin</b>.
      <br>
      → NOT GIVEN.
    `,

    trap: `
      <b>⚠️ Bẫy IELTS:</b>
      <br>
      Statement thường lấy một phần thông tin thật rồi thêm một chi tiết chưa được đề cập.
      <br><br>
      Đây là kiểu bẫy:
      <br>
      <b>TRUE information + extra unsupported information = NOT GIVEN</b>
    `,

    vocab: `
      <b>crop</b> = cây trồng / mùa vụ
      <br>
      <b>farmland</b> = đất nông nghiệp
      <br>
      <b>flow off</b> = chảy ra khỏi
      <br>
      <b>heavily fertilised</b> = được bón phân nhiều
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Khi làm NOT GIVEN, hãy kiểm tra từng thành phần của statement.
      <br><br>
      Đừng nghĩ:
      <br>
      "Phần lớn câu đúng → TRUE."
      <br><br>
      Chỉ cần một thông tin quan trọng không được xác nhận → có thể là NOT GIVEN.
    `,

    colorClass: "ev-10"
  },


  // =========================================================
  // QUESTION 11
  // =========================================================
  11: {
    translation: `
      Dự án phục hồi Everglades có thể hiệu quả bất kể nguyên nhân gây ô nhiễm là gì.
    `,

    questionType: `<b>TRUE / FALSE / NOT GIVEN</b>`,

    keywords: `
      <b>effective</b>
      <br>
      <b>regardless of</b> = bất kể
      <br>
      <b>cause</b> = nguyên nhân
    `,

    location: `<b>Paragraph G</b>`,

    evidence: `
      Passage nói:
      <br><br>
      <i>"If increased salinity is the main problem, the bay’s ecology will benefit from the Everglades restoration project."</i>
      <br><br>
      NHƯNG:
      <br><br>
      <i>"If, however, nitrogen is the problem, increasing the flow of freshwater could make matters much worse."</i>
      <br><br>

      Vì vậy kết quả phụ thuộc vào <b>nguyên nhân thực sự</b>.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Statement</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>regardless of the cause</td>
          <td>if salinity... / if nitrogen...</td>
        </tr>
        <tr>
          <td>can be effective</td>
          <td>ecology will benefit</td>
        </tr>
        <tr>
          <td>effective in all cases</td>
          <td>could make matters much worse in one case</td>
        </tr>
      </table>
    `,

    reasoning: `
      Statement nói:
      <br>
      <b>Regardless of cause → project effective.</b>
      <br><br>
      Passage nói:
      <br>
      <b>Cause A → beneficial.</b>
      <br>
      <b>Cause B → much worse.</b>
      <br><br>
      Đây là mâu thuẫn trực tiếp.
      <br>
      → <b>FALSE</b>.
    `,

    distinction: `
      Đây không phải NOT GIVEN vì passage nói rất rõ hai khả năng.
      <br><br>
      Một khả năng có lợi.
      <br>
      Một khả năng gây hại.
      <br><br>
      Vì vậy statement "regardless of cause" bị phản bác.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Từ <b>regardless of</b> có ý nghĩa rất mạnh:
      <br>
      "không quan tâm nguyên nhân là gì".
      <br><br>
      Nhưng passage lại xây dựng một cấu trúc <b>IF A → X, IF B → Y</b>.
      <br>
      Đây là dấu hiệu rõ ràng rằng kết quả <b>phụ thuộc vào nguyên nhân</b>.
    `,

    vocab: `
      <b>regardless of</b> = bất kể
      <br>
      <b>main problem</b> = vấn đề chính
      <br>
      <b>benefit</b> = có lợi
      <br>
      <b>make matters worse</b> = làm tình hình tồi tệ hơn
    `,

    grammar: `
      Cấu trúc:
      <br>
      <b>If + condition, result.</b>
      <br><br>
      If increased salinity is the main problem → benefit.
      <br>
      If nitrogen is the problem → make matters worse.
      <br><br>
      Hai câu điều kiện đối lập nhau tạo nên logic:
      <br>
      <b>Outcome depends on cause.</b>
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Các từ như:
      <br>
      <b>regardless, always, all, every, never, completely, only</b>
      <br>
      thường cần được kiểm tra rất kỹ vì chúng làm statement trở nên tuyệt đối.
    `,

    colorClass: "ev-11"
  },


  // =========================================================
  // QUESTION 12
  // =========================================================
  12: {
    translation: `
      Con người đã làm thay đổi Florida Bay, và không ai biết chính xác Vịnh từng như thế nào trước những năm 1950.
    `,

    questionType: `<b>TRUE / FALSE / NOT GIVEN</b>`,

    keywords: `
      <b>human has changed</b>
      <br>
      <b>before the 1950s</b>
      <br>
      <b>old image is unrecalled</b>
    `,

    location: `<b>Paragraph I</b>`,

    evidence: `
      Passage nói:
      <br><br>
      <i>"Nobody knows what Florida Bay was like before the 1950s when engineers cut the largest canals in the Everglades and took most of the water away."</i>
      <br><br>

      Có hai ý:
      <br>
      <b>1.</b> Trước những năm 1950, không ai biết chính xác Florida Bay như thế nào.
      <br>
      <b>2.</b> Engineers đã xây các kênh lớn và lấy đi phần lớn nước.
      <br><br>

      Điều này phù hợp với statement.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Statement</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>Human has changed Florida Bay</td>
          <td>engineers cut canals and took water away</td>
        </tr>
        <tr>
          <td>before 1950s</td>
          <td>before the 1950s</td>
        </tr>
        <tr>
          <td>old image ... unrecalled</td>
          <td>Nobody knows what Florida Bay was like</td>
        </tr>
      </table>
    `,

    reasoning: `
      Statement và passage cùng truyền đạt một thông tin:
      <br><br>
      <b>Không ai biết chính xác trạng thái của Florida Bay trước những năm 1950,
      trong khi con người đã can thiệp mạnh vào hệ thống nước.</b>
      <br><br>
      → <b>TRUE</b>.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      "unrecalled" không phải từ được passage sử dụng.
      <br>
      Passage dùng:
      <br>
      <b>Nobody knows what ... was like</b>.
      <br><br>
      Đây là paraphrase.
    `,

    vocab: `
      <b>fundamental</b> = cơ bản
      <br>
      <b>flaw</b> = điểm sai sót
      <br>
      <b>Utopian ideal</b> = lý tưởng không tưởng
      <br>
      <b>wrought</b> = gây ra/tạo ra
      <br>
      <b>canal</b> = kênh đào
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      "Nobody knows..." thường tương ứng với:
      <br>
      <b>there is no known information / it is unknown</b>.
    `,

    colorClass: "ev-12"
  },


  // =========================================================
  // QUESTION 13
  // =========================================================
  13: {
    translation: `
      Du lịch đóng vai trò nền tảng/quan trọng đối với khu vực Florida Bay.
    `,

    questionType: `<b>TRUE / FALSE / NOT GIVEN</b>`,

    keywords: `
      <b>tourism</b>
      <br>
      <b>contributes fundamentally</b>
      <br>
      <b>Florida Bay area</b>
    `,

    location: `<b>Paragraph J</b>`,

    evidence: `
      Passage nói:
      <br><br>
      <i>"The economy of the Florida Keys depends on tourism—the local tourist industry has an annual turnover of $2.5 billion."</i>
      <br><br>

      Câu này cực kỳ mạnh:
      <br>
      <b>depends on tourism</b>
      <br>
      = nền kinh tế phụ thuộc vào du lịch.
      <br><br>

      Vì vậy tourism có vai trò rất quan trọng đối với nền kinh tế khu vực.
    `,

    paraphrase: `
      <table>
        <tr>
          <th>Statement</th>
          <th>Passage</th>
        </tr>
        <tr>
          <td>tourism contributes fundamentally</td>
          <td>economy depends on tourism</td>
        </tr>
        <tr>
          <td>fundamentally</td>
          <td>depends on</td>
        </tr>
        <tr>
          <td>tourism</td>
          <td>tourist industry</td>
        </tr>
      </table>
    `,

    reasoning: `
      Nếu nền kinh tế <b>depends on tourism</b>,
      thì tourism rõ ràng đóng vai trò quan trọng/nền tảng.
      <br><br>
      Passage còn cung cấp số liệu:
      <br>
      <b>$2.5 billion annual turnover</b>.
      <br><br>
      → <b>TRUE</b>.
    `,

    trap: `
      <b>⚠️ Bẫy:</b>
      <br>
      Question không nói:
      <br>
      "Tourism is the only source of income."
      <br><br>
      Nó chỉ nói tourism có vai trò nền tảng.
      <br>
      Passage nói economy <b>depends on</b> tourism → hoàn toàn đủ để xác nhận.
    `,

    distinction: `
      <b>TRUE vs NOT GIVEN:</b>
      <br><br>
      Passage không chỉ nhắc đến tourism.
      <br>
      Nó nói rất rõ:
      <br>
      <b>the economy ... depends on tourism</b>.
      <br><br>
      Đây là bằng chứng trực tiếp cho tầm quan trọng của tourism.
      <br>
      → TRUE.
    `,

    vocab: `
      <b>economy</b> = nền kinh tế
      <br>
      <b>depend on</b> = phụ thuộc vào
      <br>
      <b>tourism</b> = ngành du lịch
      <br>
      <b>annual turnover</b> = doanh thu hàng năm
      <br>
      <b>scuba diving</b> = lặn bình khí
      <br>
      <b>snorkeling</b> = lặn với ống thở
    `,

    grammar: `
      <b>depend on + noun</b>
      <br>
      = phụ thuộc vào...
      <br><br>
      "The economy depends on tourism."
      <br>
      → tourism is extremely important to the economy.
    `,

    lesson: `
      <b>LESSON:</b>
      <br>
      Các cấu trúc:
      <br>
      <b>depend on</b>,
      <b>rely on</b>,
      <b>be essential to</b>,
      <b>be crucial to</b>
      <br>
      đều có thể được IELTS paraphrase thành ý:
      <br>
      <b>be fundamentally/critically important</b>.
    `,

    colorClass: "ev-13"
  }

}
```
