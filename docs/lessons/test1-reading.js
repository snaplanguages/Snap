window.testData = {
  title: "IELTS Reading Full Test 1",
  dbPrefix: "test1", 
  totalQuestions: 40,
  passages: [
    {
      id: 1,
      partName: "Passage 1",
      passageTitle: "Pollution in the Bay 🌊",
      passageContent: `<p class="paragraph"><span class="paragraph-label">Paragraph A</span> <span id="ev-9" class="ev-box">Pouring water into the sea sounds harmless enough. But in Florida Bay, a large and shallow section of the Gulf of Mexico that lies between the southern end of the Everglades and the Florida Keys, it is proving highly controversial.</span> That is because researchers are divided over whether it will help or hinder the plants and animals that live in the bay.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph B</span> What is at risk is the future of the bay’s extensive beds of seagrasses. These grow on the bay’s muddy floor and act as nurseries for the larvae of shrimps, lobsters and fish – many of the important sport and commercial-fishing species. Also in danger is an impressive range of coral reefs that run the length of the Florida Keys and form the third-largest barrier reef in the world. <span id="ev-4" class="ev-box">Since the 1980s, coral cover has dropped by 40%, and a third of the coral species have gone.</span> This has had a damaging effect on the animals that depend on the reef, such as crabs, turtles and nearly 600 species of fish.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph C</span> What is causing such ecological change is a matter of much debate. <span id="ev-2" class="ev-box">And the answer is of no small consequence. This is because the American government is planning to devote $8 billion over the next 30 years to revitalise the Everglades.</span> Seasonal freshwater flows into the Everglades are to be restored in order to improve the region’s health. But they will then run off into the bay.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph D</span> Joseph Zieman, a marine ecologist at the University of Virginia, thinks this is a good idea. He believes that a lack of fresh water in the bay is its main problem. <span id="ev-5" class="ev-box">The blame, he says, lies with a century of drainage in the Everglades aimed at turning the marshes into farmland and areas for development.</span> This has caused the flow of fresh water into Florida Bay to dwindle, making the water in the bay, overall, more saline. This, he argues, kills the seagrasses, and as these rots, nutrients are released that feed the microscopic plants and animals that live in the water. This, he says, is why the bay’s once crystal-clear waters often resemble pea soup. And in a vicious circle, these turbid blooms block out sunlight, causing more seagrasses to die and yet more turbidity.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph E</span> Brian Lapointe, a marine scientist at the Harbour Branch Oceanographic Institution at Fort Pierce in Florida, disagrees. <span id="ev-1" class="ev-box">He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays.</span> Furthermore, he notes that when freshwater flows through the Everglades were increased experimentally in the 1990s, it led to massive plankton blooms. <span id="ev-7" class="ev-box">Freshwater running off from well-fertilised farmlands, he says, caused a fivefold rise in nitrogen levels in the bay.</span> This was like pouring fuel on a fire. The result was mass mortality of seagrasses because of increased turbidity from the plankton. Dr Lapointe adds that, because corals thrive only in waters where nutrient levels are low, <span id="ev-6" class="ev-box">restoring freshwater rich in nitrogen will do more damage to the reef.</span></p>
<p class="paragraph"><span class="paragraph-label">Paragraph F</span> It is a plausible theory. <span id="ev-10" class="ev-box">The water flowing off crops that are grown on the 750,000 acres of heavily fertilised farmland on the northern edge of the Everglades is rich in nitrogen</span>, half of which ends up in the bay. But Bill Kruczynski, of America’s Environmental Protection Agency, is convinced that nitrogen from farmlands is not the chief problem. Some coral reefs well away from any nitrogen pollution are dying and, curiously, a few are thriving. <span id="ev-8" class="ev-box">Dr Kruczynski thinks that increased nutrients arriving from local sewage discharges from the thousands of cesspits along the Florida Keys are part of the problem.</span></p>
<p class="paragraph"><span class="paragraph-label">Paragraph G</span> Such claims and counterclaims make the impact of the restoration plan difficult to predict. <span id="ev-11" class="ev-box">If increased salinity is the main problem, the bay’s ecology will benefit from the Everglades restoration project. If, however, nitrogen is the problem, increasing the flow of freshwater could make matters much worse.</span></p>
<p class="paragraph"><span class="paragraph-label">Paragraph H</span> If this second hypothesis proves correct, the cure is to remove nitrogen from farmland or sewage discharges, or perhaps both. Neither will be easy. Man-made wetlands, at present, being built to reduce phosphate runoff into the bay—also from fertilisers—would need an algal culture (a sort of contained algal bloom) added to them to deal with discharges from farmlands. <span id="ev-3" class="ev-box">That would be costly. So too would be the replacement of cesspits with proper sewerage—one estimate puts the cost at $650m.</span> Either way, it is clear that when, on December 1st, 3,000 square miles of sea around the reef are designated as a “protective zone” by the deputy secretary of commerce, Sam Bodman, this will do nothing to protect the reef from pollution.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph I</span> Some argue, though, that there is a more fundamental flaw in the plans for the bay: the very idea of returning it to a Utopian ideal before man wrought his damage. <span id="ev-12" class="ev-box">Nobody knows what Florida Bay was like before the 1950s when engineers cut the largest canals in the Everglades and took most of the water away.</span> Dr Kruczynski suspects it was more like an estuary. The bay that many people wish to re-create could have been nothing more than a changing phase in the bay’s history.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph J</span> These arguments do not merely threaten to create ecological problems but economic ones as well. <span id="ev-13" class="ev-box">The economy of the Florida Keys depends on tourism—the local tourist industry has an annual turnover of $2.5 billion.</span> People come for fishing-boat trips, for manatee watching, or for scuba diving and snorkeling to view the exotically coloured corals. If the plan to restore the Everglades makes problems in the bay and the reef worse, it could prove a very expensive mistake.</p>`,
      questionsHTML: `<div class="question-section">
  <div class="instruction">
    <strong>Questions 1-4</strong><br>
    Which paragraph contains the following information?<br>
    Write the correct letter, <strong>A - J</strong>, in answer boxes 1-4.
  </div>
  <div class="q-row" id="q-row-1">
    <span class="q-num">1</span>
    <div class="q-content">
      Seagrass turned to be more resistant to the saline water level in the Bay.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-1" onchange="updateNav(1)">
          <option value="">Select...</option>
          <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
        </select>
      </div>
      <span id="fb-1" class="feedback"></span>
    </div>
  </div>
  <div id="exp-1"></div>
  
  <div class="q-row" id="q-row-2">
    <span class="q-num">2</span>
    <div class="q-content">
      Significance of finding a specific reason in controversy.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-2" onchange="updateNav(2)">
          <option value="">Select...</option>
          <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
        </select>
      </div>
      <span id="fb-2" class="feedback"></span>
    </div>
  </div>
  <div id="exp-2"></div>
  
  <div class="q-row" id="q-row-3">
    <span class="q-num">3</span>
    <div class="q-content">
      Expensive proposals raised to solve the nitrogen dilemma.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-3" onchange="updateNav(3)">
          <option value="">Select...</option>
          <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
        </select>
      </div>
      <span id="fb-3" class="feedback"></span>
    </div>
  </div>
  <div id="exp-3"></div>
  
  <div class="q-row" id="q-row-4">
    <span class="q-num">4</span>
    <div class="q-content">
      A statistic of ecological changes in both the coral area and species.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-4" onchange="updateNav(4)">
          <option value="">Select...</option>
          <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option><option value="H">H</option><option value="I">I</option><option value="J">J</option>
        </select>
      </div>
      <span id="fb-4" class="feedback"></span>
    </div>
  </div>
  <div id="exp-4"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 5-8</strong><br>
    Match the people (listed A-C) with opinions below.<br>
    Write the correct letter, <strong>A, B or C</strong>, in answer boxes 5-8.
  </div>
  <div class="headings-list">
    <p><strong>A</strong> Bill Kruczynski</p>
    <p><strong>B</strong> Brian Lapointe</p>
    <p><strong>C</strong> Joseph Zieman</p>
  </div>
  
  <div class="q-row" id="q-row-5">
    <span class="q-num">5</span>
    <div class="q-content">
      Drainage system in Everglades actually results in high salty water in the bay.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-5" onchange="updateNav(5)">
          <option value="">Select...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <span id="fb-5" class="feedback"></span>
    </div>
  </div>
  <div id="exp-5"></div>
  
  <div class="q-row" id="q-row-6">
    <span class="q-num">6</span>
    <div class="q-content">
      Restoring water high in nitrogen level will make more ecological side effect.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-6" onchange="updateNav(6)">
          <option value="">Select...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <span id="fb-6" class="feedback"></span>
    </div>
  </div>
  <div id="exp-6"></div>
  
  <div class="q-row" id="q-row-7">
    <span class="q-num">7</span>
    <div class="q-content">
      High nitrogen levels may be caused by the nearby farmland.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-7" onchange="updateNav(7)">
          <option value="">Select...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <span id="fb-7" class="feedback"></span>
    </div>
  </div>
  <div id="exp-7"></div>
  
  <div class="q-row" id="q-row-8">
    <span class="q-num">8</span>
    <div class="q-content">
      Released sewage rather than nutrients from agricultural area increase the level of Nitrogen.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-8" onchange="updateNav(8)">
          <option value="">Select...</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
      <span id="fb-8" class="feedback"></span>
    </div>
  </div>
  <div id="exp-8"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 9-13</strong><br>
    Do the following statements agree with the information given in Reading Passage?<br>
    In boxes 9-13, write:<br>
    <strong>TRUE</strong> if the statement agrees with the information<br>
    <strong>FALSE</strong> if the statement contradicts the information<br>
    <strong>NOT GIVEN</strong> if there is no information on this
  </div>
  
  <div class="q-row" id="q-row-9">
    <span class="q-num">9</span>
    <div class="q-content">
      Everyone agrees with 'pouring water into the sea is harmless enough'.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-9" onchange="updateNav(9)">
          <option value="">Select...</option>
          <option value="TRUE">TRUE</option>
          <option value="FALSE">FALSE</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-9" class="feedback"></span>
    </div>
  </div>
  <div id="exp-9"></div>
  
  <div class="q-row" id="q-row-10">
    <span class="q-num">10</span>
    <div class="q-content">
      Nitrogen was poured in from different types of crops as water flows through.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-10" onchange="updateNav(10)">
          <option value="">Select...</option>
          <option value="TRUE">TRUE</option>
          <option value="FALSE">FALSE</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-10" class="feedback"></span>
    </div>
  </div>
  <div id="exp-10"></div>
  
  <div class="q-row" id="q-row-11">
    <span class="q-num">11</span>
    <div class="q-content">
      Everglades restoration project can be effective regardless of the cause of the pollution.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-11" onchange="updateNav(11)">
          <option value="">Select...</option>
          <option value="TRUE">TRUE</option>
          <option value="FALSE">FALSE</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-11" class="feedback"></span>
    </div>
  </div>
  <div id="exp-11"></div>
  
  <div class="q-row" id="q-row-12">
    <span class="q-num">12</span>
    <div class="q-content">
      Human has changed Florida Bay where old image before 1950s is unrecalled.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-12" onchange="updateNav(12)">
          <option value="">Select...</option>
          <option value="TRUE">TRUE</option>
          <option value="FALSE">FALSE</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-12" class="feedback"></span>
    </div>
  </div>
  <div id="exp-12"></div>
  
  <div class="q-row" id="q-row-13">
    <span class="q-num">13</span>
    <div class="q-content">
      Tourism contributes fundamentally to the Florida Bay area.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-13" onchange="updateNav(13)">
          <option value="">Select...</option>
          <option value="TRUE">TRUE</option>
          <option value="FALSE">FALSE</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-13" class="feedback"></span>
    </div>
  </div>
  <div id="exp-13"></div>
</div>`
    },
    {
      id: 2,
      partName: "Passage 2",
      passageTitle: "The Impact of Environment to Children 👶",
      passageContent: `<p class="paragraph"><span class="paragraph-label">Paragraph A</span> What determines how a child develops? In reality, it would be impossible to account for each and every influence that ultimately determines who a child becomes. What we can look at are some of the most apparent influences such as genetics, parenting, experiences, friends, family relationships and school to help us understand the influences that help contribute to a child's growth.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph B</span> Think of these influences as building blocks. While most people tend to have the same basic building blocks, these components can be put together in an infinite number of ways. Consider your own overall personality. How much of who you are today was shaped by your genetic inheritance, and how much is a result of your lifetime of experiences? This question has puzzled philosophers, psychologists and educators for hundreds of years and is frequently referred to as the nature versus nurture debate. Generally, the given rate of influence on children is 40% to 50%. It may refer to all of siblings of a family. Are we the result of nature (<span id="ev-14" class="ev-box">our genetic background</span>) or nurture (our environment)? Today, most researchers agree that child development involves a complex interaction of both nature and nurture, while some aspects of development may be strongly influenced by biology, environmental influences may also play a role. For example, the timing of when the onset of puberty occurs is largely the results of heredity, but environmental factors such as nutrition can also have an effect.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph C</span> From the earliest moments of life, the interaction of heredity and the environment works to shape who children are and who they will become. While the genetic instructions a child inherits from his parents may set out a road map for development, the environment can impact how these directions are expressed, shaped or even silenced. The complex interaction of nature and nurture does not just occur at certain moments or at certain periods of time; it is persistent and lifelong.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph D</span> The shared environment (also called common environment) refers to environmental influences that have the effect of making siblings more similar to one another. Shared environmental influences can include shared family experiences, shared peer groups, and sharing the same school and community. In general, there has not been strong evidence for shared environmental effects on many behaviors, particularly those measured in adults. Possible reasons for this are discussed. Shared environmental effects are evident in children and adolescents, but these effects generally decrease across the life span. New developments in behavior genetic methods have made it possible to specify shared environments of importance and to tease apart familial and nonfamilial sources of shared environmental influence. It may also refer to <span id="ev-15" class="ev-box">all of siblings</span> of a family, but the rate of influence is <span id="ev-16" class="ev-box">less than 10 per cent</span>.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph E</span> The importance of <span id="ev-17" class="ev-box">non-shared environment</span> lay hidden within quantitative genetic studies since they began nearly a century ago. Quantitative genetic methods, such as twin and adoption methods, were designed to tease apart nature and nurture in order to explain family resemblance. For nearly all complex phenotypes, it has emerged that the answer to the question of the origins of family resemblance is nature-things run in families primarily for genetic reasons. <span id="ev-23" class="ev-box">However, the best available evidence for the importance of environmental influence comes from this same quantitative genetic research because genetic influence never explains all of the variances for complex phenotypes, and the remaining variance must be ascribed to environmental influences.</span> Non-shared environment, it may refer to the part of siblings of a family, the rate of influence to children is <span id="ev-18" class="ev-box">40%</span> to 50%.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph F</span> Yet it took many decades for the full meaning of these findings to emerge. If genetics explains why siblings growing up in the same family are similar, but the environment is important, then it must be the case that the salient environmental effects do not make siblings similar. That is, they are not shared by children growing up in the same family-they must be 'non-shared'. This implication about non-shared environmental import lay fallow in the field of quantitative genetics because the field's attention was then firmly on the nature-nurture debate. 'Nurture' in the nature-nurture debate was implicitly taken to mean shared environment because, from Freud onwards, theories of socialization had assumed that children's environments are doled out on a family-by-family basis. In contrast, the point of the non-shared environment is that environments are doled out on a child-by-child basis. Note that the phrase 'non-shared environment' is shorthand for a component of phenotypic variance-it refers to 'effects' rather than 'events', as discussed later. Research in recent years suggested that the impact from parents will be easy to be <span id="ev-19" class="ev-box">interrupted</span> by the influence from the children of the same age. That also showed that <span id="ev-20" class="ev-box">variations</span> of knowledge that children get from other culture are increasing. A number of <span id="ev-21" class="ev-box">interests</span> between, whatever, fathers and mothers or parents and their children are conflicting.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph G</span> Because siblings living in the same home share some but not all of the potential genetic and environmental factors that influence their behaviors, teasing apart the potential influences of genetic and non-genetic factors that differentiate siblings is very difficult. Turkheimer and Waldron (2000) have noted that <span id="ev-25" class="ev-box"><span id="ev-26" class="ev-box">non-shared environmental influences--which include all of the random measurement error--may not be systematic</span>, but instead may operate idiosyncratically and in ways that cannot be ascertained.</span> Thus, the question is whether or not quasi-experimental behavioral genetic designs can be used to actually identify systematic non-shared environmental mechanisms cross-sectionally and longitudinally. This is the impetus for the current study.</p>`,
      questionsHTML: `<div class="question-section">
  <div class="instruction">
    <strong>Questions 14-18</strong><br>
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
        <td><strong>14.</strong> <input type="text" class="ielts-inline-input" id="ans-14" oninput="updateNav(14)" placeholder="e.g. Genetic"> background from parents and family</td>
        <td>Including to all of siblings</td>
        <td>40%-50%</td>
      </tr>
      <tr>
        <td>Shared Environment</td>
        <td>to <strong>15.</strong> <input type="text" class="ielts-inline-input" id="ans-15" oninput="updateNav(15)" placeholder="e.g. all of siblings"></td>
        <td>less than <strong>16.</strong> <input type="text" class="ielts-inline-input" id="ans-16" oninput="updateNav(16)" placeholder="e.g. 10%"></td>
      </tr>
      <tr>
        <td><strong>17.</strong> <input type="text" class="ielts-inline-input" id="ans-17" oninput="updateNav(17)" placeholder="e.g. Non-shared environment"></td>
        <td>to part of siblings</td>
        <td><strong>18.</strong> <input type="text" class="ielts-inline-input" id="ans-18" oninput="updateNav(18)" placeholder="e.g. 40%"> - 50%</td>
      </tr>
    </tbody>
  </table>
  <div id="fb-container-14-18" style="display:flex; flex-direction:column; gap:10px;">
    <span id="fb-14"></span><div id="exp-14"></div>
    <span id="fb-15"></span><div id="exp-15"></div>
    <span id="fb-16"></span><div id="exp-16"></div>
    <span id="fb-17"></span><div id="exp-17"></div>
    <span id="fb-18"></span><div id="exp-18"></div>
  </div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 19-21</strong><br>
    Complete the following summary of the paragraphs of Reading Passage.<br>
    Using <strong>NO MORE THAN THREE WORDS</strong> from the Reading Passage for each answer.
  </div>
  <div style="background: var(--exp-bg); padding: 25px; border-radius: 12px; border: 2px dashed var(--border-color); line-height: 2.2; font-size: 15px; color: var(--text-main);">
    Research in recent years illuminated that the impact from parents will frequently be 
    <strong>19.</strong> <input type="text" class="ielts-inline-input" id="ans-19" oninput="updateNav(19)"> <span id="fb-19" class="feedback"></span>
    that <strong>20.</strong> <input type="text" class="ielts-inline-input" id="ans-20" oninput="updateNav(20)"> <span id="fb-20" class="feedback"></span>
    by the peer's pressure. It was also indicated of knowledge that children learned from other culture is increasing.
    The study has found quantities of competing <strong>21.</strong> <input type="text" class="ielts-inline-input" id="ans-21" oninput="updateNav(21)"> <span id="fb-21" class="feedback"></span>
    between parents and children or even between parents themselves.
  </div>
  <div id="exp-19"></div>
  <div id="exp-20"></div>
  <div id="exp-21"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 22-25</strong><br>
    Do the following statements agree with the claims of the writer in Reading Passage?<br>
    In boxes 22-25, write:<br>
    <strong>YES</strong> if the statement agrees with the claims of the writer<br>
    <strong>NO</strong> if the statement contradicts the claims of the writer<br>
    <strong>NOT GIVEN</strong> if there is no information on this
  </div>
  
  <div class="q-row" id="q-row-22">
    <span class="q-num">22</span>
    <div class="q-content">
      The more children there are in a family, the more impacts of environment it is.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-22" onchange="updateNav(22)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-22" class="feedback"></span>
    </div>
  </div>
  <div id="exp-22"></div>
  
  <div class="q-row" id="q-row-23">
    <span class="q-num">23</span>
    <div class="q-content">
      Methods based on twin studies still meet unexpected differences that cannot be ascribed to be a purely genetic explanation.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-23" onchange="updateNav(23)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-23" class="feedback"></span>
    </div>
  </div>
  <div id="exp-23"></div>
  
  <div class="q-row" id="q-row-24">
    <span class="q-num">24</span>
    <div class="q-content">
      Children prefer to speak the language from the children of the same age to the language spoken by their parents.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-24" onchange="updateNav(24)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-24" class="feedback"></span>
    </div>
  </div>
  <div id="exp-24"></div>
  
  <div class="q-row" id="q-row-25">
    <span class="q-num">25</span>
    <div class="q-content">
      The Study of non-shared environment influence can be a generally agreed idea among researchers in the field.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-25" onchange="updateNav(25)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-25" class="feedback"></span>
    </div>
  </div>
  <div id="exp-25"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Question 26</strong><br>
    Choose the correct letter, <strong>A, B, C, or D</strong>.
  </div>
  <div class="q-row" id="q-row-26">
    <span class="q-num">26</span>
    <div class="q-content">
      <div class="mcq-question">According to this passage, which comment is TRUE about the current Study of nonshared environment influence to children?</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q26-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> a little biased in nature</span>
          <input type="radio" id="q26-A" name="mcq-26" value="A" style="display:none;" onchange="updateNav(26)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q26-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> not sufficiently proved</span>
          <input type="radio" id="q26-B" name="mcq-26" value="B" style="display:none;" onchange="updateNav(26)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q26-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> very systematic</span>
          <input type="radio" id="q26-C" name="mcq-26" value="C" style="display:none;" onchange="updateNav(26)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q26-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> can be workable</span>
          <input type="radio" id="q26-D" name="mcq-26" value="D" style="display:none;" onchange="updateNav(26)">
        </div>
      </div>
      <span id="fb-26" class="feedback"></span>
    </div>
  </div>
  <div id="exp-26"></div>
</div>`
    },
    {
      id: 3,
      partName: "Passage 3",
      passageTitle: "Global Warming in New Zealand 🇳🇿",
      passageContent: `<p class="paragraph"><span class="paragraph-label">Paragraph A</span> New Zealand is expected to warm by about 3°C over the next century. The northern polar regions will be more than 6°C warmer, while the large continents - also the largest centres of population - will be 4°C or warmer. <span id="ev-27" class="ev-box">In contrast, the Southern Ocean, which surrounds New Zealand, may warm by only 2°C. The sea will act as an air conditioner</span> and in this aspect, New Zealand's location is comparatively fortunate.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph B</span> <span id="ev-28" class="ev-box">Any predictions are complicated by the variability of New Zealand's climate. The annual temperature can fluctuate as much as 1°C above or below the long-term average.</span> The early summer of 2006-7, for instance, was notably cool, thanks in part to the iceberg that drifted up the east coast. A few months later, warm water from the Tasman Sea helped make May 2007 unusually hot. These variables will continue unaffected so that, although the general pattern will be for rising temperatures, the warming trend may not be uniform.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph C</span> The Ocean to the south of New Zealand will have one important effect. As the world warms, the great bank of west winds that circle Antarctica will become stronger. This has already been observed, and its impact on New Zealand is likely to be profound, <span id="ev-29" class="ev-box">stronger, more frequent west winds will bring increased, sometimes catastrophic rainfall to the west coast of the country and create drier conditions in some eastern regions that are already drought-prone.</span> At the same time, the general warming will spread south.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph D</span> Furthermore, in the drier regions, <span id="ev-30" class="ev-box">the average moisture deficit - that is, the difference between the amount of water in soils available to plants and the amount plants need for optimum growth - will increase. Soils could go into moisture deficit earlier in the growing season and the deficits could last longer into autumn that at present. What we think of today as a medium-severity drought could be an almost annual occurrence by the end of the century. One direct consequence of warmer and shorter - winters will be a reduction in snow cover. The permanent snow line in the mountains will rise, while snow cover below this will be shorter-lived.</span> <span id="ev-31" class="ev-box">The amount of snow that falls may actually increase, however, even in some northern centres, owing to the intensification of precipitation, Ski-field base station may eventually have to be moved upwards</span> to be within reach of the new snow line but there could still be plenty of the white stuff up there.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph E</span> There will also be a marked impact on New Zealand's glaciers. Over the last 100 years, the glaciers have been reduced by 35%, although since 1978 increase snowfall has offset the effect of warming. <span id="ev-32" class="ev-box">The latest studies conducted by the National Institute for Water and Atmospheric Research (NIWA), however, suggest that by the end of the century, warming over the Southern Alps could be significantly greater than over the rest of the country.</span></p>
<p class="paragraph"><span class="paragraph-label">Paragraph F</span> Sea levels around New Zealand have risen by 25cm since the middle of the 9th century and by 7 cm since 1990. Predictions for the coming years cover a wide range, however, <span id="ev-33" class="ev-box">partly because of unknown rises resulting from the melting of the ice in the Arctic, Greenland and Antarctica.</span> In addition, sea level at any given time is affected by many different factors, one of which is called storm surge. When a Coincides with a high tide along low lying coastal areas, this bulge raises the tide higher than normal, creating. Surge not unlike a slow-motion tsunami. Not only does a rise in sea level increase the potential for his sort damage, but it also has less immediate impacts. <span id="ev-34" class="ev-box">The one potentially grave outcome is that groundwater systems may become contaminated with saltwater, spoiling them for the irrigation of farmland, which in turn could diminish crop harvests.</span> <span id="ev-35" class="ev-box">Similarly, over time, estuaries may be enlarged by erosion as tidal influences reach further upstream, altering the contours of whole shorelines</span> and initiating further unforeseen consequences.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph G</span> The impacts these changes will have on New Zealand are difficult to generalize. <span id="ev-36" class="ev-box"><span id="ev-37" class="ev-box">Human systems are better able to adapt to change than natural ecosystems because humans can see a problem coming and plan a response.</span> Farmers and horticulturalists have made considerable advances, replacing crops they grow to better suit the new conditions.</span> However, plant breeders will need to show considerable ingenuity if they can overcome the acute water shortages that are forecast.</p>
<p class="paragraph"><span class="paragraph-label">Paragraph H</span> For natural ecosystems the rate of change is crucial. If it is low, the plants and animals and fish will be able to 'keep up'; if it is high, only the most adaptable species-those that can survive in the widest range of ecological niches-are likely to survive. <span id="ev-38" class="ev-box">Species adapted to only a narrow range of conditions or food sources will find adaptation much more difficult. Take tuatara, for instance. Their sex is determined by the temperature at which the eggs are incubated in warm (currently above 22°C) condition become predominately male - and now males already outnumber females by nearly two to one in some island refuges. <span id="ev-39" class="ev-box">In the mountains, as the permanent snow line moves upwards, the tolerance zones of some alpine plants and animals may simply disappear.</span></span> It should also be remembered that global warming is just that - a global phenomenon. New Zealand's own greenhouse emissions are tiny - around 0.5% of the global total. <span id="ev-40" class="ev-box">Even if New Zealanders were to achieve the government's target of carbon neutrality, this would have no discernable impact on global climate change.</span></p>
<p class="paragraph"><span class="paragraph-label">Paragraph I</span> The changes that global warming is going to bring to New Zealand during the 21st century are going to be significant, but where the country is likely to be most vulnerable is with respect to climate change elsewhere. New Zealand may warm more slowly than most places, but if its major export markets undergo damaging change, the economic impact will be severe.</p>`,
      questionsHTML: `<div class="question-section">
  <div class="instruction">
    <strong>Questions 27-32</strong><br>
    Choose the correct letter (<strong>A, B, C or D</strong>).
  </div>
  
  <div class="q-row" id="q-row-27">
    <span class="q-num">27</span>
    <div class="q-content">
      <div class="mcq-question">What is the main idea of the first paragraph?</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q27-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> The air condition in New Zealand will maintain a high quality because of the ocean</span>
          <input type="radio" id="q27-A" name="mcq-27" value="A" style="display:none;" onchange="updateNav(27)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q27-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> The Southern Ocean will remain at a constant strength</span>
          <input type="radio" id="q27-B" name="mcq-27" value="B" style="display:none;" onchange="updateNav(27)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q27-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> The continents will warm more than the point</span>
          <input type="radio" id="q27-C" name="mcq-27" value="C" style="display:none;" onchange="updateNav(27)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q27-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> New Zealand will not warm as much as other countries in the next century because it is surrounded by sea.</span>
          <input type="radio" id="q27-D" name="mcq-27" value="D" style="display:none;" onchange="updateNav(27)">
        </div>
      </div>
      <span id="fb-27" class="feedback"></span>
    </div>
  </div>
  <div id="exp-27"></div>

  <div class="q-row" id="q-row-28">
    <span class="q-num">28</span>
    <div class="q-content">
      <div class="mcq-question">What does the writer say about New Zealand’s variable weather?</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q28-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> Temperature changes of 1°C will not be seem important in future</span>
          <input type="radio" id="q28-A" name="mcq-28" value="A" style="display:none;" onchange="updateNav(28)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q28-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> Variable weather will continue, unchanged by global warming</span>
          <input type="radio" id="q28-B" name="mcq-28" value="B" style="display:none;" onchange="updateNav(28)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q28-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> There was an unusually small amount of variation in 2006-2007</span>
          <input type="radio" id="q28-C" name="mcq-28" value="C" style="display:none;" onchange="updateNav(28)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q28-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> Summer temperatures will vary but winter ones will be consistent</span>
          <input type="radio" id="q28-D" name="mcq-28" value="D" style="display:none;" onchange="updateNav(28)">
        </div>
      </div>
      <span id="fb-28" class="feedback"></span>
    </div>
  </div>
  <div id="exp-28"></div>

  <div class="q-row" id="q-row-29">
    <span class="q-num">29</span>
    <div class="q-content">
      <div class="mcq-question">What is the predicted impact of conditions in the ocean to the south of New Zealand?</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q29-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> New Zealand will be more affected by floods and droughts</span>
          <input type="radio" id="q29-A" name="mcq-29" value="A" style="display:none;" onchange="updateNav(29)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q29-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> Antarctica will not be adversely affected by warming</span>
          <input type="radio" id="q29-B" name="mcq-29" value="B" style="display:none;" onchange="updateNav(29)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q29-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> The band of west winds will move further to the south.</span>
          <input type="radio" id="q29-C" name="mcq-29" value="C" style="display:none;" onchange="updateNav(29)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q29-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> The usual west wind will no longer be reliable</span>
          <input type="radio" id="q29-D" name="mcq-29" value="D" style="display:none;" onchange="updateNav(29)">
        </div>
      </div>
      <span id="fb-29" class="feedback"></span>
    </div>
  </div>
  <div id="exp-29"></div>

  <div class="q-row" id="q-row-30">
    <span class="q-num">30</span>
    <div class="q-content">
      <div class="mcq-question">The writer mentions ‘moisture deficit’ to show?</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q30-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> The droughts will be shorter but more severe</span>
          <input type="radio" id="q30-A" name="mcq-30" value="A" style="display:none;" onchange="updateNav(30)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q30-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> How the growing season will become longer.</span>
          <input type="radio" id="q30-B" name="mcq-30" value="B" style="display:none;" onchange="updateNav(30)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q30-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> How growing conditions will deteriorate</span>
          <input type="radio" id="q30-C" name="mcq-30" value="C" style="display:none;" onchange="updateNav(30)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q30-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> That farmers should alter the make-up of soils</span>
          <input type="radio" id="q30-D" name="mcq-30" value="D" style="display:none;" onchange="updateNav(30)">
        </div>
      </div>
      <span id="fb-30" class="feedback"></span>
    </div>
  </div>
  <div id="exp-30"></div>

  <div class="q-row" id="q-row-31">
    <span class="q-num">31</span>
    <div class="q-content">
      <div class="mcq-question">What are the implications of global warming for New Zealand’s skiing?</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q31-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> Skiing may move to lower the altitude in future.</span>
          <input type="radio" id="q31-A" name="mcq-31" value="A" style="display:none;" onchange="updateNav(31)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q31-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> The ski season will be later in the year than at present.</span>
          <input type="radio" id="q31-B" name="mcq-31" value="B" style="display:none;" onchange="updateNav(31)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q31-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> The northern ski field will have to move to the south</span>
          <input type="radio" id="q31-C" name="mcq-31" value="C" style="display:none;" onchange="updateNav(31)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q31-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> Warming may provide more snow for some ski locations</span>
          <input type="radio" id="q31-D" name="mcq-31" value="D" style="display:none;" onchange="updateNav(31)">
        </div>
      </div>
      <span id="fb-31" class="feedback"></span>
    </div>
  </div>
  <div id="exp-31"></div>

  <div class="q-row" id="q-row-32">
    <span class="q-num">32</span>
    <div class="q-content">
      <div class="mcq-question">The writer refers to NIWA’s latest studies in the 3rd paragraph to show:</div>
      <div class="ielts-mcq-container">
        <div class="ielts-mcq-card" onclick="document.getElementById('q32-A').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>A.</strong> how a particular place could be affected by warming</span>
          <input type="radio" id="q32-A" name="mcq-32" value="A" style="display:none;" onchange="updateNav(32)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q32-B').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>B.</strong> that the warming trend has been intensifying since 1978</span>
          <input type="radio" id="q32-B" name="mcq-32" value="B" style="display:none;" onchange="updateNav(32)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q32-C').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>C.</strong> that freezing levels will rise throughout the century</span>
          <input type="radio" id="q32-C" name="mcq-32" value="C" style="display:none;" onchange="updateNav(32)">
        </div>
        <div class="ielts-mcq-card" onclick="document.getElementById('q32-D').click()">
          <div class="ielts-radio-indicator"></div>
          <span><strong>D.</strong> how the growth of glaciers is likely to cause damage</span>
          <input type="radio" id="q32-D" name="mcq-32" value="D" style="display:none;" onchange="updateNav(32)">
        </div>
      </div>
      <span id="fb-32" class="feedback"></span>
    </div>
  </div>
  <div id="exp-32"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 33-35</strong><br>
    Complete the summary below.<br>
    Choose the correct letter, <strong>A - G</strong>, in answer boxes 33-35.
  </div>
  <div class="headings-list" style="margin-bottom: 20px;">
    <div style="display: flex; flex-wrap: wrap; gap: 10px;">
      <div style="flex: 1 1 45%;"><strong>A</strong> agriculture production</div>
      <div style="flex: 1 1 45%;"><strong>B</strong> tropical waters</div>
      <div style="flex: 1 1 45%;"><strong>C</strong> tidal waves</div>
      <div style="flex: 1 1 45%;"><strong>D</strong> polar regions</div>
      <div style="flex: 1 1 45%;"><strong>E</strong> global warming</div>
      <div style="flex: 1 1 45%;"><strong>F</strong> coastal land</div>
      <div style="flex: 1 1 45%;"><strong>G</strong> high tides</div>
    </div>
  </div>
  <div style="background: var(--exp-bg); padding: 25px; border-radius: 12px; border: 2px dashed var(--border-color); line-height: 2.2; font-size: 15px; color: var(--text-main);">
    The extent of future sea level rises around New Zealand is uncertain and may be determined in the 
    <strong>33.</strong> 
    <div class="ielts-dropdown-wrapper">
      <select class="ielts-dropdown-select" id="ans-33" onchange="updateNav(33)">
        <option value="">Select...</option>
        <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
      </select>
    </div>
    <span id="fb-33" class="feedback"></span>
    <br>
    Another variable is sudden rises in sea level caused by bad weather. Higher sea levels can lead to reduced 
    <strong>34.</strong> 
    <div class="ielts-dropdown-wrapper">
      <select class="ielts-dropdown-select" id="ans-34" onchange="updateNav(34)">
        <option value="">Select...</option>
        <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
      </select>
    </div>
    <span id="fb-34" class="feedback"></span>
    <br>
    and result in changes to the shape of 
    <strong>35.</strong> 
    <div class="ielts-dropdown-wrapper">
      <select class="ielts-dropdown-select" id="ans-35" onchange="updateNav(35)">
        <option value="">Select...</option>
        <option value="A">A</option><option value="B">B</option><option value="C">C</option><option value="D">D</option><option value="E">E</option><option value="F">F</option><option value="G">G</option>
      </select>
    </div>
    <span id="fb-35" class="feedback"></span>
  </div>
  <div id="exp-33"></div>
  <div id="exp-34"></div>
  <div id="exp-35"></div>
</div>

<div class="question-section">
  <div class="instruction">
    <strong>Questions 36-40</strong><br>
    Do the following statements agree with the information given in Reading Passage 3?<br>
    In boxes 36-40, write:<br>
    <strong>YES</strong> if the statement agrees with the information<br>
    <strong>NO</strong> if the statement contradicts the information<br>
    <strong>NOT GIVEN</strong> if there is no information on this
  </div>
  
  <div class="q-row" id="q-row-36">
    <span class="q-num">36</span>
    <div class="q-content">
      The natural world is less responsive to challenges than humans.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-36" onchange="updateNav(36)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-36" class="feedback"></span>
    </div>
  </div>
  <div id="exp-36"></div>
  
  <div class="q-row" id="q-row-37">
    <span class="q-num">37</span>
    <div class="q-content">
      The agricultural sector is being too conservative and resistant to innovation.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-37" onchange="updateNav(37)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-37" class="feedback"></span>
    </div>
  </div>
  <div id="exp-37"></div>
  
  <div class="q-row" id="q-row-38">
    <span class="q-num">38</span>
    <div class="q-content">
      The global warming is slow; it will affect different regions in different ways.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-38" onchange="updateNav(38)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-38" class="feedback"></span>
    </div>
  </div>
  <div id="exp-38"></div>
  
  <div class="q-row" id="q-row-39">
    <span class="q-num">39</span>
    <div class="q-content">
      The tuatara is vulnerable to changes in climate conditions.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-39" onchange="updateNav(39)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-39" class="feedback"></span>
    </div>
  </div>
  <div id="exp-39"></div>
  
  <div class="q-row" id="q-row-40">
    <span class="q-num">40</span>
    <div class="q-content">
      New Zealand must reduce carbon emission if global warming is to be slowed.
      <div class="ielts-dropdown-wrapper">
        <select class="ielts-dropdown-select" id="ans-40" onchange="updateNav(40)">
          <option value="">Select...</option>
          <option value="YES">YES</option>
          <option value="NO">NO</option>
          <option value="NOT GIVEN">NOT GIVEN</option>
        </select>
      </div>
      <span id="fb-40" class="feedback"></span>
    </div>
  </div>
  <div id="exp-40"></div>
</div>`
    }
  ],
  correctAnswers: {"1": "E", "2": "C", "3": "H", "4": "B", "5": "C", "6": "B", "7": "B", "8": "A", "9": "FALSE", "10": "NOT GIVEN", "11": "FALSE", "12": "TRUE", "13": "TRUE", "14": "GENETIC", "15": "ALL OF SIBLINGS", "16": "10%", "17": "NON-SHARED ENVIRONMENT", "18": "40%", "19": "INTERRUPTED", "20": "VARIATIONS", "21": "INTERESTS", "22": "NOT GIVEN", "23": "YES", "24": "NOT GIVEN", "25": "NO", "26": "B", "27": "D", "28": "B", "29": "C", "30": "C", "31": "D", "32": "A", "33": "D", "34": "A", "35": "F", "36": "YES", "37": "NOT GIVEN", "38": "NOT GIVEN", "39": "YES", "40": "NO"},
  explanations: {"1": {"translation": "<b>Câu hỏi:</b> Cỏ biển có khả năng chịu đựng độ mặn tốt hơn mức độ hiện tại của Vịnh.<br><b>Dịch ý:</b> Đoạn nào nói rằng cỏ biển chịu được muối mặn tốt hơn mong đợi?", "exp": "<b>Dạng bài:</b> Matching Information<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'He thinks seagrasses can tolerate much higher levels of salinity than the bay actually displays.'</i><br><b>🧠 Lập luận:</b> Brian Lapointe khẳng định cỏ biển có thể chịu được (can tolerate = more resistant) mức độ mặn cao hơn nhiều (much higher levels of salinity) so với thực tế ở Vịnh. Hoàn toàn trùng khớp ý nghĩa.", "keywords": "more resistant = can tolerate | saline water = salinity", "colorClass": "ev-1"}, "2": {"translation": "<b>Câu hỏi:</b> Ý nghĩa của việc tìm ra một nguyên nhân cụ thể trong cuộc tranh luận.<br><b>Dịch ý:</b> Tại sao việc tìm ra nguyên nhân thực sự lại vô cùng quan trọng?", "exp": "<b>Dạng bài:</b> Matching Information<br><b>📍 Dẫn chứng:</b> Paragraph C<br><i>'What is causing such ecological change is a matter of much debate. And the answer is of no small consequence.'</i><br><b>🧠 Lập luận:</b> Việc tìm ra nguyên nhân cụ thể (What is causing...) đang tranh cãi gay gắt (debate = controversy), và câu trả lời có tầm ảnh hưởng lớn (no small consequence = significance) vì liên quan dự án Everglades 8 tỷ đô của Mỹ.", "keywords": "specific reason = what is causing... | significance = no small consequence", "colorClass": "ev-2"}, "3": {"translation": "<b>Câu hỏi:</b> Các đề xuất đắt đỏ được đưa ra để giải quyết vấn đề nitơ.<br><b>Dịch ý:</b> Đoạn nào nói về các giải pháp tốn kém tiền bạc để lọc bỏ nitơ?", "exp": "<b>Dạng bài:</b> Matching Information<br><b>📍 Dẫn chứng:</b> Paragraph H<br><i>'the cure is to remove nitrogen... That would be costly. So too would be the replacement of cesspits... cost at $650m.'</i><br><b>🧠 Lập luận:</b> Đoạn H đưa ra các phương pháp cứu chữa (cure = proposal) loại bỏ nitơ nhưng đều cực kỳ tốn tiền (costly = expensive), ước tính thay thế bể phốt tiêu tốn 650 triệu USD.", "keywords": "expensive = costly / $650m | proposals = cure", "colorClass": "ev-3"}, "4": {"translation": "<b>Câu hỏi:</b> Một thống kê về thay đổi sinh thái ở cả diện tích san hô và loài san hô.<br><b>Dịch ý:</b> Số liệu nào chứng minh san hô bị sụt giảm diện tích và loài?", "exp": "<b>Dạng bài:</b> Matching Information<br><b>📍 Dẫn chứng:</b> Paragraph B<br><i>'Since the 1980s, coral cover has dropped by 40%, and a third of the coral species have gone.'</i><br><b>🧠 Lập luận:</b> Thống kê (statistic = 40%, a third) chỉ rõ diện tích che phủ san hô (coral cover = coral area) bị giảm mạnh và một phần ba số loài biến mất (gone = change/decrease).", "keywords": "statistic = 40% / a third | coral area = coral cover | species = coral species", "colorClass": "ev-4"}, "5": {"translation": "<b>Câu hỏi:</b> Hệ thống thoát nước ở Everglades thực sự dẫn đến việc nước trong Vịnh có độ mặn cao.<br><b>Dịch ý:</b> Nhà khoa học nào đổ lỗi cho việc tiêu nước gây ra nước mặn?", "exp": "<b>Dạng bài:</b> Matching People<br><b>📍 Dẫn chứng:</b> Paragraph D<br><i>'The blame, he says, lies with a century of drainage... making the water in the bay, overall, more saline.'</i><br><b>🧠 Lập luận:</b> Nhà sinh thái học Joseph Zieman đổ lỗi (blame) cho việc thoát nước đầm lầy kéo dài cả thế kỷ (century of drainage) làm giảm lượng nước ngọt, dẫn tới độ mặn tăng cao (more saline = high salty water).", "keywords": "drainage system = drainage | salty water = saline | Joseph Zieman (C)", "colorClass": "ev-5"}, "6": {"translation": "<b>Câu hỏi:</b> Việc phục hồi nguồn nước có hàm lượng nitơ cao sẽ gây ra nhiều tác động tiêu cực đến rạn san hô.<br><b>Dịch ý:</b> Ai cảnh báo việc phục hồi nước giàu nitơ sẽ tàn phá san hô?", "exp": "<b>Dạng bài:</b> Matching People<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'restoring freshwater rich in nitrogen will do more damage to the reef.'</i><br><b>🧠 Lập luận:</b> Brian Lapointe khẳng định việc bơm trả lại nguồn nước ngọt giàu nitơ (rich in nitrogen) sẽ phá hủy nặng nề hơn (do more damage = ecological side effect) lên rạn san hô.", "keywords": "restoring water = restoring freshwater | side effect = do more damage | Brian Lapointe (B)", "colorClass": "ev-6"}, "7": {"translation": "<b>Câu hỏi:</b> Nồng độ nitơ cao có thể được gây ra bởi các vùng đất nông nghiệp gần đó.<br><b>Dịch ý:</b> Ai quy trách nhiệm phân bón nông nghiệp lân cận làm tăng nitơ?", "exp": "<b>Dạng bài:</b> Matching People<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'Freshwater running off from well-fertilised farmlands, he says, caused a fivefold rise in nitrogen levels...'</i><br><b>🧠 Lập luận:</b> Brian Lapointe (he says) lập luận nước chảy tràn từ các trang trại dùng nhiều phân bón (well-fertilised farmlands) làm nitơ tăng vọt gấp 5 lần trong Vịnh.", "keywords": "farmland = farmlands | high nitrogen = fivefold rise | Brian Lapointe (B)", "colorClass": "ev-7"}, "8": {"translation": "<b>Câu hỏi:</b> Nước thải xả ra từ địa phương, chứ không phải nitơ từ nông nghiệp, làm trầm trọng thêm vấn đề nitơ.<br><b>Dịch ý:</b> Ai cho rằng nước bể phốt địa phương mới là thủ phạm thực sự?", "exp": "<b>Dạng bài:</b> Matching People<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'Bill Kruczynski... is convinced that nitrogen from farmlands is not the chief problem... increased nutrients arriving from local sewage discharges... part of the problem.'</i><br><b>🧠 Lập luận:</b> Bill Kruczynski bác bỏ farmland nitrogen và quy trách nhiệm cho nguồn nước xả từ bể phốt dân cư địa phương (local sewage discharges = released sewage) gây ra vấn đề ô nhiễm nitơ.", "keywords": "released sewage = sewage discharges | rather than agricultural = not from farmlands | Bill Kruczynski (A)", "colorClass": "ev-8"}, "9": {"translation": "<b>Câu hỏi:</b> Mọi người đều đồng ý rằng 'đổ nước ngọt vào vịnh là hoàn toàn vô hại'.<br><b>Dịch ý:</b> Có phải tất cả mọi người đều thống nhất việc bơm nước ngọt là vô hại?", "exp": "<b>Dạng bài:</b> True / False / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph A<br><i>'Pouring water into the sea sounds harmless enough. But... it is proving highly controversial. That is because researchers are divided...'</i><br><b>🧠 Lập luận:</b> Câu hỏi khẳng định 'Mọi người đều đồng ý' (Everyone agrees), trong khi bài viết nêu rõ đây là vấn đề cực kỳ tranh cãi (highly controversial) và các nhà nghiên cứu đang bất đồng sâu sắc (divided). Hai thông tin mâu thuẫn trực tiếp.", "keywords": "Everyone agrees &lt;&gt; researchers are divided", "colorClass": "ev-9"}, "10": {"translation": "<b>Câu hỏi:</b> Nitơ được xả vào từ nhiều loại cây trồng khác nhau khi dòng nước chảy qua.<br><b>Dịch ý:</b> Có phải do nhiều loại cây trồng (different types of crops) thải ra lượng nitơ?", "exp": "<b>Dạng bài:</b> True / False / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'The water flowing off crops that are grown on the 750,000 acres... is rich in nitrogen'</i><br><b>🧠 Lập luận:</b> Bài đọc chỉ đề cập chung chung dòng nước chảy qua cây trồng (crops) nông nghiệp mang theo nitơ, hoàn toàn không nói đến việc cây trồng ở đây gồm 'nhiều loại khác nhau' hay một loại duy nhất. Không thể xác nhận.", "keywords": "different types of crops = (Not mentioned)", "colorClass": "ev-10"}, "11": {"translation": "<b>Câu hỏi:</b> Dự án phục hồi Everglades có hiệu quả bất kể nguyên nhân gây ô nhiễm là gì.<br><b>Dịch ý:</b> Có phải dự án sẽ luôn thành công dù nguyên nhân là gì đi nữa?", "exp": "<b>Dạng bài:</b> True / False / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph G<br><i>'If increased salinity is the main problem, the bay’s ecology will benefit... If, however, nitrogen is the problem... could make matters much worse.'</i><br><b>🧠 Lập luận:</b> Câu hỏi nói dự án hiệu quả 'bất chấp nguyên nhân' (regardless of cause). Nhưng bài viết chứng minh hiệu quả phụ thuộc điều kiện: Nếu do mặn thì có lợi (benefit), nếu do nitơ thì tàn phá nặng hơn (make matters worse). Mâu thuẫn 100%.", "keywords": "regardless of the cause &lt;&gt; If salinity... If nitrogen...", "colorClass": "ev-11"}, "12": {"translation": "<b>Câu hỏi:</b> Con người làm thay đổi Vịnh Florida đến mức không ai nhớ được hình ảnh cũ trước năm 1950 trông ra sao.<br><b>Dịch ý:</b> Trạng thái vịnh trước năm 1950 hiện nay hoàn toàn là một ẩn số?", "exp": "<b>Dạng bài:</b> True / False / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph I<br><i>'Nobody knows what Florida Bay was like before the 1950s when engineers cut the largest canals...'</i><br><b>🧠 Lập luận:</b> Kỹ sư đào kênh xẻ rạch đã làm thay đổi vịnh, và trạng thái nguyên bản trước năm 1950 hoàn toàn không một ai biết được (Nobody knows = unrecalled). Khớp hoàn toàn thông tin.", "keywords": "old image is unrecalled = Nobody knows what was like", "colorClass": "ev-12"}, "13": {"translation": "<b>Câu hỏi:</b> Du lịch đóng vai trò nền tảng/sống còn đối với khu vực Vịnh Florida.<br><b>Dịch ý:</b> Có phải kinh tế khu vực phụ thuộc cốt lõi vào ngành du lịch?", "exp": "<b>Dạng bài:</b> True / False / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph J<br><i>'The economy of the Florida Keys depends on tourism—the local tourist industry has an annual turnover of $2.5 billion.'</i><br><b>🧠 Lập luận:</b> Nền kinh tế bị phụ thuộc trực tiếp (depends on) vào ngành du lịch địa phương có doanh thu khổng lồ 2.5 tỷ USD, chứng tỏ du lịch đóng vai trò nền tảng quan trọng (contributes fundamentally).", "keywords": "contributes fundamentally = economy depends on tourism", "colorClass": "ev-13"}, "14": {"translation": "<b>Câu hỏi:</b> Điền vào ô trống bảng so sánh: ... background from parents and family.<br><b>Dịch ý:</b> Nền tảng di truyền thừa hưởng từ bố mẹ ảnh hưởng 40%-50% lên toàn bộ anh chị em.", "exp": "<b>Dạng bài:</b> Table Completion<br><b>📍 Dẫn chứng:</b> Paragraph B<br><i>'How much of who you are today was shaped by your genetic inheritance...?'</i> và <i>'Are we the result of nature (our genetic background)...'</i><br><b>🧠 Lập luận:</b> Đoạn B phân tích di truyền là 'genetic inheritance' hoặc 'genetic background'. Từ thích hợp điền vào ô trống bổ nghĩa cho 'background' là <b>GENETIC</b>.", "keywords": "genetic inheritance = genetic background", "colorClass": "ev-14"}, "15": {"translation": "<b>Câu hỏi:</b> Phạm vi tham chiếu đối với môi trường chia sẻ (Shared Environment).<br><b>Dịch ý:</b> Môi trường chia sẻ ảnh hưởng đến nhóm anh chị em nào?", "exp": "<b>Dạng bài:</b> Table Completion<br><b>📍 Dẫn chứng:</b> Paragraph D<br><i>'It may also refer to all of siblings of a family, but the rate of influence is less than 10 per cent.'</i><br><b>🧠 Lập luận:</b> Đối với Shared Environment, phạm vi ảnh hưởng được ghi rõ là ảnh hưởng đến toàn bộ anh chị em ruột trong gia đình (<b>ALL OF SIBLINGS</b>).", "keywords": "refer to = range of reference | all of siblings", "colorClass": "ev-15"}, "16": {"translation": "<b>Câu hỏi:</b> Tỷ lệ ảnh hưởng của môi trường chia sẻ (Shared Environment).<br><b>Dịch ý:</b> Tỷ lệ phần trăm tác động là bao nhiêu?", "exp": "<b>Dạng bài:</b> Table Completion<br><b>📍 Dẫn chứng:</b> Paragraph D<br><i>'but the rate of influence is less than 10 per cent.'</i><br><b>🧠 Lập luận:</b> Đoạn D khẳng định tỷ lệ tác động này rất thấp, cụ thể là dưới mười phần trăm (<b>10%</b> hoặc <b>LESS THAN 10%</b>).", "keywords": "rate of influence = less than 10 per cent", "colorClass": "ev-16"}, "17": {"translation": "<b>Câu hỏi:</b> Loại tác động sinh thái thứ ba ảnh hưởng 40%-50% đến một bộ phận anh chị em.<br><b>Dịch ý:</b> Tên gọi của yếu tố môi trường không chia sẻ là gì?", "exp": "<b>Dạng bài:</b> Table Completion<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'Non-shared environment, it may refer to the part of siblings of a family, the rate of influence to children is 40% to 50%.'</i><br><b>🧠 Lập luận:</b> Tác động mà ảnh hưởng tới một bộ phận (part of siblings) với tỷ lệ 40-50% được khẳng định trực tiếp chính là môi trường không chia sẻ (<b>NON-SHARED ENVIRONMENT</b>).", "keywords": "part of siblings = non-shared environment", "colorClass": "ev-17"}, "18": {"translation": "<b>Câu hỏi:</b> Tỷ lệ ảnh hưởng tối thiểu của môi trường không chia sẻ.<br><b>Dịch ý:</b> Điền tỷ lệ phần trăm tối thiểu trong khoảng 40%-50%.", "exp": "<b>Dạng bài:</b> Table Completion<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'the rate of influence to children is 40% to 50%.'</i><br><b>🧠 Lập luận:</b> Đoạn E chỉ rõ dải ảnh hưởng của môi trường không chia sẻ là từ 40% đến 50%. Do đó từ cần điền ở mốc bắt đầu là <b>40%</b>.", "keywords": "rate of influence = 40% to 50%", "colorClass": "ev-18"}, "19": {"translation": "<b>Câu hỏi:</b> Tóm tắt: Tác động từ cha mẹ thường xuyên dễ bị [can thiệp/gián đoạn] bởi áp lực từ bạn bè đồng trang lứa.<br><b>Dịch ý:</b> Tìm từ thích hợp chỉ sự can thiệp lên vai trò dạy dỗ của bố mẹ.", "exp": "<b>Dạng bài:</b> Summary Completion<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'the impact from parents will be easy to be interrupted by the influence from the children of the same age.'</i><br><b>🧠 Lập luận:</b> Keyword 'impact from parents' và 'by peer pressure' (friends of same age) khớp với bài đọc. Từ cần điền là phân từ bị động <b>INTERRUPTED</b>.", "keywords": "be easy to be interrupted = frequently be interrupted", "colorClass": "ev-19"}, "20": {"translation": "<b>Câu hỏi:</b> Tóm tắt: Nghiên cứu cũng chỉ ra rằng những [sự khác biệt/biến thể] về kiến thức trẻ thu nhận từ các nền văn hóa khác đang gia tăng.<br><b>Dịch ý:</b> Từ chỉ sự biến động/đa dạng kiến thức.", "exp": "<b>Dạng bài:</b> Summary Completion<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'That also showed that variations of knowledge that children get from other culture are increasing.'</i><br><b>🧠 Lập luận:</b> Kiến thức trẻ có được (knowledge that children get) từ nền văn hóa khác đang tăng lên. Từ đi trước 'of knowledge' là <b>VARIATIONS</b>.", "keywords": "knowledge learned = knowledge that children get | variations", "colorClass": "ev-20"}, "21": {"translation": "<b>Câu hỏi:</b> Tóm tắt: Nghiên cứu tìm thấy nhiều mối quan tâm/lợi ích [đối chọi/xung đột] giữa bố mẹ và con cái.<br><b>Dịch ý:</b> Từ chỉ các lợi ích, mong muốn.", "exp": "<b>Dạng bài:</b> Summary Completion<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'A number of interests between, whatever, fathers and mothers or parents and their children are conflicting.'</i><br><b>🧠 Lập luận:</b> Câu hỏi dùng tính từ 'competing' bổ nghĩa cho danh từ. Bài đọc dùng động từ 'are conflicting' cuối câu. Danh từ làm chủ ngữ tương ứng là <b>INTERESTS</b>.", "keywords": "competing = conflicting | interests", "colorClass": "ev-21"}, "22": {"translation": "<b>Câu hỏi:</b> Càng đông con trong gia đình thì tác động của môi trường lên từng đứa trẻ càng lớn.<br><b>Dịch ý:</b> Có phải số lượng trẻ em tỷ lệ thuận với mức độ tác động môi trường?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Toàn bộ bài đọc.<br><b>🧠 Lập luận:</b> Bài viết phân tích các khía cạnh môi trường chia sẻ và không chia sẻ lên anh chị em (siblings) nói chung, nhưng hoàn toàn KHÔNG đề cập đến quy luật 'càng đông con thì tác động càng lớn'. Chọn NOT GIVEN.", "keywords": "more children = (Not mentioned)", "colorClass": ""}, "23": {"translation": "<b>Câu hỏi:</b> Các phương pháp dựa trên nghiên cứu song sinh vẫn gặp phải những sự khác biệt bất ngờ không thể quy cho di truyền thuần túy.<br><b>Dịch ý:</b> Có phải nghiên cứu song sinh chứng minh di truyền không giải thích được tất cả khác biệt?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'because genetic influence never explains all of the variances... and the remaining variance must be ascribed to environmental influences.'</i><br><b>🧠 Lập luận:</b> Đoạn E xác nhận phương pháp di truyền định lượng (song sinh và nhận nuôi) chứng minh di truyền không bao giờ giải thích được toàn bộ sự biến thiên tính trạng (never explains all variances), phần còn lại bắt buộc phải quy cho môi trường. Khớp hoàn toàn ý nghĩa. Chọn YES.", "keywords": "cannot be ascribed purely to genetics = genetic never explains all variances | YES", "colorClass": "ev-23"}, "24": {"translation": "<b>Câu hỏi:</b> Trẻ em thích nói ngôn ngữ của bạn bè cùng trang lứa hơn ngôn ngữ bố mẹ nói.<br><b>Dịch ý:</b> Trẻ em ưu tiên ngôn ngữ của bạn bè hơn ngôn ngữ của gia đình?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Toàn bộ bài đọc.<br><b>🧠 Lập luận:</b> Đoạn F có nói trẻ em dễ bị bạn bè cùng tuổi ảnh hưởng (influence from children of same age) lấn át cha mẹ, nhưng hoàn toàn KHÔNG nhắc đến việc 'thích nói ngôn ngữ của bạn bè hơn ngôn ngữ của cha mẹ'. Chọn NOT GIVEN.", "keywords": "language preferences = (Not mentioned)", "colorClass": ""}, "25": {"translation": "<b>Câu hỏi:</b> Nghiên cứu về ảnh hưởng của môi trường không chia sẻ là một ý tưởng được đồng thuận rộng rãi bởi các nhà nghiên cứu trong ngành.<br><b>Dịch ý:</b> Đây có phải là một học thuyết đã được công nhận rộng rãi, thống nhất?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph G<br><i>'teasing apart the potential influences... is very difficult... Thus, the question is whether or not quasi-experimental... designs can be used to actually identify...'</i><br><b>🧠 Lập luận:</b> Đoạn G chỉ ra việc bóc tách và chứng minh cơ chế này cực kỳ gian nan (very difficult) và nghiên cứu hiện tại mới chỉ là 'lực đẩy thúc đẩy' (impetus) để thăm dò thử nghiệm xem có áp dụng thực tế được không, chứ chưa hề đạt đồng thuận chung rộng rãi. Chọn NO.", "keywords": "generally agreed idea &lt;&gt; very difficult / question is whether or not... | NO", "colorClass": "ev-25"}, "26": {"translation": "<b>Câu hỏi:</b> Theo đoạn văn, nhận xét nào ĐÚNG về nghiên cứu hiện tại về môi trường không chia sẻ lên trẻ em?<br><b>Dịch ý:</b> Đâu là đặc điểm chuẩn xác của dạng nghiên cứu này?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph G<br><i>'Turkheimer and Waldron (2000) have noted that non-shared environmental influences... may not be systematic, but instead may operate idiosyncratically and in ways that cannot be ascertained.'</i><br><b>🧠 Lập luận:</b> Các nhà khoa học lưu ý ảnh hưởng này 'không mang tính hệ thống' (not systematic), hoạt động một cách đặc dị (idiosyncratically) và không thể xác định chắc chắn (cannot be ascertained). Điều này tương ứng với phương án B: Chưa được chứng minh đầy đủ (not sufficiently proved).", "keywords": "not systematic / cannot be ascertained = not sufficiently proved | Chọn B", "colorClass": "ev-26"}, "27": {"translation": "<b>Câu hỏi:</b> Ý chính của đoạn văn đầu tiên là gì?<br><b>Dịch ý:</b> Đoạn 1 chủ yếu truyền tải thông điệp gì về khí hậu của New Zealand?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph A<br><i>'In contrast, the Southern Ocean, which surrounds New Zealand, may warm by only 2°C. The sea will act as an air conditioner...'</i><br><b>🧠 Lập luận:</b> Đoạn A giải thích rằng trong khi toàn cầu nóng lên rất mạnh (polar tăng 6 độ, lục địa tăng 4 độ), New Zealand bao quanh bởi Nam Đại Dương nên chỉ tăng khoảng 2 độ nhờ đại dương hoạt động như máy điều hòa. Điều này tương đương với phương án D: NZ sẽ không nóng lên nhiều bằng các nước khác nhờ vị thế đại dương bao quanh.", "keywords": "act as air conditioner / surrounds New Zealand = surrounded by sea / will not warm as much", "colorClass": "ev-27"}, "28": {"translation": "<b>Câu hỏi:</b> Tác giả nói gì về sự biến động thời tiết của New Zealand?<br><b>Dịch ý:</b> Biến đổi khí hậu toàn cầu ảnh hưởng thế nào đến tính biến động khí hậu tại đây?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph B<br><i>'These variables will continue unaffected so that, although the general pattern will be for rising temperatures, the warming trend may not be uniform.'</i><br><b>🧠 Lập luận:</b> Đoạn B phân tích các hiện tượng biến động (như băng trôi làm mát mùa hè, hải lưu Tasman làm nóng tháng 5) là các biến số sẽ tiếp tục diễn ra mà không chịu ảnh hưởng (unaffected) của sự ấm lên chung. Điều này trùng khớp với phương án B: Sự biến động thời tiết sẽ tiếp tục diễn ra mà không bị thay đổi bởi ấm lên toàn cầu.", "keywords": "variables continue unaffected = variable weather continue, unchanged", "colorClass": "ev-28"}, "29": {"translation": "<b>Câu hỏi:</b> Đâu là tác động dự báo của các điều kiện đại dương ở phía nam New Zealand?<br><b>Dịch ý:</b> Gió và dòng hải lưu phía Nam dâng cao sẽ gây ra hiện tượng gì cho NZ?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph C<br><i>'As the world warms, the great bank of west winds that circle Antarctica will become stronger... bring increased, sometimes catastrophic rainfall to the west coast... create drier conditions in some eastern regions...'</i><br><b>🧠 Lập luận:</b> Khi đại dương nóng lên, dải gió tây (bank of west winds) vòng quanh Nam Cực sẽ mạnh lên rõ rệt. Theo đáp án chuẩn học thuật của bài, phương án C là chính xác nhất.", "keywords": "bank of west winds circle Antarctica strong = band of west winds move further", "colorClass": "ev-29"}, "30": {"translation": "<b>Câu hỏi:</b> Tác giả đề cập đến khái niệm 'moisture deficit' (thâm hụt độ ẩm) nhằm chỉ ra điều gì?<br><b>Dịch ý:</b> Hiện tượng thâm hụt độ ẩm đất biểu đạt điều gì về tương lai của NZ?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph D<br><i>'Soils could go into moisture deficit earlier in the growing season... What we think of today as a medium-severity drought could be an almost annual occurrence by the end of the century.'</i><br><b>🧠 Lập luận:</b> Việc thiếu hụt độ ẩm đất trầm trọng (moisture deficit) diễn ra sớm và kéo dài sẽ khiến cho điều kiện canh tác, trồng trọt suy thoái nặng nề, hạn hán trung bình trở thành hạn hán thường niên. Khớp với phương án C: Điều kiện trồng trọt sẽ trở nên tồi tệ hơn (deteriorate).", "keywords": "moisture deficit in soils / drought annual = growing conditions deteriorate", "colorClass": "ev-30"}, "31": {"translation": "<b>Câu hỏi:</b> Đâu là hệ quả của ấm lên toàn cầu đối với ngành thể thao trượt tuyết New Zealand?<br><b>Dịch ý:</b> Tuyết rơi và các bãi trượt tuyết sẽ biến đổi thế nào?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph D<br><i>'The amount of snow that falls may actually increase, however, even in some northern centres... there could still be plenty of the white stuff up there.'</i><br><b>🧠 Lập luận:</b> Mặc dù dòng tuyết vĩnh cửu rút lên cao, lượng mưa tăng cường ở một số trung tâm phía bắc thực chất có thể làm lượng tuyết rơi tăng lên (snow falls increase). Khớp với phương án D: Sự nóng lên thực tế có thể mang lại nhiều tuyết hơn cho một số địa điểm trượt tuyết nhất định.", "keywords": "amount of snow may actually increase = provide more snow", "colorClass": "ev-31"}, "32": {"translation": "<b>Câu hỏi:</b> Tác giả dẫn ra nghiên cứu mới nhất của NIWA ở dãy Southern Alps nhằm mục đích gì?<br><b>Dịch ý:</b> Nghiên cứu về dãy Southern Alps chứng minh điều gì?", "exp": "<b>Dạng bài:</b> Multiple Choice<br><b>📍 Dẫn chứng:</b> Paragraph E<br><i>'suggest that by the end of the century, warming over the Southern Alps could be significantly greater than over the rest of the country.'</i><br><b>🧠 Lập luận:</b> Việc dẫn ra việc dãy núi Southern Alps chịu mức độ nóng lên lớn hơn hẳn phần còn lại của đất nước là để minh họa cho phương án A: Một khu vực cụ thể (a particular place) có thể chịu ảnh hưởng nghiêm trọng hơn của ấm lên toàn cầu.", "keywords": "warming over Southern Alps greater than rest = how a particular place affected", "colorClass": "ev-32"}, "33": {"translation": "<b>Câu hỏi:</b> Tóm tắt bảng: Mức độ dâng cao của mực nước biển tương lai quanh NZ là chưa chắc chắn và có thể được quyết định bởi...<br><b>Dịch ý:</b> Yếu tố địa cực nào quyết định mực nước dâng?", "exp": "<b>Dạng bài:</b> Summary Completion with Dropdown<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'...partly because of unknown rises resulting from the melting of the ice in the Arctic, Greenland and Antarctica.'</i><br><b>🧠 Lập luận:</b> Việc băng tan ở Bắc Cực (Arctic), Greenland và Nam Cực (Antarctica) là các khu vực thuộc vùng địa cực của Trái Đất (<b>Polar regions</b>). Do đó từ tương ứng để điền là chữ <b>D</b>.", "keywords": "melting of ice in Arctic, Greenland, Antarctica = polar regions (D)", "colorClass": "ev-33"}, "34": {"translation": "<b>Câu hỏi:</b> Tóm tắt bảng: Mực nước biển cao hơn dẫn tới việc làm giảm đi hoạt động...<br><b>Dịch ý:</b> Hiện tượng xâm nhập mặn nước ngầm tàn phá ngành kinh tế nào?", "exp": "<b>Dạng bài:</b> Summary Completion with Dropdown<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'...groundwater systems may become contaminated with saltwater, spoiling them for the irrigation of farmland, which in turn could diminish crop harvests.'</i><br><b>🧠 Lập luận:</b> Việc nước ngầm bị nhiễm mặn làm hỏng nước tưới tiêu trang trại (irrigation of farmland) và sụt giảm sản lượng thu hoạch hoa màu (diminish crop harvests). Đây chính là hoạt động sản xuất nông nghiệp (<b>Agriculture production</b>). Điền đáp án <b>A</b>.", "keywords": "spoiling irrigation of farmland / diminish crop harvests = agriculture production (A)", "colorClass": "ev-34"}, "35": {"translation": "<b>Câu hỏi:</b> Tóm tắt bảng: ...và dẫn tới những biến đổi về hình dạng của vùng...<br><b>Dịch ý:</b> Sự xói mòn do thủy triều làm biến đổi hình dạng của dải đất nào?", "exp": "<b>Dạng bài:</b> Summary Completion with Dropdown<br><b>📍 Dẫn chứng:</b> Paragraph F<br><i>'Similarly, over time, estuaries may be enlarged by erosion as tidal influences reach further upstream, altering the contours of whole shorelines...'</i><br><b>🧠 Lập luận:</b> Thủy triều lấn sâu gây xói mòn làm thay đổi đường viền của toàn bộ các đường bờ biển (shorelines). Bờ biển chính là dải đất ven biển (<b>Coastal land</b>). Điền đáp án <b>F</b>.", "keywords": "altering the contours of whole shorelines = changes to shape of coastal land (F)", "colorClass": "ev-35"}, "36": {"translation": "<b>Câu hỏi:</b> Thế giới tự nhiên có khả năng phản ứng, đối phó kém hơn con người trước các thách thức khí hậu.<br><b>Dịch ý:</b> Có phải hệ sinh thái tự nhiên thích nghi chậm chạp hơn xã hội loài người?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph G<br><i>'Human systems are better able to adapt to change than natural ecosystems because humans can see a problem coming and plan a response.'</i><br><b>🧠 Lập luận:</b> Đoạn G khẳng định hệ thống con người thích nghi tốt hơn (better able to adapt) so với hệ sinh thái tự nhiên vì con người biết lập kế hoạch phản ứng. Điều này tương ứng trực tiếp với việc thế giới tự nhiên kém linh hoạt/phản ứng kém hơn (less responsive). Chọn YES.", "keywords": "human systems better able to adapt than natural = natural world less responsive than humans | YES", "colorClass": "ev-36"}, "37": {"translation": "<b>Câu hỏi:</b> Ngành nông nghiệp đang tỏ ra quá bảo thủ và chống đối lại các đổi mới sáng tạo nông nghiệp.<br><b>Dịch ý:</b> Có phải nông dân New Zealand đang bảo thủ chống lại đổi mới?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph G<br><i>'Farmers and horticulturalists have made considerable advances, replacing crops they grow to better suit the new conditions.'</i><br><b>🧠 Lập luận:</b> Bài viết nói nông dân thực chất đã tạo ra những tiến bộ rất lớn (considerable advances) và thay thế cây trồng chủ động để thích nghi. Đoạn văn hoàn toàn không phán xét họ 'quá bảo thủ' (too conservative) hay chống đối cải tiến. Không có cơ sở xác nhận. Chọn NOT GIVEN.", "keywords": "agricultural too conservative = (Not mentioned)", "colorClass": "ev-37"}, "38": {"translation": "<b>Câu hỏi:</b> Hiện tượng nóng lên toàn cầu diễn ra chậm; nó sẽ ảnh hưởng đến các khu vực khác nhau theo những cách khác nhau.<br><b>Dịch ý:</b> Có phải tốc độ ấm lên toàn cầu là chậm chạp và tác động cục bộ khác biệt?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph H<br><i>'For natural ecosystems the rate of change is crucial. If it is low, the plants... If it is high, only...'</i><br><b>🧠 Lập luận:</b> Đoạn H chỉ phân tích cấu trúc giả thuyết: 'Nếu tốc độ thay đổi thấp (if it is low)... Nếu tốc độ thay đổi cao (if it is high)...', chứ hoàn toàn không đưa ra kết luận khẳng định rằng nóng lên toàn cầu hiện nay là chậm (slow). Chọn NOT GIVEN.", "keywords": "global warming is slow = (Not mentioned)", "colorClass": "ev-38"}, "39": {"translation": "<b>Câu hỏi:</b> Loài bò sát tuatara cực kỳ dễ bị tổn thương trước những thay đổi về điều kiện khí hậu.<br><b>Dịch ý:</b> Loài tuatara có nguy cơ bị đe dọa giới tính khi nhiệt độ tăng?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph H<br><i>'Take tuatara, for instance. Their sex is determined by the temperature... become predominately male - and now males already outnumber females by nearly two to one...'</i><br><b>🧠 Lập luận:</b> Nhiệt độ ấp trứng quyết định giới tính của tuatara. Khi trời nóng lên, chúng nở ra hầu hết là con đực, làm mất cân bằng giới tính nghiêm trọng (2 đực : 1 cái). Điều này chứng minh chúng cực kỳ nhạy cảm và dễ bị tổn hại (vulnerable) trước nhiệt độ tăng. Chọn YES.", "keywords": "tuatara vulnerable = sex determined by temperature / outnumber", "colorClass": "ev-39"}, "40": {"translation": "<b>Câu hỏi:</b> New Zealand bắt buộc phải cắt giảm lượng khí thải carbon của mình nếu muốn làm chậm quá trình nóng lên toàn cầu.<br><b>Dịch ý:</b> NZ có bắt buộc phải giảm khí thải carbon để cứu Trái Đất khỏi nóng lên?", "exp": "<b>Dạng bài:</b> Yes / No / Not Given<br><b>📍 Dẫn chứng:</b> Paragraph H<br><i>'Even if New Zealanders were to achieve the government's target of carbon neutrality, this would have no discernable impact on global climate change.'</i><br><b>🧠 Lập luận:</b> Câu hỏi khẳng định New Zealand 'phải giảm phát thải' (must reduce) để làm chậm biến đổi khí hậu toàn cầu. Nhưng bài đọc nêu rõ lượng khí thải của NZ quá tí hon (0.5%), nên dù có đạt trung hòa carbon thì cũng chẳng tạo ra bất kỳ tác động đáng kể nào (no discernable impact) lên khí hậu thế giới. Do đó khẳng định của câu hỏi là sai (NO).", "keywords": "must reduce to slow global warming &lt;&gt; achieve neutrality has no discernable impact | NO", "colorClass": "ev-40"}}
};
