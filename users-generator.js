const names = [
  'Emeka', 'Izu', 'Ada', 'Ekene', 'ThankGod', 'Precious', 'Ebuka', 'Kofi', 'George', 'Irem',
  'Kofi', 'Tyson', 'Philip', 'Christopher', 'Jacob', 'Joshua', 'Mary', 'Peter', 'Uriel', 'Amanda',
  'Femi', 'Temi', 'Robert', 'Bob', 'Henry', 'Oscar', 'Valentine', 'Joan', 'Michelle', 'Zora',
  'Amos', 'April', 'Famous', 'Barnabas', 'Ebenezer', 'Shedrack', 'Charlotte', 'Nathaniel', 'Esther', 'Grace',
  'Uche', 'Desmond', 'Chinaza', 'Lilian', 'Tari', 'Nnamdi', 'Juliet', 'Blessing', 'Kingsley', 'Nkechi',
  'Kelvin', 'Tosin', 'Faith', 'Chidera', 'Obinna', 'Jude', 'Daniel', 'Hope', 'Ijeoma', 'Cynthia',
  'Pascal', 'Victor', 'Miriam', 'Godwin', 'Samson', 'Gloria', 'Chika', 'Divine', 'Marvelous', 'Goodness',
  'Eunice', 'Lawrence', 'Tony', 'Angela', 'Ifeanyi', 'Becky', 'Clara', 'Uzo', 'Onyeka', 'Matilda',
  'Chisom', 'Rejoice', 'Stanley', 'Paul', 'Rita', 'Anita', 'Chinonso', 'Emmanuel', 'Marvel', 'Isaac',
  'Timothy', 'Zubby', 'Elijah', 'Peace', 'Favour', 'Ogechi', 'Lucky', 'Olamide', 'Joy', 'Ibrahim',
  'Bello', 'Fatima', 'Amina', 'Tunde', 'Rukayat', 'Yetunde', 'Sulaiman', 'Habib', 'Zainab', 'Halima'
];

const emails = [
  'emeka01@example.com', 'izu02@example.com', 'ada03@example.com', 'ekene04@example.com', 'thankgod05@example.com', 'precious06@example.com', 'ebuka07@example.com', 'kofi08@example.com', 'george09@example.com', 'irem10@example.com',
  'kofi11@example.com', 'tyson12@example.com', 'philip13@example.com', 'christopher14@example.com', 'jacob15@example.com', 'joshua16@example.com', 'mary17@example.com', 'peter18@example.com', 'uriel19@example.com', 'amanda20@example.com',
  'femi21@example.com', 'temi22@example.com', 'robert23@example.com', 'bob24@example.com', 'henry25@example.com', 'oscar26@example.com', 'valentine27@example.com', 'joan28@example.com', 'michelle29@example.com', 'zora30@example.com',
  'amos31@example.com', 'april32@example.com', 'famous33@example.com', 'barnabas34@example.com', 'ebenezer35@example.com', 'shedrack36@example.com', 'charlotte37@example.com', 'nathaniel38@example.com', 'esther39@example.com', 'grace40@example.com',
  'uche41@example.com', 'desmond42@example.com', 'chinaza43@example.com', 'lilian44@example.com', 'tari45@example.com', 'nnamdi46@example.com', 'juliet47@example.com', 'blessing48@example.com', 'kingsley49@example.com', 'nkechi50@example.com',
  'kelvin51@example.com', 'tosin52@example.com', 'faith53@example.com', 'chidera54@example.com', 'obinna55@example.com', 'jude56@example.com', 'daniel57@example.com', 'hope58@example.com', 'ijeoma59@example.com', 'cynthia60@example.com',
  'pascal61@example.com', 'victor62@example.com', 'miriam63@example.com', 'godwin64@example.com', 'samson65@example.com', 'gloria66@example.com', 'chika67@example.com', 'divine68@example.com', 'marvelous69@example.com', 'goodness70@example.com',
  'eunice71@example.com', 'lawrence72@example.com', 'tony73@example.com', 'angela74@example.com', 'ifeanyi75@example.com', 'becky76@example.com', 'clara77@example.com', 'uzo78@example.com', 'onyeka79@example.com', 'matilda80@example.com',
  'chisom81@example.com', 'rejoice82@example.com', 'stanley83@example.com', 'paul84@example.com', 'rita85@example.com', 'anita86@example.com', 'chinonso87@example.com', 'emmanuel88@example.com', 'marvel89@example.com', 'isaac90@example.com',
  'timothy91@example.com', 'zubby92@example.com', 'elijah93@example.com', 'peace94@example.com', 'favour95@example.com', 'ogechi96@example.com', 'lucky97@example.com', 'olamide98@example.com', 'joy99@example.com', 'ibrahim100@example.com',
  'bello101@example.com', 'fatima102@example.com', 'amina103@example.com', 'tunde104@example.com', 'rukayat105@example.com', 'yetunde106@example.com', 'sulaiman107@example.com', 'habib108@example.com', 'zainab109@example.com', 'halima110@example.com'
];

const portfolio = ['starter','amateur','pro','diamond']

const alphaBeta = 'abcdefghojklmnopqrstuvwxyz1234567890'
const pun = (alphaBeta.slice(0, 26) + alphaBeta).split('')
// console.log(names.length)
const allWallets = []

function walletAddressGenerator(){
    let wallet;
    do{
        wallet = 'KO'
        for(let i=0; i<63; i++){
            wallet += pun[Math.floor(Math.random()*pun.length)]
        }
    }while(allWallets.includes(wallet))
    allWallets.push(wallet)
    return wallet;
}

// console.log(walletAddressGenerator())

const users = names.map(function(username, index){
    // const isVerified = [true, false][Math.floor(Math.random()*2)]
    const isVerified = Math.random()<0.5
    const balance = generateBalance()
    return{
        id: index+1,
        username,
        email: emails[index] || `${username.toLowerCase()}${index+1}@example.com`,
        age: Math.floor(Math.random()*60)+18,
        isVerified,
        walletAddress: walletAddressGenerator(),
        balance,
        canWithdraw: isVerified,
        portfolio: definePortfolio(balance),
        joinedAt: new Date().toLocaleDateString()
    }
})
function generateBalance(){
    const r = Math.random()
    if(r<0.40) return Math.floor(Math.random()*10_000)
    else if(r<0.65) return Math.floor(Math.random()*100_000)
    else if(r<0.85) return Math.floor(Math.random()*300_000)
    else return 300_000 + Math.floor(Math.random()*500_000)
}
function definePortfolio(balance){
    if(balance==0){
        return `Not active`
    }
    else if(balance<10_000 && balance>0) return portfolio[0]
    else if(balance >=10_000 && balance<100_000) return portfolio[1]
    else if(balance >=100_000 && balance<300_000) return portfolio[2]
    else return portfolio[3]
}



module.exports = users