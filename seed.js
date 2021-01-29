require('dotenv').config();
require('./config/database');

const Charity = require('./models/charity');
const User = require('./models/user');

(async function() {

  await Charity.deleteMany({});
  const charities = await Charity.create([
    {name: "American Red Cross", street: "431 18th Street", city: "Washington", state: "DC", zip: 20006, ein: "53-0196605", phone: 8007332767, logo: "https://library.kissclipart.com/20190301/xie/kissclipart-cross-clipart-american-red-cross-3a422d1bb8a3d340.png", picture: "https://1000logos.net/wp-content/uploads/2017/05/American-Red-Cross-Logo.png", snippet: "The American Red Cross collects blood from donors, which it then distributes to hospitals for blood transfusions.", mission: "Since its founding in 1881 by visionary leader Clara Barton, the American Red Cross has been the nation's premier emergency response organization. We bring shelter, food and comfort to those affected by disasters, large and small. We collect lifesaving donated blood and supply it to patients in need. We provide support to our men and women in military bases around the world, and to the families they leave behind. We train communities in CPR, first aid and other skills that save lives. And we assist our neighbors abroad with critical disaster response, preparedness and disease prevention efforts. We are able to do all this by mobilizing the power of volunteers and the generosity of donors."},
  ])

  await User.deleteMany({});
  const users = await User.create([
    {name: "Admin", email: "admin@dd.com", password: "ddisgood", isAdmin: true}
  ])

  console.log(charities)

  process.exit();

})();