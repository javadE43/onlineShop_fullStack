import db from "../model/index.js";

export const updateUser = async function (req, res) {
  try {
    const updatedRows = await db.user.update(
      {
        firstName: req.body.firstname,
        // username: req.body.username,
        lastName: req.body.lastname,
        mobile: req.body.mobile,
        email: req.body.email,
        passwordHash: req.body.password,
        admin: req.body.admin ? req.body.admin : false,
      },
      {
        where: { userName: req.user.userName },
      }
    );
    res.status(200).json(updatedRows);
  } catch (err) {
    res.status(500).json(err);
  }
};

// delete user
export const deleteuser = async function (req, res) {
  try {
    const updatedRows=await db.user.destroy({
        where: { id: req.params.id },
      });
      
    res.status(200).json(updatedRows);
  } catch (err) {
    res.status(500).json(err);
  }
};


//getUser

export const getUser = async function (req, res) {
    try {
      const user=await db.user.findByPk(req.params.id)
        
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  };




  // getAllUsers

  export const getAllUser = async function (req, res) {
    try {
       const users=await db.user.findAll({
            order: [
              ["id", "DESC"],
            //   ["cityName", "ASC"],
            ],
          })
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  };



  // // //GET USER STATS



  export const getUserStats = async function (req, res) {
    try {
        const date = new Date();
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
      
        try {
          const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
              $project: {
                month: { $month: "$createdAt" },
              },
            },
            {
              $group: {
                _id: "$month",
                total: { $sum: 1 },
              },
            },
          ]);
          res.status(200).json(data);
        } catch (err) {
          res.status(500).json(err);
        }
      res.status(200).json(users);
    } catch (err) {
      res.status(500).json(err);
    }
  };

  