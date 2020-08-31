/* eslint-disable import/prefer-default-export */

const getFirstName = (name) => name.split(' ')[0];

const getGarmentsText = (garments) => garments.map((garment) => garment.name).join(', ');

const messageBuilder = (userGarments, receiverGarments, receiver, user) => {
  const myGarmentsText = getGarmentsText(userGarments);
  const theirGarmentsText = getGarmentsText(receiverGarments);

  const isPlural = (things, letter = 's') => (things.length > 1 ? letter : '');

  return `✨ Hola, ${getFirstName(receiver.fullName)}! Soy ${getFirstName(user.fullName)}. Vi que hicimos match en Clothify App 🤩. Te gusta${isPlural(userGarments, 'n')} mi${isPlural(userGarments)} prenda${isPlural(userGarments)}: ${myGarmentsText}. Y a mi me gusta${isPlural(receiverGarments, 'n')} tu${isPlural(receiverGarments)} prenda${isPlural(receiverGarments)}: ${theirGarmentsText}. ¿Te parece si cambiamos? ☺️`;
};

export const urlGenerator = (match, userId) => {
  const userGarments = match.garments.filter((garment) => garment.userId === userId);
  const receiverGarments = match.garments.filter((garment) => garment.userId !== userId);
  const receiver = match.firstUser._id === userId ? match.secondUser : match.firstUser;
  const user = match.firstUser._id === userId ? match.firstUser : match.secondUser;
  const message = messageBuilder(userGarments, receiverGarments, receiver, user);

  return ` https://wa.me/${receiver.phone}?text=${message}`;
};
