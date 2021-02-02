require('dotenv').config();
require('./config/database');

const Charity = require('./models/charity');
const User = require('./models/user');
// const Subscription = require('./models/subscription');

(async function() {

  await Charity.deleteMany({});
  const charities = await Charity.create([
    {name: "American Red Cross", color: "ED1B2E" ,street: "431 18th Street", city: "Washington", state: "DC", zip: 20006, ein: "53-0196605", phone: 8007332767, logo: "https://i.imgur.com/Udrw6xB.png", picture: "https://1000logos.net/wp-content/uploads/2017/05/American-Red-Cross-Logo.png", snippet: "The American Red Cross collects blood from donors, which it then distributes to hospitals for blood transfusions.", mission: "Since its founding in 1881 by visionary leader Clara Barton, the American Red Cross has been the nation's premier emergency response organization. We bring shelter, food and comfort to those affected by disasters, large and small. We collect lifesaving donated blood and supply it to patients in need. We provide support to our men and women in military bases around the world, and to the families they leave behind. We train communities in CPR, first aid and other skills that save lives. And we assist our neighbors abroad with critical disaster response, preparedness and disease prevention efforts. We are able to do all this by mobilizing the power of volunteers and the generosity of donors."},
    {name: "Alzheimer's Association", color: "661c78", street: "225 North Michigan Avenue Floor 17", city: "Chicago", state: "IL", zip: 60601, ein: "13-3039601", phone: 3123355886, logo: "https://i.imgur.com/phOLbsE.png", picture: "https://i.imgur.com/xVsGcKc.jpg", snippet: "The Alzheimer's Association leads the way to end Alzheimer's and all other dementia.", mission: "Alzheimer's Association is the leading voluntary health organization in Alzheimer care, support and research. Our mission is to eliminate Alzheimer's disease through the advancement of research; to provide and enhance care and support for all affected; and to reduce the risk of dementia through the promotion of brain health. Founded in 1980, the Alzheimer's Association, today a multimillion-dollar organization, has been the catalyst and leader for a generation of advancements in Alzheimer research and care. Our organization's achievements and progress in the field have given thousands of people a better quality of life and brought hope for millions more."},
    {name: "UNIFCEF USA", color: "00AEEF", street: "125 Maiden Lane", city: "New York", state: "NY", zip: 10038, ein: "13-1760110", phone: 8003675437, logo: "https://i.imgur.com/OPnhG9n.png", picture: "https://i.imgur.com/7rpoR1f.jpg", snippet: "UNICEF USA helps save and protect the world's most vulnerable children.", mission: "The United Nations Children's Fund (UNICEF) works in more than 190 countries and territories to put children first. UNICEF has helped save more children's lives than any other humanitarian organization, by providing health care and immunizations, clean water and sanitation, nutrition, education, emergency relief and more. UNICEF USA supports UNICEF's work through fundraising, advocacy and education in the United States. Together, we are working toward the day when no children die from preventable causes and every child has a safe and healthy childhood."},
    {name: "Doctors Without Borders", color: "FF0008", street: "40 Rector Street 16th Floor", city: "New York", state: "NY", zip: 10006, ein: "13-3433452", phone: 2126796800, logo: "https://i.imgur.com/ek14JYd.png", picture: "https://i.imgur.com/49kCBwx.png", snippet: "Doctors Without Borders delivers emergency medical aid to people affected by armed conflict, epidemics, natural and man-made disasters", mission: "Médecins Sans Frontières/Doctors Without Borders (MSF) is an independent international humanitarian organisation that delivers emergency medical aid to people affected by armed conflict, epidemics, natural and man-made disasters or exclusion from healthcare in more than 60 countries."},
  ])

  await User.deleteMany({});
  const users = await User.create([
    {name: "Admin", email: "admin@dd.com", password: "ddisgood", isAdmin: true}
  ])

  // await Subscription.deleteMany({});
  // const subscription = await Subscription.create([
  //   {name: "One dollar", price: 1, currency: 'usd'},
  //   {name: "Five dollars", price: 5, currency: 'usd'},
  //   {name: "Ten dollars", price: 1, currency: 'usd'},
  // ])

  console.log(charities)

  process.exit();

})();