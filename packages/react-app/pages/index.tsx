import Button from "./Button";
import getTotalSupply from "./Identify";
export default function Home() {
  return (
    

      
   
    <div>
     
    
   <a href = 'https://identify-nu.vercel.app/'>
   <Button 
        border="none"
        color="blue"
        height = "30px"
        onClick={(
         
          
        ) => alert("You opt to login, click ok to complete")}
        radius = "50%"
        width = "80px"
        children = "Login"
        >
      </Button>
      </a>
 <div>
  🚀 How it works 
  <div></div>

As a first time user, you would need to submit documents: a 3-dimension passport photograph of you, a certificate of income, a residence permit, or a receipt for payment of utilities at your address, NIN, BVN, VIN and your international passport if you have one. These securities are checked on several bases, after which they determine your level, access to money transactions on any system or platform that KYC is needed, how much you can withdraw or transfer to your account. Since cryptocurrency transactions are non-refundable, an improved security system is needed.
Our decentralized KYC verification process allows all the participants  in the Blockchain network to verify their different documents that are mostly used for verification purposes, e.g BVN, NIN, VIN, International Passport etc.
Our system also allows organizations to conduct credible elections and gives the electorates the powers to vote for legitimacy of the data provided by the candidates or organizations. Depending on number of votes KYC status of customers or voters gets stored on the Blockchain. 

The major enhancement in our proposed method is that organizations or political parties can also monitor the process in such a way that, if any political party is tampering with their voters' KYC data and that particular party or entity will get sanctioned accordingly on the network based on this voting. In this way, Blockchain can be used to improve the efficiency of KYC process with its distinctive features.

Our core DAO features include 
- A unified NFT IDS system 
- Spilt Payment system
- Dynamic voting system with real time results (for both private and public entities)
- Community calls and members register,
- Real time analytics for dao owners
- DAO pay (allows the bankless and walletless to make transactions)
- Our DAO bots . And other cool community features

Our open source DAO based system, is built in such a way that our community members are onboarded seamlessly and on the go. This will help us track the growth of the software and its level of impact  with our open source code model, based on the level of active communities that are onboarded on the platform and their activity level backed with our real time analytics. It will also help us make policies and upgrade to the system for better engagement.

By providing these solutions, we would be bringing those at the grassroots into the world of Blockchain, one step at a time and we are committed to growing this emerging technology and bringing it to to its fullest potential. 



 </div>
      

      <Button 
        border="none"
        color="red"
        height = "60px"
        onClick={getTotalSupply}
        radius = "19%"
        width = "80px"
        children = "Total Supply"
        >
      </Button>

    </div>
  )
  
}
