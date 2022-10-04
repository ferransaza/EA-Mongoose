require('../connection');

const User = require('../models/User');

const updateCRUD = async () => {
    const user = await User.findOneAndUpdate({username: 'Osc321'}, {
        name: 'Oscar'
    }, {new: true});
    console.log(user);
};
updateCRUD();