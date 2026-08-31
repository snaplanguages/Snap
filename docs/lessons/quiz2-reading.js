window.quizData = {
  title: "Reading Practice 2 | The Impact of Environment to Children",
  testName: "Test 1",
  partName: "Passage 2",
  dbPrefix: "ielts_R_T1_P2",
  passageTitle: "The Impact of Environment to Children",
  startQ: 14,
  endQ: 26,
  totalQuestions: 13,
  
  // Nội dung bài đọc đã sửa lỗi ID dẫn chứng từ ev-14 đến ev-26
  passageContent: `
    <p class="paragraph"><span class="paragraph-label">A.</span> What determines how a child develops? In reality, it would be impossible to account for each and every influence that ultimately determines who a child becomes. What we can look at are some of the most apparent influences such as genetics, parenting, experiences, friends, family relationships and school to help us understand the influences that help contribute to a child's growth.</p>
    <p class="paragraph"><span class="paragraph-label">B.</span> Think of these influences as building blocks. While most people tend to have the same basic building blocks, these components can be put together in an infinite number of ways. Consider your own overall personality. How much of who you are today was shaped by your genetic inheritance, and how much is a result of your lifetime of experiences? This question has puzzled philosophers, psychologists and educators for hundreds of years and is frequently referred to as the nature versus nurture debate. Generally, the given rate of influence on children is 40% to 50%. It may refer to all of siblings of a family. Are we the result of nature (<span id="ev-14" class="ev-box">our genetic background</span>) or nurture (our environment)? Today, most researchers agree that child development involves a complex interaction of both nature and nurture, while some aspects of development may be strongly influenced by biology, environmental influences may also play a role. For example, the timing of when the onset of puberty occurs is largely the results of heredity, but environmental factors such as nutrition can also have an effect.</p>
    <p class="paragraph"><span class="paragraph-label">C.</span> From the earliest moments of life, the interaction of heredity and the environment works to shape who children are and who they will become. While the genetic instructions a child inherits from his parents may set out a road map for development, the environment can impact how these directions are expressed, shaped or even silenced. The complex interaction of nature and nurture does not just occur at certain moments or at certain periods of time; it is persistent and lifelong.</p>
    <p class="paragraph"><span class="paragraph-label">D.</span> The shared environment (also called common environment) refers to environmental influences that have the effect of making siblings more similar to one another. Shared environmental influences can include shared family experiences, shared peer groups, and sharing the same school and community. In general, there has not been strong evidence for shared environmental effects on many behaviors, particularly those measured in adults. Possible reasons for this are discussed. Shared environmental effects are evident in children and adolescents, but these effects generally decrease across the life span. New developments in behavior genetic methods have made it possible to specify shared environments of importance and to tease apart familial and nonfamilial sources of shared environmental influence. It may also <span id="ev-15" class="ev-box">refer to all of siblings</span> of a family, but the rate of influence is <span id="ev-16" class="ev-box">less than 10 per cent</span>.</p>
    <p class="paragraph"><span class="paragraph-label">E.</span> The importance of non-shared environment lay hidden within quantitative genetic studies since they began nearly a century ago. Quantitative genetic methods, such as twin and adoption methods, were designed to tease apart nature and nurture in order to explain family resemblance. For nearly all complex phenotypes, it has emerged that the answer to the question of the origins of family resemblance is nature-things run in families primarily for genetic reasons. However, the best available evidence for the importance of environmental influence comes from this same quantitative genetic research because <span id="ev-23" class="ev-box">genetic influence never explains all of the variances for complex phenotypes, and the remaining variance must be ascribed to environmental influences.</span> <span id="ev-17" class="ev-box">Non-shared environment</span>, it may refer to the part of siblings of a family, <span id="ev-18" class="ev-box">the rate of influence to children is 40 % to 50%</span>.</p>
    <p class="paragraph"><span class="paragraph-label">F.</span> Yet it took many decades for the full meaning of these findings to emerge. If genetics explains why siblings growing up in the same family are similar, but the environment is important, then it must be the case that the salient environmental effects do not make siblings similar. That is, they are not shared by children growing up in the same family-they must be ‘non-shared’. This implication about non-shared environmental import lay fallow in the field of quantitative genetics because the field’s attention was then firmly on the nature-nurture debate. ‘Nurture’ in the nature-nurture debate was implicitly taken to mean shared environment because, from Freud onwards, theories of socialization had assumed that children’s environments are doled out on a family-by-family basis. In contrast, the point of the non-shared environment is that environments are doled out on a child-by-child basis. Note that the phrase ‘non-shared environment’ is shorthand for a component of phenotypic variance-it refers to ‘effects’ rather than ‘events’, as discussed later. Research in recent years suggested that <span id="ev-19" class="ev-box">the impact from parents will be easy to be interrupted</span> by the <span id="ev-24" class="ev-box">influence from the children of the same age.</span> That also showed that <span id="ev-20" class="ev-box">variations of knowledge that children get from other culture are increasing</span>. <span id="ev-21" class="ev-box">A number of interests between, whatever, fathers and mothers or parents and their children are conflicting.</span></p>
    <p class="paragraph"><span class="paragraph-label">G.</span> Because siblings living in the same home share some but not all of the potential genetic and environmental factors that influence their behaviors, teasing apart the potential influences of genetic and non-genetic factors that differentiate siblings is very difficult. <span id="ev-26" class="ev-box">Turkheimer and Waldron (2000) have noted that non-shared environmental influences——which include all of the random measurement error——may not be systematic, but instead may operate idiosyncratically and in ways that cannot be ascertained.</span> <span id="ev-25" class="ev-box">Thus, the question is whether or not quasi-experimental behavioral genetic designs can be used to actually identify systematic non-shared environmental mechanisms</span> cross-sectionally and longitudinally. This is the impetus for the current study.</p>
  `,

  // Giao diện bảng câu hỏi đồng bộ chuẩn hóa
  questionsHTML: `
    <div class="question-section">
      <div class="instruction">
        Questions 14-18<br>
        Complete the table below.<br>
        Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.
      </div>
      <table class="ielts-table">
        <thead>
          <tr>
            <th>Type of Impact to Children</th>
            <th>Range of Reference to Siblings</th>
            <th>Rate of Influence</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>14.</strong> <input type="text" class="input-gap" id="ans-14" oninput="updateNav(14)" style="width: 150px;"> background from parents and family.
              <span id="fb-14" class="feedback"></span>
            </td>
            <td>Including to all of siblings</td>
            <td>40%-50%</td>
          </tr>
          <tr>
            <td>Shared Environment</td>
            <td>to <strong>15.</strong> <input type="text" class="input-gap" id="ans-15" oninput="updateNav(15)" style="width: 150px;"> <span id="fb-15" class="feedback"></span></td>
            <td>less than <strong>16.</strong> <input type="text" class="input-gap" id="ans-16" oninput="updateNav(16)" style="width: 120px;"> <span id="fb-16" class="feedback"></span></td>
          </tr>
          <tr>
            <td>
              <strong>17.</strong> <input type="text" class="input-gap" id="ans-17" oninput="updateNav(17)" style="width: 150px;">
              <span id="fb-17" class="feedback"></span>
            </td>
            <td>to part of siblings</td>
            <td><strong>18.</strong> <input type="text" class="input-gap" id="ans-18" oninput="updateNav(18)" style="width: 100px;"> - 50% <span id="fb-18" class="feedback"></span></td>
          </tr>
        </tbody>
      </table>
      <div id="exp-14"></div>
      <div id="exp-15"></div>
      <div id="exp-16"></div>
      <div id="exp-17"></div>
      <div id="exp-18"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Questions 19-21<br>
        Complete the summary.<br>
        Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage.
      </div>
      <div style="background: white; padding: 25px; border-radius: 12px; border: 1.5px dashed var(--border-color); line-height: 2.2; font-size: 15.5px; color: var(--text-main);">
        Research in recent years illuminated that the impact from parents will frequently be 
        <strong>19.</strong> <input type="text" class="input-gap" id="ans-19" oninput="updateNav(19)" style="width: 160px;"> <span id="fb-19" class="feedback"></span>
        by the peer’s pressure. It was also indicated that 
        <strong>20.</strong> <input type="text" class="input-gap" id="ans-20" oninput="updateNav(20)" style="width: 160px;"> <span id="fb-20" class="feedback"></span>
        of knowledge that children learned from other culture is increasing. The study has found quantities of competing 
        <strong>21.</strong> <input type="text" class="input-gap" id="ans-21" oninput="updateNav(21)" style="width: 160px;"> <span id="fb-21" class="feedback"></span>
        between parents and children or even between parents themselves.
      </div>
      <div id="exp-19"></div>
      <div id="exp-20"></div>
      <div id="exp-21"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Questions 22-25<br>
        Do the following statements agree with the claims of the writer in Reading Passage?<br>
        In boxes 22-25 on your answer sheet, write:<br>
        <strong>YES</strong> if the statement agrees with the claims<br>
        <strong>NO</strong> if the statement contradicts the claims<br>
        <strong>NOT GIVEN</strong> if there is no information on this
      </div>
      
      <div class="q-row" id="q-row-22">
        <span class="q-num">22.</span>
        <span class="q-content">
          The more children there are in a family, the more impacts of environment it is.
          <select class="input-select" id="ans-22" onchange="updateNav(22)">
            <option value="">Select...</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
            <option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-22" class="feedback"></span>
        </span>
      </div>
      <div id="exp-22"></div>

      <div class="q-row" id="q-row-23">
        <span class="q-num">23.</span>
        <span class="q-content">
          Methods based on twin studies still meet unexpected differences that cannot be ascribed to be a purely genetic explanation.
          <select class="input-select" id="ans-23" onchange="updateNav(23)">
            <option value="">Select...</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
            <option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-23" class="feedback"></span>
        </span>
      </div>
      <div id="exp-23"></div>

      <div class="q-row" id="q-row-24">
        <span class="q-num">24.</span>
        <span class="q-content">
          Children prefer to speak the language from the children of the same age to the language spoken by their parents.
          <select class="input-select" id="ans-24" onchange="updateNav(24)">
            <option value="">Select...</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
            <option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-24" class="feedback"></span>
        </span>
      </div>
      <div id="exp-24"></div>

      <div class="q-row" id="q-row-25">
        <span class="q-num">25.</span>
        <span class="q-content">
          The study of non-shared environment influence can be a generally agreed idea among researchers in the field.
          <select class="input-select" id="ans-25" onchange="updateNav(25)">
            <option value="">Select...</option>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
            <option value="NOT GIVEN">NOT GIVEN</option>
          </select>
          <span id="fb-25" class="feedback"></span>
        </span>
      </div>
      <div id="exp-25"></div>
    </div>

    <div class="question-section">
      <div class="instruction">
        Question 26<br>
        Choose the correct letter, <strong>A, B, C, or D</strong>.<br>
        Write your answer in box 26 on your answer sheet.
      </div>
      <div class="q-row" id="q-row-26">
        <span class="q-num">26.</span>
        <span class="q-content">
          According to this passage, which comment is TRUE about the current Study of non-shared environment influence to children?
          <div class="mcq-options">
            <label class="mcq-option"><input type="radio" name="mcq-26" value="A" onchange="setMcq(26, 'A')"> A. a little biased in nature</label>
            <label class="mcq-option"><input type="radio" name="mcq-26" value="B" onchange="setMcq(26, 'B')"> B. not sufficiently proved</label>
            <label class="mcq-option"><input type="radio" name="mcq-26" value="C" onchange="setMcq(26, 'C')"> C. very systematic</label>
            <label class="mcq-option"><input type="radio" name="mcq-26" value="D" onchange="setMcq(26, 'D')"> D. can be workable</label>
          </div>
          <input type="hidden" id="ans-26" value="">
          <span id="fb-26" class="feedback"></span>
        </span>
      </div>
      <div id="exp-26"></div>
    </div>
  `,

  // Danh sách đáp án được mảng hóa cực kỳ an toàn
  correctAnswers: {
    14: ["GENETIC"],
    15: ["ALL SIBLINGS", "ALL OF SIBLINGS"],
    16: ["10%", "10 PERCENT", "10 PER CENT"],
    17: ["NON-SHARED ENVIRONMENT", "NON SHARED ENVIRONMENT"],
    18: ["40%", "40 PERCENT", "40 PER CENT"],
    19: ["INTERRUPTED"],
    20: ["VARIATIONS"],
    21: ["INTERESTS"],
    22: ["NOT GIVEN"],
    23: ["YES"],
    24: ["NO", "NOT GIVEN"], // Chấp nhận cả 2 đáp án để bảo vệ quyền lợi học viên
    25: ["NO"],
    26: ["B"]
  },

  // Hệ thống giải thích đã đồng bộ hoàn hảo thuộc tính colorClass
  explanations: {
    14: {
      translation: "Tác động [di truyền] nền tảng từ cha mẹ và gia đình.",
      exp: "Đoạn B viết: <i>'Are we the result of nature (our genetic background) or nurture...?'</i>. Bảng tóm tắt đang hỏi về yếu tố tự nhiên (Nature/Genetics). Từ cần điền đứng trước 'background' là <b>genetic</b>.",
      vocab: "<b>Genetic background (n)</b>: Nền tảng di truyền | <b>Heredity (n)</b>: Sự di truyền",
      colorClass: "ev-14"
    },
    15: {
      translation: "Môi trường chung (Shared Environment): Tham chiếu đến [tất cả anh chị em].",
      exp: "Đoạn D phân tích về Môi trường chung: <i>'It may also refer to all of siblings of a family...'</i>. Cột 'Range of Reference' (Phạm vi tham chiếu) tương ứng với cụm từ chỉ toàn bộ anh chị em: <b>all siblings</b> hoặc <b>all of siblings</b>.",
      vocab: "<b>Shared environment (n)</b>: Môi trường dùng chung | <b>Sibling (n)</b>: Anh chị em ruột",
      colorClass: "ev-15"
    },
    16: {
      translation: "Môi trường chung: Tỷ lệ ảnh hưởng [dưới 10 phần trăm].",
      exp: "Đoạn D nêu rõ tỷ lệ tác động của môi trường chung: <i>'...but the rate of influence is less than 10 per cent.'</i>. Do đó từ cần điền là <b>10 per cent</b> (hoặc 10%).",
      vocab: "<b>Rate of influence (n)</b>: Tỷ lệ ảnh hưởng | <b>Evident (adj)</b>: Rõ ràng, hiển nhiên",
      colorClass: "ev-16"
    },
    17: {
      translation: "[Môi trường không chung] (Non-shared environment): Tham chiếu đến một phần anh chị em.",
      exp: "Đoạn E mô tả loại ảnh hưởng áp dụng cho một bộ phận anh chị em (part of siblings): <i>'Non-shared environment, it may refer to the part of siblings of a family...'</i>. Nên từ khóa chính xác là <b>Non-shared environment</b>.",
      vocab: "<b>Non-shared environment (n)</b>: Môi trường không dùng chung (trải nghiệm cá nhân độc lập)",
      colorClass: "ev-17"
    },
    18: {
      translation: "Môi trường không chung: Tỷ lệ ảnh hưởng [40%] đến 50%.",
      exp: "Đoạn E đưa ra con số thống kê chính xác: <i>'...the rate of influence to children is 40 % to 50%.'</i>. Bảng câu hỏi đã điền sẵn ký tự '- 50%', phần còn khuyết thiếu cần điền là <b>40%</b> (hoặc 40 percent).",
      colorClass: "ev-18"
    },
    19: {
      translation: "Nghiên cứu gần đây cho thấy tác động từ cha mẹ sẽ dễ bị [gián đoạn] bởi ảnh hưởng từ bạn bè cùng lứa.",
      exp: "Đoạn F có câu: <i>'...the impact from parents will be easy to be interrupted by the influence from the children of the same age.'</i>. 'Peer pressure' ở câu hỏi đã paraphrase lại từ cụm 'influence from children of the same age' trong bài đọc. Từ cần điền là động từ bị động: <b>interrupted</b>.",
      vocab: "<b>Interrupt (v)</b>: Bị gián đoạn, bị can thiệp | <b>Peer pressure (n)</b>: Áp lực/ảnh hưởng từ bạn đồng lứa",
      colorClass: "ev-19"
    },
    20: {
      translation: "[Sự đa dạng/biến đổi] kiến thức mà trẻ em tiếp thu từ các nền văn hóa khác đang tăng lên.",
      exp: "Đoạn F viết: <i>'That also showed that variations of knowledge that children get from other culture are increasing.'</i>. Cụm 'variations of knowledge' nghĩa là sự đa dạng/biến đổi về tri thức. Từ cần điền là danh từ số nhiều: <b>variations</b>.",
      vocab: "<b>Variation (n)</b>: Sự đa dạng, sự biến đổi | <b>Phenotypic variance (n)</b>: Biến thái kiểu hình",
      colorClass: "ev-20"
    },
    21: {
      translation: "Nhiều [mối quan tâm/lợi ích] giữa cha mẹ và con cái đang xung đột với nhau.",
      exp: "Đoạn F khẳng định: <i>'A number of interests between... parents and their children are conflicting.'</i>. Từ 'competing' trong câu tóm tắt đồng nghĩa với 'conflicting' (mâu thuẫn, cạnh tranh). Từ cần điền là <b>interests</b>.",
      vocab: "<b>Conflicting / Competing (adj)</b>: Mâu thuẫn, xung đột, cạnh tranh | <b>Interests (n)</b>: Mối quan tâm, lợi ích",
      colorClass: "ev-21"
    },
    22: {
      translation: "Gia đình càng đông con thì tác động của môi trường càng lớn.",
      exp: "Bài đọc có bàn về anh chị em (siblings) và các loại môi trường, nhưng <b>KHÔNG HỀ</b> đề cập hay đưa ra so sánh quy mô gia đình (số lượng con) có làm gia tăng mức độ ảnh hưởng của môi trường hay không. Ta chọn <b>NOT GIVEN</b>.",
      tip: "🚩 <b>Bẫy IELTS:</b> Đừng tự dùng logic đời sống để suy đoán. Nếu bài đọc không đưa ra mối quan hệ so sánh (mô hình 'The more... the more...'), luôn chọn <b>NOT GIVEN</b>.",
      colorClass: null
    },
    23: {
      translation: "Các phương pháp nghiên cứu sinh đôi vẫn gặp phải những sự khác biệt không thể giải thích hoàn toàn bằng di truyền.",
      exp: "Đoạn E khẳng định: <i>'...genetic influence never explains all of the variances for complex phenotypes, and the remaining variance must be ascribed to environmental influences.'</i> (Yếu tố di truyền không bao giờ giải thích được tất cả biến thể, phần còn lại thuộc về môi trường). Điều này khớp hoàn toàn với nhận định của câu hỏi. Ta chọn <b>YES</b>.",
      vocab: "<b>Ascribe to (v)</b>: Quy cho, gán cho | <b>Purely genetic (adj)</b>: Thuần túy di truyền",
      colorClass: "ev-23"
    },
    24: {
      translation: "Trẻ em thích nói ngôn ngữ của bạn bè cùng lứa hơn là ngôn ngữ của cha mẹ.",
      exp: "Đoạn F có nhắc đến ảnh hưởng từ bạn bè đồng trang lứa (children of the same age), nhưng <b>KHÔNG CÓ</b> thông tin nào nói về việc học hay nói ngôn ngữ (language) hay sở thích nói chuyện. Thông tin bị suy diễn vượt quá bản gốc nên đáp án chuẩn xác nhất về mặt học thuật là <b>NOT GIVEN</b> (Mã nguồn cũ để chấp nhận cả NO).",
      colorClass: "ev-24"
    },
    25: {
      translation: "Nghiên cứu về ảnh hưởng của môi trường không chung là một ý tưởng được đồng thuận rộng rãi giữa các nhà nghiên cứu.",
      exp: "Đoạn G viết: <i>'Thus, the question is whether or not quasi-experimental behavioral genetic designs can be used to actually identify systematic non-shared environmental mechanisms...'</i>. Việc dùng câu hỏi hoài nghi 'whether or not' chứng tỏ đây vẫn là vấn đề đang tranh luận và chưa đạt được sự đồng thuận chung (generally agreed). Ta chọn <b>NO</b>.",
      vocab: "<b>Generally agreed (adj)</b>: Được đồng thuận rộng rãi | <b>Idiosyncratically (adv)</b>: Một cách đặc dị/riêng biệt",
      colorClass: "ev-25"
    },
    26: {
      translation: "Theo đoạn văn, nhận xét nào là ĐÚNG về nghiên cứu hiện tại đối với ảnh hưởng của môi trường không chung?",
      exp: "Đoạn G dẫn chứng nhận định của Turkheimer & Waldron rằng các yếu tố này hoạt động không có hệ thống (not systematic), mang tính riêng biệt và chưa thể xác định chắc chắn (cannot be ascertained). Điều này đồng nghĩa với việc nghiên cứu hiện tại <b>chưa được chứng minh đầy đủ</b> (not sufficiently proved). Ta chọn đáp án <b>B</b>.",
      vocab: "<b>Ascertain (v)</b>: Xác định chắc chắn | <b>Sufficiently proved (adj)</b>: Được chứng minh đầy đủ",
      colorClass: "ev-26"
    }
  }
};
