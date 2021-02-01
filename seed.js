require('dotenv').config();
require('./config/database');

const Charity = require('./models/charity');
const User = require('./models/user');
const Subscription = require('./models/subscription');

(async function() {

  await Charity.deleteMany({});
  const charities = await Charity.create([
    {name: "American Red Cross", street: "431 18th Street", city: "Washington", state: "DC", zip: 20006, ein: "53-0196605", phone: 8007332767, logo: "https://i.imgur.com/Udrw6xB.png", picture: "https://1000logos.net/wp-content/uploads/2017/05/American-Red-Cross-Logo.png", snippet: "The American Red Cross collects blood from donors, which it then distributes to hospitals for blood transfusions.", mission: "Since its founding in 1881 by visionary leader Clara Barton, the American Red Cross has been the nation's premier emergency response organization. We bring shelter, food and comfort to those affected by disasters, large and small. We collect lifesaving donated blood and supply it to patients in need. We provide support to our men and women in military bases around the world, and to the families they leave behind. We train communities in CPR, first aid and other skills that save lives. And we assist our neighbors abroad with critical disaster response, preparedness and disease prevention efforts. We are able to do all this by mobilizing the power of volunteers and the generosity of donors."},
    {name: "Alzheimer's Association", street: "225 North Michigan Avenue Floor 17", city: "Chicago", state: "IL", zip: 60601, ein: "13-3039601", phone: 3123355886, logo: "https://i.imgur.com/0FVm0Fi.png", picture: "https://i.imgur.com/xVsGcKc.jpg", snippet: "The Alzheimer's Association leads the way to end Alzheimer's and all other dementia.", mission: "Alzheimer's Association is the leading voluntary health organization in Alzheimer care, support and research. Our mission is to eliminate Alzheimer's disease through the advancement of research; to provide and enhance care and support for all affected; and to reduce the risk of dementia through the promotion of brain health. Founded in 1980, the Alzheimer's Association, today a multimillion-dollar organization, has been the catalyst and leader for a generation of advancements in Alzheimer research and care. Our organization's achievements and progress in the field have given thousands of people a better quality of life and brought hope for millions more."},
  ])

  await User.deleteMany({});
  const users = await User.create([
    {name: "Admin", email: "admin@dd.com", password: "ddisgood", isAdmin: true}
  ])

  await Subscription.deleteMany({});
  const subscription = await Subscription.create([
    {name: "One dollar", price: 1, currency: 'usd'},
    {name: "Five dollars", price: 5, currency: 'usd'},
    {name: "Ten dollars", price: 1, currency: 'usd'},
  ])

  console.log(charities)

  process.exit();

})();