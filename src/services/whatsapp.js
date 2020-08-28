/* eslint-disable no-underscore-dangle */
/* eslint-disable import/prefer-default-export */

const getFirstName = (name) => name.split(' ')[0];

const getGarmentsText = (garments) => garments.map((garment) => garment.name).join(', ');

const messageBuilder = (userGarments, receiverGarments, receiver, user) => {
  const myGarmentsText = getGarmentsText(userGarments);
  const theirGarmentsText = getGarmentsText(receiverGarments);

  const isPlural = (things) => (things.length > 1 ? 's' : '');

  return `Hola ${getFirstName(receiver.fullName)}! soy ${getFirstName(user.fullname)}, vi que hicimos match en clothify, te gustan mi${isPlural(userGarments)} prenda${isPlural(userGarments)}: ${myGarmentsText}. Y a mi me gustan tu${isPlural(receiverGarments)} prenda${isPlural(receiverGarments)}: ${theirGarmentsText}. Te parece si cambiamos?`;
};

export const urlGenerator = (match, userId) => {
  const userGarments = match.garments.filter((garment) => garment._id === userId);
  const receiverGarments = match.garments.filter((garment) => garment._id !== userId);
  const receiver = match.firstUser === userId ? match.secondUser : match.firstUser;
  const user = match.firstUser === userId ? match.firstUser : match.secondUser;

  const message = messageBuilder(userGarments, receiverGarments, receiver, user);

  return ` https://wa.me/${receiver.phone}?text=${message}`;
};
