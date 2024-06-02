import { Commet } from "../../models/Commet.js";
import { Users } from "../../models/Users.js";
import { BadRequestError, NotFoundError } from "../../shared/errors/classes.js";

const userAddCommet = async (data) => {
  const { fullName, email, phoneNumber, commets } = data;

  const user = await Users.findOne({
    where: {
      email,
      phoneNumber,
    },
  });

  if (!user) {
    throw new NotFoundError("Sorry, cannot write commet because user does not exist in the system");
  }
  if (!fullName || !email || !phoneNumber) {
    throw new BadRequestError("Full name, email and phone number are required to write a comment");
  }

  const newComment = await Commet.create({
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    commets: commets,
    user_id: user.uuid,
  });

  return newComment;
};


export {userAddCommet}
