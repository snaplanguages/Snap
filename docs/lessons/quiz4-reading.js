window.quizData = {
  title: "Reading Practice 4 | The Adolescents",
  testName: "Test 2",
  partName: "Passage 1",
  dbPrefix: "ielts_R_T2_P1",
  passageTitle: "The Adolescents",
  startQ: 1,
  endQ: 13,
  totalQuestions: 13,
  
  passageContent: `
<p class="paragraph"><strong>A.</strong> The American Academy of Pediatrics recognizes three stages of adolescence. These are early, middle and late adolescence, and each has its own developmental tasks. Teenagers move through these tasks at their own speed depending on their physical development and hormone levels. Although these stages are common to all teenagers, each child will go through them in his or her own highly individual ways.</p>
<p class="paragraph"><strong>B.</strong> During the early years young people make the first attempts to <span id="ev-4" class="ev-box">leave the dependent, secure role of a child and to establish themselves as unique individuals, independent of their parents.</span> Early adolescence is marked by rapid physical growth and maturation. The focus of adolescents’ self-concepts is thus often on their physical self and their evaluation of their physical acceptability. Early adolescence is also a period of <span id="ev-3" class="ev-box">intense conformity to peers. ‘Getting along,’ not being different, and being accepted</span> seem somehow pressing to the early adolescent. <span id="ev-2" class="ev-box">The worst possibility, from the view of the early adolescent, is to be seen by peers as ‘different’.</span></p>
<p class="paragraph"><strong>C.</strong> Middle adolescence is marked by the <span id="ev-6" class="ev-box">emergence of new thinking skills. The intellectual world of the young person is suddenly greatly expanded.</span> Their concerns about peers are more directed toward their <span id="ev-1" class="ev-box">opposite sexed peers</span>. It is also during this period that the move to establish psychological independence from one’s parents accelerates. Delinquency behavior may emerge since parental views are no longer seen as absolutely correct by adolescents. Despite some delinquent behavior, middle adolescence is a period during which young people are oriented toward what is right and proper. They are developing a sense of behavioral maturity and learning to control their impulsiveness.</p>
<p class="paragraph"><strong>D.</strong> Late adolescence is marked by the final preparations for adult roles. The developmental demands of late adolescence often extend into the period that we think of as young adulthood. Late adolescents attempt to crystallize their vocational goals and to establish a sense of personal identity. <span id="ev-5" class="ev-box">Their needs for peer approval are diminished</span> and they are largely psychologically independent from their parents. The shift to adulthood is nearly complete.</p>
<p class="paragraph"><strong>E.</strong> Some years ago, Professor Robert Havighurst of the University of Chicago proposed that stages in human development can best be thought of in terms of the developmental tasks that are part of the normal transition. He identified eleven developmental tasks associated with the adolescent transition. <span id="ev-7" class="ev-box">One developmental task an adolescent needs to achieve is to adjust to a new physical sense of self.</span> At no other time since birth does an individual undergo such rapid and profound physical changes as during early adolescence. Puberty is marked by sudden rapid growth in height and weight. Also, the young person experiences the emergence and accentuation of those physical traits that make him or her a boy or girl. <span id="ev-7-part2" class="ev-box">The effect of this rapid change is that young adolescent often becomes focused on his or her body.</span></p>
<p class="paragraph"><strong>F.</strong> Before adolescence, children’s thinking is dominated by a need to have a concrete example for any problem that they solve. Their thinking is constrained to what is real and physical. <span id="ev-11" class="ev-box">During adolescence, young people begin to recognize and understand abstractions.</span> The adolescent must adjust to increased cognitive demands at school. Adults see high school in part as a place where adolescents prepare for adult roles and responsibilities and in part as preparatory for further education. <span id="ev-8" class="ev-box">School curricula are frequently dominated by the inclusion of more abstract, demanding material, regardless of whether the adolescents have achieved formal thought.</span> Since <span id="ev-10" class="ev-box">not all adolescents make the intellectual transition at the same rate</span>, demands for abstract thinking prior to achievement of that ability may be frustrating.</p>
<p class="paragraph"><strong>G.</strong> During adolescence, as teens develop increasingly complex knowledge systems and a sense of self, they also <span id="ev-9" class="ev-box">adopt an integrated set of values and morals.</span> During the early stages of moral development, parents provide their child with a structured set of rules of what is right and wrong, what is acceptable and unacceptable. Eventually, the adolescent must assess the parents’ values as they come into conflict with values expressed by peers and other segments of society. To reconcile differences, the adolescent <span id="ev-9-part2" class="ev-box">restructures those beliefs into a personal ideology.</span></p>
<p class="paragraph"><strong>H.</strong> The adolescent must develop expanded verbal skills. As adolescents mature intellectually, as they face increased school demands, and as they prepare for adult roles, they must develop new verbal skills to accommodate more complex concepts and tasks. Their limited language of childhood is no longer adequate. <span id="ev-12" class="ev-box">Adolescents may appear less competent because of their inability to express themselves meaningfully.</span></p>
<p class="paragraph"><strong>I.</strong> <span id="ev-13" class="ev-box">The adolescent must establish emotional and psychological independence from his or her parents.</span> Childhood is marked by a strong dependence on one’s parents. Adolescents may yearn to keep that safe, secure, supportive, dependent relationship. Yet, to be an adult implies a sense of independence, of autonomy, of being one’s own person. <span id="ev-13-part2" class="ev-box">Adolescents may vacillate between their desire for dependence and their need to be independent.</span> In an attempt to assert their need for independence and individuality, adolescents may respond with what appears to be hostility and lack of cooperation.</p>
<p class="paragraph"><strong>J.</strong> Adolescents do not progress through these multiple developmental tasks separately. At any given time, adolescents may be dealing with several. Further, the centrality of specific developmental tasks varies with early, middle, and late periods of the transition.</p>
`,

  questionsHTML: `
<div class="question-section">
  <div class="instruction">
    <strong>Questions 1-6: Match the characteristics with the stages of adolescence.</strong><br>
    Select the correct letter, <strong>A</strong>, <strong>B</strong>, or <strong>C</strong>, in answer boxes 1-6.<br><br>
    <strong>A.</strong> early adolescence (Thanh thiếu niên đầu)<br>
    <strong>B.</strong> middle adolescence (Thanh thiếu niên giữa)<br>
    <strong>C.</strong> later adolescence (Thanh thiếu niên muộn)
  </div>
  
  <div class="q-row" id="q-row-1">
    <span class="q-num">1.</span>
    <span class="q-content">
      interested in the opposite sex
      <select class="input-select" id="ans-1" onchange="updateNav(1)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span id="fb-1" class="feedback"></span>
    </span>
  </div>
  <div id="exp-1"></div>

  <div class="q-row" id="q-row-2">
    <span class="q-num">2.</span>
    <span class="q-content">
      exposure to danger
      <select class="input-select" id="ans-2" onchange="updateNav(2)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span id="fb-2" class="feedback"></span>
    </span>
  </div>
  <div id="exp-2"></div>

  <div class="q-row" id="q-row-3">
    <span class="q-num">3.</span>
    <span class="q-content">
      the same as others
      <select class="input-select" id="ans-3" onchange="updateNav(3)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span id="fb-3" class="feedback"></span>
    </span>
  </div>
  <div id="exp-3"></div>

  <div class="q-row" id="q-row-4">
    <span class="q-num">4.</span>
    <span class="q-content">
      beginning to form individual thinking without family context
      <select class="input-select" id="ans-4" onchange="updateNav(4)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span id="fb-4" class="feedback"></span>
    </span>
  </div>
  <div id="exp-4"></div>

  <div class="q-row" id="q-row-5">
    <span class="q-num">5.</span>
    <span class="q-content">
      less need the approval of friends
      <select class="input-select" id="ans-5" onchange="updateNav(5)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span id="fb-5" class="feedback"></span>
    </span>
  </div>
  <div id="exp-5"></div>

  <div class="q-row" id="q-row-6">
    <span class="q-num">6.</span>
    <span class="q-content">
      intellectual booming
      <select class="input-select" id="ans-6" onchange="updateNav(6)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
      </select>
      <span id="fb-6" class="feedback"></span>
    </span>
  </div>
  <div id="exp-6"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 7-10: Complete each sentence with the correct ending, A–F, below.</strong><br>
    Select the correct letter, <strong>A–F</strong>, in boxes 7-10.
  </div>
  
  <div class="headings-list" style="font-size: 14px; margin-bottom: 20px; color: #475569; background: #f8fafc; padding: 15px; border-radius: 8px; border: 1px dashed #cbd5e1; line-height: 1.6;">
    <strong>A.</strong> form personal identity with a set of morals and values (Hình thành bản sắc cá nhân với một hệ chuẩn mực đạo đức và giá trị)<br>
    <strong>B.</strong> develops stable and productive peer relationships (Phát triển mối quan hệ bạn bè ổn định và hiệu quả)<br>
    <strong>C.</strong> are designed to be more challenging than some can accept (Được thiết kế đầy thách thức hơn mức một số người có thể tiếp nhận)<br>
    <strong>D.</strong> varies from people to people (Thay đổi/khác nhau giữa mỗi người)<br>
    <strong>E.</strong> focuses on creating a self-image (Tập trung vào việc kiến tạo hình ảnh cá nhân)<br>
    <strong>F.</strong> become an extension of their parents (Trở thành một phần kéo dài của cha mẹ)
  </div>

  <div class="q-row" id="q-row-7">
    <span class="q-num">7.</span>
    <span class="q-content">
      One of Havighurst’s research
      <select class="input-select" id="ans-7" onchange="updateNav(7)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
      <span id="fb-7" class="feedback"></span>
    </span>
  </div>
  <div id="exp-7"></div>

  <div class="q-row" id="q-row-8">
    <span class="q-num">8.</span>
    <span class="q-content">
      High School Courses
      <select class="input-select" id="ans-8" onchange="updateNav(8)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
      <span id="fb-8" class="feedback"></span>
    </span>
  </div>
  <div id="exp-8"></div>

  <div class="q-row" id="q-row-9">
    <span class="q-num">9.</span>
    <span class="q-content">
      Adolescence is a time when young people
      <select class="input-select" id="ans-9" onchange="updateNav(9)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
      <span id="fb-9" class="feedback"></span>
    </span>
  </div>
  <div id="exp-9"></div>

  <div class="q-row" id="q-row-10">
    <span class="q-num">10.</span>
    <span class="q-content">
      The developmental speed of thinking patterns
      <select class="input-select" id="ans-10" onchange="updateNav(10)">
        <option value="">Select...</option>
        <option value="A">A</option>
        <option value="B">B</option>
        <option value="C">C</option>
        <option value="D">D</option>
        <option value="E">E</option>
        <option value="F">F</option>
      </select>
      <span id="fb-10" class="feedback"></span>
    </span>
  </div>
  <div id="exp-10"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 11-13: Do the following statements agree with the information given in Reading Passage?</strong><br>
    In boxes 11-13 on your answer sheet, write:<br><br>
    <strong>TRUE</strong> if the statement agrees with the information<br>
    <strong>FALSE</strong> if the statement contradicts the information<br>
    <strong>NOT GIVEN</strong> if there is no information on this
  </div>

  <div class="q-row" id="q-row-11">
    <span class="q-num">11.</span>
    <span class="q-content">
      The adolescent lacks the ability to think abstractly.
      <select class="input-select" id="ans-11" onchange="updateNav(11)">
        <option value="">Select...</option>
        <option value="TRUE">TRUE</option>
        <option value="FALSE">FALSE</option>
        <option value="NOT GIVEN">NOT GIVEN</option>
      </select>
      <span id="fb-11" class="feedback"></span>
    </span>
  </div>
  <div id="exp-11"></div>

  <div class="q-row" id="q-row-12">
    <span class="q-num">12.</span>
    <span class="q-content">
      Adolescents may have a deficit in their language ability.
      <select class="input-select" id="ans-12" onchange="updateNav(12)">
        <option value="">Select...</option>
        <option value="TRUE">TRUE</option>
        <option value="FALSE">FALSE</option>
        <option value="NOT GIVEN">NOT GIVEN</option>
      </select>
      <span id="fb-12" class="feedback"></span>
    </span>
  </div>
  <div id="exp-12"></div>

  <div class="q-row" id="q-row-13">
    <span class="q-num">13.</span>
    <span class="q-content">
      The adolescent experiences a transition from reliance on his parents to independence.
      <select class="input-select" id="ans-13" onchange="updateNav(13)">
        <option value="">Select...</option>
        <option value="TRUE">TRUE</option>
        <option value="FALSE">FALSE</option>
        <option value="NOT GIVEN">NOT GIVEN</option>
      </select>
      <span id="fb-13" class="feedback"></span>
    </span>
  </div>
  <div id="exp-13"></div>
</div>
`,

  correctAnswers: {
    1: "B",
    2: "A",
    3: "A",
    4: "A",
    5: "C",
    6: "B",
    7: "E",
    8: "C",
    9: "A",
    10: "D",
    11: "FALSE",
    12: "TRUE",
    13: "TRUE"
  },

  explanations: {
    1: {
      translation: `<b>Câu hỏi:</b> Quan tâm, hứng thú với người khác giới.<br><br><b>Nói đơn giản:</b> Giai đoạn nào bắt đầu xuất hiện sự chú ý và bận tâm nhiều hơn đối với những người bạn khác giới?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features — Ghép đặc điểm với giai đoạn tương ứng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph C
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Their concerns about peers are more directed toward their opposite sexed peers."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>Their concerns about peers</b>: Những mối bận tâm/quan tâm của thanh thiếu niên về bạn bè.</li>
  <li><b>are more directed toward</b>: được định hướng nhiều hơn về phía / tập trung nhiều hơn vào.</li>
  <li><b>their opposite sexed peers</b>: những người bạn cùng trang lứa khác giới của họ.</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Những bận tâm của họ về bạn bè đồng trang lứa giờ đây được hướng nhiều hơn tới những người bạn khác giới.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">interested in</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">concerns ... directed toward</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Quan tâm, chú ý = Mối bận tâm hướng tới một đối tượng cụ thể.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">the opposite sex</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">opposite sexed peers</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Người khác giới = Bạn bè khác giới tính.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Bài đọc chỉ ra rằng sự dịch chuyển mối bận tâm từ bạn bè nói chung sang bạn bè khác giới (opposite sexed peers) là đặc trưng nổi bật xuất hiện trong giai đoạn <b>Middle adolescence</b> (Thanh thiếu niên giữa).
<br>
- Do đó, câu hỏi này ghép với đáp án <b>B</b>.
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>A (early adolescence):</b> Ở giai đoạn đầu, sự tập trung của trẻ chủ yếu hướng vào "physical self" (bản thân về mặt thể chất) và áp lực "conformity to peers" (hòa nhập với nhóm bạn cùng giới/nói chung để không bị coi là khác biệt) chứ chưa hướng mạnh tới bạn khác giới.
<br>
- <b>C (later adolescence):</b> Giai đoạn này tập trung vào việc chuẩn bị cho vai trò người lớn (adult roles) và định hình mục tiêu nghề nghiệp (vocational goals) chứ không phải là mốc bắt đầu nảy sinh mối quan tâm khác giới mạnh mẽ như giai đoạn giữa.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Mối quan hệ yêu đương hay quan tâm khác giới thường bị lầm tưởng là thuộc về giai đoạn muộn (later adolescence) vì lúc đó mới chín chắn. Tuy nhiên, bài đọc mô tả sự dịch chuyển tâm lý này bắt đầu "bùng nổ" và định hình rõ rệt nhất ngay từ giai đoạn giữa (middle). Hãy luôn bám sát văn bản thay vì tự suy diễn.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Lỗi phổ biến nhất là không đọc kỹ từ bổ nghĩa "opposite sexed" mà chỉ thấy từ "peers" ở đoạn B (early) rồi chọn ngay đáp án A. Hãy nhớ áp lực đồng trang lứa ở đoạn B là "peers" nói chung, còn bạn khác giới "opposite sexed peers" chỉ xuất hiện ở đoạn C.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc: <b>be directed toward something</b> (được hướng tới/định hướng vào cái gì). Việc thêm trạng từ "more" tạo cấu trúc so sánh hơn, nhấn mạnh sự thay đổi về mức độ tập trung so với giai đoạn trước.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Khi làm dạng bài Matching Features, hãy khoanh vùng các thực thể so sánh (ở đây là các giai đoạn tuổi) và gạch chân từ khóa mang tính phân biệt tuyệt đối như "opposite sexed" để đối chiếu chính xác.`,
      vocab: `<b>peer (n)</b>: bạn đồng trang lứa<br><b>concern (n)</b>: mối bận tâm, sự lo ngại<br><b>opposite sexed (adj)</b>: khác giới<br><b>direct toward (v)</b>: hướng về phía, tập trung vào`,
      colorClass: "ev-1"
    },
    2: {
      translation: `<b>Câu hỏi:</b> Tiếp xúc/phơi nhiễm với nguy cơ hoặc rủi ro (hiểm họa tâm lý xã hội).<br><br><b>Nói đơn giản:</b> Giai đoạn nào mà trẻ phải đối mặt với nỗi sợ hoặc mối đe dọa tinh thần lớn nhất từ bạn bè xung quanh?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features — Ghép đặc điểm với giai đoạn tương ứng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph B
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"The worst possibility, from the view of the early adolescent, is to be seen by peers as ‘different’."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>The worst possibility</b>: Khả năng tồi tệ nhất / viễn cảnh khủng khiếp nhất (đại diện cho "danger" - nguy cơ/hiểm họa lớn nhất đối với họ).</li>
  <li><b>from the view of the early adolescent</b>: dưới góc nhìn của một thanh thiếu niên giai đoạn đầu (early adolescence).</li>
  <li><b>is to be seen by peers as 'different'</b>: là bị bạn bè đồng trang lứa nhìn nhận như một kẻ "khác biệt".</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Đối với những bạn trẻ ở giai đoạn đầu dậy thì, viễn cảnh tồi tệ nhất chính là bị bạn bè xung quanh coi là kẻ khác biệt.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">exposure to danger</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">the worst possibility ... to be seen as 'different'</td>
      <td style="padding: 8px; border: 1px solid #ddd;">"Mối nguy hại/hiểm họa" lớn nhất ở lứa tuổi này không phải là tai nạn thể chất, mà là "khả năng tồi tệ nhất" về mặt tinh thần: bị cô lập và coi là lập dị trước tập thể.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Trong tâm lý học tuổi dậy thì đầu (early adolescence), nhu cầu thuộc về một nhóm và được chấp nhận là cực kỳ cao. Bất kỳ rủi ro nào đe dọa sự hòa nhập này (như bị coi là khác biệt) được coi là một "danger" (hiểm họa tinh thần) nghiêm trọng.
<br>
- Dẫn chứng nằm hoàn toàn ở đoạn B, tương ứng với <b>Early adolescence</b> (Đáp án <b>A</b>).
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>B (middle adolescence):</b> Đoạn C có nhắc đến "Delinquency behavior" (hành vi phạm pháp). Nhiều học sinh bị bẫy vì nghĩ "delinquency" mới là nguy hiểm thực sự. Tuy nhiên, bài đọc mô tả hành vi phạm pháp ở đây phát sinh do trẻ không còn coi quan điểm của cha mẹ là tuyệt đối đúng, chứ không nói việc phơi nhiễm nguy hiểm là đặc trưng tâm lý định hình lứa tuổi này.
<br>
- <b>C (later adolescence):</b> Giai đoạn này trẻ đã tự chủ, "peer approval is diminished" (nhu cầu được bạn bè chấp thuận giảm đi) nên họ ít bị tổn thương hoặc phơi nhiễm trước các rủi ro từ áp lực nhóm.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Bẫy lớn nhất là tìm kiếm từ "danger" hay "risk" một cách cơ học. Bài đọc sử dụng biện pháp ẩn dụ hóa: "the worst possibility" (khả năng tồi tệ nhất) để ám chỉ nguy cơ bị đào thải khỏi nhóm bạn bè. Hãy tập thói quen tư duy khái niệm (concept-matching) thay vì tìm từ khóa trùng khớp trực tiếp.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Chọn nhầm B vì nghĩ "delinquency" (hành vi nổi loạn) là nguy hiểm nhất. Hãy phân biệt ranh giới giữa hành vi phạm pháp (delinquency) và rủi ro tinh thần do áp lực nhóm (exposure to danger/worst possibility).
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc: <b>to be seen by someone as something</b> (bị ai đó nhìn nhận là như thế nào). Đây là cấu trúc bị động với danh động từ làm bổ ngữ sau hệ từ "is".
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Hiểm họa (danger/threat) trong các bài đọc về tâm lý học phát triển thường liên quan đến áp lực xã hội (social pressure) và nỗi sợ bị từ chối (fear of rejection). Đừng giới hạn tư duy ở những mối nguy vật lý thông thường.`,
      vocab: `<b>exposure (n)</b>: sự phơi nhiễm, tiếp xúc với rủi ro<br><b>possibility (n)</b>: khả năng, viễn cảnh<br><b>peer (n)</b>: bạn đồng lứa<br><b>different (adj)</b>: khác biệt`,
      colorClass: "ev-2"
    },
    3: {
      translation: `<b>Câu hỏi:</b> Trở nên giống với những người khác.<br><br><b>Nói đơn giản:</b> Lứa tuổi nào có nhu cầu hòa nhập mạnh mẽ, cố gắng hành xử và ăn mặc giống hệt bạn bè để không bị coi là lạc loài?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features — Ghép đặc điểm với giai đoạn tương ứng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph B
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Early adolescence is also a period of intense conformity to peers. ‘Getting along,’ not being different, and being accepted seem somehow pressing to the early adolescent."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>intense conformity to peers</b>: sự tuân thủ/bắt chước mạnh mẽ theo bạn bè đồng trang lứa.</li>
  <li><b>'Getting along'</b>: hòa nhập, chơi chung, hòa đồng.</li>
  <li><b>not being different, and being accepted</b>: không khác biệt và được chấp nhận.</li>
  <li><b>seem somehow pressing</b>: dường như vô cùng cấp bách/áp lực.</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Giai đoạn đầu của tuổi vị thành niên cũng là thời kỳ của sự rập khuôn, tuân thủ mạnh mẽ theo bạn bè. Việc hòa nhập, không trở nên khác biệt và được chấp nhận dường như là những áp lực rất lớn đối với họ.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">the same as others</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">intense conformity / not being different</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Giống như người khác = Tuân thủ rập khuôn nhóm / Không muốn khác biệt.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn B khẳng định giai đoạn đầu dậy thì (early adolescence) chịu áp lực rập khuôn cực lớn (intense conformity). Trẻ khát khao "không khác biệt" (not being different), tức là cố gắng trở nên giống hệt mọi người xung quanh để được chấp nhận.
<br>
- Do đó, câu hỏi này ghép với đáp án <b>A</b>.
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>B (middle adolescence):</b> Giai đoạn giữa trẻ bắt đầu phát triển các mối quan hệ riêng tư với bạn khác giới và bắt đầu nổi loạn, xa rời sự rập khuôn mù quáng.
<br>
- <b>C (later adolescence):</b> Giai đoạn muộn trẻ đã khẳng định được bản sắc cá nhân ("personal identity"), không còn cần rập khuôn theo nhóm nữa ("peer approval is diminished").
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Tránh tìm từ "same" trong văn bản một cách máy móc. Hãy liên hệ khái niệm "intense conformity" (sự tuân thủ rập khuôn) và "not being different" (không khác biệt) với trạng thái "the same as others".
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Học viên dễ chọn nhầm C vì nghĩ "later adolescence" là lúc mọi người ổn định và giống nhau như người trưởng thành. Thực chất, giai đoạn đầu mới là thời kỳ cực đoan nhất của sự bắt chước hành vi nhóm.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Danh động từ làm chủ ngữ: <i>'Getting along,' not being different, and being accepted</i> là một chuỗi danh động từ đóng vai trò chủ ngữ ghép, đi kèm với động từ <b>seem</b> ở dạng số nhiều.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Hòa nhập (conformity) và không khác biệt (not being different) là những paraphrase kinh điển của trạng thái "giống với những người khác" (the same as others) trong các bài viết về hành vi xã hội.`,
      vocab: `<b>conformity (n)</b>: sự tuân thủ, sự rập khuôn<br><b>get along (v)</b>: hòa thuận, hòa nhập<br><b>pressing (adj)</b>: cấp bách, tạo áp lực lớn<br><b>accept (v)</b>: chấp nhận`,
      colorClass: "ev-3"
    },
    4: {
      translation: `<b>Câu hỏi:</b> Bắt đầu hình thành tư duy độc lập ngoài bối cảnh gia đình.<br><br><b>Nói đơn giản:</b> Giai đoạn nào trẻ có những nỗ lực đầu tiên nhằm thoát khỏi vòng tay bảo bọc, phụ thuộc của cha mẹ để khẳng định bản thân như một cá nhân độc lập?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features — Ghép đặc điểm với giai đoạn tương ứng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph B
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"During the early years young people make the first attempts to leave the dependent, secure role of a child and to establish themselves as unique individuals, independent of their parents."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>make the first attempts</b>: thực hiện những nỗ lực đầu tiên (beginning).</li>
  <li><b>leave the dependent, secure role of a child</b>: rời bỏ vai trò phụ thuộc và an toàn của một đứa trẻ.</li>
  <li><b>establish themselves as unique individuals</b>: tự thiết lập bản thân như một cá nhân độc lập độc nhất (form individual thinking).</li>
  <li><b>independent of their parents</b>: độc lập, không phụ thuộc vào cha mẹ (without family context).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Trong những năm đầu đời của tuổi dậy thì, những người trẻ bắt đầu thực hiện những nỗ lực đầu tiên để thoát khỏi vai trò phụ thuộc, an toàn của một đứa trẻ và thiết lập bản thân thành một cá nhân độc nhất, độc lập với cha mẹ.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">beginning</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">make the first attempts</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Bắt đầu = Thực hiện những nỗ lực đầu tiên.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">individual thinking</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">establish themselves as unique individuals</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Tư duy cá nhân = Định hình bản thân là cá nhân độc nhất.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">without family context</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">independent of their parents</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Không có bối cảnh gia đình = Độc lập khỏi cha mẹ.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn B nói về "early years" (những năm đầu tiên của tuổi dậy thì - tức Early Adolescence). Đây là thời kỳ trẻ thực hiện những nỗ lực đầu tiên (first attempts) để tách biệt bản thân khỏi sự phụ thuộc vào cha mẹ, xây dựng cá tính độc lập.
<br>
- Do đó, câu hỏi này ghép với đáp án <b>A</b> (early adolescence).
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>B (middle adolescence):</b> Đoạn C có câu: <i>"the move to establish psychological independence from one’s parents accelerates."</i> (sự độc lập tâm lý tăng tốc). Từ khóa phân biệt ở đây là <b>accelerates</b> (tăng tốc). Giai đoạn đầu mới là nơi <b>bắt đầu</b> (first attempts), còn giai đoạn giữa là nơi sự phát triển này <b>tăng tốc</b>.
  <br>
- <b>C (later adolescence):</b> Giai đoạn muộn là lúc sự độc lập đã gần như hoàn tất ("largely psychologically independent... nearly complete"), không còn là "bắt đầu" nữa.
<br><br>
<b>⚠️ Bẫy cực kỳ tinh vi (First Attempt vs. Accelerate):</b>
<br>
Cuộc đối đầu giữa "make the first attempts" (Đoạn B - Early) và "accelerates" (Đoạn C - Middle). Câu hỏi yêu cầu tìm giai đoạn <b>bắt đầu</b> (beginning), do đó bạn bắt buộc phải chọn Early (A).
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Chọn nhầm B vì đọc lướt thấy cụm "establish psychological independence" ở đoạn C mà bỏ quên chữ "first attempts" (bắt đầu) ở đoạn B.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc: <b>make attempts to do something</b> (nỗ lực làm gì).
- Tính từ đi kèm giới từ: <b>independent of someone/something</b> (độc lập khỏi ai/cái gì).
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Hãy luôn theo dõi sát các trạng từ và động từ chỉ tiến trình phát triển: <i>begin / start / first attempt</i> (bắt đầu) vs <i>accelerate / speed up / intensify</i> (tăng tốc) vs <i>complete / finish / diminish</i> (hoàn tất/giảm bớt). Sự phân hóa này quyết định đáp án chính xác.`,
      vocab: `<b>attempt (n/v)</b>: sự nỗ lực, cố gắng<br><b>independent of (adj)</b>: độc lập khỏi<br><b>secure (adj)</b>: an toàn, bảo đảm<br><b>establish (v)</b>: thiết lập, khẳng định`,
      colorClass: "ev-4"
    },
    5: {
      translation: `<b>Câu hỏi:</b> Ít cần sự chấp thuận hay thừa nhận từ bạn bè hơn.<br><br><b>Nói đơn giản:</b> Ở giai đoạn nào nhu cầu được bạn bè đồng trang lứa công nhận, phê duyệt và ủng hộ không còn quá cấp bách và bắt đầu giảm dần?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features — Ghép đặc điểm với giai đoạn tương ứng.
<br><br>
<b>📍 V vị trí dẫn chứng:</b> Paragraph D
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Their needs for peer approval are diminished and they are largely psychologically independent from their parents."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>Their needs for peer approval</b>: Nhu cầu về sự chấp thuận từ bạn bè đồng trang lứa của họ.</li>
  <li><b>are diminished</b>: bị giảm bớt / suy giảm rõ rệt (less need).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Nhu cầu được bạn bè đồng trang lứa chấp thuận của họ đã giảm bớt và họ phần lớn độc lập về mặt tâm lý với cha mẹ.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">less need</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">needs ... are diminished</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Nhu cầu ít đi = Nhu cầu bị giảm bớt (diminish).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">approval of friends</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">peer approval</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Sự chấp thuận của bạn bè = Sự thừa nhận/phê duyệt từ bạn đồng lứa.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn D thảo luận về "Late adolescence" (thanh thiếu niên muộn). Tại giai đoạn này, nhu cầu được bạn bè phê duyệt đã giảm sút rõ rệt (diminished). Trẻ đã định hình vững vàng cá tính và bản sắc cá nhân riêng nên không còn quá phụ thuộc vào đánh giá từ nhóm.
<br>
- Do đó, câu hỏi này ghép với đáp án <b>C</b> (later adolescence).
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>A (early adolescence):</b> Giai đoạn đầu là lúc nhu cầu được chấp nhận cực kỳ khẩn thiết, áp lực rập khuôn cực lớn ("being accepted seem somehow pressing"). Trái ngược hoàn toàn với "less need".
<br>
- <b>B (middle adolescence):</b> Giai đoạn giữa trẻ vẫn bận tâm sâu sắc đến bạn bè, đặc biệt là bạn khác giới ("Their concerns about peers are more directed...").
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Cần nắm vững từ trái nghĩa: "pressing" (cấp bách/cực kỳ cần) ở đoạn B trái nghĩa với "diminished" (giảm bớt/ít cần) ở đoạn D. Phải hiểu rõ sắc thái từ vựng để không bị nhầm lẫn giữa các giai đoạn.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Học viên thường không biết nghĩa của từ "diminished" (bị thu nhỏ, giảm bớt) nên không thiết lập được mối liên hệ đồng nghĩa với "less need".
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Thể bị động ở thì hiện tại đơn: <b>are diminished</b> (bị giảm đi/suy yếu). Trạng thái này mô tả một kết quả của quá trình trưởng thành tâm lý tự nhiên.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Từ vựng chỉ sự gia tăng hay suy giảm là cốt lõi của các bài đọc IELTS. Hãy luôn ghi nhớ: <i>diminish = decrease = decline = drop = reduce = less</i>.`,
      vocab: `<b>diminish (v)</b>: giảm bớt, thu nhỏ<br><b>approval (n)</b>: sự chấp thuận, phê duyệt, thừa nhận<br><b>peer (n)</b>: bạn đồng lứa`,
      colorClass: "ev-5"
    },
    6: {
      translation: `<b>Câu hỏi:</b> Sự bùng nổ mạnh mẽ về mặt trí tuệ (tư duy).<br><br><b>Nói đơn giản:</b> Ở giai đoạn nào thế giới trí tuệ và các kỹ năng tư duy logic của trẻ đột ngột được mở rộng và phát triển vô cùng mạnh mẽ?`,
      exp: `<b>Dạng câu hỏi:</b> Matching Features — Ghép đặc điểm với giai đoạn tương ứng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph C
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Middle adolescence is marked by the emergence of new thinking skills. The intellectual world of the young person is suddenly greatly expanded."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>marked by the emergence of new thinking skills</b>: được đánh dấu bằng sự xuất hiện của các kỹ năng tư duy mới.</li>
  <li><b>The intellectual world of the young person</b>: Thế giới trí tuệ của người trẻ.</li>
  <li><b>is suddenly greatly expanded</b>: đột nhiên được mở rộng một cách mạnh mẽ (booming - bùng nổ).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Giai đoạn giữa của tuổi vị thành niên được đánh dấu bằng sự xuất hiện của các kỹ năng tư duy mới. Thế giới trí tuệ của người trẻ đột ngột được mở rộng vô cùng mạnh mẽ.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">intellectual booming</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">intellectual world ... suddenly greatly expanded</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Sự bùng nổ trí tuệ = Thế giới trí tuệ đột ngột mở rộng cực kỳ mạnh mẽ.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn C khẳng định "Middle adolescence" (thanh thiếu niên giữa) là thời kỳ bùng nổ về mặt nhận thức khi các kỹ năng tư duy mới xuất hiện và thế giới trí tuệ đột ngột phình to (suddenly greatly expanded).
<br>
- Do đó, câu hỏi này ghép với đáp án <b>B</b> (middle adolescence).
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>A (early adolescence):</b> Giai đoạn đầu chỉ tập trung vào sự phát triển nhanh về thể chất ("rapid physical growth and maturation") chứ chưa có sự bùng nổ mạnh mẽ về tư duy trừu tượng.
<br>
- <b>C (later adolescence):</b> Giai đoạn muộn chỉ là sự "tinh thể hóa" hay định hình cụ thể các mục tiêu nghề nghiệp thực tế ("crystallize their vocational goals") dựa trên nền tảng trí tuệ đã phát triển trước đó.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Tránh nhầm lẫn giữa sự bộc lộ/bắt đầu bùng nổ trí tuệ ("emergence/suddenly expanded" ở giai đoạn giữa) với việc ứng dụng trí tuệ để định hình mục tiêu thực tế ("crystallize goals" ở giai đoạn muộn).
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Học viên thấy từ "intellectual transition" ở đoạn F (thảo luận chung về trường học) nên bối rối không biết chọn giai đoạn nào. Đoạn F chỉ là phân tích học thuật chung, còn đặc trưng cụ thể của các giai đoạn tuổi phải bám theo các đoạn phân loại A, B, C, D ở đầu bài.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Trạng từ chỉ sự đột ngột: <b>suddenly</b> bổ nghĩa cho cụm động từ bị động <b>is greatly expanded</b>, tạo sắc thái diễn tả sự biến đổi nhanh chóng, mạnh mẽ (bùng nổ).
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Sự bùng nổ (booming/explosion) thường được bài viết IELTS mô tả bằng các cụm từ như <i>suddenly greatly expanded</i>, <i>rapid growth</i>, hoặc <i>exponential increase</i>.`,
      vocab: `<b>intellectual (adj)</b>: thuộc về trí tuệ, nhận thức<br><b>emergence (n)</b>: sự xuất hiện, nổi lên<br><b>expand (v)</b>: mở rộng, phát triển rộng ra<br><b>suddenly (adv)</b>: một cách đột ngột`,
      colorClass: "ev-6"
    },
    7: {
      translation: `<b>Câu hỏi:</b> Một trong những nghiên cứu của Havighurst... [tập trung vào việc tạo lập một hình ảnh bản thân].<br><br><b>Nói đơn giản:</b> Nghiên cứu của Havighurst chỉ ra rằng một nhiệm vụ quan trọng mà trẻ dậy thì phải đạt được là tự điều chỉnh để thích nghi với cảm quan thể chất mới về bản thân (self-image).`,
      exp: `<b>Dạng câu hỏi:</b> Sentence Completion — Hoàn thành câu với phần kết đúng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph E
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"One developmental task an adolescent needs to achieve is to adjust to a new physical sense of self. ... The effect of this rapid change is that young adolescent often becomes focused on his or her body."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>One developmental task ... associated with the adolescent transition</b>: Một nhiệm vụ phát triển gắn với quá trình chuyển đổi của trẻ vị thành niên (trong nghiên cứu gồm 11 nhiệm vụ của Giáo sư Havighurst).</li>
  <li><b>adjust to a new physical sense of self</b>: điều chỉnh để thích ứng với một cảm quan thể chất mới về bản thân.</li>
  <li><b>young adolescent often becomes focused on his or her body</b>: thiếu niên giai đoạn đầu thường trở nên tập trung cao độ vào cơ thể của chính mình.</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Một nhiệm vụ phát triển mà một thanh thiếu niên cần đạt được là thích nghi với cảm quan thể chất mới về bản thân... Ảnh hưởng của sự thay đổi nhanh chóng này là thanh thiếu niên thường tập trung nhiều vào cơ thể của mình.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">One of Havighurst’s research</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">Robert Havighurst ... proposed ... identified eleven developmental tasks</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Nghiên cứu của Havighurst = Giáo sư Robert Havighurst đề xuất và xác định các nhiệm vụ phát triển.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">focuses on creating a self-image</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">adjust to a new physical sense of self / focused on body</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Tập trung kiến tạo hình ảnh bản thân = Thích nghi với cảm nhận thể chất mới / tập trung cao độ vào cơ thể mình.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Giáo sư Havighurst đề xuất 11 nhiệm vụ phát triển. Đoạn E mô tả chi tiết nhiệm vụ đầu tiên là trẻ phải điều chỉnh để làm quen với cơ thể đang thay đổi nhanh chóng của mình (physical sense of self), khiến họ cực kỳ bận tâm về ngoại hình và hình ảnh cá nhân (self-image). 
<br>
- Do đó, vế này hoàn thành câu hoàn hảo với đáp án <b>E</b> (focuses on creating a self-image).
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>A (form personal identity with a set of morals and values):</b> Đây là một nhiệm vụ khác được nhắc tới ở đoạn G (đạo đức), không phải là trọng tâm của đoạn E khi bàn về Havighurst's task liên quan tới cơ thể thể chất.
  <br>
- <b>F (become an extension of their parents):</b> Sai hoàn toàn về mặt bản chất tâm lý học phát triển, vì mục tiêu của tuổi dậy thì là độc lập khỏi cha mẹ.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Tránh nhầm lẫn "physical sense of self" (cảm nhận thể chất về bản thân) với "personal identity" (bản sắc cá nhân toàn diện về đạo đức/giá trị). "Physical sense of self" thiên về ngoại hình, cơ thể (self-image).
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Học viên dễ chọn nhầm đáp án A hoặc B vì đọc lướt thấy "human development" rồi suy đoán theo lý thuyết chung chung. Hãy bám sát vào đoạn E vốn dành riêng để phân tích nhiệm vụ thích nghi thể chất của Havighurst.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc: <b>adjust to something</b> (điều chỉnh để thích ứng với cái gì). Danh từ <b>sense of self</b> chỉ nhận thức/cảm nhận về cái tôi cá nhân.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
<i>Physical sense of self</i> (cảm nhận thể chất về bản thân) và <i>focused on body</i> (tập trung vào cơ thể) là nền tảng cốt lõi được paraphrase thành <i>self-image</i> (hình ảnh bản thân/ngoại hình).`,
      vocab: `<b>adjust to (v)</b>: điều chỉnh, thích nghi với<br><b>physical sense of self (n)</b>: cảm nhận thể chất về bản thân<br><b>self-image (n)</b>: hình ảnh bản thân, ngoại hình<br><b>developmental task (n)</b>: nhiệm vụ phát triển`,
      colorClass: "ev-7"
    },
    8: {
      translation: `<b>Câu hỏi:</b> Các chương trình học ở trường cấp Ba... [được thiết kế đầy thách thức hơn mức một số người có thể tiếp thu].<br><br><b>Nói đơn giản:</b> Chương trình học cấp Ba thường chứa các nội dung trừu tượng và cực kỳ nặng, được thiết kế ở mức độ thách thức vượt trội so với tốc độ phát triển tư duy thực tế của một số học sinh, gây ra sự ức chế cho họ.`,
      exp: `<b>Dạng câu hỏi:</b> Sentence Completion — Hoàn thành câu với phần kết đúng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"School curricula are frequently dominated by the inclusion of more abstract, demanding material, regardless of whether the adolescents have achieved formal thought. ... demands for abstract thinking prior to achievement of that ability may be frustrating."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>School curricula</b>: Chương trình học ở trường học (High School Courses).</li>
  <li><b>dominated by the inclusion of more abstract, demanding material</b>: bị áp đảo bởi việc đưa vào các tài liệu trừu tượng và đòi hỏi cao hơn nhiều (more challenging).</li>
  <li><b>regardless of whether the adolescents have achieved formal thought</b>: bất kể việc học sinh đã đạt được tư duy chính thức hay chưa.</li>
  <li><b>demands for abstract thinking prior to achievement of that ability may be frustrating</b>: những yêu cầu tư duy trừu tượng trước khi trẻ đạt được năng lực đó có thể gây ra sự ức chế, nản lòng (more challenging than some can accept).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Chương trình học ở trường học thường xuyên bị áp đảo bởi việc đưa vào các tài liệu trừu tượng, đòi hỏi cao hơn, bất kể thiếu niên đó đã đạt được tư duy chính thức hay chưa. Việc đòi hỏi tư duy trừu tượng trước khi thiếu niên có được khả năng đó có thể gây ức chế.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">High School Courses</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">School curricula / high school</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Chương trình học/các môn học cấp Ba = Chương trình học cấp Ba/trường trung học.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">are designed to be more challenging</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">dominated by ... more abstract, demanding material</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Được thiết kế đầy thách thức = Bị áp đảo bởi các tài liệu trừu tượng, đòi hỏi cực cao (demanding).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">than some can accept</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">prior to achievement ... may be frustrating / not all ... make transition at the same rate</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Hơn mức một số người có thể tiếp nhận = Xuất hiện trước khi đạt năng lực khiến học sinh ức chế (frustrating) / không phải ai cũng chuyển đổi cùng tốc độ.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn F chỉ ra chương trình học cấp ba (school curricula) nhồi nhét nhiều kiến thức trừu tượng, đòi hỏi cao (demanding material) bất chấp việc học sinh đã sẵn sàng hay chưa. Với những học sinh chưa đạt tới trình độ tư duy trừu tượng, những yêu cầu này vượt quá khả năng tiếp nhận của họ và gây ức chế (frustrating). 
<br>
- Do đó, vế này hoàn thành câu hoàn hảo với đáp án <b>C</b>.
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>D (varies from people to people):</b> Tốc độ phát triển tư duy mới là thứ thay đổi tùy người ("not all make transition at the same rate"), chứ bản thân "High School Courses" là chương trình cố định của nhà trường, không đổi theo từng cá nhân.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Bẫy đánh tráo chủ ngữ: Đừng nhầm lẫn giữa <i>chương trình học</i> (courses - mang tính cố định và quá tải) với <i>tốc độ phát triển nhận thức của học sinh</i> (transition rate - mang tính biến thiên tùy người).
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Học viên dễ chọn nhầm D vì thấy từ "transition" ở cuối đoạn F gắn với tốc độ phát triển. Hãy nhớ: Chủ ngữ câu hỏi là "High School Courses" (các khóa học), do đó đặc trưng của nó là sự nặng nề, quá tải đối với một bộ phận học sinh.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc nhượng bộ: <b>regardless of whether ...</b> (bất kể liệu rằng... hay không). Đây là cấu trúc nâng cao dùng để diễn tả sự việc xảy ra bất chấp điều kiện đi kèm.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Từ <i>demanding</i> (đòi hỏi cao, khắt khe) và <i>frustrating</i> (gây ức chế, nản lòng vì quá tải) là các paraphrase hoàn hảo cho khái niệm <i>more challenging than some can accept</i>.`,
      vocab: `<b>curriculum (n, số nhiều: curricula)</b>: chương trình học<br><b>demanding (adj)</b>: đòi hỏi cao, đầy thử thách<br><b>frustrating (adj)</b>: gây ức chế, nản lòng, bất lực<br><b>regardless of (prep)</b>: bất kể, bất chấp`,
      colorClass: "ev-8"
    },
    9: {
      translation: `<b>Câu hỏi:</b> Tuổi dậy thì là thời điểm mà những người trẻ tuổi... [hình thành bản sắc cá nhân với một bộ đạo đức và giá trị].<br><br><b>Nói đơn giản:</b> Đây là giai đoạn người trẻ tự xây dựng bản sắc cá nhân riêng cho mình bằng cách tự định hình và tích hợp một hệ thống đạo đức và các giá trị sống cá nhân độc lập.`,
      exp: `<b>Dạng câu hỏi:</b> Sentence Completion — Hoàn thành câu với phần kết đúng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph G
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"During adolescence, as teens develop increasingly complex knowledge systems and a sense of self, they also adopt an integrated set of values and morals. ... To reconcile differences, the adolescent restructures those beliefs into a personal ideology."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>develop increasingly complex knowledge systems and a sense of self</b>: phát triển hệ thống kiến thức ngày càng phức tạp và cảm nhận về cái tôi (personal identity).</li>
  <li><b>adopt an integrated set of values and morals</b>: tiếp nhận một bộ các giá trị và chuẩn mực đạo đức được tích hợp thống nhất.</li>
  <li><b>reconcile differences ... restructures those beliefs into a personal ideology</b>: hòa giải các khác biệt... và tái cấu trúc những niềm tin đó thành một hệ tư tưởng cá nhân riêng biệt.</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Trong thời kỳ thanh thiếu niên, khi thanh thiếu niên phát triển hệ thống kiến thức ngày càng phức tạp và cảm nhận về cái tôi, họ cũng tiếp nhận một bộ giá trị và đạo đức tích hợp. Để hòa giải các khác biệt, thanh thiếu niên tái cấu trúc những niềm tin đó thành một hệ tư tưởng cá nhân riêng.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">form personal identity</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">develop ... a sense of self / personal ideology</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Hình thành bản sắc cá nhân = Phát triển cảm nhận về cái tôi / xây dựng hệ tư tưởng cá nhân riêng.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">with a set of morals and values</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">adopt an integrated set of values and morals</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Với một bộ đạo đức và giá trị = Tiếp nhận một bộ giá trị và đạo đức tích hợp.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn G mô tả sự phát triển đạo đức của thiếu niên: họ không còn tuân thủ mù quáng quy tắc của cha mẹ, mà tự mình hòa giải các xung đột giá trị giữa cha mẹ và bạn bè để tự kiến tạo một hệ tư tưởng cá nhân riêng (personal ideology / personal identity) dựa trên một bộ giá trị đạo đức tự chọn lọc. 
<br>
- Điều này khớp hoàn hảo với phương án <b>A</b>.
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>F (become an extension of their parents):</b> Hoàn toàn mâu thuẫn với ý "tự định hình niềm tin cá nhân độc lập khỏi cha mẹ" (restructure parents' values).
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Đừng nghĩ rằng "morals and values" (đạo đức và giá trị) là do cha mẹ áp đặt sẵn từ nhỏ. Đoạn G ghi rõ ở tuổi dậy thì, trẻ tự <b>tái cấu trúc</b> (restructure) chúng thành hệ tư tưởng của riêng mình (personal ideology), tức là họ tự chủ động kiến tạo chứ không thụ động tiếp nhận.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Chọn nhầm các đáp án liên quan tới bạn bè vì thấy nhắc nhiều đến "peers" ở đoạn G. Hãy lưu ý "peers" ở đây chỉ là chất xúc tác gây xung đột giá trị, còn hành động cốt lõi của trẻ vẫn là tự xây dựng hệ tư tưởng riêng (personal ideology).
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc: <b>restructure A into B</b> (tái cấu trúc, cải tổ cái A thành cái B). Cụm từ <b>integrated set</b> chỉ một tập hợp đã được chọn lọc và kết hợp chặt chẽ với nhau.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
<i>Sense of self</i> (cảm nhận về cái tôi) và <i>personal ideology</i> (hệ tư tưởng cá nhân) là những cách diễn đạt đồng nghĩa cốt lõi của <i>personal identity</i> (bản sắc cá nhân) trong các nghiên cứu tâm lý học.`,
      vocab: `<b>personal identity (n)</b>: bản sắc cá nhân, nhận thức về bản thân<br><b>adopt (v)</b>: tiếp nhận, áp dụng<br><b>integrated (adj)</b>: tích hợp, thống nhất<br><b>ideology (n)</b>: hệ tư tưởng, hệ niềm tin cốt lõi`,
      colorClass: "ev-9"
    },
    10: {
      translation: `<b>Câu hỏi:</b> Tốc độ phát triển của các mô thức tư duy... [thay đổi tùy thuộc vào từng người].<br><br><b>Nói đơn giản:</b> Quá trình chuyển đổi nhận thức và phát triển năng lực tư duy trừu tượng của mỗi đứa trẻ diễn ra với tốc độ rất khác nhau, không ai giống ai.`,
      exp: `<b>Dạng câu hỏi:</b> Sentence Completion — Hoàn thành câu với phần kết đúng.
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Since not all adolescents make the intellectual transition at the same rate, demands for abstract thinking prior to achievement of that ability may be frustrating."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>not all adolescents make the intellectual transition at the same rate</b>: không phải tất cả thanh thiếu niên đều thực hiện sự chuyển đổi trí tuệ/nhận thức với cùng một tốc độ (varies from people to people).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Vì không phải tất cả thanh thiếu niên đều thực hiện chuyển đổi trí tuệ ở cùng một tốc độ, các yêu cầu về tư duy trừu tượng trước khi đạt được khả năng đó có thể gây ức chế.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">developmental speed</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">rate of transition</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Tốc độ phát triển = Tốc độ chuyển đổi nhận thức.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">thinking patterns</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">intellectual transition / abstract thinking</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Mô thức tư duy = Chuyển đổi trí tuệ / tư duy trừu tượng.</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">varies from people to people</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">not all ... at the same rate</td>
      <td style="padding: 8px; border: 1px solid #ddd;">Khác nhau ở mỗi người = Không phải tất cả đều diễn ra ở cùng một tốc độ.</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- Đoạn F khẳng định trực tiếp rằng không phải mọi thiếu niên đều trưởng thành về mặt trí tuệ với cùng một tốc độ (not all make transition at the same rate). Điều này có nghĩa là tốc độ phát triển tư duy của họ biến thiên và khác nhau tùy thuộc vào từng cá nhân (varies from people to people). 
<br>
- Sự tương thích này khẳng định đáp án là <b>D</b>.
<br><br>
<b>🚫 Phân tích các lựa chọn khác (Distractors):</b>
<br>
- <b>C (are designed to be more challenging...):</b> Phương án này bổ nghĩa cho "High School Courses" ở câu 8 chứ không bổ nghĩa cho tốc độ phát triển nhận thức của con người.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
Cấu trúc phủ định bán phần: <b>not all ... at the same rate</b> (không phải tất cả đều có cùng tốc độ) tương đương về mặt logic ngôn ngữ học với <b>varies</b> (thay đổi, biến thiên tùy người). Hãy làm quen với tư duy chuyển đổi từ phủ định sang biến thiên này.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Học viên dễ nhầm lẫn giữa "speed" (tốc độ) và "ability" (khả năng). Bài đọc không nói năng lực cuối cùng của họ khác nhau, mà nhấn mạnh <b>tốc độ</b> (rate) họ đạt được năng lực đó là khác nhau.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Cấu trúc: <b>varies from A to A</b> hoặc <b>varies from person to person</b> (thay đổi từ người này sang người khác). Đây là cụm động từ tự động (intransitive verb) cực kỳ phổ biến để mô tả sự đa dạng.
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Khi một bài đọc IELTS đề cập đến việc "không phải ai cũng đạt được cái gì đó cùng một lúc/tốc độ" (<i>not everyone... at the same time/rate</i>), câu hỏi tương ứng chắc chắn sẽ dùng từ <i>varies</i>, <i>different</i>, hoặc <i>diverse</i>.`,
      vocab: `<b>vary (v)</b>: thay đổi, biến đổi, khác nhau<br><b>rate (n)</b>: tốc độ, tỷ lệ<br><b>intellectual (adj)</b>: thuộc về trí tuệ, nhận thức<br><b>transition (n)</b>: sự chuyển đổi, chuyển giao`,
      colorClass: "ev-10"
    },
    11: {
      translation: `<b>Câu hỏi:</b> Thanh thiếu niên thiếu hoàn toàn khả năng suy nghĩ một cách trừu tượng.<br><br><b>Nói đơn giản:</b> Có phải ở lứa tuổi dậy thì, trẻ hoàn toàn không có khả năng tư duy trừu tượng hay không?`,
      exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph F
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"During adolescence, young people begin to recognize and understand abstractions."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>During adolescence</b>: Trong thời kỳ thanh thiếu niên (tuổi dậy thì).</li>
  <li><b>young people begin to</b>: những người trẻ bắt đầu (đang trong quá trình phát triển).</li>
  <li><b>recognize and understand abstractions</b>: nhận diện và thấu hiểu các khái niệm trừu tượng (think abstractly).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Trong thời kỳ thanh thiếu niên, những người trẻ tuổi bắt đầu nhận biết và thấu hiểu các khái niệm trừu tượng.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">lacks the ability</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">begin to recognize and understand</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold; color: #d32f2f;">Mâu thuẫn trực tiếp (Khẳng định không có khả năng vs Khẳng định bắt đầu nhận thức và hiểu).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">think abstractly</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">understand abstractions</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp nghĩa hoàn toàn (Tư duy trừu tượng = Thấu hiểu các khái niệm trừu tượng).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi khẳng định:</b> Trẻ dậy thì thiếu (lacks - không có) khả năng tư duy trừu tượng.
<br>
- <b>Bài đọc khẳng định:</b> Trẻ dậy thì bắt đầu nhận thức và hiểu (begin to understand) các khái niệm trừu tượng.
<br>
- Hai thông tin này phủ định nhau hoàn toàn. Trẻ đang trong quá trình phát triển và hoàn toàn có khả năng bắt đầu hiểu nó, chứ không phải là "lacks" (thiếu hụt/không có). Do đó đáp án là <b>FALSE</b>.
<br><br>
<b>🔍 Phân biệt rạch ròi FALSE và NOT GIVEN:</b>
<br>
- Bạn chỉ chọn <i>FALSE</i> khi bài đọc cung cấp bằng chứng chống lại câu hỏi. Ở đây bài đọc ghi rõ trẻ bắt đầu "recognize and understand abstractions" (hiểu các khái niệm trừu tượng). Việc khẳng định trẻ có năng lực này và bắt đầu phát triển nó đã bác bỏ trực tiếp tuyên bố trẻ "lacks" (thiếu/không có) khả năng này. Vì vậy, đáp án bắt buộc là <i>FALSE</i>.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
- Đoạn F có câu: <i>"demands for abstract thinking prior to achievement of that ability may be frustrating"</i> (yêu cầu tư duy trừu tượng trước khi đạt được khả năng đó có thể gây ức chế). Học viên dễ bám vào câu này để lập luận: "À, vì họ chưa đạt được khả năng (prior to achievement) nên họ bị thiếu khả năng (lacks), vậy câu này là TRUE".
  <br>
- Đây là bẫy đánh tráo thời điểm cực kỳ tinh vi! Câu này chỉ mô tả trạng thái tạm thời của một số trẻ khi bị ép học quá sớm ở trường. Về mặt sinh học phát triển toàn diện của cả quá trình dậy thì (Adolescence nói chung), trẻ hoàn toàn bắt đầu nhận thức và hiểu được abstractions. Đề bài dùng từ "The adolescent" (nói chung) để quy kết cả lứa tuổi, trong khi cả lứa tuổi này đang phát triển năng lực đó. Do đó khẳng định "thiếu hoàn toàn" là sai.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
Lỗi phổ biến nhất là nhầm lẫn giữa "lacks the ability" (hoàn toàn không có năng lực) và "in the process of developing the ability" (đang trong quá trình phát triển năng lực).
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Động từ <b>lacks</b> (thiếu cái gì đó) là ngoại động từ trực tiếp.
- Cấu trúc: <b>begin to do something</b> (bắt đầu làm gì đó).
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Hãy cẩn giác với các từ chỉ trạng thái cực đoan như <i>lack, absence, unable</i> ở câu hỏi. Nếu bài đọc chỉ ra một quá trình đang bắt đầu phát triển (<i>begin to develop, start to learn</i>), tuyên bố "thiếu hoàn toàn" sẽ bị phán quyết là <b>FALSE</b>.`,
      vocab: `<b>lack (v)</b>: thiếu, không có<br><b>abstractly (adv)</b>: một cách trừu tượng<br><b>abstraction (n)</b>: khái niệm trừu tượng, sự trừu tượng<br><b>prior to (prep)</b>: trước khi`,
      colorClass: "ev-11"
    },
    12: {
      translation: `<b>Câu hỏi:</b> Thanh thiếu niên có thể gặp phải sự thiếu hụt/hạn chế tạm thời trong khả năng ngôn ngữ của họ.<br><br><b>Nói đơn giản:</b> Có phải ở lứa tuổi dậy thì, sự phát triển năng lực biểu đạt ngôn ngữ của trẻ có lúc không theo kịp tư duy phức tạp đang lớn dần, khiến trẻ gặp khó khăn trong việc diễn đạt bản thân một cách rõ ràng?`,
      exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph H
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"Adolescents may appear less competent because of their inability to express themselves meaningfully."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>Adolescents may appear less competent</b>: Thanh thiếu niên có thể trông có vẻ kém cỏi hơn (về mặt năng lực ngôn ngữ).</li>
  <li><b>because of their inability to express themselves meaningfully</b>: do họ không có khả năng diễn đạt bản thân một cách có ý nghĩa (sự suy giảm/thiếu hụt khả năng ngôn ngữ).</li>
  <li>Thêm dẫn chứng bổ trợ ở đầu đoạn H: <i>"Their limited language of childhood is no longer adequate."</i> (Ngôn ngữ giới hạn thời thơ ấu của họ không còn đủ đáp ứng nữa).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Thanh thiếu niên có thể trông có vẻ kém năng lực hơn vì họ không có khả năng diễn đạt bản thân một cách có ý nghĩa.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">may have a deficit</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">may appear less competent / inability / no longer adequate</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp hoàn toàn (Có sự thiếu hụt/hạn chế tạm thời tương đương với việc trông kém cỏi/không có khả năng diễn đạt/không còn đủ dùng).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">language ability</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">express themselves meaningfully / verbal skills</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp hoàn toàn (Năng lực ngôn ngữ = Diễn đạt bản thân có ý nghĩa / kỹ năng nói).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi nói:</b> Trẻ dậy thì có thể bị hạn chế/thiếu hụt (may have a deficit) về ngôn ngữ.
<br>
- <b>Bài đọc nói:</b> Trẻ có thể trông kém năng lực hơn (appear less competent) do không thể diễn đạt bản thân một cách rõ ràng (inability to express themselves), và vốn từ thuở nhỏ không còn đủ dùng (no longer adequate).
<br>
- Hai thông tin này hoàn toàn tương thích và khớp nối ý nghĩa 100%. Trạng thái "inability to express themselves meaningfully" chính là biểu hiện rõ ràng nhất của "deficit in language ability" (sự thâm hụt/hạn chế tạm thời về ngôn ngữ). Do đó đáp án là <b>TRUE</b>.
<br><br>
<b>🔍 Phân biệt rạch ròi TRUE và NOT GIVEN:</b>
<br>
- Một số học viên chọn <i>NOT GIVEN</i> vì tìm từ "deficit" không thấy trong bài. Hãy nhớ rằng "deficit" (sự thiếu hụt, thâm hụt) là một paraphrase học thuật của cụm "inability to express themselves" (không có khả năng tự diễn đạt) và "limited language is no longer adequate" (ngôn ngữ giới hạn không còn đủ dùng). Do đó thông tin hoàn toàn tồn tại và được xác nhận là đúng.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
- Đừng hiểu lầm từ "deficit" mang tính bệnh lý nặng nề (như khiếm khuyết câm điếc). Trong ngôn ngữ học phát triển, "language deficit" ở đây chỉ đơn thuần là khoảng trống tạm thời giữa tốc độ phát triển tư duy quá nhanh và tốc độ tích lũy vốn từ chưa kịp đáp ứng ở tuổi dậy thì.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
- Lỗi suy diễn thực tế: Nghĩ rằng trẻ dậy thì nói rất nhiều, dùng nhiều tiếng lóng nên không thể nào "deficit in language" được, dẫn tới chọn FALSE. Hãy nhớ: luôn dựa vào văn bản (văn bản ghi rõ trẻ bị "inability to express themselves meaningfully"), tuyệt đối không dùng trải nghiệm cá nhân ngoài đời thực để áp đặt vào bài đọc.
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Động từ liên kết (linking verb): <b>appear + adjective</b> (trông có vẻ như thế nào).
- Cấu trúc: <b>inability to do something</b> (sự không có khả năng làm gì - danh từ trái nghĩa của <i>ability</i>).
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Học cách nhận diện các danh từ học thuật trừu tượng: <i>deficit</i> (sự thiếu hụt) = <i>inability</i> (sự không có khả năng) + <i>limited ... no longer adequate</i> (hạn chế ... không còn đủ dùng).`,
      vocab: `<b>deficit (n)</b>: sự thiếu hụt, thâm hụt, hạn chế<br><b>competent (adj)</b>: có đủ năng lực, giỏi giang<br><b>inability (n)</b>: sự bất lực, không có khả năng<br><b>express oneself (v)</b>: diễn đạt, biểu lộ bản thân`,
      colorClass: "ev-12"
    },
    13: {
      translation: `<b>Câu hỏi:</b> Thanh thiếu niên trải qua một quá trình chuyển đổi từ việc phụ thuộc vào cha mẹ sang độc lập.<br><br><b>Nói đơn giản:</b> Tuổi dậy thì có phải là cầu nối chuyển tiếp giúp trẻ thoát khỏi sự phụ thuộc vào cha mẹ để tiến tới sự tự chủ và độc lập hoàn toàn về mặt tâm lý?`,
      exp: `<b>Dạng câu hỏi:</b> TRUE / FALSE / NOT GIVEN
<br><br>
<b>📍 Vị trí dẫn chứng:</b> Paragraph I
<br><br>
<b>🔍 Dẫn chứng thực tế (Evidence):</b>
<br>
<i>"The adolescent must establish emotional and psychological independence from his or her parents. Childhood is marked by a strong dependence on one’s parents. ... Adolescents may vacillate between their desire for dependence and their need to be independent."</i>
<br><br>
<b>📝 Phân tích chi tiết câu dẫn chứng:</b>
<ul>
  <li><b>The adolescent must establish ... independence from ... parents</b>: Thanh thiếu niên phải thiết lập sự độc lập về cảm xúc và tâm lý khỏi cha mẹ.</li>
  <li><b>Childhood is marked by a strong dependence on ... parents</b>: Thời thơ ấu được đánh dấu bởi sự phụ thuộc mạnh mẽ vào cha mẹ (reliance).</li>
  <li><b>vacillate between ... desire for dependence and ... need to be independent</b>: dao động giữa mong muốn phụ thuộc và nhu cầu được độc lập (transition).</li>
</ul>
👉 <i>Ý nghĩa cả câu:</i> Thanh thiếu niên phải thiết lập sự độc lập về mặt tâm lý và tình cảm khỏi cha mẹ của mình. Thời thơ ấu được đánh dấu bằng sự phụ thuộc mạnh mẽ vào cha mẹ... Thanh thiếu niên có thể dao động giữa mong muốn phụ thuộc và nhu cầu độc lập.
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
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">experiences a transition</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">vacillate between ... desire for dependence and need to be independent</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp nghĩa (Trải qua sự chuyển đổi = Dao động qua lại giữa mong muốn phụ thuộc và nhu cầu độc lập để thích nghi dần).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">reliance on his parents</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">dependence on one's parents</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp hoàn toàn (Sự dựa dẫm vào cha mẹ = Sự phụ thuộc vào cha mẹ).</td>
    </tr>
    <tr>
      <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">independence</td>
      <td style="padding: 8px; border: 1px solid #ddd; font-style: italic;">independence / autonomy</td>
      <td style="padding: 8px; border: 1px solid #ddd; color: #2e7d32; font-weight: bold;">Khớp hoàn toàn (Sự độc lập = Sự tự chủ, độc lập).</td>
    </tr>
  </tbody>
</table>
<br>
<b>💡 Logic lập luận:</b>
<br>
- <b>Câu hỏi khẳng định:</b> Trẻ trải qua sự chuyển dịch (transition) từ phụ thuộc cha mẹ sang độc lập.
<br>
- <b>Bài đọc mô tả:</b> Tuổi thơ là phụ thuộc (dependence), tuổi trưởng thành đòi hỏi sự độc lập (autonomy), và ở giai đoạn dậy thì, trẻ phải tự thiết lập sự độc lập (establish independence) bằng cách dao động chuyển dịch qua lại giữa hai trạng thái này (vacillate between dependence and independent).
<br>
- Cả hai vế này khớp hoàn hảo về bản chất khoa học được mô tả trong bài đọc. Đáp án là <b>TRUE</b>.
<br><br>
<b>🚫 Phân tích các lựa chọn khác / Phân biệt TRUE và NOT GIVEN:</b>
<br>
- Đoạn B cũng củng cố trực tiếp ý này: <i>"leave the dependent, secure role of a child and to establish themselves as unique individuals, independent of their parents."</i> Sự thống nhất tuyệt đối giữa hai đoạn B và I chứng minh đây là trục xương sống xuyên suốt toàn bài đọc, khẳng định đáp án TRUE là hoàn toàn chính xác.
<br><br>
<b>⚠️ Bẫy cần tránh (Trap):</b>
<br>
- Đừng bị bối rối bởi động từ <b>vacillate</b> (dao động). Sự dao động tâm lý này không phủ định quá trình chuyển đổi, ngược lại, nó chính là cơ chế thực tế diễn ra trong suốt quá trình chuyển dịch (transition) từ phụ thuộc sang tự chủ.
<br><br>
<b>🚫 Phân tích lỗi sai (Error Analysis):</b>
<br>
- Một số học viên đọc thấy trẻ phản ứng bằng sự thù địch ("hostility") ở cuối đoạn I liền nghĩ mối quan hệ bị phá vỡ hoàn toàn chứ không phải chuyển đổi sang độc lập lành mạnh nên chọn FALSE. Hãy nhớ đọc toàn cảnh: sự thù địch chỉ là biểu hiện bề ngoài của nỗ lực khẳng định sự độc lập ("assert their need for independence").
<br><br>
<b>📘 Ngữ pháp bổ sung:</b>
<br>
- Động từ đặc biệt: <b>vacillate between A and B</b> (dao động, lưỡng lự giữa trạng thái A và trạng thái B).
- Cấu trúc: <b>marked by ...</b> (được đánh dấu bởi/bằng cái gì).
<br><br>
<b>🎓 Bài học rút ra (Lesson):</b>
<br>
Quá trình chuyển tiếp (<i>transition</i>) thường được mô tả trong bài đọc thông qua việc đối chiếu trạng thái quá khứ (<i>childhood / dependence</i>) với trạng thái tương lai hướng tới (<i>adulthood / independence</i>) và các hành vi trung gian (<i>vacillate / establish</i>).`,
      vocab: `<b>transition (n)</b>: quá trình chuyển đổi, chuyển tiếp<br><b>reliance (n)</b>: sự tin cậy, dựa dẫm, phụ thuộc (= dependence)<br><b>independence (n)</b>: sự độc lập<br><b>vacillate (v)</b>: dao động, lưỡng lự<br><b>autonomy (n)</b>: quyền tự trị, sự tự chủ cá nhân`,
      colorClass: "ev-13"
    }
  }
};
