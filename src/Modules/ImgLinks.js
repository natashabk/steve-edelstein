const url = "https://res.cloudinary.com/badgerdad/image";
let ids = [];
let i;

for (i = 1; i < 25; i++) ids.push(i.toString());

const imgLinks = {
  birds1: ids.map(id => `${url}/upload/Birds1/${id}.jpg`),
  birds2: ids.map(id => `${url}/upload/Birds2/${id}.jpg`),
  street1: ids.map(id => `${url}/upload/Street1/${id}.jpg`),
  street2: ids.map(id => `${url}/upload/Street2/${id}.jpg`),
}

export default imgLinks;
