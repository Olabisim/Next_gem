import Image from "next/image";
import { RepeatingText } from "./components/repeatingText";

// Outfit

// --font-family-main: "Nippo", Helvetica, Arial, sans-serif;
// --font-family-heading: "Outfit", Inter, Helvetica, Arial, sans-serif;

export const WhitepaperQs = ({title, children}) => (
  <div>
      <h2 className="text-white">{title}</h2>
      <ul>
        {children}
      </ul>
  </div>
)

export const SupplyStructure = ({title, content}) => (
  <p><span>{title}</span>{content}</p>
)

export const RoundPlanComponent = ({title, heading1, heading2, content1, content2}) => (
  <div>
    <h2>{title}</h2>
    <h5>{heading1}</h5>
    <p>{content1}</p>
    <h5>{heading2}</h5>
    <p>{content2}</p>
  </div>
)


export const HeaderText = ({header, description}) => {
  return (
    <div>
      <h2>{header}</h2>
      <p>{description}</p>
    </div>
  )
}

export const MainHeaderText = ({header, title, description}) => {
  return (
    <div>
      <h2>{header}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export const ParagraphComponent = ({content, children, white}) => {
  return (
    <p className="text-white">
        <span>{children}</span>
        {content}
    </p>
  )
}

export const ParagraphComponentEnd = ({content, children}) => {
  return (
    <p>
        {content}
        <span>{children}</span>
    </p>
  )
}

export default function Home() {
  return (
    <div>
      {/* landing page */}
      <div>
        <h1 class="font-bold text-center text-[40px] bg-gradient-to-t from-[#000] via-[#fff] to-[#fff] inline-block text-transparent bg-clip-text">THE NEXT GEM</h1>
        {/* <p className="font-bold text-center text-[40px]" >THE NEXT GEM</p> */}
        <p>Whitepaper V2 - March 31, 2024</p>
        <a>https://thenextgem.ai</a>
        <p>Introducing the next generation of AI-powered tools and platforms for venture capitalists and cryptocurrency enthusiasts. Harness the most advanced neural networks to guide your investment
          journey while maximizing your time efficiency.</p>
        <h3>DISCLAIMER:</h3>
        <p>THIS DOCUMENT PROVIDES AN INITIAL SUMMARY OF THE NEXTGEM PROJECT. AS THE
            PROJECT PROCEEDS, THIS DOCUMENT IS EXPECTED TO EVOLVE.
            THE NEXT GEM TEAM MAY POST MODIFICATIONS, REVISIONS, AND UPDATED DRAFTS UNTIL
            THE FINAL DOCUMENT IS PRESENTED BEFORE THE DATE OF THE PUBLIC BETA.
            THIS WHITEPAPER SETS FORTH A DESCRIPTION OF THE PLANNED USE OF THE NEXT GEM
            TOKEN. THIS IS PROVIDED FOR INFORMATION PURPOSES ONLY AND NOT A BINDING LEGAL
            AGREEMENT.
            THE NEXT GEM BETA WILL BE GOVERNED BY SEPARATE TERMS & CONDITIONS. IN THE
            EVENT OF A CONFLICT BETWEEN THE TERMS & CONDITIONS AND THIS WHITEPAPER, THE
            TERMS & CONDITIONS GOVERN.
            THIS WHITEPAPER IS NOT AN OFFERING DOCUMENT OR PROSPECTUS AND IS NOT
            INTENDED TO PROVIDE THE BASIS FOR ANY INVESTMENT DECISION OR CONTRACT.
          </p>

      </div>
      
      <RepeatingText />


      {/* Introduction */}
      <div>
        <h2>INTRODUCTION</h2>
        <h3 className="text-capitalize">Abstract & goals</h3>
        <h4>Year after year, the increasing value and strength of the artificial
        intelligence ecosystem shows its imminent dominance and utility
        over the Internet. AI has transformed various industries by
        revolutionizing how we process information, make strategic
        decisions, and engage with cutting-edge technologies.
        </h4>

        <p>It’s not just about automation or computational speed; it’s about fundamentally
        reimagining the operational paradigms across sectors.
        In the realm of blockchain technology, AI has been a game-changer. It has significantly
        expanded blockchain’s potential across various domains.
        The synergy between AI and blockchain has led to groundbreaking advancements in data analysis,
        consensus mechanisms, and security protocols, among other areas.
        These transformative improvements continue to refine the landscape of blockchain technology, often in subtle
        ways that may not be immediately apparent yet are fundamentally altering its trajectory and capabilities.
        Next Gem aspires to be at the forefront of this revolution by introducing a new era in crypto data research and analysis:
        We aim to build a set of software and tools monitored by the best LLM artificial intelligence available to access all Web3
        project data directly on their creation and providing our community efficient ways to invest in the most promising crypto
        projects, on any existing blockchains.
        </p>
        
        <RepeatingText />

        <HeaderText 
        header={'INVESTING EFFICIENTLY'}
        description={'As the bull runs rampant, everyone rushes to invest in the most innovative, trendy, and promising projects. Still, thesmartest ones have already selected their bags during the bear market and are waiting to follow the success of theirinvestments; they are usually the most successful cause they take time to analyze, scratch everything, not just by thesurface, and make all the necessary efforts to understand what they are getting involved in: this is what makes a prodifferent from a beginner.'}
        />

        <ParagraphComponent content="As the bull runs rampant, everyone rushes to invest in the most innovative, trendy, and promising projects. Still, the smartest ones have already selected their bags during the bear market and are waiting to follow the success of their investments; they are usually the most successful cause they take time to analyze, scratch everything, not just by the surface, and make all the necessary efforts to understand what they are getting involved in: this is what makes a pro different from a beginner" />

        <ParagraphComponent content="Instead of waiting for the news to be published by the big ventures or social media influencers, missing the correct timing, and losing your portfolio by FOMO, you need to act before and position yourself as a pioneer by putting time and effort into the correct way. Only some people can do it or have the necessary knowledge to do so, but fortunately, we do know someone who knows everything to help you: artificial intelligence." />
        
        <ParagraphComponent content="Understanding Web3 project data, looking into the details of token economics or the technical aspects like reading and understanding intelligent contracts, and knowing everything about a project is challenging and takes a lot of time. Keeping up with the latest trends and being able to follow them is rewarding for those who have the experience, even though it’s hard to get all the information from different places." />
        
        <ParagraphComponent content="we extract all information we can find on any existing or new projects that are being created in the crypto eco-system by taking the best possible accurate data, and we feed the most intelligent AI to make that work for us, analyze and score them based on pre-existing rules." />
        
        
        <HeaderText 
        header={'ANALYSING & REACTING'}
        description={'Our ambition is to be the premier platform for analysis and investment, providing a rapid and reliable source of information for all current and emerging crypto projects. We aspire to be the go-to resource, similar to how Coin Market Cap is the benchmark for price tracking.'}
        />

        <ParagraphComponent content="We analyze each project’s information through the best LLMs available like Mistral,Gemini,GPT,Grok and summarize an average score on our platform. Once we have all the results computed from the artificial intelligence, we fine-tune our agent by forwarding all pieces of information treated by all the models, allowing us to interact directly with the precise thoughts and answers of each." />
        
        <ParagraphComponent content="We want to improve the quality of due diligence research by effectively summarizing the most filtered data, removing the extra noises, and giving a score note to help you on your investment journey." />
        
        <ParagraphComponent content="While our platform utilizes the most advanced technology of our time to dig potential in various projects, its effectiveness depends on proper usage and vigilant market responsiveness. We provide tools to filter the promising projects, but as with any powerful tool, it requires careful application and cannot guarantee success in any venture." />
        
        <ParagraphComponent content="A more concrete example, which is much harder for a human to filter and not be misled by malicious actors, concerns the authenticity of community engagement. The most advanced Large Language Models (LLMs) currently on the market can apply sentiment and text content analysis to provide factual information about a project’s community." />
        
        <ParagraphComponent content="They quickly help to determine whether participants in a discussion, such as in a Telegram group, are genuine humans or bots. They assess whether these members are engaged or simply waiting for an airdrop or campaign rewards and distinguish between paid individuals feigning activity and genuinely enthusiastic members who are passionate about the project;">
        this is analyzed by The Next Gem.
        </ParagraphComponent>

        <MainHeaderText title="TECHNICAL" header="LLM WITH EFFICIENCY" content="LLMs, by definition, are text-based language models trained on existing data with billions of parameters. Given the current state of technology, they may not be pertinent for real-time information analysis, such as evaluating a new crypto project that zxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz           xxemerged two weeks ago; they must be assisted or supplemented to leverage their
intelligence effectively.
 " />


        <ParagraphComponent content="All existing stored data from all crypto projects that we retrieve on the Internet is computed in the Next Gem MongoDB database, sent and processed by the most powerful AI models available on the market today; here is a non-exhaustive list of them: GPT4, GEMINI AI, MISTRAL AI, GROK AI." />
        
        <ParagraphComponentEnd content="We categorize projects using these models based on defined criteria, and rules trained and reviewed both by the AI themselves and experts in the crypto investing industry. Each model evaluates the overall reliability of a project and assigns a score to each one, utilizing a comprehensive data set. They are continually updated with all available information we can gather from the project’s website, documentation, papers, and more.">
          <br />
          Our LLM back-end processes are developed in C# language or Node.JS (Typescript). We interact with the APIs of each
          AI company, sending them the extra data extracted from the scrapper (see section below): they are executed in a safe
          environment in cloud instances. Some extra instructions are provided to give them specific tasks, knowing what they
          have to do precisely: known as assistants, we use a relatively low LLM temperature to avoid creative outputs and ensure
          the models do as taught & instructed.
        </ParagraphComponentEnd>
        
        <ParagraphComponent content="The software process related to the AIs interaction waits for new projects to be sent to their execution state through cinternal HTTP requests for specific requests demands or select the fresh one on our MongoDB database directly by filtering projects not analyzed yet by each model we implement." />

        <RepeatingText />
        
        <HeaderText 
        header={'WEB DATA SCRAPING'}
        description={'For the initial layer, we compile an exhaustive list of new and existing crypto projects. This involves parsing data from various sources, both centralized, like Coin Market Cap, and decentralized, such as newly created launchpad sales, among many others. The first filtering stage employs complex regular expressions to extract datasets containing the essential information needed for accurate further analysis.'}
        />                                                                                                                                                     
        
        <ParagraphComponent content="We have developed programs in Node.JS (Typescript) that simulate a web browser environment to accomplish this. These programs navigate various website sources, seeking out new projects in real-time. They also connect via RPC with blockchain smart-contract flows, such as Ethereum pre-sale launchpad smart contracts, which sometimes provide new or additional textual information that we extract." />
       
        <ParagraphComponent content="Once we’ve gathered the essential information for a new project, it’s stored in our MongoDB database and then moved to the second layer of the web data processor. With the foundational data established — the information the project team wants public — we delve deeper, extracting details like community information." />
        
        <ParagraphComponent content="The next step for the second layer involves going directly to the project’s website to collect all text and image information from every page, along with any documentation, GitBooks, whitepapers, and team details. We temporarily         store all found information on our servers, then apply an algorithm known as Levenshtein distance to ensure the accuracy and uniqueness of the information, avoiding duplication of any data already present." />
        
        <ParagraphComponent content="Additionally, the roadmap is thoroughly analyzed to extract all possible milestones, assessing the ambition of the team’s vision. The token economics are also carefully reviewed, detailing aspects such as the presence of an associated token, its utility, and the circulating supply at the Token Generation Event (TGE), among other factors.." />
        
        <ParagraphComponent content="We aim to extend our web data analysis to include scrutinizing the GitHub source code from the project’s public repository. By submitting samples to AI models, we intend to prevent the replication of other projects and ascertain whether a certain quality standard has been met." />
        
        <HeaderText 
        header={'WEB DATA SCRAPING'}
        description={'By customizing a Large Language Model (LLM), we aim to refine our initial output and enhance the value returned to our users. We store all the information processed by various AI systems in our MongoDB database.'}
        />                                                                                                                                                     
        
        <ParagraphComponent content="This allows us to create a specialized version of the LLM that is well-informed about the collective knowledge each AI has generated on specific projects. Consequently, users can access detailed insights through this customized LLM, tailored to provide precise and comprehensive project analyses." />
        
        <ParagraphComponent content="All the scores from these previous different models are cross-referenced. Our custom model will assign its scorederived from an overall average score: all this data will enable us to establish a Trustability factor, allowing you to invest in any project with the best data available on the market." />
        
        <ParagraphComponent content="in any project with the best data available on the market. We are making it by breaking down each document into smaller text segments, known as chunks, and then converting these chunks into embeddings. Embeddings are numerical representations of text that capture the essence of theinformation and can be processed by machine learning models." />
        
        <ParagraphComponent content="These embeddings are stored in a vector database to facilitate efficient searching and retrieval of similar embeddings. When a user has a question, the system embeds it to understand its context and content. It then searches the vector database for chunks of text whose embeddings are similar to the question’s embedding." />
        
        <ParagraphComponent content="The relevant chunks contain information that can help answer the user’s question. Finally, the system sends both the original question and the retrieved chunks of text as context to an efficient language model; it then uses this information to generate a coherent and contextually relevant answer to the initial question." />
        
        <ParagraphComponent content="This process allows for a more informed and precise response by providing the language model with a tailored context extracted from our MongoDB database of text embeddings." />
        
        <p>Sample question to Next Gem AI:</p>

        <RepeatingText title="“ What is the note of the project, Solana? Reminds me of the GPT analysis. What he said about it?”" />

        <MainHeaderText title="VISION" header="TOKEN ECONOMICS" content="We must establish a flexible economic model to operate our system efficiently and motivate our community’s active participation in our platform and products. This model should cover parsing, analyzing, and any fees associated with the execution costs of our artificial intelligence tools. ." />
        
        <ParagraphComponent content="The optimal approach to balancing execution services with user engagement is introducing our token, $GEMAI, deployed on the Ethereum blockchain. This token will be necessary for acquiring premium access to some of our paid products, including the custom Next Gem LLM. " />
        
        <ParagraphComponent content="Each premium access will be time-bound, and a certain amount of the $GEMAI token must be burned to gain access. Consequently, the token supply is designed to be deflationary, with its value anticipated to increase alongside the growth of the project and the usage of our products." />
        
        <ParagraphComponent content="While token burning through our premium services is an effective strategy, it’s only sustainable for a while; eventually, we will reach a point where there is no supply left to burn. Therefore, we plan to pivot from a burning mechanism to a locking model at a certain stage. In this model, users must lock $GEMAI tokens for a specific period to gain access to premium services." />

        {/* code logic problem  */}

        <p>The total supply of the $GEMAI is 850 million tokens:</p>

      <SupplyStructure title="Technology and Infrastructure: 5% (42,500,000 $GEMAI )" content="- Funds allocated for ongoing development, maintenance, and scaling of the platform’s technology infrastructure." />
      
      <SupplyStructure title="Marketing and Community Growth: 10% (85,000,000 $GEMAI )" content="- For promotional activities, partnerships, community incentives, and other strategies to increase adoption and visibility." />
      
      <SupplyStructure title="Ecosystem Incentives and Rewards: 14.5% (123,250,000 $GEMAI )" content="- Dedicated to incentivizing user participation, including rewards for using the platform, community contributions, and engagement initiatives." />
      
      <SupplyStructure title="Staking Rewards: 9.5% (80,750,000 $GEMAI)" content="- Reserved for users who stake their tokens, contributing to platform liquidity and stability while earning rewards." />
      
      <SupplyStructure title="Team and Advisors: 10% (85,000,000 $GEMAI)" content="- Compensation for the team and advisors, vested over a period to ensure long-term commitment and alignment with project success." />
      
      <SupplyStructure title="Private Round: Approximately 12% (102,000,000 $GEMAI)" content="- Reserved for the first round of private sales, targeting strategic investors." />
      
      <SupplyStructure title="Public Round: Approximately 19% (161,500,000 $GEMAI ) " content="- Available for broader public purchase during the public sale to increase token distribution and community engagement.." />
      
      <SupplyStructure title="Liquidity: 10% (85,000,000 $GEMAI ) " content="- Allocated to ensure sufficient liquidity for exchanges and transactions within the ecosystem." />
      
      <SupplyStructure title="Platform Development Fund: 5% (42,500,000 $GEMAI )" content="- For future development, new features, and integration of advanced technologies." />
      
      <SupplyStructure title="Operational Reserve: 5% (42,500,000 $GEMAI )" content="- Kept as a reserve for unforeseen expenses, ensuring the smooth operation of the platform." />

      <RoundPlanComponent 
        title="Rounds plan for the $GEMAI token launch:"
        heading1="Private Round: ( Completed)"
        heading2="Public Round:"
        content1="• $0.004350 per $GEMAI , approximately 102,000,000 tokens (443,700$), with 25% unlock at TGE, then 4 months linear vesting, 0 months cliff"
        content2="• $0.0051 per $GEMAI, approximately 161,500,000 tokens (823,650$), with 25% unlock at TGE, then 4 months linear vesting, 0 months cliff"
      />

      <RepeatingText content="From funds raised ($200K) + initial liquidity ($200K) ~ $400K liquidity to be locked on Uniswap V3 Pool for three years" />

      <ParagraphComponent content="The initial token supply on the market will be 170,000,000 $GEMAI tokens (~20%) and a diluted market cap of ~$8,032,500 as the starting price is approx ~0.0051$." />
      
      <ParagraphComponent content="We will apply a 3-month cliff lock on the rest of the supply (team, treasury, etc.) and announce the vesting plan based on the market state and community feedback once close to the unlock date, except for liquidity supply, which will be required in case of CEX listing and such necessary for the project growth." />

      <HeaderText header="PREMIUM SERVICES" description="Premium services are the core heart of the tokenomics of $GEMAI token; they will grant you access to more details on our platform for each project, to restricted areas such as being able to converse with our NextGem AI, described above, which has direct access to all the computed results contained in our private database." />

      <ParagraphComponent content="You can subscribe to the Premium service over three periods: 1 month, 6 months, or one year. Discount is applied based on duration by burning an amount of $GEMAI through a transaction on the Ethereum chain, saved on a smart contract we deployed. " />
      
      <ParagraphComponent content="Here is a non-exhaustive plans list for the Premium service we plan to integrate in the future (or already present):" />

      <ParagraphComponent content="• Accessing Next Gem AI to ask specific questions from our database dataset." />

      <ParagraphComponent content="• Sentiment Analysis from community member engagement and trustability score." />

      <ParagraphComponent content="• Further details on the project info, such as direct pros and cons designed by the different AIs and resumed info on the web application on a single click." />

      <ParagraphComponent content="• Requesting particular analysis on a specific project by providing the website link, using our LLM AI system to start a real-time analysis and provide you a note in real-time." />

      <ParagraphComponent content="• Receive alerts based on Criteria pre-setup on our application, potentially getting info on new launches that meet" />
      
      <ParagraphComponent content="your conditions over socials, emails, etc. Real-time new analysis from our system, directly shared with you without extra time." />

      <HeaderText header="PROJECT ROADMAP" description="The roadmap described above is what we have already done and the potential of what we’re thinking to do over the periods; we can’t guarantee that it can be done in time or is possible." />
      </div>


      <div>
        <WhitepaperQs title="Q4 2023: (Completed)">
          <li>Programming the first version of the Web Scrapper, analyzing extractable information on the Internet for any specific crypto-projects in NodeJS.</li>
          <li>Creation and filtering of our datasets database (such as MongoDB) from projects parsed data within the scrapper framework and internal APIs.</li>
          <li>Writing the extended rules and weightage calculations, testing, helping the AIs models analyze and score project content.</li>
          <li>Back-end daemon software in continuous research for new projects datasets available on our database from the scrapper, sending processed information to all the LLM models for analysis.</li>
          <li>Building our web application with internal APIs to access information computed in our database, from AI result scores to private LLM content access.</li>
          <li>Releasing the open-source repositories of the NextGem project on GitHub, making our scores analysis readable by anyone.</li>
        </WhitepaperQs>
        <WhitepaperQs title="Q1 2024: (In Progress)">
          <li>Designing and developing the smart contracts for the $GEMAI ERC-20 token to be deployed on the Ethereum Chain.</li>
          <li>Burning deflationary mechanism on-chain through a smart contract associated with community users’ wallets to access or revoke premium NextGem services.</li>
          <li>Launching the MVP first version of The NextGem online linked with our APIs, database, and information on projects (AIs models scoring).</li>
          <li>Initiating the NextGem project across social networks to gain visibility and initiating deals to prepare the launch of the $GEMAI token with influencers and VCs.</li>
          <li>Deploying the Custom NextGEM AI LLM with our Premium service using the on-chain contract accessible on our online application.</li>
          <li>Kickstarting the $GEMAI Token over the market by deploying it through a FairLaunch or a Decentralized launchpad we partnered with.</li>
          <li>Deploying liquidity over a Uniswap pool, enabling the buy and sell of the $GEMAI token with liquidity locked over 3 years once kick-started.</li>
        </WhitepaperQs>
        <WhitepaperQs title="Q2 2024">
          <li>Working on more crypto projects data sources fetching from different places, centralized or decentralized, to fetch the most possible source of info on project launch to save in our data.</li>
          <li>The accuracy of our dataset filtered and tested, updated, and improved based on new available techniques and community feedback on the current analysis state.</li>
          <li>Adding more AI model sources to work with, following the latest powerful and most efficient ones, as it’s moving very fast and exponentially.</li>
          <li>Bringing partnerships to the $GEMAI ecosystem adds value and visibility to our project.</li>
          <li>Exploring the listing of the $GEMAI token on some new centralized exchange Tier 1 or new blockchain AMM, potentially bridged on it to increase our growth.</li>
          <li>Explore partnerships or integrations with existing DeFi platforms to expand the utility of $GEMAI tokens, such as enabling them to be used in liquidity pools, lending, or yield farming.</li>
        </WhitepaperQs>
        <WhitepaperQs title="Q3 2024">
          <li>Working on different sources of potential analysis to be improved or added, such as the Community analysis of projects or code source, etc.</li>
          <li>Introducing new user interfaces and experience improvements based on community feedback and usability studies.</li>
          <li>Enhancing AI models with machine learning techniques to predict market trends and provide more accurate project evaluations.</li>
          <li>Evaluating and integrating emerging blockchain technologies and trends to keep the NextGem platform at the forefront of innovation.</li>
          <li>Expanding the NextGem platform to support additional languages and regions, making it a truly global tool for crypto investment.</li>
          <li>Strengthen security measures and conduct regular audits and updates to protect user database behavior data.</li>
        </WhitepaperQs>
        <WhitepaperQs title="Q4 2024">
          <li>Implement AI-driven recommendations to suggest potential investment opportunities based on the user’s past behavior and preferences, on the web application.</li>
          <li>Set up a continuous feedback loop with the community to regularly update the AI models with new data and insights.</li>
          <li>Implement A/B testing and other methods to continuously improve the platform based on user interaction and success rates.</li>
          <li>Introduce DAO, where the community can propose and vote on new features or changes to the $GEMAI ecosystem.</li>
          <li>Incorporating blockchain forensic tools to track projects’ history and security, offering an extra layer of assurance and trust for investors, can be an extra note as a Certik dashboard.</li>
          <li>Implement machine learning algorithms to predict the potential success of crypto projects based on historical data and trends.</li>
        </WhitepaperQs>
      </div>


      {/* footer div section */}
      <div>
          <p>WHITE PAPER</p>
          <h2>THANKS FOR READING</h2>
      </div>
    </div>
  );
}
