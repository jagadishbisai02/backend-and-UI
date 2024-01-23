const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const keysecret = "jagadishbisaijhansiranidolai";

const EmployeeSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("not valid email");
      }
    },
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  cpassword: {
    type: String,
    required: true,
    minlength: 6,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

//hash password
EmployeeSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
    this.cpassword = await bcrypt.hash(this.cpassword, 12);
  }

  next();
});

// token generate
EmployeeSchema.methods.generateAuthtoken = async function () {
  try {
    let token12 = jwt.sign({ _id: this._id }, keysecret, {
      expiresIn: "1d",
    });

    this.tokens = this.tokens.concat({ token: token12 });
    await this.save();
    return token12;
  } catch (error) {
    res.status(422).json(error);
  }
};

//creating model
const EmployeeModel = mongoose.model("users", EmployeeSchema);

module.exports = EmployeeModel;
